'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const specialitati = [
  {
    image: '/images/PAPP.png',
    title: 'Programare și testarea\nproduselor de program',
    desc: 'Dezvoltare software',
    href: '/specialitati/papp'
  },
  {
    image: '/images/AAW.png',
    title: 'Dezvoltarea aplicațiilor web',
    desc: 'Aplicații web',
    href: '/specialitati/aaw'
  },
  {
    image: '/images/RC.png',
    title: 'Rețele de calculatoare',
    desc: 'Administrare rețele',
    href: '/specialitati/RC'
  },
  {
    image: '/images/C.png',
    title: 'Calculatoare',
    desc: 'Sisteme hardware',
    href: '/specialitati/c'
  },
  {
    image: '/images/TRT.png',
    title: 'Tehnologii și rețele de telecomunicații',
    desc: 'Comunicații date',
    href: '/specialitati/trt'
  },
  {
    image: '/images/DTTA.png',
    title: 'Diagnosticarea tehnică a transportului auto',
    desc: 'Diagnoză auto',
    href: '/specialitati/DTTA'
  },
  {
    image: '/images/TA.png',
    title: 'Trafic auto',
    desc: 'Gestionare trafic',
    href: '/specialitati/TA'
  },
  {
    image: '/images/TAP.png',
    title: 'Tehnologia alimentației publice',
    desc: 'Gastronomie',
    href: '/specialitati/TAP'
  },
  {
    image: '/images/MASP.png',
    title: 'Mașini și sisteme de producere',
    desc: 'Sisteme industriale',
    href: '/specialitati/MASP',
  },
  {
    image: '/images/UTIA.png',
    title: 'Utilaj tehnologic industrial și accesorii',
    desc: 'Utilaj industrial',
    href: '/specialitati/UTIA'
  },
  {
    image: '/images/TPM.png',
    title: 'Tehnologia prelucrării materialelor',
    desc: 'Prelucrare materiale',
    href: '/specialitati/TPM'
  },
  {
    image: '/images/TPM.png',
    title: 'Tehnologia Prelucrarii Materialelor - DUAL',
    desc: 'Practică în industrie',
    href: '/specialitati/tpmdual',
  },
  {
    image: '/images/DTTA.png',
    title: 'Diagnosticarea tehnică a transportului auto - DUAL',
    desc: 'Diagnostica auto',
    href: '/specialitati/dta-dual'
  },
  {
    image: '/images/TAP.png',
    title: 'Tehnologia alimentației publice-DUAL',
    desc: 'Bucătărie profesională',
    href: '/specialitati/TAPDUAL'
  }
]

const sponsori = [
  { name: 'StarNet ', logo: '/images/starnet .png' },
  { name: 'Endava', logo: '/images/Endava.png' },
  { name: 'Orange Moldova', logo: '/images/orange.png' },
  { name: 'Moldcell', logo: '/images/molcell.png' },
  { name: 'USAID', logo: '/images/usaid.png' },
]

// SPONSORI
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
    sponsori[current % total],
    sponsori[(current + 1) % total],
    sponsori[(current + 2) % total],
  ]

  return (
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-6">Partenerii Noștri</h2>

          <div className="flex justify-center gap-6">
            {visible.map((s, i) => (
                <div key={i} className={i === 1 ? 'scale-110' : 'opacity-60'}>

                  <div className="w-36 h-20 bg-white flex items-center justify-center rounded-xl p-3 shadow">

                    <Image
                        src={s.logo}
                        alt={s.name}
                        width={120}
                        height={50}
                        className="object-contain"
                    />

                  </div>

                </div>
            ))}
          </div>
        </div>
      </section>
  )}

// 🔹 HOMEPAGE
export default function HomePage() {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return

    const children = container.children
    if (!children.length) return

    let newIndex = currentIndex + (dir === 'right' ? 1 : -1)

    if (newIndex < 0) newIndex = 0
    if (newIndex >= children.length) newIndex = children.length - 1

    setCurrentIndex(newIndex)

    const target = children[newIndex]
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }



  return (
      <div className="overflow-x-hidden">

        {/* HERO */}
        <section className="text-white py-20 bg-blue-700">
          <div className="grid md:grid-cols-2 gap-10 max-w-[1400px] mx-auto px-4">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Bun venit la Colegiul UTM
              </h1>

              <p className="text-lg mb-4 text-blue-100">
                Devino specialist IT într-un mediu modern, orientat pe practică și cerințele reale ale industriei.
              </p>

              <p className="text-sm text-blue-200">
                Îți oferim competențe reale, proiecte practice și acces la oportunități în companii IT.
              </p>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                  src="/images/Acasa.F.jpg"
                  alt="Hero"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* DE CE SĂ ALEGI */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 text-center">

            <h2 className="text-3xl font-bold mb-4">
              De ce să alegi Colegiul UTM?
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mb-12">
              Formăm specialiști IT prin educație practică, profesori cu experiență și colaborări directe cu companii din industrie.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="p-6 bg-white rounded-2xl shadow-md border">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold mb-2">Practică reală</h3>
                <p className="text-sm text-gray-500">
                  Ai oportunitatea de a lucra la proiecte practice în timpul studiilor.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md border">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-bold mb-2">Parteneriate IT</h3>
                <p className="text-sm text-gray-500">
                  Parteneriate cu companii de top din IT pentru practică și angajare.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold mb-2">Diplomă recunoscută</h3>
                <p className="text-sm text-gray-500">
                  Diploma de colegiu îți oferă acces la continuarea studiilor la Universitatea Tehnică a Moldovei, cu condiții avantajoase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALITĂȚI */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-4">

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-0"
            >
              {specialitati.map((s, i) => (
                  <div
                      key={i}
                      className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all flex-shrink-0 overflow-hidden"
                  >

                    {/* IMAGINE */}
                      <div className="relative h-40 w-full">
                        <Image
                            src={s.image || '/images/default.jpg'}
                            alt={s.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="font-bold mb-2 leading-tight whitespace-pre-line">
                        {s.title}
                      </h3>

                      <p className="text-sm mb-3 text-gray-500">
                        {s.desc}
                      </p>

                      <Link href={s.href} className="text-blue-600 text-sm font-semibold">
                        Vezi detalii →
                      </Link>
                    </div>

                  </div>
              ))}
            </div>


            {/* SĂGEȚI */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                  onClick={() => scroll('left')}
                  className="border border-gray-300 text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
              >
                ‹
              </button>

              <button
                  onClick={() => scroll('right')}
                  className="border border-gray-300 text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
              >
                ›
              </button>
            </div>

          </div>
        </section>

        {/* SPONSORI */}
        <SponsorCarousel />

      </div>
  )
}