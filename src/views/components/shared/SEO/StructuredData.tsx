export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Prohabil Serviços Contábeis',
    image: 'https://www.prohabil.com.br/images/logo.jpg',
    '@id': 'https://www.prohabil.com.br',
    url: 'https://www.prohabil.com.br',
    telephone: '+55-11-4329-3129',
    priceRange: '$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Padre João, 444 - Conjuntos 111 e 112',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '03636-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505,
      longitude: -46.6333,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/prohabil',
      'https://www.instagram.com/prohabil',
      'https://www.linkedin.com/company/prohabil',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}