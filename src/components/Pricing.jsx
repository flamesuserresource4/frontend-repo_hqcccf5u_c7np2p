export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, fair pricing</h2>
          <p className="mt-4 text-slate-300">Start free. Upgrade when you're ready. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Free</h3>
            <p className="text-4xl font-bold text-white mt-2">$0<span className="text-base text-slate-300">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>10 entries per month</li>
              <li>Weather autofill</li>
              <li>PDF export</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-6 ring-2 ring-blue-500/30">
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="text-4xl font-bold text-white mt-2">$29<span className="text-base text-slate-300">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Unlimited entries</li>
              <li>AI entry generation</li>
              <li>Digital signatures</li>
              <li>Templates</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Start 14‑day trial</a>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Team</h3>
            <p className="text-4xl font-bold text-white mt-2">$25<span className="text-base text-slate-300">/user</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>5+ users</li>
              <li>Admin dashboard</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
