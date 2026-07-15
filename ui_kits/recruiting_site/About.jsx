/* Recruiting site — BigSlam "Special Interview" split (dark) + career stat cards. */
const { StatCard } = window.KamriKeithDesignSystem_dba323;

function About() {
  const { KK, GLButton } = window;
  return (
    <section id="about" style={{ background: KK.ink, color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(280px,1fr) minmax(320px,1.15fr)' }}>
        <div style={{ position: 'relative', minHeight: 480 }}>
          <img src="../../assets/photos/kamri-catcher.jpg" alt="Kamri Keith catching" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,18,22,.1), rgba(15,18,22,.75))' }} />
        </div>
        <div style={{ padding: 'clamp(40px,6vw,72px)' }}>
          <div style={{ fontFamily: KK.script, fontSize: 32, color: KK.red, lineHeight: 1 }}>The story</div>
          <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5vw,54px)', color: '#fff', margin: '2px 0 18px', lineHeight: .95 }}>Compete Every Play</h2>
          <p style={{ fontFamily: KK.body, fontSize: 16.5, color: 'rgba(255,255,255,.82)', lineHeight: 1.65, maxWidth: 480 }}>
            A varsity player at Brusly High and utility threat for the Lady Dukes 16U, Kamri does whatever the team needs — behind the plate, in center field, or across the infield. She's a versatile, driven athlete with strong defensive skills and a powerful bat, known for her work ethic, leadership, and coming through in clutch moments.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, margin: '28px 0' }}>
            <StatCard value="3.87" label="GPA" variant="ink" />
            <StatCard value=".407" label="Batting Avg" variant="hard" />
            <StatCard value="1.000" label="Fielding %" variant="ink" />
          </div>
          <GLButton variant="red" size="lg" href="#contact">Read Full Bio</GLButton>
        </div>
      </div>
    </section>
  );
}
window.About = About;
