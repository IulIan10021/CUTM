'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ nume: '', email: '', telefon: '', mesaj: '' })
  const [trimis, setTrimis] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTrimis(true)
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="section-title mb-12">Contactează-ne</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card p-8">
            {trimis ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-utm-blue mb-2">Mesaj trimis!</h3>
                <p className="text-slate-500">Te vom contacta în curând.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nume</label>
                  <input
                    type="text"
                    placeholder="Numele tău"
                    value={form.nume}
                    onChange={(e) => setForm({ ...form, nume: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="email@exemplu.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+373 XX XXX XXX"
                    value={form.telefon}
                    onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Mesaj</label>
                  <textarea
                    placeholder="Scrie mesajul tău..."
                    value={form.mesaj}
                    onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                    rows={4}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Trimite mesajul
                </button>
              </form>
            )}
          </div>

          {/* Map + Contact Info */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300">
              {/*
                ╔══════════════════════════════════════════════════╗
                ║  HARTĂ / SCREENSHOT GOOGLE MAPS                  ║
                ║  Fișier: /public/images/contact/harta.jpg        ║
                ║  SAU înlocuiește cu <iframe> Google Maps         ║
                ╚══════════════════════════════════════════════════╝
                Exemplu iframe Google Maps:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%" height="100%" style={{border:0}} allowFullScreen
                />
              */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <p className="text-3xl mb-1">🗺️</p>
                  <p className="text-sm">Hartă Google Maps</p>
                  <p className="text-xs mt-1">/public/images/contact/harta.jpg</p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-utm-blue-light text-xl">📍</span>
                <div>
                  <p className="font-semibold text-slate-800">Adresă</p>
                  <p className="text-slate-500 text-sm">Str. Studențilori 9/9, Chișinău, Moldova</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-utm-blue-light text-xl">📞</span>
                <div>
                  <p className="font-semibold text-slate-800">Telefon</p>
                  <p className="text-slate-500 text-sm">+373 22 XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-utm-blue-light text-xl">✉️</span>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-500 text-sm">info@utm.md</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
