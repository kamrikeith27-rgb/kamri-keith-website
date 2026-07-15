/* Recruiting site — BigSlam "Roster" style tall cards → Kamri's pitch arsenal. */
function Roster() {
  const { KK, GLButton, SectionHead } = window;
  const pitches = [
    { img: 'pitching-royal-duo.jpg', name: 'Fastball', stat: '65 MPH', no: '01' },
    { img: 'pitching-black-duo.jpg', name: 'Rise Ball', stat: '1900 RPM', no: '02' },
    { img: 'portrait-red.jpg', name: 'Drop Ball', stat: 'Late Break', no: '03' },
    { img: 'fielding-bandits.jpg', name: 'Changeup', stat: 'Any Count', no: '04' },
  ];
  return (
    <section id="roster" style={{ background: '#fff', padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead eyebrow="What I throw" title="The Arsenal" action={<GLButton variant="outlineDark" size="sm" href="#stats">Full Scouting</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {pitches.map((p, i) => (
            <div key={i} style={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden', cursor: 'pointer' }} className="kk-rostercard">
              <img src={'../../assets/photos/' + p.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,18,22,.9) 6%, rgba(15,18,22,.1) 55%)' }} />
              <span style={{ position: 'absolute', top: 14, right: 16, fontFamily: KK.head, fontWeight: 700, fontSize: 40, color: 'rgba(255,255,255,.28)', lineHeight: 1 }}>{p.no}</span>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px', borderBottom: '4px solid ' + KK.red }}>
                <div style={{ fontFamily: KK.head, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.14em', fontSize: 11, color: KK.gold, marginBottom: 3 }}>{p.stat}</div>
                <div style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 26, color: '#fff', lineHeight: 1 }}>{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Roster = Roster;
