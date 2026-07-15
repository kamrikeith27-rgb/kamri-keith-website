/* Recruiting site — BigSlam "Tickets On Sale" style red banner → recruiting CTA. */
function CTA({ onContact }) {
  const { KK, GLButton } = window;
  return (
    <section style={{ position: 'relative', background: KK.red, color: '#fff', overflow: 'hidden' }}>
      <img src="../../assets/photos/turf-circle.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', mixBlendMode: 'multiply', opacity: .25 }} />
      <div style={{ position: 'relative', maxWidth: KK.wrap, margin: '0 auto', padding: '52px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: KK.script, fontSize: 34, color: KK.gold, lineHeight: 1 }}>Uncommitted</div>
          <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5.5vw,60px)', color: '#fff', margin: '2px 0 0', lineHeight: .9 }}>Recruiting — Class of 2027</h2>
        </div>
        <GLButton variant="dark" size="lg" onClick={onContact}>Contact My Coach</GLButton>
      </div>
    </section>
  );
}
window.CTA = CTA;
