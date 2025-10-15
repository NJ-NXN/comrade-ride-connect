import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const brandIdeas = [
  {
    name: "Comrades' Shuttle",
    tagline: "Campus Imefikwa!",
    rationale: "Direct, relatable, and uses Sheng. 'Imefikwa' means 'we've arrived' - perfect for reliability."
  },
  {
    name: "Campus Link",
    tagline: "Jipange, Twendeni!",
    rationale: "'Plan yourself, let's go!' Appeals to organized students who value punctuality."
  },
  {
    name: "RongaiRide",
    tagline: "Fixed Fare, Zero Stress",
    rationale: "Location-specific branding with clear value proposition in English."
  },
  {
    name: "SafeBoda Campus",
    tagline: "Student Fare, Student Care",
    rationale: "Plays on familiar SafeBoda brand while focusing on student community."
  },
  {
    name: "Chap Chap Campus",
    tagline: "Quick, Cheap, Chilled",
    rationale: "'Chap chap' (quickly) in Swahili + three C's that resonate with students."
  }
];

const BrandIdeas = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lightbulb className="w-10 h-10 text-secondary" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Brand Identity{" "}
              <span className="text-primary">Concepts</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Five brand name ideas designed to resonate with Kenyan university students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {brandIdeas.map((brand, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary mb-1">{brand.name}</h3>
                <p className="text-lg font-semibold text-secondary italic">"{brand.tagline}"</p>
              </div>
              <p className="text-sm text-muted-foreground">{brand.rationale}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-primary">Recommended Choice</h3>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Comrades' Shuttle</strong> with the tagline{" "}
              <strong className="text-foreground">"Campus Imefikwa!"</strong> is the strongest option because:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>"Comrades" is universally understood slang for students across Kenyan universities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>"Imefikwa" (we've arrived) communicates reliability and completion in Sheng</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>The name is memorable, easy to say, and builds instant community</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Perfect for word-of-mouth marketing on campus</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandIdeas;
