import { Clock, TrendingUp, AlertTriangle, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Endless Waiting",
    description: "Matatus leave when they're full, not when you need them. Hours wasted waiting, lectures missed."
  },
  {
    icon: TrendingUp,
    title: "Price Exploitation",
    description: "KSh 50 becomes KSh 150 when it rains or during rush hour. Your budget can't keep up."
  },
  {
    icon: AlertTriangle,
    title: "Safety Concerns",
    description: "Overcrowding, reckless driving, and the constant worry about your laptop and belongings."
  },
  {
    icon: Users,
    title: "Daily Stress",
    description: "The Rongai traffic jam combined with unpredictable matatus drains your energy before class even starts."
  }
];

const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Daily{" "}
            <span className="text-primary">Matatu Struggle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every Rongai comrade knows the pain. It's time for a better way to get to campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-soft transition-shadow bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
