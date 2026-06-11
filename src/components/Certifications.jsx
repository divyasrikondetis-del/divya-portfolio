import { motion } from 'framer-motion'

/**
 * Certifications / Skills Section
 * - White background
 * - Badge header + "My Credentials"
 * - Two polished cards: Certifications + Achievements
 */

const CERTS = [
  { label: 'Google Analytics (GA4)',         issuer: 'Google Skillshop',   year: '2024' },
  { label: 'HubSpot SEO Certification',       issuer: 'HubSpot Academy',    year: '2024' },
  { label: 'HubSpot Content Marketing',       issuer: 'HubSpot Academy',    year: '2024' },
  { label: 'Get Started Using Google Analytics', issuer: 'Google Skillshop', year: '2024' },
  { label: 'Manage GA4 Data & Reports',       issuer: 'Google Skillshop',   year: '2024' },
]

const ACHIEVEMENTS = [
  { label: 'Top-Performing Intern',     detail: 'Recognised during content writing assessments at InAmigos Foundation' },
  { label: 'B.Tech CSE Student',        detail: 'VVIT, Andhra Pradesh — strong technical foundation' },
  { label: '5 Industry Certifications', detail: 'All active & verified — completed within 6 months' },
  { label: 'Dual Internship Roles',     detail: 'Content Writing & AI Blog Writing at InAmigos Foundation' },
]

function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 3" stroke="#E60012" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="pt-0 pb-12 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-mono text-[11px] tracking-widest uppercase mb-5 border border-brand/20"
          >
            Certifications &amp; Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-black text-black"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            My Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-gray-400 mt-3 max-w-sm mx-auto text-sm"
          >
            Industry-recognized certifications showcasing my knowledge and commitment to continuous learning.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="1.8"/>
                  <path d="M8 14l-3 7 7-3 7 3-3-7" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-gray-900">Certifications</h3>
                <p className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">Verified credentials</p>
              </div>
            </div>
            <ul className="space-y-0">
              {CERTS.map((c, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0"
                >
                  <CheckIcon />
                  <div>
                    <p className="font-body font-semibold text-sm text-gray-800">{c.label}</p>
                    <p className="font-mono text-[10px] text-gray-400 mt-0.5">{c.issuer} · {c.year}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
            className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-gray-900">Achievements</h3>
                <p className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">Highlights &amp; milestones</p>
              </div>
            </div>
            <ul className="space-y-0">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-0"
                >
                  <CheckIcon />
                  <div>
                    <p className="font-body font-semibold text-sm text-gray-800">{a.label}</p>
                    <p className="font-mono text-[10px] text-gray-400 mt-0.5">{a.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
