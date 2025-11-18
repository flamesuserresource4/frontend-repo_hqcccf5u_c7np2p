export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Start in minutes. See value on day one.</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Create an account, set your preferences and generate your first compliant diary entry in under 15 minutes.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://prositediary.com" target="_blank" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition">Sign up</a>
            <a href="#features" className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition">View features</a>
          </div>
          <p className="mt-4 text-sm text-blue-200/80">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
