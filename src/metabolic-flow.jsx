function MetabolicFlow() {
  const flow1 = [
    { icon: IconRunner, label: "Effort" },
    { icon: IconHeart, label: "Heart Rate" },
    { icon: IconPulse, label: "Recovery", sub: "(HRV)" },
    { icon: IconDrop, label: "Fuel", sub: "(Glucose)" },
    { clm: true, label: "Metabolism", sub: "(OVAL CLM)", subColor: "var(--clm-blue)" },
  ];

  const flow2 = [
    { icon: IconCheck, label: "SMART Test" },
    { value: "87", label: "MetFlex Index™" },
    { icon: IconRunner, label: "Personalized Training" },
    { icon: IconBrain, label: "OVAL AI" },
    { clm: true, label: "OVAL CLM", sub: "Continuous Metabolic Intelligence", subColor: "var(--clm-blue)" },
  ];

  return (
    <section style={{
      padding: "120px 0", background: "var(--clm-bg-2)", color: "white",
      position: "relative", overflow: "hidden", borderTop: "1px solid var(--clm-line)",
    }}>
      <svg style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} width="100%" height="100%">
        <defs>
          <pattern id="flow-ovals" width="240" height="160" patternUnits="userSpaceOnUse">
            <ellipse cx="120" cy="80" rx="100" ry="50" fill="none" stroke="#4FD8FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flow-ovals)" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <FlowBlock
          eyebrow="The Insight"
          title={<>Finally See What's Happening<br/>Inside Your <span style={{ color: "var(--clm-blue)" }}>Body</span></>}
          subhead="OVAL provides insight into how effectively your body produces and utilizes energy."
          linkLabel="Learn The Science"
          steps={flow1}
        />

        <div style={{ height: 96 }} />

        <FlowBlock
          eyebrow="The Platform"
          title={<>From Assessment to<br/><span style={{ color: "var(--clm-blue)" }}>Continuous Intelligence</span></>}
          subhead="OVAL's approach to metabolic fitness is simple, precise, and actionable."
          linkLabel="Explore the Platform"
          steps={flow2}
        />
      </div>
    </section>
  );
}

function FlowBlock({ eyebrow, title, subhead, linkLabel, steps }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 48 }}>
        <div>
          <div className="eyebrow eyebrow-clm" style={{ marginBottom: 20 }}>{eyebrow}</div>
          <h2 className="h-1" style={{ margin: 0, color: "white" }}>{title}</h2>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--clm-ink-2)", maxWidth: "44ch", margin: 0 }}>
            {subhead}
          </p>
          <a className="btn-link-clm" href="#" style={{ marginTop: 20 }}>
            {linkLabel} <IconArrow size={14} stroke={2} />
          </a>
        </div>
      </div>

      <div style={{
        padding: "44px 48px", borderRadius: 24,
        background: "rgba(79,216,255,0.03)", border: "1px solid var(--clm-line)",
      }}>
        <FlowDiagram steps={steps} />
      </div>
    </div>
  );
}

function FlowDiagram({ steps }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <FlowNode {...s} />
          {i < steps.length - 1 && <FlowArrow />}
        </React.Fragment>
      ))}
    </div>
  );
}

function FlowNode({ icon: IconEl, value, clm, label, sub, subColor }) {
  const highlight = !!clm;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, flex: "0 0 auto", width: 132 }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: highlight ? "rgba(79,216,255,0.12)" : "rgba(79,216,255,0.05)",
        border: highlight ? "1px solid var(--clm-blue)" : "1px solid rgba(79,216,255,0.2)",
        color: highlight ? "var(--clm-blue)" : "rgba(79,216,255,0.7)",
        boxShadow: highlight ? "0 0 30px rgba(79,216,255,0.35)" : "none",
        animation: highlight ? "clm-glow-pulse 4s ease-in-out infinite" : "none",
      }}>
        {IconEl
          ? <IconEl size={28} stroke={1.5} />
          : clm
            ? <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.05em" }}>CLM</span>
            : <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{value}</span>}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: subColor || "var(--clm-ink-3)", marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div style={{ flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center",
      color: "rgba(79,216,255,0.3)", marginTop: 22, minWidth: 16, padding: "0 4px" }}>
      <IconArrow size={18} stroke={2} />
    </div>
  );
}

window.MetabolicFlow = MetabolicFlow;
