import { Question, CategoryInfo } from '@/types/quiz';

export const categories: CategoryInfo[] = [
  {
    id: 'basico',
    name: 'Informática Básica',
    icon: 'Monitor',
    description: 'Conceitos fundamentais de computação',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'hardware',
    name: 'Hardware',
    icon: 'Cpu',
    description: 'Componentes físicos do computador',
    color: 'from-orange-500 to-amber-400',
  },
  {
    id: 'software',
    name: 'Software',
    icon: 'AppWindow',
    description: 'Programas e aplicações',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 'sistemas',
    name: 'Sistemas Operacionais',
    icon: 'Settings',
    description: 'Windows, Linux, macOS e mais',
    color: 'from-purple-500 to-violet-400',
  },
  {
    id: 'redes',
    name: 'Internet e Redes',
    icon: 'Wifi',
    description: 'Conectividade e protocolos',
    color: 'from-pink-500 to-rose-400',
  },
  {
    id: 'programacao',
    name: 'Programação',
    icon: 'Code',
    description: 'Lógica e linguagens de programação',
    color: 'from-indigo-500 to-blue-400',
  },
];

export const questions: Question[] = [
  // Informática Básica
  {
    id: 'b1',
    question: 'O que significa a sigla CPU?',
    options: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Computer Processing Utility',
    ],
    correctAnswer: 0,
    category: 'basico',
  },
  {
    id: 'b2',
    question: 'Qual é a função principal do mouse?',
    options: [
      'Digitar textos',
      'Reproduzir áudio',
      'Apontar e clicar na tela',
      'Armazenar arquivos',
    ],
    correctAnswer: 2,
    category: 'basico',
  },
  {
    id: 'b3',
    question: 'O que é um arquivo?',
    options: [
      'Um componente de hardware',
      'Um conjunto de dados armazenados',
      'Um tipo de processador',
      'Uma conexão de internet',
    ],
    correctAnswer: 1,
    category: 'basico',
  },
  {
    id: 'b4',
    question: 'Qual atalho é usado para copiar um arquivo?',
    options: ['Ctrl + V', 'Ctrl + X', 'Ctrl + C', 'Ctrl + Z'],
    correctAnswer: 2,
    category: 'basico',
  },
  {
    id: 'b5',
    question: 'O que é um desktop?',
    options: [
      'Um tipo de laptop',
      'A área de trabalho do computador',
      'Um programa antivírus',
      'Um navegador web',
    ],
    correctAnswer: 1,
    category: 'basico',
  },

  // Hardware
  {
    id: 'h1',
    question: 'Qual componente é considerado o "cérebro" do computador?',
    options: ['Memória RAM', 'Processador (CPU)', 'Disco Rígido', 'Placa de vídeo'],
    correctAnswer: 1,
    category: 'hardware',
  },
  {
    id: 'h2',
    question: 'O que armazena dados de forma volátil?',
    options: ['SSD', 'HD', 'Memória RAM', 'Pendrive'],
    correctAnswer: 2,
    category: 'hardware',
  },
  {
    id: 'h3',
    question: 'Qual a função da placa-mãe?',
    options: [
      'Processar gráficos',
      'Conectar todos os componentes',
      'Armazenar o sistema operacional',
      'Produzir som',
    ],
    correctAnswer: 1,
    category: 'hardware',
  },
  {
    id: 'h4',
    question: 'O que significa SSD?',
    options: [
      'Solid State Drive',
      'Super Speed Disk',
      'System Storage Device',
      'Secure Software Data',
    ],
    correctAnswer: 0,
    category: 'hardware',
  },
  {
    id: 'h5',
    question: 'Qual componente é responsável por exibir imagens na tela?',
    options: ['Processador', 'Memória RAM', 'Placa de vídeo (GPU)', 'Fonte de alimentação'],
    correctAnswer: 2,
    category: 'hardware',
  },

  // Software
  {
    id: 's1',
    question: 'O que é um software?',
    options: [
      'Um componente físico',
      'Um programa de computador',
      'Um tipo de cabo',
      'Uma placa eletrônica',
    ],
    correctAnswer: 1,
    category: 'software',
  },
  {
    id: 's2',
    question: 'Qual é um exemplo de navegador web?',
    options: ['Word', 'Excel', 'Chrome', 'Photoshop'],
    correctAnswer: 2,
    category: 'software',
  },
  {
    id: 's3',
    question: 'O que é um antivírus?',
    options: [
      'Um hardware de proteção',
      'Um software de proteção contra malwares',
      'Um tipo de vírus',
      'Um navegador seguro',
    ],
    correctAnswer: 1,
    category: 'software',
  },
  {
    id: 's4',
    question: 'Qual software é usado para editar textos?',
    options: ['Photoshop', 'VLC', 'Microsoft Word', 'WinRAR'],
    correctAnswer: 2,
    category: 'software',
  },
  {
    id: 's5',
    question: 'O que são aplicativos móveis?',
    options: [
      'Programas para computadores desktop',
      'Softwares para smartphones e tablets',
      'Componentes de hardware',
      'Sistemas operacionais',
    ],
    correctAnswer: 1,
    category: 'software',
  },

  // Sistemas Operacionais
  {
    id: 'so1',
    question: 'Qual é o sistema operacional desenvolvido pela Microsoft?',
    options: ['Linux', 'macOS', 'Windows', 'Android'],
    correctAnswer: 2,
    category: 'sistemas',
  },
  {
    id: 'so2',
    question: 'Qual sistema é de código aberto?',
    options: ['Windows', 'macOS', 'Linux', 'iOS'],
    correctAnswer: 2,
    category: 'sistemas',
  },
  {
    id: 'so3',
    question: 'O que é o BIOS?',
    options: [
      'Um sistema operacional',
      'Um programa de inicialização do computador',
      'Um navegador web',
      'Um editor de texto',
    ],
    correctAnswer: 1,
    category: 'sistemas',
  },
  {
    id: 'so4',
    question: 'Qual sistema é usado em iPhones?',
    options: ['Android', 'Windows Mobile', 'iOS', 'Linux'],
    correctAnswer: 2,
    category: 'sistemas',
  },
  {
    id: 'so5',
    question: 'O que é multitarefa em sistemas operacionais?',
    options: [
      'Executar apenas um programa por vez',
      'Executar vários programas simultaneamente',
      'Usar múltiplos monitores',
      'Ter várias contas de usuário',
    ],
    correctAnswer: 1,
    category: 'sistemas',
  },

  // Internet e Redes
  {
    id: 'r1',
    question: 'O que significa WWW?',
    options: [
      'World Wide Web',
      'Web World Wide',
      'Wireless Web World',
      'World Wireless Web',
    ],
    correctAnswer: 0,
    category: 'redes',
  },
  {
    id: 'r2',
    question: 'O que é um endereço IP?',
    options: [
      'Um tipo de senha',
      'Um identificador único de dispositivo na rede',
      'Um navegador web',
      'Um tipo de cabo de rede',
    ],
    correctAnswer: 1,
    category: 'redes',
  },
  {
    id: 'r3',
    question: 'Qual protocolo é usado para sites seguros?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctAnswer: 2,
    category: 'redes',
  },
  {
    id: 'r4',
    question: 'O que é Wi-Fi?',
    options: [
      'Um tipo de cabo de rede',
      'Tecnologia de rede sem fio',
      'Um navegador web',
      'Um sistema operacional',
    ],
    correctAnswer: 1,
    category: 'redes',
  },
  {
    id: 'r5',
    question: 'O que faz um roteador?',
    options: [
      'Armazena arquivos na nuvem',
      'Direciona o tráfego de rede entre dispositivos',
      'Processa gráficos 3D',
      'Executa programas antivírus',
    ],
    correctAnswer: 1,
    category: 'redes',
  },

  // Programação
  {
    id: 'p1',
    question: 'O que é uma variável em programação?',
    options: [
      'Um tipo de erro',
      'Um espaço na memória para armazenar dados',
      'Uma função matemática',
      'Um tipo de loop',
    ],
    correctAnswer: 1,
    category: 'programacao',
  },
  {
    id: 'p2',
    question: 'Qual linguagem é usada principalmente para páginas web?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 2,
    category: 'programacao',
  },
  {
    id: 'p3',
    question: 'O que é um loop (laço)?',
    options: [
      'Um erro de programação',
      'Uma estrutura que repete código',
      'Um tipo de variável',
      'Uma função de saída',
    ],
    correctAnswer: 1,
    category: 'programacao',
  },
  {
    id: 'p4',
    question: 'O que faz o comando "if" em programação?',
    options: [
      'Repete um código',
      'Declara uma variável',
      'Executa código condicionalmente',
      'Finaliza o programa',
    ],
    correctAnswer: 2,
    category: 'programacao',
  },
  {
    id: 'p5',
    question: 'O que é um algoritmo?',
    options: [
      'Um tipo de hardware',
      'Uma sequência de passos para resolver um problema',
      'Uma linguagem de programação',
      'Um sistema operacional',
    ],
    correctAnswer: 1,
    category: 'programacao',
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter((q) => q.category === category);
};

export const getRandomQuestions = (count: number = 5): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
