/* eslint-disable no-unused-vars */
import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
  Waves,
  // Palette,
  HandHeart,
  Truck,
  Shell,
  Landmark,
  ScanText,
  CircleDashed,
} from "lucide-react";

const gallery = [
  {
    title: "Ceramiche blu",
    label: "Smalti, luce, mare",
  },
  {
    title: "Piatti decorativi",
    label: "Oggetti da parete",
  },
  {
    title: "Piccoli doni",
    label: "Regali autentici",
  },
  {
    title: "Vasi e complementi",
    label: "Arredo mediterraneo",
  },
  {
    title: "Maioliche",
    label: "Pattern ischitani",
  },
  {
    title: "Dettagli di bottega",
    label: "Materia e mano",
  },
];

const process = [
  {
    icon: Waves,
    title: "Mare",
    text: "La tavolozza nasce dal blu profondo, dal bianco della calce e dalla luce dell’isola.",
  },
  {
    icon: Sparkles,
    title: "Ispirazione",
    text: "Forme semplici e colori essenziali, pensati per evocare Ischia senza dirlo troppo.",
  },
  {
    icon: HandHeart,
    title: "Lavorazione",
    text: "Ogni pezzo comunica cura, tempo e una manualità che si vede prima ancora di toccare.",
  },
  {
    icon: Truck,
    title: "Oggetto",
    text: "Il risultato è un frammento da portare via: piccolo, elegante, memorabile.",
  },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
        {text}
      </p>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D8B26A] bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#0E4D78] shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", href = "#" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition duration-300";
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={`${base} border border-white/70 bg-white/5 text-white hover:bg-white/15`}
      >
        {children}
      </a>
    );
  }
  if (variant === "light") {
    return (
      <a
        href={href}
        className={`${base} border border-[#0E4D78] bg-transparent text-[#0E4D78] hover:bg-[#0E4D78] hover:text-white`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} bg-[#0E4D78] text-white shadow-[0_18px_50px_rgba(14,77,120,0.22)] hover:-translate-y-0.5 hover:bg-[#0B3F63]`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="bg-[#F8F5EE] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#0E4D78]/10 bg-[#F8F5EE]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E4D78] text-white shadow-lg shadow-[#0E4D78]/15">
              <Waves size={22} />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold text-[#0E4D78]">
                'a Fenestella
              </span>
              <span className="block text-xs tracking-[0.22em] text-slate-500 uppercase">
                Artigianato Ischitano
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 text-sm md:flex">
            <a
              className="rounded-full px-4 py-2 text-slate-600 hover:bg-white hover:text-[#0E4D78]"
              href="#manifesto"
            >
              Manifesto
            </a>
            <a
              className="rounded-full px-4 py-2 text-slate-600 hover:bg-white hover:text-[#0E4D78]"
              href="#borgo"
            >
              Borgo
            </a>
            <a
              className="rounded-full px-4 py-2 text-slate-600 hover:bg-white hover:text-[#0E4D78]"
              href="#collezione"
            >
              Collezione
            </a>
            <a
              className="rounded-full px-4 py-2 text-slate-600 hover:bg-white hover:text-[#0E4D78]"
              href="#visita"
            >
              Visita
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto max-w-7xl px-5 pb-8 pt-6 sm:px-6 lg:px-8"
      >
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[42px] bg-[#0E4D78] text-white shadow-[0_28px_80px_rgba(14,77,120,0.22)]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.20) 0, transparent 16%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0, transparent 18%), linear-gradient(115deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 100%)",
              backgroundSize: "100% 100%, 100% 100%, 44px 44px",
            }}
          />
          <div className="absolute inset-0 opacity-25">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3">
                <Pill>Ischia Ponte</Pill>
                <Pill>Bottega artigiana</Pill>
                <Pill>Ceramica mediterranea</Pill>
              </div>

              <h1 className="mt-8 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
                Ogni oggetto racconta Ischia.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Ceramiche, artigianato e dettagli nati tra il mare, la pietra e
                le tradizioni dell’isola. Una homepage pensata per trasformare
                chi arriva da Google Maps in un visitatore reale.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#visita">
                  Visita la bottega <ArrowRight size={18} />
                </Button>
                <Button href="#manifesto" variant="ghost">
                  Scopri la storia <ChevronRight size={18} />
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-white/88">
                    <MapPin size={18} />
                    <span className="text-sm font-medium">Ischia Ponte</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Nel cuore del borgo storico, vicino al Castello Aragonese.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-white/88">
                    <Clock3 size={18} />
                    <span className="text-sm font-medium">Bottega aperta</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Spazio piccolo, curato, da vivere con calma.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-white/88">
                    <Sparkles size={18} />
                    <span className="text-sm font-medium">Pezzi unici</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Oggetti selezionati per chi cerca autenticità.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-130">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#D8B26A]/30 blur-2xl" />
              <div className="absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-white/15 blur-2xl" />

              <div className="float-slow overflow-hidden rounded-[36px] border-14 border-white bg-[#F8F5EE] shadow-[0_40px_120px_rgba(0,0,0,0.26)]">
                <div className="relative aspect-4/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.92),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(14,77,120,0.14))]" />
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-[#0E4D78]/10">
                    <div className="bg-[linear-gradient(145deg,#fefdf8,#e7f2fb)]" />
                    <div className="bg-[linear-gradient(145deg,#0E4D78,#1C6EA4)]" />
                    <div className="bg-[linear-gradient(145deg,#dfeaf3,#fbf8f1)]" />
                    <div className="bg-[linear-gradient(145deg,#1C6EA4,#0E4D78)]" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <span className="rounded-full border border-white/70 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur">
                        Finestra sul mare
                      </span>
                    </div>

                    <div className="rounded-[28px] border border-white/15 bg-white/12 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0E4D78]">
                          <Landmark size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            La bottega è il prodotto
                          </p>
                          <p className="text-sm text-white/70">
                            Il luogo prima dell’oggetto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section id="manifesto" className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Manifesto"
            title={
              <>
                Non realizziamo souvenir.
                <br />
                Custodiamo frammenti di Ischia.
              </>
            }
            text="La pagina parla come una bottega elegante: poche parole, nessuna confusione, massima identità. Il visitatore deve capire subito dove si trova, cosa trova dentro e perché vale la pena entrare."
            centered
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Shell,
                title: "Mediterraneo",
                text: "Palette chiara, blu marino e dettagli sabbia per richiamare Ischia senza cadere nel folclore.",
              },
              {
                icon: ScanText,
                title: "Editoriale",
                text: "Blocchi ampi, titoli importanti e ritmo visivo pensato come una rivista di design.",
              },
              {
                icon: CircleDashed,
                title: "Autentico",
                text: "Messaggi semplici e diretti: bottega, ceramica, oggetti, borgo, visita reale.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-[#0E4D78]/8 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E4D78]/8 text-[#0E4D78]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#0E4D78]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* BORGO */}
        <section
          id="borgo"
          className="grid gap-10 lg:grid-cols-2 lg:items-stretch"
        >
          {/* LEFT - STORY */}
          <div className="rounded-[40px] bg-[linear-gradient(145deg,#dfeaf3,#f8f5ee)] p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <SectionHeading
                eyebrow="Il borgo"
                title={
                  <>
                    Dove tutto ha
                    <br />
                    origine.
                  </>
                }
                text="‘a Fenestella si trova nel cuore di Ischia Ponte, tra vicoli storici e il Castello Aragonese. Qui il contesto non è sfondo: è parte del prodotto."
              />

              <div className="mt-10 flex flex-wrap gap-3">
                <Pill>Ischia Ponte</Pill>
                <Pill>Vicoli storici</Pill>
                <Pill>Castello Aragonese</Pill>
              </div>
            </div>

            {/* MICRO CTA CONTEXT */}
            <div className="mt-12 rounded-3xl bg-white/60 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Esperienza reale
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Non è solo una bottega: è un punto dentro il borgo che si
                attraversa a piedi.
              </p>
            </div>
          </div>

          {/* RIGHT - EXPERIENCE */}
          <div className="flex flex-col gap-6">
            {/* HERO VIEW */}
            <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(28,110,164,0.18),transparent_20%),radial-gradient(circle_at_78%_18%,rgba(216,178,106,0.36),transparent_18%),linear-gradient(180deg,#0E4D78 0%,#1C6EA4 100%)] p-10 text-white">
                <p className="text-xs text-black uppercase tracking-[0.35em]">
                  Vista dal borgo
                </p>

                <p className="mt-4 font-serif text-black text-4xl leading-[1.05]">
                  Una finestra aperta
                  <br />
                  sul Mediterraneo.
                </p>

                <p className="mt-6 max-w-md text-sm text-black">
                  Tra pietra, mare e luce: tutto quello che vedi qui è a pochi
                  passi dalla bottega.
                </p>
              </div>
            </div>

            {/* MAP + INFO CARD */}
            <div className="grid gap-5 rounded-[32px] border border-[#0E4D78]/10 bg-white p-5 shadow-sm sm:grid-cols-[1.2fr_0.8fr]">
              {/* MAP */}
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.0376472676086!2d13.959191892241467!3d40.73211578793719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b6b2766ffb5b9%3A0x47c87faf808d5ce2!2s'a%20Fenestella%20-%20artigianato%20Ischitano!5e1!3m2!1sit!2sit!4v1781348315431!5m2!1sit!2sit"
                  className="h-64 w-full sm:h-72"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Indirizzo
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#0E4D78]">
                    Via Luigi Mazzella 38
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    80077 Ischia Ponte, Napoli
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Nel cuore del borgo storico, a pochi passi dal Castello
                    Aragonese.
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/Vbcmx7tFNejgEKbW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4D78] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(14,77,120,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0B3F63]"
                >
                  Apri su Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COLLEZIONE */}
        <section id="collezione" className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Collezione"
            title={
              <>
                Porta a casa un
                <br />
                frammento di Ischia.
              </>
            }
            text="Una galleria che funziona bene anche senza foto reali. Quando avrai immagini del negozio o dei prodotti, sostituirai i blocchi astratti con vere preview senza toccare l’architettura del layout."
            centered
          />

          <div className="mt-14 columns-2 gap-5 md:columns-3">
            {gallery.map((item, index) => {
              const tall = index % 3 === 0;
              return (
                <article
                  key={item.title}
                  className={`mb-5 overflow-hidden rounded-[30px] border border-[#0E4D78]/8 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.05)] ${
                    tall ? "aspect-4/5" : "aspect-square"
                  }`}
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#0E4D78] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <Sparkles size={18} className="text-[#1C6EA4]" />
                    </div>

                    <div>
                      <div
                        className={`rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(28,110,164,0.08),rgba(14,77,120,0.12))] ${
                          tall ? "h-44" : "h-28"
                        }`}
                      />
                      <h3 className="mt-5 text-2xl font-semibold text-[#0E4D78]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ARTIGIANATO */}
        <section className="overflow-hidden rounded-[36px] bg-[#0E4D78] text-white px-6 py-20 sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Gli artigiani"
            title={
              <>
                Dietro ogni oggetto
                <br />
                c’è storia.
              </>
            }
            text="Il tono cambia: qui la homepage diventa più intima, quasi manifestaria. È il punto perfetto per raccontare processo, mano e materia con una timeline essenziale."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* VISITA */}
        <section id="visita" className="py-20 sm:py-28">
          <div className="rounded-[40px] border border-[#0E4D78]/10 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <SectionHeading
                eyebrow="Come trovarci"
                title={
                  <>
                    Vieni a trovarci
                    <br />
                    nel borgo.
                  </>
                }
                text="Qui la conversione è semplice: fai capire subito dove sei, quando puoi entrare e come raggiungere la bottega. Per un turista questo è il blocco più importante della pagina."
              />

              <div className="rounded-[30px] bg-[linear-gradient(145deg,#f8f5ee,#eaf2f8)] p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-[#0E4D78]" size={18} />
                    <div>
                      <p className="font-semibold text-[#0E4D78]">
                        Via Luigi Mazzella 38
                      </p>
                      <p className="text-sm text-slate-600">
                        80077 Ischia Ponte, Napoli
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 text-[#0E4D78]" size={18} />
                    <div>
                      <p className="font-semibold text-[#0E4D78]">
                        081 708 1860
                      </p>
                      <p className="text-sm text-slate-600">Telefono negozio</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 text-[#0E4D78]" size={18} />
                    <div>
                      <p className="font-semibold text-[#0E4D78]">Orari</p>
                      <p className="text-sm text-slate-600">
                        Tutti i giorni 11:00–13:30
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.app.goo.gl/Vbcmx7tFNejgEKbW9"
                    variant="primary"
                    target="_blank"
                  >
                    <Button>Apri Maps</Button>
                  </a>
                  <Button href="tel:+390817081860" variant="light">
                    Chiama
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pb-8">
          <div className="rounded-[40px] bg-[#0E4D78] px-6 py-16 text-center text-white sm:px-10 lg:px-16">
            <p className="mx-auto max-w-4xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Realizzato tra il mare di Ischia, le mani degli artigiani e il
              tempo necessario a fare le cose bene.
            </p>
            <p className="mt-10 text-sm uppercase tracking-[0.28em] text-white/70">
              'a Fenestella · Artigianato Ischitano
            </p>
            <p className="mt-10 text-sm uppercase tracking-[0.28em] text-white/70">
              p.iva 09201441210 - A FENESTELLA DI DI MEGLIO FILOMENA - REA
              1016482
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
