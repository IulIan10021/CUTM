import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="bg-utm-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 text-sm mb-2">
            <Link href="/" className="hover:text-white">Acasă</Link> / <Link href="/proces-studii" className="hover:text-white">Proces de Studii</Link> / Departamente
          </p>
          <h1 className="text-4xl font-black font-display">Departamente</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center text-slate-500">
        <p className="text-lg">Conținut în curs de actualizare. Reveniți curând.</p>
        <Link href="/" className="mt-6 inline-block text-utm-blue font-semibold hover:underline">← Înapoi acasă</Link>
      </div>
    </div>
  )
}
