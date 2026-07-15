/* Recruiting site — BigSlam "Featured Videos" grid (dark) with red play buttons. */
function Videos() {
  const { KK, GLButton, SectionHead } = window;
  const CANVA = 'https://canva.link/kamrikeith2027cf';
  const DRIVE = 'https://drive.google.com/file/d/1V2Bce2uKxDWCza12MjjS2jA1n2_a2YCz/view';
  const vids = [
    { img: 'portrait-red.jpg', title: 'Full Highlight Reel', date: 'Class of 2027', url: CANVA },
    { img: 'kamri-catcher.jpg', title: 'Summer 2026 — Behind the Plate', date: 'Catcher', url: DRIVE },
    { img: 'kamri-brusly-bat.jpg', title: 'Summer 2026 — CF Throw to Home', date: 'Center Field', url: DRIVE },
  ];
  return (
    <section id="highlights" style={{ background: KK.ink, padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead light eyebrow="Watch the film" title="Featured Videos" action={<GLButton variant="red" size="sm" href={CANVA} target="_blank">Full Reel</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {vids.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noopener" style={{ background: '#22262d', textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', cursor: 'pointer' }}>
                <img src={'../../assets/photos/' + v.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,18,22,.3)' }} />
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: KK.red }}>
                    <span style={{ width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: '18px solid #fff', marginLeft: 4 }} />
                  </span>
                </span>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h3 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 20, color: '#fff', margin: 0, lineHeight: 1.05 }}>{v.title}</h3>
                <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12, color: KK.red, marginTop: 7 }}>{v.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Videos = Videos;
