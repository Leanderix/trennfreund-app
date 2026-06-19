"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 2. GSAP Animations
    // Fade Ins
    gsap.fromTo(
      ".gsap-fade",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );

    // Parallax element in hero
    gsap.to(".gsap-parallax", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".gsap-parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // "How it works" Steps Entrance Animation
    gsap.fromTo(
      ".card-step, .step-arrow",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: "#steps-container",
          start: "top 80%",
        },
      }
    );

    // Box Cards staggered entrance
    gsap.fromTo(
      ".card-rugged-bento",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#bento-container",
          start: "top 80%",
        },
      }
    );

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <>
      {/* Subtle Concrete Texture Overlay */}
      <div className="concrete-texture"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white border-b-4 border-brand-dark transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#" className="font-display text-3xl font-black tracking-tight">
            <span className="text-brand-dark">TRENN</span>
            <span className="text-safety-green">FREUND</span>
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#how-it-works"
              className="font-display font-bold text-zinc-600 hover:text-brand-dark transition-colors uppercase tracking-wider text-sm"
            >
              So geht's
            </a>
            <a
              href="#legislation"
              className="font-display font-bold text-zinc-600 hover:text-brand-dark transition-colors uppercase tracking-wider text-sm"
            >
              GewAbfV '26
            </a>
          </div>
          <a href="https://app.trennfreund.de" className="btn-rugged px-4 py-2 text-xs sm:text-sm flex md:px-6">
            <span className="md:hidden">Testen</span>
            <span className="hidden md:inline">Kostenlos testen</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          {/* Left: Text content */}
          <div className="relative z-10 flex flex-col items-start pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
            <div className="lg:w-[48%] flex flex-col items-start">
              <h1 className="gsap-fade text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.88] font-display font-black text-brand-dark mb-8 uppercase">
                Schluss mit
                <br />
                <span className="bg-safety-green px-3 border-y-4 border-brand-dark inline-block transform -skew-x-2 mt-2">dem Zettel-</span>
                <br />
                chaos.
              </h1>

              <p className="gsap-fade text-lg md:text-2xl text-zinc-600 max-w-xl mb-12 font-medium leading-relaxed border-l-4 border-safety-green pl-4">
                Überlassen Sie unserer Web-App das Denken.
              </p>

              <div className="gsap-fade flex flex-wrap gap-6 items-center">
                <a href="https://app.trennfreund.de" className="btn-rugged px-8 py-4 text-lg">
                  Jetzt App testen
                  <span className="material-symbols-outlined ml-2 font-bold">
                    arrow_forward
                  </span>
                </a>
                <span className="text-sm text-zinc-500 font-display font-bold uppercase tracking-widest">
                  Nur 49€ / Monat
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hero image — fills right half on large screens */}
          <div className="hidden lg:block absolute left-[25%] right-auto top-0 bottom-0 w-[80%] pointer-events-none">
            <img
              src="/images/Hero_Image.png"
              alt="Bauarbeiter mit Trennfreund App"
              className="gsap-parallax w-full h-full object-contain object-center scale-110"
            />
          </div>

          {/* Mobile image below text */}
          <div className="lg:hidden w-full px-6 pb-10">
            <img
              src="/images/Hero_Image.png"
              alt="Bauarbeiter mit Trennfreund App"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>



        {/* NEW SECTION: How it works (3 Steps with Images) */}
        <section
          id="how-it-works"
          className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-b-4 border-brand-dark mb-16 relative z-10"
        >
          <div className="mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark uppercase leading-[0.95]">
              Wie funktioniert die <br />{" "}
              <span className="bg-safety-green px-4 border-y-4 border-brand-dark inline-block transform -skew-x-2 mt-3">
                Dokumentation?
              </span>
            </h2>
          </div>

          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 relative pb-16"
            id="steps-container"
          >
            {/* Step 1 */}
            <div className="card-step card-rugged p-6 flex-1 w-full bg-white relative group h-full flex flex-col">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-dark border-4 border-brand-dark rounded-full flex items-center justify-center font-display font-black text-2xl text-safety-green shadow-[4px_4px_0px_#84cc16] z-20">
                1
              </div>

              {/* Image */}
              <div className="h-48 border-4 border-brand-dark rounded-sm mb-6 overflow-hidden bg-zinc-200">
                <img
                  src="/images/step1.png"
                  alt="Bauschutt Mulde"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-zinc-100 border-2 border-brand-dark flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-brand-dark font-bold">
                    photo_camera
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-brand-dark uppercase">
                  Scannen
                </h3>
              </div>
              <p className="text-zinc-600 font-medium leading-relaxed">
                Einfach Baustelle und Mulde mit dem Handy knipsen. Die integrierte KI erkennt den Abfall 
                automatisch und ordnet ihn sofort richtig zu.
              </p>
            </div>

            {/* Unified Arrow 1 */}
            <div className="step-arrow z-30 lg:z-auto my-[-2rem] lg:my-0 flex items-center justify-center">
              <div className="hidden lg:flex">
                <span className="text-brand-dark material-symbols-outlined text-6xl">
                  arrow_right_alt
                </span>
              </div>
              <div className="lg:hidden w-12 h-12 bg-brand-dark text-safety-green border-4 border-brand-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_#84cc16]">
                <span className="material-symbols-outlined font-black">arrow_downward</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-step card-rugged p-6 flex-1 w-full bg-white relative group h-full flex flex-col">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-dark border-4 border-brand-dark rounded-full flex items-center justify-center font-display font-black text-2xl text-safety-green shadow-[4px_4px_0px_#84cc16] z-20">
                2
              </div>

              {/* Image */}
              <div className="h-48 border-4 border-brand-dark rounded-sm mb-6 overflow-hidden bg-zinc-200">
                <img
                  src="/images/step2.png"
                  alt="Lieferschein scannen"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-zinc-100 border-2 border-brand-dark flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-brand-dark font-bold">
                    draw
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-brand-dark uppercase">
                  Signieren
                </h3>
              </div>
              <p className="text-zinc-600 font-medium leading-relaxed">
                Einfach den Wiegeschein scannen und unsere KI trägt alle Daten selbstständig ein. 
                Sie müssen nur noch kurz drüberschauen und können direkt auf dem Handy unterschreiben.
              </p>
            </div>

            {/* Unified Arrow 2 */}
            <div className="step-arrow z-30 lg:z-auto my-[-2rem] lg:my-0 flex items-center justify-center">
              <div className="hidden lg:flex">
                <span className="text-brand-dark material-symbols-outlined text-6xl">
                  arrow_right_alt
                </span>
              </div>
              <div className="lg:hidden w-12 h-12 bg-brand-dark text-safety-green border-4 border-brand-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_#84cc16]">
                <span className="material-symbols-outlined font-black">arrow_downward</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-step card-rugged p-6 flex-1 w-full bg-safety-green relative group h-full flex flex-col">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-dark border-4 border-brand-dark rounded-full flex items-center justify-center font-display font-black text-2xl text-white shadow-[4px_4px_0px_#ffffff] z-20">
                3
              </div>

              {/* Image */}
              <div className="h-48 border-4 border-brand-dark rounded-sm mb-6 overflow-hidden bg-white">
                <img
                  src="/images/step3.png"
                  alt="PDF Dokumente"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white border-2 border-brand-dark flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-brand-dark font-bold">
                    download
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-brand-dark uppercase">
                  PDF Download
                </h3>
              </div>
              <p className="text-brand-dark font-medium leading-relaxed">
                Das Formular (Anlage 4 oder 5) wird fix und fertig für das Amt erstellt. 
                Funktioniert auch ohne Internetempfang direkt auf der Baustelle!
              </p>
            </div>
          </div>

          {/* New Description Text Below the Steps */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl font-black text-brand-dark mb-6">
              Damit Sie sich auf Ihre Baustelle konzentrieren können.
            </h3>
            <p className="text-xl text-zinc-600 font-medium leading-relaxed">
              Bauabfalldokumentation nervt. Das verstehen wir. Aus diesem Grund haben wir Trennfreund entwickelt, eine offline-fähige Web-App, die mithilfe von modernster KI-Technologie Bauabfallcontainer analysiert und daraus alle notwendigen Dokumente generiert und zum Download bereitstellt.
            </p>
          </div>
        </section>

        {/* Legislation / Bento Grid */}
        <section
          id="legislation"
          className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b-4 border-brand-dark pb-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark mb-4 uppercase leading-[0.95]">
                Warum gibt es bei uns <br />{" "}
                <span
                  className="text-safety-green"
                  style={{ WebkitTextStroke: "2px #18181b" }}
                >
                  keine Ausnahmen?
                </span>
              </h2>
              <p className="text-zinc-600 text-xl font-medium mt-6">
                Die 3. Novelle der GewAbfV (ab Juli 2026) zwingt Handwerker und
                Bauunternehmen zu radikalen Umbrüchen auf der Baustelle.
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-display font-black text-2xl text-red-600 uppercase">
                Bis zu 100.000€
              </p>
              <p className="text-zinc-600 font-bold uppercase text-sm">
                Bußgeld bei Verstößen<sup>[148]</sup>
              </p>
            </div>
          </div>

          {/* Solid Box Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[250px]"
            id="bento-container"
          >
            {/* Big Feature (Span 2x2) */}
            <div className="card-rugged card-rugged-bento col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 p-8 flex flex-col justify-between relative overflow-hidden bg-safety-green min-h-[250px]">
              <div className="w-16 h-16 bg-white border-4 border-brand-dark flex items-center justify-center mb-6 rounded-sm relative z-10">
                <span className="material-symbols-outlined text-4xl text-brand-dark font-bold">
                  edit_document
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-4xl font-black text-brand-dark mb-3 uppercase">
                  Digitale Pflicht
                </h3>
                <p className="text-brand-dark text-lg font-medium leading-relaxed">
                  Die bisherige "Kann"-Regelung wird zur strikten Pflicht.
                  Elektronische Formulare (Anlagen 4 & 5 für Bauabfälle) sind
                  künftig der einzige Standard. Papier-Lieferscheine reichen
                  nicht mehr.<sup>[147, 153]</sup>
                </p>
              </div>
              {/* Decorative Graphic */}
              <span
                className="material-symbols-outlined absolute right-[-5%] bottom-[-5%] text-brand-dark opacity-10 pointer-events-none"
                style={{ fontSize: "250px", fontVariationSettings: "'FILL' 1" }}
              >
                gavel
              </span>
            </div>

            {/* Standard Card */}
            <div className="card-rugged card-rugged-bento col-span-1 md:col-span-1 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-2xl font-black text-brand-dark uppercase leading-tight">
                  Verschärfte
                  <br /> Trennung
                </h3>
                <span className="material-symbols-outlined text-3xl text-brand-dark">
                  recycling
                </span>
              </div>
              <p className="text-zinc-600 text-sm mt-4 font-medium">
                Glaswolle, Steinwolle und Gips müssen direkt auf der Baustelle
                zwingend sortenrein getrennt werden.<sup>[132, 1415]</sup>
              </p>
            </div>

            {/* Standard Card */}
            <div className="card-rugged card-rugged-bento col-span-1 md:col-span-1 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-2xl font-black text-brand-dark uppercase leading-tight">
                  Bagatell-
                  <br /> grenzen
                </h3>
                <span className="material-symbols-outlined text-3xl text-brand-dark">
                  scale
                </span>
              </div>
              <div className="mt-4">
                <span className="text-5xl font-display font-black text-brand-dark">
                  10m³
                </span>
                <p className="text-zinc-600 text-sm mt-1 font-medium">
                  Die Dokumentations-Pflicht gilt schon ab dieser Menge Abfall pro
                  Baustelle.<sup>[95]</sup>
                </p>
              </div>
            </div>

            {/* Wide Card (Span 2x1) */}
            <div className="card-rugged card-rugged-bento col-span-1 md:col-span-2 p-8 flex items-center justify-between">
              <div className="max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse border border-brand-dark"></span>
                  <span className="text-sm font-display font-black text-red-600 uppercase tracking-widest">
                    Echtzeit-Doku
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-brand-dark mb-2 uppercase">
                  Lieferscheine Scannen
                </h3>
                <p className="text-zinc-600 font-medium">
                  Nahtlose Erfassung und Zuordnung von Wiegescheinen direkt auf
                  der Baustelle per App-Scan.
                </p>
              </div>
              <div className="w-20 h-20 bg-safety-green border-4 border-brand-dark flex items-center justify-center rounded-full shadow-[4px_4px_0px_#18181b]">
                <span className="material-symbols-outlined text-brand-dark text-3xl font-bold">
                  qr_code_scanner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section
          id="about"
          className="py-40 px-6 relative bg-safety-green border-y-4 border-brand-dark z-10"
        >
          <div className="warning-stripes absolute top-0 left-0 w-full h-4 opacity-50"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white border-4 border-brand-dark flex items-center justify-center rounded-full mb-8 shadow-[4px_4px_0px_#18181b]">
              <span className="material-symbols-outlined text-3xl text-brand-dark font-bold">
                engineering
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-black text-brand-dark mb-10 uppercase tracking-tighter leading-[0.9]">
              Gemacht für <br /> Macher.
            </h2>
            <a href="https://app.trennfreund.de" className="btn-rugged-dark btn-rugged px-12 py-5 text-xl">
              App Kostenlos testen
            </a>
          </div>

          <div className="warning-stripes absolute bottom-0 left-0 w-full h-4 opacity-50"></div>
        </section>
      </main>

      {/* Footer (Now also white) */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b-4 border-brand-dark pb-12">
            <div className="col-span-1 md:col-span-2">
              <a
                href="#"
                className="font-display text-3xl font-black tracking-tight mb-6 inline-block"
              >
                <span className="text-brand-dark">TRENN</span>
                <span className="text-safety-green">FREUND</span>
              </a>
              <p className="text-zinc-600 max-w-sm font-medium leading-relaxed">
                Das Startup Trennfreund aus NRW. Die praktische KI-gestützte
                Dokumentations-App für Abbruch- und Baugewerbe.
              </p>
            </div>
            <div>
              <h4 className="font-display text-brand-dark font-black mb-6 uppercase tracking-widest text-sm border-l-4 border-safety-green pl-3">
                App
              </h4>
              <ul className="space-y-4 font-medium">

                <li>
                  <a
                    href="#"
                    className="text-zinc-600 hover:text-brand-dark transition-colors font-bold"
                  >
                    Preise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-brand-dark font-black mb-6 uppercase tracking-widest text-sm border-l-4 border-safety-green pl-3">
                Firma
              </h4>
              <ul className="space-y-4 font-medium">
                <li>
                  <a
                    href="/impressum"
                    className="text-zinc-600 hover:text-brand-dark transition-colors font-bold"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="text-zinc-600 hover:text-brand-dark transition-colors font-bold"
                  >
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a
                    href="/agb"
                    className="text-zinc-600 hover:text-brand-dark transition-colors font-bold"
                  >
                    AGB
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2
              className="text-[10vw] font-display font-black text-white leading-none tracking-tighter select-none pointer-events-none mb-4"
              style={{ WebkitTextStroke: "2px #e4e4e7" }}
            >
              BAUSTELLE DIGITAL
            </h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
              © 2026 Leander Koschin (Mairon)
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a href="https://app.trennfreund.de" className="btn-rugged w-full flex justify-center items-center py-4 text-lg bg-safety-green text-brand-dark border-4 border-brand-dark shadow-[4px_4px_0px_#18181b]">
          Kostenlos testen
          <span className="material-symbols-outlined ml-2 font-bold">arrow_forward</span>
        </a>
      </div>

      <CookieBanner />
    </>
  );
}
