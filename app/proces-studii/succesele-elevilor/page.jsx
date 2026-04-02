'use client'
import Link from 'next/link'

const succese = [
  {
    nume: 'Ion Popescu',
    loc: 'Locul I',
    concurs: 'Olimpiada Tehnică Republicană',
    specialitate: 'Calculatoare',
    an: '2024',
    poza: '/elevi/ion.jpg',
  },
  {
    nume: 'Maria Ionescu',
    loc: 'Premiul II',
    concurs: 'Concursul Național Web',
    specialitate: 'Administrarea Aplicațiilor Web',
    an: '2024',
    poza: '/elevi/maria.jpg',
  },
  {
    nume: 'Andrei Rusu',
    loc: 'Locul III',
    concurs: 'Hackathon Moldova',
    specialitate: 'Programare și Analiză Software',
    an: '2023',
    poza: '/elevi/andrei.jpg',
  },
  {
    nume: 'Daniela Cojocaru',
    loc: 'Mențiune',
    concurs: 'Olimpiada Republicană Informatică',
    specialitate: 'Calculatoare',
    an: '2023',
    poza: '/elevi/daniela.jpg',
  },
]

export default function SucceseleElevilor() {
  return (
      <div className="min-h-screen bg-slate-50">

        {/* HEADER */}
        <div className="bg-utm-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 text-sm mb-2">
              <Link href="/" className="hover:text-white">Acasă</Link> /{' '}
              <Link href="/proces-studii" className="hover:text-white">Proces de Studii</Link> / Succesele Elevilor
            </p>
            <h1 className="text-4xl font-black font-display">🏆 Succesele Elevilor</h1>
            <p className="text-blue-200 mt-2">
              Performanțele și realizările studenților noștri
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {succese.map((s, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-4 items-center hover:shadow-md transition"
                >

                  {/* POZA */}
                  <img
                      src={s.poza}
                      alt={s.nume}
                      className="w-20 h-20 object-cover rounded-xl border"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg">
                      {s.nume}
                    </h3>

                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded mt-1">
                  {s.loc}
                </span>

                    <p className="text-slate-600 text-sm mt-2">
                      {s.concurs}
                    </p>

                    <p className="text-slate-400 text-xs mt-1">
                      {s.specialitate} · {s.an}
                    </p>
                  </div>

                </div>
            ))}

          </div>

          <p className="text-center text-slate-400 text-sm mt-10">
            Această pagină se actualizează anual.
          </p>

        </div>
      </div>
  )
}