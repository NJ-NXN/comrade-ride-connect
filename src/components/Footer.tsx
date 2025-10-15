import { Bus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Bus className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Comrades' Shuttle</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Campus Imefikwa! • Launching Soon in Rongai
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2025 Comrades' Shuttle. Built for students, by people who understand the hustle.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
