import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

	// input directory
	eleventyConfig.setInputDirectory('src');

	// Layout Aliases
	eleventyConfig.addLayoutAlias("base", "base.njk");

	// CSS
	eleventyConfig.addPassthroughCopy("src/base.css");
};