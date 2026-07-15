/* Recruiting site — BigSlam "League Standings" style table → district standings. */
function Standings() {
  const { KK, GLButton, Crest, SectionHead } = window;
  const cols = ['W', 'L', 'PCT', 'GB', 'L10'];
  const rows = [
    { pos: 1, t: ['BR', 'Brusly'], tone: 'red', d: ['18', '3', '.857', '—', '9-1'] },
    { pos: 2, t: ['LO', 'Live Oak'], tone: 'gray', d: ['16', '5', '.762', '2.0', '7-3'] },
    { pos: 3, t: ['CE', 'Central'], tone: 'gray', d: ['14', '7', '.667', '4.0', '6-4'] },
    { pos: 4, t: ['SA', 'St. Amant'], tone: 'gray', d: ['12', '9', '.571', '6.0', '5-5'] },
    { pos: 5, t: ['PL', 'Plaquemine'], tone: 'gray', d: ['8', '13', '.381', '10.0', '3-7'] },
  ];
  return (
    <section id="stats" style={{ background: 'var(--field)', padding: '90px 20px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <SectionHead eyebrow="Where we stand" title="District Standings" action={<GLButton variant="outlineDark" size="sm" href="#">Full Standings</GLButton>} />
        <div style={{ background: '#fff', border: '1px solid #e4e8ee', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr style={{ background: KK.ink }}>
                <th style={{ width: 60, padding: '14px 16px', textAlign: 'center', fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12, color: '#fff' }}>Pos</th>
                <th style={{ padding: '14px 16px', textAlign: 'left', fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12, color: '#fff' }}>Team</th>
                {cols.map(c => <th key={c} style={{ padding: '14px 16px', textAlign: 'center', fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12, color: '#fff' }}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const me = r.tone === 'red';
                return (
                  <tr key={i} style={{ background: me ? 'var(--red-50)' : i % 2 ? '#f7f9fb' : '#fff', borderTop: '1px solid #eef1f5' }}>
                    <td style={{ textAlign: 'center', padding: '14px 16px', fontFamily: KK.head, fontWeight: 700, fontSize: 18, color: me ? KK.red : '#9aa3af' }}>{r.pos}</td>
                    <td style={{ padding: '10px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Crest label={r.t[0]} tone={r.tone} size={34} />
                        <span style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 16, color: KK.ink }}>{r.t[1]}</span>
                      </div>
                    </td>
                    {r.d.map((v, j) => <td key={j} style={{ textAlign: 'center', padding: '14px 16px', fontFamily: KK.head, fontWeight: j === 0 ? 700 : 500, fontSize: 15, color: j === 0 ? KK.ink : '#4b5563' }}>{v}</td>)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
window.Standings = Standings;
