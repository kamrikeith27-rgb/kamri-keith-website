/* Social — Game Day graphic (1080×1080). */
const { Badge, NumberMark } = window.KamriKeithDesignSystem_dba323;

function GameDay() {
  return (
    <div style={{ width: 1080, height: 1080, position: 'relative', overflow: 'hidden', background: 'var(--ink-900)' }}>
      <img src="../../assets/photos/pitching-royal.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%', filter: 'grayscale(1) contrast(1.05)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--red-600)', mixBlendMode: 'color' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,18,22,.96) 22%, rgba(150,16,31,.35) 60%, rgba(15,18,22,.55))' }} />
      <div style={{ position: 'absolute', top: 56, left: 56, display: 'flex', alignItems: 'center', gap: 18 }}>
        <NumberMark value="5" tone="accent" size={92} />
        <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 40, lineHeight: .9 }}>Kamri<br />Keith</div>
      </div>
      <div style={{ position: 'absolute', left: 56, bottom: 72, right: 56 }}>
        <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--gold-500)', fontSize: 150, lineHeight: .82, letterSpacing: '-.02em' }}>Game<br />Day</div>
        <div style={{ display: 'flex', gap: 36, marginTop: 34, flexWrap: 'wrap' }}>
          {[['VS', 'Lady Bandits'], ['TIME', '2:00 PM'], ['FIELD', 'MCC · Field 3']].map(([l, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 20, color: 'var(--gold-500)' }}>{l}</div>
              <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 40, lineHeight: 1 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: 64, right: 56 }}><Badge tone="royal" style={{ fontSize: 20, padding: '10px 20px' }}>Sat · Jul 19</Badge></div>
    </div>
  );
}
window.GameDay = GameDay;
