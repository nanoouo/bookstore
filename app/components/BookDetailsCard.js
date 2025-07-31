export default function BookDetailsCard({ book }) {
  return (
    <div className="max-w-4xl mx-auto p-6 border rounded shadow flex flex-col md:flex-row gap-6">
      <img
        src={book.image}
        alt={book.titre}
        className="w-full md:w-1/3 object-cover rounded"
      />

      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{book.titre}</h2>
        <p className="mb-2"><strong>Auteur :</strong> {book.auteur}</p>
        <p className="mb-2"><strong>Genre :</strong> {book.genre}</p>
        <p className="mb-4">{book.resume}</p>
        <p className="text-xl font-semibold text-red-600">{book.prix} €</p>
      </div>
    </div>
  )
}
