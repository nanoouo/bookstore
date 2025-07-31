'use client'

import { useRouter } from 'next/navigation'

export default function BookList({ books }) {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {books.map(book => (
        <div
          key={book.id}
          onClick={() => router.push(`/catalogue/${book.id}`)}
          className="border rounded shadow hover:shadow-lg cursor-pointer transition p-4"
        >
          <img src={book.image} alt={book.titre} className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold">{book.titre}</h2>
          <p className="text-gray-600">{book.auteur}</p>
          <p className="text-sm text-gray-500">{book.genre}</p>
        </div>
      ))}
    </div>
  )
}
