import Link from 'next/link'
import BoutonNewsletter from './BoutonNewsletter'



export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-12 p-6 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Texte copyright */}
        <p className="font-body text-center md:text-left">
          MEZLINI-AMEN-ALLAH-BOOKSTORE © 2025
        </p>

        {/* Liens */}
        <nav className="flex gap-4 font-menu text-sm">
          <Link href="/" className="hover:text-primaire transition-colors">Accueil</Link>
          <Link href="/catalogue" className="hover:text-primaire transition-colors">Catalogue</Link>
          <Link href="/ajouter" className="hover:text-primaire transition-colors">Ajouter</Link>
          <Link href="/abonnement" className="hover:text-primaire transition-colors">Abonnement</Link>
        </nav>

        {/* Bouton d’abonnement */}
        <BoutonNewsletter />
      </div>
    </footer>
  )
}
