/* Recruiting site — BigSlam 3 promo boxes (photo/red/dark, script eyebrow + title + CTA). */
function Promos() {
  const { KK, GLButton } = window;
  const boxes = [
    { kind: 'img', img: 'pitching-royal-duo.jpg', eyebrow: 'In the circle', title: 'Highlight\nReel', cta: 'Watch Now', variant: 'red' },
    { kind: 'red', eyebrow: 'Verified', title: 'Recruiting\nProfile', body: 'Measurables, transcript & references — one PDF.', cta: 'Download', variant: 'dark' },
    { kind: 'dark', eyebrow: 'Come see me', title: 'Camps &\nShowcases', body: 'Full summer schedule of exposure events.', cta: 'View Schedule', variant: 'red' },
  ];
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
      {boxes.map((b, i) => {
        const dark = b.kind !== 'img';
        return (
          <div key={i} style={{ position: 'relative', minHeight: 320, display: 'flex', alignItems: 'center', overflow: 'hidden', background: b.kind === 'red' ? KK.red : b.kind === 'dark' ? KK.ink : KK.ink }}>
            {b.kind === 'img' && <>
              <img src={'../../assets/photos/' + b.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,18,22,.85), rgba(15,18,22,.2))' }} />
            </>}
            <div style={{ position: 'relative', padding: '0 40px', color: '#fff' }}>
              <div style={{ fontFamily: KK.script, fontSize: 30, color: b.kind === 'red' ? KK.gold : KK.gold, lineHeight: 1 }}>{b.eyebrow}</div>
              <h3 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 40, color: '#fff', margin: '4px 0 14px', lineHeight: .92, whiteSpace: 'pre-line' }}>{b.title}</h3>
              {b.body && <p style={{ fontFamily: KK.body, fontSize: 15, color: 'rgba(255,255,255,.86)', margin: '0 0 20px', maxWidth: 250 }}>{b.body}</p>}
              <GLButton variant={b.variant} size="sm">{b.cta}</GLButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}
window.Promos = Promos;
