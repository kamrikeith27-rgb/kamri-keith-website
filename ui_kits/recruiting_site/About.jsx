/* Recruiting site — BigSlam "Special Interview" split (dark) + career stat cards. */
const { StatCard } = window.KamriKeithDesignSystem_dba323;

function About() {
  const { KK, GLButton } = window;
  return (
    <section id="about" style={{ background: KK.ink, color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(280px,1fr) minmax(320px,1.15fr)' }}>
        <div style={{ position: 'relative', minHeight: 480 }}>
          <img src="../../assets/photos/pitching-black-duo.jpg" alt="Kamri Keith" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,18,22,.1), rgba(15,18,22,.75))' }} />
        </div>
        <div style={{ padding: 'clamp(40px,6vw,72px)' }}>
          <div style={{ fontFamily: KK.script, fontSize: 32, color: KK.red, lineHeight: 1 }}>The story</div>
          <h2 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5vw,54px)', color: '#fff', margin: '2px 0 18px', lineHeight: .95 }}>Compete Every Pitch</h2>
          <p style={{ fontFamily: KK.body, fontSize: 16.5, color: 'rgba(255,255,255,.82)', lineHeight: 1.65, maxWidth: 480 }}>
            A three-year varsity starter at Brusly and travel-ball ace for the LA Bandits, Kamri lives in the circle — mixing a heavy rise ball with a late-breaking drop and a changeup she'll throw in any count. Coaches know her for competing on every pitch and setting the tone for her defense.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, margin: '28px 0' }}>
            <StatCard value="4.0" label="GPA" variant="ink" />
            <StatCard value="65" unit="MPH" label="Fastball" variant="hard" />
            <StatCard value="1st" label="All-District" variant="ink" />
          </div>
          <GLButton variant="red" size="lg" href="#contact">Read Full Bio</GLButton>
        </div>
      </div>
    </section>
  );
}
window.About = About;
