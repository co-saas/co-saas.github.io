// components/Timeline.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, UserPlus, FileText, CreditCard, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, text: "Crea un profilo" },
  { icon: FileText, text: "Compila il form con i dettagli" },
  { icon: CreditCard, text: "Paga la fee (€4.99)" },
  { icon: Rocket, text: "Il progetto è pubblicato!" },
];

export default function Timeline({steps}: array) {
  return (
    <div className="flex flex-col items-start">
      {/* Linea verticale */}

      <ul className="space-y-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-50px" });

          return (
            <motion.li
              key={index}
              ref={ref}
              className="relative flex items-center my-2 gap-4"
              initial={{ opacity: 0, x: +20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icona */}
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-800 rounded-full shadow-xs">
                <Icon className="w-5 h-5" />
              </div>

              {/* Testo Step */}
              <p className="text-md font-medium bg-gray-100 text-gray-800  px-4 py-2 rounded-lg shadow-xs">
                {step.text}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
