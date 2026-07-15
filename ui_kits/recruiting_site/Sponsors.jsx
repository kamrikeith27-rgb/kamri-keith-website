/* Recruiting site — BigSlam sponsor/banner strip → recognitions strip. */
function Sponsors() {
  const { KK } = window;
  const items = ['All-District 1st Team', 'PGF Nationals', 'Academic All-State', 'Perfect Game', 'Team Louisiana', '4.0 Honor Roll'];
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e4e8ee', borderBottom: '1px solid #e4e8ee' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '30px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        {items.map((s, i) => (
          <span key={i} style={{ fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 14, color: i % 2 ? KK.ink : '#9aa3af' }}>{s}</span>
        ))}
      </div>
    </section>
  );
}
window.Sponsors = Sponsors;
