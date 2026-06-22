import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as createAstro, a as addAttribute } from '../../../chunks/astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminBaseLayout } from '../../../chunks/AdminBaseLayout_BAIyjUq4.mjs';
import 'clsx';
import { $ as $$Icon } from '../../../chunks/Icon_BCeLazJ5.mjs';
export { renderers } from '../../../renderers.mjs';

const $$AdminMainHeader = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="h-16 flex items-center justify-between px-7 border-b border-black/7 bg-white shrink-0"> <div class="flex items-center gap-3"> <div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-amber-700"> <span id="header-initials" class="font-inter text-xs font-bold text-white">?</span> </div> <div> <p id="header-name" class="font-inter text-sm font-bold text-gray-900">Loading…</p> <p id="header-meta" class="font-inter text-[10px] text-gray-400"></p> </div> </div> <button id="close-ticket-btn" class="font-inter text-sm font-semibold text-gray-600 border border-black/12 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-40">
Close ticket
</button> </header> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminMainHeader.astro", void 0);

const $$AdminMainContents = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="messages-container" class="flex-1 overflow-y-auto px-7 py-6 space-y-4 bg-gray-50"></div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminMainContents.astro", void 0);

const $$AdminMainFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="main-footer" class="px-7 py-4 bg-white border-t border-black/7 shrink-0"> <div class="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-gray-50 border border-gray-200 focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-100 transition"> <input id="admin-input" type="text" placeholder="Type a reply..." class="font-inter flex-1 bg-transparent text-sm text-gray-800 focus:outline-none placeholder-gray-400"> <button id="admin-send-btn" class="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-700 text-white shrink-0 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-40"> ${renderComponent($$result, "Icon", $$Icon, { "name": "Send", "width": "13", "height": "13" })} </button> </div> </div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminMainFooter.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "AdminBaseLayout", $$AdminBaseLayout, { "title": `Chat ${id}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="chat-root"${addAttribute(id, "data-chat-id")} class="flex flex-col flex-1 overflow-hidden"> ${renderComponent($$result2, "AdminMainHeader", $$AdminMainHeader, {})} ${renderComponent($$result2, "AdminMainContents", $$AdminMainContents, {})} ${renderComponent($$result2, "AdminMainFooter", $$AdminMainFooter, {})} </div> ` })} `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/chats/[id].astro", void 0);

const $$file = "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/admin/chats/[id].astro";
const $$url = "/admin/chats/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
