/* Recruiting site — BigSlam hero: full-bleed action photo, script line, huge name, CTA. */
function Hero({ onContact }) {
  const { KK, GLButton } = window;
  return (
    <section id="home" style={{ position: 'relative', minHeight: 620, display: 'flex', alignItems: 'center', overflow: 'hidden', background: KK.ink }}>
      <img src="../../assets/photos/portrait-red.jpg" alt="Kamri Keith" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '64% 16%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(15,18,22,.94) 8%, rgba(15,18,22,.66) 40%, rgba(15,18,22,.15) 72%)' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', color: '#fff' }}>
        <div style={{ maxWidth: 660 }}>
          <div style={{ fontFamily: KK.script, fontSize: 'clamp(30px,4.5vw,50px)', color: KK.red, lineHeight: 1, marginBottom: 4 }}>Meet the ace!</div>
          <h1 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(56px,10vw,120px)', color: '#fff', margin: 0, lineHeight: .86, letterSpacing: '.005em' }}>Kamri<br />Keith</h1>
          <p style={{ fontFamily: KK.head, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 'clamp(14px,1.6vw,18px)', color: 'rgba(255,255,255,.9)', margin: '18px 0 0' }}>Right-Handed Pitcher · #5 · Class of 2027 · Brusly, LA</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <GLButton variant="red" size="lg" onClick={onContact}>Recruit Me</GLButton>
            <GLButton variant="outline" size="lg" href="#highlights">Watch Highlights</GLButton>
          </div>
        </div>
      </div>
      {/* slider dots */}
      <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10 }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{ width: i === 0 ? 26 : 10, height: 10, borderRadius: 20, background: i === 0 ? KK.red : 'rgba(255,255,255,.5)' }} />
        ))}
      </div>
    </section>
  );
}
window.Hero = Hero;
