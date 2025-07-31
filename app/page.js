"use client";



import { useRouter } from 'next/navigation'

import BookCarousel from './components/BookCarousel'
import { books } from '@/data/books';

export default function Home() {
  const router = useRouter()
  const vedettes = books.slice(0, 4)

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <BookCarousel books={vedettes} />

      <div className="mt-8 flex justify-center gap-6">
  <button
    onClick={() => router.push('/catalogue')}
    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
  >
    Voir le catalogue
  </button>

  <button
    onClick={() => router.push('/abonnement')}
    className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
  >
    S’abonner
  </button>
</div>

    </main>
  )
}

