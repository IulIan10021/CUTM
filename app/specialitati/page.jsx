import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Specialități IT - UTM' }

const specialitati = [
  {
    slug: 'programare',
    title: 'Programare și Analiză Software',
    semestre: 7,
    locuri: 60,
    taxa: '1250 lei/an',
    desc: 'Formarea specialiștilor în domeniul creării și analizei sistemelor software.',
    imagine: 'programare', // /public/images/specialitati/programare.jpg
    tehnologii: ['Java', 'Python', 'React', 'Spring Boot', 'SQL'],
    cariere: [
      { titlu: 'Software Developer', salariu: '800 - 1300 USD' },
      { titlu: 'Business Analyst', salariu: '600 - 1000 USD' },
      { titlu: 'QA Engineer', salariu: '500 - 900 USD' },
    ],
  },
  {
    slug: 'retele',
    title: 'Administrare Rețele și Securitate',
    semestre: 7,
    locuri: 40,
    taxa: '1250 lei/an',
    desc: 'Formarea specialiștilor în administrarea rețelelor și protecția informației.',
    imagine: 'retele',
    tehnologii: ['Cisco', 'Linux', 'Cybersecurity', 'Cloud', 'Networking'],
    cariere: [
      { titlu: 'Network Admin', salariu: '700 - 1200 USD' },
      { titlu: 'Security Analyst', salariu: '800 - 1400 USD' },
    ],
  },
  {
    slug: 'design',
    title: 'Design și Multimedia',
    semestre: 7,
    locuri: 30,
    taxa: '1250 lei/an',
    desc: 'Formarea specialiștilor în design grafic, web și producție multimedia.',
    imagine: 'design',
    tehnologii: ['Figma', 'Adobe XD', 'Photoshop', 'After Effects'],
    cariere: [
      { titlu: 'UI/UX Designer', salariu: '600 - 1100 USD' },
      { titlu: 'Graphic Designer', salariu: '500 - 900 USD' },
    ],
  },
]

export default function SpecialitatiPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-slate-500">
          <Link href="/" className="hover:text-utm-blue">Acasă</Link>
          <span className="mx-2">/</span>
          <span className="text-utm-blue font-medium">Specialități</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="section-title mb-4">Specialitățile noastre IT</h1>
        <p className="text-slate-500 mb-12 max-w-2xl">
          Alege specialitatea potrivită și începe drumul tău spre o carieră de succes în IT.
        </p>

        <div className="space-y-16">
          {specialitati.map((sp) => (
            <div key={sp.slug} className="card overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto bg-slate-100 min-h-52">
                  {/*
                    ╔════════════════════════════════════════════════════╗
                    ║  PUNE POZA SPECIALITATE AICI                       ║
                    ║  Fișier: /public/images/specialitati/{slug}.jpg    ║
                    ║  Ex: /public/images/specialitati/programare.jpg    ║
                    ║  Dimensiune recomandată: 600x400px                 ║
                    ╚════════════════════════════════════════════════════╝
                  */}
                  <div className="w-full h-full flex items-center justify-center border-r border-slate-200">
                    <div className="text-center text-slate-400 p-4">
                      <p className="text-3xl mb-2">📸</p>
                      <p className="text-sm font-medium">{sp.title}</p>
                      <p className="text-xs mt-1">/public/images/specialitati/{sp.imagine}.jpg</p>
                    </div>
                  </div>
                  {/* UNCOMMENT după ce adaugi poza:
                  <Image
                    src={`/images/specialitati/${sp.imagine}.jpg`}
                    alt={sp.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold font-display text-utm-blue mb-3">{sp.title}</h2>
                  <p className="text-slate-500 mb-5">{sp.desc}</p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="text-2xl font-bold text-utm-blue-light font-display">{sp.semestre}</p>
                      <p className="text-xs text-slate-400">Semestre</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-utm-blue-light font-display">{sp.locuri}</p>
                      <p className="text-xs text-slate-400">Locuri buget</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-utm-blue-light font-display">1000+</p>
                      <p className="text-xs text-slate-400">Ore practică</p>
                    </div>
                  </div>

                  {/* Tehnologii */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sp.tehnologii.map((t) => (
                      <span key={t} className="bg-blue-50 text-utm-blue text-xs font-semibold px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Cariere */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm text-slate-700 mb-2">Perspective carieră</p>
                    {sp.cariere.map((c) => (
                      <div key={c.titlu} className="flex justify-between text-sm py-1">
                        <span className="text-slate-600">{c.titlu}</span>
                        <span className="text-utm-blue-light font-semibold">{c.salariu}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/admitere" className="btn-primary mt-6 text-sm !py-2.5">
                    Aplică la această specialitate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
