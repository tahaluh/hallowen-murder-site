// /src/data/characters.ts
export type Character = {
  id: string;
  name: string;
  quote: string;
  species: string;
  personality: string;
  motivation: string;
  actions: string;
  image: string;
};

export const characters: Character[] = [
  {
    id: "aledrini-pestilenti",
    name: "Aledrini Pestilenti",
    quote:
      "Com o artefato em mãos, finalmente poderei erradicar e curar a maldição, libertando-me de meu fardo sombrio.",
    species: "Doutor da Praga",
    personality: "Silencioso, calculista e preciso.",
    motivation: "Curar antigas pragas.",
    actions:
      "Aplica poções e remédios com precisão cirúrgica. Fala com sotaque italiano.",
    image: "/images/characters/aledrini-pestilenti.png",
  },
  {
    id: "barbira-seawhisper",
    name: "Barbira Seawhisper",
    quote:
      "O artefato é a chave para para reinar soberana nas águas profundas.",
    species: "Sereia",
    personality: "Encantadora, astuta e manipuladora quando necessário.",
    motivation: "Controlar segredos aquáticos mágicos.",
    actions: "Usa sua voz sedutora para obter informações.",
    image: "/images/characters/barbira-seawhisper.png",
  },
  {
    id: "gabrimus-grim",
    name: "Gabrimus Grim",
    quote: "Anseio me libertar do fardo eterno de coletar almas.",
    species: "Ceifador",
    personality: "Sombrio e cansado de seu papel.",
    motivation: "Libertar-se do dever eterno.",
    actions: "Suspira com menções ao destino e à morte.",
    image: "/images/characters/gabrimus-grim.png",
  },
  {
    id: "gislara-hollow",
    name: "Gislara Hollow",
    quote:
      "Preciso recuperar minhas memórias e minha antiga vida, custe o que custar.",
    species: "Zumbi",
    personality: "Inteligente, mas fragmentada.",
    motivation: "Recuperar suas memórias e habilidades científicas.",
    actions: "Movimentos lentos e distraídos.",
    image: "/images/characters/gislara-hollow.png",
  },
  {
    id: "gustavon-blackbeard",
    name: "Gustavon Blackbeard",
    quote:
      "Estou em busca da maior fortuna já vista nos mares. Com ele, minha lenda será eternizada.",
    species: "Capitão da Marinha",
    personality: "Rígido e disciplinado, com ódio de piratas.",
    motivation:
      "Obter fama, fortunas legítimas, e eliminar piratas de uma vez por todas.",
    actions: "Fala com orgulho de suas vitórias contra piratas.",
    image: "/images/characters/gustavon-blackbeard.png",
  },
  {
    id: "janira-croft",
    name: "Janira Croft",
    quote:
      "Preciso alertar os outros sobre o perigo iminente que vejo à frente.",
    species: "Banshee",
    personality: "Melancólica e misteriosa.",
    motivation: "Avisar sobre a morte iminente.",
    actions: "Canta suavemente pressagiando tragédia.",
    image: "/images/characters/janira-croft.png",
  },
  {
    id: "jorvan-thorn",
    name: "Jorvan Thorn",
    quote: "Estou em busca de segredos ocultos que podem mudar tudo.",
    species: "Homem das Sombras",
    personality: "Enigmático e esquivo.",
    motivation: "Descobrir segredos ocultos.",
    actions: "Aparece nas sombras e ouve conversas.",
    image: "/images/characters/jorvan-thorn.png",
  },
  {
    id: "laryn-blood",
    name: "Laryn Blood",
    quote: "Vou proteger meu poder e eliminar qualquer ameaça ao meu domínio.",
    species: "Vampiro",
    personality: "Aristocrático e refinado, mas com sede de sangue controlada.",
    motivation: "Manter seu status e controle na sociedade.",
    actions: "Evita alho, prata e espelhos.",
    image: "/images/characters/laryn-blood.png",
  },
  {
    id: "liora-blackwood",
    name: "Liora Blackwood",
    quote: "Estou disposta a tudo para quebrar a maldição que me persegue.",
    species: "Gato Preto",
    personality: "Reservada, misteriosa e supersticiosa.",
    motivation: "Quebrar a maldição da má sorte.",
    actions: "Sibila quando mencionam superstições.",
    image: "/images/characters/liora-blackwood.png",
  },
  {
    id: "luron-bones",
    name: "Luron Bones",
    quote: "Só quero ser notado e amado como qualquer outro ser vivo.",
    species: "Esqueleto",
    personality: "Brincalhão, sempre faz piadas de ossos.",
    motivation: "Ser notado e apreciado.",
    actions: "Toca ritmos usando os próprios ossos.",
    image: "/images/characters/luron-bones.png",
  },
  {
    id: "thalina-claw",
    name: "Thalina Claw",
    quote:
      "Preciso encontrar uma cura para minha maldição antes que ela me consuma.",
    species: "Lobisomem",
    personality: "Luta para controlar sua natureza bestial.",
    motivation: "Procurar uma cura para sua condição.",
    actions: "Inquieta quando mencionam lua cheia ou prata.",
    image: "/images/characters/thalina-claw.png",
  },
  {
    id: "thalira-shade",
    name: "Thalira Shade",
    quote:
      "Quero o artefato para amplificar meus poderes e remover qualquer obstáculo no caminho.",
    species: "Bruxa",
    personality: "Ambiciosa, poderosa e manipuladora.",
    motivation: "Ganhar poder por meio de magia e eliminar obstáculos.",
    actions: "Lança feitiços e manipula os eventos ao seu redor.",
    image: "/images/characters/thalira-shade.png",
  },
  {
    id: "thorian-white",
    name: "Thorian White",
    quote: "Encontrei um artefato mágico... o que poderia dar errado?",
    species: "Humano",
    personality: "Curioso, otimista e aventureiro.",
    motivation: "Explorar e descobrir artefatos mágicos.",
    actions: "Fala com entusiasmo sobre magia e artefatos.",
    image: "/images/characters/thorian-white.png",
  },
];
