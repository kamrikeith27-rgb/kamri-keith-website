import React from 'react';

/**
 * NumberMark — Kamri's jersey-number brand device. A plate holding the
 * number (default "5") or a monogram like "K5". Circle or shield shape,
 * in royal / ink / cyan / outline. This is the brand's stand-in mark
 * (no logo exists) — build it in type, never as a drawn logo.
 */
export function NumberMark({ value = '5', shape = 'circle', tone = 'royal', size = 96, style = {}, ...rest }) {
  const tones = {
    royal:   { bg: 'var(--red-600)', fg: '#fff', bd: 'var(--red-600)' },
    ink:     { bg: 'var(--ink-900)', fg: '#fff', bd: 'var(--ink-900)' },
    accent:  { bg: 'var(--gold-500)', fg: 'var(--ink-900)', bd: 'var(--gold-500)' },
    outline: { bg: 'transparent', fg: 'var(--ink-900)', bd: 'var(--ink-900)' },
    chalk:   { bg: '#fff', fg: 'var(--red-600)', bd: '#fff' },
  };
  const c = tones[tone];
  const radii = { circle: '50%', shield: '18% 18% 40% 40% / 16% 16% 55% 55%', plate: 'var(--radius-md)' };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, background: c.bg, color: c.fg,
        border: `${Math.max(2, size * 0.045)}px solid ${c.bd === 'transparent' ? 'var(--ink-900)' : c.bd}`,
        borderRadius: radii[shape], boxShadow: 'var(--shadow-hard)',
        fontFamily: 'var(--font-display)', fontSize: size * (String(value).length > 1 ? 0.44 : 0.62),
        lineHeight: 1, letterSpacing: String(value).length > 1 ? '-0.02em' : '0',
        ...style,
      }}
      {...rest}
    >
      {value}
    </span>
  );
}
