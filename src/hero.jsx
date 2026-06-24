// Hero — OVAL CLM "Coming Soon" teaser
const { useState: useStateHero, useEffect: useEffectHero } = React;

const HERO_WORDS = ["Heart Rate", "VO₂ Max", "Blood Sugar", "Cholesterol"];

function Hero() {
  const [wordIdx, setWordIdx] = useStateHero(0);
  const [fading, setFading] = useStateHero(false);

  useEffectHero(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % HERO_WORDS.length);
        setFading(false);
      }, 400);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      background: "var(--clm-bg)",
      color: "var(--clm-ink)",
      position: "relative",
      overflow: "hidden",
      paddingTop: 72,
    }}>
      {/* decorative oval lines */}
      <svg style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} width="100%" height="100%">
        <defs>
          <pattern id="hero-ovals" width="240" height="160" patternUnits="userSpaceOnUse">
            <ellipse cx="120" cy="80" rx="100" ry="50" fill="none" stroke="#4FD8FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-ovals)" />
      </svg>

      <div className="container hero-inner" style={{ position: "relative", zIndex: 1 }}>
        {/* Left — copy */}
        <div className="reveal">
          <div className="eyebrow eyebrow-clm" style={{ marginBottom: 22 }}>Coming Soon</div>

          <h1 className="h-display" style={{ color: "var(--clm-ink)", margin: 0 }}>
            What Your<br/>
            <span style={{
              display: "inline-block",
              color: "var(--clm-blue)",
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}>
              {HERO_WORDS[wordIdx]}
            </span> Isn't Telling You
          </h1>

          <p style={{
            fontSize: 20, fontWeight: 500, color: "var(--clm-ink)",
            marginTop: 28, letterSpacing: "-0.01em", lineHeight: 1.5,
          }}>
            OVAL's <span style={{ color: "var(--clm-blue)" }}>Continuous Metabolic Intelligence™</span> platform.
          </p>

          <p style={{
            fontSize: 17, lineHeight: 1.65, color: "var(--clm-ink-2)",
            marginTop: 20, maxWidth: "46ch",
          }}>
            Whether you're monitoring your health or your performance, your lactate level
            provides a window into your underlying metabolic state, the foundation of your
            health and wellness.
          </p>

          <div style={{ marginTop: 36 }}>
            <a className="btn btn-clm" href="#">
              Partner Opportunities <IconArrow size={16} stroke={2} />  
            </a>
          </div>

          <p style={{
            marginTop: 56, fontSize: 11, lineHeight: 1.6, color: "var(--clm-ink-3)",
            maxWidth: "48ch", letterSpacing: "0.01em",
          }}>
            {/* CAUTION — Investigational device. Limited by federal law to investigational use. */}
          </p>
        </div>

        {/* Right — device visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ClmDevice />
        </div>
      </div>
    </section>
  );
}

function ClmDevice() {
  return (
    <div className="reveal clm-device">
      {/* ambient glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 50% 46%, rgba(79,216,255,0.35), rgba(79,216,255,0.08) 45%, transparent 72%)",
        filter: "blur(10px)",
        animation: "clm-glow-pulse 6s ease-in-out infinite",
      }} />

      <svg viewBox="0 0 520 600" width="100%" height="100%" style={{ position: "relative", display: "block" }}>
        <defs>
          <linearGradient id="clm-pill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--clm-pill-1)" }} />
            <stop offset="1" style={{ stopColor: "var(--clm-pill-2)" }} />
          </linearGradient>
          <linearGradient id="clm-wave" x1="0" x2="1">
            <stop offset="0" stopColor="#4FD8FF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#4FD8FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#4FD8FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="clm-sheen" cx="50%" cy="0%" r="70%">
            <stop offset="0" style={{ stopColor: "var(--clm-sheen)" }} />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* slow-rotating orbit ring */}
        <g style={{ transformOrigin: "260px 300px", animation: "clm-rotate-slow 50s linear infinite" }}>
          <circle cx="260" cy="300" r="220" fill="none" stroke="rgba(79,216,255,0.22)" strokeWidth="1" strokeDasharray="1 12" />
        </g>
        <g style={{ transformOrigin: "260px 300px", animation: "clm-rotate-slow 70s linear infinite reverse" }}>
          <circle cx="260" cy="300" r="255" fill="none" stroke="rgba(79,216,255,0.12)" strokeWidth="1" strokeDasharray="1 18" />
        </g>

        {/* lactate wave ribbon */}
        <path d="M10 360 C110 250 180 430 260 320 S 410 180 510 280"
          fill="none" stroke="url(#clm-wave)" strokeWidth="3" strokeDasharray="8 16"
          style={{ animation: "clm-dash 4s linear infinite" }} />

        {/* device pill */}
        <rect x="160" y="120" width="200" height="360" rx="100" fill="url(#clm-pill)" stroke="#4FD8FF" strokeOpacity="0.55" strokeWidth="2" />
        <rect x="160" y="120" width="200" height="360" rx="100" fill="url(#clm-sheen)" />

        {/* wordmark */}
        <text x="260" y="270" textAnchor="middle" fontSize="24" fontWeight="700" style={{ fill: "var(--clm-pill-ink)" }} letterSpacing="3" fontFamily="Geist, sans-serif">OVAL</text>
        <text x="260" y="308" textAnchor="middle" fontSize="34" fontWeight="700" fill="#4FD8FF" letterSpacing="4" fontFamily="Geist, sans-serif">CLM</text>

        {/* mini live waveform */}
        <path d="M190 360 h14 l8 -26 l12 48 l10 -34 l12 22 h14"
          fill="none" style={{ stroke: "var(--clm-pill-ink-soft)" }} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* floating labels */}
      <div style={{
        position: "absolute", top: 36, left: 8,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clm-blue)",
          animation: "pulse-dot 1.6s ease-in-out infinite" }} />
        <span className="label-mono" style={{ color: "var(--clm-blue)" }}>Live Lactate</span>
      </div>

      <div style={{
        position: "absolute", top: "44%", left: -8,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <IconHeart size={14} stroke={2} />
        <span className="label-mono" style={{ color: "var(--clm-ink-2)" }}>Heart Rate</span>
      </div>

      <div style={{
        position: "absolute", bottom: 64, right: 4,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span className="label-mono" style={{ color: "var(--clm-blue)" }}>Metabolic Intelligence</span>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clm-blue)",
          animation: "pulse-dot 1.6s ease-in-out infinite" }} />
      </div>
    </div>
  );
}

window.Hero = Hero;
window.ClmDevice = ClmDevice;
