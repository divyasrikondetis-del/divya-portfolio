import { motion } from 'framer-motion'

/**
 * Premium dark footer — #111111 background
 * - Top 3-col grid: Services / Experience / Availability
 * - Giant "Divya Sri" editorial branding text (Playfair italic)
 * - Bottom bar: copyright · email · privacy
 */

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-white overflow-hidden">

      {/* ── Top information grid ── */}
      <div className="section-pad pb-14 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-5">Services</h4>
            <ul className="space-y-3">
              {['SEO Strategy', 'Content Marketing', 'Content Writing', 'Keyword Research', 'GA4 Reporting'].map(s => (
                <li key={s} className="font-mono text-sm text-white/60 hover:text-white transition-colors cursor-default tracking-wide">{s}</li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-5">Experience</h4>
            <div className="space-y-4">
              <div>
                <p className="font-body text-sm text-white/75 font-medium">Content Writing Intern</p>
                <p className="font-mono text-[11px] text-white/35 mt-0.5">InAmigos Foundation · 2026</p>
              </div>
              <div>
                <p className="font-body text-sm text-white/75 font-medium">AI Blog Writing Intern</p>
                <p className="font-mono text-[11px] text-white/35 mt-0.5">InAmigos Foundation · 2026</p>
              </div>
              <div>
                <p className="font-body text-sm text-white/75 font-medium">Blogging &amp; Journalism Intern</p>
                <p className="font-mono text-[11px] text-white/35 mt-0.5">Unessa Foundation · 2026</p>
              </div>
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-mono text-[11px] text-brand hover:text-white transition-colors tracking-wider uppercase underline underline-offset-4"
              >
                View Work →
              </button>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="font-display text-white font-black text-2xl">K Divya Sri</p>
              <p className="font-mono text-sm text-white/70">Phone: 8074135927</p>
              <p className="font-mono text-sm text-white/70">Email: <a href="mailto:divyasri.kondetis@gmail.com" className="text-white hover:text-brand transition-colors">divyasri.kondetis@gmail.com</a></p>
              <p className="font-mono text-sm text-white/70">
                <a
                  href="https://www.linkedin.com/in/divya-sri-kondeti-263a45318"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] rounded-md text-sm text-white transition-colors"
                >
                  <span className="text-lg">🔗</span>
                  <span>Connect on LinkedIn</span>
                </a>
              </p>
              <p className="font-mono text-sm text-white/70">
                <a
                  href="https://github.com/divyasrikondetis-del"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] rounded-md text-sm text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-white">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span>divyasrikondetis-del</span>
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

        {/* ── Giant branding text — editorial centerpiece ── */}
      <div className="overflow-hidden py-2 border-b border-white/[0.05]">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ color: '#E60012', transition: { duration: 0.25 } }}
          className="font-display font-black italic text-center cursor-default select-none transition-colors"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.88,
            color: 'rgba(244,244,244,0.92)',
          }}
        >
          Divya Sri
        </motion.p>
      </div>

      {/* ── Strong footer quote ── */}
      <div className="py-8 border-b border-white/[0.05]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-center text-white/80 text-lg md:text-2xl italic max-w-3xl mx-auto"
        >
          "Turning Ideas into Impact Through Content, SEO, and Digital Marketing."
        </motion.p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 md:px-12 lg:px-24 py-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] text-white/25 tracking-wide">
            © 2026 Divya Sri Kondeti | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
