import { useQuery } from "@tanstack/react-query";

export interface ProductionData {
  nameOfProduction?: string;
  nameOfCharacter?: string;
  position?: string;
  location?: string;
  date?: string;
  time?: string;
  linkToSite?: string;
  subtitle?: string;
  description?: string;
}

interface UseGoogleSheetPublishedOptions {
  sheetUrl: string; // Full URL to the published Google Sheet CSV
  enabled?: boolean;
}

export const useGoogleSheetPublished = ({
  sheetUrl,
  enabled = true,
}: UseGoogleSheetPublishedOptions) => {
  return useQuery<ProductionData[]>({
    queryKey: ["googleSheetPublished", sheetUrl],
    queryFn: async () => {
      const response = await fetch(sheetUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
      }

      const csvText = await response.text();

      // Parse CSV
      const lines = csvText.split("\n").filter((line) => line.trim() !== "");

      if (lines.length === 0) {
        return [];
      }

      const parseCSVLine = (line: string): string[] => {
        const result: string[] = [];
        let current = "";
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];

          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }
        result.push(current.trim());

        return result;
      };

      const headers = parseCSVLine(lines[0]).map((h: string) =>
        h
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/[^a-z0-9]/g, "")
      );

      const headerMap: Record<string, keyof ProductionData> = {
        nameofproduction: "nameOfProduction",
        production: "nameOfProduction",
        nameofcharacter: "nameOfCharacter",
        character: "nameOfCharacter",
        position: "position",
        location: "location",
        date: "date",
        time: "time",
        linktosite: "linkToSite",
        link: "linkToSite",
        site: "linkToSite",
        subtitle: "subtitle",
        description: "description",
      };

      const rows = lines.slice(1).map((line: string) => {
        const row = parseCSVLine(line);
        const obj: ProductionData = {};

        headers.forEach((header: string, index: number) => {
          const fieldName = headerMap[header];
          if (fieldName && row[index]) {
            obj[fieldName] = row[index].trim();
          }
        });

        return obj;
      });

      return rows.filter((row: ProductionData) =>
        Object.values(row).some((value) => value && value.trim() !== "")
      );
    },
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
};
