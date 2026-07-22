/* Recruiting site — Footer with dynamic copyright and BlakSheep Creative credit. */
const { NumberMark } = window.KamriKeithDesignSystem_dba323;

function Footer({ onContact }) {
  const { KK, GLButton } = window;
  const currentYear = new Date().getFullYear();
  const flink = { fontFamily: KK.body, fontSize: 14.5, color: 'rgba(255,255,255,.66)', textDecoration: 'none', lineHeight: 1.9, transition: 'all .2s ease', cursor: 'pointer' };
  const flinkHover = (e) => { e.currentTarget.style.color = KK.red; e.currentTarget.style.textDecoration = 'underline'; };
  const flinkOut = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,.66)'; e.currentTarget.style.textDecoration = 'none'; };
  const H = ({ children }) => <h4 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', fontSize: 18, color: '#fff', margin: '0 0 18px' }}>{children}</h4>;
  return (
    <footer id="contact" style={{ width: '100%', background: '#0a0c0f', color: '#fff' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '64px 20px 44px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <NumberMark value="00" tone="royal" size={44} />
            <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 24, color: '#fff' }}>Kamri Keith</span>
          </div>
          <p style={{ fontFamily: KK.body, fontSize: 14.5, color: 'rgba(255,255,255,.6)', maxWidth: 260, lineHeight: 1.65, margin: '0 0 18px' }}>
            Utility · #00 · Class of 2027. Team player, leader, competitor — ready to compete for your program.
          </p>
          <GLButton variant="red" size="sm" onClick={onContact}>Recruit Me</GLButton>
        </div>
        <div>
          <H>Explore</H>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[['Home', '#home'], ['About', '#about'], ['Stats', '#stats'], ['Positions', '#roster'], ['Highlights', '#highlights']].map(([l, h]) => <a key={l} href={h} style={flink} onMouseOver={flinkHover} onMouseOut={flinkOut}>{l}</a>)}
          </div>
        </div>
        <div>
          <H>Contact Info</H>
          <div style={{ fontFamily: KK.body, fontSize: 14.5, color: 'rgba(255,255,255,.66)', lineHeight: 1.9 }}>
            Brusly, Louisiana<br />
            <a href="mailto:kamrikeith27@gmail.com" style={flink} onMouseOver={flinkHover} onMouseOut={flinkOut}>kamrikeith27@gmail.com</a><br />
            Kamri — <a href="tel:+12255771358" style={flink} onMouseOver={flinkHover} onMouseOut={flinkOut}>(225) 577-1358</a><br />
            Kim Spriggs (mom) — <a href="tel:+12255772606" style={flink} onMouseOver={flinkHover} onMouseOut={flinkOut}>(225) 577-2606</a>
          </div>
        </div>
        <div>
          <H>Recruiting</H>
          <div style={{ fontFamily: KK.body, fontSize: 14.5, color: 'rgba(255,255,255,.66)', lineHeight: 1.9 }}>
            Position — Utility · C / CF / IF<br />Grad Year — 2027<br />GPA — 3.87 · ACT 19<br />Bats / Throws — R / R
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'center', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
          <span>© {currentYear} · Kamri Keith</span>
          <a href="https://blaksheepcreative.com/services/recruit-spotlight/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: 'rgba(255,255,255,.5)', transition: 'color .2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.8)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.5)'}>
            <span>Powered by BlakSheep Creative</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
