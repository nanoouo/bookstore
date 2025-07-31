import './globals.css'
import BookCarousel from './components/BookCarousel'
import Footer from './components/Footer'
import NavBar from './components/NavBar'




export const metadata = {
  title: 'BOOKSTORE - Votre bibliothèque en ligne',
  description: 'Découvrez, commandez et explorez des milliers de livres dans tous les genres.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* NavBar */}
        <NavBar />

        {/* BookCarousel */}
        <BookCarousel />

        {/* Contenu principal (pages) */}
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
