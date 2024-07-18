/* empty css                         */
import { k as createComponent, l as renderTemplate, m as renderComponent, o as createAstro, n as maybeRenderHead } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { c as capitalise, $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { $ as $$ArticleCard } from './ArticleCard_Cq0YpAhp.mjs';
import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';
import { $ as $$BackToAllArticles } from './BackToAllArticles_Cak5haJj.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const tagArticles = allBlogArticles.filter((article) => article.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "All Articles with your tag" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackToAllArticles", $$BackToAllArticles, { "link": "/articles", "title": "All Articles" })} ${maybeRenderHead()}<h1 class="text-2xl pb-3">#${capitalise(tag)}</h1>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

export { $$ as default, $$file as file, $$url as url };
