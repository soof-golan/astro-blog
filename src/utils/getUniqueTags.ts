import type { MDXInstance } from "astro";
import type { Frontmatter } from "../types";
import { slugifyStr } from "./slugify";

const getUniqueTags = (posts: MDXInstance<Frontmatter>[]) => {
	let tags: string[] = [];
	const filteredPosts = posts.filter(({ frontmatter }) => !frontmatter.draft);
	filteredPosts.forEach((post) => {
		tags = [...tags, ...post.frontmatter.tags]
			.map((tag) => slugifyStr(tag))
			.filter(
				(value: string, index: number, self: string[]) =>
					self.indexOf(value) === index,
			);
	});
	return tags;
};

export default getUniqueTags;
