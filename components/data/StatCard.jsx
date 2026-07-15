import React from 'react';

/**
 * StatCard — the hero stat block. Huge condensed numeral + uppercase label,
 * optional unit and caption. The workhorse of any recruiting artifact.
 */
export function StatCard({ value, label, unit, caption, variant = 'plain', align = 'left', style = {}, ...rest }) {
  const dark = variant === 'ink' || variant === 'royal';
  const surfaces = {
    plain: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    hard:  { background: 'var(--surface-card)', border: '2px solid var(--ink-900)', boxShadow: 'var(--shadow-hard)' },
    ink:   { background: 'var(--ink-900)', border: '2px solid var(--ink-900)' },
    royal: { background: 'var(--red-600)', border: '2px solid var(--red-600)' },
  };
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: 4,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align, borderRadius: 'var(--radius-lg)', padding: '22px 24px',
        ...surfaces[variant], ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 72px)',
          lineHeight: 0.9, letterSpacing: '-0.01em',
          color: dark ? 'var(--chalk)' : 'var(--ink-900)',
        }}>{value}</span>
        {unit && <span style={{
          fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 18,
          textTransform: 'uppercase', color: variant === 'royal' ? 'var(--gold-300)' : 'var(--gold-500)',
        }}>{unit}</span>}
      </div>
      <span style={{
        fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 13,
        textTransform: 'uppercase', letterSpacing: '0.14em',
        color: dark ? 'rgba(255,255,255,.75)' : 'var(--text-muted)',
      }}>{label}</span>
      {caption && <span style={{
        fontFamily: 'var(--font-body)', fontSize: 13, marginTop: 2,
        color: dark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)',
      }}>{caption}</span>}
    </div>
  );
}
