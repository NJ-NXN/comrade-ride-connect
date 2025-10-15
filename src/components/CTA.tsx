import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to End the Matatu Madness?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join the waitlist and be among the first to experience stress-free campus commutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your university email"
              className="bg-primary-foreground text-foreground flex-1"
            />
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-4">
            Launching soon in Rongai. Be the first to know when we go live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
