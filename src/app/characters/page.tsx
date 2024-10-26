import Link from "next/link";
import Image from "next/image";
import { Character, characters } from "../../data/characters";

export default function CharacterList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Lista de Personagens
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((character: Character) => (
          <li key={character.id} className="flex flex-col items-center">
            <Link href={`/characters/${character.id}`}>
              <div className="cursor-pointer text-center flex flex-col items-center">
                <Image
                  src={character.image}
                  alt={`Imagem de ${character.name}`}
                  width={100} // Ajuste conforme necessário
                  height={100} // Ajuste conforme necessário
                  className="rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold mt-2">{character.name}</h2>
                <p className="text-gray-300">({character.species})</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
