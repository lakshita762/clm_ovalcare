function Footer() {
  const groups = [
    {
      h: "How It Works",
      items: [
        { label: "Our Process",    href: "#" },
        { label: "Why It Matters", href: "#" },
        { label: "Research",       href: "#" },
        { label: "Case Studies",   href: "#" },
      ]
    },
    {
      h: "Sectors",
      items: [
        { label: "Healthcare",            href: "#" },
        { label: "Corporate Wellness",    href: "#" },
        { label: "Tactical",              href: "#" },
        { label: "Performance Athletics", href: "#" },
        { label: "Wellness Industry",     href: "#" },
      ]
    },
    {
      h: "Company",
      items: [
        { label: "Why OVAL",   href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Blog",       href: "#" },
        { label: "FAQ",        href: "#" },
      ]
    },
  ];

  return (
    <footer style={{ background: "var(--clm-bg-2)", borderTop: "1px solid var(--clm-line)", padding: "80px 0 40px" }}>
      <div className="container">
        <div className="footer-grid">

          {groups.map((g, i) => (
            <div key={i}>
              <div className="label-mono" style={{ marginBottom: 16, color: "var(--clm-ink-3)" }}>{g.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {g.items.map((it, j) => (
                  <li key={j}>
                    <a href={it.href} style={{ fontSize: 14, color: "var(--clm-ink-2)" }}
                       onMouseEnter={(e) => e.currentTarget.style.color = "var(--clm-blue)"}
                       onMouseLeave={(e) => e.currentTarget.style.color = "var(--clm-ink-2)"}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <img src="assets/oval-logo.png" alt="OVAL" className="oval-logo" style={{ height: 32, display: "block" }} />
            <p style={{ fontSize: 14, color: "var(--clm-ink-3)", lineHeight: 1.6, marginTop: 20, maxWidth: "32ch" }}>
              Interested in learning how we can support you?
            </p>
            <a className="btn btn-clm" href="#" style={{ marginTop: 16 }}>
              Schedule a Call <IconArrow size={16} stroke={2} />
            </a>
          </div>
        </div>

        <div className="footer-bottom" style={{
          paddingTop: 32, borderTop: "1px solid var(--clm-line)",
        }}>
          <div style={{ fontSize: 13, color: "var(--clm-ink-3)" }}>
            © 2026 OVAL Health, Inc. All rights reserved. OVAL does not provide medical advice and is not intended to provide a diagnosis of disease or illness, or prescribe treatment of a disease or illness. All information provided herein is for informational and educational purposes only and has not been evaluated by the FDA. Always consult your physician with questions regarding your medical condition and before beginning any health or fitness routine.
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 13, flexShrink: 0 }}>
            <a href="#" style={{ color: "var(--clm-ink-3)" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--clm-blue)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--clm-ink-3)"}>Privacy</a>
            <a href="#" style={{ color: "var(--clm-ink-3)" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--clm-blue)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--clm-ink-3)"}>Terms</a>
            <a href="#" style={{ color: "var(--clm-ink-3)" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--clm-blue)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--clm-ink-3)"}>Cookies</a>
            <a href="#" style={{ color: "var(--clm-ink-3)" }}
               onMouseEnter={(e) => e.currentTarget.style.color = "var(--clm-blue)"}
               onMouseLeave={(e) => e.currentTarget.style.color = "var(--clm-ink-3)"}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
