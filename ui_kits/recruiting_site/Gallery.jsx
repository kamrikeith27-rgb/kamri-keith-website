/* Recruiting site — BigSlam "From Instagram" full-bleed square grid. */
function Gallery() {
  const { KK } = window;
  const imgs = [
    'kamri-dukes-portrait.jpg',
    'kamri-brusly-portrait.webp',
    'kamri-catcher.webp',
    'kamri-dukes-batting.png',
    'kamri-brusly-bat.webp',
    'kamri-catcher-dukes.webp',
    'portrait-red.webp',
    'kamri-dukes-catcher.png',
  ];
  return (
    <section data-scroll-reveal style={{ background: '#0f1216', padding: '90px 20px 0' }}>
      <div style={{ textAlign: 'center', padding: '0 20px 30px' }}>
        <div style={{ fontFamily: KK.script, fontSize: 30, color: KK.red, lineHeight: 1 }}>On the field</div>
        <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,42px)', color: '#fff', margin: '2px 0 0' }}>Gallery</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 0 }}>
        {imgs.map((g, i) => (
          <a key={i} href="#" data-gallery-item style={{ position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden', display: 'block' }} className="kk-iggrid">
            <img src={'../../assets/photos/' + g} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .35s ease' }} />
            <span className="kk-igover" style={{ position: 'absolute', inset: 0, background: 'rgba(206,27,45,.65)', opacity: 0, transition: 'opacity .25s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 26, color: '#fff' }}>+</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
window.Gallery = Gallery;
