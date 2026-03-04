'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: scrolled ? 'rgba(246,245,243,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <Link href="/" style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '1.1rem',
        color: 'var(--color-text)',
        textDecoration: 'none',
      }}>
        dedani
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'Diseño', href: '#diseno' },
          { label: 'IA & Auto', href: '#ia' },
          { label: 'Sobre mí', href: '#sobre-mi' },
          { label: 'Contacto', href: '#contacto' },
        ].map(item => (
          <a key={item.href} href={item.href} style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontWeight: '400',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}