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
    <div className="container mx-auto p-6 min-h-screen text-orange-100">
      {/* Botão Voltar */}
      <div className="mb-6">
        <Link href={Routes.characters}>
          <span className="text-orange-500 text-2xl cursor-pointer hover:underline border-b-2 border-orange-500 pb-1">
            &lt; Voltar
          </span>
        </Link>
      </div>

      {/* Nome do Personagem */}
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-6">
        {character.name}
      </h1>

      {/* Citação do Personagem */}
      <p className="text-center italic text-orange-400 text-lg mb-10">
        &quot;{character.quote}&quot;
      </p>

      {/* Informações do Personagem */}
      <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-xl border-2 border-purple-500">
        <Image
          src={character.image}
          alt={`Imagem de ${character.name}`}
          width={200}
          height={200}
          className="rounded-full mb-6 border-4 border-purple-700 shadow-lg"
        />
        <p className="text-xl text-purple-400">
          <strong>Espécie:</strong> {character.species}
        </p>
        <p className="text-lg mt-2">
          <strong>Personalidade:</strong> {character.personality}
        </p>
        <p className="text-lg mt-2">
          <strong>Motivação:</strong> {character.motivation}
        </p>
      </div>

      {/* Descrição da Espécie */}
      <div className="mt-12 px-8 py-10 bg-gray-800 rounded-lg shadow-2xl border-l-4 border-orange-600">
        <h2 className="text-2xl font-semibold text-center text-orange-500 mb-4">
          Descrição de {character.species}
        </h2>
        <p className="text-gray-200 leading-relaxed text-justify text-lg">
          {character.specieDescription}
        </p>
      </div>
    </div>
  );
}
