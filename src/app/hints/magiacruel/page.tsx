import { HintsEnum, getHint } from "@/data/hints";

export default function magiacruel() {
  const hintObj = getHint(HintsEnum.magiacruel);
  const hintText = hintObj ? hintObj.hint : "Dica não encontrada.";

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-100">
      <p className="text-3xl font-semibold text-center p-4">{hintText}</p>
    </div>
  );
}
