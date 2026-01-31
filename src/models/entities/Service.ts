export class Service {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly icon: string,
    public readonly slug: string
  ) {}

  static fromData(data: {
    id: string;
    title: string;
    description: string;
    icon: string;
    slug: string;
  }): Service {
    return new Service(data.id, data.title, data.description, data.icon, data.slug);
  }
}