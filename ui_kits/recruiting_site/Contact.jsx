/* Recruiting site — "Recruit Me" contact modal. */
const { NumberMark } = window.KamriKeithDesignSystem_dba323;

function ContactModal({ open, onClose }) {
  const { KK, GLButton } = window;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (!open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15,18,22,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderTop: '5px solid ' + KK.red, boxShadow: '0 30px 80px rgba(0,0,0,.4)', width: 'min(440px,100%)', padding: 32 }}>
        {!sent ? (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <div style={{ fontFamily: KK.script, fontSize: 28, color: KK.red, lineHeight: 1 }}>Coaches</div>
            <h3 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 34, margin: '0 0 4px', color: KK.ink }}>Let's Talk</h3>
            <p style={{ fontFamily: KK.body, color: '#6b7280', fontSize: 15, margin: '0 0 20px' }}>Drop your info and I'll follow up with film and my schedule.</p>
            {['Your name', 'School / program', 'Email'].map((p, i) => (
              <input key={i} required placeholder={p} type={i === 2 ? 'email' : 'text'} style={{ width: '100%', boxSizing: 'border-box', marginBottom: 10, padding: '13px 15px', fontFamily: KK.body, fontSize: 15, border: '1.5px solid #cbd2db', outline: 'none' }} />
            ))}
            <button type="submit" style={{ width: '100%', marginTop: 8, padding: '14px', background: KK.red, color: '#fff', border: 'none', fontFamily: KK.head, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 14, cursor: 'pointer' }}>Send</button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <NumberMark value="00" tone="accent" size={80} />
            <h3 style={{ fontFamily: KK.head, fontWeight: 700, textTransform: 'uppercase', fontSize: 30, margin: '14px 0 6px', color: KK.ink }}>You're All Set</h3>
            <p style={{ fontFamily: KK.body, color: '#6b7280', fontSize: 15, margin: 0 }}>Thanks for reaching out — I'll be in touch soon.</p>
            <div style={{ marginTop: 18 }}><GLButton variant="outlineDark" size="sm" onClick={onClose}>Close</GLButton></div>
          </div>
        )}
      </div>
    </div>
  );
}
window.ContactModal = ContactModal;
