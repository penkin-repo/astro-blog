import { k as createComponent, l as renderTemplate, n as maybeRenderHead, m as renderComponent, p as addAttribute, q as renderSlot, s as renderHead, o as createAstro } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CYPwEh1D.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_D97xw6Wm.mjs';

const SITE_TITLE = "Tech People Blog";
const SITE_DESCRIPTION = "Articles, Stories, and Tutorials For Tech People";
const HOMEPAGE_ARTICLE_LIMIT = 6;
const ARTICLE_PER_PAGE = 3;
const NAVBAR_LINKS = [
  { title: "Home", path: "/" },
  { title: "All Articles", path: "/articles" },
  { title: "About", path: "/about" }
];

const logo = new Proxy({"src":"/_astro/logo.Bp-tjQcT.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/logo.png";
							}
							
							return target[name];
						}
					});

const logo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logo
}, Symbol.toStringTag, { value: 'Module' }));

const team3 = new Proxy({"src":"/_astro/team3.B0njnFun.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/4_All/testProjects/astro 2024/src/images/team3.png";
							}
							
							return target[name];
						}
					});

const team3$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: team3
}, Symbol.toStringTag, { value: 'Module' }));

const $$LogoMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "class": "h-14", "alt": "TechPeople Logo", "width": 55, "height": 55, "widths": [240, 540, 720, team3.width], "loading": "eager", "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${logo.width}px` })} <span class="self-center text-2xl font-semibold whitespace-nowrap"><span class="text-indigo-400">Tech</span>People</span> </a>`;
}, "D:/4_All/testProjects/astro 2024/src/components/LogoMain.astro", void 0);

const $$NavbarList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700"> ${NAVBAR_LINKS.map((link) => renderTemplate`<li> <a${addAttribute(link.path, "href")} class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400" aria-current="page">${link.title}</a> </li>`)} </ul>`;
}, "D:/4_All/testProjects/astro 2024/src/components/NavbarList.astro", void 0);

const $$NavbarBurger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button>`;
}, "D:/4_All/testProjects/astro 2024/src/components/NavbarBurger.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-900 text-white"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> ${renderComponent($$result, "LogoMain", $$LogoMain, {})} ${renderComponent($$result, "NavbarBurger", $$NavbarBurger, {})} <div class="hidden w-full md:block md:w-auto" id="navbar-default"> ${renderComponent($$result, "NavbarList", $$NavbarList, {})} </div> </div> </nav>`;
}, "D:/4_All/testProjects/astro 2024/src/components/Navbar.astro", void 0);

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalise(string) {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = await getCollection("blog");
  const allTagsUnique = [...new Set(allBlogArticles.flatMap((article) => article.data.tags))];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-indigo-900 text-white py-10"> <div class="container mx-auto max-w-screen-xl px-8"> <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">About</h3> <p class="text-white text-sm">
TechPeople is a blog for tech enthusiasts. We publish articles,
                    stories and tutorials about the latest technology trends and
                    advancements.
</p> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Categories</h3> <ul class="text-white text-sm"> ${allTagsUnique.map((tag) => renderTemplate`<li class="mb-2"> <a${addAttribute("/articles/tag/" + tag, "href")}>${capitalise(tag)}</a> </li>`)} </ul> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Contact</h3> <ul class="text-white text-sm"> <li class="mb-2"> <a href="https://twitter.com">Email</a> </li> <li class="mb-2"> <a href="https://twitter.com">Twitter</a> </li> <li class="mb-2"> <a href="https://twitter.com">Facebook</a> </li> <li class="mb-2"> <a href="https://twitter.com">Instagram</a> </li> </ul> </div> </div> </div> </footer>`;
}, "D:/4_All/testProjects/astro 2024/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  let { title = "Articles, Stories, and Tutorials For Tech People" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>', " - ", "</title>", '</head> <body class=""> ', ' <section class="container mx-auto max-w-screen-xl mt-10 mb-10 px-8"> ', " </section> ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/4_All/testProjects/astro 2024/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, ARTICLE_PER_PAGE as A, HOMEPAGE_ARTICLE_LIMIT as H, team3$1 as a, capitalise as c, formatDate as f, logo$1 as l, team3 as t };
