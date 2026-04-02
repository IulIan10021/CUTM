import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PreventZoom from '@/components/PreventZoom'

export const metadata = {
    title: 'UTM - Devino specialist IT',
    description: 'Universitatea Tehnică a Moldovei - Studii moderne + practică reală',
}

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
        <body className="flex flex-col min-h-screen">

        <PreventZoom />
        <Navbar />

        <main className="flex-1">
            {children}
        </main>

        <Footer />

        </body>
        </html>
    )
}