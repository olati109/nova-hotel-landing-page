import { useState, useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20uma%20reserva%20no%20NOVA%20Hotel.";

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 100,
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        transition: "transform 0.25s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08)" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const rooms = [
  {
    name: "Suíte Clássica",
    desc: "Espaço intimamente projetado com vistas para os jardins internos, cama king-size e banheiro revestido em mármore travertino.",
    size: "45 m²",
    img: "https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5?w=900&h=1100&fit=crop&auto=format",
    tag: "Mais popular",
  },
  {
    name: "Suíte Panorâmica",
    desc: "Janelas do chão ao teto com vistas deslumbrantes. Terraço privativo, sala de estar separada e banheira de imersão.",
    size: "68 m²",
    img: "https://images.unsplash.com/photo-1761039265583-9489b4246454?w=900&h=1100&fit=crop&auto=format",
    tag: "Com terraço",
  },
  {
    name: "Suíte Presidencial",
    desc: "Nossa acomodação mais exclusiva. Dois quartos, sala de jantar privativa e butler service disponível 24 horas.",
    size: "120 m²",
    img: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?w=900&h=1100&fit=crop&auto=format",
    tag: "Exclusiva",
  },
  {
    name: "Loft Contemporâneo",
    desc: "Pé direito duplo com mezanino. Ideal para quem busca uma estética diferente, sem abrir mão do conforto total.",
    size: "55 m²",
    img: "https://images.unsplash.com/photo-1775866914767-7e4646f2481a?w=900&h=1100&fit=crop&auto=format",
    tag: "Design",
  },
];

const experiences = [
  {
    title: "Restaurante Éden",
    desc: "Gastronomia autoral com ingredientes sazonais e locais. Ambiente íntimo, carta de vinhos cuidadosamente selecionada.",
    img: "https://images.unsplash.com/photo-1643101570532-88c8ecc07c1f?w=600&h=760&fit=crop&auto=format",
  },
  {
    title: "Piscina Infinity",
    desc: "Piscina aquecida com borda infinita, espreguiçadeiras e serviço de bebidas do amanhecer ao anoitecer.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=760&fit=crop&auto=format",
  },
  {
    title: "Spa NOVA",
    desc: "Tratamentos personalizados com produtos naturais. Sauna finlandesa, banho turco e sala de relaxamento silenciosa.",
    img: "https://images.unsplash.com/photo-1758632031161-b6d7e913c2b9?w=600&h=760&fit=crop&auto=format",
  },
  {
    title: "Café da Manhã",
    desc: "Preparado artesanalmente a cada manhã. Frutas frescas da estação, pães da casa e opções à la carte.",
    img: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=600&h=760&fit=crop&auto=format",
  },
];

const galleryImages = [
  { img: "https://images.unsplash.com/photo-1762417422532-7bdaaf7d457a?w=1400&h=900&fit=crop&auto=format", alt: "NOVA Hotel à noite" },
  { img: "https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5?w=900&h=900&fit=crop&auto=format", alt: "Suíte Clássica" },
  { img: "https://images.unsplash.com/photo-1643101570532-88c8ecc07c1f?w=900&h=900&fit=crop&auto=format", alt: "Restaurante Éden" },
  { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&h=900&fit=crop&auto=format", alt: "Piscina Infinity" },
  { img: "https://images.unsplash.com/photo-1761039265583-9489b4246454?w=900&h=900&fit=crop&auto=format", alt: "Suíte Panorâmica" },
  { img: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=900&h=900&fit=crop&auto=format", alt: "Café da Manhã" },
];

const faqs = [
  {
    q: "Qual o horário de check-in e check-out?",
    a: "Check-in a partir das 15h e check-out até as 12h. Early check-in e late check-out podem ser solicitados mediante disponibilidade, sem custo adicional sempre que possível.",
  },
  {
    q: "O café da manhã está incluso?",
    a: "Sim. O café da manhã artesanal está incluído em todas as reservas. Servido das 7h às 11h no Restaurante Éden ou, mediante solicitação, diretamente no quarto.",
  },
  {
    q: "O hotel oferece estacionamento?",
    a: "Contamos com estacionamento coberto e serviço de manobrista disponível 24 horas. A tarifa é cobrada separadamente e pode ser incluída na reserva.",
  },
  {
    q: "Qual a política de cancelamento?",
    a: "Cancelamentos são gratuitos até 48 horas antes do check-in. Após esse prazo, será cobrada uma diária como penalidade. Reservas não-reembolsáveis possuem desconto especial.",
  },
  {
    q: "O hotel aceita animais de estimação?",
    a: "Aceitamos pets de até 10 kg mediante comunicação prévia e taxa adicional. Entre em contato ao fazer a reserva para garantir disponibilidade e orientações específicas.",
  },
  {
    q: "O spa precisa de agendamento?",
    a: "Recomendamos o agendamento com pelo menos 24 horas de antecedência para garantir a disponibilidade do tratamento e do terapeuta de sua preferência.",
  },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeRoom, setActiveRoom] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setHeaderSolid(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      if (e.key === "Escape") setGalleryOpen(false);
      if (e.key === "ArrowLeft") setGalleryIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
      if (e.key === "ArrowRight") setGalleryIndex(i => (i + 1) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryOpen]);

  const openGallery = (i: number) => { setGalleryIndex(i); setGalleryOpen(true); };

  const trust = useInView();
  const problem = useInView();
  const solution = useInView();
  const accomm = useInView();
  const expSection = useInView();
  const gallery = useInView();
  const faqSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="bg-[#F8F5EF] text-[#1A1815] overflow-x-hidden" style={{ fontFamily: "var(--font-sans)" }}>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background: headerSolid ? "rgba(15,14,12,0.96)" : "transparent", backdropFilter: headerSolid ? "blur(8px)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-[72px] flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none select-none">
            <span className="font-display text-[20px] tracking-[0.3em] text-[#F0EDE6] uppercase font-light">NOVA</span>
            <span className="text-[8px] tracking-[0.45em] text-[#C4A882] uppercase font-light mt-0.5">Hotel</span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {[["Acomodações", "#acomodacoes"], ["Experiências", "#experiencias"], ["Galeria", "#galeria"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] tracking-[0.22em] text-[#F0EDE6]/60 hover:text-[#C4A882] uppercase transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#reservar"
            className="border border-[#C4A882] text-[#C4A882] text-[10px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#C4A882] hover:text-[#0F0E0C] transition-all duration-300"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#0F0E0C]">
        <div
          className="absolute bg-center bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1762417422532-7bdaaf7d457a?w=2000&h=1300&fit=crop&auto=format)`,
            inset: "-15% 0",
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0C]/55 via-[#0F0E0C]/20 to-[#0F0E0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0C]/50 via-transparent to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-14 flex flex-col justify-end pb-28">
          <div style={{ animation: "fadeSlideUp 1.3s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}>
            <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-7">São Paulo · Brasil</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[82px] text-[#F0EDE6] leading-[1.0] font-light mb-7 max-w-3xl">
              Mais do que<br />
              <em className="italic">uma estadia.</em><br />
              Uma experiência.
            </h1>
            <p className="text-[#F0EDE6]/50 text-sm tracking-wide max-w-sm mb-11 font-light leading-relaxed">
              Um lugar onde cada detalhe foi pensado para que o tempo passe de forma completamente diferente.
            </p>
            <a
              href="#acomodacoes"
              className="inline-flex items-center gap-5 text-[#F0EDE6] hover:text-[#C4A882] transition-colors duration-400 group"
            >
              <span className="text-[10px] tracking-[0.32em] uppercase">Ver acomodações</span>
              <span className="block w-14 h-px bg-current transition-all duration-400 group-hover:w-24" />
            </a>
          </div>
          <div className="absolute bottom-10 right-14 hidden lg:flex flex-col items-center gap-2">
            <span className="text-[7px] tracking-[0.45em] text-[#F0EDE6]/25 uppercase rotate-90 mb-2">Explorar</span>
            <div className="w-px h-14 bg-gradient-to-b from-[#C4A882]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ───────────────────────────────────────────────────── */}
      <section className="bg-[#0F0E0C] py-14 border-t border-[#F0EDE6]/[0.06]">
        <div ref={trust.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-[#F0EDE6]/[0.08]">
            {[
              { label: "Localização", detail: "Centro histórico — tudo a poucos passos" },
              { label: "Conforto", detail: "Cada detalhe pensado para o seu descanso" },
              { label: "Atendimento", detail: "Concierge dedicado disponível 24 horas" },
              { label: "Experiência", detail: "Cada estadia é única e inesquecível" },
            ].map((item, i) => (
              <div
                key={i}
                className="lg:px-10 first:lg:pl-0 last:lg:pr-0 transition-all duration-700"
                style={{
                  opacity: trust.inView ? 1 : 0,
                  transform: trust.inView ? "translateY(0)" : "translateY(18px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[3px] h-4 bg-[#C4A882] flex-shrink-0" />
                  <h3 className="text-[#F0EDE6] text-[11px] tracking-[0.22em] uppercase font-light">{item.label}</h3>
                </div>
                <p className="text-[#F0EDE6]/35 text-xs leading-relaxed font-light pl-[15px]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────────── */}
      <section className="py-32 lg:py-44 bg-[#18150F]">
        <div ref={problem.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

            <div
              className="transition-all duration-1000"
              style={{ opacity: problem.inView ? 1 : 0, transform: problem.inView ? "translateX(0)" : "translateX(-28px)" }}
            >
              <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-9">O que você já viveu</p>
              <h2 className="font-display text-4xl lg:text-5xl text-[#F0EDE6] font-light leading-[1.08] mb-14">
                Hotéis que prometem<br />
                <em className="italic">muito</em> e entregam<br />
                menos.
              </h2>
              <div className="space-y-7">
                {[
                  "Quartos sem identidade, como qualquer outro",
                  "Atendimento padronizado e impessoal",
                  "Experiências que não correspondem às expectativas",
                  "Ambientes que não convidam à permanência",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 transition-all duration-700"
                    style={{
                      opacity: problem.inView ? 1 : 0,
                      transform: problem.inView ? "translateX(0)" : "translateX(16px)",
                      transitionDelay: `${180 + i * 100}ms`,
                    }}
                  >
                    <div className="w-px h-10 bg-[#F0EDE6]/10 flex-shrink-0 mt-1" />
                    <p className="text-[#F0EDE6]/40 text-sm leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="transition-all duration-1000 delay-300"
              style={{ opacity: problem.inView ? 1 : 0, transform: problem.inView ? "translateX(0)" : "translateX(28px)" }}
            >
              <div className="relative">
                <div className="overflow-hidden aspect-[4/5] bg-[#0F0E0C]">
                  <img
                    src="https://images.unsplash.com/photo-1771293549382-62829fad8f2d?w=800&h=1000&fit=crop&auto=format"
                    alt="Fachada moderna do NOVA Hotel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18150F]/50 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-[#C4A882] px-7 py-5 hidden lg:block">
                  <p className="font-display text-[13px] text-[#0F0E0C] font-light tracking-[0.1em] uppercase mb-0.5">Desde</p>
                  <p className="font-display text-4xl text-[#0F0E0C] font-light leading-none">2019</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOLUTION ────────────────────────────────────────────────────────── */}
      <section className="py-32 lg:py-44 bg-[#F8F5EF]">
        <div ref={solution.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div
            className="text-center mb-24 transition-all duration-1000"
            style={{ opacity: solution.inView ? 1 : 0, transform: solution.inView ? "translateY(0)" : "translateY(20px)" }}
          >
            <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-7">A diferença NOVA</p>
            <h2 className="font-display text-4xl lg:text-6xl text-[#1A1815] font-light leading-[1.08] max-w-xl mx-auto">
              Criado para quem<br />
              <em className="italic">sabe o que quer</em><br />
              de uma viagem.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-[#1A1815]/[0.08]">
            {[
              {
                num: "01",
                title: "Design intencional",
                desc: "Cada espaço foi projetado por um arquiteto e conta uma história. Nada é padrão. Nada é acidental. Cada canto tem um propósito.",
              },
              {
                num: "02",
                title: "Silêncio como luxo",
                desc: "Sem filas. Sem barulho. Sem pressa. O tempo no NOVA passa de uma forma que poucos lugares conseguem proporcionar.",
              },
              {
                num: "03",
                title: "Cuidado genuíno",
                desc: "Nossa equipe conhece seu nome antes de você chegar. O serviço é atencioso, discreto e profundamente humano.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-[#1A1815]/[0.08] last:border-r-0 transition-all duration-700"
                style={{
                  opacity: solution.inView ? 1 : 0,
                  transform: solution.inView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${150 + i * 140}ms`,
                }}
              >
                <span className="text-[10px] tracking-[0.35em] text-[#C4A882] font-light block mb-6">{item.num}</span>
                <div className="w-8 h-px bg-[#1A1815]/15 mb-8" />
                <h3 className="font-display text-2xl text-[#1A1815] font-light mb-5 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#7A7068] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATIONS ─────────────────────────────────────────────────── */}
      <section id="acomodacoes" className="py-32 lg:py-44 bg-[#EEE9E0]">
        <div ref={accomm.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 transition-all duration-1000"
            style={{ opacity: accomm.inView ? 1 : 0, transform: accomm.inView ? "translateY(0)" : "translateY(16px)" }}
          >
            <div>
              <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-6">Onde você vai dormir</p>
              <h2 className="font-display text-4xl lg:text-5xl text-[#1A1815] font-light leading-tight">Acomodações</h2>
            </div>
            <div className="flex items-center gap-2">
              {rooms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRoom(i)}
                  aria-label={`Ver quarto ${i + 1}`}
                  className="h-0.5 transition-all duration-400"
                  style={{
                    width: activeRoom === i ? 36 : 20,
                    background: activeRoom === i ? "#C4A882" : "rgba(26,24,21,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-1">
            {/* Image */}
            <div className="relative overflow-hidden min-h-[480px] lg:min-h-[680px] bg-[#1A1815]">
              {rooms.map((room, i) => (
                <img
                  key={i}
                  src={room.img}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: activeRoom === i ? 1 : 0 }}
                />
              ))}
              <div className="absolute top-6 left-6">
                <span className="bg-[#C4A882] text-[#0F0E0C] text-[8px] tracking-[0.35em] uppercase px-3 py-1.5">
                  {rooms[activeRoom].tag}
                </span>
              </div>
            </div>

            {/* Room List */}
            <div className="bg-[#0F0E0C] p-8 lg:p-14 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                {rooms.map((room, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className="w-full text-left px-6 py-5 border transition-all duration-350 group"
                    style={{
                      borderColor: activeRoom === i ? "#C4A882" : "rgba(240,237,230,0.08)",
                      background: activeRoom === i ? "rgba(196,168,130,0.06)" : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="font-display text-xl font-light transition-colors duration-300"
                        style={{ color: activeRoom === i ? "#C4A882" : "rgba(240,237,230,0.65)" }}
                      >
                        {room.name}
                      </h3>
                      <span
                        className="text-xs tracking-wider font-light transition-colors duration-300"
                        style={{ color: activeRoom === i ? "#C4A882" : "rgba(240,237,230,0.25)" }}
                      >
                        {room.size}
                      </span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: activeRoom === i ? "96px" : "0px" }}
                    >
                      <p className="text-[#F0EDE6]/45 text-sm leading-relaxed font-light pt-1">{room.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-[#F0EDE6]/[0.07] pt-8">
                <a
                  href="#reservar"
                  className="inline-flex items-center gap-5 text-[#C4A882] hover:text-[#F0EDE6] transition-colors duration-300 group"
                >
                  <span className="text-[10px] tracking-[0.3em] uppercase">Reservar esta suíte</span>
                  <span className="block w-8 h-px bg-current transition-all duration-400 group-hover:w-16" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ──────────────────────────────────────────────────────── */}
      <section id="experiencias" className="py-32 lg:py-44 bg-[#F8F5EF]">
        <div ref={expSection.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div
            className="mb-16 transition-all duration-1000"
            style={{ opacity: expSection.inView ? 1 : 0, transform: expSection.inView ? "translateY(0)" : "translateY(16px)" }}
          >
            <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-6">Além do quarto</p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1A1815] font-light leading-[1.08] max-w-lg">
              Experiências que<br />
              <em className="italic">ficam na memória</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {experiences.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-default transition-all duration-700"
                style={{
                  opacity: expSection.inView ? 1 : 0,
                  transform: expSection.inView ? "translateY(0)" : "translateY(28px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-[#1A1815]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C]/90 via-[#0F0E0C]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="font-display text-lg lg:text-xl text-[#F0EDE6] font-light leading-tight mb-2">{item.title}</h3>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: "0px" }}
                    >
                      <p className="text-[#F0EDE6]/60 text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                    <p className="text-[#F0EDE6]/0 group-hover:text-[#F0EDE6]/55 text-xs leading-relaxed font-light transition-colors duration-500 mt-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────────── */}
      <section id="galeria" className="py-32 lg:py-44 bg-[#18150F]">
        <div ref={gallery.ref} className="max-w-7xl mx-auto px-6 lg:px-14">
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-1000"
            style={{ opacity: gallery.inView ? 1 : 0, transform: gallery.inView ? "translateY(0)" : "translateY(16px)" }}
          >
            <div>
              <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-6">Em imagens</p>
              <h2 className="font-display text-4xl lg:text-5xl text-[#F0EDE6] font-light">Galeria</h2>
            </div>
            <p className="text-[#F0EDE6]/30 text-xs tracking-[0.2em] font-light">Clique para ampliar</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5">
            {galleryImages.map((item, i) => (
              <div
                key={i}
                onClick={() => openGallery(i)}
                className={`group relative overflow-hidden cursor-pointer bg-[#0F0E0C] transition-all duration-600 ${i === 0 ? "col-span-2" : ""}`}
                style={{
                  opacity: gallery.inView ? 1 : 0,
                  transform: gallery.inView ? "scale(1)" : "scale(0.97)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-square"}`}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[#0F0E0C]/0 group-hover:bg-[#0F0E0C]/35 transition-all duration-400 flex items-center justify-center">
                    <div
                      className="border border-[#F0EDE6]/70 w-9 h-9 flex items-center justify-center transition-all duration-300"
                      style={{ opacity: 0 }}
                      onMouseOver={e => (e.currentTarget.style.opacity = "1")}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6H11M6 1V11" stroke="#F0EDE6" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY LIGHTBOX ─────────────────────────────────────────────────── */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(15,14,12,0.97)", animation: "fadeIn 0.25s ease both" }}
          onClick={() => setGalleryOpen(false)}
        >
          <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-6 right-8 text-[10px] tracking-[0.35em] text-[#F0EDE6]/50 hover:text-[#F0EDE6] uppercase transition-colors"
          >
            Fechar ✕
          </button>

          <button
            onClick={e => { e.stopPropagation(); setGalleryIndex(i => (i - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-4 lg:left-8 text-[#F0EDE6]/40 hover:text-[#C4A882] text-2xl p-4 transition-colors duration-200"
          >
            ←
          </button>

          <div className="w-full max-w-5xl px-16 lg:px-24" onClick={e => e.stopPropagation()}>
            <img
              key={galleryIndex}
              src={galleryImages[galleryIndex].img}
              alt={galleryImages[galleryIndex].alt}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
              style={{ animation: "fadeIn 0.3s ease both" }}
            />
            <p className="text-[#F0EDE6]/30 text-[10px] tracking-[0.25em] text-center mt-5 uppercase">
              {galleryImages[galleryIndex].alt}
            </p>
          </div>

          <button
            onClick={e => { e.stopPropagation(); setGalleryIndex(i => (i + 1) % galleryImages.length); }}
            className="absolute right-4 lg:right-8 text-[#F0EDE6]/40 hover:text-[#C4A882] text-2xl p-4 transition-colors duration-200"
          >
            →
          </button>

          <div className="absolute bottom-7 flex gap-2" onClick={e => e.stopPropagation()}>
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                aria-label={`Imagem ${i + 1}`}
                className="h-0.5 transition-all duration-300"
                style={{
                  width: galleryIndex === i ? 28 : 14,
                  background: galleryIndex === i ? "#C4A882" : "rgba(240,237,230,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-32 lg:py-44 bg-[#F8F5EF]">
        <div ref={faqSection.ref} className="max-w-3xl mx-auto px-6 lg:px-0">
          <div
            className="mb-16 transition-all duration-1000"
            style={{ opacity: faqSection.inView ? 1 : 0, transform: faqSection.inView ? "translateY(0)" : "translateY(16px)" }}
          >
            <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-6">Dúvidas frequentes</p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1A1815] font-light">FAQ</h2>
          </div>

          <div>
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-t border-[#1A1815]/[0.09] transition-all duration-600"
                style={{
                  opacity: faqSection.inView ? 1 : 0,
                  transform: faqSection.inView ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group gap-6"
                >
                  <span className="font-display text-lg lg:text-xl text-[#1A1815] font-light group-hover:text-[#C4A882] transition-colors duration-300 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="text-[#C4A882] flex-shrink-0 transition-transform duration-400"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openFaq === i ? "160px" : "0px" }}
                >
                  <p className="text-[#7A7068] text-sm leading-relaxed font-light pb-7">{item.a}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#1A1815]/[0.09]" />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section id="reservar" className="relative min-h-[72vh] flex items-center overflow-hidden bg-[#0F0E0C]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1762417422532-7bdaaf7d457a?w=2000&h=1200&fit=crop&auto=format)`,
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-[#0F0E0C]/70 to-[#0F0E0C]/85" />

        <div ref={ctaSection.ref} className="relative w-full max-w-7xl mx-auto px-6 lg:px-14 py-32 text-center">
          <div
            className="transition-all duration-1200"
            style={{
              opacity: ctaSection.inView ? 1 : 0,
              transform: ctaSection.inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="text-[9px] tracking-[0.55em] text-[#C4A882] uppercase mb-10">Reserve seu momento</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-[80px] text-[#F0EDE6] font-light leading-[1.0] mb-8 max-w-3xl mx-auto">
              Sua próxima<br />
              <em className="italic">experiência</em><br />
              começa aqui.
            </h2>
            <p className="text-[#F0EDE6]/35 text-sm tracking-wide mb-14 font-light max-w-xs mx-auto leading-relaxed">
              Verificação em tempo real. Check-in a partir das 15h. Cancelamento gratuito até 48h antes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:reservas@novahotel.com"
                className="bg-[#C4A882] text-[#0F0E0C] text-[10px] tracking-[0.35em] uppercase px-12 py-5 hover:bg-[#F0EDE6] transition-all duration-300 font-medium"
              >
                Fazer reserva
              </a>
              <a
                href="tel:+551100000000"
                className="text-[10px] tracking-[0.35em] uppercase px-12 py-5 transition-all duration-300 font-light"
                style={{ border: "1px solid rgba(240,237,230,0.18)", color: "rgba(240,237,230,0.6)" }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,230,0.45)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.9)";
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,230,0.18)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.6)";
                }}
              >
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0F0E0C] border-t py-12" style={{ borderColor: "rgba(240,237,230,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start">
            <span className="font-display text-[17px] tracking-[0.3em] text-[#F0EDE6] uppercase font-light">NOVA</span>
            <span className="text-[7px] tracking-[0.45em] text-[#C4A882] uppercase mt-0.5">Hotel</span>
          </div>
          <p className="text-[10px] tracking-[0.18em] text-center" style={{ color: "rgba(240,237,230,0.18)" }}>
            © 2024 NOVA Hotel · Conceito fictício criado para fins ilustrativos
          </p>
          <div className="flex gap-8">
            {["Instagram", "Contato"].map(item => (
              <a
                key={item}
                href="#"
                className="text-[10px] tracking-[0.22em] uppercase transition-colors duration-300"
                style={{ color: "rgba(240,237,230,0.28)" }}
                onMouseOver={e => ((e.currentTarget as HTMLElement).style.color = "#C4A882")}
                onMouseOut={e => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.28)")}
              >
                {item}
              </a>
            ))}
            <a
              href="/politica-de-privacidade"
              className="text-[10px] tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: "rgba(240,237,230,0.28)" }}
              onMouseOver={e => ((e.currentTarget as HTMLElement).style.color = "#C4A882")}
              onMouseOut={e => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.28)")}
            >
              Privacidade
            </a>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />

    </div>
  );
}
