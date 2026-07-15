/* Recruiting site — app shell composing all sections (BigSlam layout). */
function SiteApp() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const open = (e) => { if (e && e.preventDefault) e.preventDefault(); setContactOpen(true); };
  return (
    <div className="kk-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--field)' }}>
      <window.TopBar />
      <window.Nav onContact={open} />
      <window.Hero onContact={open} />
      <window.About />
      <window.StatsTable />
      <window.Roster />
      <window.Videos />
      <window.Gallery />
      <window.CTA onContact={open} />
      <window.Footer onContact={open} />
      <window.ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
