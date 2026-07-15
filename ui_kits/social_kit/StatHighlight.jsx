/* Social — Stat Highlight graphic (1080×1080). Photo left, huge stat right. */
const { NumberMark } = window.KamriKeithDesignSystem_dba323;

function StatHighlight() {
  return (
    <div style={{ width: 1080, height: 1080, display: 'flex', background: 'var(--field)' }}>
      <div style={{ width: 460, position: 'relative', overflow: 'hidden', borderRight: '8px solid var(--gold-500)' }}>
        <img src="../../assets/photos/pitching-black.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '55% 25%', filter: 'grayscale(1) contrast(1.05)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--red-600)', mixBlendMode: 'color' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,18,22,.6), rgba(15,18,22,0) 45%)' }} />
        <div style={{ position: 'absolute', left: 32, bottom: 32 }}><NumberMark value="5" tone="accent" size={96} /></div>
      </div>
      <div style={{ flex: 1, padding: 68, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 24, color: 'var(--red-600)' }}>Weekend recap</div>
        <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--ink-900)', fontSize: 300, lineHeight: .8, letterSpacing: '-.03em', marginTop: 10 }}>14</div>
        <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--gold-600)', fontSize: 92, lineHeight: .9 }}>Strikeouts</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 30, color: 'var(--text-muted)', marginTop: 18 }}>Complete game shutout · 7 IP · 0 ER</div>
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ height: 6, width: 90, background: 'var(--ink-900)' }} />
          <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 34, color: 'var(--ink-900)' }}>Kamri Keith · #5</span>
        </div>
      </div>
    </div>
  );
}
window.StatHighlight = StatHighlight;
