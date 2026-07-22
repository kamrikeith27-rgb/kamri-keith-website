/* Recruiting site — BigSlam hero: full-bleed action photo (parallax), script line, huge name, CTA. */
function Hero({ onContact }) {
  const { KK, GLButton } = window;
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    const scroller = document.querySelector('.kk-scroll');
    if (!scroller) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = scroller.scrollTop;
        if (imgRef.current) imgRef.current.style.transform = 'scale(1.18) translateY(' + (-(y * 0.12)).toFixed(1) + 'px)';
      });
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section id="home" data-scroll-reveal style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: KK.ink }}>
      <img ref={imgRef} data-hero-image src="../../assets/photos/hero-kamri.webp" alt="Kamri Keith — Brusly High / Lady Dukes 16U" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transformOrigin: 'center 15%', transform: 'scale(1.18)', willChange: 'transform' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(15,18,22,.94) 8%, rgba(15,18,22,.66) 40%, rgba(15,18,22,.15) 72%)' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: KK.wrap, margin: '0 auto', padding: '0 20px', color: '#fff' }}>
        <div style={{ maxWidth: 660 }} data-hero-text>
          <div style={{ fontFamily: KK.script, fontSize: 'clamp(30px,4.5vw,50px)', color: KK.red, lineHeight: 1, marginBottom: 4 }}>Team player. Competitor.</div>
          <h1 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(56px,10vw,120px)', color: '#fff', margin: 0, lineHeight: .86, letterSpacing: '.005em' }}>Kamri<br />Keith</h1>
          <p style={{ fontFamily: KK.head, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 'clamp(14px,1.6vw,18px)', color: 'rgba(255,255,255,.9)', margin: '18px 0 0' }}>Utility · Catcher / CF / IF · Bats-Throws R/R · #00 · Class of 2027 · Lady Dukes 16U · Brusly, LA</p>
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
