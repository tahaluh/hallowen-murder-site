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
  puroosso = "puroosso",
  sgmk = "sgmk",
}

export const hints: Hint[] = [
  {
    key: HintsEnum.agorasodeus,
    route: Routes.hint(HintsEnum.agorasodeus),
    hint: "Símbolos que misturam diferentes culturas mágicas, estão presentes nos corredores, algo que somente alguém com um vasto conhecimento poderia ter feito.",
  },
  {
    key: HintsEnum.caminhodastrevas,
    route: Routes.hint(HintsEnum.caminhodastrevas),
    hint: "Em uma taça na sala de estar, uma gosma com brilho esverdeado é encontrada.",
  },
  {
    key: HintsEnum.eisqueletal,
    route: Routes.hint(HintsEnum.eisqueletal),
    hint: "No pescoço da vítima são encontradas perfurações, características de um ataque de ...",
  },
  {
    key: HintsEnum.luzdanoite,
    route: Routes.hint(HintsEnum.luzdanoite),
    hint: "Sob o piano, na sala de música, uma flauta de ossos com sangue e marcas de mordida é encontrada.",
  },
  {
    key: HintsEnum.magiacruel,
    route: Routes.hint(HintsEnum.magiacruel),
    hint: "Nas paredes do corretor, é encontrado um pedaço de metal antigo e enferrujado, sugere-se que seja uma ferramenta ou arma velha.",
  },
  {
    key: HintsEnum.puroosso,
    route: Routes.hint(HintsEnum.puroosso),
    hint: "Em um buraco na entrada do castelo, um acorde secreto pode ser encontrado.",
  },
  {
    key: HintsEnum.sgmk,
    route: Routes.hint(HintsEnum.sgmk),
    hint: "Escondida em uma estante da biblioteca, um osso esculpido com runas mágicas avançadas é encontrado emananando uma aura de poder.",
  },
];

export const getHint = (key: string) => hints.find((hint) => hint.key === key);
