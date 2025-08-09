import React from "react";

export default function ThreadlineApp() {
  return (
    <main className="min-h-screen bg-[#1A1E2E] text-[#F5F5F5] font-serif flex flex-col items-center justify-start p-4 sm:p-6 md:p-8">
      {/* Header mit Logo */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-center py-4 gap-4 sm:gap-0">
        <img src="/threadline-logo.png" alt="Threadline Logo" className="w-40 sm:w-48" />
        <nav className="space-x-4 sm:space-x-6 text-[#FFBD66] text-base sm:text-lg">
          <a href="#features" className="hover:text-[#FF7E47]">Features</a>
          <a href="#about" className="hover:text-[#FF7E47]">Über Uns</a>
          <a href="#signup" className="inline-block bg-gradient-to-r from-[#8B5E3C] to-[#FF7E47] text-white py-2 px-4 rounded-lg hover:opacity-90 mt-2 sm:mt-0">Jetzt starten</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center my-12 sm:my-16 max-w-2xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#FFBD66] mb-6">Finde emotionale Verbindungen mit Tiefe</h1>
        <p className="text-base sm:text-lg text-[#CCCCCC] mb-6 sm:mb-8">
          Threadline verbindet Menschen nicht nur nach Interessen, sondern durch emotionale Resonanz.
        </p>
        <button className="bg-gradient-to-r from-[#8B5E3C] to-[#FF7E47] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl hover:opacity-90">
          Jetzt entdecken
        </button>
      </section>

      {/* Beispiel-Profile */}
      <section className="flex flex-col sm:flex-row flex-wrap gap-6 mb-16 items-center justify-center" id="features">
        <div className="bg-[#2B2F3A] border border-[#8B5E3C] p-4 rounded-2xl text-center w-60">
          <img src="https://via.placeholder.com/150x150?text=Sarah" alt="Sarah" className="rounded-xl w-full mb-2" />
          <h3 className="text-[#FFBD66] text-lg">Sarah, 29</h3>
          <p className="text-sm text-[#CCCCCC]">Chicago</p>
        </div>
        <div className="bg-[#2B2F3A] border border-[#8B5E3C] p-4 rounded-2xl text-center w-60">
          <img src="https://via.placeholder.com/150x150?text=David" alt="David" className="rounded-xl w-full mb-2" />
          <h3 className="text-[#FFBD66] text-lg">David, 31</h3>
          <p className="text-sm text-[#CCCCCC]">York</p>
        </div>
        <div className="bg-[#2B2F3A] border border-[#8B5E3C] p-4 rounded-2xl text-center w-60">
          <img src="https://via.placeholder.com/150x150?text=Lea" alt="Lea" className="rounded-xl w-full mb-2" />
          <h3 className="text-[#FFBD66] text-lg">Lea, 27</h3>
          <p className="text-sm text-[#CCCCCC]">Berlin</p>
        </div>
      </section>

      {/* Über Uns */}
      <section id="about" className="max-w-3xl text-center mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl text-[#FFBD66] mb-4">Was ist Threadline?</h2>
        <p className="text-[#CCCCCC] text-base sm:text-lg">
          Eine Plattform für echte emotionale Verbindungen. Unsere KI hilft dir, Menschen zu finden, mit denen du dich auf einer tieferen Ebene verbunden fühlst. Keine Swipes – echte Resonanz.
        </p>
      </section>

      {/* Call to Action */}
      <section id="signup" className="text-center px-4">
        <h2 className="text-xl sm:text-2xl text-[#FFBD66] mb-4">Bereit für eine neue Art von Begegnung?</h2>
        <button className="bg-gradient-to-r from-[#8B5E3C] to-[#FF7E47] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl hover:opacity-90">
          Jetzt kostenlos starten
        </button>
      </section>

      {/* Profilseite (Hybrid) */}
      <section className="w-full max-w-4xl mt-24 bg-[#2B2F3A] rounded-2xl p-6 md:p-10 text-left shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <img src="https://via.placeholder.com/150x150?text=Profil" alt="Profil" className="rounded-xl w-32 h-32 object-cover" />
          <div className="flex-1">
            <h3 className="text-2xl text-[#FFBD66]">Lea M., 27</h3>
            <p className="text-[#CCCCCC] mb-2">Berlin • Psychologin • Kalligrafie & Barfußspaziergänge</p>
            <div className="bg-[#1A1E2E] border border-[#FF7E47] rounded-lg px-4 py-2 inline-block text-sm text-[#FFBD66] mb-4">
              Emotionale Resonanz: 92%
            </div>
            <p className="text-[#CCCCCC] text-sm mb-4">
              "Ich glaube an echte Verbindungen. Wenn man gemeinsam schweigen kann und es sich trotzdem warm anfühlt."
            </p>
            <button className="bg-gradient-to-r from-[#8B5E3C] to-[#FF7E47] text-white py-2 px-6 rounded-xl hover:opacity-90 text-sm">
              Nachricht senden
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-24 text-sm text-[#666] text-center px-4">
        © 2025 Threadline. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
