import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaButtonsProps {
  size?: "default" | "lg";
  className?: string;
}

export const CtaButtons = ({ size = "lg", className = "" }: CtaButtonsProps) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
    <Button
      asChild
      size={size}
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg shadow-glow animate-pulse-glow"
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp Agora
      </a>
    </Button>
    <Button
      asChild
      size={size}
      variant="outline"
      className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground font-bold text-base sm:text-lg"
    >
      <a href={`tel:${PHONE_TEL}`}>
        <Phone className="mr-2 h-5 w-5" />
        {PHONE_DISPLAY}
      </a>
    </Button>
  </div>
);
