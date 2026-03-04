'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Urbide() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '8rem 2rem 6rem' }}>

        {/* Volver */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link href="/#diseno" style={{
  fontSize: '0.85rem', color: 'var(--color-text-secondary)',
  textDecoration: 'none', display: 'block',
  marginBottom: '3rem',
}}>
            ← Volver a proyectos
          </Link>
        </motion.div>

        {/* Cabecera */}
        <motion.p initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
          diseño de producto · 2024
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '600', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem' }}>
          URBIDE
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Fuente de hidratación urbana diseñada específicamente para ciclistas — para rellenar la botella sin bajarse de la bici.
        </motion.p>

        {/* Tags */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {['Diseño Industrial', 'SolidWorks', 'Ergonomía', 'Prototipado', 'Mobiliario urbano'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.75rem', padding: '0.25rem 0.6rem',
              border: '1px solid var(--color-border)', borderRadius: '20px',
              color: 'var(--color-text-secondary)',
            }}>{tag}</span>
          ))}
        </motion.div>

        <Divider />

        {/* Problema */}
        <Section title="El problema">
          <p>Los ciclistas urbanos no pueden hidratarse en ruta sin bajarse de la bicicleta. Las fuentes convencionales están diseñadas para peatones, ignorando por completo la ergonomía del ciclista en movimiento.</p>
        </Section>

        <Divider />

        {/* Referentes */}
        <Section title="Referentes">
          <p>Se analizaron fuentes urbanas existentes como ARQUA y FLIGHT, identificando sus limitaciones ergonómicas y de interacción para el usuario ciclista.</p>
        </Section>

        <Divider />

        {/* Bocetos */}
        <Section title="Bocetos">
          <p>El proceso comenzó con exploración libre — volúmenes, proporciones, posiciones de uso. Más de tres rondas de bocetado hasta identificar la dirección formal correcta.</p>
          <PlaceholderImg label="Bocetos — ronda 1, 2 y 3" />
        </Section>

        <Divider />

        {/* Ergonomía */}
        <Section title="Estudio ergonómico">
          <p>Usuario objetivo: ciclista adulto promedio (P50). El objetivo era rellenar la botella sin desmontar. Las cotas clave:</p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', lineHeight: 2, color: 'var(--color-text-secondary)' }}>
            <li>Altura total: <strong style={{ color: 'var(--color-text)' }}>110 cm</strong></li>
            <li>Grifo a: <strong style={{ color: 'var(--color-text)' }}>100 cm</strong> del suelo</li>
            <li>Rampa apoyo pie: <strong style={{ color: 'var(--color-text)' }}>20 cm</strong></li>
            <li>Distancia horizontal pie → agua: <strong style={{ color: 'var(--color-text)' }}>45 cm</strong> (alcance funcional codo-mano)</li>
          </ul>
          <PlaceholderImg label="Estudio ergonómico — croquis acotado" />
        </Section>

        <Divider />

        {/* Renders */}
        <Section title="Renders">
          <p>Carcasa exterior en GRC/GFRC (microhormigón con fibra de vidrio) con sellado hidrofugante. Módulo de agua en acero inoxidable 316 o aluminio marino anodizado.</p>
          <PlaceholderImg label="Render producto" />
          <PlaceholderImg label="Render integrado en ciclovía" />
        </Section>

        <Divider />

        {/* Prototipo */}
        <Section title="Prototipo físico">
          <p>Maqueta a escala para validar proporciones, geometría y lectura formal del objeto. El análisis crítico identificó que la geometría angular podía ser peligrosa en ubicación urbana — aprendizaje que informó la versión final.</p>
          <PlaceholderImg label="Prototipo físico — vistas" />
        </Section>

        <Divider />

        {/* Branding */}
        <Section title="Naming & branding">
          <p><strong>URBIDE</strong> — UR (agua en euskera) + BIDE (camino). Inspirado en las ciclovías de Bilbao, conocidas como Bidegorri. El nombre comunica función y origen de forma directa.</p>
        </Section>

        <Divider />

        {/* Aprendizaje */}
        <Section title="Qué aprendí">
          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            "La ergonomía no es un añadido — es la base del diseño. Un centímetro mal calculado convierte un producto útil en uno peligroso."
          </p>
        </Section>

      </main>
    </>
  )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ padding: '3rem 0' }}
    >
      <h2 style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1.25rem', color: 'var(--color-text)' }}>{title}</h2>
      <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
        {children}
      </div>
    </motion.div>
  )
}

function Divider() {
  return <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
}

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div style={{
      marginTop: '1.5rem',
      backgroundColor: '#ECEAE6',
      borderRadius: '8px',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--color-border)',
    }}>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontFamily: 'var(--font-handwriting)' }}>{label}</p>
    </div>
  )
}