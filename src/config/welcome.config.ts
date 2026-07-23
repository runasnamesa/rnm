export const WELCOME_CONFIG = {
  // A experiência volta a ser exibida depois deste período (em dias).
  daysUntilShowAgain: 2,

  // Áudio ambiente
  audio: {
    src: '/audio/tavern-ambient.m4a',
    volume: 0.3,
  },

  // Durações da cinemática em milissegundos conforme o roteiro oficial (15 estados)
  timing: {
    stormAlone: 3000,        // Beat 1: 0 - 3s
    lightAppears: 3000,      // Beat 2: 3 - 6s
    cameraApproach: 4000,    // Beat 3: 6 - 10s
    doorVisible: 3000,       // Beat 4: 10 - 13s
    doorIdle: 2000,          // Beat 5: 13 - 15s (Aguarda clique/tap do usuário)
    doorOpening: 3000,       // Beat 6: 15 - 18s
    lightInvades: 3000,      // Beat 7: 18 - 21s
    crossing: 3000,          // Beat 8: 21 - 24s
    stormBehind: 3000,       // Beat 9: 24 - 27s
    tavernReveal: 5000,      // Beat 10: 27 - 32s
    cameraAdjust: 3000,      // Beat 11: 32 - 35s
    pauseMoment: 5000,       // Beat 12: 35 - 40s
    blogTransition: 5000,    // Beat 13: 40 - 45s
    interfaceReveal: 5000,   // Beat 14: 45 - 50s
    readyToExplore: 1000,    // Beat 15: 50s+
  },

  // Nevasca — 6 camadas otimizadas
  snow: {
    far: { count: 180, sizeMin: 0.5, sizeMax: 1.5, speedMin: 0.2, speedMax: 0.5, windMin: 0.1, windMax: 0.4, alphaMin: 0.08, alphaMax: 0.2 },
    mid: { count: 120, sizeMin: 1.0, sizeMax: 2.5, speedMin: 0.5, speedMax: 1.0, windMin: 0.3, windMax: 0.8, alphaMin: 0.15, alphaMax: 0.4 },
    near: { count: 50, sizeMin: 2.0, sizeMax: 4.5, speedMin: 1.0, speedMax: 2.0, windMin: 0.5, windMax: 1.5, alphaMin: 0.3, alphaMax: 0.6 },
    gusts: { count: 25, sizeMin: 3.0, sizeMax: 7.0, speedMin: 2.0, speedMax: 4.0, windMin: 1.0, windMax: 3.0, alphaMin: 0.1, alphaMax: 0.3 },
    blur: { count: 10, sizeMin: 6.0, sizeMax: 10.0, speedMin: 1.5, speedMax: 3.0, windMin: 1.0, windMax: 2.0, alphaMin: 0.06, alphaMax: 0.18 },
    fog: { count: 6, sizeMin: 20.0, sizeMax: 35.0, speedMin: 0.1, speedMax: 0.3, windMin: 0.05, windMax: 0.15, alphaMin: 0.03, alphaMax: 0.1 },
  },

  // Câmera
  camera: {
    swayAmplitude: 4,    // px
    swaySpeed: 0.3,      // Hz
    breathAmplitude: 2,  // px
    breathSpeed: 0.15,   // Hz
  },

  // Porta
  door: {
    width: 24,          // % da viewport
    height: 60,         // % da viewport
    glowIntensity: 0.3,
    lightLeak: 0.15,
  },
};
