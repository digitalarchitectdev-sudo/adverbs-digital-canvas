import { Megaphone, Code, Palette, Search, Smartphone, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Performance-driven campaigns that boost visibility, engagement, and ROI across all digital channels.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable websites and applications built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Responsive Design", "E-commerce Solutions", "Custom Web Apps"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and strengthen brand identity.",
      features: ["Wireframing", "Figma Design", "Mockups", "Brand Design"]
    },
    {
      icon: Search,
      title: "SEO & Branding",
      description: "Strategic optimization and brand development that elevates your online presence and authority.",
      features: ["Keyword Research", "Technical SEO", "Brand Strategy", "Content Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
      features: ["iOS Development", "Android Apps", "React Native", "Progressive Web Apps"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust, secure backend systems that power your applications with reliability and performance.",
      features: ["Node.js APIs", "Spring Boot", "Python Django", "Database Design"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-smooth cursor-pointer animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
