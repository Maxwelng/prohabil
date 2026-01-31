/**
 * Valida telefone brasileiro
 * @param phone - Telefone para validar
 * @returns true se válido
 * 
 * @example
 * isValidPhone('11999999999') // true
 * isValidPhone('1199999999') // true
 * isValidPhone('123') // false
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/**
 * Valida se telefone é celular (9 dígitos)
 * @param phone - Telefone para validar
 * @returns true se for celular
 * 
 * @example
 * isCellPhone('11999999999') // true
 * isCell Phone('1133334444') // false
 */
export function isCellPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 11 && cleaned[2] === '9';
}

/**
 * Valida DDD brasileiro
 * @param ddd - DDD para validar
 * @returns true se válido
 * 
 * @example
 * isValidDDD('11') // true
 * isValidDDD('00') // false
 */
export function isValidDDD(ddd: string): boolean {
  const validDDDs = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', // SP
    '21', '22', '24', // RJ
    '27', '28', // ES
    '31', '32', '33', '34', '35', '37', '38', // MG
    '41', '42', '43', '44', '45', '46', // PR
    '47', '48', '49', // SC
    '51', '53', '54', '55', // RS
    '61', // DF
    '62', '64', // GO
    '63', // TO
    '65', '66', // MT
    '67', // MS
    '68', // AC
    '69', // RO
    '71', '73', '74', '75', '77', // BA
    '79', // SE
    '81', '87', // PE
    '82', // AL
    '83', // PB
    '84', // RN
    '85', '88', // CE
    '86', '89', // PI
    '91', '93', '94', // PA
    '92', '97', // AM
    '95', // RR
    '96', // AP
    '98', '99', // MA
  ];
  
  return validDDDs.includes(ddd);
}