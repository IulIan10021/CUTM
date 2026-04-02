'use client'
import Link from 'next/link'
import { useState } from 'react'


function getAnulAcademic() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const startYear = month >= 9 ? year : year - 1
  return `${startYear}–${startYear + 1}`
}

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

const documente = [
  {
    titlu: 'Regulament cu privire la organizarea și desfășurarea concursului de admitere la programele de formare profesională tehnică',
    icon: '📜',
    href: '/oral/oral-anul-1 .pdf',
  },
  {
    titlu: 'Planul de înmatriculare pentru anul de studii 2025–2026',
    icon: '📊',
    href: '/oral/oral-anul-1 .pdf',
  },
  {
    titlu: 'Taxe de studii pentru anul de studii 2025–2026',
    icon: '💳',
    href: '/oral/oral-anul-1 .pdf',
  },
  {
    titlu: 'Aviz pentru achitarea taxei de studii la Colegiul Universității Tehnice a Moldovei',
    icon: '🏦',
    href: '/oral/oral-anul-1 .pdf',
  },
]

const tururi = {
  1: {
    titlu: 'Turul 1 de admitere',
    perioada: '21 iulie – 08 august 2025',
    afisare: '11 – 12 august 2025',
    descriere: 'Prima etapă a concursului de admitere. Candidații depun dosarul complet în perioada indicată și sunt repartizați în ordine descrescătoare a mediei de concurs.',
    pdfUrl: '/oral/oral-anul-1 .pdf',
    pdfTitlu: 'Ordinul de admitere — Turul 1 (2025)',
    bgHero: 'from-utm-blue-dark to-utm-blue',
  },
  2: {
    titlu: 'Turul 2 de admitere',
    perioada: '14 – 22 august 2025',
    afisare: '25 – 26 august 2025',
    descriere: 'A doua etapă de admitere pentru locurile rămase neocupate după Turul 1. Candidații care nu au fost înmatriculați în primul tur pot participa la concursul suplimentar.',
    pdfUrl: '/oral/oral-anul-1 .pdf',
    pdfTitlu: 'Ordinul de admitere — Turul 2 (2025)',
    bgHero: 'from-indigo-900 to-indigo-700',
  },
}

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
                <svg className={`w-5 h-5 text-utm-blue transition-transform flex-shrink-0 ml-3 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    return                  { text: 'Sub limita minimă de admitere (6.00)',    bg: 'bg-red-100',   color: 'text-red-600'   }
  }

  return (
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
        <h2 className="text-3xl font-black font-display text-utm-blue text-center mb-1 leading-tight">
          Calculează-ți media{' '}
          <span className="bg-blue-100 text-utm-blue px-2 rounded-lg">de concurs</span>{' '}
          pentru admitere
        </h2>
        <p className="text-center text-slate-400 text-sm mb-8">Formula oficială Colegiul UTM — după clasa a 9-a</p>

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

        <div className="mb-7">
          <h3 className="font-bold font-display text-slate-800 mb-1">Notele medii anuale la 4 disciplini de profil (MNDP):</h3>
          <p className="text-xs text-slate-400 mb-4">Media aritmetică a mediilor anuale la cele 4 discipline</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'limba',      label: 'Limba de instruire (ro/ru):' },
              { id: 'matematica', label: 'Matematica:' },
              { id: 'straina',    label: 'Limba străină I (en/fr):' },
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

        <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-4">
          <div className="flex-1">
            <h3 className="font-bold font-display text-slate-800 mb-1">Media notelor la examenele de absolvire (MNEA):</h3>
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

function TurView({ nr, onBack }) {
  const tur = tururi[nr]
  const altNr = nr === 1 ? 2 : 1

  return (
      <div className="min-h-screen bg-slate-50">
        <div className={`bg-gradient-to-r ${tur.bgHero} text-white py-14`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Înapoi la Admitere
            </button>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-white/20 text-white font-black text-2xl rounded-full flex items-center justify-center font-display">
                {nr}
              </div>
              <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">
              Admitere {getAnulAcademic()}
            </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">{tur.titlu}</h1>
            <p className="text-white/80 text-lg max-w-2xl">{tur.descriere}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-2">Perioada de depunere</p>
              <p className="text-2xl font-black font-display text-utm-blue">{tur.perioada}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-2">Afișarea rezultatelor</p>
              <p className="text-2xl font-black font-display text-slate-800">{tur.afisare}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-0.5">Document oficial</p>
                <h2 className="font-bold text-slate-800 text-base">{tur.pdfTitlu}</h2>
              </div>
              <a
              href={tur.pdfUrl}
              download
              className="flex items-center gap-2 bg-utm-blue text-white font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-utm-blue-dark transition-colors flex-shrink-0"
              >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Descarcă PDF
            </a>
          </div>
          <div style={{ height: '75vh', minHeight: '500px' }}>
            <iframe
                src={`${tur.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                title={tur.pdfTitlu}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
              onClick={onBack}
              className="flex-1 bg-utm-blue text-white rounded-2xl p-5 flex items-center justify-center gap-2 font-bold hover:bg-utm-blue-dark transition-colors"
          >
            Înapoi la pagina de admitere
          </button>
          <button
              onClick={() => {}}
              className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-utm-blue/40 hover:shadow-md transition-all group"
          >
            <div className="text-left">
              <p className="text-xs text-slate-400 font-semibold">Celălalt tur</p>
              <p className="font-bold text-slate-800 group-hover:text-utm-blue transition-colors">
                Turul {altNr} de admitere
              </p>
            </div>
            <svg className="w-5 h-5 text-slate-400 group-hover:text-utm-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
</div>
)
}

function AdmitereMain({ onTur }) {
  const anAcademic = getAnulAcademic()

  return (
      <div className="min-h-screen bg-slate-50">

        {/* HERO */}
        <div className="bg-gradient-to-r from-utm-blue-dark to-utm-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Admitere {anAcademic}
          </span>
            <h1 className="text-4xl md:text-5xl font-black font-display mb-4">
              Începe-ți cariera la Colegiul UTM
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Procesul de admitere este simplu și transparent. Îți explicăm pas cu pas tot ce ai nevoie.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">

          {/* Rând 1: Acte necesare + Card tururi combinate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Acte necesare */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-4 h-full">
              <h2 className="text-xl font-black font-display text-slate-800">📋 Acte necesare</h2>
              <ul className="space-y-2.5 flex-1">
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
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-xs font-medium">
                  ⚠️ Dosarul complet se depune personal la secretariat sau prin e-mail.
                </p>
              </div>
            </div>

            {/* Card combinat tururi */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-5 h-full">
              <h2 className="text-xl font-black font-display text-slate-800">🗓️ Tururi de admitere</h2>
              <div className="flex flex-col gap-4 flex-1">
                {[1, 2].map((nr) => {
                  const tur = tururi[nr]
                  return (
                      <button
                          key={nr}
                          onClick={() => window.open(tur.pdfUrl, '_blank')}
                          className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-5 flex flex-col gap-3 hover:border-utm-blue/50 hover:shadow-sm transition-all group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-utm-blue text-white font-black text-base rounded-full flex items-center justify-center font-display flex-shrink-0">
                            {nr}
                          </div>
                          <h3 className="font-bold text-slate-800 font-display text-base group-hover:text-utm-blue transition-colors">
                            {tur.titlu}
                          </h3>
                        </div>
                        <div className="space-y-1.5 pl-12">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide w-20 flex-shrink-0">Depunere:</span>
                            <span className="text-utm-blue font-bold text-sm">{tur.perioada}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide w-20 flex-shrink-0">Afișare:</span>
                            <span className="text-slate-700 text-sm">{tur.afisare}</span>
                          </div>
                        </div>
                        <div className="pl-12 flex items-center gap-2 text-utm-blue text-xs font-semibold group-hover:gap-3 transition-all">
                          <span>Vezi detalii și documente</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact + Hartă */}
          <div>
            <h2 className="section-title mb-6">📞 Contact și program</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Stânga */}
                <div className="p-8 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-slate-200">
                  <div>
                    <p className="text-slate-500 text-sm font-semibold mb-2">Telefoane de contact ale Comisiei de Admitere:</p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <a href="tel:078898503" className="text-utm-blue font-black text-2xl font-display underline hover:text-utm-blue-dark transition-colors">
                        078898503
                      </a>
                      <span className="text-slate-400 font-bold">și</span>
                      <a href="tel:078898504" className="text-utm-blue font-black text-2xl font-display underline hover:text-utm-blue-dark transition-colors">
                        078898504
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-800 font-bold text-base">
                      Taxa pentru depunerea actelor = <span className="text-utm-blue">100 lei</span>
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 text-sm">
                      <span className="font-semibold">Program de lucru:</span>{' '}
                      Luni–Vineri, de la ora <span className="font-bold text-slate-800">08:00</span> până la <span className="font-bold text-slate-800">17:00</span>
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <div>
                      <p className="text-utm-blue font-black text-sm">
                        TURUL 1: <span className="text-slate-800 font-bold">21.07.2025 – 08.08.2025</span>
                      </p>
                      <p className="text-slate-500 text-sm mt-0.5">Afișarea rezultatelor pentru turul 1: 11 – 12.08.2025</p>
                    </div>
                    <div>
                      <p className="text-utm-blue font-black text-sm">
                        TURUL 2: <span className="text-slate-800 font-bold">14 – 22.08.2025</span>
                      </p>
                      <p className="text-slate-500 text-sm mt-0.5">Afișarea rezultatelor pentru turul 2: 25 – 26.08.2025</p>
                    </div>
                  </div>
                </div>

                {/* Dreapta: hartă */}
                <div className="flex flex-col">
                  <div className="flex-1" style={{ minHeight: '300px' }}>
                    <iframe
                        title="Adresa Comisia de Admitere"
                        src="https://www.google.com/maps?q=Blocul%205%20Strada%20Studentilor%209/9%20Chisinau&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        loading="lazy"
                    />
                  </div>

                  <a
                      href="https://maps.app.goo.gl/Bs8fc6gn9Y9FHAe2A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 px-4 bg-slate-50 border-t border-slate-200 text-utm-blue font-bold text-sm hover:bg-blue-50 transition-colors"
                  >
                    📍 Deschide în Google Maps →
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <CalculatorAdmitere />

        {/* Documente */}
        <div>
          <h2 className="section-title mb-6">📁 Documente și regulamente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documente.map((doc, i) => (
             <a
                key={i}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-4 hover:border-utm-blue/40 hover:shadow-md transition-all group"
              >
              <div className="text-3xl flex-shrink-0">{doc.icon}</div>
              <div className="flex-1 min-w-0">
              <p className="text-slate-800 text-sm font-semibold leading-snug group-hover:text-utm-blue transition-colors">
            {doc.titlu}
          </p>
          <span className="inline-flex items-center gap-1 mt-2 text-utm-blue text-xs font-bold">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    Descarcă PDF
                  </span>
        </div>
      </a>
))}
</div>
</div>

  {/* FAQ */}
  <div>
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
      <a href="tel:078898503" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
        Sună acum
      </a>
    </div>
  </div>

</div>
</div>
)
}

export default function AdmiterePage() {
  const [turActiv, setTurActiv] = useState(null)

  if (turActiv) {
    return (
        <TurView
            nr={turActiv}
            onBack={() => setTurActiv(null)}
        />
    )
  }

  return <AdmitereMain onTur={(nr) => setTurActiv(nr)} />
}