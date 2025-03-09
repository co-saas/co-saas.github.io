// components/Pricing.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/reusable/SectionTitle";
import ProfileCard from "@/components/reusable/ProfileCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center">
      <SectionTitle primaryText="Scopri" secondaryText="i prezzi" />

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ProfileCard title="Collaboratore">
            <p className="text-gray-800">Profilo gratuito + premium a <strong>€3.99/mese</strong></p>
        </ProfileCard>
        <ProfileCard title="Owner">
            <p className="text-gray-800">Pubblica il tuo progetto per soli <strong>€4.99</strong></p>
        </ProfileCard>
      </div>
    </section>
  );
}
