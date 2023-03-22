import React from "react";
import Head from "next/head";
import settings from "../../settings/seo";
import type { SEOProps } from "src/interface";
import { socialTags } from "./meta/socialTags";
import { addJsonLd } from "./jsonld/addJsonLd";

export const SEO = (props:SEOProps) => {
  const { title } = props;
  return (
    <Head>
      <title>{title} </title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd(props,settings)}
        key="kamal-jsonld"
      />

      {socialTags(props,settings).map(({ name, content ,itemProp}) => {
        return <meta key={name} {...(name && {name:name})}  {...(itemProp && {itemProp:itemProp})} content={content}  />;
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
