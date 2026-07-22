/* @ds-bundle: {"format":4,"namespace":"KamriKeithDesignSystem_dba323","components":[{"name":"NumberMark","sourcePath":"components/brand/NumberMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"StatLine","sourcePath":"components/data/StatLine.jsx"}],"sourceHashes":{"components/brand/NumberMark.jsx":"f359092514fe","components/core/Badge.jsx":"5ca184ae4b7f","components/core/Button.jsx":"8fd8fa46adf7","components/core/Card.jsx":"0d68b7b93ccc","components/core/Tag.jsx":"3df152a63e8b","components/data/StatCard.jsx":"5a56e8e39dd6","components/data/StatLine.jsx":"5ac3c7e7e750","ui_kits/recruiting_site/About.jsx":"cf756c8821de","ui_kits/recruiting_site/App.jsx":"9fc54565667b","ui_kits/recruiting_site/Bits.jsx":"e2a7fd58c58d","ui_kits/recruiting_site/CTA.jsx":"abdaa5b55292","ui_kits/recruiting_site/Contact.jsx":"6290545467dd","ui_kits/recruiting_site/Footer.jsx":"4a413c407f1c","ui_kits/recruiting_site/Gallery.jsx":"da2cc00e910e","ui_kits/recruiting_site/Hero.jsx":"5f7df22ce849","ui_kits/recruiting_site/Nav.jsx":"7d3ee3c06c1e","ui_kits/recruiting_site/Promos.jsx":"df2ff2197da8","ui_kits/recruiting_site/Results.jsx":"f7751e727203","ui_kits/recruiting_site/Roster.jsx":"32b919a95e9a","ui_kits/recruiting_site/Schedule.jsx":"68fb41c9e371","ui_kits/recruiting_site/ScoreBand.jsx":"ed48899bec89","ui_kits/recruiting_site/Sponsors.jsx":"ddf01260d24f","ui_kits/recruiting_site/Standings.jsx":"03314f694b3a","ui_kits/recruiting_site/StatsTable.jsx":"2180fb7609fc","ui_kits/recruiting_site/TopBar.jsx":"0657c3da80bb","ui_kits/recruiting_site/TopStories.jsx":"a7f93bb0e69e","ui_kits/recruiting_site/Videos.jsx":"333a23bf2246","ui_kits/social_kit/GameDay.jsx":"eab42771416f","ui_kits/social_kit/SocialApp.jsx":"eb33b000b062","ui_kits/social_kit/Spotlight.jsx":"257ed4950854","ui_kits/social_kit/StatHighlight.jsx":"1c4d17a44507"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KamriKeithDesignSystem_dba323 = window.KamriKeithDesignSystem_dba323 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/NumberMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberMark — Kamri's jersey-number brand device. A plate holding the
 * number (default "5") or a monogram like "K5". Circle or shield shape,
 * in royal / ink / cyan / outline. This is the brand's stand-in mark
 * (no logo exists) — build it in type, never as a drawn logo.
 */
function NumberMark({
  value = '5',
  shape = 'circle',
  tone = 'royal',
  size = 96,
  style = {},
  ...rest
}) {
  const tones = {
    royal: {
      bg: 'var(--red-600)',
      fg: '#fff',
      bd: 'var(--red-600)'
    },
    ink: {
      bg: 'var(--ink-900)',
      fg: '#fff',
      bd: 'var(--ink-900)'
    },
    accent: {
      bg: 'var(--gold-500)',
      fg: 'var(--ink-900)',
      bd: 'var(--gold-500)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--ink-900)',
      bd: 'var(--ink-900)'
    },
    chalk: {
      bg: '#fff',
      fg: 'var(--red-600)',
      bd: '#fff'
    }
  };
  const c = tones[tone];
  const radii = {
    circle: '50%',
    shield: '18% 18% 40% 40% / 16% 16% 55% 55%',
    plate: 'var(--radius-md)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      background: c.bg,
      color: c.fg,
      border: `${Math.max(2, size * 0.045)}px solid ${c.bd === 'transparent' ? 'var(--ink-900)' : c.bd}`,
      borderRadius: radii[shape],
      boxShadow: 'var(--shadow-hard)',
      fontFamily: 'var(--font-display)',
      fontSize: size * (String(value).length > 1 ? 0.44 : 0.62),
      lineHeight: 1,
      letterSpacing: String(value).length > 1 ? '-0.02em' : '0',
      ...style
    }
  }, rest), value);
}
Object.assign(__ds_scope, { NumberMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NumberMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill. Solid or soft tones in brand colors.
 * Use for class year, position, "COMMITTED", availability, etc.
 */
function Badge({
  children,
  tone = 'royal',
  soft = false,
  style = {},
  ...rest
}) {
  const solid = {
    royal: {
      bg: 'var(--red-600)',
      fg: '#fff'
    },
    ink: {
      bg: 'var(--ink-900)',
      fg: '#fff'
    },
    accent: {
      bg: 'var(--gold-500)',
      fg: 'var(--ink-900)'
    },
    clay: {
      bg: 'var(--clay-500)',
      fg: '#fff'
    },
    spirit: {
      bg: 'var(--pink-500)',
      fg: '#fff'
    }
  };
  const softMap = {
    royal: {
      bg: 'var(--red-100)',
      fg: 'var(--red-800)'
    },
    ink: {
      bg: 'var(--gray-200)',
      fg: 'var(--ink-900)'
    },
    accent: {
      bg: 'var(--gold-100)',
      fg: 'var(--gold-700)'
    },
    clay: {
      bg: 'var(--clay-100)',
      fg: 'var(--clay-700)'
    },
    spirit: {
      bg: 'var(--pink-100)',
      fg: 'var(--pink-600)'
    }
  };
  const c = (soft ? softMap : solid)[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: c.bg,
      color: c.fg,
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the Kamri Keith brand.
 * Pill-shaped, athletic. Variants: primary (royal), secondary (ink),
 * accent (cyan), ghost, outline. Optional `hard` varsity offset shadow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  hard = false,
  full = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13
    },
    md: {
      padding: '12px 24px',
      fontSize: 15
    },
    lg: {
      padding: '16px 34px',
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '2px solid var(--color-primary)'
    },
    secondary: {
      background: 'var(--ink-900)',
      color: 'var(--chalk)',
      border: '2px solid var(--ink-900)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--ink-900)',
      border: '2px solid var(--color-accent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid transparent'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "kk-btn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      lineHeight: 1,
      cursor: 'pointer',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      width: full ? '100%' : 'auto',
      transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      boxShadow: hard ? 'var(--shadow-hard)' : 'none',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. Variants: plain (soft shadow), hard (varsity
 * offset shadow + ink border), ink (dark surface), royal (brand fill).
 */
function Card({
  children,
  variant = 'plain',
  pad = 24,
  style = {},
  ...rest
}) {
  const variants = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    hard: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--chalk)',
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-lg)'
    },
    royal: {
      background: 'var(--red-600)',
      color: 'var(--chalk)',
      border: '2px solid var(--red-600)',
      boxShadow: 'var(--shadow-lg)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — outlined chip for meta attributes (skills, positions, keywords).
 * Lighter than Badge; hairline border, optional dot.
 */
function Tag({
  children,
  dot = false,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: active ? 'var(--ink-900)' : 'transparent',
      color: active ? 'var(--chalk)' : 'var(--ink-800)',
      border: `1.5px solid ${active ? 'var(--ink-900)' : 'var(--gray-300)'}`,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.2,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--gold-500)'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — the hero stat block. Huge condensed numeral + uppercase label,
 * optional unit and caption. The workhorse of any recruiting artifact.
 */
function StatCard({
  value,
  label,
  unit,
  caption,
  variant = 'plain',
  align = 'left',
  style = {},
  ...rest
}) {
  const dark = variant === 'ink' || variant === 'royal';
  const surfaces = {
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    hard: {
      background: 'var(--surface-card)',
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard)'
    },
    ink: {
      background: 'var(--ink-900)',
      border: '2px solid var(--ink-900)'
    },
    royal: {
      background: 'var(--red-600)',
      border: '2px solid var(--red-600)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      borderRadius: 'var(--radius-lg)',
      padding: '22px 24px',
      ...surfaces[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(44px, 6vw, 72px)',
      lineHeight: 0.9,
      letterSpacing: '-0.01em',
      color: dark ? 'var(--chalk)' : 'var(--ink-900)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      color: variant === 'royal' ? 'var(--gold-300)' : 'var(--gold-500)'
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: dark ? 'rgba(255,255,255,.75)' : 'var(--text-muted)'
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      marginTop: 2,
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatLine — a compact label/value row for stat tables and specs
 * (season lines, measurables, academics). Dotted leader between label and value.
 */
function StatLine({
  label,
  value,
  emphasis = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 600,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: '1.5px dotted var(--gray-300)',
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: emphasis ? 'var(--font-display)' : 'var(--font-body)',
      fontWeight: emphasis ? 400 : 700,
      fontSize: emphasis ? 22 : 16,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, value));
}
Object.assign(__ds_scope, { StatLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatLine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/About.jsx
try { (() => {
/* Recruiting site — BigSlam "Special Interview" split (dark) + career stat cards. */
const {
  StatCard
} = window.KamriKeithDesignSystem_dba323;
function About() {
  const {
    KK,
    GLButton
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: KK.ink,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(280px,1fr) minmax(320px,1.15fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-catcher.webp",
    alt: "Kamri Keith",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '55% 18%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(15,18,22,.1), rgba(15,18,22,.75))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(40px,6vw,72px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 32,
      color: KK.red,
      lineHeight: 1
    }
  }, "The story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 'clamp(34px,5vw,54px)',
      color: '#fff',
      margin: '2px 0 18px',
      lineHeight: .95
    }
  }, "Compete Every Pitch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.body,
      fontSize: 16.5,
      color: 'rgba(255,255,255,.82)',
      lineHeight: 1.65,
      maxWidth: 480
    }
  }, "A three-year varsity starter at Brusly and travel-ball ace for the LA Bandits, Kamri lives in the circle \u2014 mixing a heavy rise ball with a late-breaking drop and a changeup she'll throw in any count. Coaches know her for competing on every pitch and setting the tone for her defense."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      margin: '28px 0'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "4.0",
    label: "GPA",
    variant: "ink"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "65",
    unit: "MPH",
    label: "Fastball",
    variant: "hard"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1st",
    label: "All-District",
    variant: "ink"
  })), /*#__PURE__*/React.createElement(GLButton, {
    variant: "red",
    size: "lg",
    href: "#contact"
  }, "Read Full Bio"))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/App.jsx
try { (() => {
/* Recruiting site — app shell composing all sections (BigSlam layout). */
function SiteApp() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const open = e => {
    if (e && e.preventDefault) e.preventDefault();
    setContactOpen(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kk-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--field)'
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, null), /*#__PURE__*/React.createElement(window.Nav, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.Hero, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.ScoreBand, null), /*#__PURE__*/React.createElement(window.Promos, null), /*#__PURE__*/React.createElement(window.Schedule, null), /*#__PURE__*/React.createElement(window.Results, null), /*#__PURE__*/React.createElement(window.TopStories, null), /*#__PURE__*/React.createElement(window.Standings, null), /*#__PURE__*/React.createElement(window.Videos, null), /*#__PURE__*/React.createElement(window.Roster, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.CTA, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.Sponsors, null), /*#__PURE__*/React.createElement(window.Gallery, null), /*#__PURE__*/React.createElement(window.Footer, {
    onContact: open
  }), /*#__PURE__*/React.createElement(window.ContactModal, {
    open: contactOpen,
    onClose: () => setContactOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Bits.jsx
try { (() => {
/* Recruiting site — shared BigSlam-style helpers (fonts, SectionHead, GLButton, Crest). */
const KK = {
  head: "'Oswald','Arial Narrow',sans-serif",
  script: "'Grand Hotel',cursive",
  body: "'Barlow',system-ui,sans-serif",
  red: 'var(--red-600)',
  redDk: 'var(--red-800)',
  gold: 'var(--gold-500)',
  ink: '#191919',
  /* BigSlam near-black */
  dark: '#222222',
  /* BigSlam row/card dark */
  wrap: 1200
};

/* BigSlam signature skewed (parallelogram) button — italic slant, un-skewed inner text. */
function GLButton({
  children,
  variant = 'red',
  size = 'md',
  href = '#',
  onClick,
  style
}) {
  const pad = size === 'lg' ? '15px 40px' : size === 'sm' ? '9px 24px' : '12px 32px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 12 : 13.5;
  const V = {
    red: {
      background: KK.red,
      color: '#fff',
      border: '2px solid ' + KK.red
    },
    dark: {
      background: KK.ink,
      color: '#fff',
      border: '2px solid ' + KK.ink
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,.55)'
    },
    outlineDark: {
      background: 'transparent',
      color: KK.ink,
      border: '2px solid ' + KK.ink
    },
    gold: {
      background: KK.gold,
      color: KK.ink,
      border: '2px solid ' + KK.gold
    }
  }[variant];
  const hoverBg = variant === 'red' ? KK.redDk : KK.red; /* all others swipe to red */
  const hoverIn = e => {
    Object.assign(e.currentTarget.style, {
      background: hoverBg,
      borderColor: hoverBg,
      color: '#fff'
    });
  };
  const hoverOut = e => {
    Object.assign(e.currentTarget.style, {
      background: V.background,
      borderColor: V.border.split(' ').pop(),
      color: V.color
    });
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: 'inline-block',
      transform: 'skewX(-10deg)',
      padding: pad,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all .22s ease',
      ...V,
      ...style
    },
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: 'skewX(10deg)',
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: fs
    }
  }, children));
}

/* BigSlam section title. Centered: script eyebrow + big title + short red underline.
   Row (default): title left + growing hairline rule + action on the right. */
function SectionHead({
  eyebrow,
  title,
  light,
  center,
  action
}) {
  const titleEl = /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      fontSize: 'clamp(28px,4vw,42px)',
      margin: 0,
      color: light ? '#fff' : KK.ink,
      lineHeight: 1
    }
  }, title);
  if (center) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 46
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: KK.script,
        fontSize: 32,
        color: KK.red,
        lineHeight: 1,
        marginBottom: 2
      }
    }, eyebrow), titleEl, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 3,
        background: KK.red,
        margin: '16px auto 0',
        transform: 'skewX(-20deg)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 28,
      color: KK.red,
      lineHeight: 1,
      marginBottom: -2
    }
  }, eyebrow), titleEl), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: light ? 'rgba(255,255,255,.14)' : '#e0e4ea'
    }
  }), action);
}

/* Circular monogram team crest (stand-in — no real crests exist). */
function Crest({
  label,
  tone = 'ink',
  size = 64
}) {
  const T = {
    red: {
      bg: KK.red,
      fg: '#fff'
    },
    ink: {
      bg: KK.ink,
      fg: '#fff'
    },
    gray: {
      bg: '#e4e8ee',
      fg: KK.ink
    },
    gold: {
      bg: KK.gold,
      fg: KK.ink
    },
    white: {
      bg: '#fff',
      fg: KK.ink
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: size,
      height: size,
      borderRadius: '50%',
      background: T.bg,
      color: T.fg,
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: size * 0.36,
      lineHeight: 1,
      boxShadow: '0 4px 14px rgba(15,18,22,.18)'
    }
  }, label);
}
Object.assign(window, {
  KK,
  SectionHead,
  GLButton,
  Crest
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Bits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/CTA.jsx
try { (() => {
/* Recruiting site — BigSlam "Tickets On Sale" style red banner → recruiting CTA. */
function CTA({
  onContact
}) {
  const {
    KK,
    GLButton
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: KK.red,
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-catcher.webp",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      mixBlendMode: 'multiply',
      opacity: .25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '52px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 34,
      color: KK.gold,
      lineHeight: 1
    }
  }, "Uncommitted"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 'clamp(34px,5.5vw,60px)',
      color: '#fff',
      margin: '2px 0 0',
      lineHeight: .9
    }
  }, "Recruiting \u2014 Class of 2027")), /*#__PURE__*/React.createElement(GLButton, {
    variant: "dark",
    size: "lg",
    onClick: onContact
  }, "Contact My Coach")));
}
window.CTA = CTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Contact.jsx
try { (() => {
/* Recruiting site — "Recruit Me" contact modal. */
const {
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function ContactModal({
  open,
  onClose
}) {
  const {
    KK,
    GLButton
  } = window;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(15,18,22,.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderTop: '5px solid ' + KK.red,
      boxShadow: '0 30px 80px rgba(0,0,0,.4)',
      width: 'min(440px,100%)',
      padding: 32
    }
  }, !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 28,
      color: KK.red,
      lineHeight: 1
    }
  }, "Coaches"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 34,
      margin: '0 0 4px',
      color: KK.ink
    }
  }, "Let's Talk"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.body,
      color: '#6b7280',
      fontSize: 15,
      margin: '0 0 20px'
    }
  }, "Drop your info and I'll follow up with film and my schedule."), ['Your name', 'School / program', 'Email'].map((p, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    required: true,
    placeholder: p,
    type: i === 2 ? 'email' : 'text',
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: 10,
      padding: '13px 15px',
      fontFamily: KK.body,
      fontSize: 15,
      border: '1.5px solid #cbd2db',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      width: '100%',
      marginTop: 8,
      padding: '14px',
      background: KK.red,
      color: '#fff',
      border: 'none',
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Send")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "accent",
    size: 80
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 30,
      margin: '14px 0 6px',
      color: KK.ink
    }
  }, "You're All Set"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.body,
      color: '#6b7280',
      fontSize: 15,
      margin: 0
    }
  }, "Thanks for reaching out \u2014 I'll be in touch soon."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(GLButton, {
    variant: "outlineDark",
    size: "sm",
    onClick: onClose
  }, "Close")))));
}
window.ContactModal = ContactModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Footer.jsx
try { (() => {
/* Recruiting site — BigSlam multi-column dark footer. */
const {
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function Footer({
  onContact
}) {
  const {
    KK,
    GLButton
  } = window;
  const flink = {
    fontFamily: KK.body,
    fontSize: 14.5,
    color: 'rgba(255,255,255,.66)',
    textDecoration: 'none',
    lineHeight: 1.9
  };
  const H = ({
    children
  }) => /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 18,
      color: '#fff',
      margin: '0 0 18px'
    }
  }, children);
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: '#0a0c0f',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '64px 20px 44px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "royal",
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 24,
      color: '#fff'
    }
  }, "Kamri Keith")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.body,
      fontSize: 14.5,
      color: 'rgba(255,255,255,.6)',
      maxWidth: 260,
      lineHeight: 1.65,
      margin: '0 0 18px'
    }
  }, "RHP \xB7 #5 \xB7 Class of 2027. Competing for a program that competes for championships."), /*#__PURE__*/React.createElement(GLButton, {
    variant: "red",
    size: "sm",
    onClick: onContact
  }, "Recruit Me")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, null, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Home', '#home'], ['Schedule', '#schedule'], ['Stats', '#stats'], ['Highlights', '#highlights'], ['Roster', '#roster'], ['About', '#about']].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    style: flink
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, null, "Contact Info"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.body,
      fontSize: 14.5,
      color: 'rgba(255,255,255,.66)',
      lineHeight: 1.9
    }
  }, "Brusly, Louisiana", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kamri@example.com",
    style: flink
  }, "kamri@example.com"), /*#__PURE__*/React.createElement("br", null), "(225) 555-0105"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, ['f', 'in', 't', 'v'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.25)',
      fontFamily: KK.body,
      fontWeight: 700,
      fontSize: 12,
      color: '#fff'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, null, "Recruiting"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.body,
      fontSize: 14.5,
      color: 'rgba(255,255,255,.66)',
      lineHeight: 1.9
    }
  }, "Position \u2014 RHP", /*#__PURE__*/React.createElement("br", null), "Grad Year \u2014 2027", /*#__PURE__*/React.createElement("br", null), "GPA \u2014 4.0", /*#__PURE__*/React.createElement("br", null), "Fastball \u2014 65 MPH", /*#__PURE__*/React.createElement("br", null), "Bats / Throws \u2014 R / R"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      fontSize: 11.5,
      color: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kamri Keith. All Rights Reserved."), /*#__PURE__*/React.createElement("span", null, "RHP \xB7 #5 \xB7 Brusly, LA"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Gallery.jsx
try { (() => {
/* Recruiting site — BigSlam "From Instagram" full-bleed square grid. */
function Gallery() {
  const {
    KK
  } = window;
  const imgs = ['kamri-brusly-portrait.webp', 'kamri-catcher.webp', 'fielding-bandits.jpg', 'kamri-catcher.webp', 'kamri-catcher.webp', 'kamri-catcher.webp', 'kamri-brusly-portrait.webp', 'fielding-bandits.jpg'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: KK.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '54px 20px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 30,
      color: KK.red,
      lineHeight: 1
    }
  }, "Follow along"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 'clamp(28px,4vw,42px)',
      color: '#fff',
      margin: '2px 0 0'
    }
  }, "From Instagram"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: 13,
      color: KK.gold,
      marginTop: 8
    }
  }, "@kamrikeith5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, imgs.map((g, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      display: 'block'
    },
    className: "kk-iggrid"
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + g,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .35s ease'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kk-igover",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(206,27,45,.65)',
      opacity: 0,
      transition: 'opacity .25s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 26,
      color: '#fff'
    }
  }, "+"))))));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Hero.jsx
try { (() => {
/* Recruiting site — BigSlam hero: full-bleed action photo, script line, huge name, CTA. */
function Hero({
  onContact
}) {
  const {
    KK,
    GLButton
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: KK.ink
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-brusly-portrait.webp",
    alt: "Kamri Keith",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '64% 16%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(15,18,22,.94) 8%, rgba(15,18,22,.66) 40%, rgba(15,18,22,.15) 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '0 20px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.script,
      fontSize: 'clamp(30px,4.5vw,50px)',
      color: KK.red,
      lineHeight: 1,
      marginBottom: 4
    }
  }, "Meet the ace!"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 'clamp(56px,10vw,120px)',
      color: '#fff',
      margin: 0,
      lineHeight: .86,
      letterSpacing: '.005em'
    }
  }, "Kamri", /*#__PURE__*/React.createElement("br", null), "Keith"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.head,
      fontWeight: 300,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: 'clamp(14px,1.6vw,18px)',
      color: 'rgba(255,255,255,.9)',
      margin: '18px 0 0'
    }
  }, "Right-Handed Pitcher \xB7 #5 \xB7 Class of 2027 \xB7 Brusly, LA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(GLButton, {
    variant: "red",
    size: "lg",
    onClick: onContact
  }, "Recruit Me"), /*#__PURE__*/React.createElement(GLButton, {
    variant: "outline",
    size: "lg",
    href: "#highlights"
  }, "Watch Highlights")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 26,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 10
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === 0 ? 26 : 10,
      height: 10,
      borderRadius: 20,
      background: i === 0 ? KK.red : 'rgba(255,255,255,.5)'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Nav.jsx
try { (() => {
/* Recruiting site — BigSlam main header: dark bar, logo left, horizontal nav, red CTA. */
const {
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function Nav({
  onContact
}) {
  const {
    KK
  } = window;
  const links = [['Home', '#home'], ['Schedule', '#schedule'], ['Stats', '#stats'], ['Highlights', '#highlights'], ['Roster', '#roster'], ['About', '#about']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: KK.ink,
      borderBottom: '4px solid ' + KK.red
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '0 20px',
      height: 84,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "royal",
    size: 46
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 25,
      letterSpacing: '.02em',
      color: '#fff'
    }
  }, "Kamri Keith"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.28em',
      fontSize: 10,
      color: KK.gold,
      marginTop: 4
    }
  }, "RHP \xB7 Class of 2027"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    className: "kk-navlink",
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.11em',
      fontSize: 13.5,
      color: '#fff',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(window.GLButton, {
    variant: "red",
    size: "sm",
    onClick: onContact
  }, "Recruit Me"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Promos.jsx
try { (() => {
/* Recruiting site — BigSlam 3 promo boxes (photo/red/dark, script eyebrow + title + CTA). */
function Promos() {
  const {
    KK,
    GLButton
  } = window;
  const boxes = [{
    kind: 'img',
    img: 'kamri-catcher.webp',
    eyebrow: 'In the circle',
    title: 'Highlight\nReel',
    cta: 'Watch Now',
    variant: 'red'
  }, {
    kind: 'red',
    eyebrow: 'Verified',
    title: 'Recruiting\nProfile',
    body: 'Measurables, transcript & references — one PDF.',
    cta: 'Download',
    variant: 'dark'
  }, {
    kind: 'dark',
    eyebrow: 'Come see me',
    title: 'Camps &\nShowcases',
    body: 'Full summer schedule of exposure events.',
    cta: 'View Schedule',
    variant: 'red'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))'
    }
  }, boxes.map((b, i) => {
    const dark = b.kind !== 'img';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        minHeight: 320,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: b.kind === 'red' ? KK.red : b.kind === 'dark' ? KK.ink : KK.ink
      }
    }, b.kind === 'img' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: '../../assets/photos/' + b.img,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(15,18,22,.85), rgba(15,18,22,.2))'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: '0 40px',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: KK.script,
        fontSize: 30,
        color: b.kind === 'red' ? KK.gold : KK.gold,
        lineHeight: 1
      }
    }, b.eyebrow), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: KK.head,
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: 40,
        color: '#fff',
        margin: '4px 0 14px',
        lineHeight: .92,
        whiteSpace: 'pre-line'
      }
    }, b.title), b.body && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: KK.body,
        fontSize: 15,
        color: 'rgba(255,255,255,.86)',
        margin: '0 0 20px',
        maxWidth: 250
      }
    }, b.body), /*#__PURE__*/React.createElement(GLButton, {
      variant: b.variant,
      size: "sm"
    }, b.cta)));
  }));
}
window.Promos = Promos;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Promos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Results.jsx
try { (() => {
/* Recruiting site — BigSlam "Latest Result" grid (light): result cards with big scores. */
function Results() {
  const {
    KK,
    GLButton,
    Crest,
    SectionHead
  } = window;
  const rows = [{
    a: ['BR', 'Brusly', 'red'],
    b: ['CE', 'Central', 'gray'],
    score: '8 – 2',
    date: 'April 2, 2026',
    venue: 'Brusly HS Field'
  }, {
    a: ['BR', 'Brusly', 'red'],
    b: ['PL', 'Plaquemine', 'gray'],
    score: '5 – 1',
    date: 'March 26, 2026',
    venue: 'Plaquemine HS'
  }, {
    a: ['SA', 'St. Amant', 'gray'],
    b: ['BR', 'Brusly', 'red'],
    score: '4 – 3',
    date: 'March 19, 2026',
    venue: 'St. Amant HS'
  }, {
    a: ['BR', 'Brusly', 'red'],
    b: ['PA', 'Port Allen', 'gray'],
    score: '11 – 0',
    date: 'March 12, 2026',
    venue: 'Brusly HS Field'
  }];
  const Team = ({
    c
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    label: c[0],
    tone: c[2],
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 16,
      color: KK.ink
    }
  }, c[1]));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--field)',
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "On the mound",
    title: "Latest Results",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "outlineDark",
      size: "sm",
      href: "#stats"
    }, "View All Results")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))',
      gap: 14
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid #e4e8ee',
      padding: '18px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Team, {
    c: r.a
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 30,
      color: KK.ink,
      lineHeight: 1,
      padding: '2px 14px',
      border: '2px solid ' + KK.ink
    }
  }, r.score), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      flex: 1,
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    label: r.b[0],
    tone: r.b[2],
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 16,
      color: KK.ink
    }
  }, r.b[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px solid #f1f4f8',
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      fontSize: 12,
      color: '#6b7280',
      textAlign: 'center'
    }
  }, r.date, " \xB7 ", r.venue))))));
}
window.Results = Results;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Results.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Roster.jsx
try { (() => {
/* Recruiting site — BigSlam "Roster" style tall cards → Kamri's pitch arsenal. */
function Roster() {
  const {
    KK,
    GLButton,
    SectionHead
  } = window;
  const pitches = [{
    img: 'kamri-catcher.webp',
    name: 'Fastball',
    stat: '65 MPH',
    no: '01'
  }, {
    img: 'kamri-catcher.webp',
    name: 'Rise Ball',
    stat: '1900 RPM',
    no: '02'
  }, {
    img: 'kamri-brusly-portrait.webp',
    name: 'Drop Ball',
    stat: 'Late Break',
    no: '03'
  }, {
    img: 'fielding-bandits.jpg',
    name: 'Changeup',
    stat: 'Any Count',
    no: '04'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "roster",
    style: {
      background: '#fff',
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What I throw",
    title: "The Arsenal",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "outlineDark",
      size: "sm",
      href: "#stats"
    }, "Full Scouting")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 16
    }
  }, pitches.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    className: "kk-rostercard"
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + p.img,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15,18,22,.9) 6%, rgba(15,18,22,.1) 55%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 40,
      color: 'rgba(255,255,255,.28)',
      lineHeight: 1
    }
  }, p.no), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '20px',
      borderBottom: '4px solid ' + KK.red
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: 11,
      color: KK.gold,
      marginBottom: 3
    }
  }, p.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 26,
      color: '#fff',
      lineHeight: 1
    }
  }, p.name)))))));
}
window.Roster = Roster;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Roster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Schedule.jsx
try { (() => {
/* Recruiting site — BigSlam upcoming games (dark): featured next match + list rows. */
function Schedule() {
  const {
    KK,
    GLButton,
    Crest,
    SectionHead
  } = window;
  const featured = {
    a: ['BR', 'Brusly', 'red'],
    b: ['LO', 'Live Oak', 'gray'],
    date: 'March 10, 2026',
    venue: 'Brusly HS Field'
  };
  const games = [{
    a: ['BR', 'Brusly', 'red'],
    b: ['CE', 'Central', 'gray'],
    date: 'March 21, 2026',
    venue: 'Central HS'
  }, {
    a: ['FC', 'Firecracker', 'gray'],
    b: ['BR', 'Brusly', 'red'],
    date: 'April 4–6, 2026',
    venue: 'Gulf Shores, AL'
  }, {
    a: ['BR', 'Brusly', 'red'],
    b: ['PG', 'PGF Qual.', 'gray'],
    date: 'June 13–15, 2026',
    venue: 'Hoover, AL'
  }];
  const Team = ({
    c,
    right
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexDirection: right ? 'row-reverse' : 'row'
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    label: c[0],
    tone: c[2],
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 18,
      color: '#fff'
    }
  }, c[1]));
  return /*#__PURE__*/React.createElement("section", {
    id: "schedule",
    style: {
      background: KK.ink,
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    light: true,
    eyebrow: "Come watch",
    title: "Upcoming Games",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "red",
      size: "sm",
      href: "#schedule"
    }, "View Schedule")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: KK.red,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(20px,5vw,60px)',
      padding: '30px 24px',
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    label: featured.a[0],
    tone: "ink",
    size: 64
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 26,
      color: '#fff'
    }
  }, featured.a[1])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 34,
      color: 'rgba(255,255,255,.85)'
    }
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 26,
      color: '#fff'
    }
  }, featured.b[1]), /*#__PURE__*/React.createElement(Crest, {
    label: featured.b[0],
    tone: "white",
    size: 64
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingLeft: 20,
      borderLeft: '1px solid rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 13,
      color: '#fff',
      lineHeight: 1.5
    }
  }, featured.date, /*#__PURE__*/React.createElement("br", null), featured.venue))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, games.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr auto auto',
      alignItems: 'center',
      gap: 20,
      background: '#22262d',
      padding: '16px 24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Team, {
    c: g.a
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 16,
      color: KK.red
    }
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(Team, {
    c: g.b,
    right: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      fontSize: 13,
      color: '#fff'
    }
  }, g.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.body,
      fontSize: 12.5,
      color: '#9aa3af'
    }
  }, g.venue)), /*#__PURE__*/React.createElement(GLButton, {
    variant: "outline",
    size: "sm",
    href: "#stats"
  }, "Preview"))))));
}
window.Schedule = Schedule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/ScoreBand.jsx
try { (() => {
/* Recruiting site — BigSlam featured-match band (light): crest VS crest + big score + info. */
function ScoreBand() {
  const {
    KK,
    GLButton,
    Crest
  } = window;
  const Side = ({
    label,
    name,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    label: label,
    tone: tone,
    size: 84
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 22,
      color: KK.ink,
      lineHeight: 1
    }
  }, name));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid #e4e8ee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '46px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(24px,6vw,80px)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Side, {
    label: "BR",
    name: "Brusly",
    tone: "red"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      fontSize: 'clamp(44px,7vw,72px)',
      color: KK.ink,
      lineHeight: .9,
      border: '3px solid ' + KK.ink,
      padding: '6px 22px'
    }
  }, "8\xA0\u2013\xA02"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: 12,
      color: KK.red,
      marginTop: 12
    }
  }, "Final \xB7 Complete Game W")), /*#__PURE__*/React.createElement(Side, {
    label: "CE",
    name: "Central",
    tone: "gray"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingLeft: 20,
      borderLeft: '1px solid #e4e8ee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 13,
      color: KK.ink,
      lineHeight: 1.5
    }
  }, "April 2, 2026", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#6b7280'
    }
  }, "Brusly HS Field")), /*#__PURE__*/React.createElement(GLButton, {
    variant: "red",
    size: "sm",
    href: "#stats"
  }, "Game Info"))));
}
window.ScoreBand = ScoreBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/ScoreBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Sponsors.jsx
try { (() => {
/* Recruiting site — BigSlam sponsor/banner strip → recognitions strip. */
function Sponsors() {
  const {
    KK
  } = window;
  const items = ['All-District 1st Team', 'PGF Nationals', 'Academic All-State', 'Perfect Game', 'Team Louisiana', '4.0 Honor Roll'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderTop: '1px solid #e4e8ee',
      borderBottom: '1px solid #e4e8ee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '30px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 14,
      color: i % 2 ? KK.ink : '#9aa3af'
    }
  }, s))));
}
window.Sponsors = Sponsors;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Sponsors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Standings.jsx
try { (() => {
/* Recruiting site — BigSlam "League Standings" style table → district standings. */
function Standings() {
  const {
    KK,
    GLButton,
    Crest,
    SectionHead
  } = window;
  const cols = ['W', 'L', 'PCT', 'GB', 'L10'];
  const rows = [{
    pos: 1,
    t: ['BR', 'Brusly'],
    tone: 'red',
    d: ['18', '3', '.857', '—', '9-1']
  }, {
    pos: 2,
    t: ['LO', 'Live Oak'],
    tone: 'gray',
    d: ['16', '5', '.762', '2.0', '7-3']
  }, {
    pos: 3,
    t: ['CE', 'Central'],
    tone: 'gray',
    d: ['14', '7', '.667', '4.0', '6-4']
  }, {
    pos: 4,
    t: ['SA', 'St. Amant'],
    tone: 'gray',
    d: ['12', '9', '.571', '6.0', '5-5']
  }, {
    pos: 5,
    t: ['PL', 'Plaquemine'],
    tone: 'gray',
    d: ['8', '13', '.381', '10.0', '3-7']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "stats",
    style: {
      background: 'var(--field)',
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Where we stand",
    title: "District Standings",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "outlineDark",
      size: "sm",
      href: "#"
    }, "Full Standings")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e4e8ee',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 600
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: KK.ink
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60,
      padding: '14px 16px',
      textAlign: 'center',
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: '#fff'
    }
  }, "Pos"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 16px',
      textAlign: 'left',
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: '#fff'
    }
  }, "Team"), cols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      padding: '14px 16px',
      textAlign: 'center',
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: '#fff'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const me = r.tone === 'red';
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        background: me ? 'var(--red-50)' : i % 2 ? '#f7f9fb' : '#fff',
        borderTop: '1px solid #eef1f5'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'center',
        padding: '14px 16px',
        fontFamily: KK.head,
        fontWeight: 700,
        fontSize: 18,
        color: me ? KK.red : '#9aa3af'
      }
    }, r.pos), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Crest, {
      label: r.t[0],
      tone: r.tone,
      size: 34
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: KK.head,
        fontWeight: 700,
        textTransform: 'uppercase',
        fontSize: 16,
        color: KK.ink
      }
    }, r.t[1]))), r.d.map((v, j) => /*#__PURE__*/React.createElement("td", {
      key: j,
      style: {
        textAlign: 'center',
        padding: '14px 16px',
        fontFamily: KK.head,
        fontWeight: j === 0 ? 700 : 500,
        fontSize: 15,
        color: j === 0 ? KK.ink : '#4b5563'
      }
    }, v)));
  }))))));
}
window.Standings = Standings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Standings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/StatsTable.jsx
try { (() => {
/* Recruiting site — season stats table (BigSlam "League Standings" table). */
const {
  Button
} = window.KamriKeithDesignSystem_dba323;
const {
  SectionHead
} = window;
const KK_ROWS = [{
  yr: '2026',
  team: 'Brusly HS',
  era: '1.82',
  ip: '96.1',
  k: '142',
  bb: '18',
  whip: '0.94',
  rec: '18–3'
}, {
  yr: '2025',
  team: 'Brusly HS',
  era: '2.41',
  ip: '88.0',
  k: '118',
  bb: '24',
  whip: '1.12',
  rec: '15–6'
}, {
  yr: '2025',
  team: 'LA Bandits 16U',
  era: '2.75',
  ip: '61.2',
  k: '84',
  bb: '20',
  whip: '1.19',
  rec: '—'
}, {
  yr: '2024',
  team: 'Brusly HS',
  era: '3.10',
  ip: '74.1',
  k: '96',
  bb: '29',
  whip: '1.28',
  rec: '12–9'
}];
const COLS = ['ERA', 'IP', 'K', 'BB', 'WHIP', 'Record'];
function StatsTable() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stats",
    style: {
      background: 'var(--field)',
      padding: '84px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "By the numbers",
    title: "Career Pitching",
    action: /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#stats",
      variant: "outline",
      size: "sm"
    }, "Download Stats")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard)',
      background: '#fff',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 640
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, ['Year', 'Team', ...COLS].map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: i < 2 ? 'left' : 'center',
      padding: '13px 16px',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12.5
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, KK_ROWS.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? 'var(--gray-100)' : '#fff',
      borderTop: '1px solid var(--gray-200)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--red-600)'
    }
  }, r.yr), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--ink-900)'
    }
  }, r.team), [r.era, r.ip, r.k, r.bb, r.whip, r.rec].map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      textAlign: 'center',
      padding: '13px 16px',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 15.5,
      color: j === 0 ? 'var(--ink-900)' : 'var(--text-body)'
    }
  }, v)))))))));
}
window.StatsTable = StatsTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/StatsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/TopBar.jsx
try { (() => {
/* Recruiting site — BigSlam top utility bar: upcoming-match ticker + contact + socials. */
function TopBar() {
  const {
    KK
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: KK.ink,
      color: 'rgba(255,255,255,.72)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto',
      padding: '0 20px',
      height: 42,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      fontSize: 12,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: KK.red,
      fontWeight: 600
    }
  }, "Upcoming Game"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "Brusly VS Live Oak"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .4
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "March 10, 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .4
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Brusly HS Field")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 12,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "kamri@example.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "(225) 555-0105"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3
    }
  }, "/"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontFamily: KK.body
    }
  }, ['f', 'in', 't', 'v'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: 'rgba(255,255,255,.6)',
      textDecoration: 'none',
      fontSize: 12,
      fontWeight: 700
    }
  }, s))))));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/TopStories.jsx
try { (() => {
/* Recruiting site — BigSlam "Top Stories" (featured post + list). */
function TopStories() {
  const {
    KK,
    GLButton,
    SectionHead
  } = window;
  const feat = {
    img: 'fielding-bandits.jpg',
    date: 'June 6, 2026',
    title: 'Kamri Named to All-District First Team',
    body: 'A dominant junior season in the circle earns Kamri first-team honors — leading the district in strikeouts and ERA.',
    tag: 'Team News'
  };
  const list = [{
    date: 'May 24, 2026',
    title: 'Adds a New Rise Ball to the Arsenal',
    by: 'Coach Reed'
  }, {
    date: 'May 2, 2026',
    title: 'Commitment Update: Class of 2027',
    by: 'Recruiting'
  }, {
    date: 'April 18, 2026',
    title: 'Two Complete-Game Shutouts in a Week',
    by: 'Game Recap'
  }, {
    date: 'April 3, 2026',
    title: 'Summer Showcase Schedule Released',
    by: 'Schedule'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The latest",
    title: "Top Stories",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "outlineDark",
      size: "sm",
      href: "#"
    }, "Read All Stories")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      border: '1px solid #e4e8ee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + feat.img,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: KK.red,
      mixBlendMode: 'color'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      background: KK.red,
      color: '#fff',
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 11,
      padding: '5px 12px'
    }
  }, feat.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: KK.red,
      marginBottom: 8
    }
  }, feat.date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 26,
      color: KK.ink,
      margin: '0 0 10px',
      lineHeight: 1.05
    }
  }, feat.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: KK.body,
      fontSize: 15,
      color: '#4b5563',
      lineHeight: 1.6,
      margin: '0 0 16px'
    }
  }, feat.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: KK.head,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 13,
      color: KK.ink,
      textDecoration: 'none',
      borderBottom: '2px solid ' + KK.red,
      paddingBottom: 2
    }
  }, "Read More"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: 'block',
      textDecoration: 'none',
      padding: '20px 0',
      borderBottom: '1px solid #e4e8ee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 11.5,
      color: KK.red,
      marginBottom: 5
    }
  }, p.date, " \xB7 ", p.by), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 20,
      color: KK.ink,
      margin: 0,
      lineHeight: 1.1
    }
  }, p.title)))))));
}
window.TopStories = TopStories;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/TopStories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruiting_site/Videos.jsx
try { (() => {
/* Recruiting site — BigSlam "Featured Videos" grid (dark) with red play buttons. */
function Videos() {
  const {
    KK,
    GLButton,
    SectionHead
  } = window;
  const vids = [{
    img: 'kamri-catcher.webp',
    title: 'Rise Ball — 3K Inning',
    date: 'April 2, 2026'
  }, {
    img: 'kamri-catcher.webp',
    title: 'Bullpen: Velo + Spin',
    date: 'March 2026'
  }, {
    img: 'fielding-bandits.jpg',
    title: 'Fielding Her Position',
    date: 'February 2026'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "highlights",
    style: {
      background: KK.ink,
      padding: '90px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: KK.wrap,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    light: true,
    eyebrow: "Watch the film",
    title: "Featured Videos",
    action: /*#__PURE__*/React.createElement(GLButton, {
      variant: "red",
      size: "sm",
      href: "#"
    }, "Full Reel")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 20
    }
  }, vids.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#22262d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + v.img,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,18,22,.3)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: KK.red
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '11px solid transparent',
      borderBottom: '11px solid transparent',
      borderLeft: '18px solid #fff',
      marginLeft: 4
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: KK.head,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 20,
      color: '#fff',
      margin: 0,
      lineHeight: 1.05
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: KK.head,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: KK.red,
      marginTop: 7
    }
  }, v.date)))))));
}
window.Videos = Videos;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruiting_site/Videos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/GameDay.jsx
try { (() => {
/* Social — Game Day graphic (1080×1080). */
const {
  Badge,
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function GameDay() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-catcher.webp",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 20%',
      filter: 'grayscale(1) contrast(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--red-600)',
      mixBlendMode: 'color'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15,18,22,.96) 22%, rgba(150,16,31,.35) 60%, rgba(15,18,22,.55))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "accent",
    size: 92
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 40,
      lineHeight: .9
    }
  }, "Kamri", /*#__PURE__*/React.createElement("br", null), "Keith")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      bottom: 72,
      right: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      fontSize: 150,
      lineHeight: .82,
      letterSpacing: '-.02em'
    }
  }, "Game", /*#__PURE__*/React.createElement("br", null), "Day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, [['VS', 'Lady Bandits'], ['TIME', '2:00 PM'], ['FIELD', 'MCC · Field 3']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.16em',
      fontSize: 20,
      color: 'var(--gold-500)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 40,
      lineHeight: 1
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      right: 56
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "royal",
    style: {
      fontSize: 20,
      padding: '10px 20px'
    }
  }, "Sat \xB7 Jul 19")));
}
window.GameDay = GameDay;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/GameDay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/SocialApp.jsx
try { (() => {
/* Social kit — gallery/switcher that previews each 1080² graphic scaled to fit. */
function Frame({
  children
}) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(0.4);
  React.useLayoutEffect(() => {
    const fit = () => {
      if (ref.current) setScale(Math.min(ref.current.clientWidth, 520) / 1080);
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080 * scale,
      height: 1080 * scale,
      margin: '0 auto',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--gray-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      transform: `scale(${scale})`,
      transformOrigin: 'top left'
    }
  }, children)));
}
const KK_GRAPHICS = [{
  key: 'GameDay',
  label: 'Game day'
}, {
  key: 'StatHighlight',
  label: 'Stat highlight'
}, {
  key: 'Spotlight',
  label: 'Player spotlight'
}];
function SocialApp() {
  const [active, setActive] = React.useState('GameDay');
  const Active = window[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--field)',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: 13,
      color: 'var(--red-600)'
    }
  }, "Social kit \xB7 1080 \xD7 1080"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      marginTop: 4,
      marginBottom: 20
    }
  }, "Instagram graphics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, KK_GRAPHICS.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.key,
    onClick: () => setActive(g.key),
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      fontSize: 14,
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '2px solid var(--ink-900)',
      background: active === g.key ? 'var(--ink-900)' : 'transparent',
      color: active === g.key ? '#fff' : 'var(--ink-900)'
    }
  }, g.label))), /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(Active, null))));
}
// Recruiting site only — SocialApp render disabled
// ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SocialApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/SocialApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/Spotlight.jsx
try { (() => {
/* Social — Player Spotlight / recruiting card (1080×1080). */
const {
  Badge,
  StatCard,
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function Spotlight() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--red-600)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-brusly-portrait.webp",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      mixBlendMode: 'luminosity',
      opacity: .28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(12,42,138,.55), rgba(15,18,22,.85))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 68,
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      fontSize: 22,
      padding: '11px 22px'
    }
  }, "RHP"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ink",
    style: {
      fontSize: 22,
      padding: '11px 22px'
    }
  }, "Class of 2027")), /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "chalk",
    size: 110
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.16em',
      fontSize: 26,
      color: 'var(--gold-300)'
    }
  }, "Uncommitted \xB7 Recruit me"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 132,
      lineHeight: .82,
      marginTop: 10
    }
  }, "Kamri", /*#__PURE__*/React.createElement("br", null), "Keith")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "1.82",
    label: "ERA",
    variant: "hard",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "65",
    unit: "MPH",
    label: "Fastball",
    variant: "hard",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "3.9",
    label: "GPA",
    variant: "hard",
    align: "center"
  }))));
}
window.Spotlight = Spotlight;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/Spotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social_kit/StatHighlight.jsx
try { (() => {
/* Social — Stat Highlight graphic (1080×1080). Photo left, huge stat right. */
const {
  NumberMark
} = window.KamriKeithDesignSystem_dba323;
function StatHighlight() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      display: 'flex',
      background: 'var(--field)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      position: 'relative',
      overflow: 'hidden',
      borderRight: '8px solid var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kamri-catcher.webp",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '55% 25%',
      filter: 'grayscale(1) contrast(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--red-600)',
      mixBlendMode: 'color'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15,18,22,.6), rgba(15,18,22,0) 45%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 32,
      bottom: 32
    }
  }, /*#__PURE__*/React.createElement(NumberMark, {
    value: "5",
    tone: "accent",
    size: 96
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 68,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.16em',
      fontSize: 24,
      color: 'var(--red-600)'
    }
  }, "Weekend recap"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      fontSize: 300,
      lineHeight: .8,
      letterSpacing: '-.03em',
      marginTop: 10
    }
  }, "14"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)',
      fontSize: 92,
      lineHeight: .9
    }
  }, "Strikeouts"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 30,
      color: 'var(--text-muted)',
      marginTop: 18
    }
  }, "Complete game shutout \xB7 7 IP \xB7 0 ER"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: 90,
      background: 'var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 34,
      color: 'var(--ink-900)'
    }
  }, "Kamri Keith \xB7 #5"))));
}
window.StatHighlight = StatHighlight;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social_kit/StatHighlight.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NumberMark = __ds_scope.NumberMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatLine = __ds_scope.StatLine;

})();
