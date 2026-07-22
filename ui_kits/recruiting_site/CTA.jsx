/* Recruiting site — BigSlam "Tickets On Sale" style red banner → recruiting CTA with cutout. */
function CTA({ onContact }) {
  const { KK, GLButton } = window;
  return (
    <section style={{ position: 'relative', background: KK.red, color: '#fff', overflow: 'hidden', minHeight: 340 }}>
      <img src="../../assets/photos/kamri-cutout.webp" alt="Kamri Keith" style={{ position: 'absolute', right: 'clamp(-30px, 4vw, 100px)', bottom: '-40px', height: 'auto', width: 'clamp(180px, 28vw, 320px)', objectFit: 'contain', objectPosition: 'center bottom', filter: 'drop-shadow(-14px 0 26px rgba(15,18,22,.28))', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: KK.wrap, margin: '0 auto', padding: '56px 20px', display: 'flex', alignItems: 'center', minHeight: 340 }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontFamily: KK.script, fontSize: 34, color: KK.gold, lineHeight: 1 }}>Uncommitted</div>
          <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5.5vw,60px)', color: '#fff', margin: '2px 0 22px', lineHeight: .9 }}>Recruiting — Class of 2027</h2>
          <GLButton variant="dark" size="lg" onClick={onContact}>Contact My Coach</GLButton>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
