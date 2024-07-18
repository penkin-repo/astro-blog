/* empty css                         */
import { k as createComponent, l as renderTemplate, m as renderComponent, o as createAstro, n as maybeRenderHead } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';
import { $ as $$SearchForm } from './SearchForm_DyebAXnQ.mjs';
import { $ as $$ArticleCard } from './ArticleCard_Cq0YpAhp.mjs';
import { $ as $$BackToAllArticles } from './BackToAllArticles_Cak5haJj.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const allArticlesWithQuery = allBlogArticles.filter((article) => {
    const TitleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const BodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const SlugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    const TagsMatch = article.data.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
    return TitleMatch || BodyMatch || TagsMatch || SlugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackToAllArticles", $$BackToAllArticles, { "link": "/articles", "title": "All Articles" })} ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} ${maybeRenderHead()}<h1 class="text-2xl pb-3 pt-6">Result for "${query}"</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${allArticlesWithQuery.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/articles/search.astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/articles/search.astro";
const $$url = "/articles/search";

export { $$Search as default, $$file as file, $$url as url };
