export const WELCOME_CONFIG = {
  // Audio ambiente
  audio: {
    src: '/audio/tavern-ambient.m4a',
    volume: 0.3,
  },

  // Durações da cinemática (ms)
  timing: {
    stormAlone: 300,       // State 1: só tempestade
    lightAppears: 300,     // State 2: luz distante
    cameraApproach: 400,   // State 3: câmera se aproxima
    doorVisible: 300,      // State 4: porta à vista
    doorIdle: 200,         // State 5: porta visível, aguarda clique
    doorOpening: 300,      // State 6-7: porta abrindo
    lightTransition: 300,  // State 8-9: luz invade tela
    tavernReveal: 500,     // State 10-12: taverna revelada, pausa
    blogTransition: 500,   // State 13-15: taverna vira interface
  },

  // Nevasca — 6 camadas
  snow: {
    far: { count: 300, sizeMin: 0.5, sizeMax: 1.5, speedMin: 0.2, speedMax: 0.5, windMin: 0.1, windMax: 0.4, alphaMin: 0.08, alphaMax: 0.2 },
    mid: { count: 200, sizeMin: 1.0, sizeMax: 2.5, speedMin: 0.5, speedMax: 1.0, windMin: 0.3, windMax: 0.8, alphaMin: 0.15, alphaMax: 0.4 },
    near: { count: 80, sizeMin: 2.0, sizeMax: 5.0, speedMin: 1.0, speedMax: 2.0, windMin: 0.5, windMax: 1.5, alphaMin: 0.3, alphaMax: 0.6 },
    gusts: { count: 40, sizeMin: 3.0, sizeMax: 8.0, speedMin: 2.0, speedMax: 4.0, windMin: 1.0, windMax: 3.0, alphaMin: 0.1, alphaMax: 0.3 },
    blur: { count: 15, sizeMin: 6.0, sizeMax: 12.0, speedMin: 1.5, speedMax: 3.0, windMin: 1.0, windMax: 2.0, alphaMin: 0.06, alphaMax: 0.18 },
    fog: { count: 8, sizeMin: 20.0, sizeMax: 40.0, speedMin: 0.1, speedMax: 0.3, windMin: 0.05, windMax: 0.15, alphaMin: 0.03, alphaMax: 0.1 },
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

  // Taverna (pós-transição)
  tavern: {
    warmOverlayDuration: 2000,
  },
};
