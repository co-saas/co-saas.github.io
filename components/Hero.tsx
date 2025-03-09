// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import EmailForm from "./EmailForm";

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
        CoSaaS ti <span className="font-semibold">connette con le persone giuste</span> per trasformare le idee in realtà. <br /> Scopri tanti progetti, tutti italiani 🇮🇹 , su cui collaborare.
      </p>
      <div className="mt-8 flex justify-center">
        <EmailForm />
      </div>
    </section>
  );
}
