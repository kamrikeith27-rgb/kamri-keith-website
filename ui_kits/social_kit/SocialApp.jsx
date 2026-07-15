/* Social kit — gallery/switcher that previews each 1080² graphic scaled to fit. */
function Frame({ children }) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(0.4);
  React.useLayoutEffect(() => {
    const fit = () => { if (ref.current) setScale(Math.min(ref.current.clientWidth, 520) / 1080); };
    fit(); window.addEventListener('resize', fit); return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <div style={{ width: 1080 * scale, height: 1080 * scale, margin: '0 auto', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray-200)' }}>
        <div style={{ width: 1080, height: 1080, transform: `scale(${scale})`, transformOrigin: 'top left' }}>{children}</div>
      </div>
    </div>
  );
}

const KK_GRAPHICS = [
  { key: 'GameDay', label: 'Game day' },
  { key: 'StatHighlight', label: 'Stat highlight' },
  { key: 'Spotlight', label: 'Player spotlight' },
];

function SocialApp() {
  const [active, setActive] = React.useState('GameDay');
  const Active = window[active];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--field)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 13, color: 'var(--red-600)' }}>Social kit · 1080 × 1080</div>
        <h1 style={{ fontSize: 44, marginTop: 4, marginBottom: 20 }}>Instagram graphics</h1>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {KK_GRAPHICS.map(g => (
            <button key={g.key} onClick={() => setActive(g.key)} style={{
              fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em',
              fontSize: 14, padding: '10px 20px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              border: '2px solid var(--ink-900)',
              background: active === g.key ? 'var(--ink-900)' : 'transparent',
              color: active === g.key ? '#fff' : 'var(--ink-900)',
            }}>{g.label}</button>
          ))}
        </div>
        <Frame><Active /></Frame>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<SocialApp />);
