import { ExternalLink, ShieldCheck, Building2, Briefcase } from "lucide-react";
import { openPortalWithGuide } from "../lib/portalGuide";

export default function OfficialPortalsSection() {
  const portals = [
    { name: "JanSamarth Portal", authority: "Ministry of Finance, GoI", description: "Unified portal for credit-linked government schemes, MSME funding and business loans.", url: "https://www.jansamarth.in/", badge: "jansamarth.in" },
    { name: "Udyami Mitra Portal (SIDBI)", authority: "Small Industries Development Bank of India", description: "Official support portal for MUDRA, Stand-Up India and enterprise financing guidance.", url: "https://www.udyamimitra.in/", badge: "udyamimitra.in" },
    { name: "PMEGP e-Portal (KVIC)", authority: "Khadi and Village Industries Commission", description: "Official PMEGP portal for micro-enterprise setup, subsidy-linked applications and status tracking.", url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp", badge: "kviconline.gov.in" },
    { name: "PM SVANidhi Portal", authority: "Ministry of Housing and Urban Affairs", description: "Official portal for working-capital support for eligible street vendors and small merchants.", url: "https://pmsvanidhi.mohua.gov.in/", badge: "pmsvanidhi.mohua.gov.in" },
    { name: "Startup India", authority: "DPIIT, Government of India", description: "Official startup ecosystem portal for recognition, schemes, learning and funding resources.", url: "https://www.startupindia.gov.in/", badge: "startupindia.gov.in" },
    { name: "MSME Ministry Portal", authority: "Ministry of Micro, Small & Medium Enterprises", description: "Official information source for MSME schemes, support programmes and enterprise resources.", url: "https://msme.gov.in/", badge: "msme.gov.in" },
  ];

  return (
    <section id="portals" className="border-t border-black/5 bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink/70"><ShieldCheck size={16} className="text-teal" /> Official Govt Links</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Official Government Application Portals Directory</h2>
          <p className="mt-2 text-sm sm:text-base text-ink/65">Udaan helps you reach authentic government portals directly and keeps guidance available while you complete the official process.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portals.map((p) => (
            <div key={p.name} className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-cream-soft p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between"><span className="inline-flex items-center gap-1 rounded-full bg-terracotta/10 px-2.5 py-0.5 text-[11px] font-bold text-terracotta"><Briefcase size={12} /> Business / Scheme Portal</span><span className="text-[11px] font-mono text-ink/40">{p.badge}</span></div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{p.name}</h3><p className="mt-1 text-xs font-semibold text-teal-dark">{p.authority}</p><p className="mt-3 text-xs leading-relaxed text-ink/70">{p.description}</p>
              </div>
              <div className="mt-6 border-t border-ink/5 pt-4"><button onClick={() => openPortalWithGuide({ title: p.name, portalName: p.name, url: p.url, kind: 'scheme' })} className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-xs font-bold text-cream transition hover:bg-ink-soft"><Building2 size={13} /> Open Portal + Udaan Guide <ExternalLink size={13} /></button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
