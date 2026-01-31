export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface ServiceCardProps {
  service: ServiceData;
  index?: number;
}