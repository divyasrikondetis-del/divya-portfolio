import { motion } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    title: 'SEO & Content Optimization Practice',
    desc: 'Keyword research and on-page SEO audits for a mock e-commerce brand. Created optimized blog posts targeting long-tail keywords, improving content relevance and simulated organic traffic by 40% over a structured 3-month content plan.',
    tags: ['SEO', 'Keyword Research', 'On-Page Optimization', 'Blog Writing'],
    bg: '#E60012', text: '#fff',
  },
  {
    num: '02',
    title: 'Digital Marketing Learning Projects',
    desc: 'Digital marketing practice project utilizing Google Analytics (GA4) and HubSpot to understand audience behavior, content performance, and marketing analytics.',
    tags: ['Google Analytics', 'HubSpot', 'Content Strategy', 'GA4 Reporting'],
    bg: '#111111', text: '#fff',
  },
]

export default function Projects() {
  return (
    <section id="work" className="section-pad bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-black text-black"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.14, duration: 0.6 }}
              whileHover={{ y: -9, transition: { duration: 0.25 } }}
              className="relative rounded-2xl p-9 overflow-hidden cursor-default"
              style={{ background: p.bg }}
            >
              {/* Big number watermark */}
              <span className="absolute -bottom-4 right-4 font-display font-black select-none"
                style={{ fontSize: '9rem', color: 'rgba(255,255,255,0.07)', lineHeight: 1 }}>
                {p.num}
              </span>

              <span className="font-mono text-[11px] tracking-widest uppercase mb-4 block"
                style={{ color: 'rgba(255,255,255,0.45)' }}>
                Project {p.num}
              </span>

              <h3 className="font-display font-black text-xl mb-3 leading-snug" style={{ color: p.text }}>
                {p.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full font-mono text-[10px] tracking-wide"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: p.text }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
