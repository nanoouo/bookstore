export default function BookCard({ book }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={book.image} alt={book.titre} className="w-full h-48 object-cover mb-3 rounded" />
      <h3 className="font-semibold text-lg mb-1">{book.titre}</h3>
      <p className="text-sm text-gray-600 mb-1">Auteur : {book.auteur}</p>
      <p className="text-sm text-gray-600 mb-1">Genre : {book.genre}</p>
      <p className="text-red-600 font-bold">{book.prix} €</p>
    </div>
  )
}
