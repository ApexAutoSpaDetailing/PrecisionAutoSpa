"use client";

import { useState } from "react";
import { Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export default function Home() {
  const [vehicle, setVehicle] = useState("Sedan");

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Precision Auto Spa
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mb-8">
          Premium Mobile Auto Detailing in Ottawa. Interior deep cleans,
          exterior gloss, and protection packages that make your vehicle look
          better than showroom.
        </p>

        <div className="flex gap-4">
          <a
            href="tel:6135550123"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90"
          >
            <Phone className="inline mr-2 h-4 w-4" />
            Call Now
          </a>

          <a
            href="#services"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10"
          >
            View Services
          </a>
        </div>
      </section>

      <section id="services" className="px-6 py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
            <Sparkles className="mb-4 h-6 w-6" />
            <h3 className="text-xl font-semibold mb-2">Interior Deep Clean</h3>
            <p className="text-white/60">
              Steam cleaning, stain removal, vacuum, and full interior reset.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
            <ShieldCheck className="mb-4 h-6 w-6" />
            <h3 className="text-xl font-semibold mb-2">Paint Protection</h3>
            <p className="text-white/60">
              Sealants and ceramic coatings for long-lasting shine.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
            <MapPin className="mb-4 h-6 w-6" />
            <h3 className="text-xl font-semibold mb-2">Mobile Service</h3>
            <p className="text-white/60">
              We come to your home or office anywhere in Ottawa.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Precision Auto Spa • Ottawa, ON
      </footer>
    </div>
  );
}
