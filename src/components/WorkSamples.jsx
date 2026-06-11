import { motion } from 'framer-motion'

export default function WorkSamples() {
  const samples = [
    'CSR Partnership with InAmigos Foundation – Empowering Women Together',
    'Project Udaan Awareness Article',
    'Women Empowerment Blog',
    'AI & Education Blog',
    'SEO Learning Articles',
  ]

  return (
    <section id="work-samples" className="section-pad">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-black text-black mb-6"
        >
          Work Samples
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3 list-none"
        >
          {samples.map(s => (
            <li key={s} className="font-body text-white bg-brand p-4 rounded-md shadow-lg">
              <span className="font-mono text-[13px]">{s}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
