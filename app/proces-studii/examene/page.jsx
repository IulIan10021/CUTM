import Link from 'next/link'

const examene = [
    { nr: 1, titlu: 'Examene anul I', descriere: 'Informații despre examenele pentru anul I', pdf: '/oral/oral-anul-1 .pdf' },
    { nr: 2, titlu: 'Examene anul II', descriere: 'Informații despre examenele pentru anul II', pdf: '/pdf/anul2.pdf' },
    { nr: 3, titlu: 'Examene anul III', descriere: 'Informații despre examenele pentru anul III', pdf: '/pdf/anul3.pdf' },
    { nr: 4, titlu: 'Examene anul IV', descriere: 'Informații despre examenele pentru anul IV', pdf: '/pdf/anul4.pdf' },
]

export default function Page() {
    return (
        <div className="min-h-screen">

            {/* HEADER */}
            <div className="bg-utm-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-blue-200 text-sm mb-2">
                        <Link href="/" className="hover:text-white">Acasă</Link> /{' '}
                        <Link href="/proces-studii" className="hover:text-white">Proces de Studii</Link> / Examene
                    </p>
                    <h1 className="text-4xl font-black font-display">Examene</h1>
                </div>
            </div>

            {/* CARDURI */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* 1-4 */}
                    {examene.map((e) => (
                        <a
                            key={e.nr}
                            href={e.pdf}   // 🔥 aici se folosește linkul
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-utm-blue/40 transition-all block"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-utm-blue text-white rounded-full flex items-center justify-center font-bold">
                                    {e.nr}
                                </div>
                                <h3 className="font-bold text-slate-800">{e.titlu}</h3>
                            </div>

                            <p className="text-slate-500 text-sm mb-4">
                                {e.descriere}
                            </p>

                            <span className="text-utm-blue text-sm font-semibold">
      Deschide PDF →
    </span>
                        </a>
                    ))}

                    {/* CARD SPECIAL PDF */}
                    <a
                        href="/pdf/examene-toti-anii.pdf" // aici pui linkul tău real
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-utm-blue text-white rounded-2xl p-6 flex flex-col justify-between hover:bg-utm-blue-dark transition-colors"
                    >
                        <div>
                            <h3 className="font-bold text-lg mb-2">
                                📄 Examene toți anii
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Vezi toate examenele într-un singur document
                            </p>
                        </div>

                        <span className="mt-6 font-semibold text-sm">
              Deschide PDF →
            </span>
                    </a>

                </div>

                <div className="text-center mt-10">
                    <Link href="/" className="text-utm-blue font-semibold hover:underline">
                        ← Înapoi acasă
                    </Link>
                </div>

            </div>
        </div>
    )
}