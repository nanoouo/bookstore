'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState, useEffect } from 'react'

export default function BookCarousel({ books = [] }) {
  const [pause, setPause] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  let sliderRef, slider

  try {
    [sliderRef, slider] = useKeenSlider({
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 10 },
        },
        '(min-width: 769px) and (max-width: 1024px)': {
          slides: { perView: 2, spacing: 15 },
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created(s) {
        setInterval(() => {
          if (!pause) s.next()
        }, 3000)
      },
    })

    if (books.length === 0) {
      // Ne rien afficher si pas de livres
      return null
    }

  } catch (error) {
    console.error('Erreur dans BookCarousel:', error)
    return null
  }

  return (
    <div
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      className="relative max-w-6xl mx-auto"
    >
      <div ref={sliderRef} className="keen-slider rounded overflow-hidden">
        {books.map((book) => (
          <div
            key={book.id}
            className="keen-slider__slide cursor-pointer select-none"
            // tu peux ajouter un onClick pour la navigation ici
          >
            <img
              src={book.image}
              alt={book.titre}
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-center mt-2 font-semibold">{book.titre}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={() => slider?.current?.prev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Précédent"
      >
        ‹
      </button>

      <button
        onClick={() => slider?.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Suivant"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: slider?.current?.track?.details?.slides.length || 0 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider?.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
