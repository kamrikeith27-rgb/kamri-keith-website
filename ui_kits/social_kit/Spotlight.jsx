/* Social — Player Spotlight / recruiting card (1080×1080). */
const { Badge, StatCard, NumberMark } = window.KamriKeithDesignSystem_dba323;

function Spotlight() {
  return (
    <div style={{ width: 1080, height: 1080, position: 'relative', overflow: 'hidden', background: 'var(--red-600)' }}>
      <img src="../../assets/photos/portrait-red.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'luminosity', opacity: .28 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(12,42,138,.55), rgba(15,18,22,.85))' }} />
      <div style={{ position: 'relative', padding: 68, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Badge tone="accent" style={{ fontSize: 22, padding: '11px 22px' }}>RHP</Badge>
            <Badge tone="ink" style={{ fontSize: 22, padding: '11px 22px' }}>Class of 2027</Badge>
          </div>
          <NumberMark value="5" tone="chalk" size={110} />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 26, color: 'var(--gold-300)' }}>Uncommitted · Recruit me</div>
          <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 132, lineHeight: .82, marginTop: 10 }}>Kamri<br />Keith</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 44 }}>
          <StatCard value="1.82" label="ERA" variant="hard" align="center" />
          <StatCard value="65" unit="MPH" label="Fastball" variant="hard" align="center" />
          <StatCard value="3.9" label="GPA" variant="hard" align="center" />
        </div>
      </div>
    </div>
  );
}
window.Spotlight = Spotlight;
