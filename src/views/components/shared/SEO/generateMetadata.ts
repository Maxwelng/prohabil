import { Metadata } from 'next';
import { SITE_METADATA } from '@/utils/constants/metadata';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  ogImage,
  path = '',
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_METADATA.name}` : SITE_METADATA.title;
  const pageDescription = description || SITE_METADATA.description;
  const pageKeywords = keywords || [...SITE_METADATA.keywords];
  const canonicalUrl = `${SITE_METADATA.url}${path}`;
  const imageUrl = ogImage || SITE_METADATA.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: SITE_METADATA.name }],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_METADATA.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}