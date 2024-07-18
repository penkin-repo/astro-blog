import { k as createComponent, l as renderTemplate, m as renderComponent, o as createAstro, n as maybeRenderHead, p as addAttribute } from './astro/server_BIqDSRx3.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CYPwEh1D.mjs';
import 'clsx';
import { c as capitalise } from './MainLayout_CWfZXVhK.mjs';

const $$Astro$1 = createAstro();
const $$ImageDinamic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageDinamic;
  const { imgSrc, alt, title, classString } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../images/about.jpg": () => import('./about_DZmARCdo.mjs'),"../images/error-404.png": () => import('./error-404_Do8IOp95.mjs'),"../images/image1.png": () => import('./image1_CP-a9KQH.mjs'),"../images/image2.png": () => import('./image2_B7YxTKZr.mjs'),"../images/image3.png": () => import('./image3_Buwv-ljq.mjs'),"../images/image4.png": () => import('./image4_D8BLyIMT.mjs'),"../images/image5.png": () => import('./image5_Dijaplxa.mjs'),"../images/image6.png": () => import('./image6_Divj9ytt.mjs'),"../images/image7.png": () => import('./image7_CzZWpSJG.mjs'),"../images/logo.png": () => import('./MainLayout_CWfZXVhK.mjs').then(n => n.l),"../images/team1.png": () => import('./team1_CpLiCg9M.mjs'),"../images/team2.png": () => import('./team2_BmPpUTnj.mjs'),"../images/team3.png": () => import('./MainLayout_CWfZXVhK.mjs').then(n => n.a)});
  let imageMain = {
    default: {
      src: "",
      width: 0,
      height: 0,
      format: "jpg"
    },
    [Symbol.toStringTag]: "ImageMain"
  };
  if (images[`../images/${imgSrc}`]) {
    const imageData = await images[`../images/${imgSrc}`]();
    imageMain = {
      default: imageData.default,
      [Symbol.toStringTag]: "ImageMain"
    };
  } else {
    console.error("Error loading image:");
  }
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageMain.default, "alt": alt, "class": classString, "title": title, "widths": [240, 540, 720, imageMain.default.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${imageMain.default.width}px` })}`;
}, "D:/4_All/testProjects/astro 2024/src/components/ImageDinamic.astro", void 0);

const $$Astro = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  let tagsArray = Astro2.props.tagsArray;
  return renderTemplate`${tagsArray.map((tag, index) => renderTemplate`${maybeRenderHead()}<span${addAttribute(
    index % 2 === 0 ? "px-3 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90" : "px-3 py-1 bg-indigo-500 text-white rounded-full text-xs hover:opacity-90",
    "class"
  )}><a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalise(tag)}</a></span>`)}`;
}, "D:/4_All/testProjects/astro 2024/src/components/Tags.astro", void 0);

export { $$Tags as $, $$ImageDinamic as a };
