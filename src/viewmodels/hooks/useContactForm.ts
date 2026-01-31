import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormInput } from '@/models/schemas';

export function useContactForm() {
  return useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });
}