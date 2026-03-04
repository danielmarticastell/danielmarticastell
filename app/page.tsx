'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
            dedani
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '600', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Daniel Martí Castell
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--color-text-secondary)', maxWidth: '540px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Diseño, ingeniería y tecnología aplicada.<br />
            Desarrollo de producto con enfoque en automatización e Inteligencia Artificial.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#diseno" style={{ backgroundColor: 'var(--color-accent)', color: '#F6F5F3', padding: '0.75rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', transition: 'transform 150ms ease, box-shadow 150ms ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
              Ver proyectos
            </a>
            <a href="#contacto" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)', padding: '0.75rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', transition: 'transform 150ms ease, box-shadow 150ms ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
              Contacto
            </a>
          </motion.div>
        </section>

        {/* DISEÑO */}
        <section id="diseno" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            proyectos
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
            Diseño de producto
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <ProjectCard
              title="URBIDE"
              subtitle="Fuente de hidratación para ciclistas urbanos"
              year="2024"
              tags={['Diseño Industrial', 'SolidWorks', 'Ergonomía', 'Prototipado']}
              href="/proyectos/urbide"
            />
          </div>
        </section>

        {/* IA */}
        <section id="ia" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            automatización
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
            IA & Automatización
          </motion.h2>
          <div style={{ padding: '3rem', border: '1px dashed var(--color-border)', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>Proyectos en desarrollo — próximamente.</p>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" style={{ padding: '6rem 2rem', maxWidth: '680px', margin: '0 auto' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
            sobre mí
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            Daniel Martí Castell
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Ingeniero y diseñador con base en Castellón. Me muevo entre la fabricación industrial y el desarrollo de producto, con cada vez más atención hacia cómo la IA y la automatización pueden transformar procesos reales.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Me interesa construir cosas que funcionen bien y tengan sentido — desde un objeto físico hasta un flujo de trabajo automatizado.
            </p>
          </motion.div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={{ padding: '6rem 2rem', maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Hablemos
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Si tienes un proyecto, una idea o simplemente quieres conectar.
          </motion.p>
          <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            href="mailto:hola@danielmarticastell.com"
            style={{ backgroundColor: 'var(--color-accent)', color: '#F6F5F3', padding: '0.75rem 1.75rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>
            hola@danielmarticastell.com
          </motion.a>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-handwriting)' }}>
            dedani © 2025
          </p>
        </footer>

      </main>
    </>
  )
}

function ProjectCard({ title, subtitle, year, tags, href }: {
  title: string, subtitle: string, year: string, tags: string[], href: string
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'block',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2rem',
        textDecoration: 'none',
        color: 'var(--color-text)',
        backgroundColor: '#F6F5F3',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'pointer',
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
    >
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{year}</p>
      <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>{subtitle}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.75rem', padding: '0.25rem 0.6rem',
            border: '1px solid var(--color-border)', borderRadius: '20px',
            color: 'var(--color-text-secondary)',
          }}>{tag}</span>
        ))}
      </div>
    </motion.a>
  )
}