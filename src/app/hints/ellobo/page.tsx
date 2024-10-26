import { HintsEnum, getHint } from "@/data/hints";
import Image from "next/image";

export default function ellobo() {
  const hintObj = getHint(HintsEnum.ellobo);
  const hintText = hintObj ? hintObj.hint : "Dica não encontrada.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-100">
      <p className="text-3xl font-semibold text-center p-4">{hintText}</p>
      <Image
        src="/images/characters/lobo.jpg"
        width={500}
        height={500}
        alt="El Lobo"
        className="rounded-full border-4 border-purple-700 shadow-md mb-4"
      />
      <audio controls className="mt-4">
        <source src="/sounds/latido.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}
