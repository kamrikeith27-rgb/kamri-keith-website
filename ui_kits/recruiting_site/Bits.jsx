/* Recruiting site — shared BigSlam-style helpers (fonts, SectionHead, GLButton, Crest). */
const KK = {
  head: "'Oswald','Arial Narrow',sans-serif",
  script: "'Grand Hotel',cursive",
  body: "'Barlow',system-ui,sans-serif",
  red: 'var(--red-600)',
  redDk: 'var(--red-800)',
  gold: 'var(--gold-500)',
  ink: '#191919',       /* BigSlam near-black */
  dark: '#222222',      /* BigSlam row/card dark */
  wrap: 1200,
};

/* BigSlam signature skewed (parallelogram) button — italic slant, un-skewed inner text. */
function GLButton({ children, variant = 'red', size = 'md', href = '#', onClick, style }) {
  const pad = size === 'lg' ? '15px 40px' : size === 'sm' ? '9px 24px' : '12px 32px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 12 : 13.5;
  const V = {
    red: { background: KK.red, color: '#fff', border: '2px solid ' + KK.red },
    dark: { background: KK.ink, color: '#fff', border: '2px solid ' + KK.ink },
    outline: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.55)' },
    outlineDark: { background: 'transparent', color: KK.ink, border: '2px solid ' + KK.ink },
    gold: { background: KK.gold, color: KK.ink, border: '2px solid ' + KK.gold },
  }[variant];
  const hoverBg = variant === 'red' ? KK.redDk : KK.red;   /* all others swipe to red */
  const hoverIn = e => { Object.assign(e.currentTarget.style, { background: hoverBg, borderColor: hoverBg, color: '#fff' }); };
  const hoverOut = e => { Object.assign(e.currentTarget.style, { background: V.background, borderColor: V.border.split(' ').pop(), color: V.color }); };
  return (
    <a href={href} onClick={onClick} style={{
      display: 'inline-block', transform: 'skewX(-10deg)', padding: pad, textDecoration: 'none',
      cursor: 'pointer', transition: 'all .22s ease', ...V, ...style,
    }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      <span style={{ display: 'inline-block', transform: 'skewX(10deg)', fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: fs }}>{children}</span>
    </a>
  );
}

/* BigSlam section title. Centered: script eyebrow + big title + short red underline.
   Row (default): title left + growing hairline rule + action on the right. */
function SectionHead({ eyebrow, title, light, center, action }) {
  const titleEl = (
    <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.02em', fontSize: 'clamp(28px,4vw,42px)', margin: 0, color: light ? '#fff' : KK.ink, lineHeight: 1 }}>{title}</h2>
  );
  if (center) {
    return (
      <div style={{ textAlign: 'center', marginBottom: 46 }}>
        {eyebrow && <div style={{ fontFamily: KK.script, fontSize: 32, color: KK.red, lineHeight: 1, marginBottom: 2 }}>{eyebrow}</div>}
        {titleEl}
        <div style={{ width: 56, height: 3, background: KK.red, margin: '16px auto 0', transform: 'skewX(-20deg)' }} />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
      <div style={{ flexShrink: 0 }}>
        {eyebrow && <div style={{ fontFamily: KK.script, fontSize: 28, color: KK.red, lineHeight: 1, marginBottom: -2 }}>{eyebrow}</div>}
        {titleEl}
      </div>
      <div style={{ flex: 1, height: 2, background: light ? 'rgba(255,255,255,.14)' : '#e0e4ea' }} />
      {action}
    </div>
  );
}

/* Circular monogram team crest (stand-in — no real crests exist). */
function Crest({ label, tone = 'ink', size = 64 }) {
  const T = {
    red: { bg: KK.red, fg: '#fff' }, ink: { bg: KK.ink, fg: '#fff' },
    gray: { bg: '#e4e8ee', fg: KK.ink }, gold: { bg: KK.gold, fg: KK.ink },
    white: { bg: '#fff', fg: KK.ink },
  }[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      width: size, height: size, borderRadius: '50%', background: T.bg, color: T.fg,
      fontFamily: KK.head, fontWeight: 700, fontSize: size * 0.36, lineHeight: 1,
      boxShadow: '0 4px 14px rgba(15,18,22,.18)',
    }}>{label}</span>
  );
}

Object.assign(window, { KK, SectionHead, GLButton, Crest });
