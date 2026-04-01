import Link from "next/link"

export default function Page() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-utm-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-blue-200 text-sm mb-2">
                        <Link href="/" className="hover:text-white">Acasă</Link> /{" "}
                        <Link href="/proces-studii" className="hover:text-white">Proces de Studii</Link> / Catedre
                    </p>
                    <h1 className="text-4xl font-black font-display">Catedre</h1>
                </div>
            </div>

            {/* Blocuri */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">

                {/* Bloc 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Titlu Bloc 1</h2>
                        <p className="text-slate-600">
                            Aici pui textul tău. Descriere despre practică, experiență, sau orice vrei.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img1.jpg"
                            alt="Imagine 1"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1">
                        <img
                            src="/img2.jpg"
                            alt="Imagine 2"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-bold mb-4">Titlu Bloc 2</h2>
                        <p className="text-slate-600">
                            Al doilea bloc cu alt text. Poți explica procesul sau exemple concrete.
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer mic */}
            <div className="text-center pb-10">
                <Link href="/" className="text-utm-blue font-semibold hover:underline">
                    ← Înapoi acasă
                </Link>
            </div>
        </div>
    )
}