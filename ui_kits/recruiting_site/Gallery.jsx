/* Recruiting site — BigSlam "From Instagram" full-bleed square grid. */
function Gallery() {
  const { KK } = window;
  const imgs = ['kamri-brusly-portrait.jpg', 'kamri-catcher.jpg', 'kamri-brusly-bat.jpg', 'kamri-catcher-dukes.jpg', 'portrait-red.jpg', 'kamri-catcher.jpg', 'kamri-brusly-bat.jpg', 'kamri-brusly-portrait.jpg'];
  return (
    <section style={{ background: KK.ink }}>
      <div style={{ textAlign: 'center', padding: '54px 20px 30px' }}>
        <div style={{ fontFamily: KK.script, fontSize: 30, color: KK.red, lineHeight: 1 }}>On the field</div>
        <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,42px)', color: '#fff', margin: '2px 0 0' }}>Gallery</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {imgs.map((g, i) => (
          <a key={i} href="#" style={{ position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden', display: 'block' }} className="kk-iggrid">
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
