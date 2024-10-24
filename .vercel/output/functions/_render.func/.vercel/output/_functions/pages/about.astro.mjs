/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DvB1WwkK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dv7h_tJ1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About the project</h1> <p>The SpaceX launches project is a demo for the Astro course</p> ` })}`;
}, "C:/Users/USER/OneDrive/Escritorio/WebApps/curso-astro-demo/src/pages/about.astro", void 0);

const $$file = "C:/Users/USER/OneDrive/Escritorio/WebApps/curso-astro-demo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
