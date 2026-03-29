'use client'
import Link from 'next/link'
import { useState } from 'react'

const pasi = [
  {
    nr: 1,
    icon: '📝',
    titlu: 'Completează formularul',
    desc: 'Înregistrează-te pe platforma UTM și completează cererea de admitere online.',
    culoare: 'bg-blue-50 border-blue-200',
  },
  {
    nr: 2,
    icon: '📂',
    titlu: 'Trimite actele',
    desc: 'Scanează și încarcă documentele necesare: buletin, diploma, fotografii.',
    culoare: 'bg-indigo-50 border-indigo-200',
  },
  {
    nr: 3,
    icon: '✅',
    titlu: 'Confirmă înscrierea',
    desc: 'Primești confirmarea prin email și ești programat pentru interviu.',
    culoare: 'bg-green-50 border-green-200',
  },
]

const acte = [
  'Buletin de identitate (copie)',
  'Diploma de bacalaureat / studii medii (copie legalizată)',
  'Foaia matricolă (copie legalizată)',
  '4 fotografii 3×4 cm',
  'Certificat medical (forma 086)',
  'Cerere de înmatriculare (se completează la secretariat)',
]

const intrebari = [
  {
    q: 'Care este termenul limită de depunere a dosarului?',
    a: 'Dosarele se acceptă în perioada iulie–august. Urmăriți anunțurile oficiale pentru data exactă a anului curent.',
  },
  {
    q: 'Există locuri bugetate (fără taxă)?',
    a: 'Da, există locuri finanțate de la bugetul de stat. Numărul acestora variază în funcție de specialitate și rezultatele concursului.',
  },
  {
    q: 'Pot aplica dacă am absolvit în alt an?',
    a: 'Da, absolvenții din orice an sunt eligibili să aplice la admitere.',
  },
  {
    q: 'Cum se calculează media de concurs?',
    a: 'Media de concurs = (MNDP + MNEA) / 2, unde MNDP este media celor 4 discipline de profil și MNEA este media examenelor de absolvire.',
  },
]

const specialitatiCalc = [
  { label: 'Programare și testarea produselor de program', disciplina4: 'Informatica / Fizica' },
  { label: 'Administrarea rețelelor de calculatoare',      disciplina4: 'Informatica / Fizica' },
  { label: 'Design și multimedia',                         disciplina4: 'Informatica / Arte'  },
  { label: 'Administrarea aplicațiilor web',               disciplina4: 'Informatica / Fizica' },
  { label: 'Calculatoare',                                 disciplina4: 'Informatica / Fizica' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
      <div className="space-y-3">
        {intrebari.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {item.q}
                <svg className={`w-5 h-5 text-utm-blue transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                  <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
              )}
            </div>
        ))}
      </div>
  )
}

function CalculatorAdmitere() {
  const [specialitate, setSpecialitate] = useState(0)
  const [note, setNote] = useState({ limba: '', matematica: '', straina: '', profil: '', examene: '' })
  const [rezultat, setRezultat] = useState(null)
  const [eroare, setEroare] = useState('')

  const set = (key, val) => { setNote((prev) => ({ ...prev, [key]: val })); setRezultat(null) }

  const calculeaza = () => {
    const { limba, matematica, straina, profil, examene } = note
    for (const v of [limba, matematica, straina, profil, examene]) {
      const n = parseFloat(v)
      if (v === '' || isNaN(n) || n < 1 || n > 10) {
        setEroare('Completați toate câmpurile cu note valide între 1 și 10.')
        setRezultat(null)
        return
      }
    }
    setEroare('')
    const MNDP = (parseFloat(limba) + parseFloat(matematica) + parseFloat(straina) + parseFloat(profil)) / 4
    const MNEA = parseFloat(examene)
    const MC = (MNDP + MNEA) / 2
    setRezultat({ MNDP, MNEA, MC })
  }

  const getBanda = (nota) => {
    if (nota >= 9)   return { text: 'Excelent — șanse mari la loc bugetat', bg: 'bg-green-100', color: 'text-green-700' }
    if (nota >= 7.5) return { text: 'Bine — eligibil pentru admitere',       bg: 'bg-blue-100',  color: 'text-blue-700'  }
    if (nota >= 6)   return { text: 'Suficient — loc cu taxă probabil',       bg: 'bg-amber-100', color: 'text-amber-700' }
    return               { text: 'Sub limita minimă de admitere (6.00)',      bg: 'bg-red-100',   color: 'text-red-600'   }
  }

  return (
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
        <h2 className="text-3xl font-black font-display text-utm-blue text-center mb-1 leading-tight">
          Calculează-ți media{' '}
          <span className="bg-blue-100 text-utm-blue px-2 rounded-lg">de concurs</span>{' '}
          pentru admitere
        </h2>
        <p className="text-center text-slate-400 text-sm mb-8">Formula oficială Colegiul UTM — după clasa a 9-a</p>

        {/* Specialitate */}
        <div className="mb-7">
          <label className="block text-utm-blue-light font-semibold text-sm mb-2">Alegeți specialitatea:</label>
          <select
              value={specialitate}
              onChange={(e) => { setSpecialitate(Number(e.target.value)); setRezultat(null) }}
              className="w-full border border-slate-200 bg-blue-50 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
          >
            {specialitatiCalc.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
          </select>
        </div>

        {/* MNDP */}
        <div className="mb-7">
          <h3 className="font-bold font-display text-slate-800 mb-1">
            Notele medii anuale la 4 disciplini de profil (MNDP):
          </h3>
          <p className="text-xs text-slate-400 mb-4">Media aritmetică a mediilor anuale la cele 4 discipline</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'limba',      label: 'Limba de instruire (ro/ru):' },
              { id: 'matematica', label: 'Matematica:'                 },
              { id: 'straina',    label: 'Limba străină I (en/fr):'    },
              { id: 'profil',     label: specialitatiCalc[specialitate].disciplina4 + ':' },
            ].map(({ id, label }) => (
                <div key={id}>
                  <label className="block text-utm-blue-light text-xs font-semibold mb-1.5">{label}</label>
                  <input
                      type="number" min="1" max="10" step="0.01" placeholder="—"
                      value={note[id]}
                      onChange={(e) => set(id, e.target.value)}
                      className="w-full bg-blue-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
                  />
                </div>
            ))}
          </div>
        </div>

        {/* MNEA + Buton */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-4">
          <div className="flex-1">
            <h3 className="font-bold font-display text-slate-800 mb-1">
              Media notelor la examenele de absolvire (MNEA):
            </h3>
            <p className="text-xs text-slate-400 mb-4">Media notelor obținute la examenele de absolvire cl. 9</p>
            <div className="max-w-xs">
              <label className="block text-utm-blue-light text-xs font-semibold mb-1.5">Media examenelor:</label>
              <input
                  type="number" min="1" max="10" step="0.01" placeholder="—"
                  value={note.examene}
                  onChange={(e) => set('examene', e.target.value)}
                  className="w-full bg-blue-50 border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-utm-blue-light"
              />
            </div>
          </div>
          <button
              onClick={calculeaza}
              className="bg-utm-blue text-white font-black font-display tracking-wider px-8 py-4 rounded-xl hover:bg-utm-blue-dark transition-colors text-sm uppercase"
          >
            Calculează
          </button>
        </div>

        {eroare && <p className="text-red-500 text-sm mb-3">{eroare}</p>}

        {/* Rezultat */}
        {rezultat && (() => {
          const banda = getBanda(rezultat.MC)
          return (
              <div className="border-t border-slate-100 pt-6 mt-2">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-black font-display text-utm-blue">{rezultat.MC.toFixed(2)}</span>
                    <span className="text-slate-500 text-sm">media de concurs (MC)</span>
                  </div>
                  <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${banda.bg} ${banda.color}`}>
                {banda.text}
              </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                      <p className="text-xs text-slate-400 mb-1">MNDP — Media discipline profil</p>
                      <p className="text-2xl font-black font-display text-utm-blue">{rezultat.MNDP.toFixed(2)}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                      <p className="text-xs text-slate-400 mb-1">MNEA — Media examene absolvire</p>
                      <p className="text-2xl font-black font-display text-utm-blue">{rezultat.MNEA.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    Formula: MC = (MNDP + MNEA) / 2 · Notă minimă admitere: 6.00
                  </p>
                </div>
              </div>
          )
        })()}
      </div>
  )
}

export default function AdmiterePage() {
  const [form, setForm] = useState({ nume: '', telefon: '', email: '', specialitate: '' })
  const [trimis, setTrimis] = useState(false)

  return (
      <div className="min-h-screen bg-slate-50">
        {/* HERO Banner */}
        <div className="bg-gradient-to-r from-utm-blue-dark to-utm-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Admitere 2025–2026
          </span>
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">
              Începe-ți cariera la Colegiul UTM
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Procesul de admitere este simplu și transparent. Îți explicăm pas cu pas tot ce ai nevoie.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* Pași */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-10">Cum funcționează admiterea?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pasi.map((pas) => (
                  <div key={pas.nr} className={`rounded-2xl border-2 p-7 ${pas.culoare} relative`}>
                    <div className="w-10 h-10 bg-utm-blue text-white font-black text-lg rounded-full flex items-center justify-center mb-4 font-display">
                      {pas.nr}
                    </div>
                    <div className="text-3xl mb-3">{pas.icon}</div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2 font-display">{pas.titlu}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pas.desc}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <div className="mb-16">
            <CalculatorAdmitere />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Acte necesare */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="section-title mb-6 text-2xl">📋 Acte necesare</h2>
              <ul className="space-y-3">
                {acte.map((act, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-utm-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm">{act}</span>
                    </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-sm font-medium">
                  ⚠️ Dosarul complet se depune personal la secretariatul colegiului sau prin e-mail la adresa indicată pe pagina de contact.
                </p>
              </div>
            </div>

            {/* Formular */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="section-title mb-6 text-2xl">🚀 Aplică online</h2>
              {trimis ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-utm-blue mb-2 font-display">Cererea a fost trimisă!</h3>
                    <p className="text-slate-500 text-sm">Te vom contacta în cel mai scurt timp. Verifică și căsuța de spam.</p>
                    <button onClick={() => setTrimis(false)} className="mt-6 text-utm-blue-light text-sm font-semibold hover:underline">
                      Trimite altă cerere
                    </button>
                  </div>
              ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nume și Prenume *</label>
                      <input
                          type="text" placeholder="Numele tău complet"
                          value={form.nume}
                          onChange={(e) => setForm({ ...form, nume: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Telefon *</label>
                        <input
                            type="tel" placeholder="+373 XX XXX XXX"
                            value={form.telefon}
                            onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                        <input
                            type="email" placeholder="email@exemplu.md"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Specialitatea dorită *</label>
                      <select
                          value={form.specialitate}
                          onChange={(e) => setForm({ ...form, specialitate: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-utm-blue-light focus:border-transparent bg-white"
                      >
                        <option value="">Alege specialitatea</option>
                        <option value="programare">Programare și testarea produselor de program</option>
                        <option value="retele">Administrarea rețelelor de calculatoare</option>
                        <option value="design">Design și Multimedia</option>
                        <option value="web">Administrarea Aplicațiilor Web</option>
                        <option value="calculatoare">Calculatoare</option>
                      </select>
                    </div>
                    <button
                        onClick={() => { if (form.nume && form.telefon && form.specialitate) setTrimis(true) }}
                        className="btn-primary w-full justify-center text-base py-3.5 rounded-xl mt-2"
                    >
                      Trimite cererea →
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      Prin trimiterea cererii ești de acord cu prelucrarea datelor personale conform RGPD.
                    </p>
                  </div>
              )}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-8">Întrebări frecvente</h2>
            <div className="max-w-3xl mx-auto">
              <FAQ />
            </div>
          </div>

          {/* CTA Footer */}
          <div className="bg-utm-blue rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl font-black font-display mb-3">Ai nevoie de ajutor?</h3>
            <p className="text-blue-200 mb-6">Secretariatul nostru îți răspunde la orice întrebare</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-utm-blue font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Contactează-ne
              </Link>
              <a href="tel:+37322000000" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Sună acum
              </a>
            </div>
          </div>

        </div>
      </div>
  )
}
