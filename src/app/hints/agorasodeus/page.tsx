import { HintsEnum, getHint } from "@/data/hints";

export default function agorasodeus() {
  const hintObj = getHint(HintsEnum.agorasodeus);
  const hintText = hintObj ? hintObj.hint : "Dica não encontrada.";

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-100">
      <p className="text-3xl font-semibold text-center p-4">{hintText}</p>
    </div>
  );
}
