import { ContactFormInput } from '@/models/schemas';
import { Contact } from '@/models/entities/Contact';

export class ContactService {
  private readonly endpoint = '/api/contact';

  async sendContact(data: ContactFormInput): Promise<void> {
    const contact = new Contact(data.name, data.email, data.phone, data.message);

    // Aqui você pode integrar com API externa (ex: Resend, SendGrid)
    // Por enquanto, simula envio
    await this.simulateApiCall(contact);
  }

  private async simulateApiCall(contact: Contact): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact sent:', contact.toJSON());
        resolve();
      }, 1500);
    });
  }
}