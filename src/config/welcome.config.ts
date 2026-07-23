export const WELCOME_CONFIG = {
  // A experiência volta a ser exibida depois deste período.
  daysUntilShowAgain: 2,

  // Audio ambiente
  audio: {
    src: '/audio/tavern-ambient.m4a',
    volume: 0.3,
  },

  // Durações da cinemática (ms)
  timing: {
    stormAlone: 3000,
    lightAppears: 3000,
    cameraApproach: 4000,
    doorVisible: 3000,
    doorOpening: 3000,
    lightTransition: 3000,
    crossing: 3000,
    stormBehind: 3000,
    tavernReveal: 5000,
    cameraAdjust: 3000,
    pauseMoment: 5000,
    blogTransition: 5000,
    interfaceReveal: 5000,
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
