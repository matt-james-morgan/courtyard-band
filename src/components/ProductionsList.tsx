import {
  useGoogleSheetPublished,
  ProductionData,
} from "@/hooks/useGoogleSheetPublished";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const ProductionsList = () => {
  const { data, isLoading, error } = useGoogleSheetPublished({
    sheetUrl:
      "YOUR_GOOGLE_SHEET_CSV_URL_HERE",
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-lg text-muted-foreground">
            Loading productions...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>
              {error instanceof Error ? error.message : "Unknown error"}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center text-muted-foreground">
          No productions found.
        </div>
      </div>
    );
  }

  const production = data[0];
  console.log(production);
  return (
    <section id="performances" className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-start gap-8">
        {data.length === 1 ? (
          <Card className="w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <CardHeader className="text-left">
                  <div className="flex items-center justify-start gap-3 mb-2">
                    <CalendarDays className="w-6 h-6 text-primary" />
                    {production.nameOfProduction && (
                      <CardTitle className="text-2xl">
                        {production.nameOfProduction}
                      </CardTitle>
                    )}
                  </div>
                  {production.subtitle && (
                    <CardDescription className="text-left">
                      {production.subtitle}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  {production.nameOfCharacter && (
                    <div className="text-foreground">
                      {production.nameOfCharacter}
                    </div>
                  )}
                  {production.position && (
                    <div className="text-foreground">{production.position}</div>
                  )}
                  {production.location && (
                    <div className="text-foreground">{production.location}</div>
                  )}
                  {(production.date || production.time) && (
                    <div className="text-foreground">
                      {[production.date, production.time]
                        .filter(Boolean)
                        .join(" ")}
                    </div>
                  )}
                </CardContent>
                {production.linkToSite && (
                  <CardFooter className="justify-start">
                    <a
                      href={production.linkToSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Visit Site →
                    </a>
                  </CardFooter>
                )}
              </div>
              {production.description && (
                <div className="flex-1 md:border-l md:pl-6">
                  <div className="p-6">
                    <p className="text-foreground text-left leading-relaxed">
                      {production.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-left">
              Shows
            </h2>
            <div className="flex flex-col gap-6 w-full">
              {data.map((production: ProductionData, index: number) => (
                <Card
                  key={index}
                  className="w-full hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <CardHeader className="text-left">
                        <div className="flex items-center justify-start gap-3 mb-2">
                          <CalendarDays className="w-6 h-6 text-primary" />
                          {production.nameOfProduction && (
                            <CardTitle className="text-2xl">
                              {production.nameOfProduction}
                            </CardTitle>
                          )}
                        </div>
                        {production.subtitle && (
                          <CardDescription className="text-left">
                            {production.subtitle}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-2 text-left">
                        {production.nameOfCharacter && (
                          <div className="text-foreground">
                            {production.nameOfCharacter}
                          </div>
                        )}
                        {production.position && (
                          <div className="text-foreground">
                            {production.position}
                          </div>
                        )}
                        {production.location && (
                          <div className="text-foreground">
                            {production.location}
                          </div>
                        )}
                        {(production.date || production.time) && (
                          <div className="text-foreground">
                            {[production.date, production.time]
                              .filter(Boolean)
                              .join(" ")}
                          </div>
                        )}
                      </CardContent>
                      {production.linkToSite && (
                        <CardFooter className="justify-start">
                          <a
                            href={production.linkToSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium text-sm"
                          >
                            Visit Site →
                          </a>
                        </CardFooter>
                      )}
                    </div>
                    {production.description && (
                      <div className="flex-1 md:border-l md:pl-6">
                        <div className="p-6">
                          <p className="text-foreground text-left leading-relaxed">
                            {production.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductionsList;
