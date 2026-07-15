/* Recruiting site — BigSlam "Latest Result" grid (light): result cards with big scores. */
function Results() {
  const { KK, GLButton, Crest, SectionHead } = window;
  const rows = [
    { a: ['BR', 'Brusly', 'red'], b: ['CE', 'Central', 'gray'], score: '8 – 2', date: 'April 2, 2026', venue: 'Brusly HS Field' },
    { a: ['BR', 'Brusly', 'red'], b: ['PL', 'Plaquemine', 'gray'], score: '5 – 1', date: 'March 26, 2026', venue: 'Plaquemine HS' },
    { a: ['SA', 'St. Amant', 'gray'], b: ['BR', 'Brusly', 'red'], score: '4 – 3', date: 'March 19, 2026', venue: 'St. Amant HS' },
    { a: ['BR', 'Brusly', 'red'], b: ['PA', 'Port Allen', 'gray'], score: '11 – 0', date: 'March 12, 2026', venue: 'Brusly HS Field' },
  ];
  const Team = ({ c }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11, flex: 1 }}>
      <Crest label={c[0]} tone={c[2]} size={40} />
      <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 16, color: KK.ink }}>{c[1]}</span>
    </div>
  );
  return (
    <section style={{ background: 'var(--field)', padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead eyebrow="On the mound" title="Latest Results" action={<GLButton variant="outlineDark" size="sm" href="#stats">View All Results</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: 14 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e4e8ee', padding: '18px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Team c={r.a} />
                <div style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 30, color: KK.ink, lineHeight: 1, padding: '2px 14px', border: '2px solid ' + KK.ink }}>{r.score}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, flex: 1, flexDirection: 'row-reverse' }}>
                  <Crest label={r.b[0]} tone={r.b[2]} size={40} />
                  <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 16, color: KK.ink }}>{r.b[1]}</span>
                </div>
              </div>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #f1f4f8', fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.05em', fontSize: 12, color: '#6b7280', textAlign: 'center' }}>{r.date} · {r.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Results = Results;
