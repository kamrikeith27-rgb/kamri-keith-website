/* Recruiting site — BigSlam upcoming games (dark): featured next match + list rows. */
function Schedule() {
  const { KK, GLButton, Crest, SectionHead } = window;
  const featured = { a: ['BR', 'Brusly', 'red'], b: ['LO', 'Live Oak', 'gray'], date: 'March 10, 2026', venue: 'Brusly HS Field' };
  const games = [
    { a: ['BR', 'Brusly', 'red'], b: ['CE', 'Central', 'gray'], date: 'March 21, 2026', venue: 'Central HS' },
    { a: ['FC', 'Firecracker', 'gray'], b: ['BR', 'Brusly', 'red'], date: 'April 4–6, 2026', venue: 'Gulf Shores, AL' },
    { a: ['BR', 'Brusly', 'red'], b: ['PG', 'PGF Qual.', 'gray'], date: 'June 13–15, 2026', venue: 'Hoover, AL' },
  ];
  const Team = ({ c, right }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexDirection: right ? 'row-reverse' : 'row' }}>
      <Crest label={c[0]} tone={c[2]} size={44} />
      <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 18, color: '#fff' }}>{c[1]}</span>
    </div>
  );
  return (
    <section id="schedule" style={{ background: KK.ink, padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead light eyebrow="Come watch" title="Upcoming Games" action={<GLButton variant="red" size="sm" href="#schedule">View Schedule</GLButton>} />
        {/* featured */}
        <div style={{ background: KK.red, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px,5vw,60px)', padding: '30px 24px', flexWrap: 'wrap', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}><Crest label={featured.a[0]} tone="ink" size={64} /><span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 26, color: '#fff' }}>{featured.a[1]}</span></div>
          <span style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 34, color: 'rgba(255,255,255,.85)' }}>VS</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}><span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 26, color: '#fff' }}>{featured.b[1]}</span><Crest label={featured.b[0]} tone="white" size={64} /></div>
          <div style={{ textAlign: 'center', paddingLeft: 20, borderLeft: '1px solid rgba(255,255,255,.3)' }}>
            <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 13, color: '#fff', lineHeight: 1.5 }}>{featured.date}<br />{featured.venue}</div>
          </div>
        </div>
        {/* list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {games.map((g, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto auto', alignItems: 'center', gap: 20, background: '#22262d', padding: '16px 24px', flexWrap: 'wrap' }}>
              <Team c={g.a} />
              <span style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 16, color: KK.red }}>VS</span>
              <div style={{ justifySelf: 'end' }}><Team c={g.b} right /></div>
              <div style={{ textAlign: 'right', minWidth: 140 }}>
                <div style={{ fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', fontSize: 13, color: '#fff' }}>{g.date}</div>
                <div style={{ fontFamily: KK.body, fontSize: 12.5, color: '#9aa3af' }}>{g.venue}</div>
              </div>
              <GLButton variant="outline" size="sm" href="#stats">Preview</GLButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Schedule = Schedule;
