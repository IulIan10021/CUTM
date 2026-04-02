'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function DesprePage() {

    const [openSection, setOpenSection] = useState(null)

    function Carousel3D({ items }) {
        const [index, setIndex] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % items.length)
            }, 2500)
            return () => clearInterval(interval)
        }, [items.length])

        return (
            <div className="w-full flex justify-center items-center py-16 perspective">
                <div className="relative w-[300px] h-[350px]">
                    {items.map((item, i) => {
                        const offset = (i - index + items.length) % items.length

                        let transform = ''
                        let zIndex = 0
                        let opacity = 0

                        if (offset === 0) {
                            transform = 'translateX(0) scale(1)'
                            zIndex = 30
                            opacity = 1
                        } else if (offset === 1) {
                            transform = 'translateX(200px) scale(0.8)'
                            zIndex = 20
                            opacity = 0.7
                        } else if (offset === items.length - 1) {
                            transform = 'translateX(-200px) scale(0.8)'
                            zIndex = 20
                            opacity = 0.7
                        } else {
                            transform = 'scale(0.6)'
                            opacity = 0
                        }

                        return (
                            <div
                                key={i}
                                className="absolute w-full h-full transition-all duration-700"
                                style={{ transform, zIndex, opacity }}
                            >
                                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src={item.image} alt="" fill className="object-cover" />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-600">{item.role}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const admin = [
        { name: 'Radu Melnic', role: 'Director', image: '/images/admin/radu.jpg' },
        { name: 'Adrian Grădinaru', role: 'Director adjunct', image: '/images/admin/adrian.jpg' },
        { name: 'Angela Ivanov', role: 'Metodistă', image: '/administratie/metodistă.png' },
        { name: 'Vadim Siminel', role: 'Șef secție', image: '/images/admin/vadim.jpg' },
    ]

    return (
        <div className="min-h-screen bg-gray-50 text-black pb-20 space-y-20">

            {/* HEADER */}
            <div className="text-center pt-16">
                <h1 className="text-4xl font-bold text-blue-600">DESPRE NOI</h1>
                <p className="text-gray-600 mt-2">Colegiul UTM</p>
            </div>

            {/* ISTORIC */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Scurt istoric</h2>
                    <div className="space-y-3 text-gray-700 text-sm">
                        <p><span className="font-semibold text-blue-600">1972</span> – S-a acordat teren pentru construcția Școlii Profesionale Tehnice №35 din Chișinău.</p>
                        <p><span className="font-semibold text-blue-600">1976</span> – Școala №35 și-a început activitatea cu 480 de elevi.</p>
                        <p><span className="font-semibold text-blue-600">1984</span> – Reorganizată în Școala Medie Profesională Tehnică №75.</p>
                        <p><span className="font-semibold text-blue-600">1990</span> – Transformată în Liceul Tehnic din Chișinău.</p>
                        <p><span className="font-semibold text-blue-600">1991</span> – Reorganizată în Colegiul Tehnic din Chișinău.</p>
                        <p><span className="font-semibold text-blue-600">2000</span> – A intrat în componența Universității Tehnice a Moldovei (UTM), primind numele Colegiul Tehnic al UTM.</p>
                        <p><span className="font-semibold text-blue-600">2022</span> – Redenumită în Colegiul Universității Tehnice a Moldovei (CUTM), director Radu Melnic. S-au introdus 8 programe noi de studii în domenii IT, telecomunicații, alimentație și trafic auto.</p>
                    </div>
                </div>
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/images/Fata colegiu.jpg" alt="" fill className="object-cover" />
                </div>
            </div>

            {/* MISIUNE */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Misiunea</h2>
                    <p className="text-gray-700">
                        Misiunea Colegiului Universității Tehnice a Moldovei este să cultive excelența, să valorifice tradiția și să promoveze inovația.
                        CUTM își propune să ofere un mediu educațional de înaltă performanță, adaptat cerințelor pieței muncii și nevoilor elevilor săi.
                        Printr-o abordare modernă și o orientare spre standarde naționale și europene, asigură o pregătire profesională solidă,
                        ce stimulează dezvoltarea personală și profesională a fiecărui elev. Viziunea instituției este să contribuie activ la formarea specialiștilor de mâine,
                        capabili să facă față provocărilor și
                        integrarea cu succes în diverse domenii tehnice și profesionale.
                    </p>
                </div>
            </div>

            {/* ADMIN */}
            <div className="text-center">
                <h2 className="text-xl font-semibold text-blue-600">Administrația</h2>
            </div>
            <Carousel3D items={admin} />

            {/* STATISTICI */}
            <div className="max-w-6xl mx-auto px-4 space-y-4">
                {/* CADRE */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <div onClick={() => setOpenSection(openSection === 1 ? null : 1)} className="flex justify-between cursor-pointer">
                        <p className="font-semibold text-blue-600">Cadre didactice</p>
                        <span>{openSection === 1 ? '−' : '+'}</span>
                    </div>
                    {openSection === 1 && (
                        <div className="mt-2 text-sm space-y-1 text-gray-700">
                            <p>Personal – 98</p>
                            <p>Doctoranzi – 24</p>
                            <p>Masteranzi – 36</p>
                            <p>Grad superior – 9</p>
                            <p>Grad I – 12</p>
                            <p>Grad II – 16</p>
                        </div>
                    )}
                </div>

                {/* SALI */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <div onClick={() => setOpenSection(openSection === 2 ? null : 2)} className="flex justify-between cursor-pointer">
                        <p className="font-semibold text-blue-600">Săli și laboratoare</p>
                        <span>{openSection === 2 ? '−' : '+'}</span>
                    </div>
                    {openSection === 2 && (
                        <div className="mt-2 text-sm space-y-1 text-gray-700">
                            <p>IT – 7</p>
                            <p>Inginerie – 14</p>
                            <p>Alimentație – 1</p>
                            <p>Ateliere – 3</p>
                            <p>Robotică – 1</p>
                            <p>Săli – 47</p>
                            <p>3D – 1</p>
                        </div>
                    )}
                </div>

                {/* DOTARI */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <div onClick={() => setOpenSection(openSection === 3 ? null : 3)} className="flex justify-between cursor-pointer">
                        <p className="font-semibold text-blue-600">Dotări</p>
                        <span>{openSection === 3 ? '−' : '+'}</span>
                    </div>
                    {openSection === 3 && (
                        <div className="mt-2 text-sm space-y-1 text-gray-700">
                            <p>Cămine – 2</p>
                            <p>Bibliotecă</p>
                            <p>Echipamente moderne</p>
                            <p>Proiectoare</p>
                            <p>Microsoft 365</p>
                            <p>Wi-Fi</p>
                            <p>Spații relaxare</p>
                            <p>Cantină</p>
                        </div>
                    )}
                </div>
            </div>

            {/* FACILITATI */}
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl text-blue-600 mb-6 text-center">Facilități</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl overflow-hidden shadow">
                        <div className="relative h-40">
                            <Image src="/images/laborator.jpg" alt="" fill className="object-cover" />
                        </div>
                        <div className="p-4">Laboratoare</div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow">
                        <div className="relative h-40">
                            <Image src="/images/camin.jpg" alt="" fill className="object-cover" />
                        </div>
                        <div className="p-4">Cămine</div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow">
                        <div className="relative h-40">
                            <Image src="/images/cantina.jpg" alt="" fill className="object-cover" />
                        </div>
                        <div className="p-4">Cantină</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective {
                    perspective: 1200px;
                }
            `}</style>
        </div>
    )
}