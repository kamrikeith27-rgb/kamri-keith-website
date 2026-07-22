/* Recruiting site — BigSlam top utility bar: upcoming-match ticker + contact + socials. */
function TopBar() {
  const { KK } = window;
  const contactLinkStyle = { fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 12, color: 'rgba(255,255,255,.72)', textDecoration: 'none', transition: 'all .2s ease', cursor: 'pointer' };
  const contactHover = (e) => { e.currentTarget.style.color = KK.red; e.currentTarget.style.textDecoration = 'underline'; };
  const contactOut = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,.72)'; e.currentTarget.style.textDecoration = 'none'; };

  return (
    <div style={{ background: KK.ink, color: 'rgba(255,255,255,.72)' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', height: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span style={{ color: KK.red, fontWeight: 600 }}>Class of 2027</span>
          <span style={{ color: '#fff' }}>Lady Dukes — Louisiana 16U</span>
          <span style={{ opacity: .4 }}>/</span><span>Brusly High School</span>
          <span style={{ opacity: .4 }}>/</span><span>Utility · C / CF / IF</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 12, whiteSpace: 'nowrap' }}>
          <a href="mailto:kamrikeith27@gmail.com" style={contactLinkStyle} onMouseOver={contactHover} onMouseOut={contactOut}>kamrikeith27@gmail.com</a>
          <span style={{ opacity: .3 }}>/</span>
          <a href="tel:+12255771358" style={contactLinkStyle} onMouseOver={contactHover} onMouseOut={contactOut}>(225) 577-1358</a>
        </div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
