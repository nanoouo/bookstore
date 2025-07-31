'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Schéma de validation avec regex pour le champ "nom"
const schema = yup.object({
  nom: yup
    .string()
    .required('Nom obligatoire')
    .min(5, 'Minimum 5 caractères')
    .matches(/^[A-Za-zÀ-ÿ\s'-]+$/, 'Le nom doit contenir uniquement des lettres'),
  email: yup
    .string()
    .required('Email obligatoire')
    .email('Email invalide'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('email')], 'Les emails doivent correspondre')
    .required('Confirmation obligatoire'),
  telephone: yup
    .string()
    .required('Téléphone obligatoire')
    .matches(/^\d{8}$/, 'Le téléphone doit avoir 8 chiffres'),
  photo: yup
    .mixed()
    .required('Photo obligatoire')
    .test('fileType', 'Format jpg/jpeg requis', (value) => {
      if (!value || !value.length) return false
      const file = value[0]
      return ['image/jpeg', 'image/jpg'].includes(file.type)
    }),
  conditions: yup
    .boolean()
    .oneOf([true], 'Vous devez accepter les conditions'),
})

export default function Abonnement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    alert('Formulaire soumis avec succès !')
    console.log(data)
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl mb-6">Abonnement à la newsletter</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Nom</label>
          <input
            {...register('nom')}
            className="w-full border rounded p-2"
            type="text"
          />
          <p className="text-red-600 text-sm">{errors.nom?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            {...register('email')}
            className="w-full border rounded p-2"
            type="email"
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Confirmation de l'email</label>
          <input
            {...register('confirmation')}
            className="w-full border rounded p-2"
            type="email"
          />
          <p className="text-red-600 text-sm">{errors.confirmation?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Téléphone</label>
          <input
            {...register('telephone')}
            className="w-full border rounded p-2"
            type="text"
          />
          <p className="text-red-600 text-sm">{errors.telephone?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Photo (jpg/jpeg)</label>
          <input
            {...register('photo')}
            className="w-full border rounded p-2"
            type="file"
            accept=".jpg,.jpeg"
          />
          <p className="text-red-600 text-sm">{errors.photo?.message}</p>
        </div>

        <div>
          <label className="inline-flex items-center">
            <input
              {...register('conditions')}
              type="checkbox"
              className="mr-2"
            />
            J'accepte les conditions générales
          </label>
          <p className="text-red-600 text-sm">{errors.conditions?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          S’abonner
        </button>
      </form>
    </main>
  )
}
