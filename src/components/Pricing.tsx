import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Single Ride",
    price: "40",
    period: "per trip",
    description: "Perfect for occasional travel",
    features: [
      "One-way journey",
      "Guaranteed seat",
      "Free Wi-Fi",
      "GPS tracking",
      "M-Pesa payment"
    ]
  },
  {
    name: "Weekly Pass",
    price: "350",
    period: "per week",
    description: "Save KSh 50 every week",
    popular: true,
    features: [
      "Unlimited rides for 7 days",
      "Priority boarding",
      "Free Wi-Fi",
      "GPS tracking",
      "Best value for regular commuters"
    ]
  },
  {
    name: "Monthly Pass",
    price: "1,200",
    period: "per month",
    description: "Maximum savings for serious students",
    features: [
      "Unlimited rides for 30 days",
      "Priority boarding",
      "Free Wi-Fi",
      "GPS tracking",
      "Save up to KSh 400/month"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Affordable Fares{" "}
            <span className="text-secondary">That Don't Change</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing designed for student budgets. No hidden fees, no surge pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${
                tier.popular 
                  ? "border-2 border-primary shadow-glow" 
                  : "border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent rounded-full">
                  <span className="text-sm font-bold text-accent-foreground">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">KSh {tier.price}</span>
                  <span className="text-muted-foreground">/ {tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
