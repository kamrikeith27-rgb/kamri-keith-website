/* Recruiting site — BigSlam "Roster" style tall cards → Kamri's positions. */
function Roster() {
  const { KK, GLButton, SectionHead } = window;
  const pitches = [
    { img: 'kamri-catcher.webp', name: 'Catcher', stat: 'Behind the plate', no: '01' },
    { img: 'kamri-brusly-bat.webp', name: 'Center Field', stat: 'Range & arm', no: '02' },
    { img: 'kamri-brusly-portrait.webp', name: 'Utility / Infield', stat: 'Anywhere needed', no: '03' },
    { img: 'kamri-catcher-dukes.webp', name: 'Slapper', stat: 'Speed & contact', no: '04' },
  ];

  const handleCardHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(206,27,45,.25)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1.08)';
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.1)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    }
  };

  return (
    <section id="roster" data-scroll-reveal style={{ background: '#f5f5f5', padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead eyebrow="Where she plays" title="The Positions" action={<GLButton variant="outlineDark" size="sm" href="#stats">Full Profile</GLButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
          {pitches.map((p, i) => (
            <div key={i} 
              data-stat-card
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
              style={{ 
                position: 'relative', 
                aspectRatio: '3 / 4', 
                overflow: 'hidden', 
                cursor: 'pointer',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,.1)',
                transition: 'all .3s ease'
              }} 
              className="kk-rostercard"
            >
              <img 
                src={'../../assets/photos/' + p.img} 
                alt={p.name}
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  transition: 'transform .3s ease'
                }} 
              />
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
