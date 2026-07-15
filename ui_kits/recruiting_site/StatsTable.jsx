/* Recruiting site — season stats: offensive + defensive splits (from Kamri's player card). */
const { Button } = window.KamriKeithDesignSystem_dba323;
const { SectionHead } = window;

const KK_OFFENSE = [
  { k: 'AVG', v: '.407' },
  { k: 'OBP', v: '.519' },
  { k: 'SLG', v: '.963' },
  { k: 'RBI', v: '15' },
  { k: 'SB%', v: '85.71' },
];
const KK_DEFENSE = [
  { k: 'TC', v: '20' },
  { k: 'Assists', v: '7' },
  { k: 'PO', v: '16' },
  { k: 'FPCT', v: '1.000' },
];

function StatBlock({ title, rows }) {
  return (
    <div style={{ border: '2px solid var(--ink-900)', boxShadow: 'var(--shadow-hard)', background: '#fff' }}>
      <div style={{ background: 'var(--ink-900)', color: '#fff', padding: '12px 18px', fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 13 }}>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + rows.length + ',1fr)' }}>
        {rows.map((r, i) => (
          <div key={r.k} style={{ padding: '18px 12px', textAlign: 'center', borderLeft: i ? '1px solid var(--gray-200)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--ink-900)', lineHeight: 1 }}>{r.v}</div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 11.5, color: 'var(--red-600)', marginTop: 6 }}>{r.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsTable() {
  return (
    <section id="stats" style={{ position: 'relative', background: 'var(--field)', padding: '84px 24px', overflow: 'hidden' }}>
      {/* isolated cutout accent, bleeding off the bottom-right */}
      <img src="../../assets/photos/cutout-bat.png" alt="" style={{ position: 'absolute', right: 'clamp(-120px, -6vw, -40px)', bottom: 0, width: 'min(48%, 560px)', height: 'auto', objectFit: 'contain', opacity: .16, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto' }}>
        <SectionHead eyebrow="By the numbers" title="The Stat Line"
          action={<Button as="a" href="#contact" variant="outline" size="sm">Full Profile</Button>} />
        <div style={{ display: 'grid', gap: 18 }}>
          <StatBlock title="Offensive Stats" rows={KK_OFFENSE} />
          <StatBlock title="Defensive Stats · Catcher / CF / IF" rows={KK_DEFENSE} />
        </div>
      </div>
    </section>
  );
}
window.StatsTable = StatsTable;
