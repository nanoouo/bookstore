import Link from 'next/link'

export default function BoutonNewsletter() {
  return (
    <Link
      href="/abonnement"
      className="inline-block px-4 py-2 bg-primaire text-white rounded hover:bg-secondaire transition-colors font-menu"
    >
      S'abonner à la newsletter
    </Link>
  )
}
