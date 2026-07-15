/* Recruiting site — BigSlam featured-match band (light): crest VS crest + big score + info. */
function ScoreBand() {
  const { KK, GLButton, Crest } = window;
  const Side = ({ label, name, tone }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, minWidth: 140 }}>
      <Crest label={label} tone={tone} size={84} />
      <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 22, color: KK.ink, lineHeight: 1 }}>{name}</span>
    </div>
  );
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #e4e8ee' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto', padding: '46px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(24px,6vw,80px)', flexWrap: 'wrap' }}>
        <Side label="BR" name="Brusly" tone="red" />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 'clamp(44px,7vw,72px)', color: KK.ink, lineHeight: .9, border: '3px solid ' + KK.ink, padding: '6px 22px' }}>8&nbsp;–&nbsp;2</div>
          <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 12, color: KK.red, marginTop: 12 }}>Final · Complete Game W</div>
        </div>
        <Side label="CE" name="Central" tone="gray" />
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 20, borderLeft: '1px solid #e4e8ee' }}>
          <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 13, color: KK.ink, lineHeight: 1.5 }}>April 2, 2026<br /><span style={{ color: '#6b7280' }}>Brusly HS Field</span></div>
          <GLButton variant="red" size="sm" href="#stats">Game Info</GLButton>
        </div>
      </div>
    </section>
  );
}
window.ScoreBand = ScoreBand;
