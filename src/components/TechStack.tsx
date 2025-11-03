const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Python Django", category: "Backend" },
    { name: "Figma", category: "Design" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  const categories = ["Frontend", "Backend", "Design", "Database", "Cloud", "DevOps", "Language"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building with the best tools and frameworks in the industry
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <span className="text-2xl font-bold text-accent-foreground">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-smooth">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
