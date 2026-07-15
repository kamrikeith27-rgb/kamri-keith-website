import React from 'react';

/**
 * StatLine — a compact label/value row for stat tables and specs
 * (season lines, measurables, academics). Dotted leader between label and value.
 */
export function StatLine({ label, value, emphasis = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'baseline', gap: 10,
        padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', ...style,
      }}
      {...rest}
    >
      <span style={{
        fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: 14,
        textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
      }}>{label}</span>
      <span style={{ flex: 1, borderBottom: '1.5px dotted var(--gray-300)', transform: 'translateY(-4px)' }} />
      <span style={{
        fontFamily: emphasis ? 'var(--font-display)' : 'var(--font-body)',
        fontWeight: emphasis ? 400 : 700,
        fontSize: emphasis ? 22 : 16,
        color: 'var(--text-strong)', whiteSpace: 'nowrap',
      }}>{value}</span>
    </div>
  );
}
