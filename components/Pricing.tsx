// components/Pricing.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/reusable/SectionTitle";
import ProfileCard from "@/components/reusable/ProfileCard";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Collaboratore",
    price: "Gratis",
    features: [
      "Profilo gratuito",
      "Scopri progetti su cui collaborare",
      "Ricevi proposte di collaborazione",
    ],
  },
  {
    title: "Collaboratore +",
    price: "€3,99/mese",
    features: [
      "Profilo premium",
      "Posizione prioritaria nei risultati",
      "Accesso a opportunità esclusive",
    ],
  },
  {
    title: "Owner",
    price: "€4,99/mese",
    features: [
      "Pubblica progetti",
      "Scopri talenti con cui collaborare",
      "Ricevi proposte di collaborazione",
    ],
  },
];

export function PricingCard({ title, price, features }: PricingCardProps) {
  return (
        <ProfileCard title={title} className="text-center h-full">
            <p className="text-2xl text-gray-800 font-bold text-center mb-6">{price}</p>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-800">
                  <Check className="text-gray-500" />
                  <p>{feature}</p>
                </div>
              ))}
            <Button disabled className="mt-6 w-full">Scopri di più</Button>
        </ProfileCard>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <SectionTitle primaryText="Scopri" secondaryText="i prezzi" />

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
}
