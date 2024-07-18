/* empty css                         */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, o as createAstro, p as addAttribute, m as renderComponent } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { f as formatDate, H as HOMEPAGE_ARTICLE_LIMIT, $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { $ as $$SearchForm } from './SearchForm_DyebAXnQ.mjs';
import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';
import { $ as $$ArticleCard } from './ArticleCard_Cq0YpAhp.mjs';
import { a as $$ImageDinamic } from './Tags_NR0qbF-D.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$MostRecentArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MostRecentArticleTags;
  let tagsArray = Astro2.props.tagsArray;
  return renderTemplate`${tagsArray.map((tag) => renderTemplate`${maybeRenderHead()}<span class="px-2 py-1 border text-white rounded-full text-xs mr-2">${tag}</span>`)}`;
}, "D:/4_All/testProjects/astro 2024/src/components/MostRecentArticleTags.astro", void 0);

const $$Astro = createAstro();
const $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostRecentArticle;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> ${renderComponent($$result, "ImageDinamic", $$ImageDinamic, { "imgSrc": article.data.image, "alt": "Tech People Team", "title": "Article Image", "classString": "w-full h-auto rounded-2xl" })} <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4">${formatDate(article.data.pubDate)}</p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${renderComponent($$result, "MostRecentArticleTags", $$MostRecentArticleTags, { "tagsArray": article.data.tags })} </div> </div> </div> </a> </div>`;
}, "D:/4_All/testProjects/astro 2024/src/components/MostRecentArticle.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles, Stories, and Tutorials For Tech People" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">
Articles, Stories & Tutorials for Tech People
</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> <!-- Most Recent Article --> ${renderComponent($$result2, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })} </div>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/index.astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
