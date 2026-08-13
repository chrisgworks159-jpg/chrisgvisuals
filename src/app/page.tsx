"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";



/* ── Intersection Observer fade-in ── */
function useInView(t = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } },
      { threshold: t },
    );
    o.observe(el);
    return () => o.disconnect();
  }, [t]);
  return { ref, visible: v };
}

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Icons ── */
const Check = () => (
  <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const Play = () => (
  <svg className="h-7 w-7 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ── Social SVG Icons ── */
const EmailIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const DiscordIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

/* ── YouTube helpers ── */
function ytId(url: string) {
  return url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/)?.[1] || "";
}
function ytThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/* ── Video Modal ── */
function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={onClose}>
      <button onClick={onClose} className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white/60 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-full max-w-5xl px-4" onClick={e => e.stopPropagation()}>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-cyan-500/10">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */
const WORK = [
  { n: "Reze \u00d7 Chainsaw Man", c: "Standard", u: "https://www.youtube.com/watch?v=EAfSnk3JJ-s" },
  { n: "Anime Rap Visual", c: "Standard", u: "https://youtu.be/ard1MeCqAFQ" },
  { n: "Giyu \u00d7 Demon Slayer", c: "Premium", u: "https://www.youtube.com/watch?v=K648Gm2jBWI" },
  { n: "Premium AMV Edit", c: "Premium", u: "https://www.youtube.com/watch?v=TGvMoxSPcgM" },
  { n: "Nerdcore Visual III", c: "Premium", u: "https://www.youtube.com/watch?v=VpfheDdLMXk" },
  { n: "Gotham Visualizer", c: "Visualizer", u: "https://www.youtube.com/watch?v=dK2dFB7YPoI" },
  { n: "Lyric Visual II", c: "Visualizer", u: "https://www.youtube.com/watch?v=IkHWKsU8EGk" },
  { n: "Lyric Visual III", c: "Visualizer", u: "https://www.youtube.com/watch?v=_npPP6MLneE" },
];
const CATS = ["All", "Standard", "Premium", "Visualizer"];

const TESTIMONIALS = [
  { n: "DizzyEight", img: "/images/dizzyeight.png", q: "THIS IS INCREDIBLE", role: "Nerdcore Artist", featured: true },
  { n: "Connor Quest!", img: "/images/connor.png", q: "Awesome!! Tyvm ^^", role: "Nerdcore Artist", featured: false },
  { n: "Anbu Monastir", img: "/images/anbu.png", q: "Video is amazing thank you", role: "Nerdcore Artist", featured: false },
  { n: "757shai", img: "/images/757shai.png", q: "SO FIRE. Preciate it bro", role: "Artist", featured: false },
];

const TRUSTED = [
  { n: "DizzyEight", tag: "Main Editor" },
  { n: "Henrique Mendonca", tag: "Main Editor" },
  { n: "Connor Quest", tag: "" },
  { n: "Gameboyjones", tag: "" },
  { n: "Shwabadi", tag: "" },
  { n: "Charizma", tag: "" },
  { n: "Ambu Monastir", tag: "" },
  { n: "Geno Five", tag: "" },
  { n: "Keetheweb", tag: "" },
  { n: "M4rkim", tag: "" },
  { n: "Daarui", tag: "" },
  { n: "Anny", tag: "" },
  { n: "Crazy8theGreat", tag: "" },
];

const FAQS = [
  { q: "DELIVERY TIME", a: "Standard edits: 1 week max. Premium edits: 1\u20132 weeks, can sometimes do 1 week depending on schedule and complexity." },
  { q: "PAYMENT", a: "Via PayPal or Wise in USD or EUR. Payment once the video is completed\u2014delivered after transfer. Or 50/50 split." },
  { q: "REVISIONS", a: "Standard: 1 revision. Premium: 2 revisions during production. After final delivery, no further changes." },
  { q: "CONTACT", a: "Discord (159krzg), Instagram (chrisg.editz), X (@eleg4nzito), or email (chrisgworks159@gmail.com)." },
  { q: "PROJECT TYPES", a: "Nerdcore MVs, anime rap, AMVs, visualizers, lyric videos, motion graphics\u2014anything from the culture." },
  { q: "INTERNATIONAL", a: "Yes. Fully remote, worldwide. USD or EUR via PayPal/Wise." },
];

const SERVICES = [
  {
    t: "STANDARD",
    p: "$60/min",
    items: ["Beat-synced editing", "Color grading", "Effects & transitions", "Audio sync", "4K delivery", "TikTok/Reels version", "1 revision"],
    tags: ["Anime Rap", "AMVs", "Character Edits"],
    pop: false,
    videos: WORK.filter(w => w.c === "Standard"),
  },
  {
    t: "PREMIUM",
    p: "$100\u2013125/min",
    items: ["Motion graphics & VFX", "Kinetic typography", "Advanced compositions", "Cinematic editing", "4K delivery", "TikTok/Reels version", "2 revisions"],
    tags: ["Nerdcore MVs", "Anime Rap", "Geek Songs"],
    pop: true,
    videos: WORK.filter(w => w.c === "Premium"),
  },
  {
    t: "VISUALIZER",
    p: "$70\u2013120+/min",
    items: ["Animated lyrics", "Motion typography", "Glitch/VFX aesthetics", "Custom concept", "4K delivery", "TikTok/Reels version"],
    tags: ["Releases", "Spotify", "YouTube"],
    pop: false,
    videos: WORK.filter(w => w.c === "Visualizer"),
  },
];

/* ── Marquee strip component ── */
function MarqueeStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden border-y border-white/5 bg-[#08080f]/80 py-4">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {Array(3).fill(null).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 px-8">
            {items.map(t => (
              <span key={`${i}-${t}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" />{t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}



/* ══════════════════════════════════════════════ */
/*                   HOME PAGE                   */
/* ══════════════════════════════════════════════ */
function HomePage() {
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState("All");
  const [faq, setFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const items = cat === "All" ? WORK : WORK.filter(p => p.c === cat);

  const go = (id: string) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };



  const heading: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };


  return (
    <div className="relative min-h-dvh bg-[#08080f] text-white selection:bg-cyan-500/30">
      {/* Global background */}
      <div className="fixed inset-0 z-0">
        <img src="/images/hero-workspace.png" alt="" className="h-full w-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080f]/80 via-[#08080f]/90 to-[#08080f]" />
      </div>
      <div className="relative z-10">
      {video && <VideoModal videoId={video} onClose={() => setVideo(null)} />}

      {/* ══ NAV ══ */}
      <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-[#08080f]/80 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-cyan-500/5" : ""}`}>
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 tablet:px-8">
          <button
            onClick={() => go("top")}
            className="text-sm font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent"
            style={heading}
          >
            CHRIS G VISUAL&rsquo;S
          </button>
          <div className="hidden items-center gap-2 desktop:flex">
            {["Work", "Services", "Process", "FAQ", "Contact"].map(s => (
              <button key={s} onClick={() => go(s.toLowerCase())} className="rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white">{s}</button>
            ))}
            <button onClick={() => go("contact")} className="animate-pulse-slow ml-3 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">GET YOUR VISUAL HERE!</button>
          </div>
          <button onClick={() => setMenu(!menu)} className="desktop:hidden rounded-full bg-white/5 p-2.5 text-zinc-400 transition-colors hover:bg-white/10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menu
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menu && (
          <div className="border-t border-white/5 bg-[#08080f]/95 px-5 pb-5 pt-3 backdrop-blur-2xl desktop:hidden">
            {["Work", "Services", "Process", "FAQ", "Contact"].map(s => (
              <button key={s} onClick={() => go(s.toLowerCase())} className="block w-full rounded-xl py-3 text-left text-sm uppercase tracking-wider text-zinc-400 transition-colors hover:text-white">{s}</button>
            ))}
            <button onClick={() => go("contact")} className="mt-3 w-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 py-3 text-[11px] font-bold uppercase tracking-wider text-white">GET YOUR VISUAL HERE!</button>
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="top" className="relative min-h-[100dvh] overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
        </div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(168,85,247,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-center px-5 pt-24 pb-16 tablet:px-8">
          <FadeIn>
            {/* Profile intro */}
            <div className="mb-8 flex items-center gap-5">
              <div className="relative">
                <img src="/images/profile.jpg" alt="Chris G" className="h-16 w-16 rounded-full border-2 border-cyan-400/40 object-cover shadow-lg shadow-cyan-500/20" />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#08080f] bg-green-400" />
              </div>
              <div>
                <p className="text-base font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent" style={heading}>Chris G</p>
                <p className="text-sm text-zinc-400">Visual Producer &bull; Editor of <span className="text-cyan-300">@dizzyeight</span></p>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold uppercase leading-[0.92] tracking-tight tablet:text-7xl desktop:text-9xl" style={heading}>
              YOUR SONG<br />DESERVES A<br />
              <span style={{ color: "#22d3ee" }}>FIRE VISUAL!</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-zinc-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Video editing, compositions, motion design and more for nerdcore artists, anime rappers and geek culture creators.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => go("contact")} className="animate-pulse-slow group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
                <span>GET YOUR VISUAL HERE!</span><Arrow />
              </button>
              <button onClick={() => go("services")} className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white hover:scale-105">WATCH WORK</button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                { v: "6Y+", l: "EXP" },
                { v: "100+", l: "PROJECTS" },
                { v: "1-2W", l: "DELIVERY" },
                { v: "GLOBAL", l: "CLIENTS" },
              ].map(s => (
                <div key={s.l} className="rounded-2xl border border-white/5 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <span className="text-lg font-bold text-white" style={heading}>{s.v}</span>
                  <span className="ml-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ TICKER 1 ══ */}
      <MarqueeStrip items={["CHRIS G VISUAL'S", "VIDEO EDITING", "MOTION DESIGN", "AMV EDITS", "VISUALIZERS", "KINETIC TYPE", "COMPOSITIONS", "COLOR GRADING", "VFX", "ANIME RAP", "NERDCORE"]} />

      {/* ══ TRUSTED BY / WORKED WITH ══ */}
      <section className="bg-[#08080f] py-14 tablet:py-16">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <FadeIn>
            <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500" style={heading}>TRUSTED BY / WORKED WITH</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {TRUSTED.map(a => (
                <span key={a.n} className="flex items-center gap-2">
                  <span className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${a.tag ? "bg-gradient-to-r from-cyan-600/20 to-cyan-500/20 border border-cyan-400/30 text-cyan-300" : "border border-white/5 bg-white/5 text-zinc-400 hover:border-cyan-400/20 hover:text-zinc-300"}`} style={heading}>{a.n}</span>
                  {a.tag && <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-cyan-300">{a.tag}</span>}
                </span>
              ))}
              <span className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs text-zinc-500">& more</span>
            </div>
          </FadeIn>
        </div>
      </section>

      
      {/* ══ SERVICES ══ */}
      <section id="services" className="bg-[#0a0a14] py-20 tablet:py-24">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <FadeIn>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>SERVICES</p>
            <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tablet:text-6xl" style={heading}>PICK YOUR PACKAGE</h2>
          </FadeIn>
          <div className="mt-12 space-y-6">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.t} delay={i * 100}>
                <div className={`overflow-hidden rounded-2xl border bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] ${s.pop ? "border-cyan-400/40 shadow-xl shadow-cyan-500/20 scale-[1.02] ring-1 ring-cyan-400/10" : "border-white/5"}`}>
                  {s.pop && <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500" />}
                  <div className="grid desktop:grid-cols-[1fr_1fr]">
                    {/* Left — tier info */}
                    <div className="p-8 tablet:p-10">
                      {s.pop && <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">MOST POPULAR</span>}
                      <h3 className="text-3xl font-bold uppercase tracking-tight" style={heading}>{s.t}</h3>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent" style={heading}>{s.p}</span>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.tags.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-zinc-400">{t}</span>)}
                      </div>
                      <ul className="mt-6 space-y-3">
                        {s.items.map(it => <li key={it} className="flex items-center gap-3 text-sm text-zinc-300"><Check />{it}</li>)}
                      </ul>
                      <button
                        onClick={() => go("contact")}
                        className={`mt-8 w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] ${s.pop ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40" : "border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"}`}
                      >
                        GET THIS VISUAL!
                      </button>
                    </div>
                    {/* Right — example videos */}
                    <div className="border-t border-white/5 p-6 tablet:p-8 desktop:border-l desktop:border-t-0">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>EXAMPLES</p>
                      <div className="grid gap-3 tablet:grid-cols-2 desktop:grid-cols-1">
                        {s.videos.map(v => {
                          const vid = ytId(v.u);
                          return (
                            <div
                              key={v.u}
                              className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-[#0c0c18] transition-all duration-500 hover:border-cyan-400/20 hover:scale-[1.02]"
                              onClick={() => setVideo(vid)}
                            >
                              <img src={ytThumb(vid)} alt={v.n} className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"><Play /></div>
                              </div>
                              <p className="absolute bottom-3 left-3 text-xs font-bold text-white">{v.n}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn><p className="mt-6 text-center text-xs text-zinc-500">Prices vary by complexity & duration. Contact for a personalized quote.</p></FadeIn>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section id="process" className="py-20 tablet:py-24">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <div className="grid gap-16 desktop:grid-cols-2">
            {/* Why */}
            <div>
              <FadeIn>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>WHY CHRIS G</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent" style={heading}>BUILT FOR THE CULTURE</h2>
              </FadeIn>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { t: "NERDCORE NATIVE", d: "I live in the anime rap scene. I know the references." },
                  { t: "BEAT-PERFECT", d: "Every cut lands on beat. Frame-perfect timing." },
                  { t: "ATTENTION HOOKS", d: "First 3 seconds built to stop the scroll." },
                  { t: "FAST DELIVERY", d: "Most projects done in 1\u20132 weeks." },
                  { t: "FLEXIBLE STYLE", d: "Clean minimal to full glitch VFX." },
                  { t: "WORLDWIDE", d: "Remote. PayPal/Wise. USD/EUR." },
                ].map((b, i) => (
                  <FadeIn key={b.t} delay={i * 50}>
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                      <p className="text-xs font-bold uppercase tracking-wider text-white" style={heading}>{b.t}</p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">{b.d}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            {/* Process */}
            <div>
              <FadeIn>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>PROCESS</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent" style={heading}>HOW IT WORKS</h2>
              </FadeIn>
              <div className="mt-8 space-y-4">
                {[
                  { n: "01", t: "SEND YOUR TRACK", d: "Share your song, references and vibe." },
                  { n: "02", t: "CREATIVE PLAN", d: "I build the concept and visual direction." },
                  { n: "03", t: "EDIT & DELIVER", d: "Standard: 1 revision. Premium: 2 revisions. 4K export ready for YouTube / Spotify." },
                ].map((w, i) => (
                  <FadeIn key={w.n} delay={i * 80}>
                    <div className="flex items-start gap-6 rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]">
                      <span className="text-3xl font-bold bg-gradient-to-b from-cyan-400 to-cyan-400 bg-clip-text text-transparent" style={heading}>{w.n}</span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-white" style={heading}>{w.t}</p>
                        <p className="mt-1 text-sm text-zinc-400">{w.d}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="bg-[#0a0a14] py-20 tablet:py-24">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <FadeIn>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>REAL FEEDBACK</p>
            <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tablet:text-5xl" style={heading}>WHAT ARTISTS SAY</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.n} delay={i * 80}>
                <div className={`rounded-2xl border p-6 transition-all duration-500 hover:scale-[1.02] ${t.featured ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 shadow-lg shadow-cyan-500/10 tablet:col-span-2 desktop:col-span-1" : "border-white/5 bg-white/[0.03]"} backdrop-blur-sm`}>
                  {t.featured && <span className="mb-3 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">FEATURED</span>}
                  <p className={`leading-relaxed ${t.featured ? "text-xl font-bold text-white" : "text-base text-zinc-300"}`} style={t.featured ? heading : undefined}>
                    &ldquo;{t.q}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                    <img src={t.img} alt={t.n} className="h-10 w-10 rounded-full border-2 border-cyan-400/20 object-cover" />
                    <div>
                      <p className="text-sm font-bold text-white" style={heading}>{t.n}</p>
                      <p className="text-xs text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-20 tablet:py-24">
        <div className="mx-auto max-w-3xl px-5 tablet:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>INFO</p>
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent" style={heading}>FAQ</h2>
            </div>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <FadeIn key={i} delay={i * 40}>
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/10">
                  <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors">
                    <span className="text-sm font-bold uppercase tracking-wider text-white" style={heading}>{f.q}</span>
                    <svg className={`h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-300 ${faq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${faq === i ? "max-h-32 pb-5" : "max-h-0"}`}>
                    <p className="px-6 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM ══ */}
      <section className="bg-[#0a0a14] py-20 tablet:py-24">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>FOLLOW THE JOURNEY</p>
              <h2 className="text-5xl font-bold uppercase tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent tablet:text-7xl" style={heading}>@CHRISG.EDITZ</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="mx-auto mt-10 max-w-4xl">
              <a href="https://instagram.com/chrisg.editz" target="_blank" rel="noopener noreferrer" className="group mb-6 flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:scale-[1.01]">
                <img src="/images/profile.jpg" alt="Chris G" className="h-16 w-16 rounded-full border-2 border-cyan-400/30 object-cover shadow-lg shadow-cyan-500/10" />
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-white" style={heading}>CHRISG.EDITZ</p>
                  <p className="mt-1 text-sm text-zinc-400 truncate">Visual Producer | Editor of @dizzyeight & @henriquemendoncaofc | COMMS OPEN</p>
                  <p className="mt-1 text-xs text-zinc-500"><strong className="text-zinc-300">674</strong> followers &bull; <strong className="text-zinc-300">229</strong> following</p>
                </div>
                <span className="shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105">FOLLOW</span>
              </a>
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/5 bg-[#0c0c18]">
                <iframe
                  src="https://www.instagram.com/chrisg.editz/embed"
                  className="w-full border-0"
                  style={{ minHeight: "500px", background: "transparent" }}
                  loading="lazy"
                  title="Instagram feed @chrisg.editz"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ TICKER 3 ══ */}
      <MarqueeStrip items={["CHRIS G VISUAL'S", "COMMISSIONS OPEN", "FIRE VISUALS", "NERDCORE", "ANIME RAP", "GET YOUR VISUAL", "CHRIS G VISUAL'S", "MOTION DESIGN"]} />

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-20 tablet:py-24">
        <div className="mx-auto max-w-[1400px] px-5 tablet:px-8">
          <div className="grid gap-12 desktop:grid-cols-[1fr_1.2fr]">
            <FadeIn>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400" style={heading}>CONTACT</p>
                <h2 className="mt-2 text-4xl font-bold uppercase leading-tight tracking-tight tablet:text-5xl" style={heading}>
                  LET&rsquo;S COOK SOMETHING{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">CRAZY?</span>
                </h2>
                <p className="mt-5 text-base text-zinc-400" style={{ fontFamily: "'Inter', sans-serif" }}>Drop your project details and let&rsquo;s build something insane.</p>
                <div className="mt-8 space-y-3">
                  {[
                    { icon: <EmailIcon />, l: "chrisgworks159@gmail.com", h: "mailto:chrisgworks159@gmail.com", tag: "EMAIL" },
                    { icon: <InstagramIcon />, l: "chrisg.editz", h: "https://instagram.com/chrisg.editz", tag: "INSTAGRAM" },
                    { icon: <TwitterIcon />, l: "@eleg4nzito", h: "https://x.com/eleg4nzito", tag: "X" },
                    { icon: <DiscordIcon />, l: "159krzg", h: "https://discord.com/users/159krzg", tag: "DISCORD" },
                  ].map(c => (
                    <a key={c.tag} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06] hover:text-white group">
                      <span className="text-cyan-400 transition-colors group-hover:text-cyan-400">{c.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">{c.tag}</p>
                        <p className="text-sm truncate">{c.l}</p>
                      </div>
                      <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <form className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl" action="https://formsubmit.co/chrisgworks159@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Visual Request - CHRIS G VISUAL'S" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="https://divine-piano-499.higgsfield.app/" />
                <div className="grid gap-4 tablet:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>NAME</label>
                    <input name="name" type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>EMAIL</label>
                    <input name="email" type="email" placeholder="your@email.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>SERVICE TYPE</label>
                    <select name="service" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-400 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20">
                      <option value="">Select</option>
                      <option>Standard Edit</option>
                      <option>Premium Edit</option>
                      <option>Visualizer / Lyrics</option>
                      <option>Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>BUDGET</label>
                    <select name="budget" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-400 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20">
                      <option value="">Select</option>
                      <option>Under $60/min</option>
                      <option>$60 - $125/min</option>
                      <option>$125+/min</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>MESSAGE</label>
                  <textarea name="message" rows={4} placeholder="Your track, anime/character references, vibe..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />
                </div>
                <div className="mt-4">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500" style={heading}>TRACK LINK (Google Drive / Dropbox)</label>
                  <input type="text" name="track_link" placeholder="Paste your Google Drive or Dropbox share link" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20" />
                  <p className="mt-1.5 text-[9px] text-zinc-600">Upload your track to Google Drive or Dropbox and paste the share link.</p>
                </div>
                <button type="submit" className="animate-pulse-slow mt-6 w-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40">SEND PROJECT REQUEST</button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-5 tablet:flex-row tablet:justify-between tablet:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent" style={heading}>CHRIS G VISUAL&rsquo;S</p>
          <div className="flex gap-4">
            {["Work", "Services", "Contact"].map(l => (
              <button key={l} onClick={() => go(l.toLowerCase())} className="rounded-full px-3 py-1.5 text-xs uppercase tracking-wider text-zinc-500 transition-all hover:bg-white/5 hover:text-cyan-400">{l}</button>
            ))}
            <a href="https://www.youtube.com/playlist?list=PLoqoxAO6R1wljXrCLqkB9A6ZotXhIUOF1" target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-1.5 text-xs uppercase tracking-wider text-zinc-500 transition-all hover:bg-white/5 hover:text-cyan-400">YouTube</a>
          </div>
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Chris G Visual&rsquo;s</p>
        </div>
      </footer>

      {/* ══ STICKY MOBILE CTA ══ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-[#08080f]/90 p-3 backdrop-blur-2xl tablet:hidden">
        <button onClick={() => go("contact")} className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20">GET YOUR VISUAL HERE!</button>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
