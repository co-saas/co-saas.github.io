// components/HowItWorks.tsx
"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/reusable/SectionTitle";
import Timeline from "@/components/Timeline";
import ProfileCard from "@/components/reusable/ProfileCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, UserPlus, FileText, CreditCard, Rocket, SearchCheck } from "lucide-react";

const stepsOwner  = [
  { icon: UserPlus, text: "Crea un profilo" },
  { icon: FileText, text: "Compila il form con i dettagli del progetto" },
  { icon: Rocket, text: "Il progetto è pubblicato!" },
  { icon: SearchCheck, text: "Trova collaboratori" },
];

const stepsCollaborator = [
  { icon: UserPlus, text: "Crea un profilo gratuito" },
  { icon: FileText, text: "Compila il form con le tue skill" },
  { icon: SearchCheck, text: "Cerca progetti interessanti" },
  { icon: Rocket, text: "Inizia a collaborare!" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">

      <SectionTitle primaryText="Come" secondaryText="funziona?" />

      <div className="mt-4 max-w-5xl mx-auto">
      <Tabs defaultValue="collaborator" className="w-full">
          <TabsList className="py-6 px-2 mx-auto w-full max-w-lg bg-gray-100">
            <TabsTrigger value="collaborator" className="text-md">Per Collaboratore</TabsTrigger>
            <TabsTrigger value="owner" className="text-md">Per Owner</TabsTrigger>
          </TabsList>
          <TabsContent value="collaborator" className="pt-2 w-full grid md:grid-cols-2 gap-6 md:gap-15">
              <ProfileCard title="🔥 Collaboratore">
                Sei un talento in cerca di un progetto stimolante? Vuoi accrescere le tue skill collaborando con altri talenti brillanti?<br /> <br />
                 Scopri progetti su misura per le tue skill e costruisci il tuo futuro.
              </ProfileCard>
              <Timeline steps={stepsCollaborator} />
          </TabsContent>
          <TabsContent value="owner" className="pt-2 w-full grid md:grid-cols-2 gap-6 md:gap-15">
              <ProfileCard title="💡 Owner">
                Sei un founder con un’idea ambiziosa? un progetto open-source? <br /> <br />                
                Pubblica il tuo progetto e trova collaboratori motivati.
              </ProfileCard>
              <Timeline steps={stepsOwner} className="flex flex-col items-center"/>
          </TabsContent>
      </Tabs>
      </div>

    </section>
  );
}
