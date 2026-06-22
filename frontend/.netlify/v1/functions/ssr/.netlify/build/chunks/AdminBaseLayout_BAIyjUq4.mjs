import { c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as createAstro, e as renderHead, f as renderSlot } from './astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                        */
import { $ as $$Icon } from './Icon_BCeLazJ5.mjs';
import 'clsx';

const $$AdminSideHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-16 flex flex-col justify-center px-5 border-b border-black/5 shrink-0"> <div class="flex items-center gap-2"> <div class="w-6 h-6 rounded-md flex items-center justify-center bg-amber-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "Pizza", "width": "12", "height": "12", "color": "white" })} </div> <span class="font-barlow-condensed text-sm font-black uppercase tracking-wider">
S&amp;S Pizza
</span> </div> <p class="font-inter text-[10px] text-gray-400 pl-8">Support inbox</p> </header>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminSideHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$AdminSideMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminSideMain;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="px-5 py-2 border-b border-black/5 shrink-0"> <span class="font-inter text-xs font-bold uppercase tracking-widest text-gray-400">
All Tickets
</span> </div> <div id="ticket-list" class="flex-1 overflow-y-auto"></div> `;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminSideMain.astro", void 0);

const $$AdminSideFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-12 flex items-center justify-between px-5 border-t border-black/5 shrink-0"> <div class="flex items-center gap-2.5"> <div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center"> <span class="font-inter text-xs font-bold text-gray-600">A</span> </div> <span class="font-inter text-[13px] font-medium text-gray-700">Admin</span> </div> <button class="font-inter text-[12px] text-gray-400 hover:text-gray-700 flex items-center gap-1 transition-colors cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "LogOut", "width": "12", "height": "12" })}
Logout
</button> </div>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/admin/AdminSideFooter.astro", void 0);

const $$Astro = createAstro();
const $$AdminBaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminBaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Admin</title>${renderHead()}</head> <body class="h-screen flex overflow-hidden bg-gray-50 font-inter text-gray-800"> <!-- Mobile sidebar overlay --> <div id="sidebar-overlay" class="fixed inset-0 bg-black/40 z-20 hidden md:hidden"></div> <aside id="sidebar" class="fixed md:relative z-30 md:z-auto -translate-x-full md:translate-x-0 transition-transform duration-200 w-72 md:w-80 h-full shrink-0 flex flex-col bg-white border-r border-black/5"> ${renderComponent($$result, "AdminSideHeader", $$AdminSideHeader, {})} ${renderComponent($$result, "AdminSideMain", $$AdminSideMain, {})} ${renderComponent($$result, "AdminSideFooter", $$AdminSideFooter, {})} </aside> <main class="flex-1 flex flex-col overflow-hidden min-w-0"> <!-- Mobile top bar --> <div class="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-black/7 shrink-0"> <button id="sidebar-toggle" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> <span class="font-barlow-condensed text-sm font-black uppercase tracking-wider">S&S Pizza</span> </div> ${renderSlot($$result, $$slots["default"])} </main>  </body></html>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/layouts/AdminBaseLayout.astro", void 0);

export { $$AdminBaseLayout as $ };
