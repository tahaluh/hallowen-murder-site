"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { hints } from "@/data/hints";

export default function SearchHint() {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleConfirm = () => {
    const normalizedInput = input.toLowerCase().replace(/\s+/g, "");

    const foundHint = hints.find((hint) => hint.key === normalizedInput);
    if (foundHint) {
      router.push(foundHint.route);
    } else {
      setErrorMessage("Inválido.");
      // alert("Inválido.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-100">
      <div className="text-center">
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="..."
          />
          <button
            onClick={handleConfirm}
            className="px-6 py-2 rounded-md bg-purple-900 hover:bg-purple-1000 text-white font-semibold"
          >
            Confirmar
          </button>
        </div>

        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}
