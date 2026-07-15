import React from 'react';

/**
 * Tag — outlined chip for meta attributes (skills, positions, keywords).
 * Lighter than Badge; hairline border, optional dot.
 */
export function Tag({ children, dot = false, active = false, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: active ? 'var(--ink-900)' : 'transparent',
        color: active ? 'var(--chalk)' : 'var(--ink-800)',
        border: `1.5px solid ${active ? 'var(--ink-900)' : 'var(--gray-300)'}`,
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
        padding: '6px 14px', borderRadius: 'var(--radius-pill)', lineHeight: 1.2,
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-500)' }} />}
      {children}
    </span>
  );
}
