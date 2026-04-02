'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Image from "next/image"
const menuItems = [
  { label: 'Acasă', href: '/' },

  {
    label: 'Proces de Studii',
    href: '/proces-studii',
    submenu: [
      { label: 'Succesele Elevilor', href: '/proces-studii/succesele-elevilor' },
      { label: 'Departamente', href: '/proces-studii/departamente' },
      { label: 'Orar', href: '/proces-studii/orar' },
      { label: 'Examene', href: '/proces-studii/examene' },
      { label: 'Catedre', href: '/proces-studii/catedra' },
    ],
  },
  { label: 'Admitere', href: '/admitere' },
  { label: 'Despre', href: '/despre' },
  { label: 'Contact', href: '/contact' },
]

function DropdownItem({ item, mobile, closeMenu }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!item.submenu) {
    return (
      <Link
        href={item.href}
        className={mobile ? 'block px-2 py-2 text-white hover:text-blue-200 font-medium transition-colors text-sm' : 'px-3 py-2 text-white hover:text-blue-200 font-medium transition-colors text-sm rounded-lg hover:bg-white/10'}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    )
  }

  if (mobile) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="block w-full text-left px-2 py-2 text-white hover:text-blue-200 font-medium transition-colors text-sm flex items-center justify-between"
        >
          {item.label}
          <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-blue-300 pl-3">
            {item.submenu.map((sub) => (
              <Link key={sub.href} href={sub.href} className="text-blue-200 hover:text-white text-sm py-1.5 transition-colors" onClick={closeMenu}>
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="px-3 py-2 text-white hover:text-blue-200 font-medium transition-colors text-sm rounded-lg hover:bg-white/10 flex items-center gap-1"
      >
        {item.label}
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div onMouseLeave={() => setOpen(false)} className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50">
          {item.submenu.map((sub) => (
            <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-utm-blue font-medium transition-colors">
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-utm-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                  src="/images/Logo-Colegiu.png"
                  alt="Logo UTM"
                  width={90}
                  height={30}
                  className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <DropdownItem key={item.href} item={item} closeMenu={() => {}} />
            ))}
            <Link href="/admitere" className="ml-3 bg-white text-utm-blue font-bold px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm shadow">
              Aplică Acum
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-white/10 flex flex-col gap-0.5">
            {menuItems.map((item) => (
              <DropdownItem key={item.href} item={item} mobile closeMenu={() => setMenuOpen(false)} />
            ))}
            <Link href="/admitere" className="mt-2 bg-white text-utm-blue font-bold px-5 py-2.5 rounded-lg text-sm text-center" onClick={() => setMenuOpen(false)}>
              Aplică Acum
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
