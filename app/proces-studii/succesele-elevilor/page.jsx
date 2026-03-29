import Link from 'next/link'

const succese = [
  { titlu: 'Locul I – Olimpiada Tehnică Republicană', elev: 'Ion Popescu', specialitate: 'Calculatoare', an: '2024' },
  { titlu: 'Premiul II – Concursul Național Web', elev: 'Maria Ionescu', specialitate: 'Administrarea Aplicațiilor Web', an: '2024' },
  { titlu: 'Locul III – Hackathon Moldova', elev: 'Andrei Rusu', specialitate: 'Programare și Analiză Software', an: '2023' },
  { titlu: 'Mențiune – Olimpiada Republicană Informatică', elev: 'Daniela Cojocaru', specialitate: 'Calculatoare', an: '2023' },
]

export default function SucceseleElevilor() {
  return (
    <div className="min-h-screen">
      <div className="bg-utm-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Acasă</Link> / <Link href="/proces-studii" className="hover:text-white">Proces de Studii</Link> / Succesele Elevilor
          </p>
          <h1 className="text-4xl font-black font-display">🏆 Succesele Elevilor</h1>
          <p className="text-blue-200 mt-2">Performanțele și realizările studenților noștri</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {succese.map((s, i) => (
            <div key={i} className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🥇</div>
              <div>
                <h3 className="font-bold text-slate-800 font-display">{s.titlu}</h3>
                <p className="text-utm-blue font-medium text-sm mt-1">{s.elev}</p>
                <p className="text-slate-500 text-xs mt-0.5">{s.specialitate} · {s.an}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-10">
          Această pagină se actualizează cu fiecare an academic. Contactați secretariatul pentru mai multe informații.
        </p>
      </div>
    </div>
  )
}
