import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online retail solution with payment integration and inventory management",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development"
    },
    {
      title: "Brand Identity Redesign",
      description: "Complete brand overhaul including logo, style guide, and marketing materials",
      tech: ["Figma", "Illustrator", "Brand Strategy"],
      category: "Branding & Design"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics and monitoring platform with real-time data visualization",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      category: "UI/UX Design"
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial application with biometric authentication and transaction tracking",
      tech: ["React Native", "Node.js", "MongoDB", "AWS"],
      category: "Mobile Development"
    },
    {
      title: "SEO Campaign Success",
      description: "180% increase in organic traffic through strategic content and technical optimization",
      tech: ["SEO Strategy", "Content Marketing", "Analytics"],
      category: "Digital Marketing"
    },
    {
      title: "Enterprise CRM System",
      description: "Custom relationship management platform with workflow automation",
      tech: ["Spring Boot", "React", "MySQL", "Docker"],
      category: "Backend Development"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real projects. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-smooth cursor-pointer animate-fade-in border-border overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
