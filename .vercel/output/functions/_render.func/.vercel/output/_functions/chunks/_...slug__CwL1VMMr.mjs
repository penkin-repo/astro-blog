/* empty css                         */
import { k as createComponent, l as renderTemplate, m as renderComponent, o as createAstro, n as maybeRenderHead } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { f as formatDate, $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { a as getEntry } from './_astro_content_D97xw6Wm.mjs';
import { $ as $$Tags, a as $$ImageDinamic } from './Tags_NR0qbF-D.mjs';
import { $ as $$BackToAllArticles } from './BackToAllArticles_Cak5haJj.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("No slug provided");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackToAllArticles", $$BackToAllArticles, { "link": "/articles", "title": "All Articles" })} ${maybeRenderHead()}<article> <h1 class="text-4xl font-bold mb-2">${entry.data.title}</h1> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3> <div class="flex flex-wrap gap-2 mb-6"> ${renderComponent($$result2, "Tags", $$Tags, { "tagsArray": entry.data.tags })} </div> ${renderComponent($$result2, "ImageDinamic", $$ImageDinamic, { "imgSrc": entry.data.image, "alt": "Article Image", "title": "Article Image", "classString": "w-full h-auto rounded-xl mb-6" })} ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
}, "D:/4_All/testProjects/astro 2024/src/pages/articles/[...slug].astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

export { $$ as default, $$file as file, $$url as url };
