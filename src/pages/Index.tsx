import logo from "@/assets/logo-vl.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import truck3 from "@/assets/truck-3.jpg";
import { CtaButtons } from "@/components/CtaButtons";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, BUSINESS_NAME } from "@/lib/contact";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Wrench,
  MapPin,
  Zap,
  Car,
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  { icon: Car, title: "Carros e SUVs", desc: "Transporte seguro de veículos de passeio em qualquer situação." },
  { icon: Truck, title: "Utilitários e Vans", desc: "Guincho preparado para utilitários leves e médios." },
  { icon: Wrench, title: "Pane Mecânica", desc: "Resgate rápido em casos de pane, falha elétrica ou colisão." },
  { icon: Zap, title: "Bateria e Socorro", desc: "Suporte imediato para chave trancada, pneu furado e mais." },
];

const features = [
  "Guincho rápido e seguro",
  "Atendimento imediato",
  "Profissionais preparados",
  "Suporte dia e noite",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo VL Guinchos" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full ring-2 ring-primary/60" />
            <div className="leading-tight">
              <p className="font-display text-xl sm:text-2xl text-primary font-bold tracking-wide">VL GUINCHOS</p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">Atendimento 24h</p>
            </div>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden md:flex items-center gap-2 font-display text-lg text-primary hover:text-primary-glow transition-colors"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroTruck}
          alt="Guincho VL em ação"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Hazard stripes top/bottom */}
        <div className="absolute top-20 left-0 right-0 h-3 hazard-stripe opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 h-3 hazard-stripe opacity-90" />

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-1.5 text-primary text-sm font-semibold uppercase tracking-wider">
              <Clock className="h-4 w-4" /> Atendimento 24 Horas
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-primary drop-shadow-[0_4px_20px_hsl(48_100%_50%_/_0.4)]">VL</span>{" "}
              <span className="text-foreground">GUINCHOS</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Precisou de guincho? <span className="text-foreground font-semibold">Chame agora.</span> Atendimento rápido, seguro e profissional — dia e noite, em toda a região.
            </p>

            <div className="mt-8">
              <CtaButtons />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-lg">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 sm:py-28 bg-gradient-dark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">Nossos Serviços</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Resgate completo para o seu veículo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Equipamentos modernos e equipe treinada para qualquer emergência na estrada ou na cidade.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl bg-card border border-border p-6 shadow-card hover:border-primary/60 transition-all hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-yellow shadow-glow">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us / stats */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">Por que a VL Guinchos</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Confiança, agilidade e <span className="text-primary">segurança</span> em cada chamado.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Atendemos motoristas, frotistas e seguradoras com pontualidade e cuidado total com o seu veículo. Da partida ao destino, você está em boas mãos.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: "24/7", l: "Disponível" },
                { v: "+500", l: "Resgates" },
                { v: "100%", l: "Seguro" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-card border border-border p-5 text-center">
                  <p className="font-display text-3xl sm:text-4xl text-primary font-bold">{s.v}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {[
                { icon: ShieldCheck, t: "Veículo seguro do início ao fim" },
                { icon: Clock, t: "Resposta em poucos minutos" },
                { icon: MapPin, t: "Atendimento em toda a região" },
              ].map((i) => (
                <div key={i.t} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
                    <i.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">{i.t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={truck1} alt="Guincho VL transportando carro" className="rounded-2xl shadow-card object-cover h-64 w-full col-span-2" loading="lazy" />
            <img src={truck2} alt="Guincho VL com van" className="rounded-2xl shadow-card object-cover h-56 w-full" loading="lazy" />
            <img src={truck3} alt="Guincho VL transportando hatch" className="rounded-2xl shadow-card object-cover h-56 w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 hazard-stripe opacity-10" />
        <div className="container relative">
          <div className="rounded-3xl bg-card border border-primary/30 p-10 sm:p-16 shadow-card text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-yellow shadow-glow mb-6 animate-float">
              <Truck className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight">
              Precisou de guincho? <br />
              <span className="text-primary">Chame agora!</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
              Atendimento rápido • Segurança • Confiança. Estamos a um clique de você.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-dark">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo VL Guinchos" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-display text-lg text-primary font-bold">{BUSINESS_NAME}</p>
              <p className="text-xs text-muted-foreground">Atendimento 24 horas</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} VL Guinchos. Todos os direitos reservados.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
