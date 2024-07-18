import { k as createComponent, l as renderTemplate, n as maybeRenderHead, p as addAttribute, o as createAstro } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BackToAllArticles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackToAllArticles;
  const { link, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">${title}</a>`;
}, "D:/4_All/testProjects/astro 2024/src/components/BackToAllArticles.astro", void 0);

export { $$BackToAllArticles as $ };
