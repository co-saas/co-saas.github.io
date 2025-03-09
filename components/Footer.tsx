// components/Footer.tsx
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <footer className="text-center py-10">
      <h2 className="text-xl font-bold text-white">Resta aggiornato su CoSaaS</h2>
      <div className="mt-4 flex justify-center">
        <EmailForm />
      </div>
      <p className="text-gray-500 mt-8 text-sm">© {new Date().getFullYear()} CoSaaS. Tutti i diritti riservati.</p>
    </footer>
  );
}
