import type { addJsonLdType, defaultMetaType } from "src/interface";

// Structured Data and JSON-LD it facilitates the understanding of your pages to search engines.
export const addJsonLd = ({ title, description, image, createdAt }: addJsonLdType, settings: defaultMetaType) => {

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