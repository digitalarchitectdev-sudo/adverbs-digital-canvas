import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="hero"
            className="rounded-full shadow-hover hover:scale-110 transition-smooth px-6 py-6"
          >
            <MessageSquare className="mr-2" />
            Get Quote
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingCTA;
