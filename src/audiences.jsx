function Audiences() {
  const items = [
    {
      label: "Healthcare",
      icon: IconStetho,
      caption: "Monitor metabolic health in real time to guide preventative care.",
      grad: ["#1BB271", "#0A1F17"],
      img: "assets/healthcare.jpg",
    },
    {
      label: "Employers",
      icon: IconTrend,
      caption: "Improve workforce performance and reduce healthcare costs.",
      grad: ["#185038", "#0A1F17"],
      img: "assets/employers.jpg",
    },
    {
      label: "Military",
      icon: IconShield,
      caption: "Optimize readiness and enhance recovery resilience.",
      grad: ["#0E3A52", "#03222F"],
      img: "assets/military.jpg",
    },
    {
      label: "Longevity",
      icon: IconLeaf,
      caption: "Age with vitality through continuous metabolic insight.",
      grad: ["#2DDF94", "#185038"],
      img: "assets/longevity.jpg",
    },
  ];

  return (
    <section style={{ padding: "120px 0", background: "var(--clm-bg)", borderTop: "1px solid var(--clm-line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
          <div className="eyebrow eyebrow-clm" style={{ marginBottom: 20, justifyContent: "center" }}>The Impact</div>
          <h2 className="h-1" style={{ margin: 0, color: "var(--clm-ink)" }}>
            Preventative diagnostics can <span className="serif" style={{ color: "var(--clm-blue)" }}>improve outcomes</span> and reduce healthcare costs.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {items.map((it, i) => <AudienceCard key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ label, icon: IconEl, caption, grad, img }) {
  return (
    <a href="#" style={{
      display: "flex", flexDirection: "column", borderRadius: 20, overflow: "hidden",
      border: "1px solid var(--clm-line)", transition: "transform .2s ease, box-shadow .2s ease",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 44px rgba(79,216,255,0.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{
        position: "relative", aspectRatio: "4 / 5",
        background: `linear-gradient(160deg, ${grad[0]} 0%, ${grad[1]} 100%)`,
        overflow: "hidden",
      }}>
        <img src={img} alt={label} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
        }} />

        <div style={{
          position: "absolute", top: 20, left: 20,
          width: 48, height: 48, borderRadius: 12,
          background: "rgba(255,255,255,0.12)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <IconEl size={22} stroke={1.5} />
        </div>

        <div style={{
          position: "absolute", bottom: 20, left: 20, right: 20,
          fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", color: "white",
        }}>
          {label}
        </div>
      </div>

      <div style={{ padding: "20px 20px 24px", background: "var(--clm-bg-2)" }}>
        <p style={{ fontSize: 14, color: "var(--clm-ink-3)", lineHeight: 1.55, margin: 0 }}>{caption}</p>
        <div className="btn-link-clm" style={{ marginTop: 14 }}>
          Learn more <IconArrow size={13} stroke={2} />
        </div>
      </div>
    </a>
  );
}

window.Audiences = Audiences;
