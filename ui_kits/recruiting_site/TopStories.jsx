/* Recruiting site — BigSlam "Top Stories" (featured post + list). */
function TopStories() {
  const { KK, GLButton, SectionHead } = window;
  const feat = { img: 'fielding-bandits.jpg', date: 'June 6, 2026', title: 'Kamri Named to All-District First Team', body: 'A dominant junior season in the circle earns Kamri first-team honors — leading the district in strikeouts and ERA.', tag: 'Team News' };
  const list = [
    { date: 'May 24, 2026', title: 'Adds a New Rise Ball to the Arsenal', by: 'Coach Reed' },
    { date: 'May 2, 2026', title: 'Commitment Update: Class of 2027', by: 'Recruiting' },
    { date: 'April 18, 2026', title: 'Two Complete-Game Shutouts in a Week', by: 'Game Recap' },
    { date: 'April 3, 2026', title: 'Summer Showcase Schedule Released', by: 'Schedule' },
  ];
  return (
    <section style={{ background: '#fff', padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead eyebrow="The latest" title="Top Stories" action={<GLButton variant="outlineDark" size="sm" href="#">Read All Stories</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          {/* featured */}
          <article style={{ border: '1px solid #e4e8ee' }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
              <img src={'../../assets/photos/' + feat.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }} />
              <div style={{ position: 'absolute', inset: 0, background: KK.red, mixBlendMode: 'color' }} />
              <span style={{ position: 'absolute', top: 16, left: 16, background: KK.red, color: '#fff', fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 11, padding: '5px 12px' }}>{feat.tag}</span>
            </div>
            <div style={{ padding: '24px 26px' }}>
              <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12, color: KK.red, marginBottom: 8 }}>{feat.date}</div>
              <h3 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 26, color: KK.ink, margin: '0 0 10px', lineHeight: 1.05 }}>{feat.title}</h3>
              <p style={{ fontFamily: KK.body, fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: '0 0 16px' }}>{feat.body}</p>
              <a href="#" style={{ fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 13, color: KK.ink, textDecoration: 'none', borderBottom: '2px solid ' + KK.red, paddingBottom: 2 }}>Read More</a>
            </div>
          </article>
          {/* list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {list.map((p, i) => (
              <a key={i} href="#" style={{ display: 'block', textDecoration: 'none', padding: '20px 0', borderBottom: '1px solid #e4e8ee' }}>
                <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 11.5, color: KK.red, marginBottom: 5 }}>{p.date} · {p.by}</div>
                <h4 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 20, color: KK.ink, margin: 0, lineHeight: 1.1 }}>{p.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.TopStories = TopStories;
