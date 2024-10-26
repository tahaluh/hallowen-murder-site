"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { characters } from "@/data/characters";
import { Routes } from "@/routes/routes";

export default function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((char) => char.id === id);

  if (!character) return <p>Personagem não encontrado</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <Link href={Routes.characters}>
          <span className="text-gray-300 text-2xl cursor-pointer hover:underline border-gray-300">
            &lt; Voltar
          </span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">{character.name}</h1>{" "}
      {/* Citação do personagem */}
      <p className="quote text-center italic text-gray-300 mb-8">
        &quot;{character.quote}&quot;
      </p>
      <div className="flex flex-col items-center">
        <Image
          src={character.image}
          alt={`Imagem de ${character.name}`}
          width={200}
          height={200}
          className="rounded-full mb-4 object-cover"
        />
        <p>
          <strong>Espécie:</strong> {character.species}
        </p>
        <p>
          <strong>Personalidade:</strong> {character.personality}
        </p>
        <p>
          <strong>Motivação:</strong> {character.motivation}
        </p>
      </div>
    </div>
  );
}
