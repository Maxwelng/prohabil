import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, 'Telefone inválido')
    .or(z.string().min(10, 'Telefone inválido')),
  message: z
    .string()
    .min(10, 'Mensagem deve ter no mínimo 10 caracteres')
    .max(1000, 'Mensagem muito longa'),
});

export type ContactFormInput = z.infer<typeof contactSchema>;