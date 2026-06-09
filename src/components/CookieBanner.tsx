"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: false,
    statistical: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("tf_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("tf_cookie_consent", "all");
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("tf_cookie_consent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-brand-dark p-6 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="font-display font-black text-2xl text-brand-dark uppercase mb-2">Datenschutz & Cookies</h3>
          <p className="text-zinc-600 text-sm font-medium max-w-3xl">
            Wir verwenden Cookies, um die Nutzererfahrung zu verbessern und unsere Dienste anzubieten. Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="underline font-bold hover:text-safety-green">Datenschutzerklärung</a>.
          </p>
          
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-brand-dark">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked disabled className="accent-safety-green w-4 h-4" />
              Notwendig (Immer aktiv)
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.statistical} 
                onChange={(e) => setPreferences({...preferences, statistical: e.target.checked})}
                className="accent-safety-green w-4 h-4" 
              />
              Statistik
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.marketing} 
                onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                className="accent-safety-green w-4 h-4" 
              />
              Marketing
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-[300px] w-full lg:w-auto">
          <button onClick={savePreferences} className="btn-rugged px-4 py-2 text-sm bg-zinc-200 border-2 text-brand-dark flex-1 whitespace-nowrap">
            Auswahl speichern
          </button>
          <button onClick={acceptAll} className="btn-rugged px-4 py-2 text-sm flex-1 whitespace-nowrap">
            Alle Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
