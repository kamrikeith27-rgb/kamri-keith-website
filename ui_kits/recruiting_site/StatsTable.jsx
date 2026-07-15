/* Recruiting site — season stats table (BigSlam "League Standings" table). */
const { Button } = window.KamriKeithDesignSystem_dba323;
const { SectionHead } = window;

const KK_ROWS = [
  { yr: '2026', team: 'Brusly HS', era: '1.82', ip: '96.1', k: '142', bb: '18', whip: '0.94', rec: '18–3' },
  { yr: '2025', team: 'Brusly HS', era: '2.41', ip: '88.0', k: '118', bb: '24', whip: '1.12', rec: '15–6' },
  { yr: '2025', team: 'LA Bandits 16U', era: '2.75', ip: '61.2', k: '84', bb: '20', whip: '1.19', rec: '—' },
  { yr: '2024', team: 'Brusly HS', era: '3.10', ip: '74.1', k: '96', bb: '29', whip: '1.28', rec: '12–9' },
];
const COLS = ['ERA', 'IP', 'K', 'BB', 'WHIP', 'Record'];

function StatsTable() {
  return (
    <section id="stats" style={{ background: 'var(--field)', padding: '84px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHead eyebrow="By the numbers" title="Career Pitching"
          action={<Button as="a" href="#stats" variant="outline" size="sm">Download Stats</Button>} />
        <div style={{ border: '2px solid var(--ink-900)', boxShadow: 'var(--shadow-hard)', background: '#fff', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
            <thead>
              <tr style={{ background: 'var(--ink-900)', color: '#fff' }}>
                {['Year', 'Team', ...COLS].map((c, i) => (
                  <th key={c} style={{ textAlign: i < 2 ? 'left' : 'center', padding: '13px 16px', fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12.5 }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {KK_ROWS.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? 'var(--gray-100)' : '#fff', borderTop: '1px solid var(--gray-200)' }}>
                  <td style={{ padding: '13px 16px', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--red-600)' }}>{r.yr}</td>
                  <td style={{ padding: '13px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14.5, color: 'var(--ink-900)' }}>{r.team}</td>
                  {[r.era, r.ip, r.k, r.bb, r.whip, r.rec].map((v, j) => (
                    <td key={j} style={{ textAlign: 'center', padding: '13px 16px', fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 15.5, color: j === 0 ? 'var(--ink-900)' : 'var(--text-body)' }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
window.StatsTable = StatsTable;
