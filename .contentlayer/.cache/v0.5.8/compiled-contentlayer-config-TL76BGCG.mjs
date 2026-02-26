// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    coverImage: { type: "string", required: true },
    category: { type: "string", required: true },
    tags: { type: "json", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").pop()
    },
    readingTimeMinutes: {
      type: "number",
      resolve: (doc) => {
        const raw = typeof doc.body?.raw === "string" ? doc.body.raw : "";
        const words = raw.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.round(words / 200));
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TL76BGCG.mjs.map
