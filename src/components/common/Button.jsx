import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-fast)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    gap: '0.5rem'
  };

  const sizeStyles = {
    sm: { padding: '0.4rem 0.8rem', fontSize: '0.875rem' },
    md: { padding: '0.65rem 1.25rem', fontSize: '1rem' },
    lg: { padding: '0.85rem 1.75rem', fontSize: '1.125rem' }
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: '#ffffff',
      boxShadow: '0 4px 14px var(--primary-glow)'
    },
    secondary: {
      backgroundColor: 'var(--bg-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-color)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)'
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...variantStyles[variant]
      }}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
