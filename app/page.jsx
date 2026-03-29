'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const specialitati = [
  {
    icon: '💻',
    title: 'Programare și Analiză Software',
    desc: '7 semestre de formare teoretică și practică completă în domeniul dezvoltării software.',
    href: '/specialitati/programare',
  },
  {
    icon: '🔐',
    title: 'Administrare Rețele și Securitate',
    desc: 'Formarea specialiștilor în administrarea rețelelor și securitatea informațională.',
    href: '/specialitati/retele',
  },
  {
    icon: '🎨',
    title: 'Design și Multimedia',
    desc: '7 semestre de formare practică în design grafic, web și producție multimedia.',
    href: '/specialitati/design',
  },
]

const sponsori = [
  { name: 'Pentalog', img: '/images/parteneri/pentalog.png' },
  { name: 'Endava', img: '/images/parteneri/endava.png' },
  { name: 'Orange Moldova', img: '/images/parteneri/orange.png' },
  { name: 'Moldcell', img: '/images/parteneri/moldcell.png' },
  { name: 'USAID', img: '/images/parteneri/usaid.png' },
]

function SponsorCarousel() {
  const [current, setCurrent] = useState(0)
  const total = sponsori.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 2500)
    return () => clearInterval(timer)
  }, [total])

  const visible = [
    sponsori[(current) % total],
    sponsori[(current + 1) % total],
    sponsori[(current + 2) % total],
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold font-display text-utm-blue mb-2">Partenerii Noștri</h2>
        <p className="text-center text-slate-400 text-sm mb-10">Companii care susțin educația noastră</p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-6 md:gap-10 transition-all duration-500">
            {visible.map((sponsor, i) => (
              <div
                key={`${sponsor.name}-${i}`}
                className={`flex flex-col items-center gap-3 transition-all duration-500 ${i === 1 ? 'scale-110 opacity-100' : 'scale-95 opacity-60'}`}
              >
                <div className="w-36 h-20 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm px-4">
                  {/* Replace div below with <Image> when logos are added */}
                  <span className="text-slate-500 font-bold text-sm text-center">{sponsor.name}</span>
                  {/*
                  <Image src={sponsor.img} alt={sponsor.name} width={120} height={60} className="object-contain" />
                  */}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {sponsori.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-utm-blue w-5' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-utm-blue-dark via-utm-blue to-utm-blue-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black font-display leading-tight mb-4">
                Devino specialist IT
              </h1>
              <p className="text-xl text-blue-100 mb-8 font-medium">
                Studii moderne + practică reală
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/specialitati" className="btn-outline">
                  Vezi specialitățile
                </Link>
                <Link href="/admitere" className="bg-white text-utm-blue font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Aplică acum
                </Link>
              </div>
              <div className="flex gap-8 mt-10">
                <div>
                  <p className="text-2xl font-bold font-display">6+</p>
                  <p className="text-blue-200 text-sm">Semestre cursuri</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">1000+</p>
                  <p className="text-blue-200 text-sm">Ore de practică</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">786+</p>
                  <p className="text-blue-200 text-sm">Studenți activi</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-white/10 flex items-center justify-center rounded-2xl border-2 border-dashed border-white/30">
                <div className="text-center text-white/60 p-4">
                  <p className="text-4xl mb-2">📸</p>
                  <p className="font-medium">Hero Image</p>
                  <p className="text-sm mt-1">Pune în: /public/images/hero/hero-main.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALITĂȚI */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Specialitățile noastre IT</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Cursuri complete de software, rețele și design grafic cu focus pe practică în industrie.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialitati.map((s) => (
              <div key={s.title} className="card p-6 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold font-display text-utm-blue mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link href={s.href} className="inline-flex items-center gap-1 text-utm-blue-light font-semibold text-sm hover:gap-2 transition-all">
                  Vezi detalii <span>›</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-utm-blue rounded-2xl p-8 text-center">
            <Link href="/admitere" className="text-white text-xl font-bold font-display hover:underline">
              Aplică acum și începe cariera în IT →
            </Link>
          </div>
        </div>
      </section>

      {/* SPONSOR CAROUSEL */}
      <SponsorCarousel />
    </>
  )
}
