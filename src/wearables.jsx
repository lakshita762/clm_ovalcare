function Wearables() {
  const items = [
    {
      name: "Heart Rate",
      caption: "Measures how your body responds to stress.",
      visual: <DeviceBadge icon={IconHeart} value="142" unit="bpm" />,
    },
    {
      name: "Glucose",
      caption: "Measures fuel availability.",
      visual: <DeviceBadge icon={IconDrop} value="103" unit="mg/dL" />,
    },
    {
      name: "OVAL CLM™",
      caption: "Measures metabolic demand.",
      visual: <ClmOrb />,
      highlight: true,
    },
  ];

  return (
    <section style={{ padding: "120px 0", background: "var(--clm-bg)", borderTop: "1px solid var(--clm-line)" }}>
      <div className="container">
        <div className="wearables-head">
          <div>
            <div className="eyebrow eyebrow-clm" style={{ marginBottom: 20 }}>The Science</div>
            <h2 className="h-1" style={{ margin: 0, color: "var(--clm-ink)" }}>
              Lactate is a window into your <span className="serif" style={{ color: "var(--clm-blue)" }}>mitochondrial function</span>.
            </h2>
          </div>
          <p className="lede" style={{ marginBottom: 6, color: "var(--clm-ink-2)" }}>
            Considered a waste byproduct for nearly two centuries, lactate is the most precise
            signal of metabolic fitness — the missing layer that provides the context for
            current measurements to reveal your true metabolic state.
          </p>
        </div>

        <div className="wearables-grid">
          {items.map((it, i) => (
            <div key={i} style={{
              background: "var(--clm-bg-2)",
              border: it.highlight ? "1px solid rgba(79,216,255,0.45)" : "1px solid var(--clm-line)",
              borderRadius: 24, padding: 36, minHeight: 300,
              display: "flex", flexDirection: "column", gap: 28,
              boxShadow: it.highlight ? "0 0 40px rgba(79,216,255,0.08)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>{it.visual}</div>
              <div style={{ marginTop: "auto", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--clm-ink)" }}>{it.name}</div>
                <p style={{ fontSize: 14, marginTop: 8, lineHeight: 1.55, color: "var(--clm-ink-3)" }}>
                  {it.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeviceBadge({ icon: IconEl, value, unit }) {
  return (
    <div style={{
      width: 140, height: 140, borderRadius: "50%",
      background: "rgba(79,216,255,0.08)",
      border: "1px solid rgba(79,216,255,0.25)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4,
      color: "var(--clm-blue)",
    }}>
      <IconEl size={26} stroke={1.5} />
      <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--clm-ink)" }}>{value}</div>
      <div className="label-mono" style={{ color: "var(--clm-ink-3)" }}>{unit}</div>
    </div>
  );
}

function ClmOrb() {
  return (
    <div style={{ position: "relative", width: 140, height: 140 }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,216,255,0.5), rgba(79,216,255,0.08) 60%, transparent 75%)",
        filter: "blur(6px)",
        animation: "clm-glow-pulse 5s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", inset: 20, borderRadius: "50%",
        border: "2px solid var(--clm-blue)",
        background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18), transparent 60%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.08em", color: "var(--clm-blue)" }}>CLM</span>
      </div>
    </div>
  );
}

window.Wearables = Wearables;
