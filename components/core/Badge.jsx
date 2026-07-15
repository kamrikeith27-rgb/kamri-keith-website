import React from 'react';

/**
 * Badge — small status/label pill. Solid or soft tones in brand colors.
 * Use for class year, position, "COMMITTED", availability, etc.
 */
export function Badge({ children, tone = 'royal', soft = false, style = {}, ...rest }) {
  const solid = {
    royal:  { bg: 'var(--red-600)', fg: '#fff' },
    ink:    { bg: 'var(--ink-900)', fg: '#fff' },
    accent: { bg: 'var(--gold-500)', fg: 'var(--ink-900)' },
    clay:   { bg: 'var(--clay-500)', fg: '#fff' },
    spirit: { bg: 'var(--pink-500)', fg: '#fff' },
  };
  const softMap = {
    royal:  { bg: 'var(--red-100)', fg: 'var(--red-800)' },
    ink:    { bg: 'var(--gray-200)', fg: 'var(--ink-900)' },
    accent: { bg: 'var(--gold-100)', fg: 'var(--gold-700)' },
    clay:   { bg: 'var(--clay-100)', fg: 'var(--clay-700)' },
    spirit: { bg: 'var(--pink-100)', fg: 'var(--pink-600)' },
  };
  const c = (soft ? softMap : solid)[tone];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: c.bg, color: c.fg,
        fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: 12,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        padding: '5px 12px', borderRadius: 'var(--radius-pill)', lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
