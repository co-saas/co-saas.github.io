// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EmailForm from "./EmailForm";
import { TextSecondary } from "@/components/reusable/Text";

export default function Hero() {
  return (
    <section className="text-center py-20 mt-16">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Trova collaboratori o unisciti a progetti innovativi 🚀
      </motion.h1>
      <p className="text-gray-800 text-lg mt-4">
        Sei un founder con un’idea ambiziosa? O un talento in cerca di un progetto stimolante? <br /> <span className="font-semibold">CoSaaS ti connette con le persone giuste</span> per trasformare le idee in realtà. <br />
      </p>
      <div className="mt-8 flex justify-center">
        <EmailForm />
      </div>
    </section>
  );
}
