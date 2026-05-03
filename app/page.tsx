export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Visual Database Schema Explorer
          <span className="block text-[#58a6ff] mt-1">with AI Insights</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your database, get interactive visual maps of your schema, and let AI surface relationship issues, performance bottlenecks, and optimization opportunities — instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Interactive Schema Maps', desc: 'D3-powered diagrams that let you explore tables, columns, and foreign keys visually.' },
            { title: 'AI Relationship Analysis', desc: 'OpenAI scans your schema and flags missing indexes, circular dependencies, and N+1 risks.' },
            { title: 'Optimization Suggestions', desc: 'Actionable recommendations to improve query performance and schema design.' }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited schema connections',
              'Interactive D3 visual diagrams',
              'AI-powered insights via OpenAI',
              'Performance bottleneck detection',
              'Export diagrams as PNG/SVG',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and SQLite are supported at launch. MongoDB and MS SQL Server are on the roadmap.'
            },
            {
              q: 'Is my schema data sent to OpenAI?',
              a: 'Only structural metadata (table names, column types, constraints) is sent — never your actual data rows.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel from your billing portal at any time with no questions asked and no cancellation fees.'
            }
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Database Visual Explorer. All rights reserved.
      </footer>
    </main>
  )
}
