/* empty css                         */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, p as addAttribute, o as createAstro, m as renderComponent } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { A as ARTICLE_PER_PAGE, $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';
import { $ as $$ArticleCard } from './ArticleCard_Cq0YpAhp.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, disablePrevious, disableNext } = Astro2.props;
  const buttonStatus = {
    active: "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg",
    disable: "inline-block bg-gray-100 opacity-50 px-3 py-2 text-gray-400 pointer-events-none rounded-lg"
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? buttonStatus.disable : buttonStatus.active, "class")}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? buttonStatus.disable : buttonStatus.active, "class")}>
Next
</a> </div>`;
}, "D:/4_All/testProjects/astro 2024/src/components/pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLE_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLE_PER_PAGE, currentPage * ARTICLE_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "All Articles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div>  ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/articles/index.astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/articles/index.astro";
const $$url = "/articles";

export { $$Index as default, $$file as file, $$url as url };
