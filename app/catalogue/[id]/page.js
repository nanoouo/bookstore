import BookDetailsCard from '@/app/components/BookDetailsCard'
import { books } from '@/data/books'
import Link from 'next/link'

export default async function BookDetailsPage({ params }) {
  const { id } = params

  const book = books.find(b => b.id === Number(id))

  if (!book) {
    return <p className="text-center p-6 text-red-600">Livre non trouvé</p>
  }

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <Link
        href="/catalogue"
        className="mb-4 inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Retour au catalogue
      </Link>

      <BookDetailsCard book={book} />
    </main>
  )
}
