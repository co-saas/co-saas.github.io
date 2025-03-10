// components/Footer.tsx
import EmailForm from "./EmailForm";
import SectionTitle from "@/components/reusable/SectionTitle";

export default function Footer() {
  return (
    <footer id="footer" className="text-center py-10">
      <SectionTitle primaryText="Inserisci la tua email" secondaryText="e ti contatteremo al più presto"/>
      <div className="mt-4 flex justify-center">
        <EmailForm />
      </div>
      <p className="text-gray-500 mt-8 text-sm">© {new Date().getFullYear()} CoSaaS. Tutti i diritti riservati.</p>
    </footer>
  );
}
