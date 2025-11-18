import { CheckCircle2, CloudSun, FileSignature, Image, MapPin, ShieldCheck, Workflow } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "AI-powered documentation",
    desc: "Convert bullet points into formal, compliant entries that reference Australian Standards.",
  },
  {
    icon: CloudSun,
    title: "Automatic weather",
    desc: "One-click autofill using GPS or address with temperature, wind, UV and precipitation.",
  },
  {
    icon: FileSignature,
    title: "Digital signatures",
    desc: "Fresh signature required for each entry for Evidence Act 1995 compliance.",
  },
  {
    icon: MapPin,
    title: "Offline-first",
    desc: "Works without internet and syncs automatically when reconnected.",
  },
  {
    icon: Image,
    title: "Photos & attachments",
    desc: "Attach time-stamped photos and link them to specific entries.",
  },
  {
    icon: ShieldCheck,
    title: "Audit trail",
    desc: "Every change is tracked for disputes, EOT and progress claims.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Built for Australian construction</h2>
          <p className="mt-4 text-slate-300">
            Everything you need to produce professional, defensible site diaries in minutes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
            <h4 className="text-white font-semibold">Comprehensive data</h4>
            <p className="text-slate-300 mt-2 text-sm">Track personnel, equipment, materials, visitors, issues and photos in structured forms.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
            <h4 className="text-white font-semibold">Templates & copy from yesterday</h4>
            <p className="text-slate-300 mt-2 text-sm">Save time on long-running projects with reusable setups and smart prefill.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-transparent p-6">
            <h4 className="text-white font-semibold">Search & reporting</h4>
            <p className="text-slate-300 mt-2 text-sm">Find entries by date, job or keyword and export professional PDFs for claims.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
