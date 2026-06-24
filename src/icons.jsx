// Iconography — simple, monoline, 24x24, 1.5 stroke
// Shared with the main oval.care site.

const Icon = ({ children, size = 24, stroke = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const IconArrow = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
const IconArrowUp = (p) => <Icon {...p}><path d="M7 17 17 7M9 7h8v8"/></Icon>;
const IconChevron = (p) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>;
const IconCheck = (p) => <Icon {...p}><path d="M5 12.5 10 17.5 19 7"/></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>;
const IconMinus = (p) => <Icon {...p}><path d="M5 12h14"/></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M6 6 18 18M18 6 6 18"/></Icon>;

// Heart / pulse — biosensor / monitoring
const IconPulse = (p) => <Icon {...p}>
  <path d="M3 12h4l2-5 4 10 2-5h6"/>
</Icon>;

// Sparkle — AI / intelligence
const IconSpark = (p) => <Icon {...p}>
  <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M6.5 17.5l2.8-2.8M14.7 9.3l2.8-2.8"/>
</Icon>;

// Shield with check — preventative
const IconShield = (p) => <Icon {...p}>
  <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6l-8-3Z"/>
  <path d="m9 12 2.5 2.5L15.5 10"/>
</Icon>;

// Connected nodes — biosensor integration
const IconNodes = (p) => <Icon {...p}>
  <circle cx="6" cy="6" r="2"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <circle cx="12" cy="12" r="2"/>
  <path d="M7.5 7.5 10.5 10.5M16.5 7.5 13.5 10.5M7.5 16.5 10.5 13.5M16.5 16.5 13.5 13.5"/>
</Icon>;

// Activity — tracking
const IconActivity = (p) => <Icon {...p}>
  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
</Icon>;

// Bell — alerts
const IconBell = (p) => <Icon {...p}>
  <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
</Icon>;

// Trending up — predictive
const IconTrend = (p) => <Icon {...p}>
  <path d="M22 7 13.5 15.5 8.5 10.5 2 17"/>
  <path d="M16 7h6v6"/>
</Icon>;

// Beaker — science
const IconScience = (p) => <Icon {...p}>
  <path d="M9 3h6M10 3v7l-5 8c-1 1.7 0 4 2 4h10c2 0 3-2.3 2-4l-5-8V3"/>
  <path d="M7 14h10"/>
</Icon>;

// User-circle — personalized
const IconUser = (p) => <Icon {...p}>
  <circle cx="12" cy="12" r="9"/>
  <circle cx="12" cy="10" r="3"/>
  <path d="M5.8 19a7 7 0 0 1 12.4 0"/>
</Icon>;

// Book — knowledge
const IconBook = (p) => <Icon {...p}>
  <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z"/>
  <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>
</Icon>;

// Leaf — sustainable
const IconLeaf = (p) => <Icon {...p}>
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
  <path d="M2 22 17 7"/>
</Icon>;

// Stethoscope — medical
const IconStetho = (p) => <Icon {...p}>
  <path d="M4 3v8a4 4 0 0 0 8 0V3"/>
  <path d="M8 15v3a4 4 0 0 0 8 0v-3"/>
  <circle cx="18" cy="9" r="2"/>
</Icon>;

// Heart
const IconHeart = (p) => <Icon {...p}>
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/>
</Icon>;

// Compass — guidance
const IconCompass = (p) => <Icon {...p}>
  <circle cx="12" cy="12" r="9"/>
  <path d="m16 8-2 6-6 2 2-6 6-2Z"/>
</Icon>;

// Quote
const IconQuote = (p) => <Icon {...p}>
  <path d="M3 21c3 0 6-2 6-8V5H3v8h3c0 3-1 4-3 4Z M14 21c3 0 6-2 6-8V5h-6v8h3c0 3-1 4-3 4Z"/>
</Icon>;

// Phone (mobile mock)
const IconPhone = (p) => <Icon {...p}>
  <rect x="6" y="2" width="12" height="20" rx="2"/>
  <path d="M11 18h2"/>
</Icon>;

// Watch
const IconWatch = (p) => <Icon {...p}>
  <circle cx="12" cy="12" r="6"/>
  <path d="M9 18l-1 3h8l-1-3M9 6 8 3h8l-1 3"/>
</Icon>;

// Drop — for blood/glucose hint
const IconDrop = (p) => <Icon {...p}>
  <path d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z"/>
</Icon>;

// Brain — AI / intelligence
const IconBrain = (p) => <Icon {...p}>
  <path d="M9 4.5A2.5 2.5 0 0 0 6.5 7 2.8 2.8 0 0 0 5 12a2.8 2.8 0 0 0 1.5 5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 9 4.5Z"/>
  <path d="M15 4.5A2.5 2.5 0 0 1 17.5 7 2.8 2.8 0 0 1 19 12a2.8 2.8 0 0 1-1.5 5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5v-10A2.5 2.5 0 0 1 15 4.5Z"/>
  <path d="M9 9h1.5M9 13h2M13.5 9H15M13 13h2"/>
</Icon>;

// Runner — effort / personalized training
const IconRunner = (p) => <Icon {...p}>
  <circle cx="14" cy="4.5" r="1.6"/>
  <path d="M10.5 8 8 10.5l1 3.5L6 18M10.5 8l3 1.5 2-1.5M9.5 13.5l3.5-1 2.5 3.5"/>
</Icon>;

// Sun — light theme toggle
const IconSun = (p) => <Icon {...p}>
  <circle cx="12" cy="12" r="4"/>
  <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
</Icon>;

// Moon — dark theme toggle
const IconMoon = (p) => <Icon {...p}>
  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z"/>
</Icon>;

window.Icon = Icon;
window.IconArrow = IconArrow;
window.IconArrowUp = IconArrowUp;
window.IconChevron = IconChevron;
window.IconCheck = IconCheck;
window.IconPlus = IconPlus;
window.IconMinus = IconMinus;
window.IconClose = IconClose;
window.IconPulse = IconPulse;
window.IconSpark = IconSpark;
window.IconShield = IconShield;
window.IconNodes = IconNodes;
window.IconActivity = IconActivity;
window.IconBell = IconBell;
window.IconTrend = IconTrend;
window.IconScience = IconScience;
window.IconUser = IconUser;
window.IconBook = IconBook;
window.IconLeaf = IconLeaf;
window.IconStetho = IconStetho;
window.IconHeart = IconHeart;
window.IconCompass = IconCompass;
window.IconQuote = IconQuote;
window.IconPhone = IconPhone;
window.IconWatch = IconWatch;
window.IconDrop = IconDrop;
window.IconBrain = IconBrain;
window.IconRunner = IconRunner;
window.IconSun = IconSun;
window.IconMoon = IconMoon;
