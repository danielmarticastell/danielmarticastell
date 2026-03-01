'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
    }}>

      {/* Firma Dedani */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.2rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem',
          letterSpacing: '0.05em',
        }}
      >
        Dedani
      </motion.p>

      {/* Nombre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: '600',
          color: 'var(--color-text)',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}
      >
        Daniel Martí Castell
      </motion.h1>

      {/* Frase de posicionamiento */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          maxWidth: '540px',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}
      >
        Diseño, ingeniería y tecnología aplicada.<br />
        Desarrollo de producto con enfoque en automatización e Inteligencia Artificial.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a href="#proyectos" style={{
          backgroundColor: 'var(--color-accent)',
          color: '#F6F5F3',
          padding: '0.75rem 1.75rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
          transition: 'transform 150ms ease, box-shadow 150ms ease',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          Ver proyectos
        </a>

        <a href="#contacto" style={{
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)',
          padding: '0.75rem 1.75rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
          transition: 'transform 150ms ease, box-shadow 150ms ease',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          Contacto
        </a>
      </motion.div>

    </main>
  )
}