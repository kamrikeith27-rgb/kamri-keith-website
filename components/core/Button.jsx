import React from 'react';

/**
 * Button — primary action control for the Kamri Keith brand.
 * Pill-shaped, athletic. Variants: primary (royal), secondary (ink),
 * accent (cyan), ghost, outline. Optional `hard` varsity offset shadow.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  hard = false,
  full = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '12px 24px', fontSize: 15 },
    lg: { padding: '16px 34px', fontSize: 17 },
  };
  const variants = {
    primary:   { background: 'var(--color-primary)', color: 'var(--text-on-primary)', border: '2px solid var(--color-primary)' },
    secondary: { background: 'var(--ink-900)', color: 'var(--chalk)', border: '2px solid var(--ink-900)' },
    accent:    { background: 'var(--color-accent)', color: 'var(--ink-900)', border: '2px solid var(--color-accent)' },
    outline:   { background: 'transparent', color: 'var(--ink-900)', border: '2px solid var(--ink-900)' },
    ghost:     { background: 'transparent', color: 'var(--color-primary)', border: '2px solid transparent' },
  };
  const Tag = as;
  return (
    <Tag
      className="kk-btn"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.06em', lineHeight: 1, cursor: 'pointer', textDecoration: 'none',
        borderRadius: 'var(--radius-pill)', width: full ? '100%' : 'auto',
        transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        boxShadow: hard ? 'var(--shadow-hard)' : 'none',
        ...sizes[size], ...variants[variant], ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
