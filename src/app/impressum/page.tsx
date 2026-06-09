import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white border-b-4 border-brand-dark transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-3xl font-black tracking-tight">
            <span className="text-brand-dark">TRENN</span>
            <span className="text-safety-green">FREUND</span>
          </Link>
          <Link href="/" className="font-display font-bold text-zinc-600 hover:text-brand-dark uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Zurück
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[800px] mx-auto min-h-[100dvh]">
        <h1 className="font-display text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase">Impressum</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              Leander Koschin (Einzelunternehmen)<br />
              Mairon<br />
              Lambertiring 35<br />
              48429 Rheine (NRW)
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail: leanderkoschin@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Wird nachgereicht]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">EU-Streitschlichtung</h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-dark underline ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
