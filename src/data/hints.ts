import { Routes } from "@/routes/routes";

export type Hint = {
  key: HintsEnum;
  route: string;
  hint: string;
};

export enum HintsEnum {
  agorasodeus = "agorasodeus",
  caminhodastrevas = "caminhodastrevas",
  eisqueletal = "eisqueletal",
  luzdanoite = "luzdanoite",
  magiacruel = "magiacruel",
  sgmk = "sgmk",
}

export const hints: Hint[] = [
  {
    key: HintsEnum.agorasodeus,
    route: Routes.hint(HintsEnum.agorasodeus),
    hint: "Agora so deus",
  },
  {
    key: HintsEnum.caminhodastrevas,
    route: Routes.hint(HintsEnum.caminhodastrevas),
    hint: "Caminho das trevas",
  },
  {
    key: HintsEnum.eisqueletal,
    route: Routes.hint(HintsEnum.eisqueletal),
    hint: "Ei esqueletal",
  },
  {
    key: HintsEnum.luzdanoite,
    route: Routes.hint(HintsEnum.luzdanoite),
    hint: "Luz da noite",
  },
  {
    key: HintsEnum.magiacruel,
    route: Routes.hint(HintsEnum.magiacruel),
    hint: "Magia cruel",
  },
  {
    key: HintsEnum.sgmk,
    route: Routes.hint(HintsEnum.sgmk),
    hint: "Sgmk",
  },
];

export const getHint = (key: string) => hints.find((hint) => hint.key === key);
