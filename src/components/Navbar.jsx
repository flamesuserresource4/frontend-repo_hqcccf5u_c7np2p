import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 grid place-items-center">
              <span className="text-blue-400 font-bold">SD</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Site Diary Pro</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#journey" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#cta" className="px-3 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition">Get Started</a>
          </nav>
          <button className="md:hidden p-2 text-slate-200" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
