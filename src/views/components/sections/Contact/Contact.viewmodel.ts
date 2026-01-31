import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormInput } from '@/models/schemas';
import { ContactService } from '@/viewmodels/services';
import { useState } from 'react';

const contactService = new ContactService();

export function useContactViewModel() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    try {
      await contactService.sendContact(data);
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      reset();
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}