export const WELCOME_CONFIG = {
  // Quantidade de dias até a tela de boas-vindas ser exibida novamente
  daysUntilShowAgain: 2,
  
  // Configurações de áudio ambiente
  audio: {
    // Caminho para o arquivo de áudio
    src: '/audio/tavern-ambient.m4a',
    // Volume inicial (0.0 a 1.0)
    volume: 0.35,
    // Tenta tocar automaticamente (sujeito às políticas do navegador)
    autoplay: true,
  },
  
  // Configurações das animações
  animation: {
    // Duração total da cinemática de entrada em milissegundos
    duration: 3000, 
  },
  
  // Configurações do sistema de partículas (neve)
  particles: {
    // Quantidade de flocos na tela (menos = mais leve)
    count: 320,
    // Tamanho base dos flocos
    size: 2,
    // Multiplicador de velocidade de queda
    speed: 1.05,
    // Intensidade do vento lateral em rajadas
    wind: 1.6,
    // Frequência da variação de vento
    gust: 1.35,
  },
  
  // Textos da interface
  text: {
    button: 'Entrar na Taverna',
    skip: 'Pular introdução pelos próximos',
    skipDays: 'dias',
  }
};
