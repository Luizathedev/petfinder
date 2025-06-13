"use client"

import { useState, useEffect } from "react"
import PetCard from "@/components/pet-card"
import type { Pet } from "@/types/pet"

export default function GaleriaPage() {
  const [pets, setPets] = useState<Pet[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("Página da galeria carregada")

    const timer = setTimeout(() => {
      const petsData = [
        { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 2, nome: "Mia", especie: "Gato", idade: 2, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 3, nome: "Luna", especie: "Cachorro", idade: 1, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 4, nome: "Nino", especie: "Gato", idade: 3, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 6, nome: "Frajola", especie: "Gato", idade: 6, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 8, nome: "Tom", especie: "Gato", idade: 3, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 9, nome: "Mel", especie: "Cachorro", idade: 1, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 11, nome: "Salem", especie: "Gato", idade: 2, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 12, nome: "Max", especie: "Cachorro", idade: 3, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 13, nome: "Amora", especie: "Gato", idade: 5, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 14, nome: "Nina", especie: "Cachorro", idade: 4, imagem: "/placeholder.svg?height=200&width=200" },
        { id: 15, nome: "Simba", especie: "Gato", idade: 2, imagem: "/placeholder.svg?height=200&width=200" },
      ]
      setPets(petsData)
      setIsLoading(false)
    }, 1000)

    return () => {
      console.log("Saindo da galeria de pets")
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Galeria de Pets</h1>
      <p className="text-muted-foreground mb-6">Total de pets disponíveis: {pets.length}</p>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Carregando pets...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  )
}
