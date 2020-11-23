import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  desc: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDesc?: string;
  ogImageUrl?: string;
  ogUrl: string;
  ogContentType?: string;
}

const Meta: React.FC<Props> = ({
  title,
  desc,
  canonicalUrl,
  ogTitle,
  ogDesc,
  ogImageUrl,
  ogUrl,
  ogContentType = 'website',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:type" content={ogContentType} />
      <meta name="og:title" property="og:title" content={ogTitle || title} />
      <meta
        name="og:description"
        property="og:description"
        content={ogDesc || desc}
      />
      <meta property="og:site_name" content="Uncle Sam Figure Skating Club" />
      <meta property="og:url" content={ogUrl || canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta
        property="og:image"
        content={ogImageUrl || '/unc-sam-logo-bg.png'}
      />
    </Head>
  );
};

export default Meta;
