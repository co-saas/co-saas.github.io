// components/EmailForm.tsx
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  return (
  <div className="flex flex-col gap-2 w-full md:max-w-lg">
    <p className="text-gray-500">
    🔗 Iscriviti ora e scopri nuove opportunità!
    </p>
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="flex flex-col md:flex-row gap-2 w-full mx-auto"
    >
      <Input
        type="email"
        name="email"
        placeholder="Inserisci la tua email"
        className="flex-1"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="primary" >
        Invia
      </Button>
    </form>
    </div>
  );
}
