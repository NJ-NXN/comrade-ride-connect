import { Shield, Calendar, DollarSign, Wifi, MapPin, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: DollarSign,
    title: "Fixed Fares",
    description: "KSh 40 flat rate. No surprises, no exploitation. Rain or shine, the price stays the same."
  },
  {
    icon: Calendar,
    title: "Reliable Schedule",
    description: "Shuttles leave on time, every time. Plan your day with confidence."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Vetted drivers, maintained vehicles, GPS tracking. Your safety is our priority."
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected, catch up on lectures, or relax with your favorite content during the ride."
  },
  {
    icon: MapPin,
    title: "Convenient Routes",
    description: "Pick-up points near major hostels, drop-off right at your university gate."
  },
  {
    icon: Users2,
    title: "Comrades Community",
    description: "A shuttle service made for students, by people who understand the struggle."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Comrades Choose{" "}
            <span className="text-primary">Our Shuttle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for a stress-free commute, all in one service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-soft transition-all hover:-translate-y-1 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
