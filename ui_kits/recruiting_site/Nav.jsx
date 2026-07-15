/* Recruiting site — BigSlam main header: dark bar, logo left, horizontal nav, red CTA. */
const { NumberMark } = window.KamriKeithDesignSystem_dba323;

function Nav({ onContact }) {
  const { KK } = window;
  const links = [['Home', '#home'], ['Schedule', '#schedule'], ['Stats', '#stats'], ['Highlights', '#highlights'], ['Roster', '#roster'], ['About', '#about']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: KK.ink, borderBottom: '4px solid ' + KK.red }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', height: 84, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 13, textDecoration: 'none' }}>
          <NumberMark value="5" tone="royal" size={46} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 25, letterSpacing: '.02em', color: '#fff' }}>Kamri Keith</span>
            <span style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.28em', fontSize: 10, color: KK.gold, marginTop: 4 }}>RHP · Class of 2027</span>
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} className="kk-navlink" style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.11em', fontSize: 13.5, color: '#fff', textDecoration: 'none' }}>{l}</a>
          ))}
          <window.GLButton variant="red" size="sm" onClick={onContact}>Recruit Me</window.GLButton>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
