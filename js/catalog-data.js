/**
 * Catálogo Oficial ConvitesMágicos
 * Dados estruturados de convites: Site Premium, Vídeos e Imagens
 */

const DEFAULT_WHATSAPP_PHONE = "5511999999999";

const PREMIUM_INVITATION = {
  id: "site-isadora-premium",
  title: "Convite Site Premium Real • Princesa Isadora",
  shortTitle: "Convite Site Premium (Modelo Isadora)",
  category: "site",
  categoryName: "Convite em Site Interativo",
  categoryIcon: "👑",
  price: 197,
  priceFormatted: "R$ 197",
  badge: "O Mais Completo & Exclusivo ⭐",
  url: "https://site-oficial-seguro.github.io/convite-aniversario-isadora/",
  tagline: "A experiência definitiva: um site completo, interativo e inesquecível para o aniversário!",
  description: "Diferente de uma simples foto ou vídeo, o Convite em Site é uma página web exclusiva para o aniversário do seu filho(a). Seus convidados confirmam presença com um clique, abrem a rota no GPS (Google Maps e Waze), ouvem a música do tema, acompanham a contagem regressiva e veem as fotos mais lindas!",
  highlights: [
    { icon: "🔗", title: "Link Exclusivo e Personalizado", desc: "Envie facilmente para todos os amigos e familiares pelo WhatsApp." },
    { icon: "✅", title: "Confirmação de Presença (RSVP)", desc: "Receba a confirmação dos convidados direto no seu WhatsApp." },
    { icon: "📍", title: "Localização com Waze e Google Maps", desc: "Botão direto para traçar a rota até a festa sem ninguém se perder." },
    { icon: "🎵", title: "Trilha Sonora Temática", desc: "Música de fundo encantadora com botão tocar/pausar." },
    { icon: "⏳", title: "Contagem Regressiva em Tempo Real", desc: "Gera expectativa e emoção para o grande dia." },
    { icon: "📸", title: "Galeria de Fotos do Aniversariante", desc: "Espaço para fotos da criança em alta definição." },
    { icon: "🎁", title: "Lista de Presentes & Dress Code", desc: "Sugestões de presentes, roupas e informações importantes." }
  ],
  whatsappMessage: "Olá! Gostei muito do Convite Site Premium (R$ 197), no modelo da Princesa Isadora! Gostaria de encomendar para a festa do meu filho(a)!"
};

const VIDEOS_CATALOG = [
  {
    id: "vid-1",
    file: "pinterest-pin-1790903169708.mp4",
    title: "Convite Animado Safari & Aventura na Selva",
    theme: "Safari / Animais",
    category: "video",
    categoryName: "Vídeo Animado",
    categoryIcon: "🎬",
    price: 89,
    priceFormatted: "R$ 89",
    tags: ["Safari", "Selva", "Animais", "Menino", "Menina", "1 Aninho"],
    desc: "Animação com trilha sonora mágica, efeitos de transição e movimento que prendem a atenção de todos."
  },
  {
    id: "vid-2",
    file: "pinterest-pin-1790903197875.mp4",
    title: "Convite Animado Realeza & Princesas Encantadas",
    theme: "Princesas / Realeza",
    category: "video",
    categoryName: "Vídeo Animado",
    categoryIcon: "🎬",
    price: 89,
    priceFormatted: "R$ 89",
    tags: ["Princesas", "Realeza", "Rosa", "Castelo", "Menina", "1 Aninho"],
    desc: "Vídeo com efeito de conto de fadas, brilhos e música suave para comemorar um momento inesquecível."
  },
  {
    id: "vid-3",
    file: "pin_601230619052258881.mp4",
    title: "Convite Animado Parque dos Dinossauros Aventura",
    theme: "Dinossauros / Aventura",
    category: "video",
    categoryName: "Vídeo Animado",
    categoryIcon: "🎬",
    price: 89,
    priceFormatted: "R$ 89",
    tags: ["Dinossauros", "Jurassic", "Aventura", "Menino", "Verde"],
    desc: "Dinossauros animados e muita diversão com efeitos sonoros e visuais cheios de aventura."
  },
  {
    id: "vid-4",
    file: "pin_868561478154839950.mp4",
    title: "Convite Animado Fazendinha dos Bichinhos Divertidos",
    theme: "Fazendinha",
    category: "video",
    categoryName: "Vídeo Animado",
    categoryIcon: "🎬",
    price: 89,
    priceFormatted: "R$ 89",
    tags: ["Fazendinha", "Bichinhos", "Aquarela", "Animais", "1 Aninho"],
    desc: "Os bichinhos mais fofos da fazenda em uma animação alegre e cheia de cores vibrantes."
  }
];

const IMAGES_CATALOG = [
  {
    id: "img-1",
    file: "Convite aniversário infantil dinossauro ilustrado verde e branco.png",
    title: "Dinossauro Baby Ilustrado Verde & Branco",
    theme: "Dinossauros",
    tags: ["Dinossauros", "Baby", "Verde", "Menino", "Aquarela"]
  },
  {
    id: "img-2",
    file: "Convite aniversário infantil vídeo game ilustrado marrom e verde.png",
    title: "Vídeo Game Gamer Level Up Aventura",
    theme: "Gamer / Video Game",
    tags: ["Gamer", "Video Game", "Pixel", "Aventura", "Menino"]
  },
  {
    id: "img-3",
    file: "Convite de aniversario infantil fazendinha aquarela.png",
    title: "Fazendinha Aquarelada Encantada",
    theme: "Fazendinha",
    tags: ["Fazendinha", "Aquarela", "Bichinhos", "1 Aninho", "Campo"]
  },
  {
    id: "img-4",
    file: "Convite de aniversário infantil dinossauro (1).png",
    title: "Dino Park Safari Pré-Histórico",
    theme: "Dinossauros",
    tags: ["Dinossauros", "Parque", "Verde", "Aventura"]
  },
  {
    id: "img-5",
    file: "Convite de aniversário infantil dinossauro.png",
    title: "Dinossauros Fofos em Festa",
    theme: "Dinossauros",
    tags: ["Dinossauros", "Colorido", "Fofo", "Menino"]
  },
  {
    id: "img-6",
    file: "Convite de aniversário infantil rosa .png",
    title: "Jardim das Borboletas & Princesa Rosa",
    theme: "Princesas & Jardim",
    tags: ["Princesas", "Jardim", "Rosa", "Borboletas", "Menina"]
  },
  {
    id: "img-7",
    file: "Convite de aniversário safari bichinhos floresta colorido infantil .png",
    title: "Safari dos Bichinhos da Floresta",
    theme: "Safari",
    tags: ["Safari", "Bichinhos", "Floresta", "Colorido", "1 Aninho"]
  },
  {
    id: "img-8",
    file: "Convite de Aniversário Super Herói Infantil Ilustrado Vermelho.png",
    title: "Super-Herói Ação na Metrópole Vermelho",
    theme: "Super-Heróis",
    tags: ["Super-Heróis", "Ação", "Quadrinhos", "Vermelho", "Menino"]
  },
  {
    id: "img-9",
    file: "Convite para aniversário infantil com tema castelo da princesa aquarelado colorido.png",
    title: "Castelo Real da Princesa Aquarela",
    theme: "Princesas",
    tags: ["Princesas", "Castelo", "Aquarela", "Conto de Fadas", "Menina"]
  },
  {
    id: "img-10",
    file: "Convite Virtual de Aniversário Infantil Fazendinha.png",
    title: "Fazendinha dos Bichinhos Fofos",
    theme: "Fazendinha",
    tags: ["Fazendinha", "Celeiro", "Trator", "Animais", "1 Aninho"]
  },
  {
    id: "img-11",
    file: "Instagram Post Aniversário Infantil Menino Simples Azul e Vermelho.png",
    title: "Circo Mágico & Balões Coloridos",
    theme: "Circo & Balões",
    tags: ["Circo", "Balões", "Azul", "Vermelho", "Festa"]
  },
  {
    id: "img-12",
    file: "Verde Claro Verde Escuro e Bege Infantil Animais Da Selva 1 Ano Convite.png",
    title: "Animais da Selva Elegante 1º Aninho",
    theme: "Safari & Selva",
    tags: ["Safari", "Selva", "1 Aninho", "Elegante", "Neutro"]
  },
  {
    id: "img-13",
    file: "2.png",
    title: "Circo Retrô Mágico & Tenda Alegre",
    theme: "Circo",
    tags: ["Circo", "Palhaço", "Magia", "Alegria"]
  },
  {
    id: "img-14",
    file: "APROVADO.png",
    title: "Realeza Encantada Dourada Especial",
    theme: "Princesas & Realeza",
    tags: ["Realeza", "Princesa", "Coroa", "Dourado", "Luxo"]
  },
  {
    id: "img-15",
    file: "pin_1010284128931151610.jpg",
    title: "Princesa da Disney Coroa Mágica",
    theme: "Princesas",
    tags: ["Princesas", "Disney", "Castelo", "Rosa", "Menina"]
  },
  {
    id: "img-16",
    file: "pin_113223378128447346.png",
    title: "Bosque Encantado dos Bichinhos & Fadas",
    theme: "Bosque Encantado",
    tags: ["Bosque", "Animais", "Aquarela", "Natureza", "Menina"]
  },
  {
    id: "img-17",
    file: "pin_13510867628814121.png",
    title: "Pequeno Explorador Safari no Jeep",
    theme: "Safari",
    tags: ["Safari", "Explorador", "Aventura", "Menino"]
  },
  {
    id: "img-18",
    file: "pin_175570085470985947.png",
    title: "Balões nas Nuvens Céu Encantado",
    theme: "Balões & Céu",
    tags: ["Balão", "Céu", "Nuvens", "1 Aninho", "Delicado"]
  },
  {
    id: "img-19",
    file: "pin_1790903805535.png",
    title: "Mundo Encantado dos Brinquedos & Alegria",
    theme: "Brinquedos",
    tags: ["Brinquedos", "Colorido", "Parque", "Diversão"]
  },
  {
    id: "img-20",
    file: "pin_238339005275417713.jpg",
    title: "Chuva de Bênçãos & Amor Rosa e Dourado",
    theme: "Chuva de Amor",
    tags: ["Chuva de Amor", "Nuvens", "Corações", "1 Aninho", "Menina"]
  },
  {
    id: "img-21",
    file: "pin_280630620526855820.png",
    title: "Astronauta & Viagem pelo Espaço Cósmico",
    theme: "Espaço & Astronauta",
    tags: ["Astronauta", "Espaço", "Foguete", "Estrelas", "Menino"]
  },
  {
    id: "img-22",
    file: "pin_288934132366267234.png",
    title: "Sereia Mágica Fundo do Mar Encantado",
    theme: "Sereia / Mar",
    tags: ["Sereia", "Fundo do Mar", "Conchas", "Lilás", "Menina"]
  },
  {
    id: "img-23",
    file: "pin_36099234508449802.jpg",
    title: "Carros & Pista de Corrida Veloz",
    theme: "Carros & Corrida",
    tags: ["Carros", "Velocidade", "Pista", "Menino", "Adrenalina"]
  },
  {
    id: "img-24",
    file: "pin_445223113185953822.jpg",
    title: "Ursinho Príncipe & Balão Azul",
    theme: "Ursinho Príncipe",
    tags: ["Ursinho", "Príncipe", "Balão", "Azul", "1 Aninho"]
  },
  {
    id: "img-25",
    file: "pin_512917845095870218.png",
    title: "Poderoso Chefinho em Missão Especial",
    theme: "Poderoso Chefinho",
    tags: ["Chefinho", "Terno", "Divertido", "Menino"]
  },
  {
    id: "img-26",
    file: "pin_578360777210105218.jpg",
    title: "Patrulha Canina Patinhas em Ação",
    theme: "Patrulha Canina",
    tags: ["Patrulha Canina", "Cachorrinhos", "Ação", "Colorido"]
  },
  {
    id: "img-27",
    file: "pin_742601426101613698.png",
    title: "Jardim das Borboletas & Flores Aquarela",
    theme: "Jardim Encantado",
    tags: ["Jardim", "Flores", "Borboletas", "Aquarela", "Menina"]
  },
  {
    id: "img-28",
    file: "pin_752945631498043422.webp",
    title: "Minnie Rosa & Laço de Poá Mágico",
    theme: "Minnie Mouse",
    tags: ["Minnie", "Disney", "Rosa", "Laço", "Menina"]
  },
  {
    id: "img-29",
    file: "pin_753578950195705144.png",
    title: "Mickey Mouse Festa dos Amigos",
    theme: "Mickey Mouse",
    tags: ["Mickey", "Disney", "Vermelho", "Amarelo", "Diversão"]
  },
  {
    id: "img-30",
    file: "pin_753578950195705165.jpg",
    title: "Rei Leão & Savana Africana Dourada",
    theme: "Rei Leão",
    tags: ["Rei Leão", "Simba", "Safari", "Savana", "1 Aninho"]
  },
  {
    id: "img-31",
    file: "pin_753578950195705170.jpg",
    title: "Mundo Bita no Circo da Alegria",
    theme: "Mundo Bita",
    tags: ["Mundo Bita", "Bigode", "Balão", "Música", "Colorido"]
  },
  {
    id: "img-32",
    file: "pin_922112092480614244.png",
    title: "Floresta dos Animais Fofos Baby",
    theme: "Floresta & Safari",
    tags: ["Floresta", "Bichinhos", "Baby", "Tons Suaves"]
  },
  {
    id: "img-33",
    file: "pin_927389748302340382.jpg",
    title: "Masha e o Urso no Bosque Encantado",
    theme: "Masha e o Urso",
    tags: ["Masha e o Urso", "Bosque", "Alegria", "Menina"]
  },
  {
    id: "img-34",
    file: "pin_955959458425619728.jpg",
    title: "Branca de Neve & Castelo dos Sonhos",
    theme: "Princesas",
    tags: ["Branca de Neve", "Princesas", "Maçã", "Conto de Fadas"]
  },
  {
    id: "img-35",
    file: "pin_956170564657025001.jpg",
    title: "Super Mario & Reino dos Cogumelos",
    theme: "Gamer / Mario",
    tags: ["Super Mario", "Gamer", "Aventura", "Nintendo", "Colorido"]
  },
  {
    id: "img-36",
    file: "pinterest-pin-1790903167271.png",
    title: "Princesas Disney no Palácio Real",
    theme: "Princesas Disney",
    tags: ["Princesas", "Disney", "Palácio", "Rosa", "Luxo"]
  },
  {
    id: "img-37",
    file: "pinterest-pin-1790903172472.png",
    title: "Aventura Jurássica Dinossauros em Ação",
    theme: "Dinossauros",
    tags: ["Dinossauros", "Jurassic", "Selva", "Verde"]
  },
  {
    id: "img-38",
    file: "pinterest-pin-1790903173958.png",
    title: "Fazendinha Feliz & Bichinhos Amigos",
    theme: "Fazendinha",
    tags: ["Fazendinha", "Vaca", "Pintinho", "Porquinho", "1 Aninho"]
  },
  {
    id: "img-39",
    file: "pinterest-pin-1790903175945.png",
    title: "Safari Dourado & Animais do Reino",
    theme: "Safari",
    tags: ["Safari", "Leão", "Girafa", "Elefante", "Aventura"]
  },
  {
    id: "img-40",
    file: "pinterest-pin-1790903181020.jpg",
    title: "Super-Heróis Liga da Justiça em Ação",
    theme: "Super-Heróis",
    tags: ["Super-Heróis", "Poderes", "Ação", "Menino"]
  },
  {
    id: "img-41",
    file: "pinterest-pin-1790903182259.jpg",
    title: "Bailarina Real & Sapatilhas Cor-de-Rosa",
    theme: "Bailarina",
    tags: ["Bailarina", "Dança", "Tutu", "Rosa", "Delicado"]
  },
  {
    id: "img-42",
    file: "pinterest-pin-1790903188028.jpg",
    title: "Pequeno Príncipe & As Rosas do Asteroide",
    theme: "Pequeno Príncipe",
    tags: ["Pequeno Príncipe", "Estrelas", "Raposa", "Azul", "1 Aninho"]
  },
  {
    id: "img-43",
    file: "pinterest-pin-1790903192442.jpg",
    title: "Fundo do Mar dos Golfinhos & Peixinhos",
    theme: "Fundo do Mar",
    tags: ["Fundo do Mar", "Peixinhos", "Oceano", "Azul", "Colorido"]
  }
].map(item => ({
  ...item,
  category: "image",
  categoryName: "Convite Digital em Imagem",
  categoryIcon: "🖼️",
  price: 39,
  priceFormatted: "R$ 39",
  desc: "Arte digital personalizada em altíssima resolução. Ideal para enviar no WhatsApp e pronta para impressão se desejar."
}));
