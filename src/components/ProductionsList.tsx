import {
  useGoogleSheetPublished,
  ProductionData,
} from "@/hooks/useGoogleSheetPublished";

const formatDate = (dateStr: string) => {
  if (!dateStr) return { month: "", day: "" };
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    // Try to parse "April 12 2025" style
    const parts = dateStr.split(" ");
    if (parts.length >= 2) {
      const month = parts[0].slice(0, 3).toUpperCase();
      const day = parts[1].replace(",", "");
      return { month, day };
    }
    return { month: "", day: dateStr };
  }
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = String(d.getDate());
  return { month, day };
};

const ProductionsList = () => {
  const { data, isLoading, error } = useGoogleSheetPublished({
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJMpt4UkyxjmQfeVYOfQtj9PrjnlIgR_lrW1V7LyqMxX98LnCsSXV3lJ1nQZoBEr_EsrgKzrFJw29W/pub?output=csv",
  });

  if (isLoading) {
    return (
      <section id="performances" className="container mx-auto px-4 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-light">
          Loading shows...
        </p>
      </section>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <section id="performances" className="container mx-auto px-4 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-light">
          {error ? "Could not load shows." : "No upcoming shows."}
        </p>
      </section>
    );
  }

  return (
    <section id="performances" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 font-light mb-16">
          Shows
        </p>

        <div className="w-full border-t border-foreground/10">
          {data.map((production: ProductionData, index: number) => {
            const { month, day } = formatDate(production.date || "");
            return (
              <div
                key={index}
                className="group flex items-center gap-6 md:gap-12 py-6 border-b border-foreground/10 hover:bg-white/[0.03] transition-colors duration-200 px-2"
              >
                {/* Date */}
                <div className="flex-shrink-0 w-16 text-center hidden sm:block">
                  <div className="text-xs uppercase tracking-widest text-foreground/60 font-light leading-none mb-1">
                    {month}
                  </div>
                  <div className="text-2xl font-light text-foreground leading-none">
                    {day}
                  </div>
                </div>

                {/* Show name + venue */}
                <div className="flex-1 min-w-0">
                  <div className="text-base md:text-lg font-light text-foreground truncate">
                    {production.nameOfProduction}
                    {production.subtitle && (
                      <span className="text-foreground/60 ml-2 text-sm font-light">
                        — {production.subtitle}
                      </span>
                    )}
                  </div>
                  {production.location && (
                    <div className="text-xs uppercase tracking-widest text-foreground/60 font-light mt-1">
                      {production.location}
                      {production.time && (
                        <span className="ml-4">{production.time}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Ticket link */}
                <div className="flex-shrink-0">
                  {production.linkToSite ? (
                    <a
                      href={production.linkToSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-light border border-foreground/30 text-foreground/80 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-200"
                    >
                      Tickets
                    </a>
                  ) : (
                    <span className="text-xs uppercase tracking-widest font-light text-foreground/60 px-4 py-2">
                      Free
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductionsList;
