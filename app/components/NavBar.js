import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📚</span>
        <h1 className="text-2xl font-title text-primaire">AmenAllah-BOOKSTORE</h1>
      </div>

      <nav className="font-menu space-x-4">
        <Link
          href="/"
          className="px-3 py-1 rounded hover:bg-primaire hover:text-white transition-colors"
        >
          Accueil
        </Link>
        <Link
          href="/catalogue"
          className="px-3 py-1 rounded hover:bg-primaire hover:text-white transition-colors"
        >
          Catalogue
        </Link>
        <Link
          href="/abonnement"  
          className="px-3 py-1 rounded hover:bg-primaire hover:text-white transition-colors"
        >
          Abonnement
        </Link>
      </nav>
    </header>
  )
}
