/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react"; // Assicurati di importare LucideProps


type Step = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  text: string;
};

interface TimelineProps {
  steps: Step[];
}


export default function Timeline({ steps }: TimelineProps) {
  const refs = steps.map(() => useRef(null));
  const inViews = refs.map((ref) => useInView(ref, { once: true, margin: "-50px" }));

  return (
    <div className="flex flex-col items-start">

      <ul className="space-y-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const ref = refs[index];
          const isInView = inViews[index];

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
              <p className="text-md font-medium bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-xs">
                {step.text}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
