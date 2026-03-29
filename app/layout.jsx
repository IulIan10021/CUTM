import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'UTM - Devino specialist IT',
  description: 'Universitatea Tehnică a Moldovei - Studii moderne + practică reală',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
