import { MDXOptions } from "@contentlayer/core";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkUnwrapImages from "remark-unwrap-images";

const mdxOptions: MDXOptions = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: "github-light",
      },
    ],
  ],
};
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    pid: { type: "string", required: true },
    thumbnail: { type: "string", required: true },
    description: { type: "string" },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => post._raw.flattenedPath },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post],
  mdx: mdxOptions,
});
