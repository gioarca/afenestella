import React from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Waves,
  ChevronRight,
  Clock3,
  ShieldCheck,
  Palette,
  HandHeart,
  Truck,
  Diamond,
} from "lucide-react";

const highlights = [
  {
    title: "Ceramiche e oggetti d’arredo",
    text: "Pezzi selezionati con un’estetica pulita, mediterranea e artigianale.",
    icon: Palette,
  },
  {
    title: "Lavorazione manuale",
    text: "Ogni dettaglio comunica materia, pazienza e tradizione ischitana.",
    icon: HandHeart,
  },
  {
    title: "Spirito da vetrina boutique",
    text: "Una homepage pensata per raccontare il negozio in modo elegante e immediato.",
    icon: Diamond,
  },
];

const products = [
  {
    name: "Piatti decorativi",
    desc: "Forme essenziali, smalti lucidi, richiami marini.",
  },
  {
    name: "Vasi e piccoli complementi",
    desc: "Oggetti da esposizione per ambienti moderni o classici.",
  },
  {
    name: "Regali artigianali",
    desc: "Idee da portare via con un packaging semplice e curato.",
  },
];

const steps = [
  {
    title: "Scopri la collezione",
    text: "Esplora una selezione di pezzi in stile ischitano, con tono sobrio e autentico.",
    icon: Sparkles,
  },
  {
    title: "Entra in negozio",
    text: "Una vetrina digitale che guida il visitatore verso l’esperienza fisica.",
    icon: MapPin,
  },
  {
    title: "Porta a casa un pezzo unico",
    text: "La pagina enfatizza unicità, artigianalità e memoria del territorio.",
    icon: Truck,
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-900 shadow-sm backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-sky-500" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {text}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_26%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_45%,_#eef7ff_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Top bar */}
        <header className="flex flex-col gap-4 rounded-4xl border border-sky-100 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-200">
              <Waves size={24} />
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">
                'a Fenestella
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Artigianato Ischitano · bozza vetrina Vite + JSX
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <a
              className="rounded-full px-3 py-2 hover:bg-sky-50 hover:text-sky-700"
              href="#collezione"
            >
              Collezione
            </a>
            <a
              className="rounded-full px-3 py-2 hover:bg-sky-50 hover:text-sky-700"
              href="#storia"
            >
              Storia
            </a>
            <a
              className="rounded-full px-3 py-2 hover:bg-sky-50 hover:text-sky-700"
              href="#visita"
            >
              Visita
            </a>
          </nav>
        </header>

        {/* Hero */}
        <main className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="relative overflow-hidden rounded-[2.25rem] border border-sky-100 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-size:[42px_42px]" />
            <div className="relative z-10 flex flex-wrap gap-3">
              <Badge>Ischia Ponte</Badge>
              <Badge>White · Blue · Ceramic mood</Badge>
              <Badge>Vetrina boutique</Badge>
            </div>

            <div className="relative z-10 mt-8 max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Una vetrina digitale pulita, luminosa e ispirata alla ceramica
                ischitana.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Questa bozza mette al centro la materia, il bianco delle
                superfici, il blu del mare e l’idea di un laboratorio elegante.
                L’obiettivo è far percepire il negozio come un luogo autentico,
                raffinato e facile da esplorare.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#collezione"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Scopri la collezione <ArrowRight size={18} />
                </a>
                <a
                  href="#visita"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white px-6 py-3.5 font-medium text-sky-800 transition hover:bg-sky-50"
                >
                  Contatti e visita <ChevronRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-sky-100 bg-sky-50/70 p-5 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Right panel */}
          <aside className="grid gap-6">
            <div className="rounded-4xl border border-sky-100 bg-linear-to-br from-sky-600 to-blue-700 p-6 text-white shadow-[0_24px_60px_rgba(37,99,235,0.24)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-100">
                    Atmosfera
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Eleganza mediterranea
                  </h2>
                </div>
                <div className="rounded-2xl bg-white/15 p-3">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Toni", "Bianco e blu"],
                  ["Materiali", "Ceramica, creta, dettagli artigianali"],
                  ["Stile", "Pulito e contemporaneo"],
                  ["Obiettivo", "Trasformare il negozio in esperienza"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-sky-100">
                      {k}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-sky-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                  <Star size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Focus visivo
                  </p>
                  <p className="text-sm text-slate-500">
                    Modulare, morbido, premium
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-dashed border-sky-200 bg-[linear-gradient(135deg,rgba(224,242,254,0.8),rgba(255,255,255,0.95))] p-5">
                <div className="flex items-center gap-3 text-sky-800">
                  <Clock3 size={18} />
                  <span className="text-sm font-medium">
                    Bozza pronta per iterazioni rapide
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Puoi sostituire facilmente testi, immagini, logo e CTA senza
                  toccare la struttura.
                </p>
              </div>
            </div>
          </aside>
        </main>

        {/* Content sections */}
        <section
          id="storia"
          className="mt-6 rounded-[2.25rem] border border-sky-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"
        >
          <SectionTitle
            eyebrow="Storia e identità"
            title="Raccontare il negozio senza appesantire la pagina"
            text="La struttura privilegia spazi ampi, titoli netti e blocchi informativi molto leggibili. Il risultato è una homepage che resta elegante anche su mobile."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Autenticità",
                text: "Messaggio chiaro: non un e-commerce generico, ma un luogo con una storia precisa.",
              },
              {
                icon: Waves,
                title: "Territorio",
                text: "Il blu richiama il mare di Ischia e dà continuità al linguaggio visivo.",
              },
              {
                icon: HandHeart,
                title: "Artigianalità",
                text: "Le card e i riquadri sembrano pezzi esposti in una piccola galleria.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-sky-100 bg-sky-50/60 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="collezione"
          className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[2.25rem] border border-sky-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Collezione"
              title="Tre blocchi semplici per vendere meglio"
              text="La pagina può essere estesa con foto prodotto, descrizioni brevi e un mini catalogo. Qui la base è volutamente essenziale."
            />

            <div className="mt-8 space-y-4">
              {products.map((product, idx) => (
                <div
                  key={product.name}
                  className="flex gap-4 rounded-3xl border border-sky-100 bg-sky-50/50 p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                    <span className="text-sm font-semibold">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.25rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(239,246,255,0.95))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Ceramica smaltata",
                "Motivi marini",
                "Oggetti da regalo",
                "Complementi d’arredo",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[1.75rem] border border-sky-100 bg-white p-5 text-sm font-medium text-sky-900 shadow-sm"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-4xl border border-sky-100 bg-white p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-sky-500">
                Visual direction
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Molto bianco, molto respiro, pochi fronzoli.
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                La texture a griglia richiama le piastrelle ceramiche, mentre i
                gradienti soft danno profondità senza appesantire.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5">
                  Tailwind CSS
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5">
                  Vite.js
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5">
                  JSX
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5">
                  Responsive
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2.25rem] border border-sky-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <SectionTitle
            eyebrow="Come funziona"
            title="Una struttura facile da rifinire"
            text="Il layout è già suddiviso in blocchi: hero, identità, collezione, visita e CTA finale. È pensato per essere ripulito, ridotto o ampliato senza riscrivere tutto."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-sky-100 bg-sky-50/50 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-sky-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="visita"
          className="mt-6 overflow-hidden rounded-[2.25rem] border border-sky-100 bg-linear-to-br from-sky-700 via-blue-700 to-sky-800 p-6 text-white shadow-[0_30px_80px_rgba(37,99,235,0.24)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-100">
                Visita e contatto
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Pronta per una versione finale con foto, testi e bottoni reali.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-sky-100/90">
                Inserisci qui indirizzo, telefono, orari e link alle mappe. La
                pagina è già impostata per diventare una vetrina vera, non solo
                un mockup.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-sky-50/95">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                  <MapPin size={14} /> Ischia, Via Luigi Mazzella 38
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                  <Phone size={14} /> Telefono da inserire
                </span>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 text-slate-900 shadow-2xl shadow-sky-950/20">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">CTA finale</p>
                  <p className="text-sm text-slate-500">
                    Doppia azione: visita o contatto
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl bg-sky-600 px-4 py-3 font-medium text-white"
                >
                  Apri su Google Maps <ArrowRight size={18} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-sky-200 bg-white px-4 py-3 font-medium text-sky-800"
                >
                  Chiama il negozio <Phone size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
