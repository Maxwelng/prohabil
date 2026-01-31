/**
 * Formata número de telefone brasileiro
 * @param phone - Número de telefone (pode conter caracteres especiais)
 * @returns Telefone formatado (11) 99999-9999 ou (11) 9999-9999
 * 
 * @example
 * formatPhone('11999999999') // '(11) 99999-9999'
 * formatPhone('1199999999') // '(11) 9999-9999'
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
}

/**
 * Formata valor monetário em Real brasileiro
 * @param value - Valor numérico
 * @returns Valor formatado R$ 1.234,56
 * 
 * @example
 * formatCurrency(1234.56) // 'R$ 1.234,56'
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata data no padrão brasileiro
 * @param date - Data (Date ou string ISO)
 * @returns Data formatada DD/MM/AAAA
 * 
 * @example
 * formatDate(new Date()) // '26/01/2024'
 * formatDate('2024-01-26') // '26/01/2024'
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-BR').format(d);
}

/**
 * Formata data com hora no padrão brasileiro
 * @param date - Data (Date ou string ISO)
 * @returns Data formatada DD/MM/AAAA HH:MM
 * 
 * @example
 * formatDateTime(new Date()) // '26/01/2024 14:30'
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(d);
}

/**
 * Formata CPF
 * @param cpf - CPF (apenas números)
 * @returns CPF formatado 000.000.000-00
 * 
 * @example
 * formatCPF('12345678900') // '123.456.789-00'
 */
export function formatCPF(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) return cpf;
  
  return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9)}`;
}

/**
 * Formata CNPJ
 * @param cnpj - CNPJ (apenas números)
 * @returns CNPJ formatado 00.000.000/0000-00
 * 
 * @example
 * formatCNPJ('12345678000100') // '12.345.678/0001-00'
 */
export function formatCNPJ(cnpj: string): string {
  const cleaned = cnpj.replace(/\D/g, '');
  if (cleaned.length !== 14) return cnpj;
  
  return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12)}`;
}

/**
 * Formata CEP
 * @param cep - CEP (apenas números)
 * @returns CEP formatado 00000-000
 * 
 * @example
 * formatCEP('03636000') // '03636-000'
 */
export function formatCEP(cep: string): string {
  const cleaned = cep.replace(/\D/g, '');
  if (cleaned.length !== 8) return cep;
  
  return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
}

/**
 * Trunca texto e adiciona reticências
 * @param text - Texto para truncar
 * @param maxLength - Tamanho máximo
 * @returns Texto truncado
 * 
 * @example
 * truncateText('Lorem ipsum dolor sit amet', 10) // 'Lorem ipsu...'
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Capitaliza primeira letra de cada palavra
 * @param text - Texto para capitalizar
 * @returns Texto capitalizado
 * 
 * @example
 * capitalize('joão da silva') // 'João Da Silva'
 */
export function capitalize(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Gera slug a partir de texto
 * @param text - Texto para converter
 * @returns Slug URL-friendly
 * 
 * @example
 * slugify('Abertura de Empresas') // 'abertura-de-empresas'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}