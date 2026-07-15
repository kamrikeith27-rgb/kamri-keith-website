import React from 'react';

/**
 * Card — surface container. Variants: plain (soft shadow), hard (varsity
 * offset shadow + ink border), ink (dark surface), royal (brand fill).
 */
export function Card({ children, variant = 'plain', pad = 24, style = {}, ...rest }) {
  const variants = {
    plain: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    hard:  { background: 'var(--surface-card)', color: 'var(--text-body)', border: '2px solid var(--ink-900)', boxShadow: 'var(--shadow-hard)' },
    ink:   { background: 'var(--ink-900)', color: 'var(--chalk)', border: '2px solid var(--ink-900)', boxShadow: 'var(--shadow-lg)' },
    royal: { background: 'var(--red-600)', color: 'var(--chalk)', border: '2px solid var(--red-600)', boxShadow: 'var(--shadow-lg)' },
  };
  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)', padding: pad,
        ...variants[variant], ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
