import Link from "next/link";

export default function Datenschutz() {
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
        <h1 className="font-display text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase">Datenschutzerklärung</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-bold text-brand-dark mb-1">Allgemeine Hinweise</h3>
            <p className="leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="font-bold text-brand-dark mb-1">Verantwortlicher</h3>
            <p className="leading-relaxed">
              Leander Koschin (Mairon)<br />
              Lambertiring 35<br />
              48429 Rheine (NRW)<br />
              E-Mail: leanderkoschin@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-bold text-brand-dark mb-1">Cookies</h3>
            <p className="leading-relaxed mb-4">
              Unsere Website verwendet Cookies. Wir setzen technisch notwendige Cookies ein, um die Funktionalität der Seite zu gewährleisten. Darüber hinaus verwenden wir Statistik- und Marketing-Cookies nur nach Ihrer ausdrücklichen Einwilligung über unseren Cookie-Banner.
            </p>
            <h3 className="font-bold text-brand-dark mb-1">Server-Log-Dateien</h3>
            <p className="leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp/-version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">3. App & Dokumentenerstellung</h2>
            <p className="leading-relaxed">
              Die Nutzung der Trennfreund PWA-App zur Erstellung der Anlagen 4 und 5 erfordert die Verarbeitung von Formulardaten und Fotos (Bilddaten der Bauabfälle). Diese Bilder werden durch unsere KI analysiert. Die erstellten Dokumente und Analysedaten verbleiben entweder lokal auf Ihrem Endgerät oder werden temporär zur Vertragserfüllung verarbeitet, je nach genutzter App-Funktion. Wir verarbeiten Ihre Daten nur im Rahmen der Leistungserbringung gemäß Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">4. Ihre Rechte</h2>
            <p className="leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>
          
        </div>
      </main>
    </>
  );
}
