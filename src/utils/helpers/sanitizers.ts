/**
 * Remove caracteres perigosos de input
 * @param input - String para sanitizar
 * @returns String sanitizada
 * 
 * @example
 * sanitizeInput('<script>alert("xss")</script>') // 'scriptalert("xss")/script'
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');
}

/**
 * Sanitiza e normaliza email
 * @param email - Email para sanitizar
 * @returns Email em lowercase e sem espaços
 * 
 * @example
 * sanitizeEmail(' USER@EXAMPLE.COM ') // 'user@example.com'
 */
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Remove caracteres não numéricos
 * @param phone - Telefone para sanitizar
 * @returns Apenas números
 * 
 * @example
 * sanitizePhone('(11) 99999-9999') // '11999999999'
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Remove caracteres especiais de CPF
 * @param cpf - CPF para sanitizar
 * @returns Apenas números
 * 
 * @example
 * sanitizeCPF('123.456.789-00') // '12345678900'
 */
export function sanitizeCPF(cpf: string): string {
  return cpf.replace(/\D/g, '');
}

/**
 * Remove caracteres especiais de CNPJ
 * @param cnpj - CNPJ para sanitizar
 * @returns Apenas números
 * 
 * @example
 * sanitizeCNPJ('12.345.678/0001-00') // '12345678000100'
 */
export function sanitizeCNPJ(cnpj: string): string {
  return cnpj.replace(/\D/g, '');
}

/**
 * Remove caracteres especiais de CEP
 * @param cep - CEP para sanitizar
 * @returns Apenas números
 * 
 * @example
 * sanitizeCEP('03636-000') // '03636000'
 */
export function sanitizeCEP(cep: string): string {
  return cep.replace(/\D/g, '');
}

/**
 * Sanitiza URL
 * @param url - URL para sanitizar
 * @returns URL segura
 * 
 * @example
 * sanitizeUrl('javascript:alert(1)') // ''
 * sanitizeUrl('https://example.com') // 'https://example.com'
 */
export function sanitizeUrl(url: string): string {
  const trimmed = url.trim();
  
  // Bloqueia javascript: e data:
  if (/^(javascript|data):/i.test(trimmed)) {
    return '';
  }
  
  return trimmed;
}

/**
 * Remove HTML tags
 * @param html - String com HTML
 * @returns String sem tags HTML
 * 
 * @example
 * stripHtml('<p>Hello <b>World</b></p>') // 'Hello World'
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Escapa caracteres HTML especiais
 * @param text - Texto para escapar
 * @returns Texto com caracteres escapados
 * 
 * @example
 * escapeHtml('<script>alert("xss")</script>') 
 * // '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return text.replace(/[&<>"'/]/g, (char) => map[char]);
}