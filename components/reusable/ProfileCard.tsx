"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  children: React.ReactNode;
  title: string;
}

export default function ProfileCard({title, children}: ProfileCardProps) {
  return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-100">
            <CardHeader >
              <CardTitle className="text-primary text-xl text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
          </Card>
        </motion.div>
        );
}
