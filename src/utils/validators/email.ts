/**
 * Valida formato de email
 * @param email - Email para validar
 * @returns true se válido
 * 
 * @example
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid-email') // false
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida email com regex mais rigoroso
 * @param email - Email para validar
 * @returns true se válido
 * 
 * @example
 * isValidEmailStrict('user@example.com') // true
 * isValidEmailStrict('user@invalid') // false
 */
export function isValidEmailStrict(email: string): boolean {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}

/**
 * Verifica se email é de domínio descartável
 * @param email - Email para verificar
 * @returns true se for descartável
 * 
 * @example
 * isDisposableEmail('user@tempmail.com') // true
 * isDisposableEmail('user@gmail.com') // false
 */
export function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email',
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  return disposableDomains.includes(domain);
}