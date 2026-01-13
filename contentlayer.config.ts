import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/[^_]*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
      default: "Thibaut Gallien",
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    estimatedReadingTime: {
      type: "number",
      required: true,
    },
    featured: {
      type: "boolean",
      default: false,
    },
    metaTitle: {
      type: "string",
    },
    metaDescription: {
      type: "string",
    },
    keywords: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost],
  disableImportAliasWarning: true,
});
