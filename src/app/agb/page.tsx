import Link from "next/link";

export default function AGB() {
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
        <h1 className="font-display text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">1. Geltungsbereich</h2>
            <p className="leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Leander Koschin (Mairon), Lambertiring 35, 48429 Rheine (NRW) (nachfolgend "Anbieter") und dem Nutzer der Trennfreund-App geschlossen werden.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">2. Leistungen</h2>
            <p className="leading-relaxed">
              Der Anbieter stellt mit Trennfreund eine Mobile-First-PWA zur Verfügung. Die App erleichtert die Dokumentation von Bauabfällen für Abbruch- und Baufirmen. Die Nutzer können Fotos anfertigen, die durch künstliche Intelligenz (KI) analysiert und Abfallfraktionen zugeordnet werden. Basierend auf den Angaben sowie einem Wiegeschein wird automatisiert die Anlage 4 oder 5 generiert.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">3. Pflichten des Nutzers</h2>
            <p className="leading-relaxed">
              Der Nutzer ist verpflichtet, die von der KI generierten und ausgefüllten Daten sorgfältig zu überprüfen, bevor er diese signiert und bei Ämtern oder Behörden einreicht. Die App dient lediglich als Hilfsmittel zur Dokumentation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">4. Preise und Zahlung</h2>
            <p className="leading-relaxed">
              Die Nutzung der Trennfreund-App kostet 49,00 € pro Monat. Die Abrechnung erfolgt monatlich im Voraus. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">5. Vertragslaufzeit und Kündigung</h2>
            <p className="leading-relaxed">
              Der Nutzungsvertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von 14 Tagen zum Ende eines Vertragsmonats gekündigt werden.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">6. Haftungsbeschränkung</h2>
            <p className="leading-relaxed">
              Der Anbieter übernimmt keine Haftung für die inhaltliche Richtigkeit der durch die KI analysierten Daten und erstellten Dokumente. Der Nutzer trägt die alleinige rechtliche Verantwortung für die Korrektheit der eingereichten Formulare (Anlage 4/5). Die Haftung für leichte Fahrlässigkeit wird ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">7. Schlussbestimmungen</h2>
            <p className="leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. Anstelle der unwirksamen Bestimmung gelten die einschlägigen gesetzlichen Vorschriften.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
