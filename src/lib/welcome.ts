import { WELCOME_CONFIG } from '../config/welcome.config';

const COOKIE_NAME = 'rnm_welcome_last_seen';

/**
 * Retorna true se a tela de boas-vindas deve ser pulada (cookie válido).
 * Sendo executado no cliente.
 */
export function shouldSkipWelcome(): boolean {
  if (typeof document === 'undefined') return false; // Safety fallback for SSR
  
  const cookies = document.cookie.split(';');
  const welcomeCookie = cookies.find(c => c.trim().startsWith(`${COOKIE_NAME}=`));
  
  if (!welcomeCookie) return false;
  
  const timestampStr = welcomeCookie.split('=')[1];
  const lastSeen = parseInt(timestampStr, 10);
  
  if (isNaN(lastSeen)) return false;
  
  const now = Date.now();
  const daysInMs = WELCOME_CONFIG.daysUntilShowAgain * 24 * 60 * 60 * 1000;
  
  return (now - lastSeen) < daysInMs;
}

/**
 * Define o cookie registrando que o usuário viu a tela de boas-vindas.
 */
export function setWelcomeSeenCookie(): void {
  if (typeof document === 'undefined') return;
  
  const now = Date.now();
  // Cookie expira em (daysUntilShowAgain + 1) para garantir
  const maxAge = (WELCOME_CONFIG.daysUntilShowAgain + 1) * 24 * 60 * 60;
  
  document.cookie = `${COOKIE_NAME}=${now}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

/**
 * Pula a introdução manualmente gravando o cookie imediatamente
 */
export function skipWelcomeNow(): void {
  setWelcomeSeenCookie();
  window.location.assign('/index');
}
