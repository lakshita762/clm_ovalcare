// Top navigation — OVAL CLM landing page
// Logo top-left, theme toggle top-right.
const { useState: useStateN, useEffect: useEffectN } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateN(false);
  const [theme, setTheme] = useStateN(() => document.documentElement.getAttribute("data-theme") || "dark");

  useEffectN(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("clm-theme", next);
    setTheme(next);
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "var(--clm-nav-bg)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--clm-line)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img src="assets/oval-logo.png" alt="OVAL" className="oval-logo" style={{ height: 28, display: "block" }} />
        </a>

        <button onClick={toggleTheme} aria-label="Toggle color theme" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 38, height: 38, borderRadius: "50%",
          background: "rgba(79,216,255,0.08)", border: "1px solid var(--clm-line)",
          color: "var(--clm-blue)",
        }}>
          {theme === "dark" ? <IconSun size={17} stroke={2} /> : <IconMoon size={17} stroke={2} />}
        </button>
      </div>
    </header>
  );
}

window.Nav = Nav;
