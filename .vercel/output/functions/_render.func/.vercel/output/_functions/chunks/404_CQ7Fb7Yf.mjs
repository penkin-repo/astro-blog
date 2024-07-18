/* empty css                         */
import { k as createComponent, l as renderTemplate, m as renderComponent, n as maybeRenderHead } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CYPwEh1D.mjs';
import error from './error-404_Do8IOp95.mjs';
import { $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> ${renderComponent($$result2, "Image", $$Image, { "src": error, "alt": "404", "width": 250, "height": 250 })} <h1 class="text-5xl">Page Not Found</h1> <p class="text-2xl mb-10">
Sorry!
</p> <a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white bg">Go Back Home</a> </div> ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/404.astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
