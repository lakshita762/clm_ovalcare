// Top navigation — OVAL CLM landing page
// Per spec: logo only, top-left, nothing else.
const { useState: useStateN, useEffect: useEffectN } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateN(false);

  useEffectN(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(6,10,18,0.55)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--clm-line)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", height: 72 }}>
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <img src="assets/oval-logo.png" alt="OVAL" style={{ height: 28, display: "block" }} />
        </a>
      </div>
    </header>
  );
}

window.Nav = Nav;
