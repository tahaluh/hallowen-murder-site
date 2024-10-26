// /src/data/characters.ts
export type Character = {
  id: string;
  name: string;
  quote: string;
  species: string;
  specieDescription: string;
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
    specieDescription:
      "Condenado a vagar por lugares assolados pela doença, o Doutor da Praga carrega uma maldição eterna de curar. Sob sua máscara de bico, ele esconde um fardo sombrio, destinado a aliviar o sofrimento onde quer que surja. Suas poções, misturadas com conhecimento oculto, são infundidas com poderes que vão além da medicina comum. O Doutor não busca glória ou gratidão — ele é compelido por forças que o aprisionam ao ciclo interminável de cura e partida, levando consigo o peso das almas que tentou salvar.",
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
    specieDescription:
      "Seres aquáticos encantadores e perigosos, as sereias possuem uma voz hipnótica capaz de seduzir e manipular os que se aproximam. Ligadas à magia aquática, elas conhecem segredos profundos dos mares e protegem territórios com um misto de graça e astúcia. Suas intenções nem sempre são claras, mas seu poder é inegável.",
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
    specieDescription:
      "A personificação da morte, o Ceifador guia almas ao além. Frio e inevitável, ele é uma presença que anuncia o fim, mas não interfere. Simplesmente cumpre seu papel eterno, simbolizando o destino e o ciclo da vida e morte.",
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
    specieDescription:
      "Mortos reanimados, os zumbis são lentos e têm mentes fragmentadas. Podem lembrar vagamente de suas vidas anteriores, mas são imunes à dor e possuem resistência notável. Muitas vezes resultado de magia negra ou experimentos, eles são quase incansáveis, apesar de sua lentidão.",
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
    specieDescription:
      "Defensores dos mares, os marinheiros da marinha são disciplinados e treinados para combater piratas. Com um senso rígido de dever, muitos têm cicatrizes de batalhas passadas. São hábeis na navegação e no uso de armas, e seu maior objetivo é manter as rotas marítimas seguras e erradicar os saqueadores dos mares.",
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
    specieDescription:
      "Espíritos femininos que anunciam a morte com cantos e gritos assombrosos. Embora não causem a morte, seus gritos são um aviso sombrio do destino. Muitas vezes mal compreendidas, são mensageiras ligadas ao destino e à magia antiga.",
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
    specieDescription:
      "Entidades furtivas que habitam as sombras, com a habilidade de desaparecer e aparecer em locais diferentes. Elas têm um fascínio pelo oculto e sabem segredos que outros escondem. Aqueles com algo a ocultar podem sentir sua presença, ainda que nunca os vejam diretamente.",
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
    specieDescription:
      "Seres imortais e aristocráticos, os vampiros possuem uma sede insaciável por sangue e são vulneráveis ao sol, alho e prata. Mestres em manipular o medo e a sedução, mantêm um forte controle sobre o ambiente ao seu redor, explorando seus sentidos apurados e força sobre-humana, mas sempre atentos a tudo o que possa enfraquecê-los.",
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
    specieDescription:
      "Metamorfos que alternam entre formas humanas e felinas, gatos pretos são ligados ao oculto e são vistos como sinais de má sorte. Com olhos penetrantes e uma inteligência afiada, manipulam o que os cerca, agindo nas sombras e sempre prontos a confundir os supersticiosos.",
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
    specieDescription:
      " Animados por magia, esqueletos são leves e ágeis, geralmente de natureza brincalhona e sociável. Mesmo em sua forma apenas óssea, mantêm traços de sua personalidade original e têm uma estranha afinidade com música e ossos.",
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
    specieDescription:
      "Seres humanos que se transformam em feras sob a lua cheia. Com força e sentidos intensificados, os lobisomens são reclusos, temendo sua própria ferocidade e lutando para manter o controle. Sensíveis à prata, carregam o fardo de sua natureza violenta.",
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
    specieDescription:
      "Mestres das artes mágicas, as bruxas manipulam forças ocultas e realizam feitiços com precisão. Com um conhecimento profundo de encantamentos e ingredientes raros, elas tecem feitiços poderosos. Muitas vezes subestimadas, são extremamente perigosas e conhecem segredos que outros jamais compreenderiam.",
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
    specieDescription:
      "Humanos são seres versáteis e adaptáveis, capazes de se destacar em diversas áreas. Com uma curiosidade inata, muitos se aventuram em busca de conhecimento e poder, e alguns encontram artefatos mágicos que mudam suas vidas para sempre.",
    personality: "Curioso, otimista e aventureiro.",
    motivation: "Explorar e descobrir artefatos mágicos.",
    actions: "Fala com entusiasmo sobre magia e artefatos.",
    image: "/images/characters/thorian-white.png",
  },
];
