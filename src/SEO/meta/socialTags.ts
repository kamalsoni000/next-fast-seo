import type { defaultMetaType, socialTagsType } from "src/interface";

export const socialTags = (
  {
    type,
    title,
    description,
    image,
    createdAt,
    updatedAt,
    ...extra
  }: socialTagsType,
  settings: defaultMetaType
) => {
  const metaTags = [
    { itemProp:"name", content:title },
    { itemProp:"description", content:description },
    { itemProp:"image", content:image },
    { name: "keywords", content: extra?.keyword },
    { name: "description", content: description },
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
