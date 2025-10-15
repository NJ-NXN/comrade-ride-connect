import { Card } from "@/components/ui/card";
import { Target, Users, DollarSign, TrendingUp } from "lucide-react";

const Strategy = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Go-to-Market{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Strategy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A lean, student-focused approach to launching and scaling the service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Launch Strategy</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span><strong className="text-foreground">Campus Ambassadors:</strong> Recruit 2-3 influential students per university. Give them free rides to promote the service.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span><strong className="text-foreground">Student Union Partnerships:</strong> Collaborate with official student bodies for endorsement and reach.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span><strong className="text-foreground">Social Media Blitz:</strong> TikTok videos showing the matatu struggle vs. Comrades' Shuttle experience. Instagram stories with real testimonials.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span><strong className="text-foreground">WhatsApp Groups:</strong> Target hostel and class WhatsApp groups with exclusive launch offers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Marketing Tactics</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Launch Week Promo:</strong> First 100 students get 50% off their first month.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Referral System:</strong> "Bring a comrade, earn a free ride" - viral growth mechanism.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Content Marketing:</strong> Create relatable memes about the Rongai matatu experience.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Physical Presence:</strong> Branded merchandise (t-shirts, stickers) distributed at campus events.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Monetization Model</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span><strong className="text-foreground">Core Revenue:</strong> Fare collection with volume-based profitability (aim for 80% shuttle occupancy).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span><strong className="text-foreground">In-App Advertising:</strong> Partner with student-focused brands (Safaricom, bookstores, food delivery).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span><strong className="text-foreground">Data Insights:</strong> Anonymized student mobility data for urban planning or market research (ethically sold).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span><strong className="text-foreground">Premium Features:</strong> Priority booking, express routes for slightly higher fares.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Sustainability & Scale</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Subsidies:</strong> Seek partnerships with universities or government transport programs for student subsidies.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Off-Peak Usage:</strong> Offer charter services to corporates or events during non-school hours.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Expansion:</strong> Replicate model in other student-heavy areas (Kikuyu, Ruaka, Ngong).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong className="text-foreground">Tech Licensing:</strong> License the platform to other transport operators in different cities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
