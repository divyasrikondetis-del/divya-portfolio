import { motion } from 'framer-motion'

const EDUCATION = [
  {
    school: 'Vasireddy Venkatadri Institute of Technology (VVIT)',
    degree: 'Bachelor of Technology (B.Tech) – Computer Science Engineering',
    period: '2025 – Current',
  },
  {
    school: 'Sir C. R. Reddy Polytechnic, Eluru',
    degree: 'Diploma in Computer Science Engineering, Grade: A',
    period: '2022 – 2025',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-pad bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-mono text-[11px] tracking-widest uppercase mb-5 border border-brand/20"
          >
            Graduation & Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-black text-black"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            EDUCATION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-gray-500 mt-3 max-w-lg mx-auto text-sm"
          >
            Key academic qualifications and the timeline for growth from diploma to bachelor’s degree.
          </motion.p>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((item) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-brand mb-3">{item.school}</p>
                  <h3 className="font-display font-black text-2xl text-slate-900">{item.degree}</h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-gray-400">EXPERIENCE</p>
                  <p className="font-display font-black text-lg text-brand mt-2">{item.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
