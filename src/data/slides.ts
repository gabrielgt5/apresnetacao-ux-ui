import { 
  Buildings as Building2, UserCircle as UserCircle2, Lightbulb, 
  PenNib as PenTool, Devices as MonitorSmartphone, Brain as BrainCircuit, Users, CornersOut as Maximize, 
  Eye, CursorClick as MousePointerClick, Lightning as Zap, MagnifyingGlass as Search, Layout as LayoutTemplate, CheckCircle, 
  Target, Image as ImageIcon, PaintBrush as Paintbrush, Eraser, Trash as Trash2, GlobeHemisphereWest, Storefront, DeviceMobile,
  PlayCircle, XCircle
} from "@phosphor-icons/react";

export const SLIDES = [
  { id: 1, type: "cover", title: "O MUNDO DO SOFTWARE", icon: Building2, colors: "from-blue-500 to-cyan-300" },
  { id: 2, type: "thought_bubble", title: "IMAGINA QUE ESTAMOS\nCONSTRUINDO UMA CIDADE DIGITAL..." },
  { id: 3, type: "image", title: "Na nossa Cidade Digital...", imageUrl: "/ilustracao-cidade.png" },
  { id: 4, type: "split", title: "Mas,", content: "Quem vai cuidar da experiência dos moradores? onde vai ficar os bairros a iluminação ?", imageUrl: "/confuso.png", imageAnimation: "doubt" },
  { id: 5, type: "full_image", imageUrl: "/conjunto-cidade.png" },
  { id: 6, type: "flashback", title: "Antes de falarmos de UX/UI Design....", subtitle: "Vamos entender alguns conceitos...", gifUrl: "/mikonjackson.gif" },
  { id: 7, type: "tv", title: "A VIDA DO USUÁRIO", icon: UserCircle2 },
  { id: 8, type: "statement", title: "O que é um usuário?", icon: UserCircle2, bullets: ["🧍 É uma pessoa real", "⏱️ Tem pressa", "🦥 Tem preguiça", "🪫 Tem pouca bateria no celular"] },
  { 
    id: 9, 
    type: "cards", 
    title: "O Objetivo Final", 
    subtitle: "Não é sobre como foi feito, é sobre o que entrega.", 
    cards: [
      { title: "A Padaria", icon: Storefront, desc: "A realidade do morador: Quando você vai comprar pão, você quer saber como calcularam o concreto da estrutura? Não. Você quer o pão fresco." },
      { title: "O Software", icon: DeviceMobile, desc: "A conexão: O usuário de um app é igual. Ele não quer saber de código ou back-end. Ele só quer pedir comida, ver vídeos ou mandar mensagem." }
    ]
  },
  { 
    id: 10, 
    type: "split", 
    title: "O Erro Clássico", 
    content: "Nós, desenvolvedores e designers, muitas vezes criamos telas pensando no que nós achamos lógico. Mas nós não criamos telas para nós mesmos; criamos para as pessoas que vão morar no nosso software.", 
    videoUrl: "/meme homer.mp4",
    icon: Users
  },
  { 
    id: 11, 
    type: "statement", 
    title: "Esse usuário que acabamos de ver e muitos outros, até mesmo nós, carregamos uma bagagem de experiências.", 
    subtitle: "E essa 'bagagem' tem um nome...",
    icon: BrainCircuit 
  },
  { 
    id: 12, 
    type: "statement", 
    title: "MODELO CONCEITUAL", 
    icon: Lightbulb,
    bullets: ["🧠 É uma representação mental, uma espécie de 'simulador interno' que o nosso cérebro roda para adivinhar como algo funciona antes mesmo de tocarmos naquilo."]
  },
  { id: 13, type: "full_image", imageUrl: "/simulcao-modelo-conceitual.png" },
  { id: 7, type: "timer", title: "Vamos fazer um teste com o simulador de vocês?", prompt: "Desenhe uma bicicleta!", icon: PenTool },
  { 
    id: 14, 
    type: "image", 
    title: "Essa bicicleta irá funcionar?", 
    imageUrl: "/Bicicleta Convergente.png",
    caption: "1.4 A “bicicleta convergente (modelo para noivos)” tipo carelman. A “Bicicleta Convergente” de Jacques Carelman Copyright © 1969-76-80 de Jacques Carelman e A.D.A.G.P Paris. Da Obra de Jacques Carelman, Catalogue d’objets introuvables, Balland éditeur, Paris, França. Usada do Livro Design do dia dia PG 36."
  },


  { 
    id: 16, 
    type: "statement", 
    title: "Essa bicicleta é um design?", 
    icon: Eye 
  },

  { 
    id: 20, 
    type: "full_video", 
    videoUrl: "/video-oque-e-design.mp4"
  },
  { 
    id: 18, 
    type: "statement", 
    title: "O que é Design?", 
    subtitles: [
      "\"Design é o processo de pensamento que compreende a criação de alguma coisa.\" - MILLER (1988, p. 2)",
      "\"Design é o **processo de pensamento** que compreende a criação de alguma coisa.\" - MILLER (1988, p. 2)"
    ],
    icon: BrainCircuit 
  },
  { 
    id: 19, 
    type: "diagram", 
    rootTitle: "Processo de pensamento",
    nodes: [
      { title: "Insight", desc: "Aquele estalo inicial: 'Ah, uma bicicleta tem duas rodas!'" },
      { title: "Razão", desc: "A lógica: 'As rodas precisam de um quadro ligando as duas e uma corrente para girar.'" },
      { title: "Intuição", desc: "Sua bagagem: 'Eu lembro da sensação de andar de bicicleta, então sei onde fica o guidão.'" }
    ]
  },
  { 
    id: 21, 
    type: "statement", 
    title: "", 
    subtitle: "Design é a ponte entre a sua **Razão, Insight e Intuição** e a forma como o **cérebro do usuário** espera que as coisas funcionem.", 
    icon: Target 
  },
  { 
    id: 22, 
    type: "statement", 
    title: "", 
    subtitle: "Se o usuário precisa **parar para pensar** em como usar, o seu processo de pensamento como Designer **falhou**.", 
    imageUrl: "/usuário pensando.png",
    icon: XCircle
  },
  { 
    id: 23, 
    type: "full_image", 
    imageUrl: "/página-22.png" 
  },

  // --- PASSO 1: UX DESIGN ---

  { 
    id: 9, 
    type: "bullets", 
    title: "O que é UX Design?", 
    subtitle: "UX = O processo de pensamento aplicado à experiência.", 
    bullets: [
      "É sobre como o usuário se **sente** ao interagir com o sistema.",
      "Trata-se de facilidade, fluidez e as **emoções** envolvidas.",
      "Objetivo: Construir produtos fáceis de usar (**usabilidade**).",
      "Reduzir o esforço, o ruído e os obstáculos para o usuário."
    ], 
    icon: UserCircle2 
  },
  { 
    id: 10, 
    type: "split", 
    title: "Na Cidade: O Planejador Urbano", 
    content: "Ele decide onde as avenidas principais devem passar para não dar trânsito e onde colocar os pontos de ônibus.", 
    highlight: "Garante que ninguém ande demais no sol e que haja acessibilidade para todos.", 
    icon: GlobeHemisphereWest 
  },
  { 
    id: 11, 
    type: "split", 
    title: "No Software: A Lógica do UX", 
    content: "O UX Designer decide quantas telas você precisa passar para **fazer um PIX**.", 
    highlight: "Onde fica o **botão de cancelar** para evitar erros e qual o caminho mais rápido para a compra.", 
    icon: MousePointerClick 
  },
  { 
    id: 24, 
    type: "grid", 
    title: "Princípios de UX Design", 
    items: [
      { title: "Usabilidade", desc: "Facilidade de uso.", icon: CheckCircle },
      { title: "Acessibilidade", desc: "Design para todos.", icon: CheckCircle },
      { title: "Feedback", desc: "Interação clara.", icon: CheckCircle },
      { title: "Consistência", desc: "Manter padrões visuais.", icon: CheckCircle },
      { title: "Hierarquia Visual", desc: "Organização da info.", icon: CheckCircle }
    ]
  },
  { id: 25, type: "principle_simulator", principleId: "usability",    title: "Usabilidade",       subtitle: "Facilidade de uso — menos é mais." },
  { id: 26, type: "principle_simulator", principleId: "accessibility", title: "Acessibilidade",    subtitle: "Design que funciona para todas as pessoas." },
  { id: 27, type: "principle_simulator", principleId: "feedback",      title: "Feedback",          subtitle: "O sistema deve sempre comunicar o que está acontecendo." },
  { id: 28, type: "principle_simulator", principleId: "consistency",   title: "Consistência",      subtitle: "Padrões visuais e interativos iguais em todo o produto." },
  { id: 29, type: "principle_simulator", principleId: "hierarchy",     title: "Hierarquia Visual", subtitle: "Organize a informação para guiar o olhar do usuário." },
  { 
    id: 31, 
    type: "timeline", 
    title: "Os 4 Processos de UX", 
    subtitle: "(O fluxo de planejamento da cidade)", 
    steps: [
      { title: "Pesquisa / Proto-Persona", desc: "Entender quem é o morador e o que ele precisa.", icon: Search },
      { title: "Wireframes", desc: "O rascunho do mapa. Onde as coisas vão ficar?", icon: LayoutTemplate },
      { title: "Prototipação", desc: "Construir uma maquete interativa para sentir a fluidez.", icon: MousePointerClick },
      { title: "Testes de Usabilidade", desc: "Ver se o morador consegue chegar ao destino sem se perder.", icon: Target }
    ]
  },
  
  // --- DINÂMICA CRÍTICA ---
  { 
    id: 15, 
    type: "statement", 
    title: "Dinâmica Crítica Interativa", 
    subtitle: "Abram o celular e pensem no app que mais usam (Instagram, TikTok, WhatsApp).", 
    highlight: "Citem 3 coisas ruins ou irritantes que vocês encontram neles.", 
    icon: DeviceMobile 
  },
  { 
    id: 16, 
    type: "timer", 
    title: "Tempo para a Dinâmica", 
    seconds: 120, 
    icon: Zap 
  },

  
  // --- PASSO 2: UI DESIGN ---
  { 
    id: 12, 
    type: "bullets", 
    title: "O que é UI Design?", 
    subtitle: "UI = A materialização visual do processo de pensamento de UX.", 
    bullets: [
      "É a **camada visível**: botões, cores, tipografia e ícones.",
      "Se a UX se preocupa com o sentimento, a UI se preocupa com a **aparência**.",
      "A UI é a 'fachada' da nossa cidade digital.",
      "Responsável por tornar a experiência **intuitiva** através do olhar."
    ], 
    icon: PenTool 
  },
  { 
    id: 13, 
    type: "split", 
    title: "Na Cidade: O Arquiteto", 
    content: "Ele desenha as fachadas e a sinalização. Decide que a placa de **'PARE'** precisa ser vermelha com letras brancas.", 
    highlight: "Define texturas nas calçadas para acessibilidade e cria uma identidade visual limpa.", 
    icon: Storefront 
  },
  { 
    id: 14, 
    type: "split", 
    title: "No Software: A Estética do UI", 
    content: "O UI Designer decide: 'Esse botão de confirmação vai ser **verde com cantos arredondados**'.", 
    highlight: "Usa a fonte **Inter tamanho 16** e um ícone de check para tornar o caminho óbvio.", 
    icon: LayoutTemplate 
  },
  { 
    id: 32, 
    type: "ui_components", 
    title: "UI na Prática", 
    subtitle: "A materialização dos componentes de interface."
  },
  {
    id: 33,
    type: "ux_vs_ui",
    title: "Principais diferenças entre UX e UI Design"
  },


  // --- LEIS E HEURÍSTICAS ---
  { id: 17, type: "statement", title: "GESTALT", subtitle: "Leis da Percepção Visual. A psicologia mostra como o ser humano organiza estímulos visuais.", colors: "from-blue-600 to-indigo-600", imageUrl: "/gestalt.png", imageFull: true, noAnimation: true },
  { id: 50, type: "principle_simulator", principleId: "gestalt_1", title: "1. Proximidade",   subtitle: "Elementos próximos são percebidos como parte do mesmo grupo." },
  { id: 51, type: "principle_simulator", principleId: "gestalt_2", title: "2. Similaridade",  subtitle: "Elementos com aparência similar são percebidos como relacionados." },
  { id: 52, type: "principle_simulator", principleId: "gestalt_3", title: "3. Figura-Fundo",  subtitle: "O olho separa automaticamente o que está em destaque do que é plano de fundo." },
  { id: 53, type: "principle_simulator", principleId: "gestalt_4", title: "4. Continuidade",  subtitle: "O olho segue linhas e padrões, preferindo caminhos contínuos." },
  { id: 54, type: "principle_simulator", principleId: "gestalt_5", title: "5. Fechamento",    subtitle: "O cérebro completa formas incompletas para criar uma percepção coesa." },
  { id: 55, type: "principle_simulator", principleId: "gestalt_6", title: "6. Pregnância",    subtitle: "O olho prefere formas simples, simétricas e organizadas — lei da boa forma." },
  { id: 56, type: "principle_simulator", principleId: "gestalt_7", title: "7. Simetria",      subtitle: "Elementos simétricos são percebidos como um conjunto harmônico e estável." },
  { id: 21, type: "statement", title: "HEURÍSTICAS DE NIELSEN", subtitle: "As 10 Leis da Usabilidade — o guia de ouro para interfaces digitais.", colors: "from-indigo-600 to-purple-600", icon: LayoutTemplate },
  { id: 40, type: "principle_simulator", principleId: "nielsen_1",  title: "1. Visibilidade do Status",             subtitle: "Sempre mantenha o usuário informado sobre o que está acontecendo." },
  { id: 41, type: "principle_simulator", principleId: "nielsen_2",  title: "2. Correspondência com o Mundo Real",  subtitle: "Use a linguagem do usuário, não a linguagem do sistema." },
  { id: 42, type: "principle_simulator", principleId: "nielsen_3",  title: "3. Controle e Liberdade do Usuário",   subtitle: "Ofereça sempre uma 'saída de emergência' para ações indesejadas." },
  { id: 43, type: "principle_simulator", principleId: "nielsen_4",  title: "4. Consistência e Padronização",       subtitle: "Siga convenções — o usuário não deve precisar adivinhar." },
  { id: 44, type: "principle_simulator", principleId: "nielsen_5",  title: "5. Prevenção de Erros",                subtitle: "Melhor do que boas mensagens de erro é impedir o problema de ocorrer." },
  { id: 45, type: "principle_simulator", principleId: "nielsen_6",  title: "6. Reconhecimento vs Memória",         subtitle: "Minimize a carga cognitiva: mostre, não obrigue o usuário a lembrar." },
  { id: 46, type: "principle_simulator", principleId: "nielsen_7",  title: "7. Eficiência e Flexibilidade",        subtitle: "Atalhos para experts, fluxo guiado para novatos." },
  { id: 47, type: "principle_simulator", principleId: "nielsen_8",  title: "8. Estética e Design Minimalista",     subtitle: "Cada informação que compete pela atenção diminui a importância das demais." },
  { id: 48, type: "principle_simulator", principleId: "nielsen_9",  title: "9. Recuperação Diante de Erros",       subtitle: "Erros devem ser explicados em linguagem simples e oferecer solução." },
  { id: 49, type: "principle_simulator", principleId: "nielsen_10", title: "10. Ajuda e Documentação",             subtitle: "Mesmo que o sistema não precise de documentação, ela deve existir e ser fácil de encontrar." },
  {
    id: 57,
    type: "qr_code",
    title: "Vamos testar o que aprendemos?",
    eyebrow: "Quiz Interativo — Blooket",
    subtitle: "Escaneie o QR Code ou acesse o link para entrar no quiz!",
    url: "https://play.blooket.com"
  },
];
