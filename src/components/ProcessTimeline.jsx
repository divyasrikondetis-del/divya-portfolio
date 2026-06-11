import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Process Timeline — "How I Work"
 * - White background with subtle grid
 * - Scroll-driven SVG curved dashed line
 * - 4 floating tag cards with random rotation
 * - Cards become active on scroll-trigger
 * - Handwritten-style bottom CTA
 */

const STEPS = [
  {
    num: '01',
    title: 'Research',
    side: 'right',
    rotate: '2deg',
    desc: 'Deep-dive into the brand, audience, and competitive landscape. Identify high-value keywords and map content opportunities aligned with business goals.',
  },
  {
    num: '02',
    title: 'Create',
    side: 'left',
    rotate: '-2.5deg',
    desc: 'Write SEO-optimised content that speaks to the audience. Every piece crafted with search intent in mind — from headlines to meta descriptions.',
  },
  {
    num: '03',
    title: 'Optimise',
    side: 'right',
    rotate: '1.5deg',
    desc: 'Fine-tune on-page elements: title tags, internal links, and structured data — turning good content into ranking content.',
  },
  {
    num: '04',
    title: 'Analyse',
    side: 'left',
    rotate: '-2deg',
    desc: 'Track performance in GA4. Monitor rankings, click-through rates, and engagement metrics to iterate and improve continuously.',
  },
]

function StepCard({ step, index, scrollYProgress }) {
  const threshold = index / STEPS.length
  const isActive = useTransform(
    scrollYProgress,
    [threshold, threshold + 0.1],
    [0, 1]
  )
  const isAnalyse = step.title === 'Analyse'

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.65 }}
      style={{ rotate: step.rotate }}
      whileHover={{ rotate: '0deg', scale: 1.03, transition: { duration: 0.25 } }}
      className={`
        relative w-full md:w-[48%] rounded-[2rem] p-8 cursor-default
        border-2 ${isAnalyse ? 'border-red-200 bg-[#fff2f2]' : 'border-red-200 bg-[#fff5f5]'}
        transition-all duration-500
      `}
    >
      {/* Hole punch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-gray-200 bg-white" />

      {/* Active red overlay driven by scroll */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none"
        style={{
          background: 'rgba(255,42,42,0.08)',
          opacity: isActive,
          boxShadow: '0 0 50px rgba(255,42,42,0.18)',
        }}
      />

      <div className="relative z-10 pt-4">
        <motion.span
          style={{ color: useTransform(isActive, [0, 1], ['#e5e5e5', 'rgba(255,255,255,0.15)']) }}
          className="font-display font-black italic block leading-none mb-2 select-none"
          style2={{ fontSize: '5rem' }}
        >
          <span className="text-[5rem] leading-none font-display font-black italic opacity-20">
            {step.num}
          </span>
        </motion.span>

        <motion.h3
          style={{ color: useTransform(isActive, [0, 1], ['#111111', '#ffffff']) }}
          className="font-display font-black text-2xl mb-3"
        >
          {step.title}
        </motion.h3>
        <motion.p
          style={{ color: useTransform(isActive, [0, 1], ['#6b7280', 'rgba(255,255,255,0.8)']) }}
          className="font-body text-sm leading-relaxed"
        >
          {step.desc}
        </motion.p>
      </div>

      {/* Active dot */}
      <motion.div
        className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full"
        style={{ background: useTransform(isActive, [0, 1], ['#fca5a5', '#ffffff']) }}
      />
    </motion.div>
  )
}

export default function ProcessTimeline() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.3'],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="section-pad bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.028) 1px,transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-200 bg-[#fff2f2] shadow-sm font-mono text-[11px] tracking-widest uppercase text-red-500 mb-6"
          >
            How I Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-black text-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            My Process for
            <br />
            <span className="text-red-500">SEO &amp; Content Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-gray-400 mt-4 max-w-md mx-auto text-sm"
          >
            A repeatable four-step framework that turns research into rankings.
          </motion.p>
        </div>

        {/* Timeline + Cards */}
        <div className="relative">

          {/* Cards */}
          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-between md:gap-10">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* Bottom CTA — handwritten style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p
            className="font-display font-black italic text-black inline-block"
            style={{
              fontSize: 'clamp(1.6rem, 4.5vw, 3rem)',
              transform: 'rotate(-1.8deg)',
              display: 'inline-block',
              textShadow: '0 2px 20px rgba(0,0,0,0.12)',
            }}
          >
            Ready to be delivered! 🚀
          </p>
          <div className="mt-7">
            <motion.a
              href="mailto:divyasri.kondetis@gmail.com"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-red-500 text-white font-body font-semibold rounded-full hover:bg-red-600 transition-colors duration-300 shadow-lg"
            >
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
