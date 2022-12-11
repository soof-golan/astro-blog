import { SITE } from "src/config";
import rss from "@astrojs/rss";
import type { Frontmatter } from "src/types";
import type { MDXInstance } from "astro";
import slugify from "@utils/slugify";

const postImportResult = import.meta.glob<MDXInstance<Frontmatter>>(
  "../contents/**/**/*.md{x,}",
  {
    eager: true,
  }
);
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts
      .filter(({ frontmatter }) => !frontmatter.draft)
      .map(({ frontmatter }) => ({
        link: `posts/${slugify(frontmatter)}`,
        title: frontmatter.title,
        description: frontmatter.description,
        pubDate: new Date(frontmatter.datetime),
      })),
  });
