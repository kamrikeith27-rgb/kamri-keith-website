/* Recruiting site — BigSlam "Featured Videos" grid (dark) with red play buttons. */
function Videos() {
  const { KK, GLButton, SectionHead } = window;
  const vids = [
    { img: 'pitching-royal-duo.jpg', title: 'Rise Ball — 3K Inning', date: 'April 2, 2026' },
    { img: 'pitching-black-duo.jpg', title: 'Bullpen: Velo + Spin', date: 'March 2026' },
    { img: 'fielding-bandits.jpg', title: 'Fielding Her Position', date: 'February 2026' },
  ];
  return (
    <section id="highlights" style={{ background: KK.ink, padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead light eyebrow="Watch the film" title="Featured Videos" action={<GLButton variant="red" size="sm" href="#">Full Reel</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {vids.map((v, i) => (
            <div key={i} style={{ background: '#22262d' }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Videos = Videos;
