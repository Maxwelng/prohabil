/**
 * Valida CEP brasileiro
 * @param cep - CEP para validar
 * @returns true se válido
 * 
 * @example
 * isValidCEP('03636000') // true
 * isValidCEP('03636-000') // true
 * isValidCEP('123') // false
 */
export function isValidCEP(cep: string): boolean {
  const cleaned = cep.replace(/\D/g, '');
  return cleaned.length === 8;
}