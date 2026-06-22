import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, f as renderSlot, a as addAttribute, b as createAstro, e as renderHead } from '../chunks/astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                */
import 'clsx';
import { $ as $$Icon, L as LoaderCircle } from '../chunks/Icon_BCeLazJ5.mjs';
export { renderers } from '../renderers.mjs';

const $$ClientHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between px-10 py-4 border-b border-black/10"> <span class="text-lg font-barlow-condensed uppercase tracking-widest shrink-0">
Stupid &amp; Slow Pizza
</span> <a href="/admin/login" class="font-inter text-sm text-taupe-400 hover:text-taupe-300">
Admin Login
</a> </header>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/client/ClientHeader.astro", void 0);

const $$ClientFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="font-inter flex items-center justify-between px-10 py-4 border-t border-amber-900/20 bg-amber-500/10"> <div class="flex items-center gap-3"> <!-- Pizza icon --> <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-amber-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "Pizza", "width": "16", "height": "16", "color": "white" })} </div> <p class="text-sm">
Having a problem with your order?
<span class="font-semibold">Our support team is here to help.</span> </p> </div> <button data-modal-btn class="px-6 py-3 rounded-md text-white text-sm font-semibold transition-opacity hover:opacity-90 bg-amber-700 cursor-pointer">
Chat with us
</button> </footer>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/client/ClientFooter.astro", void 0);

const $$ModalWrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal-wrapper" class="hidden fixed inset-0 items-center justify-center z-50 bg-black/45 backdrop-blur-sm"> <div id="modal-inner" class="w-full max-w-100 transition-[max-width] duration-300 ease-in-out"> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/modal/ModalWrapper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { id, disabled = false, type = "button", class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(type, "type")}${addAttribute(disabled, "disabled")}${addAttribute([
    "relative font-inter text-sm font-semibold py-3 rounded-md transition-all",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    "not-disabled:hover:opacity-90 not-disabled:cursor-pointer",
    className
  ], "class:list")}> <span class="btn-label flex items-center justify-center"> ${renderSlot($$result, $$slots["default"])} </span> <span class="btn-spinner hidden absolute inset-0 items-center justify-center"> ${renderComponent($$result, "LoaderCircle", LoaderCircle, { "class": "animate-spin h-4 w-4" })} </span> </button>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/common/Button.astro", void 0);

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="register-content" class="hidden relative bg-white rounded-2xl shadow-2xl p-10 w-full"> <button data-modal-btn class="absolute top-4 right-4 text-taupe-400 hover:text-taupe-600 transition-colors p-1 cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "X", "width": "18", "height": "18" })} </button> <h2 class="font-barlow-condensed text-3xl font-black mb-2 tracking-wider">Open a ticket</h2> <p class="font-inter text-sm text-taupe-500 mb-4">
Tell us your name to start chatting with an agent.
</p> <div class="space-y-4 mb-8"> <div> <label for="first-name" class="block font-inter text-sm font-semibold text-taupe-700 mb-1">
First name
</label> <input type="text" id="first-name" name="firstName" placeholder="e.g. Margherita" class="font-inter w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-taupe-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition"> </div> <div> <label for="last-name" class="block font-inter text-sm font-semibold text-taupe-700 mb-1">
Last name
</label> <input type="text" id="last-name" name="lastName" placeholder="e.g. Romano" class="font-inter w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-taupe-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition"> </div> </div> ${renderComponent($$result, "Button", $$Button, { "id": "start-chat-btn", "disabled": true, "class": "w-full bg-amber-700 text-white" }, { "default": async ($$result2) => renderTemplate`Start chat` })} </div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/modal/Register.astro", void 0);

const $$Chat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="chat-content" class="hidden overflow-hidden rounded-2xl shadow-2xl flex-col h-3/5 min-h-120 w-full"> <header class="flex items-center justify-between px-5 py-4 bg-amber-700 shrink-0"> <div class="flex items-center gap-3"> <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-inter text-sm font-bold text-white">
SA
</div> <div> <p class="font-inter text-sm font-semibold text-white leading-none">Support Agent</p> <p id="connection-status" class="font-inter text-xs text-orange-200 mt-0.5 flex items-center gap-1.5"> <span class="w-1.5 h-1.5 rounded-full bg-green-300 inline-block"></span>
Ticket opened
</p> </div> </div> <button class="text-orange-200 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer" data-modal-btn> ${renderComponent($$result, "Icon", $$Icon, { "name": "X", "width": "18", "height": "18" })} </button> </header> <!-- Messages --> <div id="messages-container" class="flex-1 overflow-y-auto px-5 py-5 space-y-3 bg-gray-50"></div> <!-- Input --> <div class="px-4 py-4 bg-white border-t border-black/[0.07] shrink-0"> <div class="flex items-center gap-2.5 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-100 transition"> <input id="chat-input" type="text" placeholder="Type a message…" class="font-inter flex-1 bg-transparent text-sm text-taupe-900 focus:outline-none placeholder-gray-400"> <button id="send-btn" class="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-700 text-white shrink-0 hover:opacity-90 transition-opacity cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "Send", "width": "13", "height": "13" })} </button> </div> </div> </div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/modal/Chat.astro", void 0);

const $$Astro = createAstro();
const $$ClientBaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientBaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Stupid & Slow Pizza</title>${renderHead()}</head> <body class="min-h-screen bg-taupe-50 text-taupe-800 flex flex-col"> ${renderComponent($$result, "ModalWrapper", $$ModalWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Register", $$Register, {})} ${renderComponent($$result2, "Chat", $$Chat, {})} ` })} ${renderComponent($$result, "ClientHeader", $$ClientHeader, {})} <main class="flex-1 px-10 py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "ClientFooter", $$ClientFooter, {})} </body></html>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/layouts/ClientBaseLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ClientBaseLayout", $$ClientBaseLayout, { "title": "HOME" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center justify-center w-auto gap-10"> <div class="flex flex-col items-start justify-center gap-4 max-w-80"> <p class="font-inter text-sm font-bold text-amber-700 uppercase tracking-widest">
Wood-Fired · Neapolitan Style
</p> <h1 class="font-barlow-condensed text-7xl font-black uppercase tracking-widest">
Stupid<br>
Good.<br>
Slow<br>
Made.
</h1> <div class="font-barlow text-sm text-taupe-500 leading-relaxed"> <p>
Hand-stretched dough, San Marzano tomatoes,<br>
fresh buffalo mozzarella — baked in a 900°F wood-fired oven for that perfect leopard-spotted
          char.
</p> <div class="h-px w-full bg-black/10 my-2"></div> <p>
Every pizza is made to order — no shortcuts, no frozen dough.<br>
We're slow because we care, and that's exactly how we like it.
</p> </div> </div> <div class="flex items-center justify-center py-2"> <img src="https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=900&h=900&fit=crop&auto=format" alt="Neapolitan margherita pizza" class="object-contain drop-shadow-2xl max-w-120 max-h-120 w-full"> </div> </div> ` })}`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
