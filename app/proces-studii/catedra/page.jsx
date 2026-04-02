import Link from "next/link"

export default function Page() {
    return (
        <div className="min-h-screen">

            {/* Header */}
            <div className="bg-utm-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-blue-200 text-sm mb-2">
                        <Link href="/">Acasă</Link> /{" "}
                        <Link href="/proces-studii">Proces de Studii</Link> / Catedre
                    </p>
                    <h1 className="text-4xl font-black text-center">Catedre</h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* STÂNGA */}
                    <div className="relative">
                        <img
                            src="/images/catedra poza 1.png"
                            className="w-full opacity-30"
                        />
                        <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-utm-blue text-center px-10">
                            Catedra <br /> Discipline de cultură generală
                        </h2>
                    </div>

                    {/* DREAPTA */}
                    <div className="text-center">
                        <img
                            src="/images/catedra 1.png"
                            className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
                        />
                        <h3 className="mt-6 text-xl font-bold text-utm-blue">
                            Rodica Bîlici
                        </h3>
                        <p className="text-slate-600">
                            șefa catedrei discipline de cultură generală
                        </p>
                        <p className="text-utm-blue font-semibold">
                            rodica.bilici@colegiu.utm.md
                        </p>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* STÂNGA */}
                    <div className="relative">
                        <img
                            src="/images/catedra poza 2.png"
                            className="w-full opacity-30"
                        />
                        <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-utm-blue text-center px-10">
                            Catedra <br /> Discipline tehnice
                        </h2>
                    </div>

                    {/* DREAPTA */}
                    <div className="text-center">
                        <img
                            src="/images/catedra 2.png"
                            className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
                        />
                        <h3 className="mt-6 text-xl font-bold text-utm-blue">
                            Nicolae Trifan
                        </h3>
                        <p className="text-slate-600">
                            șeful catedrei discipline tehnice
                        </p>
                        <p className="text-utm-blue font-semibold">
                            nicolae.trifan@bpm.utm.md
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="text-center pb-10">
                <Link href="/" className="text-utm-blue font-semibold hover:underline">
                    ← Înapoi acasă
                </Link>
            </div>
        </div>
    )
}