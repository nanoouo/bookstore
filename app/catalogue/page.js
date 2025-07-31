'use client'

import { useState, useMemo } from 'react'
import { books } from '../../data/books'

import BookList from '../components/BookList'


export default function Catalogue() {
  // États des filtres
  const [searchTitle, setSearchTitle] = useState('')
  const [filterGenre, setFilterGenre] = useState('')
  const [filterAuteur, setFilterAuteur] = useState('')

  // Extraire genres uniques
  const genres = useMemo(() => {
    const allGenres = books.map(book => book.genre)
    return [...new Set(allGenres)]
  }, [])

  // Extraire auteurs uniques
  const auteurs = useMemo(() => {
    const allAuteurs = books.map(book => book.auteur)
    return [...new Set(allAuteurs)]
  }, [])

  // Filtrer livres selon critères
  const filteredBooks = books.filter(book => {
    const matchesTitle = book.titre.toLowerCase().includes(searchTitle.toLowerCase())
    const matchesGenre = filterGenre ? book.genre === filterGenre : true
    const matchesAuteur = filterAuteur ? book.auteur === filterAuteur : true
    return matchesTitle && matchesGenre && matchesAuteur
  })

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Catalogue des livres</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {/* Filtre titre */}
        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border p-2 rounded flex-grow min-w-[200px]"
        />

        {/* Filtre genre */}
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Tous les genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        {/* Filtre auteur */}
        <select
          value={filterAuteur}
          onChange={(e) => setFilterAuteur(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Tous les auteurs</option>
          {auteurs.map(auteur => (
            <option key={auteur} value={auteur}>{auteur}</option>
          ))}
        </select>
      </div>

      <BookList books={filteredBooks} />
    </main>
  )
}
