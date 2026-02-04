'use client';

import { useContactViewModel } from './Contact.viewmodel';
import { Input } from '@/views/components/ui/Input';
import { Textarea } from '@/views/components/ui/Textarea';
import { Button } from '@/views/components/ui/Button';
import { Send } from 'lucide-react';

export function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useContactViewModel();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Envie sua Mensagem
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Nome Completo"
          placeholder="Seu nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          error={errors.phone?.message}
          {...register('phone')}
        />

        <Textarea
          label="Mensagem"
          rows={4}
          placeholder="Como podemos ajudar?"
          error={errors.message?.message}
          {...register('message')}
        />

        <Button
          type="submit"
          loading={isSubmitting}
          className="w-full bg-gold text-white hover:brightness-110 focus:ring-gold"
          size="lg"
        >
          <span>Enviar Mensagem</span>
          <Send size={20} />
        </Button>

      </form>
    </div>
  );
}