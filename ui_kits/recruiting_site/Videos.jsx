/* Recruiting site — BigSlam "Featured Videos" with YouTube embeds + category tabs. */
function Videos() {
  const { KK, GLButton, SectionHead } = window;
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@kamrikeithsoftball2027';
  
  // Curated clips from Kamri's YouTube channel (id, label, category).
  const CURATED_CLIPS = [
    {id: 'pfjTUmJ85aw', label: 'Bunt · Batting Highlights', cat: 'hitting'},
    {id: 'jZaxHvxY3a0', label: 'Left Field Catch · Defensive Highlight', cat: 'fielding'},
    {id: 'iW2b-lrrvI8', label: 'LF Catch & Throw · Outfield Defense', cat: 'fielding'},
  ];
  
  const [selectedClip, setSelectedClip] = React.useState(CURATED_CLIPS[0] || null);
  const [activeTab, setActiveTab] = React.useState('all');
  
  const filteredClips = activeTab === 'all' 
    ? CURATED_CLIPS 
    : CURATED_CLIPS.filter(c => c.cat === activeTab);
  
  function ytThumbnail(id) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
  
  function handleClipClick(clip) {
    setSelectedClip(clip);
  }
  
  if (!CURATED_CLIPS.length) {
    return (
      <section id="highlights" style={{ background: KK.ink, padding: '90px 20px' }}>
        <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
          <SectionHead light eyebrow="Watch the film" title="Featured Videos" action={<GLButton variant="red" size="sm" href={YOUTUBE_CHANNEL_URL} target="_blank">View Channel</GLButton>} />
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#999' }}>
            <p>Videos coming soon! Check back as new game footage is published.</p>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener" style={{ color: KK.red, textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>Watch on YouTube →</a>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="highlights" style={{ background: KK.ink, padding: '90px 20px' }}>
      <div style={{ maxWidth: KK.wrap, margin: '0 auto' }}>
        <SectionHead light eyebrow="Watch the film" title="Featured Videos" action={<GLButton variant="red" size="sm" href={YOUTUBE_CHANNEL_URL} target="_blank">View Channel</GLButton>} />
        
        {/* Featured player */}
        {selectedClip && (
          <div style={{ maxWidth: 900, marginInline: 'auto', marginBottom: 40 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, border: `1px solid ${KK.red}` }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src={`https://www.youtube.com/embed/${selectedClip.id}?rel=0`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <h3 style={{ fontFamily: KK.head, fontWeight: 700, fontSize: 20, color: '#fff', margin: '14px 0 0 0', textAlign: 'center' }}>
              {selectedClip.label}
            </h3>
          </div>
        )}
        
        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 32, marginTop: selectedClip ? 0 : 32 }}>
          <button 
            onClick={() => setActiveTab('all')}
            style={{
              fontFamily: KK.head,
              fontWeight: 600,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              padding: '8px 16px',
              border: 'none',
              borderRadius: 4,
              background: activeTab === 'all' ? KK.red : '#22262d',
              color: activeTab === 'all' ? '#fff' : '#aaa',
              cursor: 'pointer',
              transition: 'all .2s ease'
            }}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab('pitching')}
            style={{
              fontFamily: KK.head,
              fontWeight: 600,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              padding: '8px 16px',
              border: 'none',
              borderRadius: 4,
              background: activeTab === 'pitching' ? KK.red : '#22262d',
              color: activeTab === 'pitching' ? '#fff' : '#aaa',
              cursor: 'pointer',
              transition: 'all .2s ease'
            }}
          >
            Pitching
          </button>
          <button 
            onClick={() => setActiveTab('hitting')}
            style={{
              fontFamily: KK.head,
              fontWeight: 600,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              padding: '8px 16px',
              border: 'none',
              borderRadius: 4,
              background: activeTab === 'hitting' ? KK.red : '#22262d',
              color: activeTab === 'hitting' ? '#fff' : '#aaa',
              cursor: 'pointer',
              transition: 'all .2s ease'
            }}
          >
            Hitting
          </button>
          <button 
            onClick={() => setActiveTab('fielding')}
            style={{
              fontFamily: KK.head,
              fontWeight: 600,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              padding: '8px 16px',
              border: 'none',
              borderRadius: 4,
              background: activeTab === 'fielding' ? KK.red : '#22262d',
              color: activeTab === 'fielding' ? '#fff' : '#aaa',
              cursor: 'pointer',
              transition: 'all .2s ease'
            }}
          >
            Fielding
          </button>
        </div>
        
        {/* Clip grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
          {filteredClips.map((clip, i) => (
            <button
              key={i}
              onClick={() => handleClipClick(clip)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'left'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: 8, border: selectedClip?.id === clip.id ? `3px solid ${KK.red}` : `1px solid #22262d` }}>
                <img src={ytThumbnail(clip.id)} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,18,22,.3)' }} />
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: KK.red }}>
                    <span style={{ width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: '18px solid #fff', marginLeft: 4 }} />
                  </span>
                </span>
              </div>
              <h4 style={{ fontFamily: KK.head, fontWeight: 600, fontSize: 14, color: '#fff', margin: '10px 0 4px 0', lineHeight: 1.2 }}>{clip.label}</h4>
            </button>
          ))}
        </div>
        
        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 12, color: '#666' }}>
          <p>Full game footage available on <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener" style={{ color: KK.red, textDecoration: 'none' }}>YouTube</a></p>
        </div>
      </div>
    </section>
  );
}
window.Videos = Videos;
