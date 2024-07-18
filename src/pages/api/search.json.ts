import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get("query");

  // check if query is present
  let errorString = { error: "No query provided" };
  let responseError = {
    status: 400,
    headers: { "Content-Type": "application/json" },
  };
  let responseSuccess = {
    status: 200,
    headers: { "Content-Type": "application/json" },
  };

  // if query is not present
  if (query === null) {
    return new Response(JSON.stringify(errorString), responseError);
  }

  // if query is present
  const allBlogArticles: CollectionEntry<"blog">[] =
    await getCollection("blog");
  const allArticlesWithQuery: CollectionEntry<"blog">[] =
    allBlogArticles.filter((article) => {
      const TitleMatch = article.data.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const BodyMatch = article.body
        .toLowerCase()
        .includes(query.toLowerCase());
      const SlugMatch = article.slug
        .toLowerCase()
        .includes(query.toLowerCase());
      const TagsMatch = article.data.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase()),
      );
      return TitleMatch || BodyMatch || TagsMatch || SlugMatch;
    });
  return new Response(JSON.stringify(allArticlesWithQuery), responseSuccess);
};
