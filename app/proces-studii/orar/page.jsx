'use client'

export default function Page() {

    const ani = [
        { id: 'anul-1', titlu: 'Anul 1', file: '/oral/oral-anul-1 .pdf' },
        { id: 'anul-2', titlu: 'Anul 2', file: '/oral/oral-anul-1 .pdf' },
        { id: 'anul-3', titlu: 'Anul 3', file: '/oral/oral-anul-1 .pdf' },
        { id: 'anul-4', titlu: 'Anul 4', file: '/oral/oral-anul-1 .pdf' },
        { id: 'dual', titlu: 'Dual', file: '/oral/oral-dual.pdf' },
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            {/* HEADER */}
            <div className="bg-utm-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl font-black">Orar</h1>
                </div>
            </div>

            {/* CARDURI */}
            <div className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {ani.map((item) => (
                        <a
                            key={item.id}
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-bold mb-2">{item.titlu}</h2>
                            <p className="text-slate-500">Deschide orarul</p>
                        </a>
                    ))}

                </div>
            </div>

        </div>
    )
}