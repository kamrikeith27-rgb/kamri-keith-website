/* Recruiting site — BigSlam top utility bar: upcoming-match ticker + contact + socials. */
function TopBar() {
  const { KK } = window;
  return (
    <div style={{ background: KK.ink, color: 'rgba(255,255,255,.72)' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', height: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span style={{ color: KK.red, fontWeight: 600 }}>Upcoming Game</span>
          <span style={{ color: '#fff' }}>Brusly VS Live Oak</span>
          <span style={{ opacity: .4 }}>/</span><span>March 10, 2026</span>
          <span style={{ opacity: .4 }}>/</span><span>Brusly HS Field</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 12, whiteSpace: 'nowrap' }}>
          <span>kamri@example.com</span>
          <span style={{ opacity: .3 }}>/</span>
          <span>(225) 555-0105</span>
          <span style={{ opacity: .3 }}>/</span>
          <div style={{ display: 'flex', gap: 12, fontFamily: KK.body }}>
            {['f', 'in', 't', 'v'].map(s => (
              <a key={s} href="#" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: 12, fontWeight: 700 }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
