/* Recruiting site — BigSlam main header: dark bar, logo left, horizontal nav, red CTA. */
const { NumberMark } = window.KamriKeithDesignSystem_dba323;

function Nav({ onContact }) {
  const { KK, GLButton } = window;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [['Home', '#home'], ['About', '#about'], ['Stats', '#stats'], ['Positions', '#roster'], ['Highlights', '#highlights']];
  const navLinkHover = (e) => { e.currentTarget.style.color = KK.red; e.currentTarget.style.textDecoration = 'underline'; };
  const navLinkOut = (e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.textDecoration = 'none'; };

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: KK.ink, borderBottom: '4px solid ' + KK.red }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', height: 84, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 13, textDecoration: 'none' }}>
          <NumberMark value="00" tone="royal" size={46} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 25, letterSpacing: '.02em', color: '#fff' }}>Kamri Keith</span>
            <span style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.28em', fontSize: 10, color: KK.gold, marginTop: 4 }}>Utility · Class of 2027</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="kk-desknav" style={{ alignItems: 'center', gap: 28 }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} className="kk-navlink" style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.11em', fontSize: 13.5, color: '#fff', textDecoration: 'none', transition: 'all .2s ease', cursor: 'pointer' }} onMouseOver={navLinkHover} onMouseOut={navLinkOut}>{l}</a>
          ))}
          <GLButton variant="red" size="sm" onClick={onContact}>Recruit Me</GLButton>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="kk-hambtn" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#fff', zIndex: 51 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0, background: KK.ink, borderTop: '1px solid rgba(255,255,255,.1)', padding: '16px 20px' }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={handleMobileLink} style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.11em', fontSize: 14, color: '#fff', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)', transition: 'color .2s ease', cursor: 'pointer' }} onMouseOver={navLinkHover} onMouseOut={navLinkOut}>{l}</a>
          ))}
          <div style={{ paddingTop: '12px' }}>
            <GLButton variant="red" size="sm" onClick={onContact} style={{ width: '100%', textAlign: 'center' }}>Recruit Me</GLButton>
          </div>
        </nav>
      )}
    </header>
  );
}
window.Nav = Nav;
