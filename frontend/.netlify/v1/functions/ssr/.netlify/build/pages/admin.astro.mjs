import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminBaseLayout } from '../chunks/AdminBaseLayout_BAIyjUq4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminBaseLayout", $$AdminBaseLayout, { "title": "Admin" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 flex items-center justify-center"> <div class="text-center"> <p class="font-inter text-sm text-gray-400">Select a ticket to get started</p> </div> </div> ` })} `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/index.astro", void 0);

const $$file = "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
