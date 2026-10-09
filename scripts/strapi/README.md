# Blog → Strapi migration

Target: https://strapi.sacramento.valle.us, collection `password-generator-post`
(REST path `/api/password-generator-posts`). Fields sent per post: `title`, `slug`,
`excerpt`, `content` (markdown), and the repeatable `SEO` component
(`metaTitle`, `metDescription`, `metaKeywords`). `featuredImage` is left empty.

```bash
node scripts/strapi/extract-posts.mjs                  # src/app/blog -> scripts/strapi/posts/*.json
STRAPI_TOKEN=... ./scripts/strapi/migrate.sh           # create posts whose slug is missing
STRAPI_TOKEN=... UPDATE=1 ./scripts/strapi/migrate.sh  # also overwrite existing slugs
DRY_RUN=1 ./scripts/strapi/migrate.sh                  # print the curl calls only
```

The token needs `find`, `create` and `update` on the collection. Override the
collection with `CONTENT_TYPE=` and the host with `STRAPI_URL=`.
