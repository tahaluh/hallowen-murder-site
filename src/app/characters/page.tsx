import Link from "next/link";
import Image from "next/image";
import { Character, characters } from "../../data/characters";

export default function CharacterList() {
  return (
    <div className="container mx-auto p-6 min-h-screen text-orange-100">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-10">
        Lista de Personagens
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {characters.map((character: Character) => (
          <li
            key={character.id}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
          >
            <Link href={`/characters/${character.id}`}>
              <div className="cursor-pointer text-center flex flex-col items-center">
                <Image
                  src={character.image}
                  alt={`Imagem de ${character.name}`}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-purple-700 shadow-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-orange-200 mt-2">
                  {character.name}
                </h2>
                <p className="text-purple-400">({character.species})</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
