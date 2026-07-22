/* Recruiting site — BigSlam "From Instagram" full-bleed square grid with lightbox. */
function Gallery() {
  const { KK } = window;
  const imgs = [
    'kamri-gallery-1.jpg',
    'kamri-dukes-portrait.jpg',
    'kamri-dukes-action-batting.jpg',
    'kamri-brusly-bat.webp',
  ];
  
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex + 1) % imgs.length);
  };
  
  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex - 1 + imgs.length) % imgs.length);
  };
  
  return (
    <>
      <section data-scroll-reveal style={{ background: '#0f1216', padding: '90px 20px 0' }}>
        <div style={{ textAlign: 'center', padding: '0 20px 30px' }}>
          <div style={{ fontFamily: KK.script, fontSize: 30, color: KK.red, lineHeight: 1 }}>On the field</div>
          <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,42px)', color: '#fff', margin: '2px 0 0' }}>Gallery</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 0 }}>
          {imgs.map((g, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              data-gallery-item 
              style={{ position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden', display: 'block', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              className="kk-iggrid"
            >
              <img src={'../../assets/photos/' + g} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .35s ease' }} />
              <span className="kk-igover" style={{ position: 'absolute', inset: 0, background: 'rgba(206,27,45,.65)', opacity: 0, transition: 'opacity .25s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 26, color: '#fff' }}>+</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div 
          onClick={closeLightbox}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
        >
          <button
            onClick={closeLightbox}
            style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, background: 'rgba(255,255,255,.2)', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}
          >×</button>
          
          <img 
            src={'../../assets/photos/' + imgs[lightboxIndex]} 
            alt=""
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
          
          <button
            onClick={goPrev}
            style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 50, height: 50, background: 'rgba(206,27,45,.7)', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >‹</button>
          
          <button
            onClick={goNext}
            style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 50, height: 50, background: 'rgba(206,27,45,.7)', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >›</button>
          
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: 14 }}>
            {lightboxIndex + 1} / {imgs.length}
          </div>
        </div>
      )}
    </>
  );
}
window.Gallery = Gallery;
