import { k as createComponent, l as renderTemplate, n as maybeRenderHead, p as addAttribute, m as renderComponent, o as createAstro } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { a as $$ImageDinamic, $ as $$Tags } from './Tags_NR0qbF-D.mjs';
import { f as formatDate } from './MainLayout_CWfZXVhK.mjs';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md mx-auto mt-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg"> <a${addAttribute("/articles/" + article.slug, "href")}> ${renderComponent($$result, "ImageDinamic", $$ImageDinamic, { "imgSrc": article.data.image, "alt": "Tech People Team", "title": "Tech People Team", "classString": "w-full h-auto rounded-lg shadow-lg" })} </a> <div class="p-6"> <h2 class="text-2xl font-semibold mb-2"> <a${addAttribute("/articles/" + article.slug, "href")}> ${article.data.title} </a> </h2> <p class="text-gray-600 text-sm mb-4"> ${formatDate(article.data.pubDate)} </p> <div class="flex flex-wrap gap-2"> ${renderComponent($$result, "Tags", $$Tags, { "tagsArray": article.data.tags })} </div> </div> </div> </div>`;
}, "D:/4_All/testProjects/astro 2024/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
