import React from "react";
import Head from "next/head";
import settings from "../../settings/seo.json";

interface SEOProps{
  type: string,
  title: string,
  description: string,
  image: string,
  keyword?: string
}

interface socialTagsType extends SEOProps{
  createdAt?:string,
  updatedAt?:string,
}

interface addJsonLdType{
  title:string,
  description:string,
  image:string,
  createdAt?:string
}

const socialTags = ({
  type,
  title,
  description,
  image,
  createdAt,
  updatedAt,
}:socialTagsType) => {
  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:image:src", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: type },
    { name: "og:image", content: image },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: settings && settings.meta && settings.meta.title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

// Structured Data and JSON-LD it facilitates the understanding of your pages to search engines.
const addJsonLd = ({ title, description, image, createdAt }:addJsonLdType) => {

  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Portfolio",
      "headline": ${JSON.stringify(`${title} - Portfolio`)},
      "datePublished": ${JSON.stringify(createdAt || new Date().toISOString())},
      "author": {
        "@type": "Person",
        "name": ${settings && settings.meta && JSON.stringify(settings.meta.author)}
        },
        "publisher": {
          "@type": "Blog",
          "name": ${settings && settings.meta && JSON.stringify(settings.meta.author)},
          "logo": {
          "@type": "ImageObject",
          "url": "https://kamalsoni.in/assets/icons/KML.png"
          }
          },
      "image": ${JSON.stringify(image)},
      "knowsAbout": "ReactJs Nextjs JS NodeJS Mongodb",
      "hasOccupation": {
      "@type": "Occupation",
      "name": "React Developer"
      },
      
      "description": ${JSON.stringify(description)}
      }`

  };
};

export const SEO = (props:SEOProps) => {
  const { title, description, image, keyword } = props;
  return (
    <Head>
      <title>{title} </title>
      <meta name="description" content={description} />
      {/* Avoid keyword stuffing: Don't include too many keywords in the meta tags */}
      <meta name="keywords" content={keyword} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd(props)}
        key="kamal-jsonld"
      />

      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
    </Head>
  );
};

SEO.defaultProps = {
  type: "article",
  title: settings && settings.meta && settings.meta.title,
  keyword: settings && settings.meta && settings.meta.keyword,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
};
