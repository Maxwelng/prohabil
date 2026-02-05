import { ContactFormInput } from '@/models/schemas';

export class ContactService {
  private readonly endpoint = '/api/contact';

  async sendContact(data: ContactFormInput): Promise<void> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar contato');
    }
  }
}
