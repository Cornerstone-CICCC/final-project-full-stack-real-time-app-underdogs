import { c as createComponent, e as renderHead, r as renderTemplate } from '../../chunks/astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login | S&S Pizza</title>${renderHead()}</head> <body class="min-h-screen flex items-center justify-center bg-gray-50 font-inter"> <div class="w-full max-w-sm bg-white rounded-2xl shadow-xl p-10"> <div class="flex items-center gap-2 mb-8"> <div class="w-7 h-7 rounded-md bg-amber-700 flex items-center justify-center text-white text-xs font-black">
S
</div> <span class="font-barlow-condensed text-base font-black uppercase tracking-wider">
S&amp;S Pizza
</span> </div> <h1 class="font-barlow-condensed text-3xl font-black tracking-wider mb-1">Admin login</h1> <p class="text-sm text-gray-400 mb-8">Support inbox access only.</p> <div id="error-msg" class="hidden mb-4 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm"></div> <div class="space-y-4 mb-6"> <div> <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">Email</label> <input type="email" id="email" placeholder="admin@admin.com" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50 placeholder-gray-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition"> </div> <div> <label for="password" class="block text-sm font-semibold text-gray-700 mb-1">Password</label> <input type="password" id="password" placeholder="••••••••" class="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-50 placeholder-gray-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition"> </div> </div> <button id="login-btn" class="w-full bg-amber-700 text-white font-semibold text-sm rounded-xl py-3 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50">
Sign in
</button> </div> </body></html>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/login.astro", void 0);

const $$file = "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
