import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  let errorString = { error: "No query provided" };
  let responseError = {
    status: 400,
    headers: { "Content-Type": "application/json" }
  };
  let responseSuccess = {
    status: 200,
    headers: { "Content-Type": "application/json" }
  };
  if (query === null) {
    return new Response(JSON.stringify(errorString), responseError);
  }
  const allBlogArticles = await getCollection("blog");
  const allArticlesWithQuery = allBlogArticles.filter((article) => {
    const TitleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const BodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const SlugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    const TagsMatch = article.data.tags.some(
      (tag) => tag.toLowerCase().includes(query.toLowerCase())
    );
    return TitleMatch || BodyMatch || TagsMatch || SlugMatch;
  });
  return new Response(JSON.stringify(allArticlesWithQuery), responseSuccess);
};

export { GET };
