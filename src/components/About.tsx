import { Award, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth and innovation."
    },
    {
      icon: Award,
      title: "Our Expertise",
      description: "Comprehensive services spanning design, development, and marketing with proven results."
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Client-focused strategies that combine creativity with technical excellence for maximum impact."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About AdVerse
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a full-service digital agency specializing in transforming businesses through innovative web development, strategic marketing, and exceptional design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
