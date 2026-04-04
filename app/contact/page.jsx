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
            {/* FORM */}
            <div className="card p-8">
              {trimis ? (
                  <div className="flex flex-col items-center text-center py-8">
                    <div className="text-5xl mb-4">✉️</div>
                    <h3 className="text-xl font-bold text-utm-blue mb-2">Mesaj trimis!</h3>
                    <p className="text-slate-500">Te vom contacta în curând.</p>
                    <button
                        onClick={() => { setForm({ nume: '', email: '', telefon: '', mesaj: '' }); setTrimis(false) }}
                        className="mt-6 px-4 py-2 text-sm text-utm-blue border border-utm-blue rounded-lg hover:bg-utm-blue hover:text-white transition"
                    >
                      Trimite alt mesaj
                    </button>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Numele tău"
                        value={form.nume}
                        onChange={(e) => setForm({ ...form, nume: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-utm-blue-light"
                    />
                    <input
                        type="email"
                        placeholder="email@exemplu.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-utm-blue-light"
                    />
                    <input
                        type="tel"
                        placeholder="+373 XX XXX XXX"
                        value={form.telefon}
                        onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-utm-blue-light"
                    />
                    <textarea
                        placeholder="Scrie mesajul tău..."
                        value={form.mesaj}
                        onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                        rows={4}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-utm-blue-light resize-none"
                    />
                    <button className="w-full py-3 rounded-lg bg-utm-blue text-white font-medium hover:opacity-90 transition">
                      Trimite mesajul
                    </button>
                  </form>
              )}
            </div>

            {/* DREAPTA */}
            <div className="space-y-6">
              {/* HARTA GENERALĂ */}
              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                    src="https://www.google.com/maps?q=Colegiul+Tehnic+al+Universitatii+Tehnice+a+Moldovei+Chisinau&output=embed"
                    className="w-full h-64 border-0"
                    loading="lazy"
                ></iframe>
              </div>

              {/* CONTACT */}
              <div className="card p-6 space-y-4">
                <div className="flex gap-3">
                  <span>📍</span>
                  <p className="text-sm text-slate-600">MD-2049, Chișinău, str. Mircești 56/1</p>
                </div>
                <div className="flex gap-3">
                  <span>📞</span>
                  <p className="text-sm text-slate-600">+373 78 809 719</p>
                </div>
                <div className="flex gap-3">
                  <span>✉️</span>
                  <p className="text-sm text-slate-600">colegiu.utm@adm.utm.md</p>
                </div>
              </div>
            </div>
          </div>

          {/* ADMITERE INFO */}
          <div className="text-center space-y-6 mt-16">
            <h2 className="text-xl font-semibold text-slate-800">
              Telefoane de contact ale Comisiei de Admitere
            </h2>
            <p className="text-lg font-semibold text-utm-blue">
              078898503 și 078898504
            </p>
            <div className="border-t border-slate-300 w-1/2 mx-auto"></div>
            <p className="text-slate-700 font-medium">
              Program: Luni–Vineri, 08:00–17:00
            </p>
          </div>

          {/* ADRESA + HARTA ADMITERE */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-utm-blue underline mb-2">
              Adresa comisiei de admitere
            </h3>
            <p className="text-slate-700 mb-4">
              Blocul 5, Strada Studenților 9/9, Chișinău
            </p>
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                  src="https://www.google.com/maps?q=Blocul%205%20Strada%20Studentilor%209/9%20Chisinau&output=embed"
                  className="w-full h-56 border-0"
                  loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* TABEL */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-center text-slate-800 mb-6">
              Telefoane de contact
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-200 text-xs">
                <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="border px-2 py-2">Nr.</th>
                  <th className="border px-2 py-2">Nume / Funcția</th>
                  <th className="border px-2 py-2">Telefon</th>
                  <th className="border px-2 py-2">Birou</th>
                </tr>
                </thead>
                <tbody>
                {[
                  ["1", "Anticamera", "078809719", "203"],
                  ["2", "Radu Melnic, director", "078809719", "205"],
                  ["3", "Adrian Grădinaru, director adjunct", "078898501", "201"],
                  ["4", "Angela Ivanov, metodist", "078898502", "208"],
                  ["5", "Vadim Siminel, șef secție didactică 1", "078898503", "202"],
                  ["6", "Elena Ciocan, șef secție didactică 2", "078898504", "301"],
                ].map((row, i) => (
                    <tr key={i} className="text-center hover:bg-slate-50">
                      <td className="border px-2 py-2">{row[0]}</td>
                      <td className="border px-2 py-2">{row[1]}</td>
                      <td className="border px-2 py-2">{row[2]}</td>
                      <td className="border px-2 py-2 font-semibold">{row[3]}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

  )
}