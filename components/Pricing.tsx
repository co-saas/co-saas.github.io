import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/reusable/SectionTitle";
import ProfileCard from "@/components/reusable/ProfileCard";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const pricingPlans = [
  {
    title: "Collaboratore",
    price: "Gratis",
    discountedPrice: "",
    features: [
      "Profilo gratuito",
      "Scopri progetti su cui collaborare",
      "Ricevi proposte di collaborazione",
    ],
  },
  {
    title: "Collaboratore +",
    price: "€3,99/mese",
    discountedPrice: "",
    features: [
      "Profilo premium",
      "Posizione prioritaria nei risultati",
      "Accesso a opportunità esclusive",
    ],
  },
  {
    title: "Owner",
    price: "€4,99/mese",
    discountedPrice: "Gratis per 3 mesi!",
    features: [
      "Pubblica progetti",
      "Scopri talenti con cui collaborare",
      "Ricevi proposte di collaborazione",
    ],
  },
];


export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <SectionTitle primaryText="Scopri" secondaryText="i prezzi" />

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
        <ProfileCard title={plan.title} key={index}>
            {(plan.discountedPrice) ? (
                <>
                <p className="text-md text-gray-500 font-semibold text-center line-through"> {plan.price} </p>
                <p className="text-2xl text-gray-800 font-bold text-center mb-6 text-lime-700">{plan.discountedPrice}</p>
                </>
            ) : (
                <p className="text-2xl text-gray-800 font-bold text-center mb-6">{plan.price}</p>
            )}
            <Separator className="my-2"/>
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-800">
                  <Check className="text-gray-500" />
                  <p>{feature}</p>
                </div>
              ))}
            <Button disabled className="mt-6 w-full">Scopri di più</Button>
        </ProfileCard>
        ))}
      </div>
    </section>
  );
}
