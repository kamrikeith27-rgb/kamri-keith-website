/* Recruiting site — app shell composing all sections (BigSlam layout). */
function SiteApp() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const checkReady = () => {
      const required = ['TopBar', 'Nav', 'Hero', 'About', 'StatsTable', 'Roster', 'Videos', 'Gallery', 'CTA', 'Footer', 'ContactModal'];
      const dsReady = window.KamriKeithDesignSystem_dba323 && window.KamriKeithDesignSystem_dba323.NumberMark;
      if (dsReady && required.every(c => window[c])) {
        setReady(true);
      } else {
        setTimeout(checkReady, 100);
      }
    };
    checkReady();
  }, []);

  const open = (e) => { if (e && e.preventDefault) e.preventDefault(); setContactOpen(true); };

  if (!ready) return null;

  const TopBar = window.TopBar;
  const Nav = window.Nav;
  const Hero = window.Hero;
  const About = window.About;
  const StatsTable = window.StatsTable;
  const Roster = window.Roster;
  const Videos = window.Videos;
  const Gallery = window.Gallery;
  const CTA = window.CTA;
  const Footer = window.Footer;
  const ContactModal = window.ContactModal;

  return (
    <div className="kk-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--field)' }}>
      <TopBar />
      <Nav onContact={open} />
      <Hero onContact={open} />
      <About />
      <StatsTable />
      <Roster />
      <Videos />
      <Gallery />
      <CTA onContact={open} />
      <Footer onContact={open} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
