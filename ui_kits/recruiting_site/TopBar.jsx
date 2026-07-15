/* Recruiting site — BigSlam top utility bar: upcoming-match ticker + contact + socials. */
function TopBar() {
  const { KK } = window;
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
          <span>kamrikeith27@gmail.com</span>
          <span style={{ opacity: .3 }}>/</span>
          <span>(225) 577-1358</span>
        </div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
