export class Contact {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly message: string,
    public readonly createdAt: Date = new Date()
  ) {
    this.validate();
  }

  private validate(): void {
    if (this.name.trim().length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres');
    }
    if (this.message.trim().length < 10) {
      throw new Error('Mensagem deve ter no mínimo 10 caracteres');
    }
  }

  toJSON() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message,
      createdAt: this.createdAt.toISOString(),
    };
  }
}