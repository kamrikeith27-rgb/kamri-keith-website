/* Recruiting site — BigSlam top utility bar: upcoming-match ticker + contact + socials. */
function TopBar() {
  const { KK } = window;
  const contactLinkStyle = { fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 12, color: 'rgba(255,255,255,.72)', textDecoration: 'none', transition: 'all .2s ease', cursor: 'pointer' };
  const contactHover = (e) => { e.currentTarget.style.color = KK.red; e.currentTarget.style.textDecoration = 'underline'; };
  const contactOut = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,.72)'; e.currentTarget.style.textDecoration = 'none'; };

  return (
    <div style={{ background: KK.ink, color: 'rgba(255,255,255,.72)' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', minHeight: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', flexDirection: 'column', rowGap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.04em', fontSize: 'clamp(10px,2vw,12px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
          <span style={{ color: KK.red, fontWeight: 600 }}>Class of 2027</span>
          <span style={{ color: '#fff', fontSize: 'clamp(9px,2vw,12px)' }}>Lady Dukes</span>
          <span style={{ opacity: .4, fontSize: 'clamp(8px,1.5vw,10px)' }}>Brusly HS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.04em', fontSize: 'clamp(9px,2vw,12px)', whiteSpace: 'nowrap', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
          <a href="mailto:kamrikeith27@gmail.com" style={contactLinkStyle} onMouseOver={contactHover} onMouseOut={contactOut}>Email</a>
          <span style={{ opacity: .3 }}>/</span>
          <a href="tel:+12255771358" style={contactLinkStyle} onMouseOver={contactHover} onMouseOut={contactOut}>(225) 577-1358</a>
        </div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
