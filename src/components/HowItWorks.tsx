import bookingIcon from "@/assets/feature-booking.png";
import paymentIcon from "@/assets/feature-payment.png";
import trackingIcon from "@/assets/feature-tracking.png";

const steps = [
  {
    number: "01",
    title: "Sign Up & Verify",
    description: "Register with your university email to unlock subsidized student fares.",
    image: bookingIcon
  },
  {
    number: "02",
    title: "Book Your Ride",
    description: "Choose your route and time from our fixed schedule. Pay securely via M-Pesa.",
    image: paymentIcon
  },
  {
    number: "03",
    title: "Board & Go",
    description: "Show your QR code, grab your guaranteed seat, and enjoy a comfortable ride to campus.",
    image: trackingIcon
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple as{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">1-2-3</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting to campus has never been easier. No waiting, no stress, just hop on and go.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-2xl bg-gradient-hero p-1 shadow-glow">
                  <div className="w-full h-full bg-background rounded-2xl p-8 flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
