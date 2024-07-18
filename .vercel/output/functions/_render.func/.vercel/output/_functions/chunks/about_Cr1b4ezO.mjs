/* empty css                         */
import { k as createComponent, l as renderTemplate, m as renderComponent, n as maybeRenderHead } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { t as team3, $ as $$MainLayout } from './MainLayout_CWfZXVhK.mjs';
import { $ as $$Image } from './_astro_assets_CYPwEh1D.mjs';
import aboutImage from './about_DZmARCdo.mjs';
import team1 from './team1_CpLiCg9M.mjs';
import team2 from './team2_BmPpUTnj.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About TechPeople" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-5">About TechPeople</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutImage, "alt": "Tech People Team", "loading": "eager", "class": "w-full h-auto rounded-lg shadow-lg", "widths": [240, 540, 720, aboutImage.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${aboutImage.width}px` })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
Who We Are
</h2> <p class="text-gray-700 leading-relaxed mb-6">
We are Tech People, a passionate team of tech enthusiasts
                dedicated to bringing you the latest news, articles, and
                tutorials on all things technology.
</p> <p class="text-gray-700 leading-relaxed mb-6">
Our mission is to empower and educate our readers, helping them
                stay up-to-date with the rapidly evolving world of technology.
                Whether you're a seasoned developer, a gadget enthusiast, or
                just curious about the latest tech trends, we've got you
                covered.
</p> </div> </div>  <div class="mt-10 mb-10"> <h2 class="text-3xl font-extrabold text-gray-900 mb-5">Our Team</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team1, "alt": "Team Member 1", "class": "w-full h-auto", "loading": "eager", "widths": [240, 540, 720, team1.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${team1.width}px` })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">
John Doe
</h3> <p class="text-gray-70">Founder & Editor-in-Chief</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team2, "alt": "Team Member 2", "class": "w-full h-auto", "loading": "eager", "widths": [240, 540, 720, team2.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${team2.width}px` })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Paul Newman
</h3> <p class="text-gray-70">Lead Writer</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team3, "alt": "Team Member 2", "class": "w-full h-auto", "loading": "eager", "widths": [240, 540, 720, team3.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${team3.width}px` })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Johanna Johnson
</h3> <p class="text-gray-70">Tech Analyst</p> </div> </div> </div> </div> ` })}`;
}, "D:/4_All/testProjects/astro 2024/src/pages/about.astro", void 0);

const $$file = "D:/4_All/testProjects/astro 2024/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
