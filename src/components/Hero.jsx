import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              AI-powered site diary for Australian construction
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              Turn rough notes into legally-compliant, professional entries in minutes — complete with weather, photos, signatures and Australian Standards references.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#cta" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition">Start free</a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition">See features</a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300/80">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="font-semibold text-white">60–90 min saved daily</p>
                <p>AI turns bullet points into compliant entries</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="font-semibold text-white">Evidence Act compliant</p>
                <p>Fresh signature required each day</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-28 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.4),transparent_50%)]" />
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-2xl">
              <div className="rounded-xl bg-slate-800/80 border border-white/10 p-4">
                <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent ring-1 ring-inset ring-white/10 grid place-items-center text-center p-8">
                  <div>
                    <p className="text-2xl font-semibold text-white">Generate Compliant Entry</p>
                    <p className="mt-3 text-slate-300">Combine notes, weather, personnel, equipment and issues into a legally-defensible record.</p>
                    <div className="mt-6 inline-flex items-center gap-3">
                      <div className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm">Australian Standards</div>
                      <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-sm">Digital Signatures</div>
                      <div className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-400/30 text-sm">Offline-first</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3 text-xs text-slate-300">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">Weather autofill</div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">Copy from yesterday</div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">Templates</div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">Personnel & equipment</div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">Photos</div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">PDF export</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
