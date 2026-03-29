import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Despre - UTM' }

export default function DesprePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="section-title mb-6">Bine ați venit la Colegiul UTM</h1>
            <p className="text-slate-600 leading-relaxed mb-4">
              Suntem o instituție de învățământ superior cu tradiție în formarea specialiștilor IT.
              Oferim programe de studiu moderne, adaptate cerințelor pieței muncii din Moldova și
              internaționale.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Colaborăm cu companii de top ca Pentalog și Endava pentru a asigura practică reală
              studenților noștri, facilitând inserția rapidă pe piața muncii.
            </p>
          </div>

          {/* Campus Image */}
          <div className="relative h-72 rounded-2xl overflow-hidden">
            {/*
              ╔══════════════════════════════════════════════════╗
              ║  POZA CAMPUS / CLĂDIRE                           ║
              ║  Fișier: /public/images/campus/campus-main.jpg   ║
              ║  Dimensiune recomandată: 700x500px               ║
              ╚══════════════════════════════════════════════════╝
            */}
            <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400">
                <p className="text-3xl mb-1">🏢</p>
                <p className="text-sm">/public/images/campus/campus-main.jpg</p>
              </div>
            </div>
            {/* UNCOMMENT:
            <Image src="/images/campus/campus-main.jpg" alt="Colegiul UTM" fill className="object-cover" />
            */}
          </div>
        </div>

        {/* Despre Noi Section */}
        <div className="mb-16">
          <h2 className="section-title mb-8">Despre Noi</h2>
          <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
            {/*
              ╔════════════════════════════════════════════════╗
              ║  POZA INTERIOR / ECHIPĂ / LABORATOR            ║
              ║  Fișier: /public/images/despre/interior.jpg    ║
              ║  Dimensiune recomandată: 1200x500px            ║
              ╚════════════════════════════════════════════════╝
            */}
            <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">
              <div className="text-center text-slate-400">
                <p className="text-3xl mb-1">📸</p>
                <p className="text-sm">/public/images/despre/interior.jpg</p>
              </div>
            </div>
            {/* UNCOMMENT:
            <Image src="/images/despre/interior.jpg" alt="Interior UTM" fill className="object-cover" />
            */}
          </div>
        </div>

        {/* Parteneri */}
        <div>
          <h2 className="section-title mb-8">Cine ne susține?</h2>
          <div className="flex flex-wrap gap-6">
            {['pentalog', 'endava'].map((partner) => (
              <div key={partner} className="card p-6 flex items-center gap-4 min-w-48">
                {/*
                  ╔═══════════════════════════════════════════════════════════╗
                  ║  LOGO PARTENERI                                           ║
                  ║  Fișiere:                                                 ║
                  ║    /public/images/parteneri/pentalog.png (180x60px)       ║
                  ║    /public/images/parteneri/endava.png   (180x60px)       ║
                  ╚═══════════════════════════════════════════════════════════╝
                */}
                <div className="w-28 h-10 bg-slate-100 rounded flex items-center justify-center border border-dashed border-slate-300">
                  <span className="text-slate-400 text-xs capitalize">{partner}</span>
                </div>
                {/* UNCOMMENT:
                <Image src={`/images/parteneri/${partner}.png`} alt={partner} width={120} height={40} className="object-contain" />
                */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
