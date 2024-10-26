import { HintsEnum, getHint } from "@/data/hints";

export default function facecega() {
  const hintObj = getHint(HintsEnum.facecega);
  const hintText = hintObj ? hintObj.hint : "Dica não encontrada.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-100">
      <p className="text-3xl font-semibold text-center p-4">{hintText}</p>
      <audio controls className="mt-4">
        <source src="/sounds/animais.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}
