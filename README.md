This is a [Kamal Soni](https://kamalsoni.in/) open source Project [`Colloborate Now`](https://kamalsoni.in/collaborate).

# Nextjs Fast SEO

Nextjs Fast SEO is a plugin that streamlines SEO management for Next.js projects.

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

`NextFastSeo` works by including it on pages where you would like SEO attributes to be added. Once included on the page you pass it a configuration object with the page's SEO properties. This can be dynamically generated at a page level or in some cases your API may return an SEO object.

### Setup

First, install it:

```bash
npm i nextjs-fast-seo
```

or

```bash
yarn add nextjs-fast-seo
```

### Add SEO to Page

Then you need to import `NextFastSeo` and add the desired properties. This will render out the tags in the `<head>` for SEO. At a bare minimum, you should add a title and description.

**Example with just title,keyword(optional) and description:**

```jsx
import { NextFastSeo } from 'nextjs-fast-seo';

const Page = () => (
  <>
   <NextFastSeo title="tesst-Collaborate"
    description="Explore my contributions to the open source community as a skilled Frontend React Developer."
    keyword="frontend development, react, web development, open source, collaboration, community"/>
    <p>Testing Example</p>
  </>
);

export default Page;
```
