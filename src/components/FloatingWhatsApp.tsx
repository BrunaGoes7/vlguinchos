import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-4 text-accent-foreground font-bold shadow-glow animate-pulse-glow hover:scale-105 transition-transform"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden sm:inline">Chamar Guincho</span>
  </a>
);
