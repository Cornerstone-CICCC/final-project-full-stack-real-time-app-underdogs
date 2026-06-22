import { c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, d as renderComponent, r as renderTemplate, f as renderSlot, b as createAstro } from './astro/server_CyVwWIS6.mjs';
import 'kleur/colors';
import 'html-escaper';

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const $$Astro$1 = createAstro();
const $$Icon$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon$1;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...!hasA11yProp(rest) && { "aria-hidden": "true" },
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/node_modules/@lucide/astro/src/Icon.astro", void 0);

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon$1,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const AArrowDown = createLucideIcon("a-arrow-down", [["path", { "d": "m14 12 4 4 4-4" }], ["path", { "d": "M18 16V7" }], ["path", { "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }], ["path", { "d": "M3.304 13h6.392" }]]);

const AArrowUp = createLucideIcon("a-arrow-up", [["path", { "d": "m14 11 4-4 4 4" }], ["path", { "d": "M18 16V7" }], ["path", { "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }], ["path", { "d": "M3.304 13h6.392" }]]);

const ALargeSmall = createLucideIcon("a-large-small", [["path", { "d": "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" }], ["path", { "d": "M15.697 14h5.606" }], ["path", { "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }], ["path", { "d": "M3.304 13h6.392" }]]);

const Accessibility = createLucideIcon("accessibility", [["circle", { "cx": "16", "cy": "4", "r": "1" }], ["path", { "d": "m18 19 1-7-6 1" }], ["path", { "d": "m5 8 3-3 5.5 3-2.36 3.5" }], ["path", { "d": "M4.24 14.5a5 5 0 0 0 6.88 6" }], ["path", { "d": "M13.76 17.5a5 5 0 0 0-6.88-6" }]]);

const Activity = createLucideIcon("activity", [["path", { "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]]);

const Ad = createLucideIcon("ad", [["path", { "d": "M10 13H6" }], ["path", { "d": "M10 15v-4a2 2 0 0 0-4 0v4" }], ["path", { "d": "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }], ["rect", { "x": "2", "y": "5", "width": "20", "height": "14", "rx": "2" }]]);

const Airplay = createLucideIcon("airplay", [["path", { "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }], ["path", { "d": "m12 15 5 6H7Z" }]]);

const AirVent = createLucideIcon("air-vent", [["path", { "d": "M18 17.5a2.5 2.5 0 1 1-4 2.03V12" }], ["path", { "d": "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M6 8h12" }], ["path", { "d": "M6.6 15.572A2 2 0 1 0 10 17v-5" }]]);

const AlarmClockCheck = createLucideIcon("alarm-clock-check", [["circle", { "cx": "12", "cy": "13", "r": "8" }], ["path", { "d": "M5 3 2 6" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.38 18.7 4 21" }], ["path", { "d": "M17.64 18.67 20 21" }], ["path", { "d": "m9 13 2 2 4-4" }]]);

const AlarmClockMinus = createLucideIcon("alarm-clock-minus", [["circle", { "cx": "12", "cy": "13", "r": "8" }], ["path", { "d": "M5 3 2 6" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.38 18.7 4 21" }], ["path", { "d": "M17.64 18.67 20 21" }], ["path", { "d": "M9 13h6" }]]);

const AlarmClockOff = createLucideIcon("alarm-clock-off", [["path", { "d": "M6.87 6.87a8 8 0 1 0 11.26 11.26" }], ["path", { "d": "M19.9 14.25a8 8 0 0 0-9.15-9.15" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.26 18.67 4 21" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M4 4 2 6" }]]);

const AlarmClockPlus = createLucideIcon("alarm-clock-plus", [["circle", { "cx": "12", "cy": "13", "r": "8" }], ["path", { "d": "M5 3 2 6" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.38 18.7 4 21" }], ["path", { "d": "M17.64 18.67 20 21" }], ["path", { "d": "M12 10v6" }], ["path", { "d": "M9 13h6" }]]);

const AlarmClock = createLucideIcon("alarm-clock", [["circle", { "cx": "12", "cy": "13", "r": "8" }], ["path", { "d": "M12 9v4l2 2" }], ["path", { "d": "M5 3 2 6" }], ["path", { "d": "m22 6-3-3" }], ["path", { "d": "M6.38 18.7 4 21" }], ["path", { "d": "M17.64 18.67 20 21" }]]);

const AlarmSmoke = createLucideIcon("alarm-smoke", [["path", { "d": "M11 21c0-2.5 2-2.5 2-5" }], ["path", { "d": "M16 21c0-2.5 2-2.5 2-5" }], ["path", { "d": "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }], ["path", { "d": "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }], ["path", { "d": "M6 21c0-2.5 2-2.5 2-5" }]]);

const Album = createLucideIcon("album", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["polyline", { "points": "11 3 11 11 14 8 17 11 17 3" }]]);

const AlignCenterHorizontal = createLucideIcon("align-center-horizontal", [["path", { "d": "M2 12h20" }], ["path", { "d": "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }], ["path", { "d": "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }], ["path", { "d": "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }], ["path", { "d": "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]]);

const AlignCenterVertical = createLucideIcon("align-center-vertical", [["path", { "d": "M12 2v20" }], ["path", { "d": "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }], ["path", { "d": "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }], ["path", { "d": "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }], ["path", { "d": "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]]);

const AlignEndHorizontal = createLucideIcon("align-end-horizontal", [["rect", { "width": "6", "height": "16", "x": "4", "y": "2", "rx": "2" }], ["rect", { "width": "6", "height": "9", "x": "14", "y": "9", "rx": "2" }], ["path", { "d": "M22 22H2" }]]);

const AlignEndVertical = createLucideIcon("align-end-vertical", [["rect", { "width": "16", "height": "6", "x": "2", "y": "4", "rx": "2" }], ["rect", { "width": "9", "height": "6", "x": "9", "y": "14", "rx": "2" }], ["path", { "d": "M22 22V2" }]]);

const AlignHorizontalDistributeCenter = createLucideIcon("align-horizontal-distribute-center", [["rect", { "width": "6", "height": "14", "x": "4", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "14", "y": "7", "rx": "2" }], ["path", { "d": "M17 22v-5" }], ["path", { "d": "M17 7V2" }], ["path", { "d": "M7 22v-3" }], ["path", { "d": "M7 5V2" }]]);

const AlignHorizontalDistributeEnd = createLucideIcon("align-horizontal-distribute-end", [["rect", { "width": "6", "height": "14", "x": "4", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "14", "y": "7", "rx": "2" }], ["path", { "d": "M10 2v20" }], ["path", { "d": "M20 2v20" }]]);

const AlignHorizontalDistributeStart = createLucideIcon("align-horizontal-distribute-start", [["rect", { "width": "6", "height": "14", "x": "4", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "14", "y": "7", "rx": "2" }], ["path", { "d": "M4 2v20" }], ["path", { "d": "M14 2v20" }]]);

const AlignHorizontalJustifyCenter = createLucideIcon("align-horizontal-justify-center", [["rect", { "width": "6", "height": "14", "x": "2", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "16", "y": "7", "rx": "2" }], ["path", { "d": "M12 2v20" }]]);

const AlignHorizontalJustifyEnd = createLucideIcon("align-horizontal-justify-end", [["rect", { "width": "6", "height": "14", "x": "2", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "12", "y": "7", "rx": "2" }], ["path", { "d": "M22 2v20" }]]);

const AlignHorizontalJustifyStart = createLucideIcon("align-horizontal-justify-start", [["rect", { "width": "6", "height": "14", "x": "6", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "16", "y": "7", "rx": "2" }], ["path", { "d": "M2 2v20" }]]);

const AlignHorizontalSpaceAround = createLucideIcon("align-horizontal-space-around", [["rect", { "width": "6", "height": "10", "x": "9", "y": "7", "rx": "2" }], ["path", { "d": "M4 22V2" }], ["path", { "d": "M20 22V2" }]]);

const AlignHorizontalSpaceBetween = createLucideIcon("align-horizontal-space-between", [["rect", { "width": "6", "height": "14", "x": "3", "y": "5", "rx": "2" }], ["rect", { "width": "6", "height": "10", "x": "15", "y": "7", "rx": "2" }], ["path", { "d": "M3 2v20" }], ["path", { "d": "M21 2v20" }]]);

const AlignStartHorizontal = createLucideIcon("align-start-horizontal", [["rect", { "width": "6", "height": "16", "x": "4", "y": "6", "rx": "2" }], ["rect", { "width": "6", "height": "9", "x": "14", "y": "6", "rx": "2" }], ["path", { "d": "M22 2H2" }]]);

const AlignStartVertical = createLucideIcon("align-start-vertical", [["rect", { "width": "9", "height": "6", "x": "6", "y": "14", "rx": "2" }], ["rect", { "width": "16", "height": "6", "x": "6", "y": "4", "rx": "2" }], ["path", { "d": "M2 2v20" }]]);

const AlignVerticalDistributeCenter = createLucideIcon("align-vertical-distribute-center", [["path", { "d": "M22 17h-3" }], ["path", { "d": "M22 7h-5" }], ["path", { "d": "M5 17H2" }], ["path", { "d": "M7 7H2" }], ["rect", { "x": "5", "y": "14", "width": "14", "height": "6", "rx": "2" }], ["rect", { "x": "7", "y": "4", "width": "10", "height": "6", "rx": "2" }]]);

const AlignVerticalDistributeEnd = createLucideIcon("align-vertical-distribute-end", [["rect", { "width": "14", "height": "6", "x": "5", "y": "14", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "4", "rx": "2" }], ["path", { "d": "M2 20h20" }], ["path", { "d": "M2 10h20" }]]);

const AlignVerticalDistributeStart = createLucideIcon("align-vertical-distribute-start", [["rect", { "width": "14", "height": "6", "x": "5", "y": "14", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "4", "rx": "2" }], ["path", { "d": "M2 14h20" }], ["path", { "d": "M2 4h20" }]]);

const AlignVerticalJustifyCenter = createLucideIcon("align-vertical-justify-center", [["rect", { "width": "14", "height": "6", "x": "5", "y": "16", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "2", "rx": "2" }], ["path", { "d": "M2 12h20" }]]);

const AlignVerticalJustifyEnd = createLucideIcon("align-vertical-justify-end", [["rect", { "width": "14", "height": "6", "x": "5", "y": "12", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "2", "rx": "2" }], ["path", { "d": "M2 22h20" }]]);

const AlignVerticalJustifyStart = createLucideIcon("align-vertical-justify-start", [["rect", { "width": "14", "height": "6", "x": "5", "y": "16", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "6", "rx": "2" }], ["path", { "d": "M2 2h20" }]]);

const AlignVerticalSpaceAround = createLucideIcon("align-vertical-space-around", [["rect", { "width": "10", "height": "6", "x": "7", "y": "9", "rx": "2" }], ["path", { "d": "M22 20H2" }], ["path", { "d": "M22 4H2" }]]);

const AlignVerticalSpaceBetween = createLucideIcon("align-vertical-space-between", [["rect", { "width": "14", "height": "6", "x": "5", "y": "15", "rx": "2" }], ["rect", { "width": "10", "height": "6", "x": "7", "y": "3", "rx": "2" }], ["path", { "d": "M2 21h20" }], ["path", { "d": "M2 3h20" }]]);

const Ambulance = createLucideIcon("ambulance", [["path", { "d": "M10 10H6" }], ["path", { "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { "d": "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" }], ["path", { "d": "M8 8v4" }], ["path", { "d": "M9 18h6" }], ["circle", { "cx": "17", "cy": "18", "r": "2" }], ["circle", { "cx": "7", "cy": "18", "r": "2" }]]);

const Ampersand = createLucideIcon("ampersand", [["path", { "d": "M16 12h3" }], ["path", { "d": "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" }]]);

const Ampersands = createLucideIcon("ampersands", [["path", { "d": "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }], ["path", { "d": "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }]]);

const Amphora = createLucideIcon("amphora", [["path", { "d": "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }], ["path", { "d": "M10 5H8a2 2 0 0 0 0 4h.68" }], ["path", { "d": "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }], ["path", { "d": "M14 5h2a2 2 0 0 1 0 4h-.68" }], ["path", { "d": "M18 22H6" }], ["path", { "d": "M9 2h6" }]]);

const Anchor = createLucideIcon("anchor", [["path", { "d": "M12 6v16" }], ["path", { "d": "m19 13 2-1a9 9 0 0 1-18 0l2 1" }], ["path", { "d": "M9 11h6" }], ["circle", { "cx": "12", "cy": "4", "r": "2" }]]);

const Angry = createLucideIcon("angry", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M16 16s-1.5-2-4-2-4 2-4 2" }], ["path", { "d": "M7.5 8 10 9" }], ["path", { "d": "m14 9 2.5-1" }], ["path", { "d": "M9 10h.01" }], ["path", { "d": "M15 10h.01" }]]);

const Annoyed = createLucideIcon("annoyed", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M8 15h8" }], ["path", { "d": "M8 9h2" }], ["path", { "d": "M14 9h2" }]]);

const Antenna = createLucideIcon("antenna", [["path", { "d": "M2 12 7 2" }], ["path", { "d": "m7 12 5-10" }], ["path", { "d": "m12 12 5-10" }], ["path", { "d": "m17 12 5-10" }], ["path", { "d": "M4.5 7h15" }], ["path", { "d": "M12 16v6" }]]);

const Aperture = createLucideIcon("aperture", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m14.31 8 5.74 9.94" }], ["path", { "d": "M9.69 8h11.48" }], ["path", { "d": "m7.38 12 5.74-9.94" }], ["path", { "d": "M9.69 16 3.95 6.06" }], ["path", { "d": "M14.31 16H2.83" }], ["path", { "d": "m16.62 12-5.74 9.94" }]]);

const Anvil = createLucideIcon("anvil", [["path", { "d": "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }], ["path", { "d": "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }], ["path", { "d": "M9 12v5" }], ["path", { "d": "M15 12v5" }], ["path", { "d": "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]]);

const AppWindowMac = createLucideIcon("app-window-mac", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M6 8h.01" }], ["path", { "d": "M10 8h.01" }], ["path", { "d": "M14 8h.01" }]]);

const AppWindow = createLucideIcon("app-window", [["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }], ["path", { "d": "M10 4v4" }], ["path", { "d": "M2 8h20" }], ["path", { "d": "M6 4v4" }]]);

const Apple = createLucideIcon("apple", [["path", { "d": "M12 6.528V3a1 1 0 0 1 1-1h0" }], ["path", { "d": "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" }]]);

const ArchiveRestore = createLucideIcon("archive-restore", [["rect", { "width": "20", "height": "5", "x": "2", "y": "3", "rx": "1" }], ["path", { "d": "M4 8v11a2 2 0 0 0 2 2h2" }], ["path", { "d": "M20 8v11a2 2 0 0 1-2 2h-2" }], ["path", { "d": "m9 15 3-3 3 3" }], ["path", { "d": "M12 12v9" }]]);

const ArchiveX = createLucideIcon("archive-x", [["rect", { "width": "20", "height": "5", "x": "2", "y": "3", "rx": "1" }], ["path", { "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { "d": "m9.5 17 5-5" }], ["path", { "d": "m9.5 12 5 5" }]]);

const Archive = createLucideIcon("archive", [["rect", { "width": "20", "height": "5", "x": "2", "y": "3", "rx": "1" }], ["path", { "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { "d": "M10 12h4" }]]);

const Armchair = createLucideIcon("armchair", [["path", { "d": "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }], ["path", { "d": "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { "d": "M5 18v2" }], ["path", { "d": "M19 18v2" }]]);

const ArrowBigDownDash = createLucideIcon("arrow-big-down-dash", [["path", { "d": "M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z" }], ["path", { "d": "M9 4h6" }]]);

const ArrowBigDown = createLucideIcon("arrow-big-down", [["path", { "d": "M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" }]]);

const ArrowBigLeftDash = createLucideIcon("arrow-big-left-dash", [["path", { "d": "M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" }], ["path", { "d": "M20 9v6" }]]);

const ArrowBigLeft = createLucideIcon("arrow-big-left", [["path", { "d": "M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z" }]]);

const ArrowBigRightDash = createLucideIcon("arrow-big-right-dash", [["path", { "d": "M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }], ["path", { "d": "M4 9v6" }]]);

const ArrowBigRight = createLucideIcon("arrow-big-right", [["path", { "d": "M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z" }]]);

const ArrowBigUp = createLucideIcon("arrow-big-up", [["path", { "d": "M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z" }]]);

const ArrowBigUpDash = createLucideIcon("arrow-big-up-dash", [["path", { "d": "M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z" }], ["path", { "d": "M9 20h6" }]]);

const ArrowDown10 = createLucideIcon("arrow-down-1-0", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["path", { "d": "M17 10V4h-2" }], ["path", { "d": "M15 10h4" }], ["rect", { "x": "15", "y": "14", "width": "4", "height": "6", "ry": "2" }]]);

const ArrowDown01 = createLucideIcon("arrow-down-0-1", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["rect", { "x": "15", "y": "4", "width": "4", "height": "6", "ry": "2" }], ["path", { "d": "M17 20v-6h-2" }], ["path", { "d": "M15 20h4" }]]);

const ArrowDownAZ = createLucideIcon("arrow-down-a-z", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["path", { "d": "M20 8h-5" }], ["path", { "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { "d": "M15 14h5l-5 6h5" }]]);

const ArrowDownFromLine = createLucideIcon("arrow-down-from-line", [["path", { "d": "M19 3H5" }], ["path", { "d": "M12 21V7" }], ["path", { "d": "m6 15 6 6 6-6" }]]);

const ArrowDownLeft = createLucideIcon("arrow-down-left", [["path", { "d": "M17 7 7 17" }], ["path", { "d": "M17 17H7V7" }]]);

const ArrowDownNarrowWide = createLucideIcon("arrow-down-narrow-wide", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["path", { "d": "M11 4h4" }], ["path", { "d": "M11 8h7" }], ["path", { "d": "M11 12h10" }]]);

const ArrowDownRight = createLucideIcon("arrow-down-right", [["path", { "d": "m7 7 10 10" }], ["path", { "d": "M17 7v10H7" }]]);

const ArrowDownToDot = createLucideIcon("arrow-down-to-dot", [["path", { "d": "M12 2v14" }], ["path", { "d": "m19 9-7 7-7-7" }], ["circle", { "cx": "12", "cy": "21", "r": "1" }]]);

const ArrowDownToLine = createLucideIcon("arrow-down-to-line", [["path", { "d": "M12 17V3" }], ["path", { "d": "m6 11 6 6 6-6" }], ["path", { "d": "M19 21H5" }]]);

const ArrowDownUp = createLucideIcon("arrow-down-up", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["path", { "d": "m21 8-4-4-4 4" }], ["path", { "d": "M17 4v16" }]]);

const ArrowDownWideNarrow = createLucideIcon("arrow-down-wide-narrow", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 20V4" }], ["path", { "d": "M11 4h10" }], ["path", { "d": "M11 8h7" }], ["path", { "d": "M11 12h4" }]]);

const ArrowDownZA = createLucideIcon("arrow-down-z-a", [["path", { "d": "m3 16 4 4 4-4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M15 4h5l-5 6h5" }], ["path", { "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { "d": "M20 18h-5" }]]);

const ArrowDown = createLucideIcon("arrow-down", [["path", { "d": "M12 5v14" }], ["path", { "d": "m19 12-7 7-7-7" }]]);

const ArrowLeftFromLine = createLucideIcon("arrow-left-from-line", [["path", { "d": "m9 6-6 6 6 6" }], ["path", { "d": "M3 12h14" }], ["path", { "d": "M21 19V5" }]]);

const ArrowLeftRight = createLucideIcon("arrow-left-right", [["path", { "d": "M8 3 4 7l4 4" }], ["path", { "d": "M4 7h16" }], ["path", { "d": "m16 21 4-4-4-4" }], ["path", { "d": "M20 17H4" }]]);

const ArrowLeftToLine = createLucideIcon("arrow-left-to-line", [["path", { "d": "M3 19V5" }], ["path", { "d": "m13 6-6 6 6 6" }], ["path", { "d": "M7 12h14" }]]);

const ArrowLeft = createLucideIcon("arrow-left", [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]]);

const ArrowRightFromLine = createLucideIcon("arrow-right-from-line", [["path", { "d": "M3 5v14" }], ["path", { "d": "M21 12H7" }], ["path", { "d": "m15 18 6-6-6-6" }]]);

const ArrowRightLeft = createLucideIcon("arrow-right-left", [["path", { "d": "m16 3 4 4-4 4" }], ["path", { "d": "M20 7H4" }], ["path", { "d": "m8 21-4-4 4-4" }], ["path", { "d": "M4 17h16" }]]);

const ArrowRightToLine = createLucideIcon("arrow-right-to-line", [["path", { "d": "M17 12H3" }], ["path", { "d": "m11 18 6-6-6-6" }], ["path", { "d": "M21 5v14" }]]);

const ArrowRight = createLucideIcon("arrow-right", [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]]);

const ArrowUp01 = createLucideIcon("arrow-up-0-1", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["rect", { "x": "15", "y": "4", "width": "4", "height": "6", "ry": "2" }], ["path", { "d": "M17 20v-6h-2" }], ["path", { "d": "M15 20h4" }]]);

const ArrowUp10 = createLucideIcon("arrow-up-1-0", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M17 10V4h-2" }], ["path", { "d": "M15 10h4" }], ["rect", { "x": "15", "y": "14", "width": "4", "height": "6", "ry": "2" }]]);

const ArrowUpAZ = createLucideIcon("arrow-up-a-z", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M20 8h-5" }], ["path", { "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { "d": "M15 14h5l-5 6h5" }]]);

const ArrowUpDown = createLucideIcon("arrow-up-down", [["path", { "d": "m21 16-4 4-4-4" }], ["path", { "d": "M17 20V4" }], ["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }]]);

const ArrowUpFromDot = createLucideIcon("arrow-up-from-dot", [["path", { "d": "m5 9 7-7 7 7" }], ["path", { "d": "M12 16V2" }], ["circle", { "cx": "12", "cy": "21", "r": "1" }]]);

const ArrowUpFromLine = createLucideIcon("arrow-up-from-line", [["path", { "d": "m18 9-6-6-6 6" }], ["path", { "d": "M12 3v14" }], ["path", { "d": "M5 21h14" }]]);

const ArrowUpLeft = createLucideIcon("arrow-up-left", [["path", { "d": "M7 17V7h10" }], ["path", { "d": "M17 17 7 7" }]]);

const ArrowUpNarrowWide = createLucideIcon("arrow-up-narrow-wide", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M11 12h4" }], ["path", { "d": "M11 16h7" }], ["path", { "d": "M11 20h10" }]]);

const ArrowUpRight = createLucideIcon("arrow-up-right", [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]]);

const ArrowUpToLine = createLucideIcon("arrow-up-to-line", [["path", { "d": "M5 3h14" }], ["path", { "d": "m18 13-6-6-6 6" }], ["path", { "d": "M12 7v14" }]]);

const ArrowUpZA = createLucideIcon("arrow-up-z-a", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M15 4h5l-5 6h5" }], ["path", { "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { "d": "M20 18h-5" }]]);

const ArrowUpWideNarrow = createLucideIcon("arrow-up-wide-narrow", [["path", { "d": "m3 8 4-4 4 4" }], ["path", { "d": "M7 4v16" }], ["path", { "d": "M11 12h10" }], ["path", { "d": "M11 16h7" }], ["path", { "d": "M11 20h4" }]]);

const ArrowUp = createLucideIcon("arrow-up", [["path", { "d": "m5 12 7-7 7 7" }], ["path", { "d": "M12 19V5" }]]);

const ArrowsUpFromLine = createLucideIcon("arrows-up-from-line", [["path", { "d": "m4 6 3-3 3 3" }], ["path", { "d": "M7 17V3" }], ["path", { "d": "m14 6 3-3 3 3" }], ["path", { "d": "M17 17V3" }], ["path", { "d": "M4 21h16" }]]);

const Asterisk = createLucideIcon("asterisk", [["path", { "d": "M12 6v12" }], ["path", { "d": "M17.196 9 6.804 15" }], ["path", { "d": "m6.804 9 10.392 6" }]]);

const Astroid = createLucideIcon("astroid", [["path", { "d": "M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203" }]]);

const AtSign = createLucideIcon("at-sign", [["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]]);

const Atom = createLucideIcon("atom", [["circle", { "cx": "12", "cy": "12", "r": "1" }], ["path", { "d": "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" }], ["path", { "d": "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" }]]);

const AudioLines = createLucideIcon("audio-lines", [["path", { "d": "M2 10v3" }], ["path", { "d": "M6 6v11" }], ["path", { "d": "M10 3v18" }], ["path", { "d": "M14 8v7" }], ["path", { "d": "M18 5v13" }], ["path", { "d": "M22 10v3" }]]);

const AudioWaveform = createLucideIcon("audio-waveform", [["path", { "d": "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" }]]);

const Award = createLucideIcon("award", [["path", { "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }], ["circle", { "cx": "12", "cy": "8", "r": "6" }]]);

const Axe = createLucideIcon("axe", [["path", { "d": "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" }], ["path", { "d": "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" }]]);

const Axis3d = createLucideIcon("axis-3d", [["path", { "d": "M13.5 10.5 15 9" }], ["path", { "d": "M4 4v15a1 1 0 0 0 1 1h15" }], ["path", { "d": "M4.293 19.707 6 18" }], ["path", { "d": "m9 15 1.5-1.5" }]]);

const Baby = createLucideIcon("baby", [["path", { "d": "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }], ["path", { "d": "M15 12h.01" }], ["path", { "d": "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }], ["path", { "d": "M9 12h.01" }]]);

const Backpack = createLucideIcon("backpack", [["path", { "d": "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }], ["path", { "d": "M8 10h8" }], ["path", { "d": "M8 18h8" }], ["path", { "d": "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }], ["path", { "d": "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }]]);

const BadgeAlert = createLucideIcon("badge-alert", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]]);

const BadgeCent = createLucideIcon("badge-cent", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M12 7v10" }], ["path", { "d": "M15.4 10a4 4 0 1 0 0 4" }]]);

const BadgeCheck = createLucideIcon("badge-check", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const BadgeDollarSign = createLucideIcon("badge-dollar-sign", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { "d": "M12 18V6" }]]);

const BadgeEuro = createLucideIcon("badge-euro", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M7 12h5" }], ["path", { "d": "M15 9.4a4 4 0 1 0 0 5.2" }]]);

const BadgeIndianRupee = createLucideIcon("badge-indian-rupee", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M8 8h8" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "m13 17-5-1h1a4 4 0 0 0 0-8" }]]);

const BadgeInfo = createLucideIcon("badge-info", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { "x1": "12", "x2": "12", "y1": "16", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "8", "y2": "8" }]]);

const BadgeJapaneseYen = createLucideIcon("badge-japanese-yen", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "m9 8 3 3v7" }], ["path", { "d": "m12 11 3-3" }], ["path", { "d": "M9 12h6" }], ["path", { "d": "M9 16h6" }]]);

const BadgeMinus = createLucideIcon("badge-minus", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { "x1": "8", "x2": "16", "y1": "12", "y2": "12" }]]);

const BadgePercent = createLucideIcon("badge-percent", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "M15 15h.01" }]]);

const BadgePlus = createLucideIcon("badge-plus", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "16" }], ["line", { "x1": "8", "x2": "16", "y1": "12", "y2": "12" }]]);

const BadgePoundSterling = createLucideIcon("badge-pound-sterling", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M8 12h4" }], ["path", { "d": "M10 16V9.5a2.5 2.5 0 0 1 5 0" }], ["path", { "d": "M8 16h7" }]]);

const BadgeRussianRuble = createLucideIcon("badge-russian-ruble", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M9 16h5" }], ["path", { "d": "M9 12h5a2 2 0 1 0 0-4h-3v9" }]]);

const BadgeQuestionMark = createLucideIcon("badge-question-mark", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["line", { "x1": "12", "x2": "12.01", "y1": "17", "y2": "17" }]]);

const BadgeSwissFranc = createLucideIcon("badge-swiss-franc", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { "d": "M11 17V8h4" }], ["path", { "d": "M11 12h3" }], ["path", { "d": "M9 16h4" }]]);

const BadgeTurkishLira = createLucideIcon("badge-turkish-lira", [["path", { "d": "M11 7v10a5 5 0 0 0 5-5" }], ["path", { "d": "m15 8-6 3" }], ["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" }]]);

const BadgeX = createLucideIcon("badge-x", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { "x1": "15", "x2": "9", "y1": "9", "y2": "15" }], ["line", { "x1": "9", "x2": "15", "y1": "9", "y2": "15" }]]);

const Badge = createLucideIcon("badge", [["path", { "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }]]);

const BaggageClaim = createLucideIcon("baggage-claim", [["path", { "d": "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }], ["path", { "d": "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }], ["rect", { "width": "13", "height": "8", "x": "8", "y": "6", "rx": "1" }], ["circle", { "cx": "18", "cy": "20", "r": "2" }], ["circle", { "cx": "9", "cy": "20", "r": "2" }]]);

const Balloon = createLucideIcon("balloon", [["path", { "d": "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }], ["path", { "d": "M12 6a2 2 0 0 1 2 2" }], ["path", { "d": "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" }]]);

const Banana = createLucideIcon("banana", [["path", { "d": "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }], ["path", { "d": "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" }]]);

const Ban = createLucideIcon("ban", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M4.929 4.929 19.07 19.071" }]]);

const Bandage = createLucideIcon("bandage", [["path", { "d": "M10 10.01h.01" }], ["path", { "d": "M10 14.01h.01" }], ["path", { "d": "M14 10.01h.01" }], ["path", { "d": "M14 14.01h.01" }], ["path", { "d": "M18 6v12" }], ["path", { "d": "M6 6v12" }], ["rect", { "x": "2", "y": "6", "width": "20", "height": "12", "rx": "2" }]]);

const BanknoteArrowDown = createLucideIcon("banknote-arrow-down", [["path", { "d": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }], ["path", { "d": "m16 19 3 3 3-3" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M6 12h.01" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const BanknoteArrowUp = createLucideIcon("banknote-arrow-up", [["path", { "d": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "M19 22v-6" }], ["path", { "d": "m22 19-3-3-3 3" }], ["path", { "d": "M6 12h.01" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const BanknoteCheck = createLucideIcon("banknote-check", [["path", { "d": "M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875" }], ["path", { "d": "m16 19 2 2 4-4" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "M6 12h.01" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const BanknoteX = createLucideIcon("banknote-x", [["path", { "d": "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }], ["path", { "d": "m17 17 5 5" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "m22 17-5 5" }], ["path", { "d": "M6 12h.01" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const Banknote = createLucideIcon("banknote", [["rect", { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }], ["path", { "d": "M6 12h.01M18 12h.01" }]]);

const Barcode = createLucideIcon("barcode", [["path", { "d": "M3 5v14" }], ["path", { "d": "M8 5v14" }], ["path", { "d": "M12 5v14" }], ["path", { "d": "M17 5v14" }], ["path", { "d": "M21 5v14" }]]);

const Barrel = createLucideIcon("barrel", [["path", { "d": "M10 3a41 41 0 0 0 0 18" }], ["path", { "d": "M14 3a41 41 0 0 1 0 18" }], ["path", { "d": "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" }], ["path", { "d": "M3.84 17h16.32" }], ["path", { "d": "M3.84 7h16.32" }]]);

const Baseline = createLucideIcon("baseline", [["path", { "d": "M4 20h16" }], ["path", { "d": "m6 16 6-12 6 12" }], ["path", { "d": "M8 12h8" }]]);

const Bath = createLucideIcon("bath", [["path", { "d": "M10 4 8 6" }], ["path", { "d": "M17 19v2" }], ["path", { "d": "M2 12h20" }], ["path", { "d": "M7 19v2" }], ["path", { "d": "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }]]);

const BatteryCharging = createLucideIcon("battery-charging", [["path", { "d": "m11 7-3 5h4l-3 5" }], ["path", { "d": "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }], ["path", { "d": "M22 14v-4" }], ["path", { "d": "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }]]);

const BatteryFull = createLucideIcon("battery-full", [["path", { "d": "M10 10v4" }], ["path", { "d": "M14 10v4" }], ["path", { "d": "M22 14v-4" }], ["path", { "d": "M6 10v4" }], ["rect", { "x": "2", "y": "6", "width": "16", "height": "12", "rx": "2" }]]);

const BatteryLow = createLucideIcon("battery-low", [["path", { "d": "M22 14v-4" }], ["path", { "d": "M6 14v-4" }], ["rect", { "x": "2", "y": "6", "width": "16", "height": "12", "rx": "2" }]]);

const BatteryMedium = createLucideIcon("battery-medium", [["path", { "d": "M10 14v-4" }], ["path", { "d": "M22 14v-4" }], ["path", { "d": "M6 14v-4" }], ["rect", { "x": "2", "y": "6", "width": "16", "height": "12", "rx": "2" }]]);

const BatteryPlus = createLucideIcon("battery-plus", [["path", { "d": "M10 9v6" }], ["path", { "d": "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" }], ["path", { "d": "M22 14v-4" }], ["path", { "d": "M7 12h6" }], ["path", { "d": "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" }]]);

const BatteryWarning = createLucideIcon("battery-warning", [["path", { "d": "M10 17h.01" }], ["path", { "d": "M10 7v6" }], ["path", { "d": "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M22 14v-4" }], ["path", { "d": "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }]]);

const Battery = createLucideIcon("battery", [["path", { "d": "M 22 14 L 22 10" }], ["rect", { "x": "2", "y": "6", "width": "16", "height": "12", "rx": "2" }]]);

const Beaker = createLucideIcon("beaker", [["path", { "d": "M4.5 3h15" }], ["path", { "d": "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }], ["path", { "d": "M6 14h12" }]]);

const BeanOff = createLucideIcon("bean-off", [["path", { "d": "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }], ["path", { "d": "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }], ["path", { "d": "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Bean = createLucideIcon("bean", [["path", { "d": "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" }], ["path", { "d": "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]]);

const BedDouble = createLucideIcon("bed-double", [["path", { "d": "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }], ["path", { "d": "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { "d": "M12 4v6" }], ["path", { "d": "M2 18h20" }]]);

const BedSingle = createLucideIcon("bed-single", [["path", { "d": "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }], ["path", { "d": "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }], ["path", { "d": "M3 18h18" }]]);

const Bed = createLucideIcon("bed", [["path", { "d": "M2 4v16" }], ["path", { "d": "M2 8h18a2 2 0 0 1 2 2v10" }], ["path", { "d": "M2 17h20" }], ["path", { "d": "M6 8v9" }]]);

const BeefOff = createLucideIcon("beef-off", [["path", { "d": "M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12" }], ["path", { "d": "M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04" }], ["path", { "d": "M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }], ["path", { "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151" }]]);

const Beef = createLucideIcon("beef", [["path", { "d": "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }], ["path", { "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }], ["circle", { "cx": "12.5", "cy": "8.5", "r": "2.5" }]]);

const BeerOff = createLucideIcon("beer-off", [["path", { "d": "M13 13v5" }], ["path", { "d": "M17 11.47V8" }], ["path", { "d": "M17 11h1a3 3 0 0 1 2.745 4.211" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }], ["path", { "d": "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }], ["path", { "d": "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" }], ["path", { "d": "M9 14.6V18" }]]);

const Beer = createLucideIcon("beer", [["path", { "d": "M17 11h1a3 3 0 0 1 0 6h-1" }], ["path", { "d": "M9 12v6" }], ["path", { "d": "M13 12v6" }], ["path", { "d": "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" }], ["path", { "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]]);

const BellCheck = createLucideIcon("bell-check", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "m15 8 2 2 4-4" }], ["path", { "d": "M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326" }], ["path", { "d": "M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454" }]]);

const BellDot = createLucideIcon("bell-dot", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" }], ["circle", { "cx": "18", "cy": "5", "r": "3" }]]);

const BellElectric = createLucideIcon("bell-electric", [["path", { "d": "M18.518 17.347A7 7 0 0 1 14 19" }], ["path", { "d": "M18.8 4A11 11 0 0 1 20 9" }], ["path", { "d": "M9 9h.01" }], ["circle", { "cx": "20", "cy": "16", "r": "2" }], ["circle", { "cx": "9", "cy": "9", "r": "7" }], ["rect", { "x": "4", "y": "16", "width": "10", "height": "6", "rx": "2" }]]);

const BellMinus = createLucideIcon("bell-minus", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M15 8h6" }], ["path", { "d": "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" }]]);

const BellOff = createLucideIcon("bell-off", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" }]]);

const BellPlus = createLucideIcon("bell-plus", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M15 8h6" }], ["path", { "d": "M18 5v6" }], ["path", { "d": "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" }]]);

const BellRing = createLucideIcon("bell-ring", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M22 8c0-2.3-.8-4.3-2-6" }], ["path", { "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }], ["path", { "d": "M4 2C2.8 3.7 2 5.7 2 8" }]]);

const Bell = createLucideIcon("bell", [["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }]]);

const BetweenHorizontalEnd = createLucideIcon("between-horizontal-end", [["rect", { "width": "13", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["path", { "d": "m22 15-3-3 3-3" }], ["rect", { "width": "13", "height": "7", "x": "3", "y": "14", "rx": "1" }]]);

const BetweenHorizontalStart = createLucideIcon("between-horizontal-start", [["rect", { "width": "13", "height": "7", "x": "8", "y": "3", "rx": "1" }], ["path", { "d": "m2 9 3 3-3 3" }], ["rect", { "width": "13", "height": "7", "x": "8", "y": "14", "rx": "1" }]]);

const BetweenVerticalEnd = createLucideIcon("between-vertical-end", [["rect", { "width": "7", "height": "13", "x": "3", "y": "3", "rx": "1" }], ["path", { "d": "m9 22 3-3 3 3" }], ["rect", { "width": "7", "height": "13", "x": "14", "y": "3", "rx": "1" }]]);

const BetweenVerticalStart = createLucideIcon("between-vertical-start", [["rect", { "width": "7", "height": "13", "x": "3", "y": "8", "rx": "1" }], ["path", { "d": "m15 2-3 3-3-3" }], ["rect", { "width": "7", "height": "13", "x": "14", "y": "8", "rx": "1" }]]);

const BicepsFlexed = createLucideIcon("biceps-flexed", [["path", { "d": "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" }], ["path", { "d": "M15 14a5 5 0 0 0-7.584 2" }], ["path", { "d": "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]]);

const Bike = createLucideIcon("bike", [["circle", { "cx": "18.5", "cy": "17.5", "r": "3.5" }], ["circle", { "cx": "5.5", "cy": "17.5", "r": "3.5" }], ["circle", { "cx": "15", "cy": "5", "r": "1" }], ["path", { "d": "M12 17.5V14l-3-3 4-3 2 3h2" }]]);

const Binary = createLucideIcon("binary", [["rect", { "x": "14", "y": "14", "width": "4", "height": "6", "rx": "2" }], ["rect", { "x": "6", "y": "4", "width": "4", "height": "6", "rx": "2" }], ["path", { "d": "M6 20h4" }], ["path", { "d": "M14 10h4" }], ["path", { "d": "M6 14h2v6" }], ["path", { "d": "M14 4h2v6" }]]);

const Binoculars = createLucideIcon("binoculars", [["path", { "d": "M10 10h4" }], ["path", { "d": "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }], ["path", { "d": "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" }], ["path", { "d": "M 22 16 L 2 16" }], ["path", { "d": "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" }], ["path", { "d": "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]]);

const Biohazard = createLucideIcon("biohazard", [["circle", { "cx": "12", "cy": "11.9", "r": "2" }], ["path", { "d": "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }], ["path", { "d": "m8.9 10.1 1.4.8" }], ["path", { "d": "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }], ["path", { "d": "m15.1 10.1-1.4.8" }], ["path", { "d": "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }], ["path", { "d": "M12 13.9v1.6" }], ["path", { "d": "M13.5 5.4c-1-.2-2-.2-3 0" }], ["path", { "d": "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }], ["path", { "d": "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]]);

const Bird = createLucideIcon("bird", [["path", { "d": "M16 7h.01" }], ["path", { "d": "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }], ["path", { "d": "m20 7 2 .5-2 .5" }], ["path", { "d": "M10 18v3" }], ["path", { "d": "M14 17.75V21" }], ["path", { "d": "M7 18a6 6 0 0 0 3.84-10.61" }]]);

const Birdhouse = createLucideIcon("birdhouse", [["path", { "d": "M12 18v4" }], ["path", { "d": "m17 18 1.956-11.468" }], ["path", { "d": "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" }], ["path", { "d": "M4 18h16" }], ["path", { "d": "M7 18 5.044 6.532" }], ["circle", { "cx": "12", "cy": "10", "r": "2" }]]);

const Bitcoin = createLucideIcon("bitcoin", [["path", { "d": "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" }]]);

const Blender = createLucideIcon("blender", [["path", { "d": "M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z" }], ["path", { "d": "m17 2-1 12" }], ["path", { "d": "M8.006 14 7 2" }], ["path", { "d": "M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75" }], ["path", { "d": "M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5" }], ["path", { "d": "M12 18h.01" }]]);

const Blend = createLucideIcon("blend", [["circle", { "cx": "9", "cy": "9", "r": "7" }], ["circle", { "cx": "15", "cy": "15", "r": "7" }]]);

const Blinds = createLucideIcon("blinds", [["path", { "d": "M3 3h18" }], ["path", { "d": "M20 7H8" }], ["path", { "d": "M20 11H8" }], ["path", { "d": "M10 19h10" }], ["path", { "d": "M8 15h12" }], ["path", { "d": "M4 3v14" }], ["circle", { "cx": "4", "cy": "19", "r": "2" }]]);

const Blocks = createLucideIcon("blocks", [["path", { "d": "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" }], ["rect", { "x": "14", "y": "2", "width": "8", "height": "8", "rx": "1" }]]);

const BluetoothConnected = createLucideIcon("bluetooth-connected", [["path", { "d": "m7 7 10 10-5 5V2l5 5L7 17" }], ["line", { "x1": "18", "x2": "21", "y1": "12", "y2": "12" }], ["line", { "x1": "3", "x2": "6", "y1": "12", "y2": "12" }]]);

const BluetoothOff = createLucideIcon("bluetooth-off", [["path", { "d": "m17 17-5 5V12l-5 5" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M14.5 9.5 17 7l-5-5v4.5" }]]);

const BluetoothSearching = createLucideIcon("bluetooth-searching", [["path", { "d": "m7 7 10 10-5 5V2l5 5L7 17" }], ["path", { "d": "M20.83 14.83a4 4 0 0 0 0-5.66" }], ["path", { "d": "M18 12h.01" }]]);

const Bluetooth = createLucideIcon("bluetooth", [["path", { "d": "m7 7 10 10-5 5V2l5 5L7 17" }]]);

const Bold = createLucideIcon("bold", [["path", { "d": "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]]);

const Bolt = createLucideIcon("bolt", [["path", { "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }], ["circle", { "cx": "12", "cy": "12", "r": "4" }]]);

const Bomb = createLucideIcon("bomb", [["circle", { "cx": "11", "cy": "13", "r": "9" }], ["path", { "d": "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }], ["path", { "d": "m22 2-1.5 1.5" }]]);

const Bone = createLucideIcon("bone", [["path", { "d": "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" }]]);

const BookA = createLucideIcon("book-a", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "m8 13 4-7 4 7" }], ["path", { "d": "M9.1 11h5.7" }]]);

const BookAlert = createLucideIcon("book-alert", [["path", { "d": "M12 13h.01" }], ["path", { "d": "M12 6v3" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]);

const BookAudio = createLucideIcon("book-audio", [["path", { "d": "M12 6v7" }], ["path", { "d": "M16 8v3" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M8 8v3" }]]);

const BookCheck = createLucideIcon("book-check", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "m9 9.5 2 2 4-4" }]]);

const BookCopy = createLucideIcon("book-copy", [["path", { "d": "M5 7a2 2 0 0 0-2 2v11" }], ["path", { "d": "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" }], ["path", { "d": "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" }]]);

const BookDown = createLucideIcon("book-down", [["path", { "d": "M12 13V7" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "m9 10 3 3 3-3" }]]);

const BookHeadphones = createLucideIcon("book-headphones", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M8 12v-2a4 4 0 0 1 8 0v2" }], ["circle", { "cx": "15", "cy": "12", "r": "1" }], ["circle", { "cx": "9", "cy": "12", "r": "1" }]]);

const BookDashed = createLucideIcon("book-dashed", [["path", { "d": "M12 17h1.5" }], ["path", { "d": "M12 22h1.5" }], ["path", { "d": "M12 2h1.5" }], ["path", { "d": "M17.5 22H19a1 1 0 0 0 1-1" }], ["path", { "d": "M17.5 2H19a1 1 0 0 1 1 1v1.5" }], ["path", { "d": "M20 14v3h-2.5" }], ["path", { "d": "M20 8.5V10" }], ["path", { "d": "M4 10V8.5" }], ["path", { "d": "M4 19.5V14" }], ["path", { "d": "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }], ["path", { "d": "M8 22H6.5a1 1 0 0 1 0-5H8" }]]);

const BookHeart = createLucideIcon("book-heart", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }]]);

const BookImage = createLucideIcon("book-image", [["path", { "d": "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { "cx": "10", "cy": "8", "r": "2" }]]);

const BookKey = createLucideIcon("book-key", [["path", { "d": "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" }], ["path", { "d": "M17 2v6" }], ["path", { "d": "M17 4h2" }], ["path", { "d": "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { "cx": "17", "cy": "10", "r": "2" }]]);

const BookLock = createLucideIcon("book-lock", [["path", { "d": "M18 6V4a2 2 0 1 0-4 0v2" }], ["path", { "d": "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }], ["rect", { "x": "12", "y": "6", "width": "8", "height": "5", "rx": "1" }]]);

const BookMarked = createLucideIcon("book-marked", [["path", { "d": "M10 2v8l3-3 3 3V2" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]);

const BookMinus = createLucideIcon("book-minus", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M9 10h6" }]]);

const BookOpenCheck = createLucideIcon("book-open-check", [["path", { "d": "M12 21V7" }], ["path", { "d": "m16 12 2 2 4-4" }], ["path", { "d": "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" }]]);

const BookOpenText = createLucideIcon("book-open-text", [["path", { "d": "M12 7v14" }], ["path", { "d": "M16 12h2" }], ["path", { "d": "M16 8h2" }], ["path", { "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }], ["path", { "d": "M6 12h2" }], ["path", { "d": "M6 8h2" }]]);

const BookOpen = createLucideIcon("book-open", [["path", { "d": "M12 7v14" }], ["path", { "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }]]);

const BookPlus = createLucideIcon("book-plus", [["path", { "d": "M12 7v6" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M9 10h6" }]]);

const BookSearch = createLucideIcon("book-search", [["path", { "d": "M11 22H5.5a1 1 0 0 1 0-5h4.501" }], ["path", { "d": "m21 22-1.879-1.878" }], ["path", { "d": "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" }], ["circle", { "cx": "17", "cy": "18", "r": "3" }]]);

const BookText = createLucideIcon("book-text", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M8 11h8" }], ["path", { "d": "M8 7h6" }]]);

const BookType = createLucideIcon("book-type", [["path", { "d": "M10 13h4" }], ["path", { "d": "M12 6v7" }], ["path", { "d": "M16 8V6H8v2" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]);

const BookUp2 = createLucideIcon("book-up-2", [["path", { "d": "M12 13V7" }], ["path", { "d": "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }], ["path", { "d": "m9 10 3-3 3 3" }], ["path", { "d": "m9 5 3-3 3 3" }]]);

const BookUp = createLucideIcon("book-up", [["path", { "d": "M12 13V7" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "m9 10 3-3 3 3" }]]);

const BookUser = createLucideIcon("book-user", [["path", { "d": "M15 13a3 3 0 1 0-6 0" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { "cx": "12", "cy": "8", "r": "2" }]]);

const BookX = createLucideIcon("book-x", [["path", { "d": "m14.5 7-5 5" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { "d": "m9.5 7 5 5" }]]);

const Book = createLucideIcon("book", [["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]);

const BookmarkCheck = createLucideIcon("bookmark-check", [["path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }], ["path", { "d": "m9 10 2 2 4-4" }]]);

const BookmarkMinus = createLucideIcon("bookmark-minus", [["path", { "d": "M15 10H9" }], ["path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }]]);

const BookmarkOff = createLucideIcon("bookmark-off", [["path", { "d": "M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.656 3H17a2 2 0 0 1 2 2v8.344" }]]);

const BookmarkPlus = createLucideIcon("bookmark-plus", [["path", { "d": "M12 7v6" }], ["path", { "d": "M15 10H9" }], ["path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }]]);

const BookmarkX = createLucideIcon("bookmark-x", [["path", { "d": "m14.5 7.5-5 5" }], ["path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }], ["path", { "d": "m9.5 7.5 5 5" }]]);

const Bookmark = createLucideIcon("bookmark", [["path", { "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }]]);

const BoomBox = createLucideIcon("boom-box", [["path", { "d": "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { "d": "M8 8v1" }], ["path", { "d": "M12 8v1" }], ["path", { "d": "M16 8v1" }], ["rect", { "width": "20", "height": "12", "x": "2", "y": "9", "rx": "2" }], ["circle", { "cx": "8", "cy": "15", "r": "2" }], ["circle", { "cx": "16", "cy": "15", "r": "2" }]]);

const BotMessageSquare = createLucideIcon("bot-message-square", [["path", { "d": "M12 6V2H8" }], ["path", { "d": "M15 11v2" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" }], ["path", { "d": "M9 11v2" }]]);

const Bot = createLucideIcon("bot", [["path", { "d": "M12 8V4H8" }], ["rect", { "width": "16", "height": "12", "x": "4", "y": "8", "rx": "2" }], ["path", { "d": "M2 14h2" }], ["path", { "d": "M20 14h2" }], ["path", { "d": "M15 13v2" }], ["path", { "d": "M9 13v2" }]]);

const BotOff = createLucideIcon("bot-off", [["path", { "d": "M13.67 8H18a2 2 0 0 1 2 2v4.33" }], ["path", { "d": "M2 14h2" }], ["path", { "d": "M20 14h2" }], ["path", { "d": "M22 22 2 2" }], ["path", { "d": "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }], ["path", { "d": "M9 13v2" }], ["path", { "d": "M9.67 4H12v2.33" }]]);

const BottleWine = createLucideIcon("bottle-wine", [["path", { "d": "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" }], ["path", { "d": "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" }]]);

const BowArrow = createLucideIcon("bow-arrow", [["path", { "d": "M17 3h4v4" }], ["path", { "d": "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" }], ["path", { "d": "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" }], ["path", { "d": "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z" }], ["path", { "d": "M9.707 14.293 21 3" }]]);

const Box = createLucideIcon("box", [["path", { "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }], ["path", { "d": "m3.3 7 8.7 5 8.7-5" }], ["path", { "d": "M12 22V12" }]]);

const Boxes = createLucideIcon("boxes", [["path", { "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }], ["path", { "d": "m7 16.5-4.74-2.85" }], ["path", { "d": "m7 16.5 5-3" }], ["path", { "d": "M7 16.5v5.17" }], ["path", { "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }], ["path", { "d": "m17 16.5-5-3" }], ["path", { "d": "m17 16.5 4.74-2.85" }], ["path", { "d": "M17 16.5v5.17" }], ["path", { "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }], ["path", { "d": "M12 8 7.26 5.15" }], ["path", { "d": "m12 8 4.74-2.85" }], ["path", { "d": "M12 13.5V8" }]]);

const Braces = createLucideIcon("braces", [["path", { "d": "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }], ["path", { "d": "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]]);

const Brackets = createLucideIcon("brackets", [["path", { "d": "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }], ["path", { "d": "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }]]);

const BrainCircuit = createLucideIcon("brain-circuit", [["path", { "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }], ["path", { "d": "M9 13a4.5 4.5 0 0 0 3-4" }], ["path", { "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { "d": "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { "d": "M12 13h4" }], ["path", { "d": "M12 18h6a2 2 0 0 1 2 2v1" }], ["path", { "d": "M12 8h8" }], ["path", { "d": "M16 8V5a2 2 0 0 1 2-2" }], ["circle", { "cx": "16", "cy": "13", "r": ".5" }], ["circle", { "cx": "18", "cy": "3", "r": ".5" }], ["circle", { "cx": "20", "cy": "21", "r": ".5" }], ["circle", { "cx": "20", "cy": "8", "r": ".5" }]]);

const BrainCog = createLucideIcon("brain-cog", [["path", { "d": "m10.852 14.772-.383.923" }], ["path", { "d": "m10.852 9.228-.383-.923" }], ["path", { "d": "m13.148 14.772.382.924" }], ["path", { "d": "m13.531 8.305-.383.923" }], ["path", { "d": "m14.772 10.852.923-.383" }], ["path", { "d": "m14.772 13.148.923.383" }], ["path", { "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" }], ["path", { "d": "M17.998 5.125a4 4 0 0 1 2.525 5.771" }], ["path", { "d": "M19.505 10.294a4 4 0 0 1-1.5 7.706" }], ["path", { "d": "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" }], ["path", { "d": "M4.5 10.291A4 4 0 0 0 6 18" }], ["path", { "d": "M6.002 5.125a3 3 0 0 0 .4 1.375" }], ["path", { "d": "m9.228 10.852-.923-.383" }], ["path", { "d": "m9.228 13.148-.923.383" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const BrickWallFire = createLucideIcon("brick-wall-fire", [["path", { "d": "M16 3v2.107" }], ["path", { "d": "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" }], ["path", { "d": "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" }], ["path", { "d": "M3 15h5.253" }], ["path", { "d": "M3 9h8.228" }], ["path", { "d": "M8 15v6" }], ["path", { "d": "M8 3v6" }]]);

const Brain = createLucideIcon("brain", [["path", { "d": "M12 18V5" }], ["path", { "d": "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }], ["path", { "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }], ["path", { "d": "M17.997 5.125a4 4 0 0 1 2.526 5.77" }], ["path", { "d": "M18 18a4 4 0 0 0 2-7.464" }], ["path", { "d": "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }], ["path", { "d": "M6 18a4 4 0 0 1-2-7.464" }], ["path", { "d": "M6.003 5.125a4 4 0 0 0-2.526 5.77" }]]);

const BrickWallShield = createLucideIcon("brick-wall-shield", [["path", { "d": "M12 9v1.258" }], ["path", { "d": "M16 3v5.46" }], ["path", { "d": "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" }], ["path", { "d": "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" }], ["path", { "d": "M3 15h7" }], ["path", { "d": "M3 9h12.142" }], ["path", { "d": "M8 15v6" }], ["path", { "d": "M8 3v6" }]]);

const BrickWall = createLucideIcon("brick-wall", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M12 9v6" }], ["path", { "d": "M16 15v6" }], ["path", { "d": "M16 3v6" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "M8 15v6" }], ["path", { "d": "M8 3v6" }]]);

const BriefcaseBusiness = createLucideIcon("briefcase-business", [["path", { "d": "M12 12h.01" }], ["path", { "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { "d": "M22 13a18.15 18.15 0 0 1-20 0" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "6", "rx": "2" }]]);

const BriefcaseConveyorBelt = createLucideIcon("briefcase-conveyor-belt", [["path", { "d": "M10 20v2" }], ["path", { "d": "M14 20v2" }], ["path", { "d": "M18 20v2" }], ["path", { "d": "M21 20H3" }], ["path", { "d": "M6 20v2" }], ["path", { "d": "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }], ["rect", { "x": "4", "y": "6", "width": "16", "height": "10", "rx": "2" }]]);

const BriefcaseMedical = createLucideIcon("briefcase-medical", [["path", { "d": "M12 11v4" }], ["path", { "d": "M14 13h-4" }], ["path", { "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { "d": "M18 6v14" }], ["path", { "d": "M6 6v14" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "6", "rx": "2" }]]);

const Briefcase = createLucideIcon("briefcase", [["path", { "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "6", "rx": "2" }]]);

const BringToFront = createLucideIcon("bring-to-front", [["rect", { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "2" }], ["path", { "d": "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }], ["path", { "d": "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]]);

const Broccoli = createLucideIcon("broccoli", [["path", { "d": "M10 13a3 3 0 0 1-2.121-5.121" }], ["path", { "d": "M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 0 1 6 22c-2 0-4-2-4-4a1 1 0 0 1 .293-.707c1.911-1.911 3.823-3.578 5.347-5.441" }], ["path", { "d": "M16.573 14.737A4 4 0 0 1 14 11" }], ["path", { "d": "M7.14 10.907a4 4 0 1 1 2.756-7.43A4 4 0 0 1 16.7 4.48a2 2 0 0 1 2.82 2.82 4 4 0 0 1 1.002 6.805A4 4 0 1 1 13 16" }]]);

const BrushCleaning = createLucideIcon("brush-cleaning", [["path", { "d": "m16 22-1-4" }], ["path", { "d": "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" }], ["path", { "d": "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" }], ["path", { "d": "m8 22 1-4" }]]);

const Brush = createLucideIcon("brush", [["path", { "d": "m11 10 3 3" }], ["path", { "d": "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" }], ["path", { "d": "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" }]]);

const Bubbles = createLucideIcon("bubbles", [["path", { "d": "M7.001 15.085A1.5 1.5 0 0 1 9 16.5" }], ["circle", { "cx": "18.5", "cy": "8.5", "r": "3.5" }], ["circle", { "cx": "7.5", "cy": "16.5", "r": "5.5" }], ["circle", { "cx": "7.5", "cy": "4.5", "r": "2.5" }]]);

const BugOff = createLucideIcon("bug-off", [["path", { "d": "M12 20v-8" }], ["path", { "d": "M12.656 7H14a4 4 0 0 1 4 4v1.344" }], ["path", { "d": "M14.12 3.88 16 2" }], ["path", { "d": "M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M21 5a4 4 0 0 1-3.55 3.97" }], ["path", { "d": "M22 13h-3.344" }], ["path", { "d": "M3 21a4 4 0 0 1 3.81-4" }], ["path", { "d": "M3 5a4 4 0 0 0 3.55 3.97" }], ["path", { "d": "M6 13H2" }], ["path", { "d": "m8 2 1.88 1.88" }], ["path", { "d": "M9.712 4.06A3 3 0 0 1 15 6v1.13" }]]);

const BugPlay = createLucideIcon("bug-play", [["path", { "d": "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" }], ["path", { "d": "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }], ["path", { "d": "M14.12 3.88 16 2" }], ["path", { "d": "M21 5a4 4 0 0 1-3.55 3.97" }], ["path", { "d": "M3 21a4 4 0 0 1 3.81-4" }], ["path", { "d": "M3 5a4 4 0 0 0 3.55 3.97" }], ["path", { "d": "M6 13H2" }], ["path", { "d": "m8 2 1.88 1.88" }], ["path", { "d": "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]]);

const Bug = createLucideIcon("bug", [["path", { "d": "M12 20v-9" }], ["path", { "d": "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" }], ["path", { "d": "M14.12 3.88 16 2" }], ["path", { "d": "M21 21a4 4 0 0 0-3.81-4" }], ["path", { "d": "M21 5a4 4 0 0 1-3.55 3.97" }], ["path", { "d": "M22 13h-4" }], ["path", { "d": "M3 21a4 4 0 0 1 3.81-4" }], ["path", { "d": "M3 5a4 4 0 0 0 3.55 3.97" }], ["path", { "d": "M6 13H2" }], ["path", { "d": "m8 2 1.88 1.88" }], ["path", { "d": "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]]);

const Building2 = createLucideIcon("building-2", [["path", { "d": "M10 12h4" }], ["path", { "d": "M10 8h4" }], ["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { "d": "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }], ["path", { "d": "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }]]);

const Building = createLucideIcon("building", [["path", { "d": "M12 10h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M12 6h.01" }], ["path", { "d": "M16 10h.01" }], ["path", { "d": "M16 14h.01" }], ["path", { "d": "M16 6h.01" }], ["path", { "d": "M8 10h.01" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M8 6h.01" }], ["path", { "d": "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }], ["rect", { "x": "4", "y": "2", "width": "16", "height": "20", "rx": "2" }]]);

const BusFront = createLucideIcon("bus-front", [["path", { "d": "M4 6 2 7" }], ["path", { "d": "M10 6h4" }], ["path", { "d": "m22 7-2-1" }], ["rect", { "width": "16", "height": "16", "x": "4", "y": "3", "rx": "2" }], ["path", { "d": "M4 11h16" }], ["path", { "d": "M8 15h.01" }], ["path", { "d": "M16 15h.01" }], ["path", { "d": "M6 19v2" }], ["path", { "d": "M18 21v-2" }]]);

const Bus = createLucideIcon("bus", [["path", { "d": "M8 6v6" }], ["path", { "d": "M15 6v6" }], ["path", { "d": "M2 12h19.6" }], ["path", { "d": "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }], ["circle", { "cx": "7", "cy": "18", "r": "2" }], ["path", { "d": "M9 18h5" }], ["circle", { "cx": "16", "cy": "18", "r": "2" }]]);

const CableCar = createLucideIcon("cable-car", [["path", { "d": "M10 3h.01" }], ["path", { "d": "M14 2h.01" }], ["path", { "d": "m2 9 20-5" }], ["path", { "d": "M12 12V6.5" }], ["rect", { "width": "16", "height": "10", "x": "4", "y": "12", "rx": "3" }], ["path", { "d": "M9 12v5" }], ["path", { "d": "M15 12v5" }], ["path", { "d": "M4 17h16" }]]);

const Cable = createLucideIcon("cable", [["path", { "d": "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" }], ["path", { "d": "M17 21v-2" }], ["path", { "d": "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" }], ["path", { "d": "M21 21v-2" }], ["path", { "d": "M3 5V3" }], ["path", { "d": "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" }], ["path", { "d": "M7 5V3" }]]);

const CakeSlice = createLucideIcon("cake-slice", [["path", { "d": "M16 13H3" }], ["path", { "d": "M16 17H3" }], ["path", { "d": "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }], ["circle", { "cx": "9", "cy": "7", "r": "2" }]]);

const Cake = createLucideIcon("cake", [["path", { "d": "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }], ["path", { "d": "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }], ["path", { "d": "M2 21h20" }], ["path", { "d": "M7 8v3" }], ["path", { "d": "M12 8v3" }], ["path", { "d": "M17 8v3" }], ["path", { "d": "M7 4h.01" }], ["path", { "d": "M12 4h.01" }], ["path", { "d": "M17 4h.01" }]]);

const Calculator = createLucideIcon("calculator", [["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["line", { "x1": "8", "x2": "16", "y1": "6", "y2": "6" }], ["line", { "x1": "16", "x2": "16", "y1": "14", "y2": "18" }], ["path", { "d": "M16 10h.01" }], ["path", { "d": "M12 10h.01" }], ["path", { "d": "M8 10h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M12 18h.01" }], ["path", { "d": "M8 18h.01" }]]);

const Calendar1 = createLucideIcon("calendar-1", [["path", { "d": "M11 14h1v4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }], ["rect", { "x": "3", "y": "4", "width": "18", "height": "18", "rx": "2" }]]);

const CalendarArrowDown = createLucideIcon("calendar-arrow-down", [["path", { "d": "m14 18 4 4 4-4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M18 14v8" }], ["path", { "d": "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }]]);

const CalendarArrowUp = createLucideIcon("calendar-arrow-up", [["path", { "d": "m14 18 4-4 4 4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M18 22v-8" }], ["path", { "d": "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }]]);

const CalendarCheck2 = createLucideIcon("calendar-check-2", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "m16 20 2 2 4-4" }]]);

const CalendarCheck = createLucideIcon("calendar-check", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "m9 16 2 2 4-4" }]]);

const CalendarClock = createLucideIcon("calendar-clock", [["path", { "d": "M16 14v2.2l1.6 1" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }], ["path", { "d": "M3 10h5" }], ["path", { "d": "M8 2v4" }], ["circle", { "cx": "16", "cy": "16", "r": "6" }]]);

const CalendarCog = createLucideIcon("calendar-cog", [["path", { "d": "m15.228 16.852-.923-.383" }], ["path", { "d": "m15.228 19.148-.923.383" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "m16.47 14.305.382.923" }], ["path", { "d": "m16.852 20.772-.383.924" }], ["path", { "d": "m19.148 15.228.383-.923" }], ["path", { "d": "m19.53 21.696-.382-.924" }], ["path", { "d": "m20.772 16.852.924-.383" }], ["path", { "d": "m20.772 19.148.924.383" }], ["path", { "d": "M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const CalendarDays = createLucideIcon("calendar-days", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M16 14h.01" }], ["path", { "d": "M8 18h.01" }], ["path", { "d": "M12 18h.01" }], ["path", { "d": "M16 18h.01" }]]);

const CalendarFold = createLucideIcon("calendar-fold", [["path", { "d": "M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" }], ["path", { "d": "M15 22v-5a1 1 0 0 1 1-1h5" }], ["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M3 10h18" }]]);

const CalendarHeart = createLucideIcon("calendar-heart", [["path", { "d": "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" }], ["path", { "d": "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }]]);

const CalendarMinus2 = createLucideIcon("calendar-minus-2", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M10 16h4" }]]);

const CalendarMinus = createLucideIcon("calendar-minus", [["path", { "d": "M16 19h6" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }]]);

const CalendarPlus2 = createLucideIcon("calendar-plus-2", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M10 16h4" }], ["path", { "d": "M12 14v4" }]]);

const CalendarOff = createLucideIcon("calendar-off", [["path", { "d": "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }], ["path", { "d": "M21 15.5V6a2 2 0 0 0-2-2H9.5" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M3 10h7" }], ["path", { "d": "M21 10h-5.5" }], ["path", { "d": "m2 2 20 20" }]]);

const CalendarPlus = createLucideIcon("calendar-plus", [["path", { "d": "M16 19h6" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }]]);

const CalendarRange = createLucideIcon("calendar-range", [["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }], ["path", { "d": "M17 14h-6" }], ["path", { "d": "M13 18H7" }], ["path", { "d": "M7 14h.01" }], ["path", { "d": "M17 18h.01" }]]);

const CalendarSearch = createLucideIcon("calendar-search", [["path", { "d": "M16 2v4" }], ["path", { "d": "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }], ["path", { "d": "m22 22-1.875-1.875" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "M8 2v4" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const CalendarSync = createLucideIcon("calendar-sync", [["path", { "d": "M11 10v4h4" }], ["path", { "d": "m11 14 1.535-1.605a5 5 0 0 1 8 1.5" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "m21 18-1.535 1.605a5 5 0 0 1-8-1.5" }], ["path", { "d": "M21 22v-4h-4" }], ["path", { "d": "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" }], ["path", { "d": "M3 10h4" }], ["path", { "d": "M8 2v4" }]]);

const CalendarX2 = createLucideIcon("calendar-x-2", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "m17 22 5-5" }], ["path", { "d": "m17 17 5 5" }]]);

const CalendarX = createLucideIcon("calendar-x", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }], ["path", { "d": "m14 14-4 4" }], ["path", { "d": "m10 14 4 4" }]]);

const Calendar = createLucideIcon("calendar", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }]]);

const Calendars = createLucideIcon("calendars", [["path", { "d": "M12 2v2" }], ["path", { "d": "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" }], ["path", { "d": "M18 2v2" }], ["path", { "d": "M2 13h2" }], ["path", { "d": "M8 8h14" }], ["rect", { "x": "8", "y": "3", "width": "14", "height": "14", "rx": "2" }]]);

const CameraOff = createLucideIcon("camera-off", [["path", { "d": "M14.564 14.558a3 3 0 1 1-4.122-4.121" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" }], ["path", { "d": "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" }]]);

const Camera = createLucideIcon("camera", [["path", { "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }], ["circle", { "cx": "12", "cy": "13", "r": "3" }]]);

const CandyCane = createLucideIcon("candy-cane", [["path", { "d": "m10.8 5 2.111 4.223" }], ["path", { "d": "M17.75 7 15 2.1" }], ["path", { "d": "m4.874 14.647 2.12 4.24" }], ["path", { "d": "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z" }], ["path", { "d": "m7.906 9.712 2.005 4.411" }]]);

const CandyOff = createLucideIcon("candy-off", [["path", { "d": "M10 10v7.9" }], ["path", { "d": "M11.802 6.145a5 5 0 0 1 6.053 6.053" }], ["path", { "d": "M14 6.1v2.243" }], ["path", { "d": "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" }], ["path", { "d": "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" }]]);

const Candy = createLucideIcon("candy", [["path", { "d": "M10 7v10.9" }], ["path", { "d": "M14 6.1V17" }], ["path", { "d": "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" }], ["path", { "d": "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" }], ["path", { "d": "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" }]]);

const Cannabis = createLucideIcon("cannabis", [["path", { "d": "M12 22v-4" }], ["path", { "d": "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" }]]);

const CannabisOff = createLucideIcon("cannabis-off", [["path", { "d": "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" }], ["path", { "d": "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" }], ["path", { "d": "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" }], ["path", { "d": "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" }]]);

const CaptionsOff = createLucideIcon("captions-off", [["path", { "d": "M10.5 5H19a2 2 0 0 1 2 2v8.5" }], ["path", { "d": "M17 11h-.5" }], ["path", { "d": "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M7 11h4" }], ["path", { "d": "M7 15h2.5" }]]);

const Captions = createLucideIcon("captions", [["rect", { "width": "18", "height": "14", "x": "3", "y": "5", "rx": "2", "ry": "2" }], ["path", { "d": "M7 15h4M15 15h2M7 11h2M13 11h4" }]]);

const CarFront = createLucideIcon("car-front", [["path", { "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { "d": "M7 14h.01" }], ["path", { "d": "M17 14h.01" }], ["rect", { "width": "18", "height": "8", "x": "3", "y": "10", "rx": "2" }], ["path", { "d": "M5 18v2" }], ["path", { "d": "M19 18v2" }]]);

const CarTaxiFront = createLucideIcon("car-taxi-front", [["path", { "d": "M10 2h4" }], ["path", { "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { "d": "M7 14h.01" }], ["path", { "d": "M17 14h.01" }], ["rect", { "width": "18", "height": "8", "x": "3", "y": "10", "rx": "2" }], ["path", { "d": "M5 18v2" }], ["path", { "d": "M19 18v2" }]]);

const Car = createLucideIcon("car", [["path", { "d": "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }], ["circle", { "cx": "7", "cy": "17", "r": "2" }], ["path", { "d": "M9 17h6" }], ["circle", { "cx": "17", "cy": "17", "r": "2" }]]);

const Caravan = createLucideIcon("caravan", [["path", { "d": "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }], ["path", { "d": "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }], ["path", { "d": "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }], ["circle", { "cx": "8", "cy": "19", "r": "2" }]]);

const Carrot = createLucideIcon("carrot", [["path", { "d": "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }], ["path", { "d": "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }], ["path", { "d": "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]]);

const CardSim = createLucideIcon("card-sim", [["path", { "d": "M12 14v4" }], ["path", { "d": "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }], ["path", { "d": "M8 14h8" }], ["rect", { "x": "8", "y": "10", "width": "8", "height": "8", "rx": "1" }]]);

const CaseLower = createLucideIcon("case-lower", [["path", { "d": "M10 9v7" }], ["path", { "d": "M14 6v10" }], ["circle", { "cx": "17.5", "cy": "12.5", "r": "3.5" }], ["circle", { "cx": "6.5", "cy": "12.5", "r": "3.5" }]]);

const CaseSensitive = createLucideIcon("case-sensitive", [["path", { "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }], ["path", { "d": "M22 9v7" }], ["path", { "d": "M3.304 13h6.392" }], ["circle", { "cx": "18.5", "cy": "12.5", "r": "3.5" }]]);

const CaseUpper = createLucideIcon("case-upper", [["path", { "d": "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" }], ["path", { "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }], ["path", { "d": "M3.304 13h6.392" }]]);

const CassetteTape = createLucideIcon("cassette-tape", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["circle", { "cx": "8", "cy": "10", "r": "2" }], ["path", { "d": "M8 12h8" }], ["circle", { "cx": "16", "cy": "10", "r": "2" }], ["path", { "d": "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]]);

const Cast = createLucideIcon("cast", [["path", { "d": "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }], ["path", { "d": "M2 12a9 9 0 0 1 8 8" }], ["path", { "d": "M2 16a5 5 0 0 1 4 4" }], ["line", { "x1": "2", "x2": "2.01", "y1": "20", "y2": "20" }]]);

const Cat = createLucideIcon("cat", [["path", { "d": "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" }], ["path", { "d": "M8 14v.5" }], ["path", { "d": "M16 14v.5" }], ["path", { "d": "M11.25 16.25h1.5L12 17l-.75-.75Z" }]]);

const Castle = createLucideIcon("castle", [["path", { "d": "M10 5V3" }], ["path", { "d": "M14 5V3" }], ["path", { "d": "M15 21v-3a3 3 0 0 0-6 0v3" }], ["path", { "d": "M18 3v8" }], ["path", { "d": "M18 5H6" }], ["path", { "d": "M22 11H2" }], ["path", { "d": "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" }], ["path", { "d": "M6 3v8" }]]);

const CctvOff = createLucideIcon("cctv-off", [["path", { "d": "m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448" }], ["path", { "d": "m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037" }], ["path", { "d": "M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M2 21v-4" }], ["path", { "d": "M7 9h.01" }]]);

const Cctv = createLucideIcon("cctv", [["path", { "d": "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }], ["path", { "d": "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" }], ["path", { "d": "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }], ["path", { "d": "M2 21v-4" }], ["path", { "d": "M7 9h.01" }]]);

const ChartArea = createLucideIcon("chart-area", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" }]]);

const ChartBarBig = createLucideIcon("chart-bar-big", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { "x": "7", "y": "13", "width": "9", "height": "4", "rx": "1" }], ["rect", { "x": "7", "y": "5", "width": "12", "height": "4", "rx": "1" }]]);

const ChartBarDecreasing = createLucideIcon("chart-bar-decreasing", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 11h8" }], ["path", { "d": "M7 16h3" }], ["path", { "d": "M7 6h12" }]]);

const ChartBarIncreasing = createLucideIcon("chart-bar-increasing", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 11h8" }], ["path", { "d": "M7 16h12" }], ["path", { "d": "M7 6h3" }]]);

const ChartBarStacked = createLucideIcon("chart-bar-stacked", [["path", { "d": "M11 13v4" }], ["path", { "d": "M15 5v4" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { "x": "7", "y": "13", "width": "9", "height": "4", "rx": "1" }], ["rect", { "x": "7", "y": "5", "width": "12", "height": "4", "rx": "1" }]]);

const ChartBar = createLucideIcon("chart-bar", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 16h8" }], ["path", { "d": "M7 11h12" }], ["path", { "d": "M7 6h3" }]]);

const ChartCandlestick = createLucideIcon("chart-candlestick", [["path", { "d": "M9 5v4" }], ["rect", { "width": "4", "height": "6", "x": "7", "y": "9", "rx": "1" }], ["path", { "d": "M9 15v2" }], ["path", { "d": "M17 3v2" }], ["rect", { "width": "4", "height": "8", "x": "15", "y": "5", "rx": "1" }], ["path", { "d": "M17 13v3" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }]]);

const ChartColumnDecreasing = createLucideIcon("chart-column-decreasing", [["path", { "d": "M13 17V9" }], ["path", { "d": "M18 17v-3" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M8 17V5" }]]);

const ChartColumnBig = createLucideIcon("chart-column-big", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { "x": "15", "y": "5", "width": "4", "height": "12", "rx": "1" }], ["rect", { "x": "7", "y": "8", "width": "4", "height": "9", "rx": "1" }]]);

const ChartColumnIncreasing = createLucideIcon("chart-column-increasing", [["path", { "d": "M13 17V9" }], ["path", { "d": "M18 17V5" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M8 17v-3" }]]);

const ChartColumnStacked = createLucideIcon("chart-column-stacked", [["path", { "d": "M11 13H7" }], ["path", { "d": "M19 9h-4" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { "x": "15", "y": "5", "width": "4", "height": "12", "rx": "1" }], ["rect", { "x": "7", "y": "8", "width": "4", "height": "9", "rx": "1" }]]);

const ChartColumn = createLucideIcon("chart-column", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M18 17V9" }], ["path", { "d": "M13 17V5" }], ["path", { "d": "M8 17v-3" }]]);

const ChartGantt = createLucideIcon("chart-gantt", [["path", { "d": "M10 6h8" }], ["path", { "d": "M12 16h6" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M8 11h7" }]]);

const ChartLine = createLucideIcon("chart-line", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "m19 9-5 5-4-4-3 3" }]]);

const ChartNetwork = createLucideIcon("chart-network", [["path", { "d": "m13.11 7.664 1.78 2.672" }], ["path", { "d": "m14.162 12.788-3.324 1.424" }], ["path", { "d": "m20 4-6.06 1.515" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["circle", { "cx": "12", "cy": "6", "r": "2" }], ["circle", { "cx": "16", "cy": "12", "r": "2" }], ["circle", { "cx": "9", "cy": "15", "r": "2" }]]);

const ChartNoAxesColumnDecreasing = createLucideIcon("chart-no-axes-column-decreasing", [["path", { "d": "M5 21V3" }], ["path", { "d": "M12 21V9" }], ["path", { "d": "M19 21v-6" }]]);

const ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", [["path", { "d": "M5 21v-6" }], ["path", { "d": "M12 21V9" }], ["path", { "d": "M19 21V3" }]]);

const ChartNoAxesGantt = createLucideIcon("chart-no-axes-gantt", [["path", { "d": "M6 5h12" }], ["path", { "d": "M4 12h10" }], ["path", { "d": "M12 19h8" }]]);

const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", [["path", { "d": "M5 21v-6" }], ["path", { "d": "M12 21V3" }], ["path", { "d": "M19 21V9" }]]);

const ChartPie = createLucideIcon("chart-pie", [["path", { "d": "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" }], ["path", { "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }]]);

const ChartNoAxesCombined = createLucideIcon("chart-no-axes-combined", [["path", { "d": "M12 16v5" }], ["path", { "d": "M16 14.639V21" }], ["path", { "d": "M20 10.656V21" }], ["path", { "d": "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }], ["path", { "d": "M4 18.463V21" }], ["path", { "d": "M8 14.656V21" }]]);

const ChartScatter = createLucideIcon("chart-scatter", [["circle", { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "18.5", "cy": "5.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "11.5", "cy": "11.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "7.5", "cy": "16.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "17.5", "cy": "14.5", "r": ".5", "fill": "currentColor" }], ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }]]);

const ChartSpline = createLucideIcon("chart-spline", [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]]);

const CheckLine = createLucideIcon("check-line", [["path", { "d": "M20 4L9 15" }], ["path", { "d": "M21 19L3 19" }], ["path", { "d": "M9 15L4 10" }]]);

const Check = createLucideIcon("check", [["path", { "d": "M20 6 9 17l-5-5" }]]);

const CheckCheck = createLucideIcon("check-check", [["path", { "d": "M18 6 7 17l-5-5" }], ["path", { "d": "m22 10-7.5 7.5L13 16" }]]);

const ChefHat = createLucideIcon("chef-hat", [["path", { "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }], ["path", { "d": "M6 17h12" }]]);

const Cherry = createLucideIcon("cherry", [["path", { "d": "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { "d": "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { "d": "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }], ["path", { "d": "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]]);

const ChessBishop = createLucideIcon("chess-bishop", [["path", { "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }], ["path", { "d": "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" }], ["path", { "d": "m16 7-2.5 2.5" }], ["path", { "d": "M9 2h6" }]]);

const ChessKing = createLucideIcon("chess-king", [["path", { "d": "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }], ["path", { "d": "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" }], ["path", { "d": "M10 4h4" }], ["path", { "d": "M12 2v6.818" }]]);

const ChessKnight = createLucideIcon("chess-knight", [["path", { "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }], ["path", { "d": "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" }], ["path", { "d": "m15 5 1.425-1.425" }], ["path", { "d": "m17 8 1.53-1.53" }], ["path", { "d": "M9.713 12.185 7 18" }]]);

const ChessPawn = createLucideIcon("chess-pawn", [["path", { "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }], ["path", { "d": "m14.5 10 1.5 8" }], ["path", { "d": "M7 10h10" }], ["path", { "d": "m8 18 1.5-8" }], ["circle", { "cx": "12", "cy": "6", "r": "4" }]]);

const ChessQueen = createLucideIcon("chess-queen", [["path", { "d": "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }], ["path", { "d": "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" }], ["path", { "d": "m20 9-3 9" }], ["path", { "d": "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" }], ["path", { "d": "M7 18 4 9" }], ["circle", { "cx": "12", "cy": "4", "r": "2" }], ["circle", { "cx": "20", "cy": "7", "r": "2" }], ["circle", { "cx": "4", "cy": "7", "r": "2" }]]);

const ChessRook = createLucideIcon("chess-rook", [["path", { "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }], ["path", { "d": "M10 2v2" }], ["path", { "d": "M14 2v2" }], ["path", { "d": "m17 18-1-9" }], ["path", { "d": "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" }], ["path", { "d": "M6 4h12" }], ["path", { "d": "m7 18 1-9" }]]);

const ChevronDown = createLucideIcon("chevron-down", [["path", { "d": "m6 9 6 6 6-6" }]]);

const ChevronLast = createLucideIcon("chevron-last", [["path", { "d": "m7 18 6-6-6-6" }], ["path", { "d": "M17 6v12" }]]);

const ChevronFirst = createLucideIcon("chevron-first", [["path", { "d": "m17 18-6-6 6-6" }], ["path", { "d": "M7 6v12" }]]);

const ChevronLeft = createLucideIcon("chevron-left", [["path", { "d": "m15 18-6-6 6-6" }]]);

const ChevronRight = createLucideIcon("chevron-right", [["path", { "d": "m9 18 6-6-6-6" }]]);

const ChevronUp = createLucideIcon("chevron-up", [["path", { "d": "m18 15-6-6-6 6" }]]);

const ChevronsDownUp = createLucideIcon("chevrons-down-up", [["path", { "d": "m7 20 5-5 5 5" }], ["path", { "d": "m7 4 5 5 5-5" }]]);

const ChevronsDown = createLucideIcon("chevrons-down", [["path", { "d": "m7 6 5 5 5-5" }], ["path", { "d": "m7 13 5 5 5-5" }]]);

const ChevronsLeftRightEllipsis = createLucideIcon("chevrons-left-right-ellipsis", [["path", { "d": "M12 12h.01" }], ["path", { "d": "M16 12h.01" }], ["path", { "d": "m17 7 5 5-5 5" }], ["path", { "d": "m7 7-5 5 5 5" }], ["path", { "d": "M8 12h.01" }]]);

const ChevronsLeftRight = createLucideIcon("chevrons-left-right", [["path", { "d": "m9 7-5 5 5 5" }], ["path", { "d": "m15 7 5 5-5 5" }]]);

const ChevronsLeft = createLucideIcon("chevrons-left", [["path", { "d": "m11 17-5-5 5-5" }], ["path", { "d": "m18 17-5-5 5-5" }]]);

const ChevronsRightLeft = createLucideIcon("chevrons-right-left", [["path", { "d": "m20 17-5-5 5-5" }], ["path", { "d": "m4 17 5-5-5-5" }]]);

const ChevronsRight = createLucideIcon("chevrons-right", [["path", { "d": "m6 17 5-5-5-5" }], ["path", { "d": "m13 17 5-5-5-5" }]]);

const ChevronsUpDown = createLucideIcon("chevrons-up-down", [["path", { "d": "m7 15 5 5 5-5" }], ["path", { "d": "m7 9 5-5 5 5" }]]);

const ChevronsUp = createLucideIcon("chevrons-up", [["path", { "d": "m17 11-5-5-5 5" }], ["path", { "d": "m17 18-5-5-5 5" }]]);

const Church = createLucideIcon("church", [["path", { "d": "M10 9h4" }], ["path", { "d": "M12 7v5" }], ["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { "d": "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" }], ["path", { "d": "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" }]]);

const CigaretteOff = createLucideIcon("cigarette-off", [["path", { "d": "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }], ["path", { "d": "M18 8c0-2.5-2-2.5-2-5" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }], ["path", { "d": "M22 8c0-2.5-2-2.5-2-5" }], ["path", { "d": "M7 12v4" }]]);

const Cigarette = createLucideIcon("cigarette", [["path", { "d": "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }], ["path", { "d": "M18 8c0-2.5-2-2.5-2-5" }], ["path", { "d": "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { "d": "M22 8c0-2.5-2-2.5-2-5" }], ["path", { "d": "M7 12v4" }]]);

const CircleAlert = createLucideIcon("circle-alert", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }], ["line", { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }]]);

const CircleArrowDown = createLucideIcon("circle-arrow-down", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 8v8" }], ["path", { "d": "m8 12 4 4 4-4" }]]);

const CircleArrowLeft = createLucideIcon("circle-arrow-left", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m12 8-4 4 4 4" }], ["path", { "d": "M16 12H8" }]]);

const CircleArrowOutDownLeft = createLucideIcon("circle-arrow-out-down-left", [["path", { "d": "M2 12a10 10 0 1 1 10 10" }], ["path", { "d": "m2 22 10-10" }], ["path", { "d": "M8 22H2v-6" }]]);

const CircleArrowOutDownRight = createLucideIcon("circle-arrow-out-down-right", [["path", { "d": "M12 22a10 10 0 1 1 10-10" }], ["path", { "d": "M22 22 12 12" }], ["path", { "d": "M22 16v6h-6" }]]);

const CircleArrowOutUpLeft = createLucideIcon("circle-arrow-out-up-left", [["path", { "d": "M2 8V2h6" }], ["path", { "d": "m2 2 10 10" }], ["path", { "d": "M12 2A10 10 0 1 1 2 12" }]]);

const CircleArrowOutUpRight = createLucideIcon("circle-arrow-out-up-right", [["path", { "d": "M22 12A10 10 0 1 1 12 2" }], ["path", { "d": "M22 2 12 12" }], ["path", { "d": "M16 2h6v6" }]]);

const CircleArrowRight = createLucideIcon("circle-arrow-right", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m12 16 4-4-4-4" }], ["path", { "d": "M8 12h8" }]]);

const CircleArrowUp = createLucideIcon("circle-arrow-up", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m16 12-4-4-4 4" }], ["path", { "d": "M12 16V8" }]]);

const CircleCheckBig = createLucideIcon("circle-check-big", [["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { "d": "m9 11 3 3L22 4" }]]);

const CircleCheck = createLucideIcon("circle-check", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const CircleChevronDown = createLucideIcon("circle-chevron-down", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m16 10-4 4-4-4" }]]);

const CircleChevronLeft = createLucideIcon("circle-chevron-left", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m14 16-4-4 4-4" }]]);

const CircleChevronRight = createLucideIcon("circle-chevron-right", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m10 8 4 4-4 4" }]]);

const CircleChevronUp = createLucideIcon("circle-chevron-up", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m8 14 4-4 4 4" }]]);

const CircleDashed = createLucideIcon("circle-dashed", [["path", { "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }], ["path", { "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }], ["path", { "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }], ["path", { "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }], ["path", { "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }], ["path", { "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }], ["path", { "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }], ["path", { "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]]);

const CircleDivide = createLucideIcon("circle-divide", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "8", "x2": "16", "y1": "12", "y2": "12" }], ["line", { "x1": "12", "x2": "12", "y1": "16", "y2": "16" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "8" }]]);

const CircleDollarSign = createLucideIcon("circle-dollar-sign", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { "d": "M12 18V6" }]]);

const CircleDotDashed = createLucideIcon("circle-dot-dashed", [["path", { "d": "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }], ["path", { "d": "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }], ["path", { "d": "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }], ["path", { "d": "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }], ["path", { "d": "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }], ["path", { "d": "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }], ["path", { "d": "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }], ["path", { "d": "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }]]);

const CircleDot = createLucideIcon("circle-dot", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }]]);

const CircleEllipsis = createLucideIcon("circle-ellipsis", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M17 12h.01" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M7 12h.01" }]]);

const CircleEqual = createLucideIcon("circle-equal", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M7 10h10" }], ["path", { "d": "M7 14h10" }]]);

const CircleFadingArrowUp = createLucideIcon("circle-fading-arrow-up", [["path", { "d": "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { "d": "m16 12-4-4-4 4" }], ["path", { "d": "M12 16V8" }], ["path", { "d": "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]);

const CircleFadingPlus = createLucideIcon("circle-fading-plus", [["path", { "d": "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { "d": "M12 8v8" }], ["path", { "d": "M16 12H8" }], ["path", { "d": "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]);

const CircleGauge = createLucideIcon("circle-gauge", [["path", { "d": "M15.6 2.7a10 10 0 1 0 5.7 5.7" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }], ["path", { "d": "M13.4 10.6 19 5" }]]);

const CircleMinus = createLucideIcon("circle-minus", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M8 12h8" }]]);

const CircleOff = createLucideIcon("circle-off", [["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }], ["path", { "d": "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]]);

const CircleParkingOff = createLucideIcon("circle-parking-off", [["path", { "d": "M12.656 7H13a3 3 0 0 1 2.984 3.307" }], ["path", { "d": "M13 13H9" }], ["path", { "d": "M19.071 19.071A1 1 0 0 1 4.93 4.93" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.357 2.687a10 10 0 0 1 12.956 12.956" }], ["path", { "d": "M9 17V9" }]]);

const CircleParking = createLucideIcon("circle-parking", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M9 17V7h4a3 3 0 0 1 0 6H9" }]]);

const CirclePause = createLucideIcon("circle-pause", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "10", "x2": "10", "y1": "15", "y2": "9" }], ["line", { "x1": "14", "x2": "14", "y1": "15", "y2": "9" }]]);

const CirclePile = createLucideIcon("circle-pile", [["circle", { "cx": "12", "cy": "19", "r": "2" }], ["circle", { "cx": "12", "cy": "5", "r": "2" }], ["circle", { "cx": "16", "cy": "12", "r": "2" }], ["circle", { "cx": "20", "cy": "19", "r": "2" }], ["circle", { "cx": "4", "cy": "19", "r": "2" }], ["circle", { "cx": "8", "cy": "12", "r": "2" }]]);

const CirclePlay = createLucideIcon("circle-play", [["path", { "d": "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const CirclePercent = createLucideIcon("circle-percent", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "M15 15h.01" }]]);

const CirclePlus = createLucideIcon("circle-plus", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "M12 8v8" }]]);

const CirclePoundSterling = createLucideIcon("circle-pound-sterling", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M10 16V9.5a1 1 0 0 1 5 0" }], ["path", { "d": "M8 12h4" }], ["path", { "d": "M8 16h7" }]]);

const CirclePower = createLucideIcon("circle-power", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 7v4" }], ["path", { "d": "M7.998 9.003a5 5 0 1 0 8-.005" }]]);

const CircleQuestionMark = createLucideIcon("circle-question-mark", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { "d": "M12 17h.01" }]]);

const CircleSlash2 = createLucideIcon("circle-slash-2", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M22 2 2 22" }]]);

const CircleSlash = createLucideIcon("circle-slash", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "9", "x2": "15", "y1": "15", "y2": "9" }]]);

const CircleSmall = createLucideIcon("circle-small", [["circle", { "cx": "12", "cy": "12", "r": "6" }]]);

const CircleStar = createLucideIcon("circle-star", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }]]);

const CircleStop = createLucideIcon("circle-stop", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["rect", { "x": "9", "y": "9", "width": "6", "height": "6", "rx": "1" }]]);

const CircleUserRound = createLucideIcon("circle-user-round", [["path", { "d": "M17.925 20.056a6 6 0 0 0-11.851.001" }], ["circle", { "cx": "12", "cy": "11", "r": "4" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const CircleUser = createLucideIcon("circle-user", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]]);

const CircleX = createLucideIcon("circle-x", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "m9 9 6 6" }]]);

const Circle = createLucideIcon("circle", [["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const CircuitBoard = createLucideIcon("circuit-board", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M11 9h4a2 2 0 0 0 2-2V3" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }], ["path", { "d": "M7 21v-4a2 2 0 0 1 2-2h4" }], ["circle", { "cx": "15", "cy": "15", "r": "2" }]]);

const Citrus = createLucideIcon("citrus", [["path", { "d": "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }], ["path", { "d": "M19.65 15.66A8 8 0 0 1 8.35 4.34" }], ["path", { "d": "m14 10-5.5 5.5" }], ["path", { "d": "M14 17.85V10H6.15" }]]);

const Clapperboard = createLucideIcon("clapperboard", [["path", { "d": "m12.296 3.464 3.02 3.956" }], ["path", { "d": "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" }], ["path", { "d": "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }], ["path", { "d": "m6.18 5.276 3.1 3.899" }]]);

const ClipboardCheck = createLucideIcon("clipboard-check", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "m9 14 2 2 4-4" }]]);

const ClipboardClock = createLucideIcon("clipboard-clock", [["path", { "d": "M16 14v2.2l1.6 1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v.832" }], ["path", { "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }], ["circle", { "cx": "16", "cy": "16", "r": "6" }], ["rect", { "x": "8", "y": "2", "width": "8", "height": "4", "rx": "1" }]]);

const ClipboardCopy = createLucideIcon("clipboard-copy", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v4" }], ["path", { "d": "M21 14H11" }], ["path", { "d": "m15 10-4 4 4 4" }]]);

const ClipboardList = createLucideIcon("clipboard-list", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "M12 11h4" }], ["path", { "d": "M12 16h4" }], ["path", { "d": "M8 11h.01" }], ["path", { "d": "M8 16h.01" }]]);

const ClipboardMinus = createLucideIcon("clipboard-minus", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "M9 14h6" }]]);

const ClipboardPaste = createLucideIcon("clipboard-paste", [["path", { "d": "M11 14h10" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v1.344" }], ["path", { "d": "m17 18 4-4-4-4" }], ["path", { "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" }], ["rect", { "x": "8", "y": "2", "width": "8", "height": "4", "rx": "1" }]]);

const ClipboardPenLine = createLucideIcon("clipboard-pen-line", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1" }], ["path", { "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }], ["path", { "d": "M16 4h2a2 2 0 0 1 1.73 1" }], ["path", { "d": "M8 18h1" }], ["path", { "d": "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]);

const ClipboardPen = createLucideIcon("clipboard-pen", [["path", { "d": "M16 4h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["path", { "d": "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["rect", { "x": "8", "y": "2", "width": "8", "height": "4", "rx": "1" }]]);

const ClipboardPlus = createLucideIcon("clipboard-plus", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "M9 14h6" }], ["path", { "d": "M12 17v-6" }]]);

const ClipboardType = createLucideIcon("clipboard-type", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "M9 12v-1h6v1" }], ["path", { "d": "M11 17h2" }], ["path", { "d": "M12 11v6" }]]);

const ClipboardX = createLucideIcon("clipboard-x", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "m15 11-6 6" }], ["path", { "d": "m9 11 6 6" }]]);

const Clipboard = createLucideIcon("clipboard", [["rect", { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]]);

const Clock1 = createLucideIcon("clock-1", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l2-4" }]]);

const Clock10 = createLucideIcon("clock-10", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l-4-2" }]]);

const Clock11 = createLucideIcon("clock-11", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l-2-4" }]]);

const Clock12 = createLucideIcon("clock-12", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6" }]]);

const Clock2 = createLucideIcon("clock-2", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l4-2" }]]);

const Clock3 = createLucideIcon("clock-3", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6h4" }]]);

const Clock4 = createLucideIcon("clock-4", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l4 2" }]]);

const Clock5 = createLucideIcon("clock-5", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l2 4" }]]);

const Clock6 = createLucideIcon("clock-6", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v10" }]]);

const Clock8 = createLucideIcon("clock-8", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l-4 2" }]]);

const Clock7 = createLucideIcon("clock-7", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l-2 4" }]]);

const ClockAlert = createLucideIcon("clock-alert", [["path", { "d": "M12 6v6l4 2" }], ["path", { "d": "M20 12v5" }], ["path", { "d": "M20 21h.01" }], ["path", { "d": "M21.25 8.2A10 10 0 1 0 16 21.16" }]]);

const Clock9 = createLucideIcon("clock-9", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6H8" }]]);

const ClockArrowDown = createLucideIcon("clock-arrow-down", [["path", { "d": "M12 6v6l2 1" }], ["path", { "d": "M12.337 21.994a10 10 0 1 1 9.588-8.767" }], ["path", { "d": "m14 18 4 4 4-4" }], ["path", { "d": "M18 14v8" }]]);

const ClockArrowLeft = createLucideIcon("clock-arrow-left", [["path", { "d": "M12 6v6l1.5.8" }], ["path", { "d": "M12.338 21.994a10 10 0 1 1 9.587-8.767" }], ["path", { "d": "M14 18h8" }], ["path", { "d": "m18 22-4-4 4-4" }]]);

const ClockArrowRight = createLucideIcon("clock-arrow-right", [["path", { "d": "M12 6v6l2 1" }], ["path", { "d": "M13.5 21.885A10 10 0 1 1 22 12" }], ["path", { "d": "M14 18h8" }], ["path", { "d": "m18 22 4-4-4-4" }]]);

const ClockArrowUp = createLucideIcon("clock-arrow-up", [["path", { "d": "M12 6v6l1.56.78" }], ["path", { "d": "M13.227 21.925a10 10 0 1 1 8.767-9.588" }], ["path", { "d": "m14 18 4-4 4 4" }], ["path", { "d": "M18 22v-8" }]]);

const ClockCheck = createLucideIcon("clock-check", [["path", { "d": "M12 6v6l4 2" }], ["path", { "d": "M22 12a10 10 0 1 0-11 9.95" }], ["path", { "d": "m22 16-5.5 5.5L14 19" }]]);

const ClockFading = createLucideIcon("clock-fading", [["path", { "d": "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { "d": "M12 6v6l4 2" }], ["path", { "d": "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]);

const ClockPlus = createLucideIcon("clock-plus", [["path", { "d": "M12 6v6l3.644 1.822" }], ["path", { "d": "M16 19h6" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M21.92 13.267a10 10 0 1 0-8.653 8.653" }]]);

const Clock = createLucideIcon("clock", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l4 2" }]]);

const ClosedCaption = createLucideIcon("closed-caption", [["path", { "d": "M10 9.17a3 3 0 1 0 0 5.66" }], ["path", { "d": "M17 9.17a3 3 0 1 0 0 5.66" }], ["rect", { "x": "2", "y": "5", "width": "20", "height": "14", "rx": "2" }]]);

const CloudAlert = createLucideIcon("cloud-alert", [["path", { "d": "M12 12v4" }], ["path", { "d": "M12 20h.01" }], ["path", { "d": "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" }]]);

const CloudBackup = createLucideIcon("cloud-backup", [["path", { "d": "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" }], ["path", { "d": "M7 11v4h4" }], ["path", { "d": "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" }]]);

const CloudCheck = createLucideIcon("cloud-check", [["path", { "d": "m17 15-5.5 5.5L9 18" }], ["path", { "d": "M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" }]]);

const CloudCog = createLucideIcon("cloud-cog", [["path", { "d": "m10.852 19.772-.383.924" }], ["path", { "d": "m13.148 14.228.383-.923" }], ["path", { "d": "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }], ["path", { "d": "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }], ["path", { "d": "m14.772 15.852.923-.383" }], ["path", { "d": "m14.772 18.148.923.383" }], ["path", { "d": "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }], ["path", { "d": "m9.228 15.852-.923-.383" }], ["path", { "d": "m9.228 18.148-.923.383" }]]);

const CloudDownload = createLucideIcon("cloud-download", [["path", { "d": "M12 13v8l-4-4" }], ["path", { "d": "m12 21 4-4" }], ["path", { "d": "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]]);

const CloudDrizzle = createLucideIcon("cloud-drizzle", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "M8 19v1" }], ["path", { "d": "M8 14v1" }], ["path", { "d": "M16 19v1" }], ["path", { "d": "M16 14v1" }], ["path", { "d": "M12 21v1" }], ["path", { "d": "M12 16v1" }]]);

const CloudFog = createLucideIcon("cloud-fog", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "M16 17H7" }], ["path", { "d": "M17 21H9" }]]);

const CloudHail = createLucideIcon("cloud-hail", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "M16 14v2" }], ["path", { "d": "M8 14v2" }], ["path", { "d": "M16 20h.01" }], ["path", { "d": "M8 20h.01" }], ["path", { "d": "M12 16v2" }], ["path", { "d": "M12 22h.01" }]]);

const CloudLightning = createLucideIcon("cloud-lightning", [["path", { "d": "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }], ["path", { "d": "m13 12-3 5h4l-3 5" }]]);

const CloudMoonRain = createLucideIcon("cloud-moon-rain", [["path", { "d": "M11 20v2" }], ["path", { "d": "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" }], ["path", { "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { "d": "M7 19v2" }]]);

const CloudOff = createLucideIcon("cloud-off", [["path", { "d": "M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" }], ["path", { "d": "M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" }], ["path", { "d": "m2 2 20 20" }]]);

const CloudMoon = createLucideIcon("cloud-moon", [["path", { "d": "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" }], ["path", { "d": "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" }]]);

const CloudRainWind = createLucideIcon("cloud-rain-wind", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "m9.2 22 3-7" }], ["path", { "d": "m9 13-3 7" }], ["path", { "d": "m17 13-3 7" }]]);

const CloudRain = createLucideIcon("cloud-rain", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "M16 14v6" }], ["path", { "d": "M8 14v6" }], ["path", { "d": "M12 16v6" }]]);

const CloudSnow = createLucideIcon("cloud-snow", [["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "M8 15h.01" }], ["path", { "d": "M8 19h.01" }], ["path", { "d": "M12 17h.01" }], ["path", { "d": "M12 21h.01" }], ["path", { "d": "M16 15h.01" }], ["path", { "d": "M16 19h.01" }]]);

const CloudSunRain = createLucideIcon("cloud-sun-rain", [["path", { "d": "M12 2v2" }], ["path", { "d": "m4.93 4.93 1.41 1.41" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "m19.07 4.93-1.41 1.41" }], ["path", { "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { "d": "M11 20v2" }], ["path", { "d": "M7 19v2" }]]);

const CloudSun = createLucideIcon("cloud-sun", [["path", { "d": "M12 2v2" }], ["path", { "d": "m4.93 4.93 1.41 1.41" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "m19.07 4.93-1.41 1.41" }], ["path", { "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { "d": "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]]);

const CloudSync = createLucideIcon("cloud-sync", [["path", { "d": "m17 18-1.535 1.605a5 5 0 0 1-8-1.5" }], ["path", { "d": "M17 22v-4h-4" }], ["path", { "d": "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" }], ["path", { "d": "M7 10v4h4" }], ["path", { "d": "m7 14 1.535-1.605a5 5 0 0 1 8 1.5" }]]);

const CloudUpload = createLucideIcon("cloud-upload", [["path", { "d": "M12 13v8" }], ["path", { "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { "d": "m8 17 4-4 4 4" }]]);

const Cloud = createLucideIcon("cloud", [["path", { "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]);

const Cloudy = createLucideIcon("cloudy", [["path", { "d": "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" }], ["path", { "d": "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" }]]);

const Clover = createLucideIcon("clover", [["path", { "d": "M16.17 7.83 2 22" }], ["path", { "d": "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" }], ["path", { "d": "m7.83 7.83 8.34 8.34" }]]);

const Club = createLucideIcon("club", [["path", { "d": "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }], ["path", { "d": "M12 17.66L12 22" }]]);

const CodeXml = createLucideIcon("code-xml", [["path", { "d": "m18 16 4-4-4-4" }], ["path", { "d": "m6 8-4 4 4 4" }], ["path", { "d": "m14.5 4-5 16" }]]);

const Code = createLucideIcon("code", [["path", { "d": "m16 18 6-6-6-6" }], ["path", { "d": "m8 6-6 6 6 6" }]]);

const Coffee = createLucideIcon("coffee", [["path", { "d": "M10 2v2" }], ["path", { "d": "M14 2v2" }], ["path", { "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }], ["path", { "d": "M6 2v2" }]]);

const Cog = createLucideIcon("cog", [["path", { "d": "M11 10.27 7 3.34" }], ["path", { "d": "m11 13.73-4 6.93" }], ["path", { "d": "M12 22v-2" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M14 12h8" }], ["path", { "d": "m17 20.66-1-1.73" }], ["path", { "d": "m17 3.34-1 1.73" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "m20.66 17-1.73-1" }], ["path", { "d": "m20.66 7-1.73 1" }], ["path", { "d": "m3.34 17 1.73-1" }], ["path", { "d": "m3.34 7 1.73 1" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }], ["circle", { "cx": "12", "cy": "12", "r": "8" }]]);

const Coins = createLucideIcon("coins", [["path", { "d": "M13.744 17.736a6 6 0 1 1-7.48-7.48" }], ["path", { "d": "M15 6h1v4" }], ["path", { "d": "m6.134 14.768.866-.5 2 3.464" }], ["circle", { "cx": "16", "cy": "8", "r": "6" }]]);

const Columns2 = createLucideIcon("columns-2", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M12 3v18" }]]);

const Columns3Cog = createLucideIcon("columns-3-cog", [["path", { "d": "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" }], ["path", { "d": "m14.3 19.6 1-.4" }], ["path", { "d": "M15 3v7.5" }], ["path", { "d": "m15.2 16.9-.9-.3" }], ["path", { "d": "m16.6 21.7.3-.9" }], ["path", { "d": "m16.8 15.3-.4-1" }], ["path", { "d": "m19.1 15.2.3-.9" }], ["path", { "d": "m19.6 21.7-.4-1" }], ["path", { "d": "m20.7 16.8 1-.4" }], ["path", { "d": "m21.7 19.4-.9-.3" }], ["path", { "d": "M9 3v18" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const Columns3 = createLucideIcon("columns-3", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "M15 3v18" }]]);

const Columns4 = createLucideIcon("columns-4", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7.5 3v18" }], ["path", { "d": "M12 3v18" }], ["path", { "d": "M16.5 3v18" }]]);

const Combine = createLucideIcon("combine", [["path", { "d": "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }], ["path", { "d": "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }], ["path", { "d": "m7 15 3 3" }], ["path", { "d": "m7 21 3-3H5a2 2 0 0 1-2-2v-2" }], ["rect", { "x": "14", "y": "14", "width": "7", "height": "7", "rx": "1" }], ["rect", { "x": "3", "y": "3", "width": "7", "height": "7", "rx": "1" }]]);

const Command = createLucideIcon("command", [["path", { "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]]);

const Compass = createLucideIcon("compass", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }]]);

const Component = createLucideIcon("component", [["path", { "d": "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }], ["path", { "d": "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }], ["path", { "d": "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }], ["path", { "d": "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }]]);

const Computer = createLucideIcon("computer", [["rect", { "width": "14", "height": "8", "x": "5", "y": "2", "rx": "2" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2" }], ["path", { "d": "M6 18h2" }], ["path", { "d": "M12 18h6" }]]);

const ConciergeBell = createLucideIcon("concierge-bell", [["path", { "d": "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }], ["path", { "d": "M20 16a8 8 0 1 0-16 0" }], ["path", { "d": "M12 4v4" }], ["path", { "d": "M10 4h4" }]]);

const Cone = createLucideIcon("cone", [["path", { "d": "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }], ["ellipse", { "cx": "12", "cy": "19", "rx": "9", "ry": "3" }]]);

const Construction = createLucideIcon("construction", [["rect", { "x": "2", "y": "6", "width": "20", "height": "8", "rx": "1" }], ["path", { "d": "M17 14v7" }], ["path", { "d": "M7 14v7" }], ["path", { "d": "M17 3v3" }], ["path", { "d": "M7 3v3" }], ["path", { "d": "M10 14 2.3 6.3" }], ["path", { "d": "m14 6 7.7 7.7" }], ["path", { "d": "m8 6 8 8" }]]);

const ContactRound = createLucideIcon("contact-round", [["path", { "d": "M16 2v2" }], ["path", { "d": "M17.915 22a6 6 0 0 0-12 0" }], ["path", { "d": "M8 2v2" }], ["circle", { "cx": "12", "cy": "12", "r": "4" }], ["rect", { "x": "3", "y": "4", "width": "18", "height": "18", "rx": "2" }]]);

const Contact = createLucideIcon("contact", [["path", { "d": "M16 2v2" }], ["path", { "d": "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }], ["path", { "d": "M8 2v2" }], ["circle", { "cx": "12", "cy": "11", "r": "3" }], ["rect", { "x": "3", "y": "4", "width": "18", "height": "18", "rx": "2" }]]);

const Container = createLucideIcon("container", [["path", { "d": "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" }], ["path", { "d": "M10 21.9V14L2.1 9.1" }], ["path", { "d": "m10 14 11.9-6.9" }], ["path", { "d": "M14 19.8v-8.1" }], ["path", { "d": "M18 17.5V9.4" }]]);

const Contrast = createLucideIcon("contrast", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 18a6 6 0 0 0 0-12v12z" }]]);

const Cookie = createLucideIcon("cookie", [["path", { "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }], ["path", { "d": "M8.5 8.5v.01" }], ["path", { "d": "M16 15.5v.01" }], ["path", { "d": "M12 12v.01" }], ["path", { "d": "M11 17v.01" }], ["path", { "d": "M7 14v.01" }]]);

const CookingPot = createLucideIcon("cooking-pot", [["path", { "d": "M2 12h20" }], ["path", { "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }], ["path", { "d": "m4 8 16-4" }], ["path", { "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]]);

const CopyCheck = createLucideIcon("copy-check", [["path", { "d": "m12 15 2 2 4-4" }], ["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const CopyMinus = createLucideIcon("copy-minus", [["line", { "x1": "12", "x2": "18", "y1": "15", "y2": "15" }], ["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const CopyPlus = createLucideIcon("copy-plus", [["line", { "x1": "15", "x2": "15", "y1": "12", "y2": "18" }], ["line", { "x1": "12", "x2": "18", "y1": "15", "y2": "15" }], ["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const CopySlash = createLucideIcon("copy-slash", [["line", { "x1": "12", "x2": "18", "y1": "18", "y2": "12" }], ["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const CopyX = createLucideIcon("copy-x", [["line", { "x1": "12", "x2": "18", "y1": "12", "y2": "18" }], ["line", { "x1": "12", "x2": "18", "y1": "18", "y2": "12" }], ["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const Copy = createLucideIcon("copy", [["rect", { "width": "14", "height": "14", "x": "8", "y": "8", "rx": "2", "ry": "2" }], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]);

const Copyleft = createLucideIcon("copyleft", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M9.17 14.83a4 4 0 1 0 0-5.66" }]]);

const Copyright = createLucideIcon("copyright", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M14.83 14.83a4 4 0 1 1 0-5.66" }]]);

const CornerDownLeft = createLucideIcon("corner-down-left", [["path", { "d": "M20 4v7a4 4 0 0 1-4 4H4" }], ["path", { "d": "m9 10-5 5 5 5" }]]);

const CornerDownRight = createLucideIcon("corner-down-right", [["path", { "d": "m15 10 5 5-5 5" }], ["path", { "d": "M4 4v7a4 4 0 0 0 4 4h12" }]]);

const CornerLeftDown = createLucideIcon("corner-left-down", [["path", { "d": "m14 15-5 5-5-5" }], ["path", { "d": "M20 4h-7a4 4 0 0 0-4 4v12" }]]);

const CornerLeftUp = createLucideIcon("corner-left-up", [["path", { "d": "M14 9 9 4 4 9" }], ["path", { "d": "M20 20h-7a4 4 0 0 1-4-4V4" }]]);

const CornerRightDown = createLucideIcon("corner-right-down", [["path", { "d": "m10 15 5 5 5-5" }], ["path", { "d": "M4 4h7a4 4 0 0 1 4 4v12" }]]);

const CornerRightUp = createLucideIcon("corner-right-up", [["path", { "d": "m10 9 5-5 5 5" }], ["path", { "d": "M4 20h7a4 4 0 0 0 4-4V4" }]]);

const CornerUpLeft = createLucideIcon("corner-up-left", [["path", { "d": "M20 20v-7a4 4 0 0 0-4-4H4" }], ["path", { "d": "M9 14 4 9l5-5" }]]);

const CornerUpRight = createLucideIcon("corner-up-right", [["path", { "d": "m15 14 5-5-5-5" }], ["path", { "d": "M4 20v-7a4 4 0 0 1 4-4h12" }]]);

const Cpu = createLucideIcon("cpu", [["path", { "d": "M12 20v2" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M17 20v2" }], ["path", { "d": "M17 2v2" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M2 17h2" }], ["path", { "d": "M2 7h2" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "M20 17h2" }], ["path", { "d": "M20 7h2" }], ["path", { "d": "M7 20v2" }], ["path", { "d": "M7 2v2" }], ["rect", { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }], ["rect", { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }]]);

const CreativeCommons = createLucideIcon("creative-commons", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }], ["path", { "d": "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]]);

const CreditCard = createLucideIcon("credit-card", [["rect", { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "2" }], ["line", { "x1": "2", "x2": "22", "y1": "10", "y2": "10" }]]);

const Croissant = createLucideIcon("croissant", [["path", { "d": "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }], ["path", { "d": "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }], ["path", { "d": "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }], ["path", { "d": "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }], ["path", { "d": "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" }]]);

const Cross = createLucideIcon("cross", [["path", { "d": "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" }]]);

const Crop = createLucideIcon("crop", [["path", { "d": "M6 2v14a2 2 0 0 0 2 2h14" }], ["path", { "d": "M18 22V8a2 2 0 0 0-2-2H2" }]]);

const Crosshair = createLucideIcon("crosshair", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "22", "x2": "18", "y1": "12", "y2": "12" }], ["line", { "x1": "6", "x2": "2", "y1": "12", "y2": "12" }], ["line", { "x1": "12", "x2": "12", "y1": "6", "y2": "2" }], ["line", { "x1": "12", "x2": "12", "y1": "22", "y2": "18" }]]);

const Crown = createLucideIcon("crown", [["path", { "d": "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" }], ["path", { "d": "M5 21h14" }]]);

const Cuboid = createLucideIcon("cuboid", [["path", { "d": "M10 22v-8" }], ["path", { "d": "M2.336 8.89 10 14l11.715-7.029" }], ["path", { "d": "M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" }]]);

const CupSoda = createLucideIcon("cup-soda", [["path", { "d": "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }], ["path", { "d": "M5 8h14" }], ["path", { "d": "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }], ["path", { "d": "m12 8 1-6h2" }]]);

const Currency = createLucideIcon("currency", [["circle", { "cx": "12", "cy": "12", "r": "8" }], ["line", { "x1": "3", "x2": "6", "y1": "3", "y2": "6" }], ["line", { "x1": "21", "x2": "18", "y1": "3", "y2": "6" }], ["line", { "x1": "3", "x2": "6", "y1": "21", "y2": "18" }], ["line", { "x1": "21", "x2": "18", "y1": "21", "y2": "18" }]]);

const Cylinder = createLucideIcon("cylinder", [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 5v14a9 3 0 0 0 18 0V5" }]]);

const DatabaseBackup = createLucideIcon("database-backup", [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 12a9 3 0 0 0 5 2.69" }], ["path", { "d": "M21 9.3V5" }], ["path", { "d": "M3 5v14a9 3 0 0 0 6.47 2.88" }], ["path", { "d": "M12 12v4h4" }], ["path", { "d": "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]]);

const Dam = createLucideIcon("dam", [["path", { "d": "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { "d": "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { "d": "M2 10h4" }], ["path", { "d": "M2 14h4" }], ["path", { "d": "M2 18h4" }], ["path", { "d": "M2 6h4" }], ["path", { "d": "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]]);

const DatabaseZap = createLucideIcon("database-zap", [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 5V19A9 3 0 0 0 15 21.84" }], ["path", { "d": "M21 5V8" }], ["path", { "d": "M21 12L18 17H22L19 22" }], ["path", { "d": "M3 12A9 3 0 0 0 14.59 14.87" }]]);

const DatabaseSearch = createLucideIcon("database-search", [["path", { "d": "M21 11.693V5" }], ["path", { "d": "m22 22-1.875-1.875" }], ["path", { "d": "M3 12a9 3 0 0 0 8.697 2.998" }], ["path", { "d": "M3 5v14a9 3 0 0 0 9.28 2.999" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }], ["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }]]);

const Database = createLucideIcon("database", [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }], ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]]);

const DecimalsArrowLeft = createLucideIcon("decimals-arrow-left", [["path", { "d": "m13 21-3-3 3-3" }], ["path", { "d": "M20 18H10" }], ["path", { "d": "M3 11h.01" }], ["rect", { "x": "6", "y": "3", "width": "5", "height": "8", "rx": "2.5" }]]);

const DecimalsArrowRight = createLucideIcon("decimals-arrow-right", [["path", { "d": "M10 18h10" }], ["path", { "d": "m17 21 3-3-3-3" }], ["path", { "d": "M3 11h.01" }], ["rect", { "x": "15", "y": "3", "width": "5", "height": "8", "rx": "2.5" }], ["rect", { "x": "6", "y": "3", "width": "5", "height": "8", "rx": "2.5" }]]);

const Delete = createLucideIcon("delete", [["path", { "d": "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }], ["path", { "d": "m12 9 6 6" }], ["path", { "d": "m18 9-6 6" }]]);

const Dessert = createLucideIcon("dessert", [["path", { "d": "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" }], ["path", { "d": "M20.804 14.869a9 9 0 0 1-17.608 0" }], ["circle", { "cx": "12", "cy": "4", "r": "2" }]]);

const Diameter = createLucideIcon("diameter", [["circle", { "cx": "19", "cy": "19", "r": "2" }], ["circle", { "cx": "5", "cy": "5", "r": "2" }], ["path", { "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86" }], ["path", { "d": "m6.41 6.41 11.18 11.18" }], ["path", { "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]]);

const DiamondMinus = createLucideIcon("diamond-minus", [["path", { "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { "d": "M8 12h8" }]]);

const DiamondPercent = createLucideIcon("diamond-percent", [["path", { "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" }], ["path", { "d": "M9.2 9.2h.01" }], ["path", { "d": "m14.5 9.5-5 5" }], ["path", { "d": "M14.7 14.8h.01" }]]);

const DiamondPlus = createLucideIcon("diamond-plus", [["path", { "d": "M12 8v8" }], ["path", { "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { "d": "M8 12h8" }]]);

const Diamond = createLucideIcon("diamond", [["path", { "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" }]]);

const Dice1 = createLucideIcon("dice-1", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M12 12h.01" }]]);

const Dice2 = createLucideIcon("dice-2", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M15 9h.01" }], ["path", { "d": "M9 15h.01" }]]);

const Dice3 = createLucideIcon("dice-3", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M16 8h.01" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M8 16h.01" }]]);

const Dice4 = createLucideIcon("dice-4", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M16 8h.01" }], ["path", { "d": "M8 8h.01" }], ["path", { "d": "M8 16h.01" }], ["path", { "d": "M16 16h.01" }]]);

const Dice5 = createLucideIcon("dice-5", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M16 8h.01" }], ["path", { "d": "M8 8h.01" }], ["path", { "d": "M8 16h.01" }], ["path", { "d": "M16 16h.01" }], ["path", { "d": "M12 12h.01" }]]);

const Dice6 = createLucideIcon("dice-6", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M16 8h.01" }], ["path", { "d": "M16 12h.01" }], ["path", { "d": "M16 16h.01" }], ["path", { "d": "M8 8h.01" }], ["path", { "d": "M8 12h.01" }], ["path", { "d": "M8 16h.01" }]]);

const Dices = createLucideIcon("dices", [["rect", { "width": "12", "height": "12", "x": "2", "y": "10", "rx": "2", "ry": "2" }], ["path", { "d": "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "M10 14h.01" }], ["path", { "d": "M15 6h.01" }], ["path", { "d": "M18 9h.01" }]]);

const Diff = createLucideIcon("diff", [["path", { "d": "M12 3v14" }], ["path", { "d": "M5 10h14" }], ["path", { "d": "M5 21h14" }]]);

const Disc2 = createLucideIcon("disc-2", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M12 12h.01" }]]);

const Disc3 = createLucideIcon("disc-3", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M6 12c0-1.7.7-3.2 1.8-4.2" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }], ["path", { "d": "M18 12c0 1.7-.7 3.2-1.8 4.2" }]]);

const DiscAlbum = createLucideIcon("disc-album", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["circle", { "cx": "12", "cy": "12", "r": "5" }], ["path", { "d": "M12 12h.01" }]]);

const Disc = createLucideIcon("disc", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const Divide = createLucideIcon("divide", [["circle", { "cx": "12", "cy": "6", "r": "1" }], ["line", { "x1": "5", "x2": "19", "y1": "12", "y2": "12" }], ["circle", { "cx": "12", "cy": "18", "r": "1" }]]);

const DnaOff = createLucideIcon("dna-off", [["path", { "d": "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }], ["path", { "d": "m17 6-2.891-2.891" }], ["path", { "d": "M2 15c3.333-3 6.667-3 10-3" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "m20 9 .891.891" }], ["path", { "d": "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }], ["path", { "d": "M3.109 14.109 4 15" }], ["path", { "d": "m6.5 12.5 1 1" }], ["path", { "d": "m7 18 2.891 2.891" }], ["path", { "d": "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]]);

const Dna = createLucideIcon("dna", [["path", { "d": "m10 16 1.5 1.5" }], ["path", { "d": "m14 8-1.5-1.5" }], ["path", { "d": "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }], ["path", { "d": "m16.5 10.5 1 1" }], ["path", { "d": "m17 6-2.891-2.891" }], ["path", { "d": "M2 15c6.667-6 13.333 0 20-6" }], ["path", { "d": "m20 9 .891.891" }], ["path", { "d": "M3.109 14.109 4 15" }], ["path", { "d": "m6.5 12.5 1 1" }], ["path", { "d": "m7 18 2.891 2.891" }], ["path", { "d": "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]]);

const Dock = createLucideIcon("dock", [["path", { "d": "M2 8h20" }], ["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M6 16h12" }]]);

const Dog = createLucideIcon("dog", [["path", { "d": "M11.25 16.25h1.5L12 17z" }], ["path", { "d": "M16 14v.5" }], ["path", { "d": "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" }], ["path", { "d": "M8 14v.5" }], ["path", { "d": "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" }]]);

const DollarSign = createLucideIcon("dollar-sign", [["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "22" }], ["path", { "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]]);

const DoorClosedLocked = createLucideIcon("door-closed-locked", [["path", { "d": "M10 12h.01" }], ["path", { "d": "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }], ["path", { "d": "M2 20h8" }], ["path", { "d": "M20 17v-2a2 2 0 1 0-4 0v2" }], ["rect", { "x": "14", "y": "17", "width": "8", "height": "5", "rx": "1" }]]);

const Donut = createLucideIcon("donut", [["path", { "d": "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const DoorClosed = createLucideIcon("door-closed", [["path", { "d": "M10 12h.01" }], ["path", { "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }], ["path", { "d": "M2 20h20" }]]);

const DoorOpen = createLucideIcon("door-open", [["path", { "d": "M11 20H2" }], ["path", { "d": "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" }], ["path", { "d": "M11 4H8a2 2 0 0 0-2 2v14" }], ["path", { "d": "M14 12h.01" }], ["path", { "d": "M22 20h-3" }]]);

const Dot = createLucideIcon("dot", [["circle", { "cx": "12.1", "cy": "12.1", "r": "1" }]]);

const Download = createLucideIcon("download", [["path", { "d": "M12 15V3" }], ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["path", { "d": "m7 10 5 5 5-5" }]]);

const DraftingCompass = createLucideIcon("drafting-compass", [["path", { "d": "m12.99 6.74 1.93 3.44" }], ["path", { "d": "M19.136 12a10 10 0 0 1-14.271 0" }], ["path", { "d": "m21 21-2.16-3.84" }], ["path", { "d": "m3 21 8.02-14.26" }], ["circle", { "cx": "12", "cy": "5", "r": "2" }]]);

const Drama = createLucideIcon("drama", [["path", { "d": "M10 11h.01" }], ["path", { "d": "M14 6h.01" }], ["path", { "d": "M18 6h.01" }], ["path", { "d": "M6.5 13.1h.01" }], ["path", { "d": "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }], ["path", { "d": "M17.4 9.9c-.8.8-2 .8-2.8 0" }], ["path", { "d": "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" }], ["path", { "d": "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]]);

const Drill = createLucideIcon("drill", [["path", { "d": "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }], ["path", { "d": "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" }], ["path", { "d": "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }], ["path", { "d": "M18 6h4" }], ["path", { "d": "m5 10-2 8" }], ["path", { "d": "m7 18 2-8" }]]);

const Drone = createLucideIcon("drone", [["path", { "d": "M10 10 7 7" }], ["path", { "d": "m10 14-3 3" }], ["path", { "d": "m14 10 3-3" }], ["path", { "d": "m14 14 3 3" }], ["path", { "d": "M14.205 4.139a4 4 0 1 1 5.439 5.863" }], ["path", { "d": "M19.637 14a4 4 0 1 1-5.432 5.868" }], ["path", { "d": "M4.367 10a4 4 0 1 1 5.438-5.862" }], ["path", { "d": "M9.795 19.862a4 4 0 1 1-5.429-5.873" }], ["rect", { "x": "10", "y": "8", "width": "4", "height": "8", "rx": "1" }]]);

const DropletOff = createLucideIcon("droplet-off", [["path", { "d": "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" }]]);

const Droplet = createLucideIcon("droplet", [["path", { "d": "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }]]);

const Droplets = createLucideIcon("droplets", [["path", { "d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" }], ["path", { "d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" }]]);

const Drum = createLucideIcon("drum", [["path", { "d": "m2 2 8 8" }], ["path", { "d": "m22 2-8 8" }], ["ellipse", { "cx": "12", "cy": "9", "rx": "10", "ry": "5" }], ["path", { "d": "M7 13.4v7.9" }], ["path", { "d": "M12 14v8" }], ["path", { "d": "M17 13.4v7.9" }], ["path", { "d": "M2 9v8a10 5 0 0 0 20 0V9" }]]);

const Drumstick = createLucideIcon("drumstick", [["path", { "d": "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }], ["path", { "d": "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]]);

const Dumbbell = createLucideIcon("dumbbell", [["path", { "d": "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" }], ["path", { "d": "m2.5 21.5 1.4-1.4" }], ["path", { "d": "m20.1 3.9 1.4-1.4" }], ["path", { "d": "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" }], ["path", { "d": "m9.6 14.4 4.8-4.8" }]]);

const EarOff = createLucideIcon("ear-off", [["path", { "d": "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }], ["path", { "d": "M6 8.5c0-.75.13-1.47.36-2.14" }], ["path", { "d": "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }], ["path", { "d": "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Ear = createLucideIcon("ear", [["path", { "d": "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }], ["path", { "d": "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]]);

const EarthLock = createLucideIcon("earth-lock", [["path", { "d": "M7 3.34V5a3 3 0 0 0 3 3" }], ["path", { "d": "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["path", { "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { "d": "M12 2a10 10 0 1 0 9.54 13" }], ["path", { "d": "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { "width": "8", "height": "5", "x": "14", "y": "6", "rx": "1" }]]);

const Earth = createLucideIcon("earth", [["path", { "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { "d": "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }], ["path", { "d": "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const EggFried = createLucideIcon("egg-fried", [["circle", { "cx": "11.5", "cy": "12.5", "r": "3.5" }], ["path", { "d": "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" }]]);

const Eclipse = createLucideIcon("eclipse", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 2a7 7 0 1 0 10 10" }]]);

const EggOff = createLucideIcon("egg-off", [["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" }], ["path", { "d": "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" }]]);

const Egg = createLucideIcon("egg", [["path", { "d": "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" }]]);

const Ellipse = createLucideIcon("ellipse", [["ellipse", { "cx": "12", "cy": "12", "rx": "10", "ry": "6" }]]);

const EllipsisVertical = createLucideIcon("ellipsis-vertical", [["circle", { "cx": "12", "cy": "12", "r": "1" }], ["circle", { "cx": "12", "cy": "5", "r": "1" }], ["circle", { "cx": "12", "cy": "19", "r": "1" }]]);

const Ellipsis = createLucideIcon("ellipsis", [["circle", { "cx": "12", "cy": "12", "r": "1" }], ["circle", { "cx": "19", "cy": "12", "r": "1" }], ["circle", { "cx": "5", "cy": "12", "r": "1" }]]);

const EqualApproximately = createLucideIcon("equal-approximately", [["path", { "d": "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }], ["path", { "d": "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }]]);

const EqualNot = createLucideIcon("equal-not", [["line", { "x1": "5", "x2": "19", "y1": "9", "y2": "9" }], ["line", { "x1": "5", "x2": "19", "y1": "15", "y2": "15" }], ["line", { "x1": "19", "x2": "5", "y1": "5", "y2": "19" }]]);

const Equal = createLucideIcon("equal", [["line", { "x1": "5", "x2": "19", "y1": "9", "y2": "9" }], ["line", { "x1": "5", "x2": "19", "y1": "15", "y2": "15" }]]);

const Eraser = createLucideIcon("eraser", [["path", { "d": "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" }], ["path", { "d": "m5.082 11.09 8.828 8.828" }]]);

const EthernetPort = createLucideIcon("ethernet-port", [["path", { "d": "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }], ["path", { "d": "M6 8v1" }], ["path", { "d": "M10 8v1" }], ["path", { "d": "M14 8v1" }], ["path", { "d": "M18 8v1" }]]);

const Euro = createLucideIcon("euro", [["path", { "d": "M4 10h12" }], ["path", { "d": "M4 14h9" }], ["path", { "d": "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }]]);

const EvCharger = createLucideIcon("ev-charger", [["path", { "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }], ["path", { "d": "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }], ["path", { "d": "M2 21h13" }], ["path", { "d": "M3 7h11" }], ["path", { "d": "m9 11-2 3h3l-2 3" }]]);

const Expand = createLucideIcon("expand", [["path", { "d": "m15 15 6 6" }], ["path", { "d": "m15 9 6-6" }], ["path", { "d": "M21 16v5h-5" }], ["path", { "d": "M21 8V3h-5" }], ["path", { "d": "M3 16v5h5" }], ["path", { "d": "m3 21 6-6" }], ["path", { "d": "M3 8V3h5" }], ["path", { "d": "M9 9 3 3" }]]);

const ExternalLink = createLucideIcon("external-link", [["path", { "d": "M15 3h6v6" }], ["path", { "d": "M10 14 21 3" }], ["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]]);

const EyeClosed = createLucideIcon("eye-closed", [["path", { "d": "m15 18-.722-3.25" }], ["path", { "d": "M2 8a10.645 10.645 0 0 0 20 0" }], ["path", { "d": "m20 15-1.726-2.05" }], ["path", { "d": "m4 15 1.726-2.05" }], ["path", { "d": "m9 18 .722-3.25" }]]);

const EyeDashed = createLucideIcon("eye-dashed", [["path", { "d": "M13.054 18.946a11 11 0 0 1-2.11 0" }], ["path", { "d": "M13.054 5.054a11 11 0 0 0-2.11-.001" }], ["path", { "d": "M17.072 6.274a11 11 0 0 1 1.753 1.173" }], ["path", { "d": "M18.825 16.552a11 11 0 0 1-1.753 1.174" }], ["path", { "d": "M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955" }], ["path", { "d": "M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954" }], ["path", { "d": "M5.173 7.448a11 11 0 0 1 1.753-1.174" }], ["path", { "d": "M6.926 17.726a11 11 0 0 1-1.753-1.174" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const EyeOff = createLucideIcon("eye-off", [["path", { "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }], ["path", { "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }], ["path", { "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }], ["path", { "d": "m2 2 20 20" }]]);

const Factory = createLucideIcon("factory", [["path", { "d": "M12 16h.01" }], ["path", { "d": "M16 16h.01" }], ["path", { "d": "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" }], ["path", { "d": "M8 16h.01" }]]);

const Fan = createLucideIcon("fan", [["path", { "d": "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" }], ["path", { "d": "M12 12v.01" }]]);

const Eye = createLucideIcon("eye", [["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const FastForward = createLucideIcon("fast-forward", [["path", { "d": "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" }], ["path", { "d": "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" }]]);

const Feather = createLucideIcon("feather", [["path", { "d": "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" }], ["path", { "d": "M16 8 2 22" }], ["path", { "d": "M17.5 15H9" }]]);

const Fence = createLucideIcon("fence", [["path", { "d": "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { "d": "M6 8h4" }], ["path", { "d": "M6 18h4" }], ["path", { "d": "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { "d": "M14 8h4" }], ["path", { "d": "M14 18h4" }], ["path", { "d": "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]]);

const FileArchive = createLucideIcon("file-archive", [["path", { "d": "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 12v-1" }], ["path", { "d": "M8 18v-2" }], ["path", { "d": "M8 7V6" }], ["circle", { "cx": "8", "cy": "20", "r": "2" }]]);

const FerrisWheel = createLucideIcon("ferris-wheel", [["circle", { "cx": "12", "cy": "12", "r": "2" }], ["path", { "d": "M12 2v4" }], ["path", { "d": "m6.8 15-3.5 2" }], ["path", { "d": "m20.7 7-3.5 2" }], ["path", { "d": "M6.8 9 3.3 7" }], ["path", { "d": "m20.7 17-3.5-2" }], ["path", { "d": "m9 22 3-8 3 8" }], ["path", { "d": "M8 22h8" }], ["path", { "d": "M18 18.7a9 9 0 1 0-12 0" }]]);

const FileAxis3d = createLucideIcon("file-axis-3d", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m8 18 4-4" }], ["path", { "d": "M8 10v8h8" }]]);

const FileBox = createLucideIcon("file-box", [["path", { "d": "M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M11.7 14.2 7 17l-4.7-2.8" }], ["path", { "d": "M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z" }], ["path", { "d": "M7 17v5" }]]);

const FileBadge = createLucideIcon("file-badge", [["path", { "d": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" }], ["circle", { "cx": "6", "cy": "14", "r": "3" }]]);

const FileBracesCorner = createLucideIcon("file-braces-corner", [["path", { "d": "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" }], ["path", { "d": "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" }]]);

const FileBraces = createLucideIcon("file-braces", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }], ["path", { "d": "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]]);

const FileChartColumnIncreasing = createLucideIcon("file-chart-column-increasing", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 18v-2" }], ["path", { "d": "M12 18v-4" }], ["path", { "d": "M16 18v-6" }]]);

const FileChartColumn = createLucideIcon("file-chart-column", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 18v-1" }], ["path", { "d": "M12 18v-6" }], ["path", { "d": "M16 18v-3" }]]);

const FileChartPie = createLucideIcon("file-chart-pie", [["path", { "d": "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M4.017 11.512a6 6 0 1 0 8.466 8.475" }], ["path", { "d": "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" }]]);

const FileChartLine = createLucideIcon("file-chart-line", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m16 13-3.5 3.5-2-2L8 17" }]]);

const FileCheckCorner = createLucideIcon("file-check-corner", [["path", { "d": "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m14 20 2 2 4-4" }]]);

const FileCheck = createLucideIcon("file-check", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m9 15 2 2 4-4" }]]);

const FileClock = createLucideIcon("file-clock", [["path", { "d": "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 14v2.2l1.6 1" }], ["circle", { "cx": "8", "cy": "16", "r": "6" }]]);

const FileCodeCorner = createLucideIcon("file-code-corner", [["path", { "d": "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m5 16-3 3 3 3" }], ["path", { "d": "m9 22 3-3-3-3" }]]);

const FileCode = createLucideIcon("file-code", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 12.5 8 15l2 2.5" }], ["path", { "d": "m14 12.5 2 2.5-2 2.5" }]]);

const FileCog = createLucideIcon("file-cog", [["path", { "d": "M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" }], ["path", { "d": "M20 8v12a2 2 0 0 1-2 2h-4.182" }], ["path", { "d": "m3.305 19.53.923-.382" }], ["path", { "d": "M4 10.592V4a2 2 0 0 1 2-2h8" }], ["path", { "d": "m4.228 16.852-.924-.383" }], ["path", { "d": "m5.852 15.228-.383-.923" }], ["path", { "d": "m5.852 20.772-.383.924" }], ["path", { "d": "m8.148 15.228.383-.923" }], ["path", { "d": "m8.53 21.696-.382-.924" }], ["path", { "d": "m9.773 16.852.922-.383" }], ["path", { "d": "m9.773 19.148.922.383" }], ["circle", { "cx": "7", "cy": "18", "r": "3" }]]);

const FileDiff = createLucideIcon("file-diff", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M9 10h6" }], ["path", { "d": "M12 13V7" }], ["path", { "d": "M9 17h6" }]]);

const FileDigit = createLucideIcon("file-digit", [["path", { "d": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 16h2v6" }], ["path", { "d": "M10 22h4" }], ["rect", { "x": "2", "y": "16", "width": "4", "height": "6", "rx": "2" }]]);

const FileDown = createLucideIcon("file-down", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M12 18v-6" }], ["path", { "d": "m9 15 3 3 3-3" }]]);

const FileExclamationPoint = createLucideIcon("file-exclamation-point", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M12 9v4" }], ["path", { "d": "M12 17h.01" }]]);

const FileHeadphone = createLucideIcon("file-headphone", [["path", { "d": "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" }]]);

const FileImage = createLucideIcon("file-image", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["circle", { "cx": "10", "cy": "12", "r": "2" }], ["path", { "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]]);

const FileHeart = createLucideIcon("file-heart", [["path", { "d": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z" }]]);

const FileInput = createLucideIcon("file-input", [["path", { "d": "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M2 15h10" }], ["path", { "d": "m9 18 3-3-3-3" }]]);

const FileLock = createLucideIcon("file-lock", [["path", { "d": "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M9 17v-2a2 2 0 0 0-4 0v2" }], ["rect", { "width": "8", "height": "5", "x": "3", "y": "17", "rx": "1" }]]);

const FileKey = createLucideIcon("file-key", [["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M4 12v6" }], ["path", { "d": "M4 14h2" }], ["path", { "d": "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" }], ["circle", { "cx": "4", "cy": "20", "r": "2" }]]);

const FileMinusCorner = createLucideIcon("file-minus-corner", [["path", { "d": "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M14 18h6" }]]);

const FileMinus = createLucideIcon("file-minus", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M9 15h6" }]]);

const FileMusic = createLucideIcon("file-music", [["path", { "d": "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 20v-7l3 1.474" }], ["circle", { "cx": "6", "cy": "20", "r": "2" }]]);

const FileOutput = createLucideIcon("file-output", [["path", { "d": "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m5 11-3 3" }], ["path", { "d": "m5 17-3-3h10" }]]);

const FilePenLine = createLucideIcon("file-pen-line", [["path", { "d": "M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" }], ["path", { "d": "M14.487 7.858A1 1 0 0 1 14 7V2" }], ["path", { "d": "M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" }], ["path", { "d": "M8 18h1" }]]);

const FilePen = createLucideIcon("file-pen", [["path", { "d": "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" }]]);

const FilePlay = createLucideIcon("file-play", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" }]]);

const FilePlusCorner = createLucideIcon("file-plus-corner", [["path", { "d": "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M14 19h6" }], ["path", { "d": "M17 16v6" }]]);

const FilePlus = createLucideIcon("file-plus", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M9 15h6" }], ["path", { "d": "M12 18v-6" }]]);

const FileQuestionMark = createLucideIcon("file-question-mark", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M12 17h.01" }], ["path", { "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]]);

const FileScan = createLucideIcon("file-scan", [["path", { "d": "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M16 14a2 2 0 0 0-2 2" }], ["path", { "d": "M16 22a2 2 0 0 1-2-2" }], ["path", { "d": "M20 14a2 2 0 0 1 2 2" }], ["path", { "d": "M20 22a2 2 0 0 0 2-2" }]]);

const FileSearchCorner = createLucideIcon("file-search-corner", [["path", { "d": "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m21 22-2.88-2.88" }], ["circle", { "cx": "16", "cy": "17", "r": "3" }]]);

const FileSearch = createLucideIcon("file-search", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["circle", { "cx": "11.5", "cy": "14.5", "r": "2.5" }], ["path", { "d": "M13.3 16.3 15 18" }]]);

const FileSliders = createLucideIcon("file-sliders", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "M10 11v2" }], ["path", { "d": "M8 17h8" }], ["path", { "d": "M14 16v2" }]]);

const FileSignal = createLucideIcon("file-signal", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 15h.01" }], ["path", { "d": "M11.5 13.5a2.5 2.5 0 0 1 0 3" }], ["path", { "d": "M15 12a5 5 0 0 1 0 6" }]]);

const FileStack = createLucideIcon("file-stack", [["path", { "d": "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" }], ["path", { "d": "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }], ["path", { "d": "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" }]]);

const FileSpreadsheet = createLucideIcon("file-spreadsheet", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 13h2" }], ["path", { "d": "M14 13h2" }], ["path", { "d": "M8 17h2" }], ["path", { "d": "M14 17h2" }]]);

const FileSymlink = createLucideIcon("file-symlink", [["path", { "d": "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m10 18 3-3-3-3" }]]);

const FileTerminal = createLucideIcon("file-terminal", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m8 16 2-2-2-2" }], ["path", { "d": "M12 18h4" }]]);

const FileText = createLucideIcon("file-text", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 9H8" }], ["path", { "d": "M16 13H8" }], ["path", { "d": "M16 17H8" }]]);

const FileTypeCorner = createLucideIcon("file-type-corner", [["path", { "d": "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" }], ["path", { "d": "M6 22h2" }], ["path", { "d": "M7 14v8" }]]);

const FileType = createLucideIcon("file-type", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M11 18h2" }], ["path", { "d": "M12 12v6" }], ["path", { "d": "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" }]]);

const FileUp = createLucideIcon("file-up", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M12 12v6" }], ["path", { "d": "m15 15-3-3-3 3" }]]);

const FileUser = createLucideIcon("file-user", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M16 22a4 4 0 0 0-8 0" }], ["circle", { "cx": "12", "cy": "15", "r": "3" }]]);

const FileVolume = createLucideIcon("file-volume", [["path", { "d": "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M12 15a5 5 0 0 1 0 6" }], ["path", { "d": "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" }]]);

const FileVideoCamera = createLucideIcon("file-video-camera", [["path", { "d": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" }], ["rect", { "width": "7", "height": "6", "x": "3", "y": "16", "rx": "1" }]]);

const FileXCorner = createLucideIcon("file-x-corner", [["path", { "d": "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m15 17 5 5" }], ["path", { "d": "m20 17-5 5" }]]);

const FileX = createLucideIcon("file-x", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m14.5 12.5-5 5" }], ["path", { "d": "m9.5 12.5 5 5" }]]);

const Files = createLucideIcon("files", [["path", { "d": "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }], ["path", { "d": "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" }], ["path", { "d": "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" }]]);

const File = createLucideIcon("file", [["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }]]);

const Film = createLucideIcon("film", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 3v18" }], ["path", { "d": "M3 7.5h4" }], ["path", { "d": "M3 12h18" }], ["path", { "d": "M3 16.5h4" }], ["path", { "d": "M17 3v18" }], ["path", { "d": "M17 7.5h4" }], ["path", { "d": "M17 16.5h4" }]]);

const FingerprintPattern = createLucideIcon("fingerprint-pattern", [["path", { "d": "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }], ["path", { "d": "M14 13.12c0 2.38 0 6.38-1 8.88" }], ["path", { "d": "M17.29 21.02c.12-.6.43-2.3.5-3.02" }], ["path", { "d": "M2 12a10 10 0 0 1 18-6" }], ["path", { "d": "M2 16h.01" }], ["path", { "d": "M21.8 16c.2-2 .131-5.354 0-6" }], ["path", { "d": "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }], ["path", { "d": "M8.65 22c.21-.66.45-1.32.57-2" }], ["path", { "d": "M9 6.8a6 6 0 0 1 9 5.2v2" }]]);

const FireExtinguisher = createLucideIcon("fire-extinguisher", [["path", { "d": "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }], ["path", { "d": "M9 18h8" }], ["path", { "d": "M18 3h-3" }], ["path", { "d": "M11 3a6 6 0 0 0-6 6v11" }], ["path", { "d": "M5 13h4" }], ["path", { "d": "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]]);

const FishOff = createLucideIcon("fish-off", [["path", { "d": "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" }], ["path", { "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" }], ["path", { "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" }]]);

const FishSymbol = createLucideIcon("fish-symbol", [["path", { "d": "M2 16s9-15 20-4C11 23 2 8 2 8" }]]);

const Fish = createLucideIcon("fish", [["path", { "d": "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }], ["path", { "d": "M18 12v.5" }], ["path", { "d": "M16 17.93a9.77 9.77 0 0 1 0-11.86" }], ["path", { "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }], ["path", { "d": "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }], ["path", { "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]]);

const FishingHook = createLucideIcon("fishing-hook", [["path", { "d": "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" }], ["path", { "d": "M20.414 8.586 22 7" }], ["circle", { "cx": "19", "cy": "10", "r": "2" }]]);

const FishingRod = createLucideIcon("fishing-rod", [["path", { "d": "M4 11h1" }], ["path", { "d": "M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" }], ["circle", { "cx": "18", "cy": "18", "r": "2" }]]);

const FlagOff = createLucideIcon("flag-off", [["path", { "d": "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M4 22V4" }], ["path", { "d": "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" }]]);

const FlagTriangleLeft = createLucideIcon("flag-triangle-left", [["path", { "d": "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" }]]);

const FlagTriangleRight = createLucideIcon("flag-triangle-right", [["path", { "d": "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" }]]);

const Flag = createLucideIcon("flag", [["path", { "d": "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }]]);

const FlameKindling = createLucideIcon("flame-kindling", [["path", { "d": "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" }], ["path", { "d": "m5 22 14-4" }], ["path", { "d": "m5 18 14 4" }]]);

const Flame = createLucideIcon("flame", [["path", { "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" }]]);

const FlashlightOff = createLucideIcon("flashlight-off", [["path", { "d": "M11.652 6H18" }], ["path", { "d": "M12 13v1" }], ["path", { "d": "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" }]]);

const Flashlight = createLucideIcon("flashlight", [["path", { "d": "M12 13v1" }], ["path", { "d": "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" }], ["path", { "d": "M6 6h12" }]]);

const FlaskConical = createLucideIcon("flask-conical", [["path", { "d": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" }], ["path", { "d": "M6.453 15h11.094" }], ["path", { "d": "M8.5 2h7" }]]);

const FlaskConicalOff = createLucideIcon("flask-conical-off", [["path", { "d": "M10 2v2.343" }], ["path", { "d": "M14 2v6.343" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }], ["path", { "d": "M6.453 15H15" }], ["path", { "d": "M8.5 2h7" }]]);

const FlaskRound = createLucideIcon("flask-round", [["path", { "d": "M10 2v6.292a7 7 0 1 0 4 0V2" }], ["path", { "d": "M5 15h14" }], ["path", { "d": "M8.5 2h7" }]]);

const FlipHorizontal2 = createLucideIcon("flip-horizontal-2", [["path", { "d": "m3 7 5 5-5 5V7" }], ["path", { "d": "m21 7-5 5 5 5V7" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "M12 14v2" }], ["path", { "d": "M12 8v2" }], ["path", { "d": "M12 2v2" }]]);

const Flower2 = createLucideIcon("flower-2", [["path", { "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" }], ["circle", { "cx": "12", "cy": "8", "r": "2" }], ["path", { "d": "M12 10v12" }], ["path", { "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }], ["path", { "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]]);

const FlipVertical2 = createLucideIcon("flip-vertical-2", [["path", { "d": "m17 3-5 5-5-5h10" }], ["path", { "d": "m17 21-5-5-5 5h10" }], ["path", { "d": "M4 12H2" }], ["path", { "d": "M10 12H8" }], ["path", { "d": "M16 12h-2" }], ["path", { "d": "M22 12h-2" }]]);

const Flower = createLucideIcon("flower", [["circle", { "cx": "12", "cy": "12", "r": "3" }], ["path", { "d": "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" }], ["path", { "d": "M12 7.5V9" }], ["path", { "d": "M7.5 12H9" }], ["path", { "d": "M16.5 12H15" }], ["path", { "d": "M12 16.5V15" }], ["path", { "d": "m8 8 1.88 1.88" }], ["path", { "d": "M14.12 9.88 16 8" }], ["path", { "d": "m8 16 1.88-1.88" }], ["path", { "d": "M14.12 14.12 16 16" }]]);

const Focus = createLucideIcon("focus", [["circle", { "cx": "12", "cy": "12", "r": "3" }], ["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }]]);

const FoldHorizontal = createLucideIcon("fold-horizontal", [["path", { "d": "M2 12h6" }], ["path", { "d": "M22 12h-6" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M12 8v2" }], ["path", { "d": "M12 14v2" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "m19 9-3 3 3 3" }], ["path", { "d": "m5 15 3-3-3-3" }]]);

const FoldVertical = createLucideIcon("fold-vertical", [["path", { "d": "M12 22v-6" }], ["path", { "d": "M12 8V2" }], ["path", { "d": "M4 12H2" }], ["path", { "d": "M10 12H8" }], ["path", { "d": "M16 12h-2" }], ["path", { "d": "M22 12h-2" }], ["path", { "d": "m15 19-3-3-3 3" }], ["path", { "d": "m15 5-3 3-3-3" }]]);

const FolderArchive = createLucideIcon("folder-archive", [["circle", { "cx": "15", "cy": "19", "r": "2" }], ["path", { "d": "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" }], ["path", { "d": "M15 11v-1" }], ["path", { "d": "M15 17v-2" }]]);

const FolderBookmark = createLucideIcon("folder-bookmark", [["path", { "d": "M12 6v8l3-3 3 3V6" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]]);

const FolderCheck = createLucideIcon("folder-check", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "m9 13 2 2 4-4" }]]);

const FolderClock = createLucideIcon("folder-clock", [["path", { "d": "M16 14v2.2l1.6 1" }], ["path", { "d": "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" }], ["circle", { "cx": "16", "cy": "16", "r": "6" }]]);

const FolderClosed = createLucideIcon("folder-closed", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "M2 10h20" }]]);

const FolderCog = createLucideIcon("folder-cog", [["path", { "d": "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" }], ["path", { "d": "m14.305 19.53.923-.382" }], ["path", { "d": "m15.228 16.852-.923-.383" }], ["path", { "d": "m16.852 15.228-.383-.923" }], ["path", { "d": "m16.852 20.772-.383.924" }], ["path", { "d": "m19.148 15.228.383-.923" }], ["path", { "d": "m19.53 21.696-.382-.924" }], ["path", { "d": "m20.772 16.852.924-.383" }], ["path", { "d": "m20.772 19.148.924.383" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const FolderDot = createLucideIcon("folder-dot", [["path", { "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { "cx": "12", "cy": "13", "r": "1" }]]);

const FolderCode = createLucideIcon("folder-code", [["path", { "d": "M10 10.5 8 13l2 2.5" }], ["path", { "d": "m14 10.5 2 2.5-2 2.5" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]]);

const FolderDown = createLucideIcon("folder-down", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "M12 10v6" }], ["path", { "d": "m15 13-3 3-3-3" }]]);

const FolderGit2 = createLucideIcon("folder-git-2", [["path", { "d": "M18 19a5 5 0 0 1-5-5v8" }], ["path", { "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" }], ["circle", { "cx": "13", "cy": "12", "r": "2" }], ["circle", { "cx": "20", "cy": "19", "r": "2" }]]);

const FolderGit = createLucideIcon("folder-git", [["circle", { "cx": "12", "cy": "13", "r": "2" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "M14 13h3" }], ["path", { "d": "M7 13h3" }]]);

const FolderHeart = createLucideIcon("folder-heart", [["path", { "d": "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" }], ["path", { "d": "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }]]);

const FolderKanban = createLucideIcon("folder-kanban", [["path", { "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["path", { "d": "M8 10v4" }], ["path", { "d": "M12 10v2" }], ["path", { "d": "M16 10v6" }]]);

const FolderInput = createLucideIcon("folder-input", [["path", { "d": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" }], ["path", { "d": "M2 13h10" }], ["path", { "d": "m9 16 3-3-3-3" }]]);

const FolderKey = createLucideIcon("folder-key", [["path", { "d": "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" }], ["path", { "d": "M19 12v6" }], ["path", { "d": "M19 14h2" }], ["circle", { "cx": "19", "cy": "20", "r": "2" }]]);

const FolderLock = createLucideIcon("folder-lock", [["rect", { "width": "8", "height": "5", "x": "14", "y": "17", "rx": "1" }], ["path", { "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" }], ["path", { "d": "M20 17v-2a2 2 0 1 0-4 0v2" }]]);

const FolderMinus = createLucideIcon("folder-minus", [["path", { "d": "M9 13h6" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]);

const FolderOpenDot = createLucideIcon("folder-open-dot", [["path", { "d": "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" }], ["circle", { "cx": "14", "cy": "15", "r": "1" }]]);

const FolderOutput = createLucideIcon("folder-output", [["path", { "d": "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" }], ["path", { "d": "M2 13h10" }], ["path", { "d": "m5 10-3 3 3 3" }]]);

const FolderOpen = createLucideIcon("folder-open", [["path", { "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]]);

const FolderPen = createLucideIcon("folder-pen", [["path", { "d": "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" }], ["path", { "d": "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]);

const FolderPlus = createLucideIcon("folder-plus", [["path", { "d": "M12 10v6" }], ["path", { "d": "M9 13h6" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]);

const FolderRoot = createLucideIcon("folder-root", [["path", { "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { "cx": "12", "cy": "13", "r": "2" }], ["path", { "d": "M12 15v5" }]]);

const FolderSearch2 = createLucideIcon("folder-search-2", [["circle", { "cx": "11.5", "cy": "12.5", "r": "2.5" }], ["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "M13.3 14.3 15 16" }]]);

const FolderSearch = createLucideIcon("folder-search", [["path", { "d": "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" }], ["path", { "d": "m21 21-1.9-1.9" }], ["circle", { "cx": "17", "cy": "17", "r": "3" }]]);

const FolderSync = createLucideIcon("folder-sync", [["path", { "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" }], ["path", { "d": "M12 10v4h4" }], ["path", { "d": "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }], ["path", { "d": "M22 22v-4h-4" }], ["path", { "d": "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]]);

const FolderSymlink = createLucideIcon("folder-symlink", [["path", { "d": "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }], ["path", { "d": "m8 16 3-3-3-3" }]]);

const FolderTree = createLucideIcon("folder-tree", [["path", { "d": "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { "d": "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { "d": "M3 5a2 2 0 0 0 2 2h3" }], ["path", { "d": "M3 3v13a2 2 0 0 0 2 2h3" }]]);

const FolderUp = createLucideIcon("folder-up", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "M12 10v6" }], ["path", { "d": "m9 13 3-3 3 3" }]]);

const FolderX = createLucideIcon("folder-x", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { "d": "m9.5 10.5 5 5" }], ["path", { "d": "m14.5 10.5-5 5" }]]);

const Folder = createLucideIcon("folder", [["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]);

const Folders = createLucideIcon("folders", [["path", { "d": "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" }], ["path", { "d": "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" }]]);

const Footprints = createLucideIcon("footprints", [["path", { "d": "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }], ["path", { "d": "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" }], ["path", { "d": "M16 17h4" }], ["path", { "d": "M4 13h4" }]]);

const Form = createLucideIcon("form", [["path", { "d": "M4 14h6" }], ["path", { "d": "M4 2h10" }], ["rect", { "x": "4", "y": "18", "width": "16", "height": "4", "rx": "1" }], ["rect", { "x": "4", "y": "6", "width": "16", "height": "4", "rx": "1" }]]);

const Forward = createLucideIcon("forward", [["path", { "d": "m15 17 5-5-5-5" }], ["path", { "d": "M4 18v-2a4 4 0 0 1 4-4h12" }]]);

const Forklift = createLucideIcon("forklift", [["path", { "d": "M12 12H5a2 2 0 0 0-2 2v5" }], ["path", { "d": "M15 19h7" }], ["path", { "d": "M16 19V2" }], ["path", { "d": "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" }], ["path", { "d": "M7 19h4" }], ["circle", { "cx": "13", "cy": "19", "r": "2" }], ["circle", { "cx": "5", "cy": "19", "r": "2" }]]);

const Frame = createLucideIcon("frame", [["line", { "x1": "22", "x2": "2", "y1": "6", "y2": "6" }], ["line", { "x1": "22", "x2": "2", "y1": "18", "y2": "18" }], ["line", { "x1": "6", "x2": "6", "y1": "2", "y2": "22" }], ["line", { "x1": "18", "x2": "18", "y1": "2", "y2": "22" }]]);

const Frown = createLucideIcon("frown", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M16 16s-1.5-2-4-2-4 2-4 2" }], ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }], ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }]]);

const Fuel = createLucideIcon("fuel", [["path", { "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }], ["path", { "d": "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }], ["path", { "d": "M2 21h13" }], ["path", { "d": "M3 9h11" }]]);

const Fullscreen = createLucideIcon("fullscreen", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { "width": "10", "height": "8", "x": "7", "y": "8", "rx": "1" }]]);

const FunnelPlus = createLucideIcon("funnel-plus", [["path", { "d": "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" }], ["path", { "d": "M16 6h6" }], ["path", { "d": "M19 3v6" }]]);

const FunnelX = createLucideIcon("funnel-x", [["path", { "d": "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" }], ["path", { "d": "m16.5 3.5 5 5" }], ["path", { "d": "m21.5 3.5-5 5" }]]);

const Funnel = createLucideIcon("funnel", [["path", { "d": "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" }]]);

const GalleryHorizontalEnd = createLucideIcon("gallery-horizontal-end", [["path", { "d": "M2 7v10" }], ["path", { "d": "M6 5v14" }], ["rect", { "width": "12", "height": "18", "x": "10", "y": "3", "rx": "2" }]]);

const GalleryHorizontal = createLucideIcon("gallery-horizontal", [["path", { "d": "M2 3v18" }], ["rect", { "width": "12", "height": "18", "x": "6", "y": "3", "rx": "2" }], ["path", { "d": "M22 3v18" }]]);

const GalleryThumbnails = createLucideIcon("gallery-thumbnails", [["rect", { "width": "18", "height": "14", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M4 21h1" }], ["path", { "d": "M9 21h1" }], ["path", { "d": "M14 21h1" }], ["path", { "d": "M19 21h1" }]]);

const GalleryVerticalEnd = createLucideIcon("gallery-vertical-end", [["path", { "d": "M7 2h10" }], ["path", { "d": "M5 6h14" }], ["rect", { "width": "18", "height": "12", "x": "3", "y": "10", "rx": "2" }]]);

const GalleryVertical = createLucideIcon("gallery-vertical", [["path", { "d": "M3 2h18" }], ["rect", { "width": "18", "height": "12", "x": "3", "y": "6", "rx": "2" }], ["path", { "d": "M3 22h18" }]]);

const Gamepad2 = createLucideIcon("gamepad-2", [["line", { "x1": "6", "x2": "10", "y1": "11", "y2": "11" }], ["line", { "x1": "8", "x2": "8", "y1": "9", "y2": "13" }], ["line", { "x1": "15", "x2": "15.01", "y1": "12", "y2": "12" }], ["line", { "x1": "18", "x2": "18.01", "y1": "10", "y2": "10" }], ["path", { "d": "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" }]]);

const GamepadDirectional = createLucideIcon("gamepad-directional", [["path", { "d": "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" }], ["path", { "d": "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" }], ["path", { "d": "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" }], ["path", { "d": "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" }]]);

const Gamepad = createLucideIcon("gamepad", [["line", { "x1": "6", "x2": "10", "y1": "12", "y2": "12" }], ["line", { "x1": "8", "x2": "8", "y1": "10", "y2": "14" }], ["line", { "x1": "15", "x2": "15.01", "y1": "13", "y2": "13" }], ["line", { "x1": "18", "x2": "18.01", "y1": "11", "y2": "11" }], ["rect", { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }]]);

const Gavel = createLucideIcon("gavel", [["path", { "d": "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }], ["path", { "d": "m16 16 6-6" }], ["path", { "d": "m21.5 10.5-8-8" }], ["path", { "d": "m8 8 6-6" }], ["path", { "d": "m8.5 7.5 8 8" }]]);

const Gem = createLucideIcon("gem", [["path", { "d": "M10.5 3 8 9l4 13 4-13-2.5-6" }], ["path", { "d": "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" }], ["path", { "d": "M2 9h20" }]]);

const Gauge = createLucideIcon("gauge", [["path", { "d": "m12 14 4-4" }], ["path", { "d": "M3.34 19a10 10 0 1 1 17.32 0" }]]);

const GeorgianLari = createLucideIcon("georgian-lari", [["path", { "d": "M11.5 21a7.5 7.5 0 1 1 7.35-9" }], ["path", { "d": "M13 12V3" }], ["path", { "d": "M4 21h16" }], ["path", { "d": "M9 12V3" }]]);

const Ghost = createLucideIcon("ghost", [["path", { "d": "M9 10h.01" }], ["path", { "d": "M15 10h.01" }], ["path", { "d": "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]]);

const Gift = createLucideIcon("gift", [["path", { "d": "M12 7v14" }], ["path", { "d": "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }], ["path", { "d": "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }], ["rect", { "x": "3", "y": "7", "width": "18", "height": "4", "rx": "1" }]]);

const GitBranchMinus = createLucideIcon("git-branch-minus", [["path", { "d": "M15 6a9 9 0 0 0-9 9V3" }], ["path", { "d": "M21 18h-6" }], ["circle", { "cx": "18", "cy": "6", "r": "3" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }]]);

const GitBranchPlus = createLucideIcon("git-branch-plus", [["path", { "d": "M6 3v12" }], ["path", { "d": "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { "d": "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { "d": "M15 6a9 9 0 0 0-9 9" }], ["path", { "d": "M18 15v6" }], ["path", { "d": "M21 18h-6" }]]);

const GitCommitHorizontal = createLucideIcon("git-commit-horizontal", [["circle", { "cx": "12", "cy": "12", "r": "3" }], ["line", { "x1": "3", "x2": "9", "y1": "12", "y2": "12" }], ["line", { "x1": "15", "x2": "21", "y1": "12", "y2": "12" }]]);

const GitBranch = createLucideIcon("git-branch", [["path", { "d": "M15 6a9 9 0 0 0-9 9V3" }], ["circle", { "cx": "18", "cy": "6", "r": "3" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }]]);

const GitCommitVertical = createLucideIcon("git-commit-vertical", [["path", { "d": "M12 3v6" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }], ["path", { "d": "M12 15v6" }]]);

const GitCompare = createLucideIcon("git-compare", [["circle", { "cx": "18", "cy": "18", "r": "3" }], ["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v7" }], ["path", { "d": "M11 18H8a2 2 0 0 1-2-2V9" }]]);

const GitCompareArrows = createLucideIcon("git-compare-arrows", [["circle", { "cx": "5", "cy": "6", "r": "3" }], ["path", { "d": "M12 6h5a2 2 0 0 1 2 2v7" }], ["path", { "d": "m15 9-3-3 3-3" }], ["circle", { "cx": "19", "cy": "18", "r": "3" }], ["path", { "d": "M12 18H7a2 2 0 0 1-2-2V9" }], ["path", { "d": "m9 15 3 3-3 3" }]]);

const GitFork = createLucideIcon("git-fork", [["circle", { "cx": "12", "cy": "18", "r": "3" }], ["circle", { "cx": "6", "cy": "6", "r": "3" }], ["circle", { "cx": "18", "cy": "6", "r": "3" }], ["path", { "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }], ["path", { "d": "M12 12v3" }]]);

const GitGraph = createLucideIcon("git-graph", [["circle", { "cx": "5", "cy": "6", "r": "3" }], ["path", { "d": "M5 9v6" }], ["circle", { "cx": "5", "cy": "18", "r": "3" }], ["path", { "d": "M12 3v18" }], ["circle", { "cx": "19", "cy": "6", "r": "3" }], ["path", { "d": "M16 15.7A9 9 0 0 0 19 9" }]]);

const GitMergeConflict = createLucideIcon("git-merge-conflict", [["path", { "d": "M12 6h4a2 2 0 0 1 2 2v7" }], ["path", { "d": "M6 12v9" }], ["path", { "d": "M9 3 3 9" }], ["path", { "d": "M9 9 3 3" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const GitMerge = createLucideIcon("git-merge", [["circle", { "cx": "18", "cy": "18", "r": "3" }], ["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M6 21V9a9 9 0 0 0 9 9" }]]);

const GitPullRequestArrow = createLucideIcon("git-pull-request-arrow", [["circle", { "cx": "5", "cy": "6", "r": "3" }], ["path", { "d": "M5 9v12" }], ["circle", { "cx": "19", "cy": "18", "r": "3" }], ["path", { "d": "m15 9-3-3 3-3" }], ["path", { "d": "M12 6h5a2 2 0 0 1 2 2v7" }]]);

const GitPullRequestClosed = createLucideIcon("git-pull-request-closed", [["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M6 9v12" }], ["path", { "d": "m21 3-6 6" }], ["path", { "d": "m21 9-6-6" }], ["path", { "d": "M18 11.5V15" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const GitPullRequestCreateArrow = createLucideIcon("git-pull-request-create-arrow", [["circle", { "cx": "5", "cy": "6", "r": "3" }], ["path", { "d": "M5 9v12" }], ["path", { "d": "m15 9-3-3 3-3" }], ["path", { "d": "M12 6h5a2 2 0 0 1 2 2v3" }], ["path", { "d": "M19 15v6" }], ["path", { "d": "M22 18h-6" }]]);

const GitPullRequestDraft = createLucideIcon("git-pull-request-draft", [["circle", { "cx": "18", "cy": "18", "r": "3" }], ["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M18 6V5" }], ["path", { "d": "M18 11v-1" }], ["line", { "x1": "6", "x2": "6", "y1": "9", "y2": "21" }]]);

const GitPullRequest = createLucideIcon("git-pull-request", [["circle", { "cx": "18", "cy": "18", "r": "3" }], ["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v7" }], ["line", { "x1": "6", "x2": "6", "y1": "9", "y2": "21" }]]);

const GitPullRequestCreate = createLucideIcon("git-pull-request-create", [["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M6 9v12" }], ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v3" }], ["path", { "d": "M18 15v6" }], ["path", { "d": "M21 18h-6" }]]);

const GlassWater = createLucideIcon("glass-water", [["path", { "d": "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" }], ["path", { "d": "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]]);

const Glasses = createLucideIcon("glasses", [["circle", { "cx": "6", "cy": "15", "r": "4" }], ["circle", { "cx": "18", "cy": "15", "r": "4" }], ["path", { "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }], ["path", { "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }], ["path", { "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]]);

const GlobeCheck = createLucideIcon("globe-check", [["path", { "d": "m15 6 2 2 4-4" }], ["path", { "d": "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }]]);

const GlobeLock = createLucideIcon("globe-lock", [["path", { "d": "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }], ["path", { "d": "M2 12h8.5" }], ["path", { "d": "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { "width": "8", "height": "5", "x": "14", "y": "6", "rx": "1" }]]);

const GlobeOff = createLucideIcon("globe-off", [["path", { "d": "M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" }], ["path", { "d": "M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" }], ["path", { "d": "M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" }], ["path", { "d": "M17.656 12H22" }], ["path", { "d": "M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" }], ["path", { "d": "M2 12h10" }], ["path", { "d": "m2 2 20 20" }]]);

const GlobeX = createLucideIcon("globe-x", [["path", { "d": "m16 3 5 5" }], ["path", { "d": "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }], ["path", { "d": "m21 3-5 5" }]]);

const Globe = createLucideIcon("globe", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { "d": "M2 12h20" }]]);

const Goal = createLucideIcon("goal", [["path", { "d": "M12 13V2l8 4-8 4" }], ["path", { "d": "M20.561 10.222a9 9 0 1 1-12.55-5.29" }], ["path", { "d": "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]]);

const Gpu = createLucideIcon("gpu", [["path", { "d": "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" }], ["path", { "d": "M2 21V3" }], ["path", { "d": "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }], ["circle", { "cx": "16", "cy": "11", "r": "2" }], ["circle", { "cx": "8", "cy": "11", "r": "2" }]]);

const GraduationCap = createLucideIcon("graduation-cap", [["path", { "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }], ["path", { "d": "M22 10v6" }], ["path", { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]]);

const Grape = createLucideIcon("grape", [["path", { "d": "M22 5V2l-5.89 5.89" }], ["circle", { "cx": "16.6", "cy": "15.89", "r": "3" }], ["circle", { "cx": "8.11", "cy": "7.4", "r": "3" }], ["circle", { "cx": "12.35", "cy": "11.65", "r": "3" }], ["circle", { "cx": "13.91", "cy": "5.85", "r": "3" }], ["circle", { "cx": "18.15", "cy": "10.09", "r": "3" }], ["circle", { "cx": "6.56", "cy": "13.2", "r": "3" }], ["circle", { "cx": "10.8", "cy": "17.44", "r": "3" }], ["circle", { "cx": "5", "cy": "19", "r": "3" }]]);

const Grid2x2Check = createLucideIcon("grid-2x2-check", [["path", { "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { "d": "m16 19 2 2 4-4" }]]);

const Grid2x2Plus = createLucideIcon("grid-2x2-plus", [["path", { "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { "d": "M16 19h6" }], ["path", { "d": "M19 22v-6" }]]);

const Grid2x2X = createLucideIcon("grid-2x2-x", [["path", { "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { "d": "m16 16 5 5" }], ["path", { "d": "m16 21 5-5" }]]);

const Grid2x2 = createLucideIcon("grid-2x2", [["path", { "d": "M12 3v18" }], ["path", { "d": "M3 12h18" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const Grid3x2 = createLucideIcon("grid-3x2", [["path", { "d": "M15 3v18" }], ["path", { "d": "M3 12h18" }], ["path", { "d": "M9 3v18" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const Grid3x3 = createLucideIcon("grid-3x3", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "M15 3v18" }]]);

const GripHorizontal = createLucideIcon("grip-horizontal", [["circle", { "cx": "12", "cy": "9", "r": "1" }], ["circle", { "cx": "19", "cy": "9", "r": "1" }], ["circle", { "cx": "5", "cy": "9", "r": "1" }], ["circle", { "cx": "12", "cy": "15", "r": "1" }], ["circle", { "cx": "19", "cy": "15", "r": "1" }], ["circle", { "cx": "5", "cy": "15", "r": "1" }]]);

const Grip = createLucideIcon("grip", [["circle", { "cx": "12", "cy": "5", "r": "1" }], ["circle", { "cx": "19", "cy": "5", "r": "1" }], ["circle", { "cx": "5", "cy": "5", "r": "1" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }], ["circle", { "cx": "19", "cy": "12", "r": "1" }], ["circle", { "cx": "5", "cy": "12", "r": "1" }], ["circle", { "cx": "12", "cy": "19", "r": "1" }], ["circle", { "cx": "19", "cy": "19", "r": "1" }], ["circle", { "cx": "5", "cy": "19", "r": "1" }]]);

const GripVertical = createLucideIcon("grip-vertical", [["circle", { "cx": "9", "cy": "12", "r": "1" }], ["circle", { "cx": "9", "cy": "5", "r": "1" }], ["circle", { "cx": "9", "cy": "19", "r": "1" }], ["circle", { "cx": "15", "cy": "12", "r": "1" }], ["circle", { "cx": "15", "cy": "5", "r": "1" }], ["circle", { "cx": "15", "cy": "19", "r": "1" }]]);

const Group = createLucideIcon("group", [["path", { "d": "M3 7V5c0-1.1.9-2 2-2h2" }], ["path", { "d": "M17 3h2c1.1 0 2 .9 2 2v2" }], ["path", { "d": "M21 17v2c0 1.1-.9 2-2 2h-2" }], ["path", { "d": "M7 21H5c-1.1 0-2-.9-2-2v-2" }], ["rect", { "width": "7", "height": "5", "x": "7", "y": "7", "rx": "1" }], ["rect", { "width": "7", "height": "5", "x": "10", "y": "12", "rx": "1" }]]);

const Ham = createLucideIcon("ham", [["path", { "d": "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }], ["path", { "d": "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }], ["path", { "d": "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" }], ["path", { "d": "m8.5 16.5-1-1" }]]);

const Guitar = createLucideIcon("guitar", [["path", { "d": "m11.9 12.1 4.514-4.514" }], ["path", { "d": "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" }], ["path", { "d": "m6 16 2 2" }], ["path", { "d": "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" }]]);

const Hamburger = createLucideIcon("hamburger", [["path", { "d": "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" }], ["path", { "d": "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" }], ["path", { "d": "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" }], ["path", { "d": "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }]]);

const Hammer = createLucideIcon("hammer", [["path", { "d": "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }], ["path", { "d": "m18 15 4-4" }], ["path", { "d": "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" }]]);

const HandCoins = createLucideIcon("hand-coins", [["path", { "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }], ["path", { "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { "d": "m2 16 6 6" }], ["circle", { "cx": "16", "cy": "9", "r": "2.9" }], ["circle", { "cx": "6", "cy": "5", "r": "3" }]]);

const HandFist = createLucideIcon("hand-fist", [["path", { "d": "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" }], ["path", { "d": "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" }], ["path", { "d": "M9 5A2 2 0 1 0 5 5V10" }], ["path", { "d": "M9 7V4A2 2 0 1 1 13 4V7.268" }]]);

const HandGrab = createLucideIcon("hand-grab", [["path", { "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }], ["path", { "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]]);

const HandHeart = createLucideIcon("hand-heart", [["path", { "d": "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }], ["path", { "d": "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" }], ["path", { "d": "m2 15 6 6" }], ["path", { "d": "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" }]]);

const HandHelping = createLucideIcon("hand-helping", [["path", { "d": "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }], ["path", { "d": "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { "d": "m2 13 6 6" }]]);

const HandMetal = createLucideIcon("hand-metal", [["path", { "d": "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { "d": "M14 11V9a2 2 0 1 0-4 0v2" }], ["path", { "d": "M10 10.5V5a2 2 0 1 0-4 0v9" }], ["path", { "d": "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" }]]);

const HandPlatter = createLucideIcon("hand-platter", [["path", { "d": "M12 3V2" }], ["path", { "d": "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" }], ["path", { "d": "M2 14h12a2 2 0 0 1 0 4h-2" }], ["path", { "d": "M4 10h16" }], ["path", { "d": "M5 10a7 7 0 0 1 14 0" }], ["path", { "d": "M5 14v6a1 1 0 0 1-1 1H2" }]]);

const Hand = createLucideIcon("hand", [["path", { "d": "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { "d": "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { "d": "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }], ["path", { "d": "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]);

const Handbag = createLucideIcon("handbag", [["path", { "d": "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" }], ["path", { "d": "M8 11V6a4 4 0 0 1 8 0v5" }]]);

const Handshake = createLucideIcon("handshake", [["path", { "d": "m11 17 2 2a1 1 0 1 0 3-3" }], ["path", { "d": "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }], ["path", { "d": "m21 3 1 11h-2" }], ["path", { "d": "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }], ["path", { "d": "M3 4h8" }]]);

const HardDriveDownload = createLucideIcon("hard-drive-download", [["path", { "d": "M12 2v8" }], ["path", { "d": "m16 6-4 4-4-4" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "M10 18h.01" }]]);

const HardDriveUpload = createLucideIcon("hard-drive-upload", [["path", { "d": "m16 6-4-4-4 4" }], ["path", { "d": "M12 2v8" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "M10 18h.01" }]]);

const HardDrive = createLucideIcon("hard-drive", [["path", { "d": "M10 16h.01" }], ["path", { "d": "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }], ["path", { "d": "M21.946 12.013H2.054" }], ["path", { "d": "M6 16h.01" }]]);

const HardHat = createLucideIcon("hard-hat", [["path", { "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }], ["path", { "d": "M14 6a6 6 0 0 1 6 6v3" }], ["path", { "d": "M4 15v-3a6 6 0 0 1 6-6" }], ["rect", { "x": "2", "y": "15", "width": "20", "height": "4", "rx": "1" }]]);

const Hash = createLucideIcon("hash", [["line", { "x1": "4", "x2": "20", "y1": "9", "y2": "9" }], ["line", { "x1": "4", "x2": "20", "y1": "15", "y2": "15" }], ["line", { "x1": "10", "x2": "8", "y1": "3", "y2": "21" }], ["line", { "x1": "16", "x2": "14", "y1": "3", "y2": "21" }]]);

const HatGlasses = createLucideIcon("hat-glasses", [["path", { "d": "M14 18a2 2 0 0 0-4 0" }], ["path", { "d": "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" }], ["path", { "d": "M2 11h20" }], ["circle", { "cx": "17", "cy": "18", "r": "3" }], ["circle", { "cx": "7", "cy": "18", "r": "3" }]]);

const Hd = createLucideIcon("hd", [["path", { "d": "M10 12H6" }], ["path", { "d": "M10 15V9" }], ["path", { "d": "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }], ["path", { "d": "M6 15V9" }], ["rect", { "x": "2", "y": "5", "width": "20", "height": "14", "rx": "2" }]]);

const Haze = createLucideIcon("haze", [["path", { "d": "m5.2 6.2 1.4 1.4" }], ["path", { "d": "M2 13h2" }], ["path", { "d": "M20 13h2" }], ["path", { "d": "m17.4 7.6 1.4-1.4" }], ["path", { "d": "M22 17H2" }], ["path", { "d": "M22 21H2" }], ["path", { "d": "M16 13a4 4 0 0 0-8 0" }], ["path", { "d": "M12 5V2.5" }]]);

const HdmiPort = createLucideIcon("hdmi-port", [["path", { "d": "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }], ["path", { "d": "M7.5 12h9" }]]);

const Heading1 = createLucideIcon("heading-1", [["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }], ["path", { "d": "M12 18V6" }], ["path", { "d": "m17 12 3-2v8" }]]);

const Heading3 = createLucideIcon("heading-3", [["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }], ["path", { "d": "M12 18V6" }], ["path", { "d": "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }], ["path", { "d": "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]]);

const Heading2 = createLucideIcon("heading-2", [["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }], ["path", { "d": "M12 18V6" }], ["path", { "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]]);

const Heading5 = createLucideIcon("heading-5", [["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }], ["path", { "d": "M12 18V6" }], ["path", { "d": "M17 13v-3h4" }], ["path", { "d": "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]]);

const Heading4 = createLucideIcon("heading-4", [["path", { "d": "M12 18V6" }], ["path", { "d": "M17 10v3a1 1 0 0 0 1 1h3" }], ["path", { "d": "M21 10v8" }], ["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }]]);

const Heading6 = createLucideIcon("heading-6", [["path", { "d": "M4 12h8" }], ["path", { "d": "M4 18V6" }], ["path", { "d": "M12 18V6" }], ["circle", { "cx": "19", "cy": "16", "r": "2" }], ["path", { "d": "M20 10c-2 2-3 3.5-3 6" }]]);

const Heading = createLucideIcon("heading", [["path", { "d": "M6 12h12" }], ["path", { "d": "M6 20V4" }], ["path", { "d": "M18 20V4" }]]);

const HeadphoneOff = createLucideIcon("headphone-off", [["path", { "d": "M21 14h-1.343" }], ["path", { "d": "M9.128 3.47A9 9 0 0 1 21 12v3.343" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }], ["path", { "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }]]);

const Headphones = createLucideIcon("headphones", [["path", { "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" }]]);

const HeartCrack = createLucideIcon("heart-crack", [["path", { "d": "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" }], ["path", { "d": "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" }]]);

const Headset = createLucideIcon("headset", [["path", { "d": "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }], ["path", { "d": "M21 16v2a4 4 0 0 1-4 4h-5" }]]);

const HeartMinus = createLucideIcon("heart-minus", [["path", { "d": "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" }], ["path", { "d": "M15 15h6" }]]);

const HeartHandshake = createLucideIcon("heart-handshake", [["path", { "d": "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" }]]);

const HeartOff = createLucideIcon("heart-off", [["path", { "d": "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" }], ["path", { "d": "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" }], ["path", { "d": "m2 2 20 20" }]]);

const HeartPlus = createLucideIcon("heart-plus", [["path", { "d": "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" }], ["path", { "d": "M15 15h6" }], ["path", { "d": "M18 12v6" }]]);

const HeartX = createLucideIcon("heart-x", [["path", { "d": "m15.5 12.5 5 5" }], ["path", { "d": "m20.5 12.5-5 5" }], ["path", { "d": "M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352" }]]);

const HeartPulse = createLucideIcon("heart-pulse", [["path", { "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }], ["path", { "d": "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]]);

const Heart = createLucideIcon("heart", [["path", { "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }]]);

const Heater = createLucideIcon("heater", [["path", { "d": "M11 8c2-3-2-3 0-6" }], ["path", { "d": "M15.5 8c2-3-2-3 0-6" }], ["path", { "d": "M6 10h.01" }], ["path", { "d": "M6 14h.01" }], ["path", { "d": "M10 16v-4" }], ["path", { "d": "M14 16v-4" }], ["path", { "d": "M18 16v-4" }], ["path", { "d": "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }], ["path", { "d": "M5 20v2" }], ["path", { "d": "M19 20v2" }]]);

const Helicopter = createLucideIcon("helicopter", [["path", { "d": "M11 17v4" }], ["path", { "d": "M14 3v8a2 2 0 0 0 2 2h5.865" }], ["path", { "d": "M17 17v4" }], ["path", { "d": "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" }], ["path", { "d": "M2 10v5" }], ["path", { "d": "M6 3h16" }], ["path", { "d": "M7 21h14" }], ["path", { "d": "M8 13H2" }]]);

const Hexagon = createLucideIcon("hexagon", [["path", { "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }]]);

const Highlighter = createLucideIcon("highlighter", [["path", { "d": "m9 11-6 6v3h9l3-3" }], ["path", { "d": "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]]);

const History = createLucideIcon("history", [["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["path", { "d": "M12 7v5l4 2" }]]);

const HopOff = createLucideIcon("hop-off", [["path", { "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }], ["path", { "d": "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }], ["path", { "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }], ["path", { "d": "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }], ["path", { "d": "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }], ["path", { "d": "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" }], ["path", { "d": "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }], ["path", { "d": "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }], ["path", { "d": "m2 2 20 20" }]]);

const Hop = createLucideIcon("hop", [["path", { "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }], ["path", { "d": "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" }], ["path", { "d": "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }], ["path", { "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }], ["path", { "d": "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }], ["path", { "d": "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }], ["path", { "d": "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }], ["path", { "d": "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" }]]);

const Hospital = createLucideIcon("hospital", [["path", { "d": "M12 7v4" }], ["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { "d": "M14 9h-4" }], ["path", { "d": "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }], ["path", { "d": "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" }]]);

const Hotel = createLucideIcon("hotel", [["path", { "d": "M10 22v-6.57" }], ["path", { "d": "M12 11h.01" }], ["path", { "d": "M12 7h.01" }], ["path", { "d": "M14 15.43V22" }], ["path", { "d": "M15 16a5 5 0 0 0-6 0" }], ["path", { "d": "M16 11h.01" }], ["path", { "d": "M16 7h.01" }], ["path", { "d": "M8 11h.01" }], ["path", { "d": "M8 7h.01" }], ["rect", { "x": "4", "y": "2", "width": "16", "height": "20", "rx": "2" }]]);

const Hourglass = createLucideIcon("hourglass", [["path", { "d": "M5 22h14" }], ["path", { "d": "M5 2h14" }], ["path", { "d": "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }], ["path", { "d": "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]]);

const HouseHeart = createLucideIcon("house-heart", [["path", { "d": "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]]);

const HousePlug = createLucideIcon("house-plug", [["path", { "d": "M10 12V8.964" }], ["path", { "d": "M14 12V8.964" }], ["path", { "d": "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }], ["path", { "d": "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" }]]);

const HousePlus = createLucideIcon("house-plus", [["path", { "d": "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" }], ["path", { "d": "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }], ["path", { "d": "M15 18h6" }], ["path", { "d": "M18 15v6" }]]);

const HouseWifi = createLucideIcon("house-wifi", [["path", { "d": "M9.5 13.866a4 4 0 0 1 5 .01" }], ["path", { "d": "M12 17h.01" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }], ["path", { "d": "M7 10.754a8 8 0 0 1 10 0" }]]);

const House = createLucideIcon("house", [["path", { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]]);

const IceCreamBowl = createLucideIcon("ice-cream-bowl", [["path", { "d": "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { "d": "M12.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { "d": "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]]);

const IceCreamCone = createLucideIcon("ice-cream-cone", [["path", { "d": "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }], ["path", { "d": "M17 7A5 5 0 0 0 7 7" }], ["path", { "d": "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]]);

const IdCardLanyard = createLucideIcon("id-card-lanyard", [["path", { "d": "M13.5 8h-3" }], ["path", { "d": "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" }], ["path", { "d": "M16.899 22A5 5 0 0 0 7.1 22" }], ["path", { "d": "m9 2 3 6" }], ["circle", { "cx": "12", "cy": "15", "r": "3" }]]);

const IdCard = createLucideIcon("id-card", [["path", { "d": "M16 10h2" }], ["path", { "d": "M16 14h2" }], ["path", { "d": "M6.17 15a3 3 0 0 1 5.66 0" }], ["circle", { "cx": "9", "cy": "11", "r": "2" }], ["rect", { "x": "2", "y": "5", "width": "20", "height": "14", "rx": "2" }]]);

const ImageMinus = createLucideIcon("image-minus", [["path", { "d": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["line", { "x1": "16", "x2": "22", "y1": "5", "y2": "5" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }], ["path", { "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]);

const ImageDown = createLucideIcon("image-down", [["path", { "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { "d": "m14 19 3 3v-5.5" }], ["path", { "d": "m17 22 3-3" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }]]);

const ImageOff = createLucideIcon("image-off", [["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }], ["path", { "d": "M10.41 10.41a2 2 0 1 1-2.83-2.83" }], ["line", { "x1": "13.5", "x2": "6", "y1": "13.5", "y2": "21" }], ["line", { "x1": "18", "x2": "21", "y1": "12", "y2": "15" }], ["path", { "d": "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }], ["path", { "d": "M21 15V5a2 2 0 0 0-2-2H9" }]]);

const ImagePlay = createLucideIcon("image-play", [["path", { "d": "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }], ["path", { "d": "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { "d": "m6 21 5-5" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }]]);

const ImagePlus = createLucideIcon("image-plus", [["path", { "d": "M16 5h6" }], ["path", { "d": "M19 2v6" }], ["path", { "d": "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }], ["path", { "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }]]);

const ImageUp = createLucideIcon("image-up", [["path", { "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { "d": "m14 19.5 3-3 3 3" }], ["path", { "d": "M17 22v-5.5" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }]]);

const ImageUpscale = createLucideIcon("image-upscale", [["path", { "d": "M16 3h5v5" }], ["path", { "d": "M17 21h2a2 2 0 0 0 2-2" }], ["path", { "d": "M21 12v3" }], ["path", { "d": "m21 3-5 5" }], ["path", { "d": "M3 7V5a2 2 0 0 1 2-2" }], ["path", { "d": "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }], ["path", { "d": "M9 3h3" }], ["rect", { "x": "3", "y": "11", "width": "10", "height": "10", "rx": "1" }]]);

const Image = createLucideIcon("image", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["circle", { "cx": "9", "cy": "9", "r": "2" }], ["path", { "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]);

const Images = createLucideIcon("images", [["path", { "d": "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }], ["path", { "d": "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }], ["circle", { "cx": "13", "cy": "7", "r": "1", "fill": "currentColor" }], ["rect", { "x": "8", "y": "2", "width": "14", "height": "14", "rx": "2" }]]);

const Import = createLucideIcon("import", [["path", { "d": "M12 3v12" }], ["path", { "d": "m8 11 4 4 4-4" }], ["path", { "d": "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]]);

const Inbox = createLucideIcon("inbox", [["polyline", { "points": "22 12 16 12 14 15 10 15 8 12 2 12" }], ["path", { "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }]]);

const Infinity = createLucideIcon("infinity", [["path", { "d": "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" }]]);

const IndianRupee = createLucideIcon("indian-rupee", [["path", { "d": "M6 3h12" }], ["path", { "d": "M6 8h12" }], ["path", { "d": "m6 13 8.5 8" }], ["path", { "d": "M6 13h3" }], ["path", { "d": "M9 13c6.667 0 6.667-10 0-10" }]]);

const Info = createLucideIcon("info", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 16v-4" }], ["path", { "d": "M12 8h.01" }]]);

const InspectionPanel = createLucideIcon("inspection-panel", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 7h.01" }], ["path", { "d": "M17 7h.01" }], ["path", { "d": "M7 17h.01" }], ["path", { "d": "M17 17h.01" }]]);

const Italic = createLucideIcon("italic", [["line", { "x1": "19", "x2": "10", "y1": "4", "y2": "4" }], ["line", { "x1": "14", "x2": "5", "y1": "20", "y2": "20" }], ["line", { "x1": "15", "x2": "9", "y1": "4", "y2": "20" }]]);

const IterationCcw = createLucideIcon("iteration-ccw", [["path", { "d": "m16 14 4 4-4 4" }], ["path", { "d": "M20 10a8 8 0 1 0-8 8h8" }]]);

const IterationCw = createLucideIcon("iteration-cw", [["path", { "d": "M4 10a8 8 0 1 1 8 8H4" }], ["path", { "d": "m8 22-4-4 4-4" }]]);

const JapaneseYen = createLucideIcon("japanese-yen", [["path", { "d": "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }], ["path", { "d": "M6 15h12" }], ["path", { "d": "M6 11h12" }]]);

const Joystick = createLucideIcon("joystick", [["path", { "d": "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }], ["path", { "d": "M6 15v-2" }], ["path", { "d": "M12 15V9" }], ["circle", { "cx": "12", "cy": "6", "r": "3" }]]);

const Kanban = createLucideIcon("kanban", [["path", { "d": "M5 3v14" }], ["path", { "d": "M12 3v8" }], ["path", { "d": "M19 3v18" }]]);

const Kayak = createLucideIcon("kayak", [["path", { "d": "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" }], ["path", { "d": "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" }], ["path", { "d": "m6.707 6.707 10.586 10.586" }], ["path", { "d": "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" }]]);

const KeyRound = createLucideIcon("key-round", [["path", { "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", { "cx": "16.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]]);

const KeySquare = createLucideIcon("key-square", [["path", { "d": "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" }], ["path", { "d": "m14 7 3 3" }], ["path", { "d": "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" }]]);

const KeyboardMusic = createLucideIcon("keyboard-music", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M6 8h4" }], ["path", { "d": "M14 8h.01" }], ["path", { "d": "M18 8h.01" }], ["path", { "d": "M2 12h20" }], ["path", { "d": "M6 12v4" }], ["path", { "d": "M10 12v4" }], ["path", { "d": "M14 12v4" }], ["path", { "d": "M18 12v4" }]]);

const Key = createLucideIcon("key", [["path", { "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }], ["path", { "d": "m21 2-9.6 9.6" }], ["circle", { "cx": "7.5", "cy": "15.5", "r": "5.5" }]]);

const KeyboardOff = createLucideIcon("keyboard-off", [["path", { "d": "M 20 4 A2 2 0 0 1 22 6" }], ["path", { "d": "M 22 6 L 22 16.41" }], ["path", { "d": "M 7 16 L 16 16" }], ["path", { "d": "M 9.69 4 L 20 4" }], ["path", { "d": "M14 8h.01" }], ["path", { "d": "M18 8h.01" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }], ["path", { "d": "M6 8h.01" }], ["path", { "d": "M8 12h.01" }]]);

const Keyboard = createLucideIcon("keyboard", [["path", { "d": "M10 8h.01" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M14 8h.01" }], ["path", { "d": "M16 12h.01" }], ["path", { "d": "M18 8h.01" }], ["path", { "d": "M6 8h.01" }], ["path", { "d": "M7 16h10" }], ["path", { "d": "M8 12h.01" }], ["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }]]);

const LampCeiling = createLucideIcon("lamp-ceiling", [["path", { "d": "M12 2v5" }], ["path", { "d": "M14.829 15.998a3 3 0 1 1-5.658 0" }], ["path", { "d": "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" }]]);

const LampDesk = createLucideIcon("lamp-desk", [["path", { "d": "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" }], ["path", { "d": "m14.207 4.793-3.414 3.414" }], ["path", { "d": "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }], ["path", { "d": "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" }]]);

const LampFloor = createLucideIcon("lamp-floor", [["path", { "d": "M12 10v12" }], ["path", { "d": "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" }], ["path", { "d": "M9 22h6" }]]);

const LampWallDown = createLucideIcon("lamp-wall-down", [["path", { "d": "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" }], ["path", { "d": "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" }], ["path", { "d": "M8 6h4a2 2 0 0 1 2 2v5" }]]);

const LampWallUp = createLucideIcon("lamp-wall-up", [["path", { "d": "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" }], ["path", { "d": "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }], ["path", { "d": "M8 18h4a2 2 0 0 0 2-2v-5" }]]);

const Lamp = createLucideIcon("lamp", [["path", { "d": "M12 12v6" }], ["path", { "d": "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" }], ["path", { "d": "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }]]);

const LandPlot = createLucideIcon("land-plot", [["path", { "d": "m12 8 6-3-6-3v10" }], ["path", { "d": "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" }], ["path", { "d": "m6.49 12.85 11.02 6.3" }], ["path", { "d": "M17.51 12.85 6.5 19.15" }]]);

const Landmark = createLucideIcon("landmark", [["path", { "d": "M10 18v-7" }], ["path", { "d": "M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" }], ["path", { "d": "M14 18v-7" }], ["path", { "d": "M18 18v-7" }], ["path", { "d": "M3 22h18" }], ["path", { "d": "M6 18v-7" }]]);

const Languages = createLucideIcon("languages", [["path", { "d": "m5 8 6 6" }], ["path", { "d": "m4 14 6-6 2-3" }], ["path", { "d": "M2 5h12" }], ["path", { "d": "M7 2h1" }], ["path", { "d": "m22 22-5-10-5 10" }], ["path", { "d": "M14 18h6" }]]);

const LaptopMinimalCheck = createLucideIcon("laptop-minimal-check", [["path", { "d": "M2 20h20" }], ["path", { "d": "m9 10 2 2 4-4" }], ["rect", { "x": "3", "y": "4", "width": "18", "height": "12", "rx": "2" }]]);

const LaptopMinimal = createLucideIcon("laptop-minimal", [["rect", { "width": "18", "height": "12", "x": "3", "y": "4", "rx": "2", "ry": "2" }], ["line", { "x1": "2", "x2": "22", "y1": "20", "y2": "20" }]]);

const Laptop = createLucideIcon("laptop", [["path", { "d": "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" }], ["path", { "d": "M20.054 15.987H3.946" }]]);

const LassoSelect = createLucideIcon("lasso-select", [["path", { "d": "M7 22a5 5 0 0 1-2-4" }], ["path", { "d": "M7 16.93c.96.43 1.96.74 2.99.91" }], ["path", { "d": "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }], ["path", { "d": "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }], ["path", { "d": "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" }]]);

const Lasso = createLucideIcon("lasso", [["path", { "d": "M3.704 14.467a10 8 0 1 1 3.115 2.375" }], ["path", { "d": "M7 22a5 5 0 0 1-2-3.994" }], ["circle", { "cx": "5", "cy": "16", "r": "2" }]]);

const Laugh = createLucideIcon("laugh", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }], ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }], ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }]]);

const Layers2 = createLucideIcon("layers-2", [["path", { "d": "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" }], ["path", { "d": "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" }]]);

const LayersMinus = createLucideIcon("layers-minus", [["path", { "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z" }], ["path", { "d": "M16 17h6" }], ["path", { "d": "M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18" }], ["path", { "d": "M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96" }], ["path", { "d": "M22.018 12.004a1 1 0 0 1-.598.916l-.177.08" }]]);

const LayersPlus = createLucideIcon("layers-plus", [["path", { "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" }], ["path", { "d": "M16 17h6" }], ["path", { "d": "M19 14v6" }], ["path", { "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" }], ["path", { "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" }]]);

const Layers = createLucideIcon("layers", [["path", { "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }], ["path", { "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }], ["path", { "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]]);

const LayoutDashboard = createLucideIcon("layout-dashboard", [["rect", { "width": "7", "height": "9", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "5", "x": "14", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "9", "x": "14", "y": "12", "rx": "1" }], ["rect", { "width": "7", "height": "5", "x": "3", "y": "16", "rx": "1" }]]);

const LayoutGrid = createLucideIcon("layout-grid", [["rect", { "width": "7", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "14", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "3", "y": "14", "rx": "1" }]]);

const LayoutList = createLucideIcon("layout-list", [["rect", { "width": "7", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "3", "y": "14", "rx": "1" }], ["path", { "d": "M14 4h7" }], ["path", { "d": "M14 9h7" }], ["path", { "d": "M14 15h7" }], ["path", { "d": "M14 20h7" }]]);

const LayoutPanelLeft = createLucideIcon("layout-panel-left", [["rect", { "width": "7", "height": "18", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "14", "rx": "1" }]]);

const LayoutPanelTop = createLucideIcon("layout-panel-top", [["rect", { "width": "18", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "3", "y": "14", "rx": "1" }], ["rect", { "width": "7", "height": "7", "x": "14", "y": "14", "rx": "1" }]]);

const Leaf = createLucideIcon("leaf", [["path", { "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]]);

const LayoutTemplate = createLucideIcon("layout-template", [["rect", { "width": "18", "height": "7", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "9", "height": "7", "x": "3", "y": "14", "rx": "1" }], ["rect", { "width": "5", "height": "7", "x": "16", "y": "14", "rx": "1" }]]);

const LeafyGreen = createLucideIcon("leafy-green", [["path", { "d": "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" }], ["path", { "d": "M2 22 17 7" }]]);

const Lectern = createLucideIcon("lectern", [["path", { "d": "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" }], ["path", { "d": "M18 6V3a1 1 0 0 0-1-1h-3" }], ["rect", { "width": "8", "height": "12", "x": "8", "y": "10", "rx": "1" }]]);

const LensConcave = createLucideIcon("lens-concave", [["path", { "d": "M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" }]]);

const LensConvex = createLucideIcon("lens-convex", [["path", { "d": "M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" }]]);

const LibraryBig = createLucideIcon("library-big", [["rect", { "width": "8", "height": "18", "x": "3", "y": "3", "rx": "1" }], ["path", { "d": "M7 3v18" }], ["path", { "d": "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" }]]);

const Library = createLucideIcon("library", [["path", { "d": "m16 6 4 14" }], ["path", { "d": "M12 6v14" }], ["path", { "d": "M8 8v12" }], ["path", { "d": "M4 4v16" }]]);

const LifeBuoy = createLucideIcon("life-buoy", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "m4.93 4.93 4.24 4.24" }], ["path", { "d": "m14.83 9.17 4.24-4.24" }], ["path", { "d": "m14.83 14.83 4.24 4.24" }], ["path", { "d": "m9.17 14.83-4.24 4.24" }], ["circle", { "cx": "12", "cy": "12", "r": "4" }]]);

const Ligature = createLucideIcon("ligature", [["path", { "d": "M14 12h2v8" }], ["path", { "d": "M14 20h4" }], ["path", { "d": "M6 12h4" }], ["path", { "d": "M6 20h4" }], ["path", { "d": "M8 20V8a4 4 0 0 1 7.464-2" }]]);

const LightbulbOff = createLucideIcon("lightbulb-off", [["path", { "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }], ["path", { "d": "M9 18h6" }], ["path", { "d": "M10 22h4" }]]);

const Lightbulb = createLucideIcon("lightbulb", [["path", { "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }], ["path", { "d": "M9 18h6" }], ["path", { "d": "M10 22h4" }]]);

const LineDotRightHorizontal = createLucideIcon("line-dot-right-horizontal", [["path", { "d": "M 3 12 L 15 12" }], ["circle", { "cx": "18", "cy": "12", "r": "3" }]]);

const LineSquiggle = createLucideIcon("line-squiggle", [["path", { "d": "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" }]]);

const LineStyle = createLucideIcon("line-style", [["path", { "d": "M11 5h2" }], ["path", { "d": "M15 12h6" }], ["path", { "d": "M19 5h2" }], ["path", { "d": "M3 12h6" }], ["path", { "d": "M3 19h18" }], ["path", { "d": "M3 5h2" }]]);

const Link2Off = createLucideIcon("link-2-off", [["path", { "d": "M9 17H7A5 5 0 0 1 7 7" }], ["path", { "d": "M15 7h2a5 5 0 0 1 4 8" }], ["line", { "x1": "8", "x2": "12", "y1": "12", "y2": "12" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Link2 = createLucideIcon("link-2", [["path", { "d": "M9 17H7A5 5 0 0 1 7 7h2" }], ["path", { "d": "M15 7h2a5 5 0 1 1 0 10h-2" }], ["line", { "x1": "8", "x2": "16", "y1": "12", "y2": "12" }]]);

const Link = createLucideIcon("link", [["path", { "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]]);

const ListCheck = createLucideIcon("list-check", [["path", { "d": "M16 5H3" }], ["path", { "d": "M16 12H3" }], ["path", { "d": "M11 19H3" }], ["path", { "d": "m15 18 2 2 4-4" }]]);

const ListChecks = createLucideIcon("list-checks", [["path", { "d": "M13 5h8" }], ["path", { "d": "M13 12h8" }], ["path", { "d": "M13 19h8" }], ["path", { "d": "m3 17 2 2 4-4" }], ["path", { "d": "m3 7 2 2 4-4" }]]);

const ListChevronsDownUp = createLucideIcon("list-chevrons-down-up", [["path", { "d": "M3 5h8" }], ["path", { "d": "M3 12h8" }], ["path", { "d": "M3 19h8" }], ["path", { "d": "m15 5 3 3 3-3" }], ["path", { "d": "m15 19 3-3 3 3" }]]);

const ListChevronsUpDown = createLucideIcon("list-chevrons-up-down", [["path", { "d": "M3 5h8" }], ["path", { "d": "M3 12h8" }], ["path", { "d": "M3 19h8" }], ["path", { "d": "m15 8 3-3 3 3" }], ["path", { "d": "m15 16 3 3 3-3" }]]);

const ListCollapse = createLucideIcon("list-collapse", [["path", { "d": "M10 5h11" }], ["path", { "d": "M10 12h11" }], ["path", { "d": "M10 19h11" }], ["path", { "d": "m3 10 3-3-3-3" }], ["path", { "d": "m3 20 3-3-3-3" }]]);

const ListEnd = createLucideIcon("list-end", [["path", { "d": "M16 5H3" }], ["path", { "d": "M16 12H3" }], ["path", { "d": "M9 19H3" }], ["path", { "d": "m16 16-3 3 3 3" }], ["path", { "d": "M21 5v12a2 2 0 0 1-2 2h-6" }]]);

const ListFilterPlus = createLucideIcon("list-filter-plus", [["path", { "d": "M12 5H2" }], ["path", { "d": "M6 12h12" }], ["path", { "d": "M9 19h6" }], ["path", { "d": "M16 5h6" }], ["path", { "d": "M19 8V2" }]]);

const ListFilter = createLucideIcon("list-filter", [["path", { "d": "M2 5h20" }], ["path", { "d": "M6 12h12" }], ["path", { "d": "M9 19h6" }]]);

const ListIndentIncrease = createLucideIcon("list-indent-increase", [["path", { "d": "M21 5H11" }], ["path", { "d": "M21 12H11" }], ["path", { "d": "M21 19H11" }], ["path", { "d": "m3 8 4 4-4 4" }]]);

const ListMinus = createLucideIcon("list-minus", [["path", { "d": "M16 5H3" }], ["path", { "d": "M11 12H3" }], ["path", { "d": "M16 19H3" }], ["path", { "d": "M21 12h-6" }]]);

const ListIndentDecrease = createLucideIcon("list-indent-decrease", [["path", { "d": "M21 5H11" }], ["path", { "d": "M21 12H11" }], ["path", { "d": "M21 19H11" }], ["path", { "d": "m7 8-4 4 4 4" }]]);

const ListMusic = createLucideIcon("list-music", [["path", { "d": "M16 5H3" }], ["path", { "d": "M11 12H3" }], ["path", { "d": "M11 19H3" }], ["path", { "d": "M21 16V5" }], ["circle", { "cx": "18", "cy": "16", "r": "3" }]]);

const ListOrdered = createLucideIcon("list-ordered", [["path", { "d": "M11 5h10" }], ["path", { "d": "M11 12h10" }], ["path", { "d": "M11 19h10" }], ["path", { "d": "M4 4h1v5" }], ["path", { "d": "M4 9h2" }], ["path", { "d": "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" }]]);

const ListPlus = createLucideIcon("list-plus", [["path", { "d": "M16 5H3" }], ["path", { "d": "M11 12H3" }], ["path", { "d": "M16 19H3" }], ["path", { "d": "M18 9v6" }], ["path", { "d": "M21 12h-6" }]]);

const ListRestart = createLucideIcon("list-restart", [["path", { "d": "M21 5H3" }], ["path", { "d": "M7 12H3" }], ["path", { "d": "M7 19H3" }], ["path", { "d": "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }], ["path", { "d": "M11 10v4h4" }]]);

const ListSortAscending = createLucideIcon("list-sort-ascending", [["path", { "d": "M3 19h18" }], ["path", { "d": "M15 12H3" }], ["path", { "d": "M9 5H3" }]]);

const ListSortDescending = createLucideIcon("list-sort-descending", [["path", { "d": "M15 12H3" }], ["path", { "d": "M3 5h18" }], ["path", { "d": "M9 19H3" }]]);

const ListStart = createLucideIcon("list-start", [["path", { "d": "M3 5h6" }], ["path", { "d": "M3 12h13" }], ["path", { "d": "M3 19h13" }], ["path", { "d": "m16 8-3-3 3-3" }], ["path", { "d": "M21 19V7a2 2 0 0 0-2-2h-6" }]]);

const ListTodo = createLucideIcon("list-todo", [["path", { "d": "M13 5h8" }], ["path", { "d": "M13 12h8" }], ["path", { "d": "M13 19h8" }], ["path", { "d": "m3 17 2 2 4-4" }], ["rect", { "x": "3", "y": "4", "width": "6", "height": "6", "rx": "1" }]]);

const ListTree = createLucideIcon("list-tree", [["path", { "d": "M8 5h13" }], ["path", { "d": "M13 12h8" }], ["path", { "d": "M13 19h8" }], ["path", { "d": "M3 10a2 2 0 0 0 2 2h3" }], ["path", { "d": "M3 5v12a2 2 0 0 0 2 2h3" }]]);

const ListVideo = createLucideIcon("list-video", [["path", { "d": "M21 5H3" }], ["path", { "d": "M10 12H3" }], ["path", { "d": "M10 19H3" }], ["path", { "d": "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }]]);

const ListX = createLucideIcon("list-x", [["path", { "d": "M16 5H3" }], ["path", { "d": "M11 12H3" }], ["path", { "d": "M16 19H3" }], ["path", { "d": "m15.5 9.5 5 5" }], ["path", { "d": "m20.5 9.5-5 5" }]]);

const List = createLucideIcon("list", [["path", { "d": "M3 5h.01" }], ["path", { "d": "M3 12h.01" }], ["path", { "d": "M3 19h.01" }], ["path", { "d": "M8 5h13" }], ["path", { "d": "M8 12h13" }], ["path", { "d": "M8 19h13" }]]);

const LoaderCircle = createLucideIcon("loader-circle", [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]]);

const LoaderPinwheel = createLucideIcon("loader-pinwheel", [["path", { "d": "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }], ["path", { "d": "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }], ["path", { "d": "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const Loader = createLucideIcon("loader", [["path", { "d": "M12 2v4" }], ["path", { "d": "m16.2 7.8 2.9-2.9" }], ["path", { "d": "M18 12h4" }], ["path", { "d": "m16.2 16.2 2.9 2.9" }], ["path", { "d": "M12 18v4" }], ["path", { "d": "m4.9 19.1 2.9-2.9" }], ["path", { "d": "M2 12h4" }], ["path", { "d": "m4.9 4.9 2.9 2.9" }]]);

const LocateFixed = createLucideIcon("locate-fixed", [["line", { "x1": "2", "x2": "5", "y1": "12", "y2": "12" }], ["line", { "x1": "19", "x2": "22", "y1": "12", "y2": "12" }], ["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "5" }], ["line", { "x1": "12", "x2": "12", "y1": "19", "y2": "22" }], ["circle", { "cx": "12", "cy": "12", "r": "7" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const LocateOff = createLucideIcon("locate-off", [["path", { "d": "M12 19v3" }], ["path", { "d": "M12 2v3" }], ["path", { "d": "M18.89 13.24a7 7 0 0 0-8.13-8.13" }], ["path", { "d": "M19 12h3" }], ["path", { "d": "M2 12h3" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M7.05 7.05a7 7 0 0 0 9.9 9.9" }]]);

const Locate = createLucideIcon("locate", [["line", { "x1": "2", "x2": "5", "y1": "12", "y2": "12" }], ["line", { "x1": "19", "x2": "22", "y1": "12", "y2": "12" }], ["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "5" }], ["line", { "x1": "12", "x2": "12", "y1": "19", "y2": "22" }], ["circle", { "cx": "12", "cy": "12", "r": "7" }]]);

const LockKeyholeOpen = createLucideIcon("lock-keyhole-open", [["circle", { "cx": "12", "cy": "16", "r": "1" }], ["rect", { "width": "18", "height": "12", "x": "3", "y": "10", "rx": "2" }], ["path", { "d": "M7 10V7a5 5 0 0 1 9.33-2.5" }]]);

const LockKeyhole = createLucideIcon("lock-keyhole", [["circle", { "cx": "12", "cy": "16", "r": "1" }], ["rect", { "x": "3", "y": "10", "width": "18", "height": "12", "rx": "2" }], ["path", { "d": "M7 10V7a5 5 0 0 1 10 0v3" }]]);

const LockOpen = createLucideIcon("lock-open", [["rect", { "width": "18", "height": "11", "x": "3", "y": "11", "rx": "2", "ry": "2" }], ["path", { "d": "M7 11V7a5 5 0 0 1 9.9-1" }]]);

const Lock = createLucideIcon("lock", [["rect", { "width": "18", "height": "11", "x": "3", "y": "11", "rx": "2", "ry": "2" }], ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]]);

const LogIn = createLucideIcon("log-in", [["path", { "d": "m10 17 5-5-5-5" }], ["path", { "d": "M15 12H3" }], ["path", { "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]]);

const LogOut = createLucideIcon("log-out", [["path", { "d": "m16 17 5-5-5-5" }], ["path", { "d": "M21 12H9" }], ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]]);

const Logs = createLucideIcon("logs", [["path", { "d": "M3 5h1" }], ["path", { "d": "M3 12h1" }], ["path", { "d": "M3 19h1" }], ["path", { "d": "M8 5h1" }], ["path", { "d": "M8 12h1" }], ["path", { "d": "M8 19h1" }], ["path", { "d": "M13 5h8" }], ["path", { "d": "M13 12h8" }], ["path", { "d": "M13 19h8" }]]);

const Lollipop = createLucideIcon("lollipop", [["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }], ["path", { "d": "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]]);

const Luggage = createLucideIcon("luggage", [["path", { "d": "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }], ["path", { "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }], ["path", { "d": "M10 20h4" }], ["circle", { "cx": "16", "cy": "20", "r": "2" }], ["circle", { "cx": "8", "cy": "20", "r": "2" }]]);

const Magnet = createLucideIcon("magnet", [["path", { "d": "m12 15 4 4" }], ["path", { "d": "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" }], ["path", { "d": "m5 8 4 4" }]]);

const MailCheck = createLucideIcon("mail-check", [["path", { "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "m16 19 2 2 4-4" }]]);

const MailMinus = createLucideIcon("mail-minus", [["path", { "d": "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M16 19h6" }]]);

const MailOpen = createLucideIcon("mail-open", [["path", { "d": "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" }], ["path", { "d": "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]]);

const MailPlus = createLucideIcon("mail-plus", [["path", { "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M16 19h6" }]]);

const MailQuestionMark = createLucideIcon("mail-question-mark", [["path", { "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }], ["path", { "d": "M20 22v.01" }]]);

const MailSearch = createLucideIcon("mail-search", [["path", { "d": "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }], ["path", { "d": "m22 22-1.5-1.5" }]]);

const MailWarning = createLucideIcon("mail-warning", [["path", { "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "M20 14v4" }], ["path", { "d": "M20 22v.01" }]]);

const MailX = createLucideIcon("mail-x", [["path", { "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }], ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { "d": "m17 17 4 4" }], ["path", { "d": "m21 17-4 4" }]]);

const Mails = createLucideIcon("mails", [["path", { "d": "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" }], ["path", { "d": "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" }], ["rect", { "x": "7", "y": "3", "width": "15", "height": "12", "rx": "2" }]]);

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const Mailbox = createLucideIcon("mailbox", [["path", { "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }], ["polyline", { "points": "15,9 18,9 18,11" }], ["path", { "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }], ["line", { "x1": "6", "x2": "7", "y1": "10", "y2": "10" }]]);

const MapPinCheckInside = createLucideIcon("map-pin-check-inside", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { "d": "m9 10 2 2 4-4" }]]);

const MapPinCheck = createLucideIcon("map-pin-check", [["path", { "d": "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "m16 18 2 2 4-4" }]]);

const MapMinus = createLucideIcon("map-minus", [["path", { "d": "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" }], ["path", { "d": "M15 5.764V14" }], ["path", { "d": "M21 18h-6" }], ["path", { "d": "M9 3.236v15" }]]);

const MapPinHouse = createLucideIcon("map-pin-house", [["path", { "d": "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" }], ["path", { "d": "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }], ["path", { "d": "M18 22v-3" }], ["circle", { "cx": "10", "cy": "10", "r": "3" }]]);

const MapPinMinusInside = createLucideIcon("map-pin-minus-inside", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { "d": "M9 10h6" }]]);

const MapPinMinus = createLucideIcon("map-pin-minus", [["path", { "d": "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "M16 18h6" }]]);

const MapPinPen = createLucideIcon("map-pin-pen", [["path", { "d": "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" }], ["path", { "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { "cx": "10", "cy": "10", "r": "3" }]]);

const MapPinOff = createLucideIcon("map-pin-off", [["path", { "d": "M12.75 7.09a3 3 0 0 1 2.16 2.16" }], ["path", { "d": "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }], ["path", { "d": "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]]);

const MapPinPlusInside = createLucideIcon("map-pin-plus-inside", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { "d": "M12 7v6" }], ["path", { "d": "M9 10h6" }]]);

const MapPinPlus = createLucideIcon("map-pin-plus", [["path", { "d": "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "M16 18h6" }], ["path", { "d": "M19 15v6" }]]);

const MapPinSearch = createLucideIcon("map-pin-search", [["path", { "d": "M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262" }], ["path", { "d": "m22 22-1.88-1.88" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const MapPinXInside = createLucideIcon("map-pin-x-inside", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { "d": "m14.5 7.5-5 5" }], ["path", { "d": "m9.5 7.5 5 5" }]]);

const MapPin = createLucideIcon("map-pin", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }]]);

const MapPinX = createLucideIcon("map-pin-x", [["path", { "d": "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "m21.5 15.5-5 5" }], ["path", { "d": "m21.5 20.5-5-5" }]]);

const MapPinned = createLucideIcon("map-pinned", [["path", { "d": "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" }], ["circle", { "cx": "12", "cy": "8", "r": "2" }], ["path", { "d": "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" }]]);

const MapPlus = createLucideIcon("map-plus", [["path", { "d": "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" }], ["path", { "d": "M15 5.764V12" }], ["path", { "d": "M18 15v6" }], ["path", { "d": "M21 18h-6" }], ["path", { "d": "M9 3.236v15" }]]);

const Map = createLucideIcon("map", [["path", { "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" }], ["path", { "d": "M15 5.764v15" }], ["path", { "d": "M9 3.236v15" }]]);

const MarsStroke = createLucideIcon("mars-stroke", [["path", { "d": "m14 6 4 4" }], ["path", { "d": "M17 3h4v4" }], ["path", { "d": "m21 3-7.75 7.75" }], ["circle", { "cx": "9", "cy": "15", "r": "6" }]]);

const Mars = createLucideIcon("mars", [["path", { "d": "M16 3h5v5" }], ["path", { "d": "m21 3-6.75 6.75" }], ["circle", { "cx": "10", "cy": "14", "r": "6" }]]);

const Martini = createLucideIcon("martini", [["path", { "d": "M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z" }], ["path", { "d": "M12 12v10" }], ["path", { "d": "M7 22h10" }]]);

const Maximize2 = createLucideIcon("maximize-2", [["path", { "d": "M15 3h6v6" }], ["path", { "d": "m21 3-7 7" }], ["path", { "d": "m3 21 7-7" }], ["path", { "d": "M9 21H3v-6" }]]);

const Maximize = createLucideIcon("maximize", [["path", { "d": "M8 3H5a2 2 0 0 0-2 2v3" }], ["path", { "d": "M21 8V5a2 2 0 0 0-2-2h-3" }], ["path", { "d": "M3 16v3a2 2 0 0 0 2 2h3" }], ["path", { "d": "M16 21h3a2 2 0 0 0 2-2v-3" }]]);

const Medal = createLucideIcon("medal", [["path", { "d": "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" }], ["path", { "d": "M11 12 5.12 2.2" }], ["path", { "d": "m13 12 5.88-9.8" }], ["path", { "d": "M8 7h8" }], ["circle", { "cx": "12", "cy": "17", "r": "5" }], ["path", { "d": "M12 18v-2h-.5" }]]);

const MegaphoneOff = createLucideIcon("megaphone-off", [["path", { "d": "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" }], ["path", { "d": "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }], ["path", { "d": "M8 8v6" }]]);

const Megaphone = createLucideIcon("megaphone", [["path", { "d": "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }], ["path", { "d": "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }], ["path", { "d": "M8 6v8" }]]);

const Meh = createLucideIcon("meh", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["line", { "x1": "8", "x2": "16", "y1": "15", "y2": "15" }], ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }], ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }]]);

const MemoryStick = createLucideIcon("memory-stick", [["path", { "d": "M12 12v-2" }], ["path", { "d": "M12 18v-2" }], ["path", { "d": "M16 12v-2" }], ["path", { "d": "M16 18v-2" }], ["path", { "d": "M2 11h1.5" }], ["path", { "d": "M20 18v-2" }], ["path", { "d": "M20.5 11H22" }], ["path", { "d": "M4 18v-2" }], ["path", { "d": "M8 12v-2" }], ["path", { "d": "M8 18v-2" }], ["rect", { "x": "2", "y": "6", "width": "20", "height": "10", "rx": "2" }]]);

const Merge = createLucideIcon("merge", [["path", { "d": "m8 6 4-4 4 4" }], ["path", { "d": "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }], ["path", { "d": "m20 22-5-5" }]]);

const Menu = createLucideIcon("menu", [["path", { "d": "M4 5h16" }], ["path", { "d": "M4 12h16" }], ["path", { "d": "M4 19h16" }]]);

const MessageCircleCheck = createLucideIcon("message-circle-check", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const MessageCircleDashed = createLucideIcon("message-circle-dashed", [["path", { "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }], ["path", { "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }], ["path", { "d": "M17.609 3.72a10 10 0 0 1 2.69 2.7" }], ["path", { "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }], ["path", { "d": "M20.28 17.61a10 10 0 0 1-2.7 2.69" }], ["path", { "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }], ["path", { "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }], ["path", { "d": "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" }]]);

const MessageCircleCode = createLucideIcon("message-circle-code", [["path", { "d": "m10 9-3 3 3 3" }], ["path", { "d": "m14 15 3-3-3-3" }], ["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]]);

const MessageCircleHeart = createLucideIcon("message-circle-heart", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" }]]);

const MessageCircleMore = createLucideIcon("message-circle-more", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "M8 12h.01" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M16 12h.01" }]]);

const MessageCircleOff = createLucideIcon("message-circle-off", [["path", { "d": "m2 2 20 20" }], ["path", { "d": "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" }], ["path", { "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }]]);

const MessageCirclePlus = createLucideIcon("message-circle-plus", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "M12 8v8" }]]);

const MessageCircleQuestionMark = createLucideIcon("message-circle-question-mark", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { "d": "M12 17h.01" }]]);

const MessageCircleReply = createLucideIcon("message-circle-reply", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "m10 15-3-3 3-3" }], ["path", { "d": "M7 12h8a2 2 0 0 1 2 2v1" }]]);

const MessageCircleWarning = createLucideIcon("message-circle-warning", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "M12 8v4" }], ["path", { "d": "M12 16h.01" }]]);

const MessageCircleX = createLucideIcon("message-circle-x", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "m9 9 6 6" }]]);

const MessageCircle = createLucideIcon("message-circle", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]]);

const MessageSquareCheck = createLucideIcon("message-square-check", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "m9 11 2 2 4-4" }]]);

const MessageSquareCode = createLucideIcon("message-square-code", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "m10 8-3 3 3 3" }], ["path", { "d": "m14 14 3-3-3-3" }]]);

const MessageSquareDashed = createLucideIcon("message-square-dashed", [["path", { "d": "M14 3h2" }], ["path", { "d": "M16 19h-2" }], ["path", { "d": "M2 12v-2" }], ["path", { "d": "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" }], ["path", { "d": "M20 19a2 2 0 0 0 2-2v-1" }], ["path", { "d": "M22 10v2" }], ["path", { "d": "M22 6V5a2 2 0 0 0-2-2" }], ["path", { "d": "M4 3a2 2 0 0 0-2 2v1" }], ["path", { "d": "M8 19h2" }], ["path", { "d": "M8 3h2" }]]);

const MessageSquareDiff = createLucideIcon("message-square-diff", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M10 15h4" }], ["path", { "d": "M10 9h4" }], ["path", { "d": "M12 7v4" }]]);

const MessageSquareDot = createLucideIcon("message-square-dot", [["path", { "d": "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" }], ["circle", { "cx": "19", "cy": "6", "r": "3" }]]);

const MessageSquareHeart = createLucideIcon("message-square-heart", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5" }]]);

const MessageSquareLock = createLucideIcon("message-square-lock", [["path", { "d": "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" }], ["path", { "d": "M20 15v-2a2 2 0 0 0-4 0v2" }], ["rect", { "x": "14", "y": "15", "width": "8", "height": "5", "rx": "1" }]]);

const MessageSquareMore = createLucideIcon("message-square-more", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M12 11h.01" }], ["path", { "d": "M16 11h.01" }], ["path", { "d": "M8 11h.01" }]]);

const MessageSquareOff = createLucideIcon("message-square-off", [["path", { "d": "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8.656 3H20a2 2 0 0 1 2 2v11.344" }]]);

const MessageSquarePlus = createLucideIcon("message-square-plus", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M12 8v6" }], ["path", { "d": "M9 11h6" }]]);

const MessageSquareQuote = createLucideIcon("message-square-quote", [["path", { "d": "M14 14a2 2 0 0 0 2-2V8h-2" }], ["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M8 14a2 2 0 0 0 2-2V8H8" }]]);

const MessageSquareReply = createLucideIcon("message-square-reply", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "m10 8-3 3 3 3" }], ["path", { "d": "M17 14v-1a2 2 0 0 0-2-2H7" }]]);

const MessageSquareShare = createLucideIcon("message-square-share", [["path", { "d": "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" }], ["path", { "d": "M16 3h6v6" }], ["path", { "d": "m16 9 6-6" }]]);

const MessageSquareText = createLucideIcon("message-square-text", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M7 11h10" }], ["path", { "d": "M7 15h6" }], ["path", { "d": "M7 7h8" }]]);

const MessageSquareWarning = createLucideIcon("message-square-warning", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "M12 15h.01" }], ["path", { "d": "M12 7v4" }]]);

const MessageSquare = createLucideIcon("message-square", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]]);

const MessageSquareX = createLucideIcon("message-square-x", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }], ["path", { "d": "m14.5 8.5-5 5" }], ["path", { "d": "m9.5 8.5 5 5" }]]);

const MessagesSquare = createLucideIcon("messages-square", [["path", { "d": "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }], ["path", { "d": "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" }]]);

const Metronome = createLucideIcon("metronome", [["path", { "d": "M12 11.4V9.1" }], ["path", { "d": "m12 17 6.59-6.59" }], ["path", { "d": "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" }], ["circle", { "cx": "20", "cy": "9", "r": "2" }]]);

const MicOff = createLucideIcon("mic-off", [["path", { "d": "M12 19v3" }], ["path", { "d": "M15 9.34V5a3 3 0 0 0-5.68-1.33" }], ["path", { "d": "M16.95 16.95A7 7 0 0 1 5 12v-2" }], ["path", { "d": "M18.89 13.23A7 7 0 0 0 19 12v-2" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M9 9v3a3 3 0 0 0 5.12 2.12" }]]);

const Mic = createLucideIcon("mic", [["path", { "d": "M12 19v3" }], ["path", { "d": "M19 10v2a7 7 0 0 1-14 0v-2" }], ["rect", { "x": "9", "y": "2", "width": "6", "height": "13", "rx": "3" }]]);

const MicVocal = createLucideIcon("mic-vocal", [["path", { "d": "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }], ["path", { "d": "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" }], ["circle", { "cx": "16", "cy": "7", "r": "5" }]]);

const Microchip = createLucideIcon("microchip", [["path", { "d": "M10 12h4" }], ["path", { "d": "M10 17h4" }], ["path", { "d": "M10 7h4" }], ["path", { "d": "M18 12h2" }], ["path", { "d": "M18 18h2" }], ["path", { "d": "M18 6h2" }], ["path", { "d": "M4 12h2" }], ["path", { "d": "M4 18h2" }], ["path", { "d": "M4 6h2" }], ["rect", { "x": "6", "y": "2", "width": "12", "height": "20", "rx": "2" }]]);

const Microscope = createLucideIcon("microscope", [["path", { "d": "M6 18h8" }], ["path", { "d": "M3 22h18" }], ["path", { "d": "M14 22a7 7 0 1 0 0-14h-1" }], ["path", { "d": "M9 14h2" }], ["path", { "d": "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }], ["path", { "d": "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]]);

const Microwave = createLucideIcon("microwave", [["rect", { "width": "20", "height": "15", "x": "2", "y": "4", "rx": "2" }], ["rect", { "width": "8", "height": "7", "x": "6", "y": "8", "rx": "1" }], ["path", { "d": "M18 8v7" }], ["path", { "d": "M6 19v2" }], ["path", { "d": "M18 19v2" }]]);

const Milestone = createLucideIcon("milestone", [["path", { "d": "M12 13v8" }], ["path", { "d": "M12 3v3" }], ["path", { "d": "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" }]]);

const MilkOff = createLucideIcon("milk-off", [["path", { "d": "M8 2h8" }], ["path", { "d": "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" }], ["path", { "d": "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Milk = createLucideIcon("milk", [["path", { "d": "M8 2h8" }], ["path", { "d": "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" }], ["path", { "d": "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]]);

const Minimize2 = createLucideIcon("minimize-2", [["path", { "d": "m14 10 7-7" }], ["path", { "d": "M20 10h-6V4" }], ["path", { "d": "m3 21 7-7" }], ["path", { "d": "M4 14h6v6" }]]);

const Minimize = createLucideIcon("minimize", [["path", { "d": "M8 3v3a2 2 0 0 1-2 2H3" }], ["path", { "d": "M21 8h-3a2 2 0 0 1-2-2V3" }], ["path", { "d": "M3 16h3a2 2 0 0 1 2 2v3" }], ["path", { "d": "M16 21v-3a2 2 0 0 1 2-2h3" }]]);

const Minus = createLucideIcon("minus", [["path", { "d": "M5 12h14" }]]);

const MirrorRectangular = createLucideIcon("mirror-rectangular", [["path", { "d": "M11 6 8 9" }], ["path", { "d": "m16 7-8 8" }], ["rect", { "x": "4", "y": "2", "width": "16", "height": "20", "rx": "2" }]]);

const MirrorRound = createLucideIcon("mirror-round", [["path", { "d": "M10 6.6 8.6 8" }], ["path", { "d": "M12 18v4" }], ["path", { "d": "M15 7.5 9.5 13" }], ["path", { "d": "M7 22h10" }], ["circle", { "cx": "12", "cy": "10", "r": "8" }]]);

const MonitorCheck = createLucideIcon("monitor-check", [["path", { "d": "m9 10 2 2 4-4" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }]]);

const MonitorCloud = createLucideIcon("monitor-cloud", [["path", { "d": "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }], ["rect", { "x": "2", "y": "3", "width": "20", "height": "14", "rx": "2" }]]);

const MonitorDot = createLucideIcon("monitor-dot", [["path", { "d": "M12 17v4" }], ["path", { "d": "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" }], ["path", { "d": "M8 21h8" }], ["circle", { "cx": "19", "cy": "6", "r": "3" }]]);

const MonitorDown = createLucideIcon("monitor-down", [["path", { "d": "M12 13V7" }], ["path", { "d": "m15 10-3 3-3-3" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }]]);

const MonitorCog = createLucideIcon("monitor-cog", [["path", { "d": "M12 17v4" }], ["path", { "d": "m14.305 7.53.923-.382" }], ["path", { "d": "m15.228 4.852-.923-.383" }], ["path", { "d": "m16.852 3.228-.383-.924" }], ["path", { "d": "m16.852 8.772-.383.923" }], ["path", { "d": "m19.148 3.228.383-.924" }], ["path", { "d": "m19.53 9.696-.382-.924" }], ["path", { "d": "m20.772 4.852.924-.383" }], ["path", { "d": "m20.772 7.148.924.383" }], ["path", { "d": "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["path", { "d": "M8 21h8" }], ["circle", { "cx": "18", "cy": "6", "r": "3" }]]);

const MonitorOff = createLucideIcon("monitor-off", [["path", { "d": "M12 17v4" }], ["path", { "d": "M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M8 21h8" }], ["path", { "d": "M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" }]]);

const MonitorPause = createLucideIcon("monitor-pause", [["path", { "d": "M10 13V7" }], ["path", { "d": "M14 13V7" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }]]);

const MonitorSmartphone = createLucideIcon("monitor-smartphone", [["path", { "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }], ["path", { "d": "M10 19v-3.96 3.15" }], ["path", { "d": "M7 19h5" }], ["rect", { "width": "6", "height": "10", "x": "16", "y": "12", "rx": "2" }]]);

const MonitorSpeaker = createLucideIcon("monitor-speaker", [["path", { "d": "M5.5 20H8" }], ["path", { "d": "M17 9h.01" }], ["rect", { "width": "10", "height": "16", "x": "12", "y": "4", "rx": "2" }], ["path", { "d": "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }], ["circle", { "cx": "17", "cy": "15", "r": "1" }]]);

const MonitorPlay = createLucideIcon("monitor-play", [["path", { "d": "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }], ["rect", { "x": "2", "y": "3", "width": "20", "height": "14", "rx": "2" }]]);

const MonitorStop = createLucideIcon("monitor-stop", [["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }], ["rect", { "x": "2", "y": "3", "width": "20", "height": "14", "rx": "2" }], ["rect", { "x": "9", "y": "7", "width": "6", "height": "6", "rx": "1" }]]);

const MonitorUp = createLucideIcon("monitor-up", [["path", { "d": "m9 10 3-3 3 3" }], ["path", { "d": "M12 13V7" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }]]);

const MonitorX = createLucideIcon("monitor-x", [["path", { "d": "m14.5 12.5-5-5" }], ["path", { "d": "m9.5 12.5 5-5" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }]]);

const Monitor = createLucideIcon("monitor", [["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }], ["line", { "x1": "8", "x2": "16", "y1": "21", "y2": "21" }], ["line", { "x1": "12", "x2": "12", "y1": "17", "y2": "21" }]]);

const MoonStar = createLucideIcon("moon-star", [["path", { "d": "M18 5h4" }], ["path", { "d": "M20 3v4" }], ["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]]);

const Moon = createLucideIcon("moon", [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]]);

const Motorbike = createLucideIcon("motorbike", [["path", { "d": "m18 14-1-3" }], ["path", { "d": "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" }], ["path", { "d": "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" }], ["circle", { "cx": "19", "cy": "17", "r": "3" }], ["circle", { "cx": "5", "cy": "17", "r": "3" }]]);

const MountainSnow = createLucideIcon("mountain-snow", [["path", { "d": "m8 3 4 8 5-5 5 15H2L8 3z" }], ["path", { "d": "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]]);

const Mountain = createLucideIcon("mountain", [["path", { "d": "m8 3 4 8 5-5 5 15H2L8 3z" }]]);

const MouseLeft = createLucideIcon("mouse-left", [["path", { "d": "M12 7.318V10" }], ["path", { "d": "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" }], ["circle", { "cx": "7", "cy": "4", "r": "2" }]]);

const MouseOff = createLucideIcon("mouse-off", [["path", { "d": "M12 6v.343" }], ["path", { "d": "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }], ["path", { "d": "M19 13.343V9A7 7 0 0 0 8.56 2.902" }], ["path", { "d": "M22 22 2 2" }]]);

const MousePointer2Off = createLucideIcon("mouse-pointer-2-off", [["path", { "d": "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" }], ["path", { "d": "M22 2 2 22" }], ["path", { "d": "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" }]]);

const MousePointer2 = createLucideIcon("mouse-pointer-2", [["path", { "d": "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" }]]);

const MousePointerBan = createLucideIcon("mouse-pointer-ban", [["path", { "d": "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" }], ["circle", { "cx": "16", "cy": "16", "r": "6" }], ["path", { "d": "m11.8 11.8 8.4 8.4" }]]);

const MousePointerClick = createLucideIcon("mouse-pointer-click", [["path", { "d": "M14 4.1 12 6" }], ["path", { "d": "m5.1 8-2.9-.8" }], ["path", { "d": "m6 12-1.9 2" }], ["path", { "d": "M7.2 2.2 8 5.1" }], ["path", { "d": "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" }]]);

const MousePointer = createLucideIcon("mouse-pointer", [["path", { "d": "M12.586 12.586 19 19" }], ["path", { "d": "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" }]]);

const MouseRight = createLucideIcon("mouse-right", [["path", { "d": "M12 7.318V10" }], ["path", { "d": "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" }], ["circle", { "cx": "17", "cy": "4", "r": "2" }]]);

const Mouse = createLucideIcon("mouse", [["rect", { "x": "5", "y": "2", "width": "14", "height": "20", "rx": "7" }], ["path", { "d": "M12 6v4" }]]);

const MoveDiagonal2 = createLucideIcon("move-diagonal-2", [["path", { "d": "M19 13v6h-6" }], ["path", { "d": "M5 11V5h6" }], ["path", { "d": "m5 5 14 14" }]]);

const Move3d = createLucideIcon("move-3d", [["path", { "d": "M5 3v16h16" }], ["path", { "d": "m5 19 6-6" }], ["path", { "d": "m2 6 3-3 3 3" }], ["path", { "d": "m18 16 3 3-3 3" }]]);

const MoveDiagonal = createLucideIcon("move-diagonal", [["path", { "d": "M11 19H5v-6" }], ["path", { "d": "M13 5h6v6" }], ["path", { "d": "M19 5 5 19" }]]);

const MoveDownLeft = createLucideIcon("move-down-left", [["path", { "d": "M11 19H5V13" }], ["path", { "d": "M19 5L5 19" }]]);

const MoveDownRight = createLucideIcon("move-down-right", [["path", { "d": "M19 13V19H13" }], ["path", { "d": "M5 5L19 19" }]]);

const MoveDown = createLucideIcon("move-down", [["path", { "d": "M8 18L12 22L16 18" }], ["path", { "d": "M12 2V22" }]]);

const MoveHorizontal = createLucideIcon("move-horizontal", [["path", { "d": "m18 8 4 4-4 4" }], ["path", { "d": "M2 12h20" }], ["path", { "d": "m6 8-4 4 4 4" }]]);

const MoveLeft = createLucideIcon("move-left", [["path", { "d": "M6 8L2 12L6 16" }], ["path", { "d": "M2 12H22" }]]);

const MoveRight = createLucideIcon("move-right", [["path", { "d": "M18 8L22 12L18 16" }], ["path", { "d": "M2 12H22" }]]);

const MoveUpLeft = createLucideIcon("move-up-left", [["path", { "d": "M5 11V5H11" }], ["path", { "d": "M5 5L19 19" }]]);

const MoveUpRight = createLucideIcon("move-up-right", [["path", { "d": "M13 5H19V11" }], ["path", { "d": "M19 5L5 19" }]]);

const MoveUp = createLucideIcon("move-up", [["path", { "d": "M8 6L12 2L16 6" }], ["path", { "d": "M12 2V22" }]]);

const MoveVertical = createLucideIcon("move-vertical", [["path", { "d": "M12 2v20" }], ["path", { "d": "m8 18 4 4 4-4" }], ["path", { "d": "m8 6 4-4 4 4" }]]);

const Move = createLucideIcon("move", [["path", { "d": "M12 2v20" }], ["path", { "d": "m15 19-3 3-3-3" }], ["path", { "d": "m19 9 3 3-3 3" }], ["path", { "d": "M2 12h20" }], ["path", { "d": "m5 9-3 3 3 3" }], ["path", { "d": "m9 5 3-3 3 3" }]]);

const Music2 = createLucideIcon("music-2", [["circle", { "cx": "8", "cy": "18", "r": "4" }], ["path", { "d": "M12 18V2l7 4" }]]);

const Music3 = createLucideIcon("music-3", [["circle", { "cx": "12", "cy": "18", "r": "4" }], ["path", { "d": "M16 18V2" }]]);

const Music4 = createLucideIcon("music-4", [["path", { "d": "M9 18V5l12-2v13" }], ["path", { "d": "m9 9 12-2" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }], ["circle", { "cx": "18", "cy": "16", "r": "3" }]]);

const Music = createLucideIcon("music", [["path", { "d": "M9 18V5l12-2v13" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }], ["circle", { "cx": "18", "cy": "16", "r": "3" }]]);

const Navigation2Off = createLucideIcon("navigation-2-off", [["path", { "d": "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }], ["path", { "d": "M14.53 8.88 12 2l-1.17 3.17" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Navigation2 = createLucideIcon("navigation-2", [["polygon", { "points": "12 2 19 21 12 17 5 21 12 2" }]]);

const NavigationOff = createLucideIcon("navigation-off", [["path", { "d": "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }], ["path", { "d": "M17.39 11.73 22 2l-9.73 4.61" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Navigation = createLucideIcon("navigation", [["polygon", { "points": "3 11 22 2 13 21 11 13 3 11" }]]);

const Network = createLucideIcon("network", [["rect", { "x": "16", "y": "16", "width": "6", "height": "6", "rx": "1" }], ["rect", { "x": "2", "y": "16", "width": "6", "height": "6", "rx": "1" }], ["rect", { "x": "9", "y": "2", "width": "6", "height": "6", "rx": "1" }], ["path", { "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }], ["path", { "d": "M12 12V8" }]]);

const Newspaper = createLucideIcon("newspaper", [["path", { "d": "M15 18h-5" }], ["path", { "d": "M18 14h-8" }], ["path", { "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" }], ["rect", { "width": "8", "height": "4", "x": "10", "y": "6", "rx": "1" }]]);

const Nfc = createLucideIcon("nfc", [["path", { "d": "M6 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { "d": "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { "d": "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }], ["path", { "d": "M16.37 2a20.16 20.16 0 0 1 0 20" }]]);

const NonBinary = createLucideIcon("non-binary", [["path", { "d": "M12 2v10" }], ["path", { "d": "m8.5 4 7 4" }], ["path", { "d": "m8.5 8 7-4" }], ["circle", { "cx": "12", "cy": "17", "r": "5" }]]);

const NotebookPen = createLucideIcon("notebook-pen", [["path", { "d": "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }], ["path", { "d": "M2 6h4" }], ["path", { "d": "M2 10h4" }], ["path", { "d": "M2 14h4" }], ["path", { "d": "M2 18h4" }], ["path", { "d": "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]);

const NotebookTabs = createLucideIcon("notebook-tabs", [["path", { "d": "M2 6h4" }], ["path", { "d": "M2 10h4" }], ["path", { "d": "M2 14h4" }], ["path", { "d": "M2 18h4" }], ["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["path", { "d": "M15 2v20" }], ["path", { "d": "M15 7h5" }], ["path", { "d": "M15 12h5" }], ["path", { "d": "M15 17h5" }]]);

const NotebookText = createLucideIcon("notebook-text", [["path", { "d": "M2 6h4" }], ["path", { "d": "M2 10h4" }], ["path", { "d": "M2 14h4" }], ["path", { "d": "M2 18h4" }], ["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["path", { "d": "M9.5 8h5" }], ["path", { "d": "M9.5 12H16" }], ["path", { "d": "M9.5 16H14" }]]);

const Notebook = createLucideIcon("notebook", [["path", { "d": "M2 6h4" }], ["path", { "d": "M2 10h4" }], ["path", { "d": "M2 14h4" }], ["path", { "d": "M2 18h4" }], ["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["path", { "d": "M16 2v20" }]]);

const NotepadTextDashed = createLucideIcon("notepad-text-dashed", [["path", { "d": "M8 2v4" }], ["path", { "d": "M12 2v4" }], ["path", { "d": "M16 2v4" }], ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M20 12v2" }], ["path", { "d": "M20 18v2a2 2 0 0 1-2 2h-1" }], ["path", { "d": "M13 22h-2" }], ["path", { "d": "M7 22H6a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M4 14v-2" }], ["path", { "d": "M4 8V6a2 2 0 0 1 2-2h2" }], ["path", { "d": "M8 10h6" }], ["path", { "d": "M8 14h8" }], ["path", { "d": "M8 18h5" }]]);

const NotepadText = createLucideIcon("notepad-text", [["path", { "d": "M8 2v4" }], ["path", { "d": "M12 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "16", "height": "18", "x": "4", "y": "4", "rx": "2" }], ["path", { "d": "M8 10h6" }], ["path", { "d": "M8 14h8" }], ["path", { "d": "M8 18h5" }]]);

const NutOff = createLucideIcon("nut-off", [["path", { "d": "M12 4V2" }], ["path", { "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" }], ["path", { "d": "M19 10v3.343" }], ["path", { "d": "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Nut = createLucideIcon("nut", [["path", { "d": "M12 4V2" }], ["path", { "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" }], ["path", { "d": "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" }]]);

const OctagonAlert = createLucideIcon("octagon-alert", [["path", { "d": "M12 16h.01" }], ["path", { "d": "M12 8v4" }], ["path", { "d": "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" }]]);

const OctagonMinus = createLucideIcon("octagon-minus", [["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { "d": "M8 12h8" }]]);

const OctagonPause = createLucideIcon("octagon-pause", [["path", { "d": "M10 15V9" }], ["path", { "d": "M14 15V9" }], ["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }]]);

const OctagonX = createLucideIcon("octagon-x", [["path", { "d": "m15 9-6 6" }], ["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { "d": "m9 9 6 6" }]]);

const Octagon = createLucideIcon("octagon", [["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }]]);

const Omega = createLucideIcon("omega", [["path", { "d": "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" }]]);

const Option = createLucideIcon("option", [["path", { "d": "M3 3h6l6 18h6" }], ["path", { "d": "M14 3h7" }]]);

const Orbit = createLucideIcon("orbit", [["path", { "d": "M20.341 6.484A10 10 0 0 1 10.266 21.85" }], ["path", { "d": "M3.659 17.516A10 10 0 0 1 13.74 2.152" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }], ["circle", { "cx": "19", "cy": "5", "r": "2" }], ["circle", { "cx": "5", "cy": "19", "r": "2" }]]);

const Origami = createLucideIcon("origami", [["path", { "d": "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }], ["path", { "d": "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }], ["path", { "d": "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" }]]);

const Package2 = createLucideIcon("package-2", [["path", { "d": "M12 3v6" }], ["path", { "d": "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" }], ["path", { "d": "M3.054 9.013h17.893" }]]);

const PackageCheck = createLucideIcon("package-check", [["path", { "d": "M12 22V12" }], ["path", { "d": "m16 17 2 2 4-4" }], ["path", { "d": "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" }], ["path", { "d": "M3.29 7 12 12l8.71-5" }], ["path", { "d": "m7.5 4.27 8.997 5.148" }]]);

const PackageMinus = createLucideIcon("package-minus", [["path", { "d": "M12 22V12" }], ["path", { "d": "M16 17h6" }], ["path", { "d": "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" }], ["path", { "d": "M3.29 7 12 12l8.71-5" }], ["path", { "d": "m7.5 4.27 8.997 5.148" }]]);

const PackagePlus = createLucideIcon("package-plus", [["path", { "d": "M12 22V12" }], ["path", { "d": "M16 17h6" }], ["path", { "d": "M19 14v6" }], ["path", { "d": "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" }], ["path", { "d": "M3.29 7 12 12l8.71-5" }], ["path", { "d": "m7.5 4.27 8.997 5.148" }]]);

const PackageOpen = createLucideIcon("package-open", [["path", { "d": "M12 22v-9" }], ["path", { "d": "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }], ["path", { "d": "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }], ["path", { "d": "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" }]]);

const PackageSearch = createLucideIcon("package-search", [["path", { "d": "M12 22V12" }], ["path", { "d": "M20.27 18.27 22 20" }], ["path", { "d": "M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" }], ["path", { "d": "M3.29 7 12 12l8.71-5" }], ["path", { "d": "m7.5 4.27 8.997 5.148" }], ["circle", { "cx": "18.5", "cy": "16.5", "r": "2.5" }]]);

const PackageX = createLucideIcon("package-x", [["path", { "d": "M12 22V12" }], ["path", { "d": "m16.5 14.5 5 5" }], ["path", { "d": "m16.5 19.5 5-5" }], ["path", { "d": "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" }], ["path", { "d": "M3.29 7 12 12l8.71-5" }], ["path", { "d": "m7.5 4.27 8.997 5.148" }]]);

const Package = createLucideIcon("package", [["path", { "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }], ["path", { "d": "M12 22V12" }], ["polyline", { "points": "3.29 7 12 12 20.71 7" }], ["path", { "d": "m7.5 4.27 9 5.15" }]]);

const PaintBucket = createLucideIcon("paint-bucket", [["path", { "d": "M11 7 6 2" }], ["path", { "d": "M18.992 12H2.041" }], ["path", { "d": "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" }], ["path", { "d": "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" }]]);

const PaintRoller = createLucideIcon("paint-roller", [["rect", { "width": "16", "height": "6", "x": "2", "y": "2", "rx": "2" }], ["path", { "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }], ["rect", { "width": "4", "height": "6", "x": "8", "y": "16", "rx": "1" }]]);

const PaintbrushVertical = createLucideIcon("paintbrush-vertical", [["path", { "d": "M10 2v2" }], ["path", { "d": "M14 2v4" }], ["path", { "d": "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }], ["path", { "d": "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" }]]);

const Paintbrush = createLucideIcon("paintbrush", [["path", { "d": "m14.622 17.897-10.68-2.913" }], ["path", { "d": "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" }], ["path", { "d": "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" }]]);

const Palette = createLucideIcon("palette", [["path", { "d": "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" }], ["circle", { "cx": "13.5", "cy": "6.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "17.5", "cy": "10.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "6.5", "cy": "12.5", "r": ".5", "fill": "currentColor" }], ["circle", { "cx": "8.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]]);

const Panda = createLucideIcon("panda", [["path", { "d": "M11.25 17.25h1.5L12 18z" }], ["path", { "d": "m15 12 2 2" }], ["path", { "d": "M18 6.5a.5.5 0 0 0-.5-.5" }], ["path", { "d": "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" }], ["path", { "d": "M6 6.5a.495.495 0 0 1 .5-.5" }], ["path", { "d": "m9 12-2 2" }]]);

const PanelBottomClose = createLucideIcon("panel-bottom-close", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "m15 8-3 3-3-3" }]]);

const PanelBottomDashed = createLucideIcon("panel-bottom-dashed", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M14 15h1" }], ["path", { "d": "M19 15h2" }], ["path", { "d": "M3 15h2" }], ["path", { "d": "M9 15h1" }]]);

const PanelBottomOpen = createLucideIcon("panel-bottom-open", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "m9 10 3-3 3 3" }]]);

const PanelBottom = createLucideIcon("panel-bottom", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 15h18" }]]);

const PanelLeftClose = createLucideIcon("panel-left-close", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "m16 15-3-3 3-3" }]]);

const PanelLeftDashed = createLucideIcon("panel-left-dashed", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 14v1" }], ["path", { "d": "M9 19v2" }], ["path", { "d": "M9 3v2" }], ["path", { "d": "M9 9v1" }]]);

const PanelLeftOpen = createLucideIcon("panel-left-open", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "m14 9 3 3-3 3" }]]);

const PanelLeftRightDashed = createLucideIcon("panel-left-right-dashed", [["path", { "d": "M15 10V9" }], ["path", { "d": "M15 15v-1" }], ["path", { "d": "M15 21v-2" }], ["path", { "d": "M15 5V3" }], ["path", { "d": "M9 10V9" }], ["path", { "d": "M9 15v-1" }], ["path", { "d": "M9 21v-2" }], ["path", { "d": "M9 5V3" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const PanelLeft = createLucideIcon("panel-left", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }]]);

const PanelRightClose = createLucideIcon("panel-right-close", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M15 3v18" }], ["path", { "d": "m8 9 3 3-3 3" }]]);

const PanelRightDashed = createLucideIcon("panel-right-dashed", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M15 14v1" }], ["path", { "d": "M15 19v2" }], ["path", { "d": "M15 3v2" }], ["path", { "d": "M15 9v1" }]]);

const PanelRightOpen = createLucideIcon("panel-right-open", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M15 3v18" }], ["path", { "d": "m10 15-3-3 3-3" }]]);

const PanelRight = createLucideIcon("panel-right", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M15 3v18" }]]);

const PanelTopBottomDashed = createLucideIcon("panel-top-bottom-dashed", [["path", { "d": "M14 15h1" }], ["path", { "d": "M14 9h1" }], ["path", { "d": "M19 15h2" }], ["path", { "d": "M19 9h2" }], ["path", { "d": "M3 15h2" }], ["path", { "d": "M3 9h2" }], ["path", { "d": "M9 15h1" }], ["path", { "d": "M9 9h1" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const PanelTopClose = createLucideIcon("panel-top-close", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "m9 16 3-3 3 3" }]]);

const PanelTopDashed = createLucideIcon("panel-top-dashed", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M14 9h1" }], ["path", { "d": "M19 9h2" }], ["path", { "d": "M3 9h2" }], ["path", { "d": "M9 9h1" }]]);

const PanelTopOpen = createLucideIcon("panel-top-open", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "m15 14-3 3-3-3" }]]);

const PanelTop = createLucideIcon("panel-top", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }]]);

const PanelsLeftBottom = createLucideIcon("panels-left-bottom", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 3v18" }], ["path", { "d": "M9 15h12" }]]);

const PanelsRightBottom = createLucideIcon("panels-right-bottom", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 15h12" }], ["path", { "d": "M15 3v18" }]]);

const PanelsTopLeft = createLucideIcon("panels-top-left", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "M9 21V9" }]]);

const Parasol = createLucideIcon("parasol", [["path", { "d": "M12.5 11.134 18.196 21" }], ["path", { "d": "M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413" }], ["path", { "d": "M21 21H3" }]]);

const Paperclip = createLucideIcon("paperclip", [["path", { "d": "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" }]]);

const Parentheses = createLucideIcon("parentheses", [["path", { "d": "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { "d": "M16 3s4 3 4 9-4 9-4 9" }]]);

const ParkingMeter = createLucideIcon("parking-meter", [["path", { "d": "M11 15h2" }], ["path", { "d": "M12 12v3" }], ["path", { "d": "M12 19v3" }], ["path", { "d": "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" }], ["path", { "d": "M9 9a3 3 0 1 1 6 0" }]]);

const PartyPopper = createLucideIcon("party-popper", [["path", { "d": "M5.8 11.3 2 22l10.7-3.79" }], ["path", { "d": "M4 3h.01" }], ["path", { "d": "M22 8h.01" }], ["path", { "d": "M15 2h.01" }], ["path", { "d": "M22 20h.01" }], ["path", { "d": "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" }], ["path", { "d": "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }], ["path", { "d": "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }], ["path", { "d": "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" }]]);

const Pause = createLucideIcon("pause", [["rect", { "x": "14", "y": "3", "width": "5", "height": "18", "rx": "1" }], ["rect", { "x": "5", "y": "3", "width": "5", "height": "18", "rx": "1" }]]);

const PawPrint = createLucideIcon("paw-print", [["circle", { "cx": "11", "cy": "4", "r": "2" }], ["circle", { "cx": "18", "cy": "8", "r": "2" }], ["circle", { "cx": "20", "cy": "16", "r": "2" }], ["path", { "d": "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }]]);

const PcCase = createLucideIcon("pc-case", [["rect", { "width": "14", "height": "20", "x": "5", "y": "2", "rx": "2" }], ["path", { "d": "M15 14h.01" }], ["path", { "d": "M9 6h6" }], ["path", { "d": "M9 10h6" }]]);

const PenLine = createLucideIcon("pen-line", [["path", { "d": "M13 21h8" }], ["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]);

const PenOff = createLucideIcon("pen-off", [["path", { "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { "d": "m2 2 20 20" }]]);

const PenTool = createLucideIcon("pen-tool", [["path", { "d": "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }], ["path", { "d": "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }], ["path", { "d": "m2.3 2.3 7.286 7.286" }], ["circle", { "cx": "11", "cy": "11", "r": "2" }]]);

const Pen = createLucideIcon("pen", [["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]);

const PencilLine = createLucideIcon("pencil-line", [["path", { "d": "M13 21h8" }], ["path", { "d": "m15 5 4 4" }], ["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]);

const PencilOff = createLucideIcon("pencil-off", [["path", { "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { "d": "m15 5 4 4" }], ["path", { "d": "m2 2 20 20" }]]);

const PencilRuler = createLucideIcon("pencil-ruler", [["path", { "d": "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }], ["path", { "d": "m8 6 2-2" }], ["path", { "d": "m18 16 2-2" }], ["path", { "d": "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }], ["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { "d": "m15 5 4 4" }]]);

const PencilSparkles = createLucideIcon("pencil-sparkles", [["path", { "d": "M10 3H8" }], ["path", { "d": "m15.007 5.008 3.987 3.986" }], ["path", { "d": "M20 15v4" }], ["path", { "d": "M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { "d": "M22 17h-4" }], ["path", { "d": "M4 5v4" }], ["path", { "d": "M6 7H2" }], ["path", { "d": "M9 2v2" }]]);

const Pencil = createLucideIcon("pencil", [["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { "d": "m15 5 4 4" }]]);

const Pentagon = createLucideIcon("pentagon", [["path", { "d": "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" }]]);

const Percent = createLucideIcon("percent", [["line", { "x1": "19", "x2": "5", "y1": "5", "y2": "19" }], ["circle", { "cx": "6.5", "cy": "6.5", "r": "2.5" }], ["circle", { "cx": "17.5", "cy": "17.5", "r": "2.5" }]]);

const PersonStanding = createLucideIcon("person-standing", [["circle", { "cx": "12", "cy": "5", "r": "1" }], ["path", { "d": "m9 20 3-6 3 6" }], ["path", { "d": "m6 8 6 2 6-2" }], ["path", { "d": "M12 10v4" }]]);

const PhilippinePeso = createLucideIcon("philippine-peso", [["path", { "d": "M20 11H4" }], ["path", { "d": "M20 7H4" }], ["path", { "d": "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]]);

const PhoneCall = createLucideIcon("phone-call", [["path", { "d": "M13 2a9 9 0 0 1 9 9" }], ["path", { "d": "M13 6a5 5 0 0 1 5 5" }], ["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const PhoneForwarded = createLucideIcon("phone-forwarded", [["path", { "d": "M14 6h8" }], ["path", { "d": "m18 2 4 4-4 4" }], ["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const PhoneIncoming = createLucideIcon("phone-incoming", [["path", { "d": "M16 2v6h6" }], ["path", { "d": "m22 2-6 6" }], ["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const PhoneOff = createLucideIcon("phone-off", [["path", { "d": "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" }], ["path", { "d": "M22 2 2 22" }], ["path", { "d": "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" }]]);

const PhoneMissed = createLucideIcon("phone-missed", [["path", { "d": "m16 2 6 6" }], ["path", { "d": "m22 2-6 6" }], ["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const PhoneOutgoing = createLucideIcon("phone-outgoing", [["path", { "d": "m16 8 6-6" }], ["path", { "d": "M22 8V2h-6" }], ["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const Phone = createLucideIcon("phone", [["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const Pi = createLucideIcon("pi", [["line", { "x1": "9", "x2": "9", "y1": "4", "y2": "20" }], ["path", { "d": "M4 7c0-1.7 1.3-3 3-3h13" }], ["path", { "d": "M18 20c-1.7 0-3-1.3-3-3V4" }]]);

const Pickaxe = createLucideIcon("pickaxe", [["path", { "d": "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" }], ["path", { "d": "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" }], ["path", { "d": "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" }], ["path", { "d": "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" }]]);

const PictureInPicture2 = createLucideIcon("picture-in-picture-2", [["path", { "d": "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }], ["rect", { "width": "10", "height": "7", "x": "12", "y": "13", "rx": "2" }]]);

const Piano = createLucideIcon("piano", [["path", { "d": "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" }], ["path", { "d": "M2 14h20" }], ["path", { "d": "M6 14v4" }], ["path", { "d": "M10 14v4" }], ["path", { "d": "M14 14v4" }], ["path", { "d": "M18 14v4" }]]);

const PictureInPicture = createLucideIcon("picture-in-picture", [["path", { "d": "M2 10h6V4" }], ["path", { "d": "m2 4 6 6" }], ["path", { "d": "M21 10V7a2 2 0 0 0-2-2h-7" }], ["path", { "d": "M3 14v2a2 2 0 0 0 2 2h3" }], ["rect", { "x": "12", "y": "14", "width": "10", "height": "7", "rx": "1" }]]);

const PiggyBank = createLucideIcon("piggy-bank", [["path", { "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" }], ["path", { "d": "M16 10h.01" }], ["path", { "d": "M2 8v1a2 2 0 0 0 2 2h1" }]]);

const PilcrowRight = createLucideIcon("pilcrow-right", [["path", { "d": "M10 3v11" }], ["path", { "d": "M10 9H7a1 1 0 0 1 0-6h8" }], ["path", { "d": "M14 3v11" }], ["path", { "d": "m18 14 4 4H2" }], ["path", { "d": "m22 18-4 4" }]]);

const PilcrowLeft = createLucideIcon("pilcrow-left", [["path", { "d": "M14 3v11" }], ["path", { "d": "M14 9h-3a3 3 0 0 1 0-6h9" }], ["path", { "d": "M18 3v11" }], ["path", { "d": "M22 18H2l4-4" }], ["path", { "d": "m6 22-4-4" }]]);

const Pilcrow = createLucideIcon("pilcrow", [["path", { "d": "M13 4v16" }], ["path", { "d": "M17 4v16" }], ["path", { "d": "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]]);

const PillBottle = createLucideIcon("pill-bottle", [["path", { "d": "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }], ["path", { "d": "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }], ["rect", { "width": "16", "height": "5", "x": "4", "y": "2", "rx": "1" }]]);

const Pill = createLucideIcon("pill", [["path", { "d": "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }], ["path", { "d": "m8.5 8.5 7 7" }]]);

const PinOff = createLucideIcon("pin-off", [["path", { "d": "M12 17v5" }], ["path", { "d": "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]]);

const Pin = createLucideIcon("pin", [["path", { "d": "M12 17v5" }], ["path", { "d": "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" }]]);

const Pipette = createLucideIcon("pipette", [["path", { "d": "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" }], ["path", { "d": "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }], ["path", { "d": "m2 22 .414-.414" }]]);

const Pizza = createLucideIcon("pizza", [["path", { "d": "m12 14-1 1" }], ["path", { "d": "m13.75 18.25-1.25 1.42" }], ["path", { "d": "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }], ["path", { "d": "M18.8 9.3a1 1 0 0 0 2.1 7.7" }], ["path", { "d": "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" }]]);

const PlaneLanding = createLucideIcon("plane-landing", [["path", { "d": "M2 22h20" }], ["path", { "d": "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" }]]);

const PlaneTakeoff = createLucideIcon("plane-takeoff", [["path", { "d": "M2 22h20" }], ["path", { "d": "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" }]]);

const Plane = createLucideIcon("plane", [["path", { "d": "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }]]);

const PlayOff = createLucideIcon("play-off", [["path", { "d": "m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" }], ["path", { "d": "m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" }], ["path", { "d": "m2 2 20 20" }]]);

const Play = createLucideIcon("play", [["path", { "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }]]);

const Plug2 = createLucideIcon("plug-2", [["path", { "d": "M9 2v6" }], ["path", { "d": "M15 2v6" }], ["path", { "d": "M12 17v5" }], ["path", { "d": "M5 8h14" }], ["path", { "d": "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]]);

const Plug = createLucideIcon("plug", [["path", { "d": "M12 22v-5" }], ["path", { "d": "M15 8V2" }], ["path", { "d": "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" }], ["path", { "d": "M9 8V2" }]]);

const PlugZap = createLucideIcon("plug-zap", [["path", { "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { "d": "m2 22 3-3" }], ["path", { "d": "M7.5 13.5 10 11" }], ["path", { "d": "M10.5 16.5 13 14" }], ["path", { "d": "m18 3-4 4h6l-4 4" }]]);

const Plus = createLucideIcon("plus", [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]]);

const PocketKnife = createLucideIcon("pocket-knife", [["path", { "d": "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }], ["path", { "d": "M18 6h.01" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }], ["path", { "d": "M18 11.66V22a4 4 0 0 0 4-4V6" }]]);

const Podcast = createLucideIcon("podcast", [["path", { "d": "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z", "fill": "currentColor" }], ["path", { "d": "M16.85 18.58a9 9 0 1 0-9.7 0" }], ["path", { "d": "M8 14a5 5 0 1 1 8 0" }], ["circle", { "cx": "12", "cy": "11", "r": "1", "fill": "currentColor" }]]);

const Podium = createLucideIcon("podium", [["path", { "d": "M12 6V2h-1" }], ["path", { "d": "M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1" }], ["path", { "d": "M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" }]]);

const PointerOff = createLucideIcon("pointer-off", [["path", { "d": "M10 4.5V4a2 2 0 0 0-2.41-1.957" }], ["path", { "d": "M13.9 8.4a2 2 0 0 0-1.26-1.295" }], ["path", { "d": "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }], ["path", { "d": "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }], ["path", { "d": "M6 6v8" }], ["path", { "d": "m2 2 20 20" }]]);

const Pointer = createLucideIcon("pointer", [["path", { "d": "M22 14a8 8 0 0 1-8 8" }], ["path", { "d": "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { "d": "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }], ["path", { "d": "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }], ["path", { "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]);

const Popcorn = createLucideIcon("popcorn", [["path", { "d": "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }], ["path", { "d": "M10 22 9 8" }], ["path", { "d": "m14 22 1-14" }], ["path", { "d": "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" }]]);

const Popsicle = createLucideIcon("popsicle", [["path", { "d": "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }], ["path", { "d": "m22 22-5.5-5.5" }]]);

const PoundSterling = createLucideIcon("pound-sterling", [["path", { "d": "M18 7c0-5.333-8-5.333-8 0" }], ["path", { "d": "M10 7v14" }], ["path", { "d": "M6 21h12" }], ["path", { "d": "M6 13h10" }]]);

const PowerOff = createLucideIcon("power-off", [["path", { "d": "M18.36 6.64A9 9 0 0 1 20.77 15" }], ["path", { "d": "M6.16 6.16a9 9 0 1 0 12.68 12.68" }], ["path", { "d": "M12 2v4" }], ["path", { "d": "m2 2 20 20" }]]);

const Power = createLucideIcon("power", [["path", { "d": "M12 2v10" }], ["path", { "d": "M18.4 6.6a9 9 0 1 1-12.77.04" }]]);

const Presentation = createLucideIcon("presentation", [["path", { "d": "M2 3h20" }], ["path", { "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }], ["path", { "d": "m7 21 5-5 5 5" }]]);

const PrinterCheck = createLucideIcon("printer-check", [["path", { "d": "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }], ["path", { "d": "m16 19 2 2 4-4" }], ["path", { "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }], ["path", { "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]]);

const PrinterX = createLucideIcon("printer-x", [["path", { "d": "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" }], ["path", { "d": "m16.5 16.5 5 5" }], ["path", { "d": "m16.5 21.5 5-5" }], ["path", { "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" }], ["path", { "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]]);

const Printer = createLucideIcon("printer", [["path", { "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }], ["rect", { "x": "6", "y": "14", "width": "12", "height": "8", "rx": "1" }]]);

const Projector = createLucideIcon("projector", [["path", { "d": "M5 7 3 5" }], ["path", { "d": "M9 6V3" }], ["path", { "d": "m13 7 2-2" }], ["circle", { "cx": "9", "cy": "13", "r": "3" }], ["path", { "d": "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }], ["path", { "d": "M16 16h2" }]]);

const Proportions = createLucideIcon("proportions", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M12 9v11" }], ["path", { "d": "M2 9h13a2 2 0 0 1 2 2v9" }]]);

const Puzzle = createLucideIcon("puzzle", [["path", { "d": "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" }]]);

const Pyramid = createLucideIcon("pyramid", [["path", { "d": "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" }], ["path", { "d": "M12 2v20" }]]);

const Quote = createLucideIcon("quote", [["path", { "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }], ["path", { "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }]]);

const QrCode = createLucideIcon("qr-code", [["rect", { "width": "5", "height": "5", "x": "3", "y": "3", "rx": "1" }], ["rect", { "width": "5", "height": "5", "x": "16", "y": "3", "rx": "1" }], ["rect", { "width": "5", "height": "5", "x": "3", "y": "16", "rx": "1" }], ["path", { "d": "M21 16h-3a2 2 0 0 0-2 2v3" }], ["path", { "d": "M21 21v.01" }], ["path", { "d": "M12 7v3a2 2 0 0 1-2 2H7" }], ["path", { "d": "M3 12h.01" }], ["path", { "d": "M12 3h.01" }], ["path", { "d": "M12 16v.01" }], ["path", { "d": "M16 12h1" }], ["path", { "d": "M21 12v.01" }], ["path", { "d": "M12 21v-1" }]]);

const Rabbit = createLucideIcon("rabbit", [["path", { "d": "M13 16a3 3 0 0 1 2.24 5" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" }], ["path", { "d": "M20 8.54V4a2 2 0 1 0-4 0v3" }], ["path", { "d": "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]]);

const Radar = createLucideIcon("radar", [["path", { "d": "M19.07 4.93A10 10 0 0 0 6.99 3.34" }], ["path", { "d": "M4 6h.01" }], ["path", { "d": "M2.29 9.62A10 10 0 1 0 21.31 8.35" }], ["path", { "d": "M16.24 7.76A6 6 0 1 0 8.23 16.67" }], ["path", { "d": "M12 18h.01" }], ["path", { "d": "M17.99 11.66A6 6 0 0 1 15.77 16.67" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }], ["path", { "d": "m13.41 10.59 5.66-5.66" }]]);

const Radiation = createLucideIcon("radiation", [["path", { "d": "M12 12h.01" }], ["path", { "d": "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z" }], ["path", { "d": "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z" }], ["path", { "d": "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" }]]);

const Radical = createLucideIcon("radical", [["path", { "d": "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" }]]);

const RadioOff = createLucideIcon("radio-off", [["path", { "d": "M13.414 13.414a2 2 0 1 1-2.828-2.828" }], ["path", { "d": "M16.247 7.761a6 6 0 0 1 1.744 4.572" }], ["path", { "d": "M19.075 4.933a10 10 0 0 1 2.234 10.72" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }], ["path", { "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }]]);

const RadioReceiver = createLucideIcon("radio-receiver", [["path", { "d": "M5 16v2" }], ["path", { "d": "M19 16v2" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "8", "rx": "2" }], ["path", { "d": "M18 12h.01" }]]);

const Radio = createLucideIcon("radio", [["path", { "d": "M16.247 7.761a6 6 0 0 1 0 8.478" }], ["path", { "d": "M19.075 4.933a10 10 0 0 1 0 14.134" }], ["path", { "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }], ["path", { "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const RadioTower = createLucideIcon("radio-tower", [["path", { "d": "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }], ["path", { "d": "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }], ["circle", { "cx": "12", "cy": "9", "r": "2" }], ["path", { "d": "M16.2 4.8c2 2 2.26 5.11.8 7.47" }], ["path", { "d": "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }], ["path", { "d": "M9.5 18h5" }], ["path", { "d": "m8 22 4-11 4 11" }]]);

const Radius = createLucideIcon("radius", [["path", { "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82" }], ["circle", { "cx": "19", "cy": "19", "r": "2" }], ["path", { "d": "m13.41 13.41 4.18 4.18" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const Rainbow = createLucideIcon("rainbow", [["path", { "d": "M22 17a10 10 0 0 0-20 0" }], ["path", { "d": "M6 17a6 6 0 0 1 12 0" }], ["path", { "d": "M10 17a2 2 0 0 1 4 0" }]]);

const Rat = createLucideIcon("rat", [["path", { "d": "M13 22H4a2 2 0 0 1 0-4h12" }], ["path", { "d": "M13.236 18a3 3 0 0 0-2.2-5" }], ["path", { "d": "M16 9h.01" }], ["path", { "d": "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" }], ["path", { "d": "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" }]]);

const Ratio = createLucideIcon("ratio", [["rect", { "width": "12", "height": "20", "x": "6", "y": "2", "rx": "2" }], ["rect", { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }]]);

const ReceiptCent = createLucideIcon("receipt-cent", [["path", { "d": "M12 7v10" }], ["path", { "d": "M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }]]);

const ReceiptEuro = createLucideIcon("receipt-euro", [["path", { "d": "M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M8 12h5" }]]);

const ReceiptIndianRupee = createLucideIcon("receipt-indian-rupee", [["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M8 11h8" }], ["path", { "d": "M8 7h8" }], ["path", { "d": "M9 7a4 4 0 0 1 0 8H8l3 2" }]]);

const ReceiptJapaneseYen = createLucideIcon("receipt-japanese-yen", [["path", { "d": "m12 10 3-3" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M9 11h6" }], ["path", { "d": "M9 15h6" }], ["path", { "d": "m9 7 3 3v7" }]]);

const ReceiptPoundSterling = createLucideIcon("receipt-pound-sterling", [["path", { "d": "M10 17V9.5a1 1 0 0 1 5 0" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M8 13h5" }], ["path", { "d": "M8 17h7" }]]);

const ReceiptSwissFranc = createLucideIcon("receipt-swiss-franc", [["path", { "d": "M10 11h4" }], ["path", { "d": "M10 17V7h5" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M8 15h5" }]]);

const ReceiptRussianRuble = createLucideIcon("receipt-russian-ruble", [["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }], ["path", { "d": "M8 11h5a2 2 0 0 0 0-4h-3v10" }], ["path", { "d": "M8 15h5" }]]);

const ReceiptText = createLucideIcon("receipt-text", [["path", { "d": "M13 16H8" }], ["path", { "d": "M14 8H8" }], ["path", { "d": "M16 12H8" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }]]);

const ReceiptTurkishLira = createLucideIcon("receipt-turkish-lira", [["path", { "d": "M10 7v10a5 5 0 0 0 5-5" }], ["path", { "d": "m14 8-6 3" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }]]);

const Receipt = createLucideIcon("receipt", [["path", { "d": "M12 17V7" }], ["path", { "d": "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" }], ["path", { "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }]]);

const RectangleCircle = createLucideIcon("rectangle-circle", [["path", { "d": "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }], ["circle", { "cx": "14", "cy": "12", "r": "8" }]]);

const RectangleEllipsis = createLucideIcon("rectangle-ellipsis", [["rect", { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M17 12h.01" }], ["path", { "d": "M7 12h.01" }]]);

const RectangleGoggles = createLucideIcon("rectangle-goggles", [["path", { "d": "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }]]);

const RectangleHorizontal = createLucideIcon("rectangle-horizontal", [["rect", { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }]]);

const RectangleVertical = createLucideIcon("rectangle-vertical", [["rect", { "width": "12", "height": "20", "x": "6", "y": "2", "rx": "2" }]]);

const Recycle = createLucideIcon("recycle", [["path", { "d": "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }], ["path", { "d": "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }], ["path", { "d": "m14 16-3 3 3 3" }], ["path", { "d": "M8.293 13.596 7.196 9.5 3.1 10.598" }], ["path", { "d": "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }], ["path", { "d": "m13.378 9.633 4.096 1.098 1.097-4.096" }]]);

const Redo2 = createLucideIcon("redo-2", [["path", { "d": "m15 14 5-5-5-5" }], ["path", { "d": "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]]);

const RedoDot = createLucideIcon("redo-dot", [["circle", { "cx": "12", "cy": "17", "r": "1" }], ["path", { "d": "M21 7v6h-6" }], ["path", { "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]);

const Redo = createLucideIcon("redo", [["path", { "d": "M21 7v6h-6" }], ["path", { "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]);

const RefreshCcwDot = createLucideIcon("refresh-ccw-dot", [["path", { "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["path", { "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }], ["path", { "d": "M16 16h5v5" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }]]);

const RefreshCcw = createLucideIcon("refresh-ccw", [["path", { "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["path", { "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }], ["path", { "d": "M16 16h5v5" }]]);

const RefreshCw = createLucideIcon("refresh-cw", [["path", { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { "d": "M21 3v5h-5" }], ["path", { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { "d": "M8 16H3v5" }]]);

const RefreshCwOff = createLucideIcon("refresh-cw-off", [["path", { "d": "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }], ["path", { "d": "M8 16H3v5" }], ["path", { "d": "M3 12C3 9.51 4 7.26 5.64 5.64" }], ["path", { "d": "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }], ["path", { "d": "M21 12c0 1-.16 1.97-.47 2.87" }], ["path", { "d": "M21 3v5h-5" }], ["path", { "d": "M22 22 2 2" }]]);

const Refrigerator = createLucideIcon("refrigerator", [["path", { "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }], ["path", { "d": "M5 10h14" }], ["path", { "d": "M15 7v6" }]]);

const Regex = createLucideIcon("regex", [["path", { "d": "M17 3v10" }], ["path", { "d": "m12.67 5.5 8.66 5" }], ["path", { "d": "m12.67 10.5 8.66-5" }], ["path", { "d": "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]]);

const RemoveFormatting = createLucideIcon("remove-formatting", [["path", { "d": "M4 7V4h16v3" }], ["path", { "d": "M5 20h6" }], ["path", { "d": "M13 4 8 20" }], ["path", { "d": "m15 15 5 5" }], ["path", { "d": "m20 15-5 5" }]]);

const Repeat1 = createLucideIcon("repeat-1", [["path", { "d": "m17 2 4 4-4 4" }], ["path", { "d": "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { "d": "m7 22-4-4 4-4" }], ["path", { "d": "M21 13v1a4 4 0 0 1-4 4H3" }], ["path", { "d": "M11 10h1v4" }]]);

const Repeat2 = createLucideIcon("repeat-2", [["path", { "d": "m2 9 3-3 3 3" }], ["path", { "d": "M13 18H7a2 2 0 0 1-2-2V6" }], ["path", { "d": "m22 15-3 3-3-3" }], ["path", { "d": "M11 6h6a2 2 0 0 1 2 2v10" }]]);

const RepeatOff = createLucideIcon("repeat-off", [["path", { "d": "M11.656 6H21l-4-4" }], ["path", { "d": "M17.898 17.898A4 4 0 0 1 17 18H3l4-4" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M21 13v1a4 4 0 0 1-.171 1.159" }], ["path", { "d": "m21 6-4 4" }], ["path", { "d": "M3 11v-1a4 4 0 0 1 3.102-3.898" }], ["path", { "d": "m7 22-4-4" }]]);

const Repeat = createLucideIcon("repeat", [["path", { "d": "m17 2 4 4-4 4" }], ["path", { "d": "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { "d": "m7 22-4-4 4-4" }], ["path", { "d": "M21 13v1a4 4 0 0 1-4 4H3" }]]);

const Replace = createLucideIcon("replace", [["path", { "d": "M14 4a1 1 0 0 1 1-1" }], ["path", { "d": "M15 10a1 1 0 0 1-1-1" }], ["path", { "d": "M21 4a1 1 0 0 0-1-1" }], ["path", { "d": "M21 9a1 1 0 0 1-1 1" }], ["path", { "d": "m3 7 3 3 3-3" }], ["path", { "d": "M6 10V5a2 2 0 0 1 2-2h2" }], ["rect", { "x": "3", "y": "14", "width": "7", "height": "7", "rx": "1" }]]);

const ReplaceAll = createLucideIcon("replace-all", [["path", { "d": "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }], ["path", { "d": "M14 4a1 1 0 0 1 1-1" }], ["path", { "d": "M15 10a1 1 0 0 1-1-1" }], ["path", { "d": "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }], ["path", { "d": "M21 4a1 1 0 0 0-1-1" }], ["path", { "d": "M21 9a1 1 0 0 1-1 1" }], ["path", { "d": "m3 7 3 3 3-3" }], ["path", { "d": "M6 10V5a2 2 0 0 1 2-2h2" }], ["rect", { "x": "3", "y": "14", "width": "7", "height": "7", "rx": "1" }]]);

const Reply = createLucideIcon("reply", [["path", { "d": "M20 18v-2a4 4 0 0 0-4-4H4" }], ["path", { "d": "m9 17-5-5 5-5" }]]);

const ReplyAll = createLucideIcon("reply-all", [["path", { "d": "m12 17-5-5 5-5" }], ["path", { "d": "M22 18v-2a4 4 0 0 0-4-4H7" }], ["path", { "d": "m7 17-5-5 5-5" }]]);

const Ribbon = createLucideIcon("ribbon", [["path", { "d": "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }], ["path", { "d": "m12 18 2.57-3.5" }], ["path", { "d": "M6.243 9.016a7 7 0 0 1 11.507-.009" }], ["path", { "d": "M9.35 14.53 12 11.22" }], ["path", { "d": "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" }]]);

const Rewind = createLucideIcon("rewind", [["path", { "d": "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" }], ["path", { "d": "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" }]]);

const Road = createLucideIcon("road", [["path", { "d": "M12 17v4" }], ["path", { "d": "M12 5V3" }], ["path", { "d": "M12 9v3" }], ["path", { "d": "M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z" }]]);

const Rocket = createLucideIcon("rocket", [["path", { "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }], ["path", { "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" }], ["path", { "d": "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" }], ["path", { "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }]]);

const RockingChair = createLucideIcon("rocking-chair", [["path", { "d": "m15 13 3.708 7.416" }], ["path", { "d": "M3 19a15 15 0 0 0 18 0" }], ["path", { "d": "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" }], ["path", { "d": "m9 13-3.708 7.416" }]]);

const RollerCoaster = createLucideIcon("roller-coaster", [["path", { "d": "M6 19V5" }], ["path", { "d": "M10 19V6.8" }], ["path", { "d": "M14 19v-7.8" }], ["path", { "d": "M18 5v4" }], ["path", { "d": "M18 19v-6" }], ["path", { "d": "M22 19V9" }], ["path", { "d": "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]]);

const Rose = createLucideIcon("rose", [["path", { "d": "M17 10h-1a4 4 0 1 1 4-4v.534" }], ["path", { "d": "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" }], ["path", { "d": "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" }], ["path", { "d": "M9.77 12C4 15 2 22 2 22" }], ["circle", { "cx": "17", "cy": "8", "r": "2" }]]);

const RotateCcwKey = createLucideIcon("rotate-ccw-key", [["path", { "d": "M12 7v6" }], ["path", { "d": "M12 9h2" }], ["path", { "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["circle", { "cx": "12", "cy": "15", "r": "2" }]]);

const Rotate3d = createLucideIcon("rotate-3d", [["path", { "d": "m15.194 13.707 3.814 1.86-1.86 3.814" }], ["path", { "d": "M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" }], ["path", { "d": "M21.79796 11 A 10 5 0 1 0 19 15.57071" }]]);

const RotateCcw = createLucideIcon("rotate-ccw", [["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }]]);

const RotateCcwSquare = createLucideIcon("rotate-ccw-square", [["path", { "d": "M20 9V7a2 2 0 0 0-2-2h-6" }], ["path", { "d": "m15 2-3 3 3 3" }], ["path", { "d": "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]]);

const RotateCwSquare = createLucideIcon("rotate-cw-square", [["path", { "d": "M12 5H6a2 2 0 0 0-2 2v3" }], ["path", { "d": "m9 8 3-3-3-3" }], ["path", { "d": "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]]);

const RotateCw = createLucideIcon("rotate-cw", [["path", { "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }], ["path", { "d": "M21 3v5h-5" }]]);

const RouteOff = createLucideIcon("route-off", [["circle", { "cx": "6", "cy": "19", "r": "3" }], ["path", { "d": "M9 19h8.5c.4 0 .9-.1 1.3-.2" }], ["path", { "d": "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }], ["path", { "d": "M15 5h-4.3" }], ["circle", { "cx": "18", "cy": "5", "r": "3" }]]);

const Route = createLucideIcon("route", [["circle", { "cx": "6", "cy": "19", "r": "3" }], ["path", { "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }], ["circle", { "cx": "18", "cy": "5", "r": "3" }]]);

const Router = createLucideIcon("router", [["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2" }], ["path", { "d": "M6.01 18H6" }], ["path", { "d": "M10.01 18H10" }], ["path", { "d": "M15 10v4" }], ["path", { "d": "M17.84 7.17a4 4 0 0 0-5.66 0" }], ["path", { "d": "M20.66 4.34a8 8 0 0 0-11.31 0" }]]);

const Rows2 = createLucideIcon("rows-2", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 12h18" }]]);

const Rows4 = createLucideIcon("rows-4", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M21 7.5H3" }], ["path", { "d": "M21 12H3" }], ["path", { "d": "M21 16.5H3" }]]);

const Rows3 = createLucideIcon("rows-3", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M21 9H3" }], ["path", { "d": "M21 15H3" }]]);

const Rss = createLucideIcon("rss", [["path", { "d": "M4 11a9 9 0 0 1 9 9" }], ["path", { "d": "M4 4a16 16 0 0 1 16 16" }], ["circle", { "cx": "5", "cy": "19", "r": "1" }]]);

const RulerDimensionLine = createLucideIcon("ruler-dimension-line", [["path", { "d": "M10 15v-3" }], ["path", { "d": "M14 15v-3" }], ["path", { "d": "M18 15v-3" }], ["path", { "d": "M2 8V4" }], ["path", { "d": "M22 6H2" }], ["path", { "d": "M22 8V4" }], ["path", { "d": "M6 15v-3" }], ["rect", { "x": "2", "y": "12", "width": "20", "height": "8", "rx": "2" }]]);

const Ruler = createLucideIcon("ruler", [["path", { "d": "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" }], ["path", { "d": "m14.5 12.5 2-2" }], ["path", { "d": "m11.5 9.5 2-2" }], ["path", { "d": "m8.5 6.5 2-2" }], ["path", { "d": "m17.5 15.5 2-2" }]]);

const RussianRuble = createLucideIcon("russian-ruble", [["path", { "d": "M6 11h8a4 4 0 0 0 0-8H9v18" }], ["path", { "d": "M6 15h8" }]]);

const Sailboat = createLucideIcon("sailboat", [["path", { "d": "M10 2v15" }], ["path", { "d": "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }], ["path", { "d": "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }]]);

const Salad = createLucideIcon("salad", [["path", { "d": "M7 21h10" }], ["path", { "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { "d": "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }], ["path", { "d": "m13 12 4-4" }], ["path", { "d": "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]]);

const Sandwich = createLucideIcon("sandwich", [["path", { "d": "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }], ["path", { "d": "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }], ["path", { "d": "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }], ["path", { "d": "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }], ["rect", { "width": "20", "height": "4", "x": "2", "y": "11", "rx": "1" }]]);

const SatelliteDish = createLucideIcon("satellite-dish", [["path", { "d": "M4 10a7.31 7.31 0 0 0 10 10Z" }], ["path", { "d": "m9 15 3-3" }], ["path", { "d": "M17 13a6 6 0 0 0-6-6" }], ["path", { "d": "M21 13A10 10 0 0 0 11 3" }]]);

const Satellite = createLucideIcon("satellite", [["path", { "d": "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" }], ["path", { "d": "M16.5 7.5 19 5" }], ["path", { "d": "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" }], ["path", { "d": "M9 21a6 6 0 0 0-6-6" }], ["path", { "d": "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" }]]);

const SaudiRiyal = createLucideIcon("saudi-riyal", [["path", { "d": "m20 19.5-5.5 1.2" }], ["path", { "d": "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" }], ["path", { "d": "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" }], ["path", { "d": "M20 10 4 13.5" }]]);

const SaveAll = createLucideIcon("save-all", [["path", { "d": "M10 2v3a1 1 0 0 0 1 1h5" }], ["path", { "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }], ["path", { "d": "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" }]]);

const SaveCheck = createLucideIcon("save-check", [["path", { "d": "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35" }], ["path", { "d": "m16 19 2 2 4-4" }], ["path", { "d": "M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]]);

const SaveOff = createLucideIcon("save-off", [["path", { "d": "M13 13H8a1 1 0 0 0-1 1v7" }], ["path", { "d": "M14 8h1" }], ["path", { "d": "M17 21v-4" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }], ["path", { "d": "M29.5 11.5s5 5 4 5" }], ["path", { "d": "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]]);

const SavePen = createLucideIcon("save-pen", [["path", { "d": "M13.33 13H8a1 1 0 00-1 1v7" }], ["path", { "d": "M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z" }], ["path", { "d": "M7 3v4a1 1 0 001 1h7" }], ["path", { "d": "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3" }]]);

const SavePlus = createLucideIcon("save-plus", [["path", { "d": "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12" }], ["path", { "d": "M16 13H8a1 1 0 0 0-1 1v7" }], ["path", { "d": "M19 22v-6" }], ["path", { "d": "M22 19h-6" }], ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]]);

const Save = createLucideIcon("save", [["path", { "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }], ["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]]);

const Scale3d = createLucideIcon("scale-3d", [["path", { "d": "M5 7v11a1 1 0 0 0 1 1h11" }], ["path", { "d": "M5.293 18.707 11 13" }], ["circle", { "cx": "19", "cy": "19", "r": "2" }], ["circle", { "cx": "5", "cy": "5", "r": "2" }]]);

const Scale = createLucideIcon("scale", [["path", { "d": "M12 3v18" }], ["path", { "d": "m19 8 3 8a5 5 0 0 1-6 0zV7" }], ["path", { "d": "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }], ["path", { "d": "m5 8 3 8a5 5 0 0 1-6 0zV7" }], ["path", { "d": "M7 21h10" }]]);

const Scaling = createLucideIcon("scaling", [["path", { "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { "d": "M14 15H9v-5" }], ["path", { "d": "M16 3h5v5" }], ["path", { "d": "M21 3 9 15" }]]);

const ScanBarcode = createLucideIcon("scan-barcode", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M8 7v10" }], ["path", { "d": "M12 7v10" }], ["path", { "d": "M17 7v10" }]]);

const ScanEye = createLucideIcon("scan-eye", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }], ["path", { "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]);

const ScanFace = createLucideIcon("scan-face", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M8 14s1.5 2 4 2 4-2 4-2" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "M15 9h.01" }]]);

const ScanHeart = createLucideIcon("scan-heart", [["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" }]]);

const ScanLine = createLucideIcon("scan-line", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M7 12h10" }]]);

const ScanSearch = createLucideIcon("scan-search", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }], ["path", { "d": "m16 16-1.9-1.9" }]]);

const ScanQrCode = createLucideIcon("scan-qr-code", [["path", { "d": "M17 12v4a1 1 0 0 1-1 1h-4" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M17 8V7" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M7 17h.01" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { "x": "7", "y": "7", "width": "5", "height": "5", "rx": "1" }]]);

const ScanText = createLucideIcon("scan-text", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M7 8h8" }], ["path", { "d": "M7 12h10" }], ["path", { "d": "M7 16h6" }]]);

const Scan = createLucideIcon("scan", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }]]);

const School = createLucideIcon("school", [["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { "d": "M18 4.933V21" }], ["path", { "d": "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }], ["path", { "d": "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" }], ["path", { "d": "M6 4.933V21" }], ["circle", { "cx": "12", "cy": "9", "r": "2" }]]);

const ScissorsLineDashed = createLucideIcon("scissors-line-dashed", [["path", { "d": "M5.42 9.42 8 12" }], ["circle", { "cx": "4", "cy": "8", "r": "2" }], ["path", { "d": "m14 6-8.58 8.58" }], ["circle", { "cx": "4", "cy": "16", "r": "2" }], ["path", { "d": "M10.8 14.8 14 18" }], ["path", { "d": "M16 12h-2" }], ["path", { "d": "M22 12h-2" }]]);

const Scissors = createLucideIcon("scissors", [["circle", { "cx": "6", "cy": "6", "r": "3" }], ["path", { "d": "M8.12 8.12 12 12" }], ["path", { "d": "M20 4 8.12 15.88" }], ["circle", { "cx": "6", "cy": "18", "r": "3" }], ["path", { "d": "M14.8 14.8 20 20" }]]);

const Scooter = createLucideIcon("scooter", [["path", { "d": "M21 4h-3.5l2 11.05" }], ["path", { "d": "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" }], ["circle", { "cx": "19.5", "cy": "17.5", "r": "2.5" }], ["circle", { "cx": "4.5", "cy": "17.5", "r": "2.5" }]]);

const ScreenShareOff = createLucideIcon("screen-share-off", [["path", { "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { "d": "M8 21h8" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "m22 3-5 5" }], ["path", { "d": "m17 3 5 5" }]]);

const ScreenShare = createLucideIcon("screen-share", [["path", { "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { "d": "M8 21h8" }], ["path", { "d": "M12 17v4" }], ["path", { "d": "m17 8 5-5" }], ["path", { "d": "M17 3h5v5" }]]);

const Scroll = createLucideIcon("scroll", [["path", { "d": "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]);

const ScrollText = createLucideIcon("scroll-text", [["path", { "d": "M15 12h-5" }], ["path", { "d": "M15 8h-5" }], ["path", { "d": "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]);

const SearchAlert = createLucideIcon("search-alert", [["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }], ["path", { "d": "M11 7v4" }], ["path", { "d": "M11 15h.01" }]]);

const SearchCheck = createLucideIcon("search-check", [["path", { "d": "m8 11 2 2 4-4" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]]);

const SearchCode = createLucideIcon("search-code", [["path", { "d": "m13 13.5 2-2.5-2-2.5" }], ["path", { "d": "m21 21-4.3-4.3" }], ["path", { "d": "M9 8.5 7 11l2 2.5" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }]]);

const SearchSlash = createLucideIcon("search-slash", [["path", { "d": "m13.5 8.5-5 5" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]]);

const SearchX = createLucideIcon("search-x", [["path", { "d": "m13.5 8.5-5 5" }], ["path", { "d": "m8.5 8.5 5 5" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]]);

const Search = createLucideIcon("search", [["path", { "d": "m21 21-4.34-4.34" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }]]);

const Section = createLucideIcon("section", [["path", { "d": "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }], ["path", { "d": "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]]);

const SendHorizontal = createLucideIcon("send-horizontal", [["path", { "d": "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" }], ["path", { "d": "M6 12h16" }]]);

const SendToBack = createLucideIcon("send-to-back", [["rect", { "x": "14", "y": "14", "width": "8", "height": "8", "rx": "2" }], ["rect", { "x": "2", "y": "2", "width": "8", "height": "8", "rx": "2" }], ["path", { "d": "M7 14v1a2 2 0 0 0 2 2h1" }], ["path", { "d": "M14 7h1a2 2 0 0 1 2 2v1" }]]);

const Send = createLucideIcon("send", [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]]);

const SeparatorHorizontal = createLucideIcon("separator-horizontal", [["path", { "d": "m16 16-4 4-4-4" }], ["path", { "d": "M3 12h18" }], ["path", { "d": "m8 8 4-4 4 4" }]]);

const SeparatorVertical = createLucideIcon("separator-vertical", [["path", { "d": "M12 3v18" }], ["path", { "d": "m16 16 4-4-4-4" }], ["path", { "d": "m8 8-4 4 4 4" }]]);

const ServerCog = createLucideIcon("server-cog", [["path", { "d": "m10.852 14.772-.383.923" }], ["path", { "d": "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" }], ["path", { "d": "m13.148 9.228.383-.923" }], ["path", { "d": "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" }], ["path", { "d": "m14.772 10.852.923-.383" }], ["path", { "d": "m14.772 13.148.923.383" }], ["path", { "d": "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }], ["path", { "d": "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "M6 6h.01" }], ["path", { "d": "m9.228 10.852-.923-.383" }], ["path", { "d": "m9.228 13.148-.923.383" }]]);

const ServerCrash = createLucideIcon("server-crash", [["path", { "d": "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }], ["path", { "d": "M6 6h.01" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "m13 6-4 6h6l-4 6" }]]);

const ServerOff = createLucideIcon("server-off", [["path", { "d": "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }], ["path", { "d": "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }], ["path", { "d": "M22 17v-1a2 2 0 0 0-2-2h-1" }], ["path", { "d": "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }], ["path", { "d": "M6 18h.01" }], ["path", { "d": "m2 2 20 20" }]]);

const Server = createLucideIcon("server", [["rect", { "width": "20", "height": "8", "x": "2", "y": "2", "rx": "2", "ry": "2" }], ["rect", { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2", "ry": "2" }], ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }], ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]]);

const Settings2 = createLucideIcon("settings-2", [["path", { "d": "M14 17H5" }], ["path", { "d": "M19 7h-9" }], ["circle", { "cx": "17", "cy": "17", "r": "3" }], ["circle", { "cx": "7", "cy": "7", "r": "3" }]]);

const Settings = createLucideIcon("settings", [["path", { "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const Share2 = createLucideIcon("share-2", [["circle", { "cx": "18", "cy": "5", "r": "3" }], ["circle", { "cx": "6", "cy": "12", "r": "3" }], ["circle", { "cx": "18", "cy": "19", "r": "3" }], ["line", { "x1": "8.59", "x2": "15.42", "y1": "13.51", "y2": "17.49" }], ["line", { "x1": "15.41", "x2": "8.59", "y1": "6.51", "y2": "10.49" }]]);

const Shapes = createLucideIcon("shapes", [["path", { "d": "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }], ["rect", { "x": "3", "y": "14", "width": "7", "height": "7", "rx": "1" }], ["circle", { "cx": "17.5", "cy": "17.5", "r": "3.5" }]]);

const Sheet = createLucideIcon("sheet", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["line", { "x1": "3", "x2": "21", "y1": "9", "y2": "9" }], ["line", { "x1": "3", "x2": "21", "y1": "15", "y2": "15" }], ["line", { "x1": "9", "x2": "9", "y1": "9", "y2": "21" }], ["line", { "x1": "15", "x2": "15", "y1": "9", "y2": "21" }]]);

const Share = createLucideIcon("share", [["path", { "d": "M12 2v13" }], ["path", { "d": "m16 6-4-4-4 4" }], ["path", { "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }]]);

const Shell = createLucideIcon("shell", [["path", { "d": "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" }]]);

const ShelvingUnit = createLucideIcon("shelving-unit", [["path", { "d": "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }], ["path", { "d": "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }], ["path", { "d": "M20 22V2" }], ["path", { "d": "M4 12h16" }], ["path", { "d": "M4 20h16" }], ["path", { "d": "M4 2v20" }], ["path", { "d": "M4 4h16" }]]);

const ShieldAlert = createLucideIcon("shield-alert", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M12 8v4" }], ["path", { "d": "M12 16h.01" }]]);

const ShieldBan = createLucideIcon("shield-ban", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m4.243 5.21 14.39 12.472" }]]);

const ShieldCheck = createLucideIcon("shield-check", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const ShieldCogCorner = createLucideIcon("shield-cog-corner", [["path", { "d": "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4" }], ["path", { "d": "M14.923 16.547 14 16.164" }], ["path", { "d": "m14.923 18.843-.923.383" }], ["path", { "d": "M16.547 14.923 16.164 14" }], ["path", { "d": "m16.547 20.467-.383.924" }], ["path", { "d": "m18.843 14.923.383-.923" }], ["path", { "d": "m19.225 21.391-.382-.924" }], ["path", { "d": "m20.467 16.547.923-.383" }], ["path", { "d": "m20.467 18.843.923.383" }], ["circle", { "cx": "17.695", "cy": "17.695", "r": "3" }]]);

const ShieldCog = createLucideIcon("shield-cog", [["path", { "d": "m10.929 14.467-.383.924" }], ["path", { "d": "M10.929 8.923 10.546 8" }], ["path", { "d": "M13.225 8.923 13.608 8" }], ["path", { "d": "m13.607 15.391-.382-.924" }], ["path", { "d": "m14.849 10.547.923-.383" }], ["path", { "d": "m14.849 12.843.923.383" }], ["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9.305 10.547-.923-.383" }], ["path", { "d": "m9.305 12.843-.923.383" }], ["circle", { "cx": "12.077", "cy": "11.695", "r": "3" }]]);

const ShieldEllipsis = createLucideIcon("shield-ellipsis", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M8 12h.01" }], ["path", { "d": "M12 12h.01" }], ["path", { "d": "M16 12h.01" }]]);

const ShieldHalf = createLucideIcon("shield-half", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M12 22V2" }]]);

const ShieldMinus = createLucideIcon("shield-minus", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M9 12h6" }]]);

const ShieldOff = createLucideIcon("shield-off", [["path", { "d": "m2 2 20 20" }], ["path", { "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" }], ["path", { "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" }]]);

const ShieldPlus = createLucideIcon("shield-plus", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M9 12h6" }], ["path", { "d": "M12 9v6" }]]);

const ShieldQuestionMark = createLucideIcon("shield-question-mark", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }], ["path", { "d": "M12 17h.01" }]]);

const ShieldX = createLucideIcon("shield-x", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m14.5 9.5-5 5" }], ["path", { "d": "m9.5 9.5 5 5" }]]);

const ShieldUser = createLucideIcon("shield-user", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "M6.376 18.91a6 6 0 0 1 11.249.003" }], ["circle", { "cx": "12", "cy": "11", "r": "4" }]]);

const Shield = createLucideIcon("shield", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }]]);

const ShipWheel = createLucideIcon("ship-wheel", [["circle", { "cx": "12", "cy": "12", "r": "8" }], ["path", { "d": "M12 2v7.5" }], ["path", { "d": "m19 5-5.23 5.23" }], ["path", { "d": "M22 12h-7.5" }], ["path", { "d": "m19 19-5.23-5.23" }], ["path", { "d": "M12 14.5V22" }], ["path", { "d": "M10.23 13.77 5 19" }], ["path", { "d": "M9.5 12H2" }], ["path", { "d": "M10.23 10.23 5 5" }], ["circle", { "cx": "12", "cy": "12", "r": "2.5" }]]);

const Ship = createLucideIcon("ship", [["path", { "d": "M12 10.189V14" }], ["path", { "d": "M12 2v3" }], ["path", { "d": "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }], ["path", { "d": "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" }], ["path", { "d": "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }]]);

const Shirt = createLucideIcon("shirt", [["path", { "d": "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }]]);

const ShoppingBag = createLucideIcon("shopping-bag", [["path", { "d": "M16 10a4 4 0 0 1-8 0" }], ["path", { "d": "M3.103 6.034h17.794" }], ["path", { "d": "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" }]]);

const ShoppingBasket = createLucideIcon("shopping-basket", [["path", { "d": "m15 11-1 9" }], ["path", { "d": "m19 11-4-7" }], ["path", { "d": "M2 11h20" }], ["path", { "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }], ["path", { "d": "M4.5 15.5h15" }], ["path", { "d": "m5 11 4-7" }], ["path", { "d": "m9 11 1 9" }]]);

const ShoppingCart = createLucideIcon("shopping-cart", [["circle", { "cx": "8", "cy": "21", "r": "1" }], ["circle", { "cx": "19", "cy": "21", "r": "1" }], ["path", { "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }]]);

const Shovel = createLucideIcon("shovel", [["path", { "d": "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z" }], ["path", { "d": "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z" }], ["path", { "d": "m9 15 7.879-7.878" }]]);

const ShowerHead = createLucideIcon("shower-head", [["path", { "d": "m4 4 2.5 2.5" }], ["path", { "d": "M13.5 6.5a4.95 4.95 0 0 0-7 7" }], ["path", { "d": "M15 5 5 15" }], ["path", { "d": "M14 17v.01" }], ["path", { "d": "M10 16v.01" }], ["path", { "d": "M13 13v.01" }], ["path", { "d": "M16 10v.01" }], ["path", { "d": "M11 20v.01" }], ["path", { "d": "M17 14v.01" }], ["path", { "d": "M20 11v.01" }]]);

const Shrimp = createLucideIcon("shrimp", [["path", { "d": "M11 12h.01" }], ["path", { "d": "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" }], ["path", { "d": "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" }], ["path", { "d": "M14 8a8.5 8.5 0 0 1 0 8" }], ["path", { "d": "M16 16c2 0 4.5-4 4-6" }]]);

const Shredder = createLucideIcon("shredder", [["path", { "d": "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }], ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M10 22v-5" }], ["path", { "d": "M14 19v-2" }], ["path", { "d": "M18 20v-3" }], ["path", { "d": "M2 13h20" }], ["path", { "d": "M6 20v-3" }]]);

const Shrink = createLucideIcon("shrink", [["path", { "d": "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }], ["path", { "d": "M9 19.8V15m0 0H4.2M9 15l-6 6" }], ["path", { "d": "M15 4.2V9m0 0h4.8M15 9l6-6" }], ["path", { "d": "M9 4.2V9m0 0H4.2M9 9 3 3" }]]);

const Shrub = createLucideIcon("shrub", [["path", { "d": "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" }], ["path", { "d": "M14.5 14.5 12 17" }], ["path", { "d": "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" }]]);

const Shuffle = createLucideIcon("shuffle", [["path", { "d": "m18 14 4 4-4 4" }], ["path", { "d": "m18 2 4 4-4 4" }], ["path", { "d": "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }], ["path", { "d": "M2 6h1.972a4 4 0 0 1 3.6 2.2" }], ["path", { "d": "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }]]);

const Sigma = createLucideIcon("sigma", [["path", { "d": "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" }]]);

const SignalHigh = createLucideIcon("signal-high", [["path", { "d": "M2 20h.01" }], ["path", { "d": "M7 20v-4" }], ["path", { "d": "M12 20v-8" }], ["path", { "d": "M17 20V8" }]]);

const SignalLow = createLucideIcon("signal-low", [["path", { "d": "M2 20h.01" }], ["path", { "d": "M7 20v-4" }]]);

const SignalMedium = createLucideIcon("signal-medium", [["path", { "d": "M2 20h.01" }], ["path", { "d": "M7 20v-4" }], ["path", { "d": "M12 20v-8" }]]);

const SignalZero = createLucideIcon("signal-zero", [["path", { "d": "M2 20h.01" }]]);

const Signal = createLucideIcon("signal", [["path", { "d": "M2 20h.01" }], ["path", { "d": "M7 20v-4" }], ["path", { "d": "M12 20v-8" }], ["path", { "d": "M17 20V8" }], ["path", { "d": "M22 4v16" }]]);

const Signature = createLucideIcon("signature", [["path", { "d": "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" }], ["path", { "d": "M3 21h18" }]]);

const SignpostBig = createLucideIcon("signpost-big", [["path", { "d": "M10 9H4L2 7l2-2h6" }], ["path", { "d": "M14 5h6l2 2-2 2h-6" }], ["path", { "d": "M10 22V4a2 2 0 1 1 4 0v18" }], ["path", { "d": "M8 22h8" }]]);

const Signpost = createLucideIcon("signpost", [["path", { "d": "M12 13v8" }], ["path", { "d": "M12 3v3" }], ["path", { "d": "M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z" }]]);

const Siren = createLucideIcon("siren", [["path", { "d": "M7 18v-6a5 5 0 1 1 10 0v6" }], ["path", { "d": "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }], ["path", { "d": "M21 12h1" }], ["path", { "d": "M18.5 4.5 18 5" }], ["path", { "d": "M2 12h1" }], ["path", { "d": "M12 2v1" }], ["path", { "d": "m4.929 4.929.707.707" }], ["path", { "d": "M12 12v6" }]]);

const SkipBack = createLucideIcon("skip-back", [["path", { "d": "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" }], ["path", { "d": "M3 20V4" }]]);

const SkipForward = createLucideIcon("skip-forward", [["path", { "d": "M21 4v16" }], ["path", { "d": "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }]]);

const Skull = createLucideIcon("skull", [["path", { "d": "m12.5 17-.5-1-.5 1h1z" }], ["path", { "d": "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" }], ["circle", { "cx": "15", "cy": "12", "r": "1" }], ["circle", { "cx": "9", "cy": "12", "r": "1" }]]);

const Slash = createLucideIcon("slash", [["path", { "d": "M22 2 2 22" }]]);

const Slice = createLucideIcon("slice", [["path", { "d": "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" }]]);

const SlidersHorizontal = createLucideIcon("sliders-horizontal", [["path", { "d": "M10 5H3" }], ["path", { "d": "M12 19H3" }], ["path", { "d": "M14 3v4" }], ["path", { "d": "M16 17v4" }], ["path", { "d": "M21 12h-9" }], ["path", { "d": "M21 19h-5" }], ["path", { "d": "M21 5h-7" }], ["path", { "d": "M8 10v4" }], ["path", { "d": "M8 12H3" }]]);

const SlidersVertical = createLucideIcon("sliders-vertical", [["path", { "d": "M10 8h4" }], ["path", { "d": "M12 21v-9" }], ["path", { "d": "M12 8V3" }], ["path", { "d": "M17 16h4" }], ["path", { "d": "M19 12V3" }], ["path", { "d": "M19 21v-5" }], ["path", { "d": "M3 14h4" }], ["path", { "d": "M5 10V3" }], ["path", { "d": "M5 21v-7" }]]);

const SmartphoneCharging = createLucideIcon("smartphone-charging", [["rect", { "width": "14", "height": "20", "x": "5", "y": "2", "rx": "2", "ry": "2" }], ["path", { "d": "M12.667 8 10 12h4l-2.667 4" }]]);

const SmartphoneNfc = createLucideIcon("smartphone-nfc", [["rect", { "width": "7", "height": "12", "x": "2", "y": "6", "rx": "1" }], ["path", { "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]]);

const Smartphone = createLucideIcon("smartphone", [["rect", { "width": "14", "height": "20", "x": "5", "y": "2", "rx": "2", "ry": "2" }], ["path", { "d": "M12 18h.01" }]]);

const SmilePlus = createLucideIcon("smile-plus", [["path", { "d": "M22 11v1a10 10 0 1 1-9-10" }], ["path", { "d": "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }], ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }], ["path", { "d": "M16 5h6" }], ["path", { "d": "M19 2v6" }]]);

const Smile = createLucideIcon("smile", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }], ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }]]);

const Snail = createLucideIcon("snail", [["path", { "d": "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }], ["circle", { "cx": "10", "cy": "13", "r": "8" }], ["path", { "d": "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }], ["path", { "d": "M18 3 19.1 5.2" }], ["path", { "d": "M22 3 20.9 5.2" }]]);

const Snowflake = createLucideIcon("snowflake", [["path", { "d": "m10 20-1.25-2.5L6 18" }], ["path", { "d": "M10 4 8.75 6.5 6 6" }], ["path", { "d": "m14 20 1.25-2.5L18 18" }], ["path", { "d": "m14 4 1.25 2.5L18 6" }], ["path", { "d": "m17 21-3-6h-4" }], ["path", { "d": "m17 3-3 6 1.5 3" }], ["path", { "d": "M2 12h6.5L10 9" }], ["path", { "d": "m20 10-1.5 2 1.5 2" }], ["path", { "d": "M22 12h-6.5L14 15" }], ["path", { "d": "m4 10 1.5 2L4 14" }], ["path", { "d": "m7 21 3-6-1.5-3" }], ["path", { "d": "m7 3 3 6h4" }]]);

const SoapDispenserDroplet = createLucideIcon("soap-dispenser-droplet", [["path", { "d": "M10.5 2v4" }], ["path", { "d": "M14 2H7a2 2 0 0 0-2 2" }], ["path", { "d": "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" }], ["path", { "d": "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]]);

const Sofa = createLucideIcon("sofa", [["path", { "d": "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }], ["path", { "d": "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { "d": "M4 18v2" }], ["path", { "d": "M20 18v2" }], ["path", { "d": "M12 4v9" }]]);

const SolarPanel = createLucideIcon("solar-panel", [["path", { "d": "M11 2h2" }], ["path", { "d": "m14.28 14-4.56 8" }], ["path", { "d": "m21 22-1.558-4H4.558" }], ["path", { "d": "M3 10v2" }], ["path", { "d": "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" }], ["path", { "d": "M7 2a4 4 0 0 1-4 4" }], ["path", { "d": "m8.66 7.66 1.41 1.41" }]]);

const Soup = createLucideIcon("soup", [["path", { "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { "d": "M7 21h10" }], ["path", { "d": "M19.5 12 22 6" }], ["path", { "d": "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }], ["path", { "d": "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }], ["path", { "d": "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]]);

const Space = createLucideIcon("space", [["path", { "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]);

const Spade = createLucideIcon("spade", [["path", { "d": "M12 18v4" }], ["path", { "d": "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" }]]);

const Sparkle = createLucideIcon("sparkle", [["path", { "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }]]);

const Sparkles = createLucideIcon("sparkles", [["path", { "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }], ["path", { "d": "M20 2v4" }], ["path", { "d": "M22 4h-4" }], ["circle", { "cx": "4", "cy": "20", "r": "2" }]]);

const Speaker = createLucideIcon("speaker", [["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["path", { "d": "M12 6h.01" }], ["circle", { "cx": "12", "cy": "14", "r": "4" }], ["path", { "d": "M12 14h.01" }]]);

const Speech = createLucideIcon("speech", [["path", { "d": "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" }], ["path", { "d": "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }], ["path", { "d": "M17 15a3.5 3.5 0 0 0-.025-4.975" }]]);

const SpellCheck2 = createLucideIcon("spell-check-2", [["path", { "d": "m6 16 6-12 6 12" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" }]]);

const SplinePointer = createLucideIcon("spline-pointer", [["path", { "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { "d": "M5 17A12 12 0 0 1 17 5" }], ["circle", { "cx": "19", "cy": "5", "r": "2" }], ["circle", { "cx": "5", "cy": "19", "r": "2" }]]);

const Spline = createLucideIcon("spline", [["circle", { "cx": "19", "cy": "5", "r": "2" }], ["circle", { "cx": "5", "cy": "19", "r": "2" }], ["path", { "d": "M5 17A12 12 0 0 1 17 5" }]]);

const SpellCheck = createLucideIcon("spell-check", [["path", { "d": "m6 16 6-12 6 12" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "m16 20 2 2 4-4" }]]);

const Spool = createLucideIcon("spool", [["path", { "d": "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" }], ["path", { "d": "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" }]]);

const Split = createLucideIcon("split", [["path", { "d": "M16 3h5v5" }], ["path", { "d": "M8 3H3v5" }], ["path", { "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }], ["path", { "d": "m15 9 6-6" }]]);

const SportShoe = createLucideIcon("sport-shoe", [["path", { "d": "m15 10.42 4.8-5.07" }], ["path", { "d": "M19 18h3" }], ["path", { "d": "M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14" }]]);

const Spotlight = createLucideIcon("spotlight", [["path", { "d": "M15.295 19.562 16 22" }], ["path", { "d": "m17 16 3.758 2.098" }], ["path", { "d": "m19 12.5 3.026-.598" }], ["path", { "d": "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" }], ["path", { "d": "M8 9V2" }]]);

const SprayCan = createLucideIcon("spray-can", [["path", { "d": "M3 3h.01" }], ["path", { "d": "M7 5h.01" }], ["path", { "d": "M11 7h.01" }], ["path", { "d": "M3 7h.01" }], ["path", { "d": "M7 9h.01" }], ["path", { "d": "M3 11h.01" }], ["rect", { "width": "4", "height": "4", "x": "15", "y": "5" }], ["path", { "d": "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }], ["path", { "d": "m13 14 8-2" }], ["path", { "d": "m13 19 8-2" }]]);

const Sprout = createLucideIcon("sprout", [["path", { "d": "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" }], ["path", { "d": "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" }], ["path", { "d": "M5 21h14" }]]);

const SquareActivity = createLucideIcon("square-activity", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M17 12h-2l-2 5-2-10-2 5H7" }]]);

const SquareArrowDownLeft = createLucideIcon("square-arrow-down-left", [["path", { "d": "M15 15H9l6-6" }], ["path", { "d": "M9 15V9" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareArrowDownRight = createLucideIcon("square-arrow-down-right", [["path", { "d": "M15 15 9 9" }], ["path", { "d": "M9 15h6V9" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareArrowDown = createLucideIcon("square-arrow-down", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M12 8v8" }], ["path", { "d": "m8 12 4 4 4-4" }]]);

const SquareArrowLeft = createLucideIcon("square-arrow-left", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m12 8-4 4 4 4" }], ["path", { "d": "M16 12H8" }]]);

const SquareArrowOutDownLeft = createLucideIcon("square-arrow-out-down-left", [["path", { "d": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }], ["path", { "d": "m3 21 9-9" }], ["path", { "d": "M9 21H3v-6" }]]);

const SquareArrowOutDownRight = createLucideIcon("square-arrow-out-down-right", [["path", { "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { "d": "m21 21-9-9" }], ["path", { "d": "M21 15v6h-6" }]]);

const SquareArrowOutUpRight = createLucideIcon("square-arrow-out-up-right", [["path", { "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }], ["path", { "d": "m21 3-9 9" }], ["path", { "d": "M15 3h6v6" }]]);

const SquareArrowOutUpLeft = createLucideIcon("square-arrow-out-up-left", [["path", { "d": "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }], ["path", { "d": "m3 3 9 9" }], ["path", { "d": "M3 9V3h6" }]]);

const SquareArrowRightExit = createLucideIcon("square-arrow-right-exit", [["path", { "d": "M10 12h11" }], ["path", { "d": "m17 16 4-4-4-4" }], ["path", { "d": "M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" }]]);

const SquareArrowRightEnter = createLucideIcon("square-arrow-right-enter", [["path", { "d": "m10 16 4-4-4-4" }], ["path", { "d": "M3 12h11" }], ["path", { "d": "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }]]);

const SquareArrowRight = createLucideIcon("square-arrow-right", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "m12 16 4-4-4-4" }]]);

const SquareArrowUpLeft = createLucideIcon("square-arrow-up-left", [["path", { "d": "M15 15 9 9" }], ["path", { "d": "M9 15V9h6" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareArrowUpRight = createLucideIcon("square-arrow-up-right", [["path", { "d": "M15 15V9H9" }], ["path", { "d": "m9 15 6-6" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareArrowUp = createLucideIcon("square-arrow-up", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m16 12-4-4-4 4" }], ["path", { "d": "M12 16V8" }]]);

const SquareBottomDashedScissors = createLucideIcon("square-bottom-dashed-scissors", [["line", { "x1": "5", "y1": "3", "x2": "19", "y2": "3" }], ["line", { "x1": "3", "y1": "5", "x2": "3", "y2": "19" }], ["line", { "x1": "21", "y1": "5", "x2": "21", "y2": "19" }], ["line", { "x1": "9", "y1": "21", "x2": "10", "y2": "21" }], ["line", { "x1": "14", "y1": "21", "x2": "15", "y2": "21" }], ["path", { "d": "M 3 5 A2 2 0 0 1 5 3" }], ["path", { "d": "M 19 3 A2 2 0 0 1 21 5" }], ["path", { "d": "M 5 21 A2 2 0 0 1 3 19" }], ["path", { "d": "M 21 19 A2 2 0 0 1 19 21" }], ["circle", { "cx": "8.5", "cy": "8.5", "r": "1.5" }], ["line", { "x1": "9.56066", "y1": "9.56066", "x2": "12", "y2": "12" }], ["line", { "x1": "17", "y1": "17", "x2": "14.82", "y2": "14.82" }], ["circle", { "cx": "8.5", "cy": "15.5", "r": "1.5" }], ["line", { "x1": "9.56066", "y1": "14.43934", "x2": "17", "y2": "7" }]]);

const SquareAsterisk = createLucideIcon("square-asterisk", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M12 8v8" }], ["path", { "d": "m8.5 14 7-4" }], ["path", { "d": "m8.5 10 7 4" }]]);

const SquareCenterlineDashedHorizontal = createLucideIcon("square-centerline-dashed-horizontal", [["path", { "d": "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }], ["path", { "d": "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "M12 14v2" }], ["path", { "d": "M12 8v2" }], ["path", { "d": "M12 2v2" }]]);

const SquareCenterlineDashedVertical = createLucideIcon("square-centerline-dashed-vertical", [["path", { "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }], ["path", { "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }], ["path", { "d": "M4 12H2" }], ["path", { "d": "M10 12H8" }], ["path", { "d": "M16 12h-2" }], ["path", { "d": "M22 12h-2" }]]);

const SquareChartGantt = createLucideIcon("square-chart-gantt", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 8h7" }], ["path", { "d": "M8 12h6" }], ["path", { "d": "M11 16h5" }]]);

const SquareCheckBig = createLucideIcon("square-check-big", [["path", { "d": "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" }], ["path", { "d": "m9 11 3 3L22 4" }]]);

const SquareCheck = createLucideIcon("square-check", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const SquareChevronDown = createLucideIcon("square-chevron-down", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m16 10-4 4-4-4" }]]);

const SquareChevronLeft = createLucideIcon("square-chevron-left", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m14 16-4-4 4-4" }]]);

const SquareChevronRight = createLucideIcon("square-chevron-right", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m10 8 4 4-4 4" }]]);

const SquareChevronUp = createLucideIcon("square-chevron-up", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m8 14 4-4 4 4" }]]);

const SquareCode = createLucideIcon("square-code", [["path", { "d": "m10 9-3 3 3 3" }], ["path", { "d": "m14 15 3-3-3-3" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareDashedBottomCode = createLucideIcon("square-dashed-bottom-code", [["path", { "d": "M10 9.5 8 12l2 2.5" }], ["path", { "d": "M14 21h1" }], ["path", { "d": "m14 9.5 2 2.5-2 2.5" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { "d": "M9 21h1" }]]);

const SquareDashedKanban = createLucideIcon("square-dashed-kanban", [["path", { "d": "M8 7v7" }], ["path", { "d": "M12 7v4" }], ["path", { "d": "M16 7v9" }], ["path", { "d": "M5 3a2 2 0 0 0-2 2" }], ["path", { "d": "M9 3h1" }], ["path", { "d": "M14 3h1" }], ["path", { "d": "M19 3a2 2 0 0 1 2 2" }], ["path", { "d": "M21 9v1" }], ["path", { "d": "M21 14v1" }], ["path", { "d": "M21 19a2 2 0 0 1-2 2" }], ["path", { "d": "M14 21h1" }], ["path", { "d": "M9 21h1" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2" }], ["path", { "d": "M3 14v1" }], ["path", { "d": "M3 9v1" }]]);

const SquareDashedMousePointer = createLucideIcon("square-dashed-mouse-pointer", [["path", { "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { "d": "M5 3a2 2 0 0 0-2 2" }], ["path", { "d": "M19 3a2 2 0 0 1 2 2" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2" }], ["path", { "d": "M9 3h1" }], ["path", { "d": "M9 21h2" }], ["path", { "d": "M14 3h1" }], ["path", { "d": "M3 9v1" }], ["path", { "d": "M21 9v2" }], ["path", { "d": "M3 14v1" }]]);

const SquareDashedBottom = createLucideIcon("square-dashed-bottom", [["path", { "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { "d": "M9 21h1" }], ["path", { "d": "M14 21h1" }]]);

const SquareDashedText = createLucideIcon("square-dashed-text", [["path", { "d": "M14 21h1" }], ["path", { "d": "M14 3h1" }], ["path", { "d": "M19 3a2 2 0 0 1 2 2" }], ["path", { "d": "M21 14v1" }], ["path", { "d": "M21 19a2 2 0 0 1-2 2" }], ["path", { "d": "M21 9v1" }], ["path", { "d": "M3 14v1" }], ["path", { "d": "M3 9v1" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2" }], ["path", { "d": "M5 3a2 2 0 0 0-2 2" }], ["path", { "d": "M7 12h10" }], ["path", { "d": "M7 16h6" }], ["path", { "d": "M7 8h8" }], ["path", { "d": "M9 21h1" }], ["path", { "d": "M9 3h1" }]]);

const SquareDashedTopSolid = createLucideIcon("square-dashed-top-solid", [["path", { "d": "M14 21h1" }], ["path", { "d": "M21 14v1" }], ["path", { "d": "M21 19a2 2 0 0 1-2 2" }], ["path", { "d": "M21 9v1" }], ["path", { "d": "M3 14v1" }], ["path", { "d": "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }], ["path", { "d": "M3 9v1" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2" }], ["path", { "d": "M9 21h1" }]]);

const SquareDashed = createLucideIcon("square-dashed", [["path", { "d": "M5 3a2 2 0 0 0-2 2" }], ["path", { "d": "M19 3a2 2 0 0 1 2 2" }], ["path", { "d": "M21 19a2 2 0 0 1-2 2" }], ["path", { "d": "M5 21a2 2 0 0 1-2-2" }], ["path", { "d": "M9 3h1" }], ["path", { "d": "M9 21h1" }], ["path", { "d": "M14 3h1" }], ["path", { "d": "M14 21h1" }], ["path", { "d": "M3 9v1" }], ["path", { "d": "M21 9v1" }], ["path", { "d": "M3 14v1" }], ["path", { "d": "M21 14v1" }]]);

const SquareDivide = createLucideIcon("square-divide", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["line", { "x1": "8", "x2": "16", "y1": "12", "y2": "12" }], ["line", { "x1": "12", "x2": "12", "y1": "16", "y2": "16" }], ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "8" }]]);

const SquareDot = createLucideIcon("square-dot", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }]]);

const SquareEqual = createLucideIcon("square-equal", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 10h10" }], ["path", { "d": "M7 14h10" }]]);

const SquareFunction = createLucideIcon("square-function", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }], ["path", { "d": "M9 11.2h5.7" }]]);

const SquareKanban = createLucideIcon("square-kanban", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M8 7v7" }], ["path", { "d": "M12 7v4" }], ["path", { "d": "M16 7v9" }]]);

const SquareLibrary = createLucideIcon("square-library", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 7v10" }], ["path", { "d": "M11 7v10" }], ["path", { "d": "m15 7 2 10" }]]);

const SquareM = createLucideIcon("square-m", [["path", { "d": "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareMenu = createLucideIcon("square-menu", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 8h10" }], ["path", { "d": "M7 12h10" }], ["path", { "d": "M7 16h10" }]]);

const SquareMinus = createLucideIcon("square-minus", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M8 12h8" }]]);

const SquareMousePointer = createLucideIcon("square-mouse-pointer", [["path", { "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]]);

const SquareParkingOff = createLucideIcon("square-parking-off", [["path", { "d": "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }], ["path", { "d": "M3 8.7V19a2 2 0 0 0 2 2h10.3" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M13 13a3 3 0 1 0 0-6H9v2" }], ["path", { "d": "M9 17v-2.3" }]]);

const SquareParking = createLucideIcon("square-parking", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M9 17V7h4a3 3 0 0 1 0 6H9" }]]);

const SquarePause = createLucideIcon("square-pause", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["line", { "x1": "10", "x2": "10", "y1": "15", "y2": "9" }], ["line", { "x1": "14", "x2": "14", "y1": "15", "y2": "9" }]]);

const SquarePercent = createLucideIcon("square-percent", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "M15 15h.01" }]]);

const SquarePen = createLucideIcon("square-pen", [["path", { "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }]]);

const SquarePi = createLucideIcon("square-pi", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 7h10" }], ["path", { "d": "M10 7v10" }], ["path", { "d": "M16 17a2 2 0 0 1-2-2V7" }]]);

const SquarePlay = createLucideIcon("square-play", [["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }], ["path", { "d": "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }]]);

const SquarePilcrow = createLucideIcon("square-pilcrow", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }], ["path", { "d": "M12 7v10" }], ["path", { "d": "M16 7v10" }]]);

const SquarePlus = createLucideIcon("square-plus", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M8 12h8" }], ["path", { "d": "M12 8v8" }]]);

const SquarePower = createLucideIcon("square-power", [["path", { "d": "M12 7v4" }], ["path", { "d": "M7.998 9.003a5 5 0 1 0 8-.005" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareRadical = createLucideIcon("square-radical", [["path", { "d": "M7 12h2l2 5 2-10h4" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareRoundCorner = createLucideIcon("square-round-corner", [["path", { "d": "M21 11a8 8 0 0 0-8-8" }], ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]]);

const SquareScissors = createLucideIcon("square-scissors", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["circle", { "cx": "8.5", "cy": "8.5", "r": "1.5" }], ["line", { "x1": "9.56066", "y1": "9.56066", "x2": "12", "y2": "12" }], ["line", { "x1": "17", "y1": "17", "x2": "14.82", "y2": "14.82" }], ["circle", { "cx": "8.5", "cy": "15.5", "r": "1.5" }], ["line", { "x1": "9.56066", "y1": "14.43934", "x2": "17", "y2": "7" }]]);

const SquareSigma = createLucideIcon("square-sigma", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M16 8.9V7H8l4 5-4 5h8v-1.9" }]]);

const SquareSlash = createLucideIcon("square-slash", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["line", { "x1": "9", "x2": "15", "y1": "15", "y2": "9" }]]);

const SquareSplitHorizontal = createLucideIcon("square-split-horizontal", [["path", { "d": "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }], ["path", { "d": "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }], ["line", { "x1": "12", "x2": "12", "y1": "4", "y2": "20" }]]);

const SquareSplitVertical = createLucideIcon("square-split-vertical", [["path", { "d": "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }], ["path", { "d": "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }], ["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }]]);

const SquareSquare = createLucideIcon("square-square", [["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }], ["rect", { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }]]);

const SquareStack = createLucideIcon("square-stack", [["path", { "d": "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["path", { "d": "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["rect", { "width": "8", "height": "8", "x": "14", "y": "14", "rx": "2" }]]);

const SquareStar = createLucideIcon("square-star", [["path", { "d": "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const SquareStop = createLucideIcon("square-stop", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["rect", { "x": "9", "y": "9", "width": "6", "height": "6", "rx": "1" }]]);

const SquareTerminal = createLucideIcon("square-terminal", [["path", { "d": "m7 11 2-2-2-2" }], ["path", { "d": "M11 13h4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }]]);

const SquareUserRound = createLucideIcon("square-user-round", [["path", { "d": "M18 21a6 6 0 0 0-12 0" }], ["circle", { "cx": "12", "cy": "11", "r": "4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }]]);

const SquareUser = createLucideIcon("square-user", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]]);

const SquareX = createLucideIcon("square-x", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2", "ry": "2" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "m9 9 6 6" }]]);

const Square = createLucideIcon("square", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }]]);

const SquaresExclude = createLucideIcon("squares-exclude", [["path", { "d": "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" }], ["path", { "d": "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" }]]);

const SquaresIntersect = createLucideIcon("squares-intersect", [["path", { "d": "M10 22a2 2 0 0 1-2-2" }], ["path", { "d": "M14 2a2 2 0 0 1 2 2" }], ["path", { "d": "M16 22h-2" }], ["path", { "d": "M2 10V8" }], ["path", { "d": "M2 4a2 2 0 0 1 2-2" }], ["path", { "d": "M20 8a2 2 0 0 1 2 2" }], ["path", { "d": "M22 14v2" }], ["path", { "d": "M22 20a2 2 0 0 1-2 2" }], ["path", { "d": "M4 16a2 2 0 0 1-2-2" }], ["path", { "d": "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" }], ["path", { "d": "M8 2h2" }]]);

const SquaresSubtract = createLucideIcon("squares-subtract", [["path", { "d": "M10 22a2 2 0 0 1-2-2" }], ["path", { "d": "M16 22h-2" }], ["path", { "d": "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" }], ["path", { "d": "M20 8a2 2 0 0 1 2 2" }], ["path", { "d": "M22 14v2" }], ["path", { "d": "M22 20a2 2 0 0 1-2 2" }]]);

const SquaresUnite = createLucideIcon("squares-unite", [["path", { "d": "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" }]]);

const SquircleDashed = createLucideIcon("squircle-dashed", [["path", { "d": "M13.77 3.043a34 34 0 0 0-3.54 0" }], ["path", { "d": "M13.771 20.956a33 33 0 0 1-3.541.001" }], ["path", { "d": "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" }], ["path", { "d": "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" }], ["path", { "d": "M20.957 10.23a33 33 0 0 1 0 3.54" }], ["path", { "d": "M3.043 10.23a34 34 0 0 0 .001 3.541" }], ["path", { "d": "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" }], ["path", { "d": "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" }]]);

const Squircle = createLucideIcon("squircle", [["path", { "d": "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]]);

const Stamp = createLucideIcon("stamp", [["path", { "d": "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }], ["path", { "d": "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" }], ["path", { "d": "M5 22h14" }]]);

const Squirrel = createLucideIcon("squirrel", [["path", { "d": "M15.236 22a3 3 0 0 0-2.2-5" }], ["path", { "d": "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }], ["path", { "d": "M18 13h.01" }], ["path", { "d": "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" }]]);

const StarCheck = createLucideIcon("star-check", [["path", { "d": "m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" }], ["path", { "d": "m15 18 2 2 4-4" }]]);

const StarHalf = createLucideIcon("star-half", [["path", { "d": "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" }]]);

const StarMinus = createLucideIcon("star-minus", [["path", { "d": "M15 18h6" }], ["path", { "d": "M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" }]]);

const StarOff = createLucideIcon("star-off", [["path", { "d": "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" }], ["path", { "d": "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" }], ["path", { "d": "m2 2 20 20" }]]);

const StarPlus = createLucideIcon("star-plus", [["path", { "d": "M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5" }], ["path", { "d": "M15 18h6" }], ["path", { "d": "M18 15v6" }]]);

const StarX = createLucideIcon("star-x", [["path", { "d": "m15.5 15.5 5 5" }], ["path", { "d": "m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004" }], ["path", { "d": "m20.5 15.5-5 5" }]]);

const Star = createLucideIcon("star", [["path", { "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]]);

const StepBack = createLucideIcon("step-back", [["path", { "d": "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" }], ["path", { "d": "M21 20V4" }]]);

const StepForward = createLucideIcon("step-forward", [["path", { "d": "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }], ["path", { "d": "M3 4v16" }]]);

const Stethoscope = createLucideIcon("stethoscope", [["path", { "d": "M11 2v2" }], ["path", { "d": "M5 2v2" }], ["path", { "d": "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }], ["path", { "d": "M8 15a6 6 0 0 0 12 0v-3" }], ["circle", { "cx": "20", "cy": "10", "r": "2" }]]);

const Sticker = createLucideIcon("sticker", [["path", { "d": "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }], ["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 13h.01" }], ["path", { "d": "M16 13h.01" }], ["path", { "d": "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]]);

const StickyNoteCheck = createLucideIcon("sticky-note-check", [["path", { "d": "m15 19 2 2 4-4" }], ["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5" }]]);

const StickyNoteMinus = createLucideIcon("sticky-note-minus", [["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35" }], ["path", { "d": "M21 18h-6" }]]);

const StickyNoteOff = createLucideIcon("sticky-note-off", [["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" }], ["path", { "d": "M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" }]]);

const StickyNotePlus = createLucideIcon("sticky-note-plus", [["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M18 15v6" }], ["path", { "d": "M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355" }], ["path", { "d": "M21 18h-6" }]]);

const StickyNoteX = createLucideIcon("sticky-note-x", [["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "m16 16 5 5" }], ["path", { "d": "M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }], ["path", { "d": "m21 16-5 5" }]]);

const StickyNote = createLucideIcon("sticky-note", [["path", { "d": "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }], ["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }]]);

const StickyNotes = createLucideIcon("sticky-notes", [["path", { "d": "M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" }], ["path", { "d": "M10 8v5a1 1 0 0 0 1 1h5" }], ["path", { "d": "M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2" }], ["path", { "d": "M16 2v5a1 1 0 0 0 1 1h5" }]]);

const Stone = createLucideIcon("stone", [["path", { "d": "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" }], ["path", { "d": "M11.99 22 14 12l7.822 3.184" }], ["path", { "d": "M14 12 8.47 2.302" }]]);

const Store = createLucideIcon("store", [["path", { "d": "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" }], ["path", { "d": "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" }], ["path", { "d": "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" }]]);

const StretchHorizontal = createLucideIcon("stretch-horizontal", [["rect", { "width": "20", "height": "6", "x": "2", "y": "4", "rx": "2" }], ["rect", { "width": "20", "height": "6", "x": "2", "y": "14", "rx": "2" }]]);

const StretchVertical = createLucideIcon("stretch-vertical", [["rect", { "width": "6", "height": "20", "x": "4", "y": "2", "rx": "2" }], ["rect", { "width": "6", "height": "20", "x": "14", "y": "2", "rx": "2" }]]);

const Strikethrough = createLucideIcon("strikethrough", [["path", { "d": "M16 4H9a3 3 0 0 0-2.83 4" }], ["path", { "d": "M14 12a4 4 0 0 1 0 8H6" }], ["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }]]);

const Subscript = createLucideIcon("subscript", [["path", { "d": "m4 5 8 8" }], ["path", { "d": "m12 5-8 8" }], ["path", { "d": "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" }]]);

const Summary = createLucideIcon("summary", [["path", { "d": "M15 4H7" }], ["path", { "d": "m18 16 3 3-3 3" }], ["path", { "d": "M3 4v13a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 14h7" }], ["path", { "d": "M7 9h12" }]]);

const SunDim = createLucideIcon("sun-dim", [["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M12 4h.01" }], ["path", { "d": "M20 12h.01" }], ["path", { "d": "M12 20h.01" }], ["path", { "d": "M4 12h.01" }], ["path", { "d": "M17.657 6.343h.01" }], ["path", { "d": "M17.657 17.657h.01" }], ["path", { "d": "M6.343 17.657h.01" }], ["path", { "d": "M6.343 6.343h.01" }]]);

const SunMedium = createLucideIcon("sun-medium", [["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M12 3v1" }], ["path", { "d": "M12 20v1" }], ["path", { "d": "M3 12h1" }], ["path", { "d": "M20 12h1" }], ["path", { "d": "m18.364 5.636-.707.707" }], ["path", { "d": "m6.343 17.657-.707.707" }], ["path", { "d": "m5.636 5.636.707.707" }], ["path", { "d": "m17.657 17.657.707.707" }]]);

const SunMoon = createLucideIcon("sun-moon", [["path", { "d": "M12 2v2" }], ["path", { "d": "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" }], ["path", { "d": "M16 12a4 4 0 0 0-4-4" }], ["path", { "d": "m19 5-1.256 1.256" }], ["path", { "d": "M20 12h2" }]]);

const SunSnow = createLucideIcon("sun-snow", [["path", { "d": "M10 21v-1" }], ["path", { "d": "M10 4V3" }], ["path", { "d": "M10 9a3 3 0 0 0 0 6" }], ["path", { "d": "m14 20 1.25-2.5L18 18" }], ["path", { "d": "m14 4 1.25 2.5L18 6" }], ["path", { "d": "m17 21-3-6 1.5-3H22" }], ["path", { "d": "m17 3-3 6 1.5 3" }], ["path", { "d": "M2 12h1" }], ["path", { "d": "m20 10-1.5 2 1.5 2" }], ["path", { "d": "m3.64 18.36.7-.7" }], ["path", { "d": "m4.34 6.34-.7-.7" }]]);

const Sun = createLucideIcon("sun", [["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "m4.93 4.93 1.41 1.41" }], ["path", { "d": "m17.66 17.66 1.41 1.41" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "m6.34 17.66-1.41 1.41" }], ["path", { "d": "m19.07 4.93-1.41 1.41" }]]);

const Sunrise = createLucideIcon("sunrise", [["path", { "d": "M12 2v8" }], ["path", { "d": "m4.93 10.93 1.41 1.41" }], ["path", { "d": "M2 18h2" }], ["path", { "d": "M20 18h2" }], ["path", { "d": "m19.07 10.93-1.41 1.41" }], ["path", { "d": "M22 22H2" }], ["path", { "d": "m8 6 4-4 4 4" }], ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]]);

const Sunset = createLucideIcon("sunset", [["path", { "d": "M12 10V2" }], ["path", { "d": "m4.93 10.93 1.41 1.41" }], ["path", { "d": "M2 18h2" }], ["path", { "d": "M20 18h2" }], ["path", { "d": "m19.07 10.93-1.41 1.41" }], ["path", { "d": "M22 22H2" }], ["path", { "d": "m16 6-4 4-4-4" }], ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]]);

const Superscript = createLucideIcon("superscript", [["path", { "d": "m4 19 8-8" }], ["path", { "d": "m12 19-8-8" }], ["path", { "d": "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" }]]);

const SwatchBook = createLucideIcon("swatch-book", [["path", { "d": "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }], ["path", { "d": "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }], ["path", { "d": "M 7 17h.01" }], ["path", { "d": "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }]]);

const SwissFranc = createLucideIcon("swiss-franc", [["path", { "d": "M10 21V3h8" }], ["path", { "d": "M6 16h9" }], ["path", { "d": "M10 9.5h7" }]]);

const SwitchCamera = createLucideIcon("switch-camera", [["path", { "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }], ["path", { "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }], ["path", { "d": "m18 22-3-3 3-3" }], ["path", { "d": "m6 2 3 3-3 3" }]]);

const Sword = createLucideIcon("sword", [["path", { "d": "m11 19-6-6" }], ["path", { "d": "m5 21-2-2" }], ["path", { "d": "m8 16-4 4" }], ["path", { "d": "M9.5 17.5 21 6V3h-3L6.5 14.5" }]]);

const Swords = createLucideIcon("swords", [["polyline", { "points": "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }], ["line", { "x1": "13", "x2": "19", "y1": "19", "y2": "13" }], ["line", { "x1": "16", "x2": "20", "y1": "16", "y2": "20" }], ["line", { "x1": "19", "x2": "21", "y1": "21", "y2": "19" }], ["polyline", { "points": "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }], ["line", { "x1": "5", "x2": "9", "y1": "14", "y2": "18" }], ["line", { "x1": "7", "x2": "4", "y1": "17", "y2": "20" }], ["line", { "x1": "3", "x2": "5", "y1": "19", "y2": "21" }]]);

const Syringe = createLucideIcon("syringe", [["path", { "d": "m18 2 4 4" }], ["path", { "d": "m17 7 3-3" }], ["path", { "d": "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }], ["path", { "d": "m9 11 4 4" }], ["path", { "d": "m5 19-3 3" }], ["path", { "d": "m14 4 6 6" }]]);

const TableCellsMerge = createLucideIcon("table-cells-merge", [["path", { "d": "M12 21v-6" }], ["path", { "d": "M12 9V3" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "M3 9h18" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }]]);

const Table2 = createLucideIcon("table-2", [["path", { "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }]]);

const TableCellsSplit = createLucideIcon("table-cells-split", [["path", { "d": "M12 15V9" }], ["path", { "d": "M3 15h18" }], ["path", { "d": "M3 9h18" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }]]);

const TableColumnsSplit = createLucideIcon("table-columns-split", [["path", { "d": "M14 14v2" }], ["path", { "d": "M14 20v2" }], ["path", { "d": "M14 2v2" }], ["path", { "d": "M14 8v2" }], ["path", { "d": "M2 15h8" }], ["path", { "d": "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }], ["path", { "d": "M2 9h8" }], ["path", { "d": "M22 15h-4" }], ["path", { "d": "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }], ["path", { "d": "M22 9h-4" }], ["path", { "d": "M5 3v18" }]]);

const TableOfContents = createLucideIcon("table-of-contents", [["path", { "d": "M16 5H3" }], ["path", { "d": "M16 12H3" }], ["path", { "d": "M16 19H3" }], ["path", { "d": "M21 5h.01" }], ["path", { "d": "M21 12h.01" }], ["path", { "d": "M21 19h.01" }]]);

const TableProperties = createLucideIcon("table-properties", [["path", { "d": "M15 3v18" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M21 9H3" }], ["path", { "d": "M21 15H3" }]]);

const TableRowsSplit = createLucideIcon("table-rows-split", [["path", { "d": "M14 10h2" }], ["path", { "d": "M15 22v-8" }], ["path", { "d": "M15 2v4" }], ["path", { "d": "M2 10h2" }], ["path", { "d": "M20 10h2" }], ["path", { "d": "M3 19h18" }], ["path", { "d": "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }], ["path", { "d": "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }], ["path", { "d": "M8 10h2" }], ["path", { "d": "M9 22v-8" }], ["path", { "d": "M9 2v4" }]]);

const Table = createLucideIcon("table", [["path", { "d": "M12 3v18" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M3 9h18" }], ["path", { "d": "M3 15h18" }]]);

const TabletSmartphone = createLucideIcon("tablet-smartphone", [["rect", { "width": "10", "height": "14", "x": "3", "y": "8", "rx": "2" }], ["path", { "d": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }], ["path", { "d": "M8 18h.01" }]]);

const Tablets = createLucideIcon("tablets", [["circle", { "cx": "7", "cy": "7", "r": "5" }], ["circle", { "cx": "17", "cy": "17", "r": "5" }], ["path", { "d": "M12 17h10" }], ["path", { "d": "m3.46 10.54 7.08-7.08" }]]);

const Tablet = createLucideIcon("tablet", [["rect", { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2", "ry": "2" }], ["line", { "x1": "12", "x2": "12.01", "y1": "18", "y2": "18" }]]);

const TagPlus = createLucideIcon("tag-plus", [["path", { "d": "M16 13h6" }], ["path", { "d": "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" }], ["path", { "d": "M19 10v6" }], ["circle", { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]]);

const TagX = createLucideIcon("tag-x", [["path", { "d": "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79" }], ["path", { "d": "m16.5 10.5 5 5" }], ["path", { "d": "m21.5 10.5-5 5" }], ["circle", { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]]);

const Tag = createLucideIcon("tag", [["path", { "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }]]);

const Tags = createLucideIcon("tags", [["path", { "d": "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" }], ["path", { "d": "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }], ["circle", { "cx": "10.5", "cy": "6.5", "r": ".5", "fill": "currentColor" }]]);

const Tally1 = createLucideIcon("tally-1", [["path", { "d": "M4 4v16" }]]);

const Tally2 = createLucideIcon("tally-2", [["path", { "d": "M4 4v16" }], ["path", { "d": "M9 4v16" }]]);

const Tally3 = createLucideIcon("tally-3", [["path", { "d": "M4 4v16" }], ["path", { "d": "M9 4v16" }], ["path", { "d": "M14 4v16" }]]);

const Tally4 = createLucideIcon("tally-4", [["path", { "d": "M4 4v16" }], ["path", { "d": "M9 4v16" }], ["path", { "d": "M14 4v16" }], ["path", { "d": "M19 4v16" }]]);

const Tally5 = createLucideIcon("tally-5", [["path", { "d": "M4 4v16" }], ["path", { "d": "M9 4v16" }], ["path", { "d": "M14 4v16" }], ["path", { "d": "M19 4v16" }], ["path", { "d": "M22 6 2 18" }]]);

const Target = createLucideIcon("target", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["circle", { "cx": "12", "cy": "12", "r": "6" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const Tangent = createLucideIcon("tangent", [["circle", { "cx": "17", "cy": "4", "r": "2" }], ["path", { "d": "M15.59 5.41 5.41 15.59" }], ["circle", { "cx": "4", "cy": "17", "r": "2" }], ["path", { "d": "M12 22s-4-9-1.5-11.5S22 12 22 12" }]]);

const Telescope = createLucideIcon("telescope", [["path", { "d": "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" }], ["path", { "d": "m13.56 11.747 4.332-.924" }], ["path", { "d": "m16 21-3.105-6.21" }], ["path", { "d": "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" }], ["path", { "d": "m6.158 8.633 1.114 4.456" }], ["path", { "d": "m8 21 3.105-6.21" }], ["circle", { "cx": "12", "cy": "13", "r": "2" }]]);

const TentTree = createLucideIcon("tent-tree", [["circle", { "cx": "4", "cy": "4", "r": "2" }], ["path", { "d": "m14 5 3-3 3 3" }], ["path", { "d": "m14 10 3-3 3 3" }], ["path", { "d": "M17 14V2" }], ["path", { "d": "M17 14H7l-5 8h20Z" }], ["path", { "d": "M8 14v8" }], ["path", { "d": "m9 14 5 8" }]]);

const Tent = createLucideIcon("tent", [["path", { "d": "M3.5 21 14 3" }], ["path", { "d": "M20.5 21 10 3" }], ["path", { "d": "M15.5 21 12 15l-3.5 6" }], ["path", { "d": "M2 21h20" }]]);

const Terminal = createLucideIcon("terminal", [["path", { "d": "M12 19h8" }], ["path", { "d": "m4 17 6-6-6-6" }]]);

const TestTubeDiagonal = createLucideIcon("test-tube-diagonal", [["path", { "d": "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }], ["path", { "d": "m16 2 6 6" }], ["path", { "d": "M12 16H4" }]]);

const TestTube = createLucideIcon("test-tube", [["path", { "d": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }], ["path", { "d": "M8.5 2h7" }], ["path", { "d": "M14.5 16h-5" }]]);

const TestTubes = createLucideIcon("test-tubes", [["path", { "d": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }], ["path", { "d": "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }], ["path", { "d": "M3 2h7" }], ["path", { "d": "M14 2h7" }], ["path", { "d": "M9 16H4" }], ["path", { "d": "M20 16h-5" }]]);

const TextAlignCenter = createLucideIcon("text-align-center", [["path", { "d": "M21 5H3" }], ["path", { "d": "M17 12H7" }], ["path", { "d": "M19 19H5" }]]);

const TextAlignEnd = createLucideIcon("text-align-end", [["path", { "d": "M21 5H3" }], ["path", { "d": "M21 12H9" }], ["path", { "d": "M21 19H7" }]]);

const TextAlignJustify = createLucideIcon("text-align-justify", [["path", { "d": "M3 5h18" }], ["path", { "d": "M3 12h18" }], ["path", { "d": "M3 19h18" }]]);

const TextAlignStart = createLucideIcon("text-align-start", [["path", { "d": "M21 5H3" }], ["path", { "d": "M15 12H3" }], ["path", { "d": "M17 19H3" }]]);

const TextCursorInput = createLucideIcon("text-cursor-input", [["path", { "d": "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }], ["path", { "d": "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }], ["path", { "d": "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }], ["path", { "d": "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }], ["path", { "d": "M9 6v12" }]]);

const TextCursor = createLucideIcon("text-cursor", [["path", { "d": "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }], ["path", { "d": "M7 22h1a4 4 0 0 0 4-4" }], ["path", { "d": "M7 2h1a4 4 0 0 1 4 4" }]]);

const TextQuote = createLucideIcon("text-quote", [["path", { "d": "M17 5H3" }], ["path", { "d": "M21 12H8" }], ["path", { "d": "M21 19H8" }], ["path", { "d": "M3 12v7" }]]);

const TextInitial = createLucideIcon("text-initial", [["path", { "d": "M15 5h6" }], ["path", { "d": "M15 12h6" }], ["path", { "d": "M3 19h18" }], ["path", { "d": "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }], ["path", { "d": "M3.92 10h6.16" }]]);

const TextSearch = createLucideIcon("text-search", [["path", { "d": "M21 5H3" }], ["path", { "d": "M10 12H3" }], ["path", { "d": "M10 19H3" }], ["circle", { "cx": "17", "cy": "15", "r": "3" }], ["path", { "d": "m21 19-1.9-1.9" }]]);

const Theater = createLucideIcon("theater", [["path", { "d": "M2 10s3-3 3-8" }], ["path", { "d": "M22 10s-3-3-3-8" }], ["path", { "d": "M10 2c0 4.4-3.6 8-8 8" }], ["path", { "d": "M14 2c0 4.4 3.6 8 8 8" }], ["path", { "d": "M2 10s2 2 2 5" }], ["path", { "d": "M22 10s-2 2-2 5" }], ["path", { "d": "M8 15h8" }], ["path", { "d": "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }], ["path", { "d": "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]]);

const TextWrap = createLucideIcon("text-wrap", [["path", { "d": "m16 16-3 3 3 3" }], ["path", { "d": "M3 12h14.5a1 1 0 0 1 0 7H13" }], ["path", { "d": "M3 19h6" }], ["path", { "d": "M3 5h18" }]]);

const ThermometerSnowflake = createLucideIcon("thermometer-snowflake", [["path", { "d": "m10 20-1.25-2.5L6 18" }], ["path", { "d": "M10 4 8.75 6.5 6 6" }], ["path", { "d": "M10.585 15H10" }], ["path", { "d": "M2 12h6.5L10 9" }], ["path", { "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }], ["path", { "d": "m4 10 1.5 2L4 14" }], ["path", { "d": "m7 21 3-6-1.5-3" }], ["path", { "d": "m7 3 3 6h2" }]]);

const ThermometerSun = createLucideIcon("thermometer-sun", [["path", { "d": "M12 2v2" }], ["path", { "d": "M12 8a4 4 0 0 0-1.645 7.647" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }], ["path", { "d": "m4.93 4.93 1.41 1.41" }], ["path", { "d": "m6.34 17.66-1.41 1.41" }]]);

const Thermometer = createLucideIcon("thermometer", [["path", { "d": "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]);

const ThumbsDown = createLucideIcon("thumbs-down", [["path", { "d": "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" }], ["path", { "d": "M17 14V2" }]]);

const ThumbsUp = createLucideIcon("thumbs-up", [["path", { "d": "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" }], ["path", { "d": "M7 10v12" }]]);

const TicketCheck = createLucideIcon("ticket-check", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "m9 12 2 2 4-4" }]]);

const TicketMinus = createLucideIcon("ticket-minus", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "M9 12h6" }]]);

const TicketPercent = createLucideIcon("ticket-percent", [["path", { "d": "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "m15 9-6 6" }], ["path", { "d": "M15 15h.01" }]]);

const TicketPlus = createLucideIcon("ticket-plus", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "M9 12h6" }], ["path", { "d": "M12 9v6" }]]);

const TicketSlash = createLucideIcon("ticket-slash", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "m9.5 14.5 5-5" }]]);

const TicketX = createLucideIcon("ticket-x", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "m9.5 14.5 5-5" }], ["path", { "d": "m9.5 9.5 5 5" }]]);

const Ticket = createLucideIcon("ticket", [["path", { "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { "d": "M13 5v2" }], ["path", { "d": "M13 17v2" }], ["path", { "d": "M13 11v2" }]]);

const TicketsPlane = createLucideIcon("tickets-plane", [["path", { "d": "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }], ["path", { "d": "m12 13.5 3.794.506" }], ["path", { "d": "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }], ["path", { "d": "M6 10V8" }], ["path", { "d": "M6 14v1" }], ["path", { "d": "M6 19v2" }], ["rect", { "x": "2", "y": "8", "width": "20", "height": "13", "rx": "2" }]]);

const Tickets = createLucideIcon("tickets", [["path", { "d": "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }], ["path", { "d": "M6 10V8" }], ["path", { "d": "M6 14v1" }], ["path", { "d": "M6 19v2" }], ["rect", { "x": "2", "y": "8", "width": "20", "height": "13", "rx": "2" }]]);

const Timeline = createLucideIcon("timeline", [["path", { "d": "M4 12h.01" }], ["path", { "d": "M4 16h.01" }], ["path", { "d": "M4 20h.01" }], ["path", { "d": "M4 4h.01" }], ["path", { "d": "M4 8h.01" }], ["path", { "d": "M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z" }], ["path", { "d": "M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z" }], ["path", { "d": "M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z" }]]);

const TimerOff = createLucideIcon("timer-off", [["path", { "d": "M10 2h4" }], ["path", { "d": "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }], ["path", { "d": "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M12 12v-2" }]]);

const TimerReset = createLucideIcon("timer-reset", [["path", { "d": "M10 2h4" }], ["path", { "d": "M12 14v-4" }], ["path", { "d": "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }], ["path", { "d": "M9 17H4v5" }]]);

const Timer = createLucideIcon("timer", [["line", { "x1": "10", "x2": "14", "y1": "2", "y2": "2" }], ["line", { "x1": "12", "x2": "15", "y1": "14", "y2": "11" }], ["circle", { "cx": "12", "cy": "14", "r": "8" }]]);

const ToggleLeft = createLucideIcon("toggle-left", [["circle", { "cx": "9", "cy": "12", "r": "3" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "7" }]]);

const Toilet = createLucideIcon("toilet", [["path", { "d": "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" }], ["path", { "d": "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" }]]);

const ToggleRight = createLucideIcon("toggle-right", [["circle", { "cx": "15", "cy": "12", "r": "3" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "7" }]]);

const ToolCase = createLucideIcon("tool-case", [["path", { "d": "M10 15h4" }], ["path", { "d": "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" }], ["path", { "d": "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" }], ["path", { "d": "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }]]);

const Toolbox = createLucideIcon("toolbox", [["path", { "d": "M16 12v4" }], ["path", { "d": "M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" }], ["path", { "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { "d": "M2 14h20" }], ["path", { "d": "M8 12v4" }]]);

const Tornado = createLucideIcon("tornado", [["path", { "d": "M21 4H3" }], ["path", { "d": "M18 8H6" }], ["path", { "d": "M19 12H9" }], ["path", { "d": "M16 16h-6" }], ["path", { "d": "M11 20H9" }]]);

const Torus = createLucideIcon("torus", [["ellipse", { "cx": "12", "cy": "11", "rx": "3", "ry": "2" }], ["ellipse", { "cx": "12", "cy": "12.5", "rx": "10", "ry": "8.5" }]]);

const TouchpadOff = createLucideIcon("touchpad-off", [["path", { "d": "M12 20v-6" }], ["path", { "d": "M19.656 14H22" }], ["path", { "d": "M2 14h12" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }], ["path", { "d": "M9.656 4H20a2 2 0 0 1 2 2v10.344" }]]);

const Touchpad = createLucideIcon("touchpad", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M2 14h20" }], ["path", { "d": "M12 20v-6" }]]);

const TowelRack = createLucideIcon("towel-rack", [["path", { "d": "M22 7h-2" }], ["path", { "d": "M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" }], ["path", { "d": "M9 7H2" }]]);

const TowerControl = createLucideIcon("tower-control", [["path", { "d": "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }], ["path", { "d": "M8 13v9" }], ["path", { "d": "M16 22v-9" }], ["path", { "d": "m9 6 1 7" }], ["path", { "d": "m15 6-1 7" }], ["path", { "d": "M12 6V2" }], ["path", { "d": "M13 2h-2" }]]);

const ToyBrick = createLucideIcon("toy-brick", [["rect", { "width": "18", "height": "12", "x": "3", "y": "8", "rx": "1" }], ["path", { "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }], ["path", { "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]]);

const Tractor = createLucideIcon("tractor", [["path", { "d": "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }], ["path", { "d": "M16 18h-5" }], ["path", { "d": "M18 5a1 1 0 0 0-1 1v5.573" }], ["path", { "d": "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }], ["path", { "d": "M4 11V4" }], ["path", { "d": "M7 15h.01" }], ["path", { "d": "M8 10.1V4" }], ["circle", { "cx": "18", "cy": "18", "r": "2" }], ["circle", { "cx": "7", "cy": "15", "r": "5" }]]);

const TrafficCone = createLucideIcon("traffic-cone", [["path", { "d": "M16.05 10.966a5 2.5 0 0 1-8.1 0" }], ["path", { "d": "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" }], ["path", { "d": "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }], ["path", { "d": "M9.194 6.57a5 2.5 0 0 0 5.61 0" }]]);

const TrainFront = createLucideIcon("train-front", [["path", { "d": "M8 3.1V7a4 4 0 0 0 8 0V3.1" }], ["path", { "d": "m9 15-1-1" }], ["path", { "d": "m15 15 1-1" }], ["path", { "d": "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }], ["path", { "d": "m8 19-2 3" }], ["path", { "d": "m16 19 2 3" }]]);

const TrainFrontTunnel = createLucideIcon("train-front-tunnel", [["path", { "d": "M2 22V12a10 10 0 1 1 20 0v10" }], ["path", { "d": "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }], ["path", { "d": "M10 15h.01" }], ["path", { "d": "M14 15h.01" }], ["path", { "d": "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }], ["path", { "d": "m9 19-2 3" }], ["path", { "d": "m15 19 2 3" }]]);

const TrainTrack = createLucideIcon("train-track", [["path", { "d": "M2 17 17 2" }], ["path", { "d": "m2 14 8 8" }], ["path", { "d": "m5 11 8 8" }], ["path", { "d": "m8 8 8 8" }], ["path", { "d": "m11 5 8 8" }], ["path", { "d": "m14 2 8 8" }], ["path", { "d": "M7 22 22 7" }]]);

const TramFront = createLucideIcon("tram-front", [["rect", { "width": "16", "height": "16", "x": "4", "y": "3", "rx": "2" }], ["path", { "d": "M4 11h16" }], ["path", { "d": "M12 3v8" }], ["path", { "d": "m8 19-2 3" }], ["path", { "d": "m18 22-2-3" }], ["path", { "d": "M8 15h.01" }], ["path", { "d": "M16 15h.01" }]]);

const Transgender = createLucideIcon("transgender", [["path", { "d": "M12 16v6" }], ["path", { "d": "M14 20h-4" }], ["path", { "d": "M18 2h4v4" }], ["path", { "d": "m2 2 7.17 7.17" }], ["path", { "d": "M2 5.355V2h3.357" }], ["path", { "d": "m22 2-7.17 7.17" }], ["path", { "d": "M8 5 5 8" }], ["circle", { "cx": "12", "cy": "12", "r": "4" }]]);

const Trash2 = createLucideIcon("trash-2", [["path", { "d": "M10 11v6" }], ["path", { "d": "M14 11v6" }], ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }], ["path", { "d": "M3 6h18" }], ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]]);

const Trash = createLucideIcon("trash", [["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }], ["path", { "d": "M3 6h18" }], ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]]);

const TreeDeciduous = createLucideIcon("tree-deciduous", [["path", { "d": "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" }], ["path", { "d": "M12 19v3" }]]);

const TreePalm = createLucideIcon("tree-palm", [["path", { "d": "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }], ["path", { "d": "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }], ["path", { "d": "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" }], ["path", { "d": "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]]);

const TreePine = createLucideIcon("tree-pine", [["path", { "d": "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" }], ["path", { "d": "M12 22v-3" }]]);

const Trees = createLucideIcon("trees", [["path", { "d": "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }], ["path", { "d": "M7 16v6" }], ["path", { "d": "M13 19v3" }], ["path", { "d": "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" }]]);

const TrendingDown = createLucideIcon("trending-down", [["path", { "d": "M16 17h6v-6" }], ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]]);

const TrendingUpDown = createLucideIcon("trending-up-down", [["path", { "d": "M14.828 14.828 21 21" }], ["path", { "d": "M21 16v5h-5" }], ["path", { "d": "m21 3-9 9-4-4-6 6" }], ["path", { "d": "M21 8V3h-5" }]]);

const TrendingUp = createLucideIcon("trending-up", [["path", { "d": "M16 7h6v6" }], ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]]);

const TriangleAlert = createLucideIcon("triangle-alert", [["path", { "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { "d": "M12 9v4" }], ["path", { "d": "M12 17h.01" }]]);

const TriangleDashed = createLucideIcon("triangle-dashed", [["path", { "d": "M10.17 4.193a2 2 0 0 1 3.666.013" }], ["path", { "d": "M14 21h2" }], ["path", { "d": "m15.874 7.743 1 1.732" }], ["path", { "d": "m18.849 12.952 1 1.732" }], ["path", { "d": "M21.824 18.18a2 2 0 0 1-1.835 2.824" }], ["path", { "d": "M4.024 21a2 2 0 0 1-1.839-2.839" }], ["path", { "d": "m5.136 12.952-1 1.732" }], ["path", { "d": "M8 21h2" }], ["path", { "d": "m8.102 7.743-1 1.732" }]]);

const TriangleRight = createLucideIcon("triangle-right", [["path", { "d": "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]]);

const Triangle = createLucideIcon("triangle", [["path", { "d": "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]]);

const Trophy = createLucideIcon("trophy", [["path", { "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" }], ["path", { "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" }], ["path", { "d": "M18 9h1.5a1 1 0 0 0 0-5H18" }], ["path", { "d": "M4 22h16" }], ["path", { "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }], ["path", { "d": "M6 9H4.5a1 1 0 0 1 0-5H6" }]]);

const TruckElectric = createLucideIcon("truck-electric", [["path", { "d": "M14 19V7a2 2 0 0 0-2-2H9" }], ["path", { "d": "M15 19H9" }], ["path", { "d": "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" }], ["path", { "d": "M2 13v5a1 1 0 0 0 1 1h2" }], ["path", { "d": "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" }], ["circle", { "cx": "17", "cy": "19", "r": "2" }], ["circle", { "cx": "7", "cy": "19", "r": "2" }]]);

const Truck = createLucideIcon("truck", [["path", { "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { "d": "M15 18H9" }], ["path", { "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }], ["circle", { "cx": "17", "cy": "18", "r": "2" }], ["circle", { "cx": "7", "cy": "18", "r": "2" }]]);

const TurkishLira = createLucideIcon("turkish-lira", [["path", { "d": "M15 4 5 9" }], ["path", { "d": "m15 8.5-10 5" }], ["path", { "d": "M18 12a9 9 0 0 1-9 9V3" }]]);

const Turntable = createLucideIcon("turntable", [["path", { "d": "M10 12.01h.01" }], ["path", { "d": "M18 8v4a8 8 0 0 1-1.07 4" }], ["circle", { "cx": "10", "cy": "12", "r": "4" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const Turtle = createLucideIcon("turtle", [["path", { "d": "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" }], ["path", { "d": "M4.82 7.9 8 10" }], ["path", { "d": "M15.18 7.9 12 10" }], ["path", { "d": "M16.93 10H20a2 2 0 0 1 0 4H2" }]]);

const TvMinimalPlay = createLucideIcon("tv-minimal-play", [["path", { "d": "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }], ["path", { "d": "M7 21h10" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }]]);

const TvMinimal = createLucideIcon("tv-minimal", [["path", { "d": "M7 21h10" }], ["rect", { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }]]);

const Tv = createLucideIcon("tv", [["path", { "d": "m17 2-5 5-5-5" }], ["rect", { "width": "20", "height": "15", "x": "2", "y": "7", "rx": "2" }]]);

const TypeOutline = createLucideIcon("type-outline", [["path", { "d": "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" }]]);

const Type = createLucideIcon("type", [["path", { "d": "M12 4v16" }], ["path", { "d": "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }], ["path", { "d": "M9 20h6" }]]);

const Umbrella = createLucideIcon("umbrella", [["path", { "d": "M12 13v7a2 2 0 0 0 4 0" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }]]);

const UmbrellaOff = createLucideIcon("umbrella-off", [["path", { "d": "M12 13v7a2 2 0 0 0 4 0" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" }]]);

const Underline = createLucideIcon("underline", [["path", { "d": "M6 4v6a6 6 0 0 0 12 0V4" }], ["line", { "x1": "4", "x2": "20", "y1": "20", "y2": "20" }]]);

const Undo2 = createLucideIcon("undo-2", [["path", { "d": "M9 14 4 9l5-5" }], ["path", { "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]]);

const UndoDot = createLucideIcon("undo-dot", [["path", { "d": "M21 17a9 9 0 0 0-15-6.7L3 13" }], ["path", { "d": "M3 7v6h6" }], ["circle", { "cx": "12", "cy": "17", "r": "1" }]]);

const Undo = createLucideIcon("undo", [["path", { "d": "M3 7v6h6" }], ["path", { "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]]);

const UnfoldHorizontal = createLucideIcon("unfold-horizontal", [["path", { "d": "M16 12h6" }], ["path", { "d": "M8 12H2" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M12 8v2" }], ["path", { "d": "M12 14v2" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "m19 15 3-3-3-3" }], ["path", { "d": "m5 9-3 3 3 3" }]]);

const UnfoldVertical = createLucideIcon("unfold-vertical", [["path", { "d": "M12 22v-6" }], ["path", { "d": "M12 8V2" }], ["path", { "d": "M4 12H2" }], ["path", { "d": "M10 12H8" }], ["path", { "d": "M16 12h-2" }], ["path", { "d": "M22 12h-2" }], ["path", { "d": "m15 19-3 3-3-3" }], ["path", { "d": "m15 5-3-3-3 3" }]]);

const Ungroup = createLucideIcon("ungroup", [["rect", { "width": "8", "height": "6", "x": "5", "y": "4", "rx": "1" }], ["rect", { "width": "8", "height": "6", "x": "11", "y": "14", "rx": "1" }]]);

const University = createLucideIcon("university", [["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }], ["path", { "d": "M18 12h.01" }], ["path", { "d": "M18 16h.01" }], ["path", { "d": "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" }], ["path", { "d": "M6 12h.01" }], ["path", { "d": "M6 16h.01" }], ["circle", { "cx": "12", "cy": "10", "r": "2" }]]);

const Unlink2 = createLucideIcon("unlink-2", [["path", { "d": "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]);

const Unlink = createLucideIcon("unlink", [["path", { "d": "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }], ["path", { "d": "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }], ["line", { "x1": "8", "x2": "8", "y1": "2", "y2": "5" }], ["line", { "x1": "2", "x2": "5", "y1": "8", "y2": "8" }], ["line", { "x1": "16", "x2": "16", "y1": "19", "y2": "22" }], ["line", { "x1": "19", "x2": "22", "y1": "16", "y2": "16" }]]);

const Unplug = createLucideIcon("unplug", [["path", { "d": "m19 5 3-3" }], ["path", { "d": "m2 22 3-3" }], ["path", { "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { "d": "M7.5 13.5 10 11" }], ["path", { "d": "M10.5 16.5 13 14" }], ["path", { "d": "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]]);

const Usb = createLucideIcon("usb", [["circle", { "cx": "10", "cy": "7", "r": "1" }], ["circle", { "cx": "4", "cy": "20", "r": "1" }], ["path", { "d": "M4.7 19.3 19 5" }], ["path", { "d": "m21 3-3 1 2 2Z" }], ["path", { "d": "M9.26 7.68 5 12l2 5" }], ["path", { "d": "m10 14 5 2 3.5-3.5" }], ["path", { "d": "m18 12 1-1 1 1-1 1Z" }]]);

const Upload = createLucideIcon("upload", [["path", { "d": "M12 3v12" }], ["path", { "d": "m17 8-5-5-5 5" }], ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]]);

const UserCheck = createLucideIcon("user-check", [["path", { "d": "m16 11 2 2 4-4" }], ["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const UserCog = createLucideIcon("user-cog", [["path", { "d": "M10 15H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "m14.305 16.53.923-.382" }], ["path", { "d": "m15.228 13.852-.923-.383" }], ["path", { "d": "m16.852 12.228-.383-.923" }], ["path", { "d": "m16.852 17.772-.383.924" }], ["path", { "d": "m19.148 12.228.383-.923" }], ["path", { "d": "m19.53 18.696-.382-.924" }], ["path", { "d": "m20.772 13.852.924-.383" }], ["path", { "d": "m20.772 16.148.924.383" }], ["circle", { "cx": "18", "cy": "15", "r": "3" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const UserKey = createLucideIcon("user-key", [["path", { "d": "M20 11v6" }], ["path", { "d": "M20 13h2" }], ["path", { "d": "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" }], ["circle", { "cx": "10", "cy": "7", "r": "4" }], ["circle", { "cx": "20", "cy": "19", "r": "2" }]]);

const UserLock = createLucideIcon("user-lock", [["path", { "d": "M19 16v-2a2 2 0 0 0-4 0v2" }], ["path", { "d": "M9.5 15H7a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "10", "cy": "7", "r": "4" }], ["rect", { "x": "13", "y": "16", "width": "8", "height": "5", "rx": ".899" }]]);

const UserPen = createLucideIcon("user-pen", [["path", { "d": "M11.5 15H7a4 4 0 0 0-4 4v2" }], ["path", { "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { "cx": "10", "cy": "7", "r": "4" }]]);

const UserMinus = createLucideIcon("user-minus", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }], ["line", { "x1": "22", "x2": "16", "y1": "11", "y2": "11" }]]);

const UserPlus = createLucideIcon("user-plus", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }], ["line", { "x1": "19", "x2": "19", "y1": "8", "y2": "14" }], ["line", { "x1": "22", "x2": "16", "y1": "11", "y2": "11" }]]);

const UserRoundArrowLeft = createLucideIcon("user-round-arrow-left", [["path", { "d": "m19 16-3 3" }], ["path", { "d": "M2 21a8 8 0 0 1 12.664-6.5" }], ["path", { "d": "M22 19h-6l3 3" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }]]);

const UserRoundCheck = createLucideIcon("user-round-check", [["path", { "d": "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "m16 19 2 2 4-4" }]]);

const UserRoundCog = createLucideIcon("user-round-cog", [["path", { "d": "m14.305 19.53.923-.382" }], ["path", { "d": "m15.228 16.852-.923-.383" }], ["path", { "d": "m16.852 15.228-.383-.923" }], ["path", { "d": "m16.852 20.772-.383.924" }], ["path", { "d": "m19.148 15.228.383-.923" }], ["path", { "d": "m19.53 21.696-.382-.924" }], ["path", { "d": "M2 21a8 8 0 0 1 10.434-7.62" }], ["path", { "d": "m20.772 16.852.924-.383" }], ["path", { "d": "m20.772 19.148.924.383" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const UserRoundKey = createLucideIcon("user-round-key", [["path", { "d": "M19 11v6" }], ["path", { "d": "M19 13h2" }], ["path", { "d": "M2 21a8 8 0 0 1 12.868-6.349" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["circle", { "cx": "19", "cy": "19", "r": "2" }]]);

const UserRoundMinus = createLucideIcon("user-round-minus", [["path", { "d": "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "M22 19h-6" }]]);

const UserRoundPen = createLucideIcon("user-round-pen", [["path", { "d": "M2 21a8 8 0 0 1 10.821-7.487" }], ["path", { "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }]]);

const UserRoundPlus = createLucideIcon("user-round-plus", [["path", { "d": "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "M19 16v6" }], ["path", { "d": "M22 19h-6" }]]);

const UserRoundSearch = createLucideIcon("user-round-search", [["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "M2 21a8 8 0 0 1 10.434-7.62" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }], ["path", { "d": "m22 22-1.9-1.9" }]]);

const UserRoundX = createLucideIcon("user-round-x", [["path", { "d": "M2 21a8 8 0 0 1 11.873-7" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "m17 17 5 5" }], ["path", { "d": "m22 17-5 5" }]]);

const UserRound = createLucideIcon("user-round", [["circle", { "cx": "12", "cy": "8", "r": "5" }], ["path", { "d": "M20 21a8 8 0 0 0-16 0" }]]);

const UserSearch = createLucideIcon("user-search", [["circle", { "cx": "10", "cy": "7", "r": "4" }], ["path", { "d": "M10.3 15H7a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "17", "cy": "17", "r": "3" }], ["path", { "d": "m21 21-1.9-1.9" }]]);

const UserStar = createLucideIcon("user-star", [["path", { "d": "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }], ["path", { "d": "M8 15H7a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "10", "cy": "7", "r": "4" }]]);

const UserX = createLucideIcon("user-x", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }], ["line", { "x1": "17", "x2": "22", "y1": "8", "y2": "13" }], ["line", { "x1": "22", "x2": "17", "y1": "8", "y2": "13" }]]);

const User = createLucideIcon("user", [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "12", "cy": "7", "r": "4" }]]);

const UsersRound = createLucideIcon("users-round", [["path", { "d": "M18 21a8 8 0 0 0-16 0" }], ["circle", { "cx": "10", "cy": "8", "r": "5" }], ["path", { "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]]);

const Users = createLucideIcon("users", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const UtensilsCrossed = createLucideIcon("utensils-crossed", [["path", { "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }], ["path", { "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }], ["path", { "d": "m2.1 21.8 6.4-6.3" }], ["path", { "d": "m19 5-7 7" }]]);

const Utensils = createLucideIcon("utensils", [["path", { "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }], ["path", { "d": "M7 2v20" }], ["path", { "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]]);

const UtilityPole = createLucideIcon("utility-pole", [["path", { "d": "M12 2v20" }], ["path", { "d": "M2 5h20" }], ["path", { "d": "M3 3v2" }], ["path", { "d": "M7 3v2" }], ["path", { "d": "M17 3v2" }], ["path", { "d": "M21 3v2" }], ["path", { "d": "m19 5-7 7-7-7" }]]);

const Van = createLucideIcon("van", [["path", { "d": "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" }], ["path", { "d": "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" }], ["path", { "d": "M9 18h5" }], ["circle", { "cx": "16", "cy": "18", "r": "2" }], ["circle", { "cx": "7", "cy": "18", "r": "2" }]]);

const Vault = createLucideIcon("vault", [["rect", { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }], ["circle", { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }], ["path", { "d": "m7.9 7.9 2.7 2.7" }], ["circle", { "cx": "16.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }], ["path", { "d": "m13.4 10.6 2.7-2.7" }], ["circle", { "cx": "7.5", "cy": "16.5", "r": ".5", "fill": "currentColor" }], ["path", { "d": "m7.9 16.1 2.7-2.7" }], ["circle", { "cx": "16.5", "cy": "16.5", "r": ".5", "fill": "currentColor" }], ["path", { "d": "m13.4 13.4 2.7 2.7" }], ["circle", { "cx": "12", "cy": "12", "r": "2" }]]);

const Variable = createLucideIcon("variable", [["path", { "d": "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { "d": "M16 3s4 3 4 9-4 9-4 9" }], ["line", { "x1": "15", "x2": "9", "y1": "9", "y2": "15" }], ["line", { "x1": "9", "x2": "15", "y1": "9", "y2": "15" }]]);

const VectorSquare = createLucideIcon("vector-square", [["path", { "d": "M19.5 7a24 24 0 0 1 0 10" }], ["path", { "d": "M4.5 7a24 24 0 0 0 0 10" }], ["path", { "d": "M7 19.5a24 24 0 0 0 10 0" }], ["path", { "d": "M7 4.5a24 24 0 0 1 10 0" }], ["rect", { "x": "17", "y": "17", "width": "5", "height": "5", "rx": "1" }], ["rect", { "x": "17", "y": "2", "width": "5", "height": "5", "rx": "1" }], ["rect", { "x": "2", "y": "17", "width": "5", "height": "5", "rx": "1" }], ["rect", { "x": "2", "y": "2", "width": "5", "height": "5", "rx": "1" }]]);

const Vegan = createLucideIcon("vegan", [["path", { "d": "M16 8q6 0 6-6-6 0-6 6" }], ["path", { "d": "M17.41 3.59a10 10 0 1 0 3 3" }], ["path", { "d": "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }]]);

const VenetianMask = createLucideIcon("venetian-mask", [["path", { "d": "M18 11c-1.5 0-2.5.5-3 2" }], ["path", { "d": "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" }], ["path", { "d": "M6 11c1.5 0 2.5.5 3 2" }]]);

const VenusAndMars = createLucideIcon("venus-and-mars", [["path", { "d": "M10 20h4" }], ["path", { "d": "M12 16v6" }], ["path", { "d": "M17 2h4v4" }], ["path", { "d": "m21 2-5.46 5.46" }], ["circle", { "cx": "12", "cy": "11", "r": "5" }]]);

const Venus = createLucideIcon("venus", [["path", { "d": "M12 15v7" }], ["path", { "d": "M9 19h6" }], ["circle", { "cx": "12", "cy": "9", "r": "6" }]]);

const VibrateOff = createLucideIcon("vibrate-off", [["path", { "d": "m2 8 2 2-2 2 2 2-2 2" }], ["path", { "d": "m22 8-2 2 2 2-2 2 2 2" }], ["path", { "d": "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }], ["path", { "d": "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Vibrate = createLucideIcon("vibrate", [["path", { "d": "m2 8 2 2-2 2 2 2-2 2" }], ["path", { "d": "m22 8-2 2 2 2-2 2 2 2" }], ["rect", { "width": "8", "height": "14", "x": "8", "y": "5", "rx": "1" }]]);

const VideoOff = createLucideIcon("video-off", [["path", { "d": "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }], ["path", { "d": "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }], ["path", { "d": "m2 2 20 20" }]]);

const Video = createLucideIcon("video", [["path", { "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", { "x": "2", "y": "6", "width": "14", "height": "12", "rx": "2" }]]);

const Videotape = createLucideIcon("videotape", [["rect", { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }], ["path", { "d": "M2 8h20" }], ["circle", { "cx": "8", "cy": "14", "r": "2" }], ["path", { "d": "M8 12h8" }], ["circle", { "cx": "16", "cy": "14", "r": "2" }]]);

const View = createLucideIcon("view", [["path", { "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }], ["circle", { "cx": "12", "cy": "12", "r": "1" }], ["path", { "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]);

const Voicemail = createLucideIcon("voicemail", [["circle", { "cx": "6", "cy": "12", "r": "4" }], ["circle", { "cx": "18", "cy": "12", "r": "4" }], ["line", { "x1": "6", "x2": "18", "y1": "16", "y2": "16" }]]);

const Volleyball = createLucideIcon("volleyball", [["path", { "d": "M11 7a16 16 20 0 1 10.98 4.362" }], ["path", { "d": "M12 12a13 13 0 0 1-8.66 5" }], ["path", { "d": "M16.83 13.634a16 16 0 0 1-9.267 7.328" }], ["path", { "d": "M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" }], ["path", { "d": "M8.17 15.366a16 16 0 0 1-1.713-11.69" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const Volume1 = createLucideIcon("volume-1", [["path", { "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["path", { "d": "M16 9a5 5 0 0 1 0 6" }]]);

const Volume2 = createLucideIcon("volume-2", [["path", { "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["path", { "d": "M16 9a5 5 0 0 1 0 6" }], ["path", { "d": "M19.364 18.364a9 9 0 0 0 0-12.728" }]]);

const VolumeOff = createLucideIcon("volume-off", [["path", { "d": "M16 9a5 5 0 0 1 .95 2.293" }], ["path", { "d": "M19.364 5.636a9 9 0 0 1 1.889 9.96" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" }], ["path", { "d": "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }]]);

const VolumeX = createLucideIcon("volume-x", [["path", { "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }], ["line", { "x1": "22", "x2": "16", "y1": "9", "y2": "15" }], ["line", { "x1": "16", "x2": "22", "y1": "9", "y2": "15" }]]);

const Vote = createLucideIcon("vote", [["path", { "d": "m9 12 2 2 4-4" }], ["path", { "d": "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }], ["path", { "d": "M22 19H2" }]]);

const Volume = createLucideIcon("volume", [["path", { "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }]]);

const WalletCards = createLucideIcon("wallet-cards", [["path", { "d": "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21" }], ["path", { "d": "M3 7h18" }], ["rect", { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }]]);

const WalletMinimal = createLucideIcon("wallet-minimal", [["path", { "d": "M17 14h.01" }], ["path", { "d": "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]]);

const Wallet = createLucideIcon("wallet", [["path", { "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]]);

const Wallpaper = createLucideIcon("wallpaper", [["path", { "d": "M12 17v4" }], ["path", { "d": "M8 21h8" }], ["path", { "d": "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }], ["circle", { "cx": "8", "cy": "9", "r": "2" }], ["rect", { "x": "2", "y": "3", "width": "20", "height": "14", "rx": "2" }]]);

const WandSparkles = createLucideIcon("wand-sparkles", [["path", { "d": "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" }], ["path", { "d": "m14 7 3 3" }], ["path", { "d": "M5 6v4" }], ["path", { "d": "M19 14v4" }], ["path", { "d": "M10 2v2" }], ["path", { "d": "M7 8H3" }], ["path", { "d": "M21 16h-4" }], ["path", { "d": "M11 3H9" }]]);

const Wand = createLucideIcon("wand", [["path", { "d": "M15 4V2" }], ["path", { "d": "M15 16v-2" }], ["path", { "d": "M8 9h2" }], ["path", { "d": "M20 9h2" }], ["path", { "d": "M17.8 11.8 19 13" }], ["path", { "d": "M15 9h.01" }], ["path", { "d": "M17.8 6.2 19 5" }], ["path", { "d": "m3 21 9-9" }], ["path", { "d": "M12.2 6.2 11 5" }]]);

const Warehouse = createLucideIcon("warehouse", [["path", { "d": "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" }], ["path", { "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" }], ["path", { "d": "M6 13h12" }], ["path", { "d": "M6 17h12" }]]);

const WashingMachine = createLucideIcon("washing-machine", [["path", { "d": "M3 6h3" }], ["path", { "d": "M17 6h.01" }], ["rect", { "width": "18", "height": "20", "x": "3", "y": "2", "rx": "2" }], ["circle", { "cx": "12", "cy": "13", "r": "5" }], ["path", { "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]]);

const Watch = createLucideIcon("watch", [["path", { "d": "M12 10v2.2l1.6 1" }], ["path", { "d": "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }], ["path", { "d": "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }], ["circle", { "cx": "12", "cy": "12", "r": "6" }]]);

const WavesArrowDown = createLucideIcon("waves-arrow-down", [["path", { "d": "M12 10L12 2" }], ["path", { "d": "M16 6L12 10L8 6" }], ["path", { "d": "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15" }], ["path", { "d": "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21" }]]);

const WavesArrowUp = createLucideIcon("waves-arrow-up", [["path", { "d": "M12 2v8" }], ["path", { "d": "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { "d": "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { "d": "m8 6 4-4 4 4" }]]);

const WavesHorizontal = createLucideIcon("waves-horizontal", [["path", { "d": "M2 12q2.5 2 5 0t5 0 5 0 5 0" }], ["path", { "d": "M2 19q2.5 2 5 0t5 0 5 0 5 0" }], ["path", { "d": "M2 5q2.5 2 5 0t5 0 5 0 5 0" }]]);

const WavesLadder = createLucideIcon("waves-ladder", [["path", { "d": "M19 5a2 2 0 0 0-2 2v11" }], ["path", { "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { "d": "M7 13h10" }], ["path", { "d": "M7 9h10" }], ["path", { "d": "M9 5a2 2 0 0 0-2 2v11" }]]);

const WavesVertical = createLucideIcon("waves-vertical", [["path", { "d": "M12 2q2 2.5 0 5t0 5 0 5 0 5" }], ["path", { "d": "M19 2q2 2.5 0 5t0 5 0 5 0 5" }], ["path", { "d": "M5 2q2 2.5 0 5t0 5 0 5 0 5" }]]);

const Waypoints = createLucideIcon("waypoints", [["path", { "d": "m10.586 5.414-5.172 5.172" }], ["path", { "d": "m18.586 13.414-5.172 5.172" }], ["path", { "d": "M6 12h12" }], ["circle", { "cx": "12", "cy": "20", "r": "2" }], ["circle", { "cx": "12", "cy": "4", "r": "2" }], ["circle", { "cx": "20", "cy": "12", "r": "2" }], ["circle", { "cx": "4", "cy": "12", "r": "2" }]]);

const WebcamOff = createLucideIcon("webcam-off", [["path", { "d": "M12 22v-4" }], ["path", { "d": "M12.754 7.096a3 3 0 0 1 2.15 2.15" }], ["path", { "d": "M12.863 12.873a3 3 0 0 1-3.736-3.735" }], ["path", { "d": "M16.566 16.57A8 8 0 0 1 5.43 5.433" }], ["path", { "d": "m2 2 20 20" }], ["path", { "d": "M7 22h10" }], ["path", { "d": "M8.478 2.817a8 8 0 0 1 10.705 10.705" }]]);

const Webcam = createLucideIcon("webcam", [["circle", { "cx": "12", "cy": "10", "r": "8" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }], ["path", { "d": "M7 22h10" }], ["path", { "d": "M12 22v-4" }]]);

const WebhookOff = createLucideIcon("webhook-off", [["path", { "d": "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }], ["path", { "d": "M9 3.4a4 4 0 0 1 6.52.66" }], ["path", { "d": "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }], ["path", { "d": "M20.3 20.3a4 4 0 0 1-2.3.7" }], ["path", { "d": "M18.6 13a4 4 0 0 1 3.357 3.414" }], ["path", { "d": "m12 6 .6 1" }], ["path", { "d": "m2 2 20 20" }]]);

const Webhook = createLucideIcon("webhook", [["path", { "d": "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }], ["path", { "d": "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }], ["path", { "d": "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]]);

const WeightTilde = createLucideIcon("weight-tilde", [["path", { "d": "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" }], ["path", { "d": "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" }], ["circle", { "cx": "12", "cy": "5", "r": "3" }]]);

const Weight = createLucideIcon("weight", [["circle", { "cx": "12", "cy": "5", "r": "3" }], ["path", { "d": "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" }]]);

const WheatOff = createLucideIcon("wheat-off", [["path", { "d": "m2 22 10-10" }], ["path", { "d": "m16 8-1.17 1.17" }], ["path", { "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }], ["path", { "d": "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }], ["path", { "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { "d": "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }], ["path", { "d": "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Wheat = createLucideIcon("wheat", [["path", { "d": "M2 22 16 8" }], ["path", { "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { "d": "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { "d": "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }]]);

const WholeWord = createLucideIcon("whole-word", [["circle", { "cx": "7", "cy": "12", "r": "3" }], ["path", { "d": "M10 9v6" }], ["circle", { "cx": "17", "cy": "12", "r": "3" }], ["path", { "d": "M14 7v8" }], ["path", { "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]);

const WifiCog = createLucideIcon("wifi-cog", [["path", { "d": "m14.305 19.53.923-.382" }], ["path", { "d": "m15.228 16.852-.923-.383" }], ["path", { "d": "m16.852 15.228-.383-.923" }], ["path", { "d": "m16.852 20.772-.383.924" }], ["path", { "d": "m19.148 15.228.383-.923" }], ["path", { "d": "m19.53 21.696-.382-.924" }], ["path", { "d": "M2 7.82a15 15 0 0 1 20 0" }], ["path", { "d": "m20.772 16.852.924-.383" }], ["path", { "d": "m20.772 19.148.924.383" }], ["path", { "d": "M5 11.858a10 10 0 0 1 11.5-1.785" }], ["path", { "d": "M8.5 15.429a5 5 0 0 1 2.413-1.31" }], ["circle", { "cx": "18", "cy": "18", "r": "3" }]]);

const WifiHigh = createLucideIcon("wifi-high", [["path", { "d": "M12 20h.01" }], ["path", { "d": "M5 12.859a10 10 0 0 1 14 0" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]]);

const WifiLow = createLucideIcon("wifi-low", [["path", { "d": "M12 20h.01" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]]);

const WifiOff = createLucideIcon("wifi-off", [["path", { "d": "M12 20h.01" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }], ["path", { "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }], ["path", { "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }], ["path", { "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }], ["path", { "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }], ["path", { "d": "m2 2 20 20" }]]);

const WifiPen = createLucideIcon("wifi-pen", [["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }], ["path", { "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["path", { "d": "M5 12.859a10 10 0 0 1 10.5-2.222" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 3-1.406" }]]);

const WifiSync = createLucideIcon("wifi-sync", [["path", { "d": "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" }], ["path", { "d": "M11.965 14.105h4" }], ["path", { "d": "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" }], ["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }], ["path", { "d": "M21.965 22.105v-4" }], ["path", { "d": "M5 12.86a10 10 0 0 1 3-2.032" }], ["path", { "d": "M8.5 16.429h.01" }]]);

const WifiZero = createLucideIcon("wifi-zero", [["path", { "d": "M12 20h.01" }]]);

const Wifi = createLucideIcon("wifi", [["path", { "d": "M12 20h.01" }], ["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }], ["path", { "d": "M5 12.859a10 10 0 0 1 14 0" }], ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]]);

const WindArrowDown = createLucideIcon("wind-arrow-down", [["path", { "d": "M10 2v8" }], ["path", { "d": "M12.8 21.6A2 2 0 1 0 14 18H2" }], ["path", { "d": "M17.5 10a2.5 2.5 0 1 1 2 4H2" }], ["path", { "d": "m6 6 4 4 4-4" }]]);

const Wind = createLucideIcon("wind", [["path", { "d": "M12.8 19.6A2 2 0 1 0 14 16H2" }], ["path", { "d": "M17.5 8a2.5 2.5 0 1 1 2 4H2" }], ["path", { "d": "M9.8 4.4A2 2 0 1 1 11 8H2" }]]);

const WineOff = createLucideIcon("wine-off", [["path", { "d": "M8 22h8" }], ["path", { "d": "M7 10h3m7 0h-1.343" }], ["path", { "d": "M12 15v7" }], ["path", { "d": "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" }], ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }]]);

const Wine = createLucideIcon("wine", [["path", { "d": "M8 22h8" }], ["path", { "d": "M7 10h10" }], ["path", { "d": "M12 15v7" }], ["path", { "d": "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]]);

const Workflow = createLucideIcon("workflow", [["rect", { "width": "8", "height": "8", "x": "3", "y": "3", "rx": "2" }], ["path", { "d": "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { "width": "8", "height": "8", "x": "13", "y": "13", "rx": "2" }]]);

const Worm = createLucideIcon("worm", [["path", { "d": "m19 12-1.5 3" }], ["path", { "d": "M19.63 18.81 22 20" }], ["path", { "d": "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" }]]);

const WrenchOff = createLucideIcon("wrench-off", [["path", { "d": "M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842" }], ["path", { "d": "m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88" }], ["path", { "d": "m2 2 20 20" }]]);

const Wrench = createLucideIcon("wrench", [["path", { "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" }]]);

const XLineTop = createLucideIcon("x-line-top", [["path", { "d": "M18 4H6" }], ["path", { "d": "M18 8 6 20" }], ["path", { "d": "m6 8 12 12" }]]);

const X = createLucideIcon("x", [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]]);

const ZapOff = createLucideIcon("zap-off", [["path", { "d": "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }], ["path", { "d": "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }], ["path", { "d": "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" }], ["path", { "d": "m2 2 20 20" }]]);

const Zap = createLucideIcon("zap", [["path", { "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" }]]);

const ZodiacAquarius = createLucideIcon("zodiac-aquarius", [["path", { "d": "m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" }], ["path", { "d": "m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" }]]);

const ZodiacAries = createLucideIcon("zodiac-aries", [["path", { "d": "M12 7.5a4.5 4.5 0 1 1 5 4.5" }], ["path", { "d": "M7 12a4.5 4.5 0 1 1 5-4.5V21" }]]);

const ZodiacGemini = createLucideIcon("zodiac-gemini", [["path", { "d": "M16 4.525v14.948" }], ["path", { "d": "M20 3A17 17 0 0 1 4 3" }], ["path", { "d": "M4 21a17 17 0 0 1 16 0" }], ["path", { "d": "M8 4.525v14.948" }]]);

const ZodiacCancer = createLucideIcon("zodiac-cancer", [["path", { "d": "M21 14.5A9 6.5 0 0 1 5.5 19" }], ["path", { "d": "M3 9.5A9 6.5 0 0 1 18.5 5" }], ["circle", { "cx": "17.5", "cy": "14.5", "r": "3.5" }], ["circle", { "cx": "6.5", "cy": "9.5", "r": "3.5" }]]);

const ZodiacCapricorn = createLucideIcon("zodiac-capricorn", [["path", { "d": "M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" }], ["path", { "d": "M7 19V6a3 3 0 0 0-3-3h0" }], ["circle", { "cx": "17", "cy": "17", "r": "3" }]]);

const ZodiacLeo = createLucideIcon("zodiac-leo", [["path", { "d": "M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" }], ["circle", { "cx": "7", "cy": "16", "r": "3" }]]);

const ZodiacLibra = createLucideIcon("zodiac-libra", [["path", { "d": "M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" }], ["path", { "d": "M3 20h18" }]]);

const ZodiacOphiuchus = createLucideIcon("zodiac-ophiuchus", [["path", { "d": "M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" }], ["path", { "d": "M6 3v12a6 6 0 0 0 12 0V3" }]]);

const ZodiacPisces = createLucideIcon("zodiac-pisces", [["path", { "d": "M19 21a15 15 0 0 1 0-18" }], ["path", { "d": "M20 12H4" }], ["path", { "d": "M5 3a15 15 0 0 1 0 18" }]]);

const ZodiacSagittarius = createLucideIcon("zodiac-sagittarius", [["path", { "d": "M15 3h6v6" }], ["path", { "d": "M21 3 3 21" }], ["path", { "d": "m9 9 6 6" }]]);

const ZodiacScorpio = createLucideIcon("zodiac-scorpio", [["path", { "d": "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" }], ["path", { "d": "m22 19-3 3" }], ["path", { "d": "M5 19V5.5a1 1 0 0 1 5 0" }], ["path", { "d": "M5 5.5A2.5 2.5 0 0 0 2.5 3" }]]);

const ZodiacVirgo = createLucideIcon("zodiac-virgo", [["path", { "d": "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" }], ["path", { "d": "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" }], ["path", { "d": "M6 19V6a3 3 0 0 0-3-3h0" }], ["path", { "d": "M6 5.5a1 1 0 0 1 5 0V19" }]]);

const ZodiacTaurus = createLucideIcon("zodiac-taurus", [["circle", { "cx": "12", "cy": "15", "r": "6" }], ["path", { "d": "M18 3A6 6 0 0 1 6 3" }]]);

const ZoomIn = createLucideIcon("zoom-in", [["circle", { "cx": "11", "cy": "11", "r": "8" }], ["line", { "x1": "21", "x2": "16.65", "y1": "21", "y2": "16.65" }], ["line", { "x1": "11", "x2": "11", "y1": "8", "y2": "14" }], ["line", { "x1": "8", "x2": "14", "y1": "11", "y2": "11" }]]);

const ZoomOut = createLucideIcon("zoom-out", [["circle", { "cx": "11", "cy": "11", "r": "8" }], ["line", { "x1": "21", "x2": "16.65", "y1": "21", "y2": "16.65" }], ["line", { "x1": "8", "x2": "14", "y1": "11", "y2": "11" }]]);

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Accessibility,
  Activity,
  Ad,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmSmoke,
  Album,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ambulance,
  Ampersand,
  Ampersands,
  Amphora,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Anvil,
  Aperture,
  AppWindow,
  AppWindowMac,
  Apple,
  Archive,
  ArchiveRestore,
  ArchiveX,
  Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownFromLine,
  ArrowDownLeft,
  ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeft,
  ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowsUpFromLine,
  Asterisk,
  Astroid,
  AtSign,
  Atom,
  AudioLines,
  AudioWaveform,
  Award,
  Axe,
  Axis3d,
  Baby,
  Backpack,
  Badge,
  BadgeAlert,
  BadgeCent,
  BadgeCheck,
  BadgeDollarSign,
  BadgeEuro,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeQuestionMark,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeTurkishLira,
  BadgeX,
  BaggageClaim,
  Balloon,
  Ban,
  Banana,
  Bandage,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BanknoteCheck,
  BanknoteX,
  Barcode,
  Barrel,
  Baseline,
  Bath,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryPlus,
  BatteryWarning,
  Beaker,
  Bean,
  BeanOff,
  Bed,
  BedDouble,
  BedSingle,
  Beef,
  BeefOff,
  Beer,
  BeerOff,
  Bell,
  BellCheck,
  BellDot,
  BellElectric,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BicepsFlexed,
  Bike,
  Binary,
  Binoculars,
  Biohazard,
  Bird,
  Birdhouse,
  Bitcoin,
  Blend,
  Blender,
  Blinds,
  Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bold,
  Bolt,
  Bomb,
  Bone,
  Book,
  BookA,
  BookAlert,
  BookAudio,
  BookCheck,
  BookCopy,
  BookDashed,
  BookDown,
  BookHeadphones,
  BookHeart,
  BookImage,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpen,
  BookOpenCheck,
  BookOpenText,
  BookPlus,
  BookSearch,
  BookText,
  BookType,
  BookUp,
  BookUp2,
  BookUser,
  BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkOff,
  BookmarkPlus,
  BookmarkX,
  BoomBox,
  Bot,
  BotMessageSquare,
  BotOff,
  BottleWine,
  BowArrow,
  Box,
  Boxes,
  Braces,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BrickWall,
  BrickWallFire,
  BrickWallShield,
  Briefcase,
  BriefcaseBusiness,
  BriefcaseConveyorBelt,
  BriefcaseMedical,
  BringToFront,
  Broccoli,
  Brush,
  BrushCleaning,
  Bubbles,
  Bug,
  BugOff,
  BugPlay,
  Building,
  Building2,
  Bus,
  BusFront,
  Cable,
  CableCar,
  Cake,
  CakeSlice,
  Calculator,
  Calendar,
  Calendar1,
  CalendarArrowDown,
  CalendarArrowUp,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  CalendarFold,
  CalendarHeart,
  CalendarMinus,
  CalendarMinus2,
  CalendarOff,
  CalendarPlus,
  CalendarPlus2,
  CalendarRange,
  CalendarSearch,
  CalendarSync,
  CalendarX,
  CalendarX2,
  Calendars,
  Camera,
  CameraOff,
  Candy,
  CandyCane,
  CandyOff,
  Cannabis,
  CannabisOff,
  Captions,
  CaptionsOff,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  CardSim,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Cctv,
  CctvOff,
  ChartArea,
  ChartBar,
  ChartBarBig,
  ChartBarDecreasing,
  ChartBarIncreasing,
  ChartBarStacked,
  ChartCandlestick,
  ChartColumn,
  ChartColumnBig,
  ChartColumnDecreasing,
  ChartColumnIncreasing,
  ChartColumnStacked,
  ChartGantt,
  ChartLine,
  ChartNetwork,
  ChartNoAxesColumn,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  ChartNoAxesGantt,
  ChartPie,
  ChartScatter,
  ChartSpline,
  Check,
  CheckCheck,
  CheckLine,
  ChefHat,
  Cherry,
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsLeftRightEllipsis,
  ChevronsRight,
  ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  Church,
  Cigarette,
  CigaretteOff,
  Circle,
  CircleAlert,
  CircleArrowDown,
  CircleArrowLeft,
  CircleArrowOutDownLeft,
  CircleArrowOutDownRight,
  CircleArrowOutUpLeft,
  CircleArrowOutUpRight,
  CircleArrowRight,
  CircleArrowUp,
  CircleCheck,
  CircleCheckBig,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CircleDashed,
  CircleDivide,
  CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
  CircleFadingArrowUp,
  CircleFadingPlus,
  CircleGauge,
  CircleMinus,
  CircleOff,
  CircleParking,
  CircleParkingOff,
  CirclePause,
  CirclePercent,
  CirclePile,
  CirclePlay,
  CirclePlus,
  CirclePoundSterling,
  CirclePower,
  CircleQuestionMark,
  CircleSlash,
  CircleSlash2,
  CircleSmall,
  CircleStar,
  CircleStop,
  CircleUser,
  CircleUserRound,
  CircleX,
  CircuitBoard,
  Citrus,
  Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardClock,
  ClipboardCopy,
  ClipboardList,
  ClipboardMinus,
  ClipboardPaste,
  ClipboardPen,
  ClipboardPenLine,
  ClipboardPlus,
  ClipboardType,
  ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  ClockAlert,
  ClockArrowDown,
  ClockArrowLeft,
  ClockArrowRight,
  ClockArrowUp,
  ClockCheck,
  ClockFading,
  ClockPlus,
  ClosedCaption,
  Cloud,
  CloudAlert,
  CloudBackup,
  CloudCheck,
  CloudCog,
  CloudDownload,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudOff,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  CloudSync,
  CloudUpload,
  Cloudy,
  Clover,
  Club,
  Code,
  CodeXml,
  Coffee,
  Cog,
  Coins,
  Columns2,
  Columns3,
  Columns3Cog,
  Columns4,
  Combine,
  Command,
  Compass,
  Component,
  Computer,
  ConciergeBell,
  Cone,
  Construction,
  Contact,
  ContactRound,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  Copy,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  Dam,
  Database,
  DatabaseBackup,
  DatabaseSearch,
  DatabaseZap,
  DecimalsArrowLeft,
  DecimalsArrowRight,
  Delete,
  Dessert,
  Diameter,
  Diamond,
  DiamondMinus,
  DiamondPercent,
  DiamondPlus,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc,
  Disc2,
  Disc3,
  DiscAlbum,
  Divide,
  Dna,
  DnaOff,
  Dock,
  Dog,
  DollarSign,
  Donut,
  DoorClosed,
  DoorClosedLocked,
  DoorOpen,
  Dot,
  Download,
  DraftingCompass,
  Drama,
  Drill,
  Drone,
  Droplet,
  DropletOff,
  Droplets,
  Drum,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Earth,
  EarthLock,
  Eclipse,
  Egg,
  EggFried,
  EggOff,
  Ellipse,
  Ellipsis,
  EllipsisVertical,
  Equal,
  EqualApproximately,
  EqualNot,
  Eraser,
  EthernetPort,
  Euro,
  EvCharger,
  Expand,
  ExternalLink,
  Eye,
  EyeClosed,
  EyeDashed,
  EyeOff,
  Factory,
  Fan,
  FastForward,
  Feather,
  Fence,
  FerrisWheel,
  File,
  FileArchive,
  FileAxis3d,
  FileBadge,
  FileBox,
  FileBraces,
  FileBracesCorner,
  FileChartColumn,
  FileChartColumnIncreasing,
  FileChartLine,
  FileChartPie,
  FileCheck,
  FileCheckCorner,
  FileClock,
  FileCode,
  FileCodeCorner,
  FileCog,
  FileDiff,
  FileDigit,
  FileDown,
  FileExclamationPoint,
  FileHeadphone,
  FileHeart,
  FileImage,
  FileInput,
  FileKey,
  FileLock,
  FileMinus,
  FileMinusCorner,
  FileMusic,
  FileOutput,
  FilePen,
  FilePenLine,
  FilePlay,
  FilePlus,
  FilePlusCorner,
  FileQuestionMark,
  FileScan,
  FileSearch,
  FileSearchCorner,
  FileSignal,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType,
  FileTypeCorner,
  FileUp,
  FileUser,
  FileVideoCamera,
  FileVolume,
  FileX,
  FileXCorner,
  Files,
  Film,
  FingerprintPattern,
  FireExtinguisher,
  Fish,
  FishOff,
  FishSymbol,
  FishingHook,
  FishingRod,
  Flag,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flame,
  FlameKindling,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FlipHorizontal2,
  FlipVertical2,
  Flower,
  Flower2,
  Focus,
  FoldHorizontal,
  FoldVertical,
  Folder,
  FolderArchive,
  FolderBookmark,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCode,
  FolderCog,
  FolderDot,
  FolderDown,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOutput,
  FolderPen,
  FolderPlus,
  FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folders,
  Footprints,
  Forklift,
  Form,
  Forward,
  Frame,
  Frown,
  Fuel,
  Fullscreen,
  Funnel,
  FunnelPlus,
  FunnelX,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Gamepad,
  Gamepad2,
  GamepadDirectional,
  Gauge,
  Gavel,
  Gem,
  GeorgianLari,
  Ghost,
  Gift,
  GitBranch,
  GitBranchMinus,
  GitBranchPlus,
  GitCommitHorizontal,
  GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitFork,
  GitGraph,
  GitMerge,
  GitMergeConflict,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestDraft,
  GlassWater,
  Glasses,
  Globe,
  GlobeCheck,
  GlobeLock,
  GlobeOff,
  GlobeX,
  Goal,
  Gpu,
  GraduationCap,
  Grape,
  Grid2x2,
  Grid2x2Check,
  Grid2x2Plus,
  Grid2x2X,
  Grid3x2,
  Grid3x3,
  Grip,
  GripHorizontal,
  GripVertical,
  Group,
  Guitar,
  Ham,
  Hamburger,
  Hammer,
  Hand,
  HandCoins,
  HandFist,
  HandGrab,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handbag,
  Handshake,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  HardHat,
  Hash,
  HatGlasses,
  Haze,
  Hd,
  HdmiPort,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadphoneOff,
  Headphones,
  Headset,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartMinus,
  HeartOff,
  HeartPlus,
  HeartPulse,
  HeartX,
  Heater,
  Helicopter,
  Hexagon,
  Highlighter,
  History,
  Hop,
  HopOff,
  Hospital,
  Hotel,
  Hourglass,
  House,
  HouseHeart,
  HousePlug,
  HousePlus,
  HouseWifi,
  IceCreamBowl,
  IceCreamCone,
  IdCard,
  IdCardLanyard,
  Image,
  ImageDown,
  ImageMinus,
  ImageOff,
  ImagePlay,
  ImagePlus,
  ImageUp,
  ImageUpscale,
  Images,
  Import,
  Inbox,
  IndianRupee,
  Infinity,
  Info,
  InspectionPanel,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  Kayak,
  Key,
  KeyRound,
  KeySquare,
  Keyboard,
  KeyboardMusic,
  KeyboardOff,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  LandPlot,
  Landmark,
  Languages,
  Laptop,
  LaptopMinimal,
  LaptopMinimalCheck,
  Lasso,
  LassoSelect,
  Laugh,
  Layers,
  Layers2,
  LayersMinus,
  LayersPlus,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Leaf,
  LeafyGreen,
  Lectern,
  LensConcave,
  LensConvex,
  Library,
  LibraryBig,
  LifeBuoy,
  Ligature,
  Lightbulb,
  LightbulbOff,
  LineDotRightHorizontal,
  LineSquiggle,
  LineStyle,
  Link,
  Link2,
  Link2Off,
  List,
  ListCheck,
  ListChecks,
  ListChevronsDownUp,
  ListChevronsUpDown,
  ListCollapse,
  ListEnd,
  ListFilter,
  ListFilterPlus,
  ListIndentDecrease,
  ListIndentIncrease,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListSortAscending,
  ListSortDescending,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  Loader,
  LoaderCircle,
  LoaderPinwheel,
  Locate,
  LocateFixed,
  LocateOff,
  Lock,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  LogIn,
  LogOut,
  Logs,
  Lollipop,
  Luggage,
  Magnet,
  Mail,
  MailCheck,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestionMark,
  MailSearch,
  MailWarning,
  MailX,
  Mailbox,
  Mails,
  Map,
  MapMinus,
  MapPin,
  MapPinCheck,
  MapPinCheckInside,
  MapPinHouse,
  MapPinMinus,
  MapPinMinusInside,
  MapPinOff,
  MapPinPen,
  MapPinPlus,
  MapPinPlusInside,
  MapPinSearch,
  MapPinX,
  MapPinXInside,
  MapPinned,
  MapPlus,
  Mars,
  MarsStroke,
  Martini,
  Maximize,
  Maximize2,
  Medal,
  Megaphone,
  MegaphoneOff,
  Meh,
  MemoryStick,
  Menu,
  Merge,
  MessageCircle,
  MessageCircleCheck,
  MessageCircleCode,
  MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleMore,
  MessageCircleOff,
  MessageCirclePlus,
  MessageCircleQuestionMark,
  MessageCircleReply,
  MessageCircleWarning,
  MessageCircleX,
  MessageSquare,
  MessageSquareCheck,
  MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareLock,
  MessageSquareMore,
  MessageSquareOff,
  MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareText,
  MessageSquareWarning,
  MessageSquareX,
  MessagesSquare,
  Metronome,
  Mic,
  MicOff,
  MicVocal,
  Microchip,
  Microscope,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize,
  Minimize2,
  Minus,
  MirrorRectangular,
  MirrorRound,
  Monitor,
  MonitorCheck,
  MonitorCloud,
  MonitorCog,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Moon,
  MoonStar,
  Motorbike,
  Mountain,
  MountainSnow,
  Mouse,
  MouseLeft,
  MouseOff,
  MousePointer,
  MousePointer2,
  MousePointer2Off,
  MousePointerBan,
  MousePointerClick,
  MouseRight,
  Move,
  Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveHorizontal,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveUpLeft,
  MoveUpRight,
  MoveVertical,
  Music,
  Music2,
  Music3,
  Music4,
  Navigation,
  Navigation2,
  Navigation2Off,
  NavigationOff,
  Network,
  Newspaper,
  Nfc,
  NonBinary,
  Notebook,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  NotepadText,
  NotepadTextDashed,
  Nut,
  NutOff,
  Octagon,
  OctagonAlert,
  OctagonMinus,
  OctagonPause,
  OctagonX,
  Omega,
  Option,
  Orbit,
  Origami,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  PaintRoller,
  Paintbrush,
  PaintbrushVertical,
  Palette,
  Panda,
  PanelBottom,
  PanelBottomClose,
  PanelBottomDashed,
  PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftDashed,
  PanelLeftOpen,
  PanelLeftRightDashed,
  PanelRight,
  PanelRightClose,
  PanelRightDashed,
  PanelRightOpen,
  PanelTop,
  PanelTopBottomDashed,
  PanelTopClose,
  PanelTopDashed,
  PanelTopOpen,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  Parasol,
  Parentheses,
  ParkingMeter,
  PartyPopper,
  Pause,
  PawPrint,
  PcCase,
  Pen,
  PenLine,
  PenOff,
  PenTool,
  Pencil,
  PencilLine,
  PencilOff,
  PencilRuler,
  PencilSparkles,
  Pentagon,
  Percent,
  PersonStanding,
  PhilippinePeso,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Pi,
  Piano,
  Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PiggyBank,
  Pilcrow,
  PilcrowLeft,
  PilcrowRight,
  Pill,
  PillBottle,
  Pin,
  PinOff,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PlayOff,
  Plug,
  Plug2,
  PlugZap,
  Plus,
  PocketKnife,
  Podcast,
  Podium,
  Pointer,
  PointerOff,
  Popcorn,
  Popsicle,
  PoundSterling,
  Power,
  PowerOff,
  Presentation,
  Printer,
  PrinterCheck,
  PrinterX,
  Projector,
  Proportions,
  Puzzle,
  Pyramid,
  QrCode,
  Quote,
  Rabbit,
  Radar,
  Radiation,
  Radical,
  Radio,
  RadioOff,
  RadioReceiver,
  RadioTower,
  Radius,
  Rainbow,
  Rat,
  Ratio,
  Receipt,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptText,
  ReceiptTurkishLira,
  RectangleCircle,
  RectangleEllipsis,
  RectangleGoggles,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo,
  Redo2,
  RedoDot,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCw,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat2,
  RepeatOff,
  Replace,
  ReplaceAll,
  Reply,
  ReplyAll,
  Rewind,
  Ribbon,
  Road,
  Rocket,
  RockingChair,
  RollerCoaster,
  Rose,
  Rotate3d,
  RotateCcw,
  RotateCcwKey,
  RotateCcwSquare,
  RotateCw,
  RotateCwSquare,
  Route,
  RouteOff,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RulerDimensionLine,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  Satellite,
  SatelliteDish,
  SaudiRiyal,
  Save,
  SaveAll,
  SaveCheck,
  SaveOff,
  SavePen,
  SavePlus,
  Scale,
  Scale3d,
  Scaling,
  Scan,
  ScanBarcode,
  ScanEye,
  ScanFace,
  ScanHeart,
  ScanLine,
  ScanQrCode,
  ScanSearch,
  ScanText,
  School,
  Scissors,
  ScissorsLineDashed,
  Scooter,
  ScreenShare,
  ScreenShareOff,
  Scroll,
  ScrollText,
  Search,
  SearchAlert,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Section,
  Send,
  SendHorizontal,
  SendToBack,
  SeparatorHorizontal,
  SeparatorVertical,
  Server,
  ServerCog,
  ServerCrash,
  ServerOff,
  Settings,
  Settings2,
  Shapes,
  Share,
  Share2,
  Sheet,
  Shell,
  ShelvingUnit,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldCog,
  ShieldCogCorner,
  ShieldEllipsis,
  ShieldHalf,
  ShieldMinus,
  ShieldOff,
  ShieldPlus,
  ShieldQuestionMark,
  ShieldUser,
  ShieldX,
  Ship,
  ShipWheel,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shredder,
  Shrimp,
  Shrink,
  Shrub,
  Shuffle,
  Sigma,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Signature,
  Signpost,
  SignpostBig,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slash,
  Slice,
  SlidersHorizontal,
  SlidersVertical,
  Smartphone,
  SmartphoneCharging,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snail,
  Snowflake,
  SoapDispenserDroplet,
  Sofa,
  SolarPanel,
  Soup,
  Space,
  Spade,
  Sparkle,
  Sparkles,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  SplinePointer,
  Split,
  Spool,
  SportShoe,
  Spotlight,
  SprayCan,
  Sprout,
  Square,
  SquareActivity,
  SquareArrowDown,
  SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareArrowLeft,
  SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowRight,
  SquareArrowRightEnter,
  SquareArrowRightExit,
  SquareArrowUp,
  SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareAsterisk,
  SquareBottomDashedScissors,
  SquareCenterlineDashedHorizontal,
  SquareCenterlineDashedVertical,
  SquareChartGantt,
  SquareCheck,
  SquareCheckBig,
  SquareChevronDown,
  SquareChevronLeft,
  SquareChevronRight,
  SquareChevronUp,
  SquareCode,
  SquareDashed,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDashedText,
  SquareDashedTopSolid,
  SquareDivide,
  SquareDot,
  SquareEqual,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMinus,
  SquareMousePointer,
  SquareParking,
  SquareParkingOff,
  SquarePause,
  SquarePen,
  SquarePercent,
  SquarePi,
  SquarePilcrow,
  SquarePlay,
  SquarePlus,
  SquarePower,
  SquareRadical,
  SquareRoundCorner,
  SquareScissors,
  SquareSigma,
  SquareSlash,
  SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSquare,
  SquareStack,
  SquareStar,
  SquareStop,
  SquareTerminal,
  SquareUser,
  SquareUserRound,
  SquareX,
  SquaresExclude,
  SquaresIntersect,
  SquaresSubtract,
  SquaresUnite,
  Squircle,
  SquircleDashed,
  Squirrel,
  Stamp,
  Star,
  StarCheck,
  StarHalf,
  StarMinus,
  StarOff,
  StarPlus,
  StarX,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StickyNoteCheck,
  StickyNoteMinus,
  StickyNoteOff,
  StickyNotePlus,
  StickyNoteX,
  StickyNotes,
  Stone,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  Summary,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Sunset,
  Superscript,
  SwatchBook,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableOfContents,
  TableProperties,
  TableRowsSplit,
  Tablet,
  TabletSmartphone,
  Tablets,
  Tag,
  TagPlus,
  TagX,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  Target,
  Telescope,
  Tent,
  TentTree,
  Terminal,
  TestTube,
  TestTubeDiagonal,
  TestTubes,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  TextCursor,
  TextCursorInput,
  TextInitial,
  TextQuote,
  TextSearch,
  TextWrap,
  Theater,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Tickets,
  TicketsPlane,
  Timeline,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Toilet,
  ToolCase,
  Toolbox,
  Tornado,
  Torus,
  Touchpad,
  TouchpadOff,
  TowelRack,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainFrontTunnel,
  TrainTrack,
  TramFront,
  Transgender,
  Trash,
  Trash2,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  Triangle,
  TriangleAlert,
  TriangleDashed,
  TriangleRight,
  Trophy,
  Truck,
  TruckElectric,
  TurkishLira,
  Turntable,
  Turtle,
  Tv,
  TvMinimal,
  TvMinimalPlay,
  Type,
  TypeOutline,
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  University,
  Unlink,
  Unlink2,
  Unplug,
  Upload,
  Usb,
  User,
  UserCheck,
  UserCog,
  UserKey,
  UserLock,
  UserMinus,
  UserPen,
  UserPlus,
  UserRound,
  UserRoundArrowLeft,
  UserRoundCheck,
  UserRoundCog,
  UserRoundKey,
  UserRoundMinus,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserStar,
  UserX,
  Users,
  UsersRound,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Van,
  Variable,
  Vault,
  VectorSquare,
  Vegan,
  VenetianMask,
  Venus,
  VenusAndMars,
  Vibrate,
  VibrateOff,
  Video,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volleyball,
  Volume,
  Volume1,
  Volume2,
  VolumeOff,
  VolumeX,
  Vote,
  Wallet,
  WalletCards,
  WalletMinimal,
  Wallpaper,
  Wand,
  WandSparkles,
  Warehouse,
  WashingMachine,
  Watch,
  WavesArrowDown,
  WavesArrowUp,
  WavesHorizontal,
  WavesLadder,
  WavesVertical,
  Waypoints,
  Webcam,
  WebcamOff,
  Webhook,
  WebhookOff,
  Weight,
  WeightTilde,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiCog,
  WifiHigh,
  WifiLow,
  WifiOff,
  WifiPen,
  WifiSync,
  WifiZero,
  Wind,
  WindArrowDown,
  Wine,
  WineOff,
  Workflow,
  Worm,
  Wrench,
  WrenchOff,
  X,
  XLineTop,
  Zap,
  ZapOff,
  ZodiacAquarius,
  ZodiacAries,
  ZodiacCancer,
  ZodiacCapricorn,
  ZodiacGemini,
  ZodiacLeo,
  ZodiacLibra,
  ZodiacOphiuchus,
  ZodiacPisces,
  ZodiacSagittarius,
  ZodiacScorpio,
  ZodiacTaurus,
  ZodiacVirgo,
  ZoomIn,
  ZoomOut
}, Symbol.toStringTag, { value: 'Module' }));

const Lucide = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  AArrowDown,
  AArrowDownIcon: AArrowDown,
  AArrowUp,
  AArrowUpIcon: AArrowUp,
  ALargeSmall,
  ALargeSmallIcon: ALargeSmall,
  Accessibility,
  AccessibilityIcon: Accessibility,
  Activity,
  ActivityIcon: Activity,
  ActivitySquare: SquareActivity,
  ActivitySquareIcon: SquareActivity,
  Ad,
  AdIcon: Ad,
  AirVent,
  AirVentIcon: AirVent,
  Airplay,
  AirplayIcon: Airplay,
  AlarmCheck: AlarmClockCheck,
  AlarmCheckIcon: AlarmClockCheck,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockCheckIcon: AlarmClockCheck,
  AlarmClockIcon: AlarmClock,
  AlarmClockMinus,
  AlarmClockMinusIcon: AlarmClockMinus,
  AlarmClockOff,
  AlarmClockOffIcon: AlarmClockOff,
  AlarmClockPlus,
  AlarmClockPlusIcon: AlarmClockPlus,
  AlarmMinus: AlarmClockMinus,
  AlarmMinusIcon: AlarmClockMinus,
  AlarmPlus: AlarmClockPlus,
  AlarmPlusIcon: AlarmClockPlus,
  AlarmSmoke,
  AlarmSmokeIcon: AlarmSmoke,
  Album,
  AlbumIcon: Album,
  AlertCircle: CircleAlert,
  AlertCircleIcon: CircleAlert,
  AlertOctagon: OctagonAlert,
  AlertOctagonIcon: OctagonAlert,
  AlertTriangle: TriangleAlert,
  AlertTriangleIcon: TriangleAlert,
  AlignCenter: TextAlignCenter,
  AlignCenterHorizontal,
  AlignCenterHorizontalIcon: AlignCenterHorizontal,
  AlignCenterIcon: TextAlignCenter,
  AlignCenterVertical,
  AlignCenterVerticalIcon: AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndHorizontalIcon: AlignEndHorizontal,
  AlignEndVertical,
  AlignEndVerticalIcon: AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeCenterIcon: AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeEndIcon: AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalDistributeStartIcon: AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyCenterIcon: AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyEndIcon: AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyStartIcon: AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceAroundIcon: AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceBetweenIcon: AlignHorizontalSpaceBetween,
  AlignJustify: TextAlignJustify,
  AlignJustifyIcon: TextAlignJustify,
  AlignLeft: TextAlignStart,
  AlignLeftIcon: TextAlignStart,
  AlignRight: TextAlignEnd,
  AlignRightIcon: TextAlignEnd,
  AlignStartHorizontal,
  AlignStartHorizontalIcon: AlignStartHorizontal,
  AlignStartVertical,
  AlignStartVerticalIcon: AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeCenterIcon: AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeEndIcon: AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalDistributeStartIcon: AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyCenterIcon: AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyEndIcon: AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyStartIcon: AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceAroundIcon: AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  AlignVerticalSpaceBetweenIcon: AlignVerticalSpaceBetween,
  Ambulance,
  AmbulanceIcon: Ambulance,
  Ampersand,
  AmpersandIcon: Ampersand,
  Ampersands,
  AmpersandsIcon: Ampersands,
  Amphora,
  AmphoraIcon: Amphora,
  Anchor,
  AnchorIcon: Anchor,
  Angry,
  AngryIcon: Angry,
  Annoyed,
  AnnoyedIcon: Annoyed,
  Antenna,
  AntennaIcon: Antenna,
  Anvil,
  AnvilIcon: Anvil,
  Aperture,
  ApertureIcon: Aperture,
  AppWindow,
  AppWindowIcon: AppWindow,
  AppWindowMac,
  AppWindowMacIcon: AppWindowMac,
  Apple,
  AppleIcon: Apple,
  Archive,
  ArchiveIcon: Archive,
  ArchiveRestore,
  ArchiveRestoreIcon: ArchiveRestore,
  ArchiveX,
  ArchiveXIcon: ArchiveX,
  AreaChart: ChartArea,
  AreaChartIcon: ChartArea,
  Armchair,
  ArmchairIcon: Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigDownDashIcon: ArrowBigDownDash,
  ArrowBigDownIcon: ArrowBigDown,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigLeftDashIcon: ArrowBigLeftDash,
  ArrowBigLeftIcon: ArrowBigLeft,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigRightDashIcon: ArrowBigRightDash,
  ArrowBigRightIcon: ArrowBigRight,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowBigUpDashIcon: ArrowBigUpDash,
  ArrowBigUpIcon: ArrowBigUp,
  ArrowDown,
  ArrowDown01,
  ArrowDown01Icon: ArrowDown01,
  ArrowDown10,
  ArrowDown10Icon: ArrowDown10,
  ArrowDownAZ,
  ArrowDownAZIcon: ArrowDownAZ,
  ArrowDownAz: ArrowDownAZ,
  ArrowDownAzIcon: ArrowDownAZ,
  ArrowDownCircle: CircleArrowDown,
  ArrowDownCircleIcon: CircleArrowDown,
  ArrowDownFromLine,
  ArrowDownFromLineIcon: ArrowDownFromLine,
  ArrowDownIcon: ArrowDown,
  ArrowDownLeft,
  ArrowDownLeftFromCircle: CircleArrowOutDownLeft,
  ArrowDownLeftFromCircleIcon: CircleArrowOutDownLeft,
  ArrowDownLeftFromSquare: SquareArrowOutDownLeft,
  ArrowDownLeftFromSquareIcon: SquareArrowOutDownLeft,
  ArrowDownLeftIcon: ArrowDownLeft,
  ArrowDownLeftSquare: SquareArrowDownLeft,
  ArrowDownLeftSquareIcon: SquareArrowDownLeft,
  ArrowDownNarrowWide,
  ArrowDownNarrowWideIcon: ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownRightFromCircle: CircleArrowOutDownRight,
  ArrowDownRightFromCircleIcon: CircleArrowOutDownRight,
  ArrowDownRightFromSquare: SquareArrowOutDownRight,
  ArrowDownRightFromSquareIcon: SquareArrowOutDownRight,
  ArrowDownRightIcon: ArrowDownRight,
  ArrowDownRightSquare: SquareArrowDownRight,
  ArrowDownRightSquareIcon: SquareArrowDownRight,
  ArrowDownSquare: SquareArrowDown,
  ArrowDownSquareIcon: SquareArrowDown,
  ArrowDownToDot,
  ArrowDownToDotIcon: ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownToLineIcon: ArrowDownToLine,
  ArrowDownUp,
  ArrowDownUpIcon: ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownWideNarrowIcon: ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowDownZAIcon: ArrowDownZA,
  ArrowDownZa: ArrowDownZA,
  ArrowDownZaIcon: ArrowDownZA,
  ArrowLeft,
  ArrowLeftCircle: CircleArrowLeft,
  ArrowLeftCircleIcon: CircleArrowLeft,
  ArrowLeftFromLine,
  ArrowLeftFromLineIcon: ArrowLeftFromLine,
  ArrowLeftIcon: ArrowLeft,
  ArrowLeftRight,
  ArrowLeftRightIcon: ArrowLeftRight,
  ArrowLeftSquare: SquareArrowLeft,
  ArrowLeftSquareIcon: SquareArrowLeft,
  ArrowLeftToLine,
  ArrowLeftToLineIcon: ArrowLeftToLine,
  ArrowRight,
  ArrowRightCircle: CircleArrowRight,
  ArrowRightCircleIcon: CircleArrowRight,
  ArrowRightFromLine,
  ArrowRightFromLineIcon: ArrowRightFromLine,
  ArrowRightIcon: ArrowRight,
  ArrowRightLeft,
  ArrowRightLeftIcon: ArrowRightLeft,
  ArrowRightSquare: SquareArrowRight,
  ArrowRightSquareIcon: SquareArrowRight,
  ArrowRightToLine,
  ArrowRightToLineIcon: ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp01Icon: ArrowUp01,
  ArrowUp10,
  ArrowUp10Icon: ArrowUp10,
  ArrowUpAZ,
  ArrowUpAZIcon: ArrowUpAZ,
  ArrowUpAz: ArrowUpAZ,
  ArrowUpAzIcon: ArrowUpAZ,
  ArrowUpCircle: CircleArrowUp,
  ArrowUpCircleIcon: CircleArrowUp,
  ArrowUpDown,
  ArrowUpDownIcon: ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromDotIcon: ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpFromLineIcon: ArrowUpFromLine,
  ArrowUpIcon: ArrowUp,
  ArrowUpLeft,
  ArrowUpLeftFromCircle: CircleArrowOutUpLeft,
  ArrowUpLeftFromCircleIcon: CircleArrowOutUpLeft,
  ArrowUpLeftFromSquare: SquareArrowOutUpLeft,
  ArrowUpLeftFromSquareIcon: SquareArrowOutUpLeft,
  ArrowUpLeftIcon: ArrowUpLeft,
  ArrowUpLeftSquare: SquareArrowUpLeft,
  ArrowUpLeftSquareIcon: SquareArrowUpLeft,
  ArrowUpNarrowWide,
  ArrowUpNarrowWideIcon: ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpRightFromCircle: CircleArrowOutUpRight,
  ArrowUpRightFromCircleIcon: CircleArrowOutUpRight,
  ArrowUpRightFromSquare: SquareArrowOutUpRight,
  ArrowUpRightFromSquareIcon: SquareArrowOutUpRight,
  ArrowUpRightIcon: ArrowUpRight,
  ArrowUpRightSquare: SquareArrowUpRight,
  ArrowUpRightSquareIcon: SquareArrowUpRight,
  ArrowUpSquare: SquareArrowUp,
  ArrowUpSquareIcon: SquareArrowUp,
  ArrowUpToLine,
  ArrowUpToLineIcon: ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpWideNarrowIcon: ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowUpZAIcon: ArrowUpZA,
  ArrowUpZa: ArrowUpZA,
  ArrowUpZaIcon: ArrowUpZA,
  ArrowsUpFromLine,
  ArrowsUpFromLineIcon: ArrowsUpFromLine,
  Asterisk,
  AsteriskIcon: Asterisk,
  AsteriskSquare: SquareAsterisk,
  AsteriskSquareIcon: SquareAsterisk,
  Astroid,
  AstroidIcon: Astroid,
  AtSign,
  AtSignIcon: AtSign,
  Atom,
  AtomIcon: Atom,
  AudioLines,
  AudioLinesIcon: AudioLines,
  AudioWaveform,
  AudioWaveformIcon: AudioWaveform,
  Award,
  AwardIcon: Award,
  Axe,
  AxeIcon: Axe,
  Axis3D: Axis3d,
  Axis3DIcon: Axis3d,
  Axis3d,
  Axis3dIcon: Axis3d,
  Baby,
  BabyIcon: Baby,
  Backpack,
  BackpackIcon: Backpack,
  Badge,
  BadgeAlert,
  BadgeAlertIcon: BadgeAlert,
  BadgeCent,
  BadgeCentIcon: BadgeCent,
  BadgeCheck,
  BadgeCheckIcon: BadgeCheck,
  BadgeDollarSign,
  BadgeDollarSignIcon: BadgeDollarSign,
  BadgeEuro,
  BadgeEuroIcon: BadgeEuro,
  BadgeHelp: BadgeQuestionMark,
  BadgeHelpIcon: BadgeQuestionMark,
  BadgeIcon: Badge,
  BadgeIndianRupee,
  BadgeIndianRupeeIcon: BadgeIndianRupee,
  BadgeInfo,
  BadgeInfoIcon: BadgeInfo,
  BadgeJapaneseYen,
  BadgeJapaneseYenIcon: BadgeJapaneseYen,
  BadgeMinus,
  BadgeMinusIcon: BadgeMinus,
  BadgePercent,
  BadgePercentIcon: BadgePercent,
  BadgePlus,
  BadgePlusIcon: BadgePlus,
  BadgePoundSterling,
  BadgePoundSterlingIcon: BadgePoundSterling,
  BadgeQuestionMark,
  BadgeQuestionMarkIcon: BadgeQuestionMark,
  BadgeRussianRuble,
  BadgeRussianRubleIcon: BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeSwissFrancIcon: BadgeSwissFranc,
  BadgeTurkishLira,
  BadgeTurkishLiraIcon: BadgeTurkishLira,
  BadgeX,
  BadgeXIcon: BadgeX,
  BaggageClaim,
  BaggageClaimIcon: BaggageClaim,
  Balloon,
  BalloonIcon: Balloon,
  Ban,
  BanIcon: Ban,
  Banana,
  BananaIcon: Banana,
  Bandage,
  BandageIcon: Bandage,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowDownIcon: BanknoteArrowDown,
  BanknoteArrowUp,
  BanknoteArrowUpIcon: BanknoteArrowUp,
  BanknoteCheck,
  BanknoteCheckIcon: BanknoteCheck,
  BanknoteIcon: Banknote,
  BanknoteX,
  BanknoteXIcon: BanknoteX,
  BarChart: ChartNoAxesColumnIncreasing,
  BarChart2: ChartNoAxesColumn,
  BarChart2Icon: ChartNoAxesColumn,
  BarChart3: ChartColumn,
  BarChart3Icon: ChartColumn,
  BarChart4: ChartColumnIncreasing,
  BarChart4Icon: ChartColumnIncreasing,
  BarChartBig: ChartColumnBig,
  BarChartBigIcon: ChartColumnBig,
  BarChartHorizontal: ChartBar,
  BarChartHorizontalBig: ChartBarBig,
  BarChartHorizontalBigIcon: ChartBarBig,
  BarChartHorizontalIcon: ChartBar,
  BarChartIcon: ChartNoAxesColumnIncreasing,
  Barcode,
  BarcodeIcon: Barcode,
  Barrel,
  BarrelIcon: Barrel,
  Baseline,
  BaselineIcon: Baseline,
  Bath,
  BathIcon: Bath,
  Battery,
  BatteryCharging,
  BatteryChargingIcon: BatteryCharging,
  BatteryFull,
  BatteryFullIcon: BatteryFull,
  BatteryIcon: Battery,
  BatteryLow,
  BatteryLowIcon: BatteryLow,
  BatteryMedium,
  BatteryMediumIcon: BatteryMedium,
  BatteryPlus,
  BatteryPlusIcon: BatteryPlus,
  BatteryWarning,
  BatteryWarningIcon: BatteryWarning,
  Beaker,
  BeakerIcon: Beaker,
  Bean,
  BeanIcon: Bean,
  BeanOff,
  BeanOffIcon: BeanOff,
  Bed,
  BedDouble,
  BedDoubleIcon: BedDouble,
  BedIcon: Bed,
  BedSingle,
  BedSingleIcon: BedSingle,
  Beef,
  BeefIcon: Beef,
  BeefOff,
  BeefOffIcon: BeefOff,
  Beer,
  BeerIcon: Beer,
  BeerOff,
  BeerOffIcon: BeerOff,
  Bell,
  BellCheck,
  BellCheckIcon: BellCheck,
  BellDot,
  BellDotIcon: BellDot,
  BellElectric,
  BellElectricIcon: BellElectric,
  BellIcon: Bell,
  BellMinus,
  BellMinusIcon: BellMinus,
  BellOff,
  BellOffIcon: BellOff,
  BellPlus,
  BellPlusIcon: BellPlus,
  BellRing,
  BellRingIcon: BellRing,
  BetweenHorizonalEnd: BetweenHorizontalEnd,
  BetweenHorizonalEndIcon: BetweenHorizontalEnd,
  BetweenHorizonalStart: BetweenHorizontalStart,
  BetweenHorizonalStartIcon: BetweenHorizontalStart,
  BetweenHorizontalEnd,
  BetweenHorizontalEndIcon: BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenHorizontalStartIcon: BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalEndIcon: BetweenVerticalEnd,
  BetweenVerticalStart,
  BetweenVerticalStartIcon: BetweenVerticalStart,
  BicepsFlexed,
  BicepsFlexedIcon: BicepsFlexed,
  Bike,
  BikeIcon: Bike,
  Binary,
  BinaryIcon: Binary,
  Binoculars,
  BinocularsIcon: Binoculars,
  Biohazard,
  BiohazardIcon: Biohazard,
  Bird,
  BirdIcon: Bird,
  Birdhouse,
  BirdhouseIcon: Birdhouse,
  Bitcoin,
  BitcoinIcon: Bitcoin,
  Blend,
  BlendIcon: Blend,
  Blender,
  BlenderIcon: Blender,
  Blinds,
  BlindsIcon: Blinds,
  Blocks,
  BlocksIcon: Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothConnectedIcon: BluetoothConnected,
  BluetoothIcon: Bluetooth,
  BluetoothOff,
  BluetoothOffIcon: BluetoothOff,
  BluetoothSearching,
  BluetoothSearchingIcon: BluetoothSearching,
  Bold,
  BoldIcon: Bold,
  Bolt,
  BoltIcon: Bolt,
  Bomb,
  BombIcon: Bomb,
  Bone,
  BoneIcon: Bone,
  Book,
  BookA,
  BookAIcon: BookA,
  BookAlert,
  BookAlertIcon: BookAlert,
  BookAudio,
  BookAudioIcon: BookAudio,
  BookCheck,
  BookCheckIcon: BookCheck,
  BookCopy,
  BookCopyIcon: BookCopy,
  BookDashed,
  BookDashedIcon: BookDashed,
  BookDown,
  BookDownIcon: BookDown,
  BookHeadphones,
  BookHeadphonesIcon: BookHeadphones,
  BookHeart,
  BookHeartIcon: BookHeart,
  BookIcon: Book,
  BookImage,
  BookImageIcon: BookImage,
  BookKey,
  BookKeyIcon: BookKey,
  BookLock,
  BookLockIcon: BookLock,
  BookMarked,
  BookMarkedIcon: BookMarked,
  BookMinus,
  BookMinusIcon: BookMinus,
  BookOpen,
  BookOpenCheck,
  BookOpenCheckIcon: BookOpenCheck,
  BookOpenIcon: BookOpen,
  BookOpenText,
  BookOpenTextIcon: BookOpenText,
  BookPlus,
  BookPlusIcon: BookPlus,
  BookSearch,
  BookSearchIcon: BookSearch,
  BookTemplate: BookDashed,
  BookTemplateIcon: BookDashed,
  BookText,
  BookTextIcon: BookText,
  BookType,
  BookTypeIcon: BookType,
  BookUp,
  BookUp2,
  BookUp2Icon: BookUp2,
  BookUpIcon: BookUp,
  BookUser,
  BookUserIcon: BookUser,
  BookX,
  BookXIcon: BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkCheckIcon: BookmarkCheck,
  BookmarkIcon: Bookmark,
  BookmarkMinus,
  BookmarkMinusIcon: BookmarkMinus,
  BookmarkOff,
  BookmarkOffIcon: BookmarkOff,
  BookmarkPlus,
  BookmarkPlusIcon: BookmarkPlus,
  BookmarkX,
  BookmarkXIcon: BookmarkX,
  BoomBox,
  BoomBoxIcon: BoomBox,
  Bot,
  BotIcon: Bot,
  BotMessageSquare,
  BotMessageSquareIcon: BotMessageSquare,
  BotOff,
  BotOffIcon: BotOff,
  BottleWine,
  BottleWineIcon: BottleWine,
  BowArrow,
  BowArrowIcon: BowArrow,
  Box,
  BoxIcon: Box,
  BoxSelect: SquareDashed,
  BoxSelectIcon: SquareDashed,
  Boxes,
  BoxesIcon: Boxes,
  Braces,
  BracesIcon: Braces,
  Brackets,
  BracketsIcon: Brackets,
  Brain,
  BrainCircuit,
  BrainCircuitIcon: BrainCircuit,
  BrainCog,
  BrainCogIcon: BrainCog,
  BrainIcon: Brain,
  BrickWall,
  BrickWallFire,
  BrickWallFireIcon: BrickWallFire,
  BrickWallIcon: BrickWall,
  BrickWallShield,
  BrickWallShieldIcon: BrickWallShield,
  Briefcase,
  BriefcaseBusiness,
  BriefcaseBusinessIcon: BriefcaseBusiness,
  BriefcaseConveyorBelt,
  BriefcaseConveyorBeltIcon: BriefcaseConveyorBelt,
  BriefcaseIcon: Briefcase,
  BriefcaseMedical,
  BriefcaseMedicalIcon: BriefcaseMedical,
  BringToFront,
  BringToFrontIcon: BringToFront,
  Broccoli,
  BroccoliIcon: Broccoli,
  Brush,
  BrushCleaning,
  BrushCleaningIcon: BrushCleaning,
  BrushIcon: Brush,
  Bubbles,
  BubblesIcon: Bubbles,
  Bug,
  BugIcon: Bug,
  BugOff,
  BugOffIcon: BugOff,
  BugPlay,
  BugPlayIcon: BugPlay,
  Building,
  Building2,
  Building2Icon: Building2,
  BuildingIcon: Building,
  Bus,
  BusFront,
  BusFrontIcon: BusFront,
  BusIcon: Bus,
  Cable,
  CableCar,
  CableCarIcon: CableCar,
  CableIcon: Cable,
  Cake,
  CakeIcon: Cake,
  CakeSlice,
  CakeSliceIcon: CakeSlice,
  Calculator,
  CalculatorIcon: Calculator,
  Calendar,
  Calendar1,
  Calendar1Icon: Calendar1,
  CalendarArrowDown,
  CalendarArrowDownIcon: CalendarArrowDown,
  CalendarArrowUp,
  CalendarArrowUpIcon: CalendarArrowUp,
  CalendarCheck,
  CalendarCheck2,
  CalendarCheck2Icon: CalendarCheck2,
  CalendarCheckIcon: CalendarCheck,
  CalendarClock,
  CalendarClockIcon: CalendarClock,
  CalendarCog,
  CalendarCogIcon: CalendarCog,
  CalendarDays,
  CalendarDaysIcon: CalendarDays,
  CalendarFold,
  CalendarFoldIcon: CalendarFold,
  CalendarHeart,
  CalendarHeartIcon: CalendarHeart,
  CalendarIcon: Calendar,
  CalendarMinus,
  CalendarMinus2,
  CalendarMinus2Icon: CalendarMinus2,
  CalendarMinusIcon: CalendarMinus,
  CalendarOff,
  CalendarOffIcon: CalendarOff,
  CalendarPlus,
  CalendarPlus2,
  CalendarPlus2Icon: CalendarPlus2,
  CalendarPlusIcon: CalendarPlus,
  CalendarRange,
  CalendarRangeIcon: CalendarRange,
  CalendarSearch,
  CalendarSearchIcon: CalendarSearch,
  CalendarSync,
  CalendarSyncIcon: CalendarSync,
  CalendarX,
  CalendarX2,
  CalendarX2Icon: CalendarX2,
  CalendarXIcon: CalendarX,
  Calendars,
  CalendarsIcon: Calendars,
  Camera,
  CameraIcon: Camera,
  CameraOff,
  CameraOffIcon: CameraOff,
  CandlestickChart: ChartCandlestick,
  CandlestickChartIcon: ChartCandlestick,
  Candy,
  CandyCane,
  CandyCaneIcon: CandyCane,
  CandyIcon: Candy,
  CandyOff,
  CandyOffIcon: CandyOff,
  Cannabis,
  CannabisIcon: Cannabis,
  CannabisOff,
  CannabisOffIcon: CannabisOff,
  Captions,
  CaptionsIcon: Captions,
  CaptionsOff,
  CaptionsOffIcon: CaptionsOff,
  Car,
  CarFront,
  CarFrontIcon: CarFront,
  CarIcon: Car,
  CarTaxiFront,
  CarTaxiFrontIcon: CarTaxiFront,
  Caravan,
  CaravanIcon: Caravan,
  CardSim,
  CardSimIcon: CardSim,
  Carrot,
  CarrotIcon: Carrot,
  CaseLower,
  CaseLowerIcon: CaseLower,
  CaseSensitive,
  CaseSensitiveIcon: CaseSensitive,
  CaseUpper,
  CaseUpperIcon: CaseUpper,
  CassetteTape,
  CassetteTapeIcon: CassetteTape,
  Cast,
  CastIcon: Cast,
  Castle,
  CastleIcon: Castle,
  Cat,
  CatIcon: Cat,
  Cctv,
  CctvIcon: Cctv,
  CctvOff,
  CctvOffIcon: CctvOff,
  ChartArea,
  ChartAreaIcon: ChartArea,
  ChartBar,
  ChartBarBig,
  ChartBarBigIcon: ChartBarBig,
  ChartBarDecreasing,
  ChartBarDecreasingIcon: ChartBarDecreasing,
  ChartBarIcon: ChartBar,
  ChartBarIncreasing,
  ChartBarIncreasingIcon: ChartBarIncreasing,
  ChartBarStacked,
  ChartBarStackedIcon: ChartBarStacked,
  ChartCandlestick,
  ChartCandlestickIcon: ChartCandlestick,
  ChartColumn,
  ChartColumnBig,
  ChartColumnBigIcon: ChartColumnBig,
  ChartColumnDecreasing,
  ChartColumnDecreasingIcon: ChartColumnDecreasing,
  ChartColumnIcon: ChartColumn,
  ChartColumnIncreasing,
  ChartColumnIncreasingIcon: ChartColumnIncreasing,
  ChartColumnStacked,
  ChartColumnStackedIcon: ChartColumnStacked,
  ChartGantt,
  ChartGanttIcon: ChartGantt,
  ChartLine,
  ChartLineIcon: ChartLine,
  ChartNetwork,
  ChartNetworkIcon: ChartNetwork,
  ChartNoAxesColumn,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnDecreasingIcon: ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIcon: ChartNoAxesColumn,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesColumnIncreasingIcon: ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  ChartNoAxesCombinedIcon: ChartNoAxesCombined,
  ChartNoAxesGantt,
  ChartNoAxesGanttIcon: ChartNoAxesGantt,
  ChartPie,
  ChartPieIcon: ChartPie,
  ChartScatter,
  ChartScatterIcon: ChartScatter,
  ChartSpline,
  ChartSplineIcon: ChartSpline,
  Check,
  CheckCheck,
  CheckCheckIcon: CheckCheck,
  CheckCircle: CircleCheckBig,
  CheckCircle2: CircleCheck,
  CheckCircle2Icon: CircleCheck,
  CheckCircleIcon: CircleCheckBig,
  CheckIcon: Check,
  CheckLine,
  CheckLineIcon: CheckLine,
  CheckSquare: SquareCheckBig,
  CheckSquare2: SquareCheck,
  CheckSquare2Icon: SquareCheck,
  CheckSquareIcon: SquareCheckBig,
  ChefHat,
  ChefHatIcon: ChefHat,
  Cherry,
  CherryIcon: Cherry,
  ChessBishop,
  ChessBishopIcon: ChessBishop,
  ChessKing,
  ChessKingIcon: ChessKing,
  ChessKnight,
  ChessKnightIcon: ChessKnight,
  ChessPawn,
  ChessPawnIcon: ChessPawn,
  ChessQueen,
  ChessQueenIcon: ChessQueen,
  ChessRook,
  ChessRookIcon: ChessRook,
  ChevronDown,
  ChevronDownCircle: CircleChevronDown,
  ChevronDownCircleIcon: CircleChevronDown,
  ChevronDownIcon: ChevronDown,
  ChevronDownSquare: SquareChevronDown,
  ChevronDownSquareIcon: SquareChevronDown,
  ChevronFirst,
  ChevronFirstIcon: ChevronFirst,
  ChevronLast,
  ChevronLastIcon: ChevronLast,
  ChevronLeft,
  ChevronLeftCircle: CircleChevronLeft,
  ChevronLeftCircleIcon: CircleChevronLeft,
  ChevronLeftIcon: ChevronLeft,
  ChevronLeftSquare: SquareChevronLeft,
  ChevronLeftSquareIcon: SquareChevronLeft,
  ChevronRight,
  ChevronRightCircle: CircleChevronRight,
  ChevronRightCircleIcon: CircleChevronRight,
  ChevronRightIcon: ChevronRight,
  ChevronRightSquare: SquareChevronRight,
  ChevronRightSquareIcon: SquareChevronRight,
  ChevronUp,
  ChevronUpCircle: CircleChevronUp,
  ChevronUpCircleIcon: CircleChevronUp,
  ChevronUpIcon: ChevronUp,
  ChevronUpSquare: SquareChevronUp,
  ChevronUpSquareIcon: SquareChevronUp,
  ChevronsDown,
  ChevronsDownIcon: ChevronsDown,
  ChevronsDownUp,
  ChevronsDownUpIcon: ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftIcon: ChevronsLeft,
  ChevronsLeftRight,
  ChevronsLeftRightEllipsis,
  ChevronsLeftRightEllipsisIcon: ChevronsLeftRightEllipsis,
  ChevronsLeftRightIcon: ChevronsLeftRight,
  ChevronsRight,
  ChevronsRightIcon: ChevronsRight,
  ChevronsRightLeft,
  ChevronsRightLeftIcon: ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  ChevronsUpDownIcon: ChevronsUpDown,
  ChevronsUpIcon: ChevronsUp,
  Church,
  ChurchIcon: Church,
  Cigarette,
  CigaretteIcon: Cigarette,
  CigaretteOff,
  CigaretteOffIcon: CigaretteOff,
  Circle,
  CircleAlert,
  CircleAlertIcon: CircleAlert,
  CircleArrowDown,
  CircleArrowDownIcon: CircleArrowDown,
  CircleArrowLeft,
  CircleArrowLeftIcon: CircleArrowLeft,
  CircleArrowOutDownLeft,
  CircleArrowOutDownLeftIcon: CircleArrowOutDownLeft,
  CircleArrowOutDownRight,
  CircleArrowOutDownRightIcon: CircleArrowOutDownRight,
  CircleArrowOutUpLeft,
  CircleArrowOutUpLeftIcon: CircleArrowOutUpLeft,
  CircleArrowOutUpRight,
  CircleArrowOutUpRightIcon: CircleArrowOutUpRight,
  CircleArrowRight,
  CircleArrowRightIcon: CircleArrowRight,
  CircleArrowUp,
  CircleArrowUpIcon: CircleArrowUp,
  CircleCheck,
  CircleCheckBig,
  CircleCheckBigIcon: CircleCheckBig,
  CircleCheckIcon: CircleCheck,
  CircleChevronDown,
  CircleChevronDownIcon: CircleChevronDown,
  CircleChevronLeft,
  CircleChevronLeftIcon: CircleChevronLeft,
  CircleChevronRight,
  CircleChevronRightIcon: CircleChevronRight,
  CircleChevronUp,
  CircleChevronUpIcon: CircleChevronUp,
  CircleDashed,
  CircleDashedIcon: CircleDashed,
  CircleDivide,
  CircleDivideIcon: CircleDivide,
  CircleDollarSign,
  CircleDollarSignIcon: CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleDotDashedIcon: CircleDotDashed,
  CircleDotIcon: CircleDot,
  CircleEllipsis,
  CircleEllipsisIcon: CircleEllipsis,
  CircleEqual,
  CircleEqualIcon: CircleEqual,
  CircleFadingArrowUp,
  CircleFadingArrowUpIcon: CircleFadingArrowUp,
  CircleFadingPlus,
  CircleFadingPlusIcon: CircleFadingPlus,
  CircleGauge,
  CircleGaugeIcon: CircleGauge,
  CircleHelp: CircleQuestionMark,
  CircleHelpIcon: CircleQuestionMark,
  CircleIcon: Circle,
  CircleMinus,
  CircleMinusIcon: CircleMinus,
  CircleOff,
  CircleOffIcon: CircleOff,
  CircleParking,
  CircleParkingIcon: CircleParking,
  CircleParkingOff,
  CircleParkingOffIcon: CircleParkingOff,
  CirclePause,
  CirclePauseIcon: CirclePause,
  CirclePercent,
  CirclePercentIcon: CirclePercent,
  CirclePile,
  CirclePileIcon: CirclePile,
  CirclePlay,
  CirclePlayIcon: CirclePlay,
  CirclePlus,
  CirclePlusIcon: CirclePlus,
  CirclePoundSterling,
  CirclePoundSterlingIcon: CirclePoundSterling,
  CirclePower,
  CirclePowerIcon: CirclePower,
  CircleQuestionMark,
  CircleQuestionMarkIcon: CircleQuestionMark,
  CircleSlash,
  CircleSlash2,
  CircleSlash2Icon: CircleSlash2,
  CircleSlashIcon: CircleSlash,
  CircleSlashed: CircleSlash2,
  CircleSlashedIcon: CircleSlash2,
  CircleSmall,
  CircleSmallIcon: CircleSmall,
  CircleStar,
  CircleStarIcon: CircleStar,
  CircleStop,
  CircleStopIcon: CircleStop,
  CircleUser,
  CircleUserIcon: CircleUser,
  CircleUserRound,
  CircleUserRoundIcon: CircleUserRound,
  CircleX,
  CircleXIcon: CircleX,
  CircuitBoard,
  CircuitBoardIcon: CircuitBoard,
  Citrus,
  CitrusIcon: Citrus,
  Clapperboard,
  ClapperboardIcon: Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardCheckIcon: ClipboardCheck,
  ClipboardClock,
  ClipboardClockIcon: ClipboardClock,
  ClipboardCopy,
  ClipboardCopyIcon: ClipboardCopy,
  ClipboardEdit: ClipboardPen,
  ClipboardEditIcon: ClipboardPen,
  ClipboardIcon: Clipboard,
  ClipboardList,
  ClipboardListIcon: ClipboardList,
  ClipboardMinus,
  ClipboardMinusIcon: ClipboardMinus,
  ClipboardPaste,
  ClipboardPasteIcon: ClipboardPaste,
  ClipboardPen,
  ClipboardPenIcon: ClipboardPen,
  ClipboardPenLine,
  ClipboardPenLineIcon: ClipboardPenLine,
  ClipboardPlus,
  ClipboardPlusIcon: ClipboardPlus,
  ClipboardSignature: ClipboardPenLine,
  ClipboardSignatureIcon: ClipboardPenLine,
  ClipboardType,
  ClipboardTypeIcon: ClipboardType,
  ClipboardX,
  ClipboardXIcon: ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock10Icon: Clock10,
  Clock11,
  Clock11Icon: Clock11,
  Clock12,
  Clock12Icon: Clock12,
  Clock1Icon: Clock1,
  Clock2,
  Clock2Icon: Clock2,
  Clock3,
  Clock3Icon: Clock3,
  Clock4,
  Clock4Icon: Clock4,
  Clock5,
  Clock5Icon: Clock5,
  Clock6,
  Clock6Icon: Clock6,
  Clock7,
  Clock7Icon: Clock7,
  Clock8,
  Clock8Icon: Clock8,
  Clock9,
  Clock9Icon: Clock9,
  ClockAlert,
  ClockAlertIcon: ClockAlert,
  ClockArrowDown,
  ClockArrowDownIcon: ClockArrowDown,
  ClockArrowLeft,
  ClockArrowLeftIcon: ClockArrowLeft,
  ClockArrowRight,
  ClockArrowRightIcon: ClockArrowRight,
  ClockArrowUp,
  ClockArrowUpIcon: ClockArrowUp,
  ClockCheck,
  ClockCheckIcon: ClockCheck,
  ClockFading,
  ClockFadingIcon: ClockFading,
  ClockIcon: Clock,
  ClockPlus,
  ClockPlusIcon: ClockPlus,
  ClosedCaption,
  ClosedCaptionIcon: ClosedCaption,
  Cloud,
  CloudAlert,
  CloudAlertIcon: CloudAlert,
  CloudBackup,
  CloudBackupIcon: CloudBackup,
  CloudCheck,
  CloudCheckIcon: CloudCheck,
  CloudCog,
  CloudCogIcon: CloudCog,
  CloudDownload,
  CloudDownloadIcon: CloudDownload,
  CloudDrizzle,
  CloudDrizzleIcon: CloudDrizzle,
  CloudFog,
  CloudFogIcon: CloudFog,
  CloudHail,
  CloudHailIcon: CloudHail,
  CloudIcon: Cloud,
  CloudLightning,
  CloudLightningIcon: CloudLightning,
  CloudMoon,
  CloudMoonIcon: CloudMoon,
  CloudMoonRain,
  CloudMoonRainIcon: CloudMoonRain,
  CloudOff,
  CloudOffIcon: CloudOff,
  CloudRain,
  CloudRainIcon: CloudRain,
  CloudRainWind,
  CloudRainWindIcon: CloudRainWind,
  CloudSnow,
  CloudSnowIcon: CloudSnow,
  CloudSun,
  CloudSunIcon: CloudSun,
  CloudSunRain,
  CloudSunRainIcon: CloudSunRain,
  CloudSync,
  CloudSyncIcon: CloudSync,
  CloudUpload,
  CloudUploadIcon: CloudUpload,
  Cloudy,
  CloudyIcon: Cloudy,
  Clover,
  CloverIcon: Clover,
  Club,
  ClubIcon: Club,
  Code,
  Code2: CodeXml,
  Code2Icon: CodeXml,
  CodeIcon: Code,
  CodeSquare: SquareCode,
  CodeSquareIcon: SquareCode,
  CodeXml,
  CodeXmlIcon: CodeXml,
  Coffee,
  CoffeeIcon: Coffee,
  Cog,
  CogIcon: Cog,
  Coins,
  CoinsIcon: Coins,
  Columns: Columns2,
  Columns2,
  Columns2Icon: Columns2,
  Columns3,
  Columns3Cog,
  Columns3CogIcon: Columns3Cog,
  Columns3Icon: Columns3,
  Columns4,
  Columns4Icon: Columns4,
  ColumnsIcon: Columns2,
  ColumnsSettings: Columns3Cog,
  ColumnsSettingsIcon: Columns3Cog,
  Combine,
  CombineIcon: Combine,
  Command,
  CommandIcon: Command,
  Compass,
  CompassIcon: Compass,
  Component,
  ComponentIcon: Component,
  Computer,
  ComputerIcon: Computer,
  ConciergeBell,
  ConciergeBellIcon: ConciergeBell,
  Cone,
  ConeIcon: Cone,
  Construction,
  ConstructionIcon: Construction,
  Contact,
  Contact2: ContactRound,
  Contact2Icon: ContactRound,
  ContactIcon: Contact,
  ContactRound,
  ContactRoundIcon: ContactRound,
  Container,
  ContainerIcon: Container,
  Contrast,
  ContrastIcon: Contrast,
  Cookie,
  CookieIcon: Cookie,
  CookingPot,
  CookingPotIcon: CookingPot,
  Copy,
  CopyCheck,
  CopyCheckIcon: CopyCheck,
  CopyIcon: Copy,
  CopyMinus,
  CopyMinusIcon: CopyMinus,
  CopyPlus,
  CopyPlusIcon: CopyPlus,
  CopySlash,
  CopySlashIcon: CopySlash,
  CopyX,
  CopyXIcon: CopyX,
  Copyleft,
  CopyleftIcon: Copyleft,
  Copyright,
  CopyrightIcon: Copyright,
  CornerDownLeft,
  CornerDownLeftIcon: CornerDownLeft,
  CornerDownRight,
  CornerDownRightIcon: CornerDownRight,
  CornerLeftDown,
  CornerLeftDownIcon: CornerLeftDown,
  CornerLeftUp,
  CornerLeftUpIcon: CornerLeftUp,
  CornerRightDown,
  CornerRightDownIcon: CornerRightDown,
  CornerRightUp,
  CornerRightUpIcon: CornerRightUp,
  CornerUpLeft,
  CornerUpLeftIcon: CornerUpLeft,
  CornerUpRight,
  CornerUpRightIcon: CornerUpRight,
  Cpu,
  CpuIcon: Cpu,
  CreativeCommons,
  CreativeCommonsIcon: CreativeCommons,
  CreditCard,
  CreditCardIcon: CreditCard,
  Croissant,
  CroissantIcon: Croissant,
  Crop,
  CropIcon: Crop,
  Cross,
  CrossIcon: Cross,
  Crosshair,
  CrosshairIcon: Crosshair,
  Crown,
  CrownIcon: Crown,
  Cuboid,
  CuboidIcon: Cuboid,
  CupSoda,
  CupSodaIcon: CupSoda,
  CurlyBraces: Braces,
  CurlyBracesIcon: Braces,
  Currency,
  CurrencyIcon: Currency,
  Cylinder,
  CylinderIcon: Cylinder,
  Dam,
  DamIcon: Dam,
  Database,
  DatabaseBackup,
  DatabaseBackupIcon: DatabaseBackup,
  DatabaseIcon: Database,
  DatabaseSearch,
  DatabaseSearchIcon: DatabaseSearch,
  DatabaseZap,
  DatabaseZapIcon: DatabaseZap,
  DecimalsArrowLeft,
  DecimalsArrowLeftIcon: DecimalsArrowLeft,
  DecimalsArrowRight,
  DecimalsArrowRightIcon: DecimalsArrowRight,
  Delete,
  DeleteIcon: Delete,
  Dessert,
  DessertIcon: Dessert,
  Diameter,
  DiameterIcon: Diameter,
  Diamond,
  DiamondIcon: Diamond,
  DiamondMinus,
  DiamondMinusIcon: DiamondMinus,
  DiamondPercent,
  DiamondPercentIcon: DiamondPercent,
  DiamondPlus,
  DiamondPlusIcon: DiamondPlus,
  Dice1,
  Dice1Icon: Dice1,
  Dice2,
  Dice2Icon: Dice2,
  Dice3,
  Dice3Icon: Dice3,
  Dice4,
  Dice4Icon: Dice4,
  Dice5,
  Dice5Icon: Dice5,
  Dice6,
  Dice6Icon: Dice6,
  Dices,
  DicesIcon: Dices,
  Diff,
  DiffIcon: Diff,
  Disc,
  Disc2,
  Disc2Icon: Disc2,
  Disc3,
  Disc3Icon: Disc3,
  DiscAlbum,
  DiscAlbumIcon: DiscAlbum,
  DiscIcon: Disc,
  Divide,
  DivideCircle: CircleDivide,
  DivideCircleIcon: CircleDivide,
  DivideIcon: Divide,
  DivideSquare: SquareDivide,
  DivideSquareIcon: SquareDivide,
  Dna,
  DnaIcon: Dna,
  DnaOff,
  DnaOffIcon: DnaOff,
  Dock,
  DockIcon: Dock,
  Dog,
  DogIcon: Dog,
  DollarSign,
  DollarSignIcon: DollarSign,
  Donut,
  DonutIcon: Donut,
  DoorClosed,
  DoorClosedIcon: DoorClosed,
  DoorClosedLocked,
  DoorClosedLockedIcon: DoorClosedLocked,
  DoorOpen,
  DoorOpenIcon: DoorOpen,
  Dot,
  DotIcon: Dot,
  DotSquare: SquareDot,
  DotSquareIcon: SquareDot,
  Download,
  DownloadCloud: CloudDownload,
  DownloadCloudIcon: CloudDownload,
  DownloadIcon: Download,
  DraftingCompass,
  DraftingCompassIcon: DraftingCompass,
  Drama,
  DramaIcon: Drama,
  Drill,
  DrillIcon: Drill,
  Drone,
  DroneIcon: Drone,
  Droplet,
  DropletIcon: Droplet,
  DropletOff,
  DropletOffIcon: DropletOff,
  Droplets,
  DropletsIcon: Droplets,
  Drum,
  DrumIcon: Drum,
  Drumstick,
  DrumstickIcon: Drumstick,
  Dumbbell,
  DumbbellIcon: Dumbbell,
  Ear,
  EarIcon: Ear,
  EarOff,
  EarOffIcon: EarOff,
  Earth,
  EarthIcon: Earth,
  EarthLock,
  EarthLockIcon: EarthLock,
  Eclipse,
  EclipseIcon: Eclipse,
  Edit: SquarePen,
  Edit2: Pen,
  Edit2Icon: Pen,
  Edit3: PenLine,
  Edit3Icon: PenLine,
  EditIcon: SquarePen,
  Egg,
  EggFried,
  EggFriedIcon: EggFried,
  EggIcon: Egg,
  EggOff,
  EggOffIcon: EggOff,
  Ellipse,
  EllipseIcon: Ellipse,
  Ellipsis,
  EllipsisIcon: Ellipsis,
  EllipsisVertical,
  EllipsisVerticalIcon: EllipsisVertical,
  Equal,
  EqualApproximately,
  EqualApproximatelyIcon: EqualApproximately,
  EqualIcon: Equal,
  EqualNot,
  EqualNotIcon: EqualNot,
  EqualSquare: SquareEqual,
  EqualSquareIcon: SquareEqual,
  Eraser,
  EraserIcon: Eraser,
  EthernetPort,
  EthernetPortIcon: EthernetPort,
  Euro,
  EuroIcon: Euro,
  EvCharger,
  EvChargerIcon: EvCharger,
  Expand,
  ExpandIcon: Expand,
  ExternalLink,
  ExternalLinkIcon: ExternalLink,
  Eye,
  EyeClosed,
  EyeClosedIcon: EyeClosed,
  EyeDashed,
  EyeDashedIcon: EyeDashed,
  EyeIcon: Eye,
  EyeOff,
  EyeOffIcon: EyeOff,
  Factory,
  FactoryIcon: Factory,
  Fan,
  FanIcon: Fan,
  FastForward,
  FastForwardIcon: FastForward,
  Feather,
  FeatherIcon: Feather,
  Fence,
  FenceIcon: Fence,
  FerrisWheel,
  FerrisWheelIcon: FerrisWheel,
  File,
  FileArchive,
  FileArchiveIcon: FileArchive,
  FileAudio: FileHeadphone,
  FileAudio2: FileHeadphone,
  FileAudio2Icon: FileHeadphone,
  FileAudioIcon: FileHeadphone,
  FileAxis3D: FileAxis3d,
  FileAxis3DIcon: FileAxis3d,
  FileAxis3d,
  FileAxis3dIcon: FileAxis3d,
  FileBadge,
  FileBadge2: FileBadge,
  FileBadge2Icon: FileBadge,
  FileBadgeIcon: FileBadge,
  FileBarChart: FileChartColumnIncreasing,
  FileBarChart2: FileChartColumn,
  FileBarChart2Icon: FileChartColumn,
  FileBarChartIcon: FileChartColumnIncreasing,
  FileBox,
  FileBoxIcon: FileBox,
  FileBraces,
  FileBracesCorner,
  FileBracesCornerIcon: FileBracesCorner,
  FileBracesIcon: FileBraces,
  FileChartColumn,
  FileChartColumnIcon: FileChartColumn,
  FileChartColumnIncreasing,
  FileChartColumnIncreasingIcon: FileChartColumnIncreasing,
  FileChartLine,
  FileChartLineIcon: FileChartLine,
  FileChartPie,
  FileChartPieIcon: FileChartPie,
  FileCheck,
  FileCheck2: FileCheckCorner,
  FileCheck2Icon: FileCheckCorner,
  FileCheckCorner,
  FileCheckCornerIcon: FileCheckCorner,
  FileCheckIcon: FileCheck,
  FileClock,
  FileClockIcon: FileClock,
  FileCode,
  FileCode2: FileCodeCorner,
  FileCode2Icon: FileCodeCorner,
  FileCodeCorner,
  FileCodeCornerIcon: FileCodeCorner,
  FileCodeIcon: FileCode,
  FileCog,
  FileCog2: FileCog,
  FileCog2Icon: FileCog,
  FileCogIcon: FileCog,
  FileDiff,
  FileDiffIcon: FileDiff,
  FileDigit,
  FileDigitIcon: FileDigit,
  FileDown,
  FileDownIcon: FileDown,
  FileEdit: FilePen,
  FileEditIcon: FilePen,
  FileExclamationPoint,
  FileExclamationPointIcon: FileExclamationPoint,
  FileHeadphone,
  FileHeadphoneIcon: FileHeadphone,
  FileHeart,
  FileHeartIcon: FileHeart,
  FileIcon: File,
  FileImage,
  FileImageIcon: FileImage,
  FileInput,
  FileInputIcon: FileInput,
  FileJson: FileBraces,
  FileJson2: FileBracesCorner,
  FileJson2Icon: FileBracesCorner,
  FileJsonIcon: FileBraces,
  FileKey,
  FileKey2: FileKey,
  FileKey2Icon: FileKey,
  FileKeyIcon: FileKey,
  FileLineChart: FileChartLine,
  FileLineChartIcon: FileChartLine,
  FileLock,
  FileLock2: FileLock,
  FileLock2Icon: FileLock,
  FileLockIcon: FileLock,
  FileMinus,
  FileMinus2: FileMinusCorner,
  FileMinus2Icon: FileMinusCorner,
  FileMinusCorner,
  FileMinusCornerIcon: FileMinusCorner,
  FileMinusIcon: FileMinus,
  FileMusic,
  FileMusicIcon: FileMusic,
  FileOutput,
  FileOutputIcon: FileOutput,
  FilePen,
  FilePenIcon: FilePen,
  FilePenLine,
  FilePenLineIcon: FilePenLine,
  FilePieChart: FileChartPie,
  FilePieChartIcon: FileChartPie,
  FilePlay,
  FilePlayIcon: FilePlay,
  FilePlus,
  FilePlus2: FilePlusCorner,
  FilePlus2Icon: FilePlusCorner,
  FilePlusCorner,
  FilePlusCornerIcon: FilePlusCorner,
  FilePlusIcon: FilePlus,
  FileQuestion: FileQuestionMark,
  FileQuestionIcon: FileQuestionMark,
  FileQuestionMark,
  FileQuestionMarkIcon: FileQuestionMark,
  FileScan,
  FileScanIcon: FileScan,
  FileSearch,
  FileSearch2: FileSearchCorner,
  FileSearch2Icon: FileSearchCorner,
  FileSearchCorner,
  FileSearchCornerIcon: FileSearchCorner,
  FileSearchIcon: FileSearch,
  FileSignal,
  FileSignalIcon: FileSignal,
  FileSignature: FilePenLine,
  FileSignatureIcon: FilePenLine,
  FileSliders,
  FileSlidersIcon: FileSliders,
  FileSpreadsheet,
  FileSpreadsheetIcon: FileSpreadsheet,
  FileStack,
  FileStackIcon: FileStack,
  FileSymlink,
  FileSymlinkIcon: FileSymlink,
  FileTerminal,
  FileTerminalIcon: FileTerminal,
  FileText,
  FileTextIcon: FileText,
  FileType,
  FileType2: FileTypeCorner,
  FileType2Icon: FileTypeCorner,
  FileTypeCorner,
  FileTypeCornerIcon: FileTypeCorner,
  FileTypeIcon: FileType,
  FileUp,
  FileUpIcon: FileUp,
  FileUser,
  FileUserIcon: FileUser,
  FileVideo: FilePlay,
  FileVideo2: FileVideoCamera,
  FileVideo2Icon: FileVideoCamera,
  FileVideoCamera,
  FileVideoCameraIcon: FileVideoCamera,
  FileVideoIcon: FilePlay,
  FileVolume,
  FileVolume2: FileSignal,
  FileVolume2Icon: FileSignal,
  FileVolumeIcon: FileVolume,
  FileWarning: FileExclamationPoint,
  FileWarningIcon: FileExclamationPoint,
  FileX,
  FileX2: FileXCorner,
  FileX2Icon: FileXCorner,
  FileXCorner,
  FileXCornerIcon: FileXCorner,
  FileXIcon: FileX,
  Files,
  FilesIcon: Files,
  Film,
  FilmIcon: Film,
  Filter: Funnel,
  FilterIcon: Funnel,
  FilterX: FunnelX,
  FilterXIcon: FunnelX,
  Fingerprint: FingerprintPattern,
  FingerprintIcon: FingerprintPattern,
  FingerprintPattern,
  FingerprintPatternIcon: FingerprintPattern,
  FireExtinguisher,
  FireExtinguisherIcon: FireExtinguisher,
  Fish,
  FishIcon: Fish,
  FishOff,
  FishOffIcon: FishOff,
  FishSymbol,
  FishSymbolIcon: FishSymbol,
  FishingHook,
  FishingHookIcon: FishingHook,
  FishingRod,
  FishingRodIcon: FishingRod,
  Flag,
  FlagIcon: Flag,
  FlagOff,
  FlagOffIcon: FlagOff,
  FlagTriangleLeft,
  FlagTriangleLeftIcon: FlagTriangleLeft,
  FlagTriangleRight,
  FlagTriangleRightIcon: FlagTriangleRight,
  Flame,
  FlameIcon: Flame,
  FlameKindling,
  FlameKindlingIcon: FlameKindling,
  Flashlight,
  FlashlightIcon: Flashlight,
  FlashlightOff,
  FlashlightOffIcon: FlashlightOff,
  FlaskConical,
  FlaskConicalIcon: FlaskConical,
  FlaskConicalOff,
  FlaskConicalOffIcon: FlaskConicalOff,
  FlaskRound,
  FlaskRoundIcon: FlaskRound,
  FlipHorizontal: SquareCenterlineDashedHorizontal,
  FlipHorizontal2,
  FlipHorizontal2Icon: FlipHorizontal2,
  FlipHorizontalIcon: SquareCenterlineDashedHorizontal,
  FlipVertical: SquareCenterlineDashedVertical,
  FlipVertical2,
  FlipVertical2Icon: FlipVertical2,
  FlipVerticalIcon: SquareCenterlineDashedVertical,
  Flower,
  Flower2,
  Flower2Icon: Flower2,
  FlowerIcon: Flower,
  Focus,
  FocusIcon: Focus,
  FoldHorizontal,
  FoldHorizontalIcon: FoldHorizontal,
  FoldVertical,
  FoldVerticalIcon: FoldVertical,
  Folder,
  FolderArchive,
  FolderArchiveIcon: FolderArchive,
  FolderBookmark,
  FolderBookmarkIcon: FolderBookmark,
  FolderCheck,
  FolderCheckIcon: FolderCheck,
  FolderClock,
  FolderClockIcon: FolderClock,
  FolderClosed,
  FolderClosedIcon: FolderClosed,
  FolderCode,
  FolderCodeIcon: FolderCode,
  FolderCog,
  FolderCog2: FolderCog,
  FolderCog2Icon: FolderCog,
  FolderCogIcon: FolderCog,
  FolderDot,
  FolderDotIcon: FolderDot,
  FolderDown,
  FolderDownIcon: FolderDown,
  FolderEdit: FolderPen,
  FolderEditIcon: FolderPen,
  FolderGit,
  FolderGit2,
  FolderGit2Icon: FolderGit2,
  FolderGitIcon: FolderGit,
  FolderHeart,
  FolderHeartIcon: FolderHeart,
  FolderIcon: Folder,
  FolderInput,
  FolderInputIcon: FolderInput,
  FolderKanban,
  FolderKanbanIcon: FolderKanban,
  FolderKey,
  FolderKeyIcon: FolderKey,
  FolderLock,
  FolderLockIcon: FolderLock,
  FolderMinus,
  FolderMinusIcon: FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOpenDotIcon: FolderOpenDot,
  FolderOpenIcon: FolderOpen,
  FolderOutput,
  FolderOutputIcon: FolderOutput,
  FolderPen,
  FolderPenIcon: FolderPen,
  FolderPlus,
  FolderPlusIcon: FolderPlus,
  FolderRoot,
  FolderRootIcon: FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSearch2Icon: FolderSearch2,
  FolderSearchIcon: FolderSearch,
  FolderSymlink,
  FolderSymlinkIcon: FolderSymlink,
  FolderSync,
  FolderSyncIcon: FolderSync,
  FolderTree,
  FolderTreeIcon: FolderTree,
  FolderUp,
  FolderUpIcon: FolderUp,
  FolderX,
  FolderXIcon: FolderX,
  Folders,
  FoldersIcon: Folders,
  Footprints,
  FootprintsIcon: Footprints,
  ForkKnife: Utensils,
  ForkKnifeCrossed: UtensilsCrossed,
  ForkKnifeCrossedIcon: UtensilsCrossed,
  ForkKnifeIcon: Utensils,
  Forklift,
  ForkliftIcon: Forklift,
  Form,
  FormIcon: Form,
  FormInput: RectangleEllipsis,
  FormInputIcon: RectangleEllipsis,
  Forward,
  ForwardIcon: Forward,
  Frame,
  FrameIcon: Frame,
  Frown,
  FrownIcon: Frown,
  Fuel,
  FuelIcon: Fuel,
  Fullscreen,
  FullscreenIcon: Fullscreen,
  FunctionSquare: SquareFunction,
  FunctionSquareIcon: SquareFunction,
  Funnel,
  FunnelIcon: Funnel,
  FunnelPlus,
  FunnelPlusIcon: FunnelPlus,
  FunnelX,
  FunnelXIcon: FunnelX,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryHorizontalEndIcon: GalleryHorizontalEnd,
  GalleryHorizontalIcon: GalleryHorizontal,
  GalleryThumbnails,
  GalleryThumbnailsIcon: GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  GalleryVerticalEndIcon: GalleryVerticalEnd,
  GalleryVerticalIcon: GalleryVertical,
  Gamepad,
  Gamepad2,
  Gamepad2Icon: Gamepad2,
  GamepadDirectional,
  GamepadDirectionalIcon: GamepadDirectional,
  GamepadIcon: Gamepad,
  GanttChart: ChartNoAxesGantt,
  GanttChartIcon: ChartNoAxesGantt,
  GanttChartSquare: SquareChartGantt,
  GanttChartSquareIcon: SquareChartGantt,
  Gauge,
  GaugeCircle: CircleGauge,
  GaugeCircleIcon: CircleGauge,
  GaugeIcon: Gauge,
  Gavel,
  GavelIcon: Gavel,
  Gem,
  GemIcon: Gem,
  GeorgianLari,
  GeorgianLariIcon: GeorgianLari,
  Ghost,
  GhostIcon: Ghost,
  Gift,
  GiftIcon: Gift,
  GitBranch,
  GitBranchIcon: GitBranch,
  GitBranchMinus,
  GitBranchMinusIcon: GitBranchMinus,
  GitBranchPlus,
  GitBranchPlusIcon: GitBranchPlus,
  GitCommit: GitCommitHorizontal,
  GitCommitHorizontal,
  GitCommitHorizontalIcon: GitCommitHorizontal,
  GitCommitIcon: GitCommitHorizontal,
  GitCommitVertical,
  GitCommitVerticalIcon: GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitCompareArrowsIcon: GitCompareArrows,
  GitCompareIcon: GitCompare,
  GitFork,
  GitForkIcon: GitFork,
  GitGraph,
  GitGraphIcon: GitGraph,
  GitMerge,
  GitMergeConflict,
  GitMergeConflictIcon: GitMergeConflict,
  GitMergeIcon: GitMerge,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestArrowIcon: GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestClosedIcon: GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestCreateArrowIcon: GitPullRequestCreateArrow,
  GitPullRequestCreateIcon: GitPullRequestCreate,
  GitPullRequestDraft,
  GitPullRequestDraftIcon: GitPullRequestDraft,
  GitPullRequestIcon: GitPullRequest,
  GlassWater,
  GlassWaterIcon: GlassWater,
  Glasses,
  GlassesIcon: Glasses,
  Globe,
  Globe2: Earth,
  Globe2Icon: Earth,
  GlobeCheck,
  GlobeCheckIcon: GlobeCheck,
  GlobeIcon: Globe,
  GlobeLock,
  GlobeLockIcon: GlobeLock,
  GlobeOff,
  GlobeOffIcon: GlobeOff,
  GlobeX,
  GlobeXIcon: GlobeX,
  Goal,
  GoalIcon: Goal,
  Gpu,
  GpuIcon: Gpu,
  Grab: HandGrab,
  GrabIcon: HandGrab,
  GraduationCap,
  GraduationCapIcon: GraduationCap,
  Grape,
  GrapeIcon: Grape,
  Grid: Grid3x3,
  Grid2X2: Grid2x2,
  Grid2X2Check: Grid2x2Check,
  Grid2X2CheckIcon: Grid2x2Check,
  Grid2X2Icon: Grid2x2,
  Grid2X2Plus: Grid2x2Plus,
  Grid2X2PlusIcon: Grid2x2Plus,
  Grid2X2X: Grid2x2X,
  Grid2X2XIcon: Grid2x2X,
  Grid2x2,
  Grid2x2Check,
  Grid2x2CheckIcon: Grid2x2Check,
  Grid2x2Icon: Grid2x2,
  Grid2x2Plus,
  Grid2x2PlusIcon: Grid2x2Plus,
  Grid2x2X,
  Grid2x2XIcon: Grid2x2X,
  Grid3X3: Grid3x3,
  Grid3X3Icon: Grid3x3,
  Grid3x2,
  Grid3x2Icon: Grid3x2,
  Grid3x3,
  Grid3x3Icon: Grid3x3,
  GridIcon: Grid3x3,
  Grip,
  GripHorizontal,
  GripHorizontalIcon: GripHorizontal,
  GripIcon: Grip,
  GripVertical,
  GripVerticalIcon: GripVertical,
  Group,
  GroupIcon: Group,
  Guitar,
  GuitarIcon: Guitar,
  Ham,
  HamIcon: Ham,
  Hamburger,
  HamburgerIcon: Hamburger,
  Hammer,
  HammerIcon: Hammer,
  Hand,
  HandCoins,
  HandCoinsIcon: HandCoins,
  HandFist,
  HandFistIcon: HandFist,
  HandGrab,
  HandGrabIcon: HandGrab,
  HandHeart,
  HandHeartIcon: HandHeart,
  HandHelping,
  HandHelpingIcon: HandHelping,
  HandIcon: Hand,
  HandMetal,
  HandMetalIcon: HandMetal,
  HandPlatter,
  HandPlatterIcon: HandPlatter,
  Handbag,
  HandbagIcon: Handbag,
  Handshake,
  HandshakeIcon: Handshake,
  HardDrive,
  HardDriveDownload,
  HardDriveDownloadIcon: HardDriveDownload,
  HardDriveIcon: HardDrive,
  HardDriveUpload,
  HardDriveUploadIcon: HardDriveUpload,
  HardHat,
  HardHatIcon: HardHat,
  Hash,
  HashIcon: Hash,
  HatGlasses,
  HatGlassesIcon: HatGlasses,
  Haze,
  HazeIcon: Haze,
  Hd,
  HdIcon: Hd,
  HdmiPort,
  HdmiPortIcon: HdmiPort,
  Heading,
  Heading1,
  Heading1Icon: Heading1,
  Heading2,
  Heading2Icon: Heading2,
  Heading3,
  Heading3Icon: Heading3,
  Heading4,
  Heading4Icon: Heading4,
  Heading5,
  Heading5Icon: Heading5,
  Heading6,
  Heading6Icon: Heading6,
  HeadingIcon: Heading,
  HeadphoneOff,
  HeadphoneOffIcon: HeadphoneOff,
  Headphones,
  HeadphonesIcon: Headphones,
  Headset,
  HeadsetIcon: Headset,
  Heart,
  HeartCrack,
  HeartCrackIcon: HeartCrack,
  HeartHandshake,
  HeartHandshakeIcon: HeartHandshake,
  HeartIcon: Heart,
  HeartMinus,
  HeartMinusIcon: HeartMinus,
  HeartOff,
  HeartOffIcon: HeartOff,
  HeartPlus,
  HeartPlusIcon: HeartPlus,
  HeartPulse,
  HeartPulseIcon: HeartPulse,
  HeartX,
  HeartXIcon: HeartX,
  Heater,
  HeaterIcon: Heater,
  Helicopter,
  HelicopterIcon: Helicopter,
  HelpCircle: CircleQuestionMark,
  HelpCircleIcon: CircleQuestionMark,
  HelpingHand: HandHelping,
  HelpingHandIcon: HandHelping,
  Hexagon,
  HexagonIcon: Hexagon,
  Highlighter,
  HighlighterIcon: Highlighter,
  History,
  HistoryIcon: History,
  Home: House,
  HomeIcon: House,
  Hop,
  HopIcon: Hop,
  HopOff,
  HopOffIcon: HopOff,
  Hospital,
  HospitalIcon: Hospital,
  Hotel,
  HotelIcon: Hotel,
  Hourglass,
  HourglassIcon: Hourglass,
  House,
  HouseHeart,
  HouseHeartIcon: HouseHeart,
  HouseIcon: House,
  HousePlug,
  HousePlugIcon: HousePlug,
  HousePlus,
  HousePlusIcon: HousePlus,
  HouseWifi,
  HouseWifiIcon: HouseWifi,
  IceCream: IceCreamCone,
  IceCream2: IceCreamBowl,
  IceCream2Icon: IceCreamBowl,
  IceCreamBowl,
  IceCreamBowlIcon: IceCreamBowl,
  IceCreamCone,
  IceCreamConeIcon: IceCreamCone,
  IceCreamIcon: IceCreamCone,
  Icon: $$Icon$1,
  IdCard,
  IdCardIcon: IdCard,
  IdCardLanyard,
  IdCardLanyardIcon: IdCardLanyard,
  Image,
  ImageDown,
  ImageDownIcon: ImageDown,
  ImageIcon: Image,
  ImageMinus,
  ImageMinusIcon: ImageMinus,
  ImageOff,
  ImageOffIcon: ImageOff,
  ImagePlay,
  ImagePlayIcon: ImagePlay,
  ImagePlus,
  ImagePlusIcon: ImagePlus,
  ImageUp,
  ImageUpIcon: ImageUp,
  ImageUpscale,
  ImageUpscaleIcon: ImageUpscale,
  Images,
  ImagesIcon: Images,
  Import,
  ImportIcon: Import,
  Inbox,
  InboxIcon: Inbox,
  Indent: ListIndentIncrease,
  IndentDecrease: ListIndentDecrease,
  IndentDecreaseIcon: ListIndentDecrease,
  IndentIcon: ListIndentIncrease,
  IndentIncrease: ListIndentIncrease,
  IndentIncreaseIcon: ListIndentIncrease,
  IndianRupee,
  IndianRupeeIcon: IndianRupee,
  Infinity,
  InfinityIcon: Infinity,
  Info,
  InfoIcon: Info,
  Inspect: SquareMousePointer,
  InspectIcon: SquareMousePointer,
  InspectionPanel,
  InspectionPanelIcon: InspectionPanel,
  Italic,
  ItalicIcon: Italic,
  IterationCcw,
  IterationCcwIcon: IterationCcw,
  IterationCw,
  IterationCwIcon: IterationCw,
  JapaneseYen,
  JapaneseYenIcon: JapaneseYen,
  Joystick,
  JoystickIcon: Joystick,
  Kanban,
  KanbanIcon: Kanban,
  KanbanSquare: SquareKanban,
  KanbanSquareDashed: SquareDashedKanban,
  KanbanSquareDashedIcon: SquareDashedKanban,
  KanbanSquareIcon: SquareKanban,
  Kayak,
  KayakIcon: Kayak,
  Key,
  KeyIcon: Key,
  KeyRound,
  KeyRoundIcon: KeyRound,
  KeySquare,
  KeySquareIcon: KeySquare,
  Keyboard,
  KeyboardIcon: Keyboard,
  KeyboardMusic,
  KeyboardMusicIcon: KeyboardMusic,
  KeyboardOff,
  KeyboardOffIcon: KeyboardOff,
  Lamp,
  LampCeiling,
  LampCeilingIcon: LampCeiling,
  LampDesk,
  LampDeskIcon: LampDesk,
  LampFloor,
  LampFloorIcon: LampFloor,
  LampIcon: Lamp,
  LampWallDown,
  LampWallDownIcon: LampWallDown,
  LampWallUp,
  LampWallUpIcon: LampWallUp,
  LandPlot,
  LandPlotIcon: LandPlot,
  Landmark,
  LandmarkIcon: Landmark,
  Languages,
  LanguagesIcon: Languages,
  Laptop,
  Laptop2: LaptopMinimal,
  Laptop2Icon: LaptopMinimal,
  LaptopIcon: Laptop,
  LaptopMinimal,
  LaptopMinimalCheck,
  LaptopMinimalCheckIcon: LaptopMinimalCheck,
  LaptopMinimalIcon: LaptopMinimal,
  Lasso,
  LassoIcon: Lasso,
  LassoSelect,
  LassoSelectIcon: LassoSelect,
  Laugh,
  LaughIcon: Laugh,
  Layers,
  Layers2,
  Layers2Icon: Layers2,
  Layers3: Layers,
  Layers3Icon: Layers,
  LayersIcon: Layers,
  LayersMinus,
  LayersMinusIcon: LayersMinus,
  LayersPlus,
  LayersPlusIcon: LayersPlus,
  Layout: PanelsTopLeft,
  LayoutDashboard,
  LayoutDashboardIcon: LayoutDashboard,
  LayoutGrid,
  LayoutGridIcon: LayoutGrid,
  LayoutIcon: PanelsTopLeft,
  LayoutList,
  LayoutListIcon: LayoutList,
  LayoutPanelLeft,
  LayoutPanelLeftIcon: LayoutPanelLeft,
  LayoutPanelTop,
  LayoutPanelTopIcon: LayoutPanelTop,
  LayoutTemplate,
  LayoutTemplateIcon: LayoutTemplate,
  Leaf,
  LeafIcon: Leaf,
  LeafyGreen,
  LeafyGreenIcon: LeafyGreen,
  Lectern,
  LecternIcon: Lectern,
  LensConcave,
  LensConcaveIcon: LensConcave,
  LensConvex,
  LensConvexIcon: LensConvex,
  LetterText: TextInitial,
  LetterTextIcon: TextInitial,
  Library,
  LibraryBig,
  LibraryBigIcon: LibraryBig,
  LibraryIcon: Library,
  LibrarySquare: SquareLibrary,
  LibrarySquareIcon: SquareLibrary,
  LifeBuoy,
  LifeBuoyIcon: LifeBuoy,
  Ligature,
  LigatureIcon: Ligature,
  Lightbulb,
  LightbulbIcon: Lightbulb,
  LightbulbOff,
  LightbulbOffIcon: LightbulbOff,
  LineChart: ChartLine,
  LineChartIcon: ChartLine,
  LineDotRightHorizontal,
  LineDotRightHorizontalIcon: LineDotRightHorizontal,
  LineSquiggle,
  LineSquiggleIcon: LineSquiggle,
  LineStyle,
  LineStyleIcon: LineStyle,
  Link,
  Link2,
  Link2Icon: Link2,
  Link2Off,
  Link2OffIcon: Link2Off,
  LinkIcon: Link,
  List,
  ListCheck,
  ListCheckIcon: ListCheck,
  ListChecks,
  ListChecksIcon: ListChecks,
  ListChevronsDownUp,
  ListChevronsDownUpIcon: ListChevronsDownUp,
  ListChevronsUpDown,
  ListChevronsUpDownIcon: ListChevronsUpDown,
  ListCollapse,
  ListCollapseIcon: ListCollapse,
  ListEnd,
  ListEndIcon: ListEnd,
  ListFilter,
  ListFilterIcon: ListFilter,
  ListFilterPlus,
  ListFilterPlusIcon: ListFilterPlus,
  ListIcon: List,
  ListIndentDecrease,
  ListIndentDecreaseIcon: ListIndentDecrease,
  ListIndentIncrease,
  ListIndentIncreaseIcon: ListIndentIncrease,
  ListMinus,
  ListMinusIcon: ListMinus,
  ListMusic,
  ListMusicIcon: ListMusic,
  ListOrdered,
  ListOrderedIcon: ListOrdered,
  ListPlus,
  ListPlusIcon: ListPlus,
  ListRestart,
  ListRestartIcon: ListRestart,
  ListSortAscending,
  ListSortAscendingIcon: ListSortAscending,
  ListSortDescending,
  ListSortDescendingIcon: ListSortDescending,
  ListStart,
  ListStartIcon: ListStart,
  ListTodo,
  ListTodoIcon: ListTodo,
  ListTree,
  ListTreeIcon: ListTree,
  ListVideo,
  ListVideoIcon: ListVideo,
  ListX,
  ListXIcon: ListX,
  Loader,
  Loader2: LoaderCircle,
  Loader2Icon: LoaderCircle,
  LoaderCircle,
  LoaderCircleIcon: LoaderCircle,
  LoaderIcon: Loader,
  LoaderPinwheel,
  LoaderPinwheelIcon: LoaderPinwheel,
  Locate,
  LocateFixed,
  LocateFixedIcon: LocateFixed,
  LocateIcon: Locate,
  LocateOff,
  LocateOffIcon: LocateOff,
  LocationEdit: MapPinPen,
  LocationEditIcon: MapPinPen,
  Lock,
  LockIcon: Lock,
  LockKeyhole,
  LockKeyholeIcon: LockKeyhole,
  LockKeyholeOpen,
  LockKeyholeOpenIcon: LockKeyholeOpen,
  LockOpen,
  LockOpenIcon: LockOpen,
  LogIn,
  LogInIcon: LogIn,
  LogOut,
  LogOutIcon: LogOut,
  Logs,
  LogsIcon: Logs,
  Lollipop,
  LollipopIcon: Lollipop,
  LucideAArrowDown: AArrowDown,
  LucideAArrowUp: AArrowUp,
  LucideALargeSmall: ALargeSmall,
  LucideAccessibility: Accessibility,
  LucideActivity: Activity,
  LucideActivitySquare: SquareActivity,
  LucideAd: Ad,
  LucideAirVent: AirVent,
  LucideAirplay: Airplay,
  LucideAlarmCheck: AlarmClockCheck,
  LucideAlarmClock: AlarmClock,
  LucideAlarmClockCheck: AlarmClockCheck,
  LucideAlarmClockMinus: AlarmClockMinus,
  LucideAlarmClockOff: AlarmClockOff,
  LucideAlarmClockPlus: AlarmClockPlus,
  LucideAlarmMinus: AlarmClockMinus,
  LucideAlarmPlus: AlarmClockPlus,
  LucideAlarmSmoke: AlarmSmoke,
  LucideAlbum: Album,
  LucideAlertCircle: CircleAlert,
  LucideAlertOctagon: OctagonAlert,
  LucideAlertTriangle: TriangleAlert,
  LucideAlignCenter: TextAlignCenter,
  LucideAlignCenterHorizontal: AlignCenterHorizontal,
  LucideAlignCenterVertical: AlignCenterVertical,
  LucideAlignEndHorizontal: AlignEndHorizontal,
  LucideAlignEndVertical: AlignEndVertical,
  LucideAlignHorizontalDistributeCenter: AlignHorizontalDistributeCenter,
  LucideAlignHorizontalDistributeEnd: AlignHorizontalDistributeEnd,
  LucideAlignHorizontalDistributeStart: AlignHorizontalDistributeStart,
  LucideAlignHorizontalJustifyCenter: AlignHorizontalJustifyCenter,
  LucideAlignHorizontalJustifyEnd: AlignHorizontalJustifyEnd,
  LucideAlignHorizontalJustifyStart: AlignHorizontalJustifyStart,
  LucideAlignHorizontalSpaceAround: AlignHorizontalSpaceAround,
  LucideAlignHorizontalSpaceBetween: AlignHorizontalSpaceBetween,
  LucideAlignJustify: TextAlignJustify,
  LucideAlignLeft: TextAlignStart,
  LucideAlignRight: TextAlignEnd,
  LucideAlignStartHorizontal: AlignStartHorizontal,
  LucideAlignStartVertical: AlignStartVertical,
  LucideAlignVerticalDistributeCenter: AlignVerticalDistributeCenter,
  LucideAlignVerticalDistributeEnd: AlignVerticalDistributeEnd,
  LucideAlignVerticalDistributeStart: AlignVerticalDistributeStart,
  LucideAlignVerticalJustifyCenter: AlignVerticalJustifyCenter,
  LucideAlignVerticalJustifyEnd: AlignVerticalJustifyEnd,
  LucideAlignVerticalJustifyStart: AlignVerticalJustifyStart,
  LucideAlignVerticalSpaceAround: AlignVerticalSpaceAround,
  LucideAlignVerticalSpaceBetween: AlignVerticalSpaceBetween,
  LucideAmbulance: Ambulance,
  LucideAmpersand: Ampersand,
  LucideAmpersands: Ampersands,
  LucideAmphora: Amphora,
  LucideAnchor: Anchor,
  LucideAngry: Angry,
  LucideAnnoyed: Annoyed,
  LucideAntenna: Antenna,
  LucideAnvil: Anvil,
  LucideAperture: Aperture,
  LucideAppWindow: AppWindow,
  LucideAppWindowMac: AppWindowMac,
  LucideApple: Apple,
  LucideArchive: Archive,
  LucideArchiveRestore: ArchiveRestore,
  LucideArchiveX: ArchiveX,
  LucideAreaChart: ChartArea,
  LucideArmchair: Armchair,
  LucideArrowBigDown: ArrowBigDown,
  LucideArrowBigDownDash: ArrowBigDownDash,
  LucideArrowBigLeft: ArrowBigLeft,
  LucideArrowBigLeftDash: ArrowBigLeftDash,
  LucideArrowBigRight: ArrowBigRight,
  LucideArrowBigRightDash: ArrowBigRightDash,
  LucideArrowBigUp: ArrowBigUp,
  LucideArrowBigUpDash: ArrowBigUpDash,
  LucideArrowDown: ArrowDown,
  LucideArrowDown01: ArrowDown01,
  LucideArrowDown10: ArrowDown10,
  LucideArrowDownAZ: ArrowDownAZ,
  LucideArrowDownAz: ArrowDownAZ,
  LucideArrowDownCircle: CircleArrowDown,
  LucideArrowDownFromLine: ArrowDownFromLine,
  LucideArrowDownLeft: ArrowDownLeft,
  LucideArrowDownLeftFromCircle: CircleArrowOutDownLeft,
  LucideArrowDownLeftFromSquare: SquareArrowOutDownLeft,
  LucideArrowDownLeftSquare: SquareArrowDownLeft,
  LucideArrowDownNarrowWide: ArrowDownNarrowWide,
  LucideArrowDownRight: ArrowDownRight,
  LucideArrowDownRightFromCircle: CircleArrowOutDownRight,
  LucideArrowDownRightFromSquare: SquareArrowOutDownRight,
  LucideArrowDownRightSquare: SquareArrowDownRight,
  LucideArrowDownSquare: SquareArrowDown,
  LucideArrowDownToDot: ArrowDownToDot,
  LucideArrowDownToLine: ArrowDownToLine,
  LucideArrowDownUp: ArrowDownUp,
  LucideArrowDownWideNarrow: ArrowDownWideNarrow,
  LucideArrowDownZA: ArrowDownZA,
  LucideArrowDownZa: ArrowDownZA,
  LucideArrowLeft: ArrowLeft,
  LucideArrowLeftCircle: CircleArrowLeft,
  LucideArrowLeftFromLine: ArrowLeftFromLine,
  LucideArrowLeftRight: ArrowLeftRight,
  LucideArrowLeftSquare: SquareArrowLeft,
  LucideArrowLeftToLine: ArrowLeftToLine,
  LucideArrowRight: ArrowRight,
  LucideArrowRightCircle: CircleArrowRight,
  LucideArrowRightFromLine: ArrowRightFromLine,
  LucideArrowRightLeft: ArrowRightLeft,
  LucideArrowRightSquare: SquareArrowRight,
  LucideArrowRightToLine: ArrowRightToLine,
  LucideArrowUp: ArrowUp,
  LucideArrowUp01: ArrowUp01,
  LucideArrowUp10: ArrowUp10,
  LucideArrowUpAZ: ArrowUpAZ,
  LucideArrowUpAz: ArrowUpAZ,
  LucideArrowUpCircle: CircleArrowUp,
  LucideArrowUpDown: ArrowUpDown,
  LucideArrowUpFromDot: ArrowUpFromDot,
  LucideArrowUpFromLine: ArrowUpFromLine,
  LucideArrowUpLeft: ArrowUpLeft,
  LucideArrowUpLeftFromCircle: CircleArrowOutUpLeft,
  LucideArrowUpLeftFromSquare: SquareArrowOutUpLeft,
  LucideArrowUpLeftSquare: SquareArrowUpLeft,
  LucideArrowUpNarrowWide: ArrowUpNarrowWide,
  LucideArrowUpRight: ArrowUpRight,
  LucideArrowUpRightFromCircle: CircleArrowOutUpRight,
  LucideArrowUpRightFromSquare: SquareArrowOutUpRight,
  LucideArrowUpRightSquare: SquareArrowUpRight,
  LucideArrowUpSquare: SquareArrowUp,
  LucideArrowUpToLine: ArrowUpToLine,
  LucideArrowUpWideNarrow: ArrowUpWideNarrow,
  LucideArrowUpZA: ArrowUpZA,
  LucideArrowUpZa: ArrowUpZA,
  LucideArrowsUpFromLine: ArrowsUpFromLine,
  LucideAsterisk: Asterisk,
  LucideAsteriskSquare: SquareAsterisk,
  LucideAstroid: Astroid,
  LucideAtSign: AtSign,
  LucideAtom: Atom,
  LucideAudioLines: AudioLines,
  LucideAudioWaveform: AudioWaveform,
  LucideAward: Award,
  LucideAxe: Axe,
  LucideAxis3D: Axis3d,
  LucideAxis3d: Axis3d,
  LucideBaby: Baby,
  LucideBackpack: Backpack,
  LucideBadge: Badge,
  LucideBadgeAlert: BadgeAlert,
  LucideBadgeCent: BadgeCent,
  LucideBadgeCheck: BadgeCheck,
  LucideBadgeDollarSign: BadgeDollarSign,
  LucideBadgeEuro: BadgeEuro,
  LucideBadgeHelp: BadgeQuestionMark,
  LucideBadgeIndianRupee: BadgeIndianRupee,
  LucideBadgeInfo: BadgeInfo,
  LucideBadgeJapaneseYen: BadgeJapaneseYen,
  LucideBadgeMinus: BadgeMinus,
  LucideBadgePercent: BadgePercent,
  LucideBadgePlus: BadgePlus,
  LucideBadgePoundSterling: BadgePoundSterling,
  LucideBadgeQuestionMark: BadgeQuestionMark,
  LucideBadgeRussianRuble: BadgeRussianRuble,
  LucideBadgeSwissFranc: BadgeSwissFranc,
  LucideBadgeTurkishLira: BadgeTurkishLira,
  LucideBadgeX: BadgeX,
  LucideBaggageClaim: BaggageClaim,
  LucideBalloon: Balloon,
  LucideBan: Ban,
  LucideBanana: Banana,
  LucideBandage: Bandage,
  LucideBanknote: Banknote,
  LucideBanknoteArrowDown: BanknoteArrowDown,
  LucideBanknoteArrowUp: BanknoteArrowUp,
  LucideBanknoteCheck: BanknoteCheck,
  LucideBanknoteX: BanknoteX,
  LucideBarChart: ChartNoAxesColumnIncreasing,
  LucideBarChart2: ChartNoAxesColumn,
  LucideBarChart3: ChartColumn,
  LucideBarChart4: ChartColumnIncreasing,
  LucideBarChartBig: ChartColumnBig,
  LucideBarChartHorizontal: ChartBar,
  LucideBarChartHorizontalBig: ChartBarBig,
  LucideBarcode: Barcode,
  LucideBarrel: Barrel,
  LucideBaseline: Baseline,
  LucideBath: Bath,
  LucideBattery: Battery,
  LucideBatteryCharging: BatteryCharging,
  LucideBatteryFull: BatteryFull,
  LucideBatteryLow: BatteryLow,
  LucideBatteryMedium: BatteryMedium,
  LucideBatteryPlus: BatteryPlus,
  LucideBatteryWarning: BatteryWarning,
  LucideBeaker: Beaker,
  LucideBean: Bean,
  LucideBeanOff: BeanOff,
  LucideBed: Bed,
  LucideBedDouble: BedDouble,
  LucideBedSingle: BedSingle,
  LucideBeef: Beef,
  LucideBeefOff: BeefOff,
  LucideBeer: Beer,
  LucideBeerOff: BeerOff,
  LucideBell: Bell,
  LucideBellCheck: BellCheck,
  LucideBellDot: BellDot,
  LucideBellElectric: BellElectric,
  LucideBellMinus: BellMinus,
  LucideBellOff: BellOff,
  LucideBellPlus: BellPlus,
  LucideBellRing: BellRing,
  LucideBetweenHorizonalEnd: BetweenHorizontalEnd,
  LucideBetweenHorizonalStart: BetweenHorizontalStart,
  LucideBetweenHorizontalEnd: BetweenHorizontalEnd,
  LucideBetweenHorizontalStart: BetweenHorizontalStart,
  LucideBetweenVerticalEnd: BetweenVerticalEnd,
  LucideBetweenVerticalStart: BetweenVerticalStart,
  LucideBicepsFlexed: BicepsFlexed,
  LucideBike: Bike,
  LucideBinary: Binary,
  LucideBinoculars: Binoculars,
  LucideBiohazard: Biohazard,
  LucideBird: Bird,
  LucideBirdhouse: Birdhouse,
  LucideBitcoin: Bitcoin,
  LucideBlend: Blend,
  LucideBlender: Blender,
  LucideBlinds: Blinds,
  LucideBlocks: Blocks,
  LucideBluetooth: Bluetooth,
  LucideBluetoothConnected: BluetoothConnected,
  LucideBluetoothOff: BluetoothOff,
  LucideBluetoothSearching: BluetoothSearching,
  LucideBold: Bold,
  LucideBolt: Bolt,
  LucideBomb: Bomb,
  LucideBone: Bone,
  LucideBook: Book,
  LucideBookA: BookA,
  LucideBookAlert: BookAlert,
  LucideBookAudio: BookAudio,
  LucideBookCheck: BookCheck,
  LucideBookCopy: BookCopy,
  LucideBookDashed: BookDashed,
  LucideBookDown: BookDown,
  LucideBookHeadphones: BookHeadphones,
  LucideBookHeart: BookHeart,
  LucideBookImage: BookImage,
  LucideBookKey: BookKey,
  LucideBookLock: BookLock,
  LucideBookMarked: BookMarked,
  LucideBookMinus: BookMinus,
  LucideBookOpen: BookOpen,
  LucideBookOpenCheck: BookOpenCheck,
  LucideBookOpenText: BookOpenText,
  LucideBookPlus: BookPlus,
  LucideBookSearch: BookSearch,
  LucideBookTemplate: BookDashed,
  LucideBookText: BookText,
  LucideBookType: BookType,
  LucideBookUp: BookUp,
  LucideBookUp2: BookUp2,
  LucideBookUser: BookUser,
  LucideBookX: BookX,
  LucideBookmark: Bookmark,
  LucideBookmarkCheck: BookmarkCheck,
  LucideBookmarkMinus: BookmarkMinus,
  LucideBookmarkOff: BookmarkOff,
  LucideBookmarkPlus: BookmarkPlus,
  LucideBookmarkX: BookmarkX,
  LucideBoomBox: BoomBox,
  LucideBot: Bot,
  LucideBotMessageSquare: BotMessageSquare,
  LucideBotOff: BotOff,
  LucideBottleWine: BottleWine,
  LucideBowArrow: BowArrow,
  LucideBox: Box,
  LucideBoxSelect: SquareDashed,
  LucideBoxes: Boxes,
  LucideBraces: Braces,
  LucideBrackets: Brackets,
  LucideBrain: Brain,
  LucideBrainCircuit: BrainCircuit,
  LucideBrainCog: BrainCog,
  LucideBrickWall: BrickWall,
  LucideBrickWallFire: BrickWallFire,
  LucideBrickWallShield: BrickWallShield,
  LucideBriefcase: Briefcase,
  LucideBriefcaseBusiness: BriefcaseBusiness,
  LucideBriefcaseConveyorBelt: BriefcaseConveyorBelt,
  LucideBriefcaseMedical: BriefcaseMedical,
  LucideBringToFront: BringToFront,
  LucideBroccoli: Broccoli,
  LucideBrush: Brush,
  LucideBrushCleaning: BrushCleaning,
  LucideBubbles: Bubbles,
  LucideBug: Bug,
  LucideBugOff: BugOff,
  LucideBugPlay: BugPlay,
  LucideBuilding: Building,
  LucideBuilding2: Building2,
  LucideBus: Bus,
  LucideBusFront: BusFront,
  LucideCable: Cable,
  LucideCableCar: CableCar,
  LucideCake: Cake,
  LucideCakeSlice: CakeSlice,
  LucideCalculator: Calculator,
  LucideCalendar: Calendar,
  LucideCalendar1: Calendar1,
  LucideCalendarArrowDown: CalendarArrowDown,
  LucideCalendarArrowUp: CalendarArrowUp,
  LucideCalendarCheck: CalendarCheck,
  LucideCalendarCheck2: CalendarCheck2,
  LucideCalendarClock: CalendarClock,
  LucideCalendarCog: CalendarCog,
  LucideCalendarDays: CalendarDays,
  LucideCalendarFold: CalendarFold,
  LucideCalendarHeart: CalendarHeart,
  LucideCalendarMinus: CalendarMinus,
  LucideCalendarMinus2: CalendarMinus2,
  LucideCalendarOff: CalendarOff,
  LucideCalendarPlus: CalendarPlus,
  LucideCalendarPlus2: CalendarPlus2,
  LucideCalendarRange: CalendarRange,
  LucideCalendarSearch: CalendarSearch,
  LucideCalendarSync: CalendarSync,
  LucideCalendarX: CalendarX,
  LucideCalendarX2: CalendarX2,
  LucideCalendars: Calendars,
  LucideCamera: Camera,
  LucideCameraOff: CameraOff,
  LucideCandlestickChart: ChartCandlestick,
  LucideCandy: Candy,
  LucideCandyCane: CandyCane,
  LucideCandyOff: CandyOff,
  LucideCannabis: Cannabis,
  LucideCannabisOff: CannabisOff,
  LucideCaptions: Captions,
  LucideCaptionsOff: CaptionsOff,
  LucideCar: Car,
  LucideCarFront: CarFront,
  LucideCarTaxiFront: CarTaxiFront,
  LucideCaravan: Caravan,
  LucideCardSim: CardSim,
  LucideCarrot: Carrot,
  LucideCaseLower: CaseLower,
  LucideCaseSensitive: CaseSensitive,
  LucideCaseUpper: CaseUpper,
  LucideCassetteTape: CassetteTape,
  LucideCast: Cast,
  LucideCastle: Castle,
  LucideCat: Cat,
  LucideCctv: Cctv,
  LucideCctvOff: CctvOff,
  LucideChartArea: ChartArea,
  LucideChartBar: ChartBar,
  LucideChartBarBig: ChartBarBig,
  LucideChartBarDecreasing: ChartBarDecreasing,
  LucideChartBarIncreasing: ChartBarIncreasing,
  LucideChartBarStacked: ChartBarStacked,
  LucideChartCandlestick: ChartCandlestick,
  LucideChartColumn: ChartColumn,
  LucideChartColumnBig: ChartColumnBig,
  LucideChartColumnDecreasing: ChartColumnDecreasing,
  LucideChartColumnIncreasing: ChartColumnIncreasing,
  LucideChartColumnStacked: ChartColumnStacked,
  LucideChartGantt: ChartGantt,
  LucideChartLine: ChartLine,
  LucideChartNetwork: ChartNetwork,
  LucideChartNoAxesColumn: ChartNoAxesColumn,
  LucideChartNoAxesColumnDecreasing: ChartNoAxesColumnDecreasing,
  LucideChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
  LucideChartNoAxesCombined: ChartNoAxesCombined,
  LucideChartNoAxesGantt: ChartNoAxesGantt,
  LucideChartPie: ChartPie,
  LucideChartScatter: ChartScatter,
  LucideChartSpline: ChartSpline,
  LucideCheck: Check,
  LucideCheckCheck: CheckCheck,
  LucideCheckCircle: CircleCheckBig,
  LucideCheckCircle2: CircleCheck,
  LucideCheckLine: CheckLine,
  LucideCheckSquare: SquareCheckBig,
  LucideCheckSquare2: SquareCheck,
  LucideChefHat: ChefHat,
  LucideCherry: Cherry,
  LucideChessBishop: ChessBishop,
  LucideChessKing: ChessKing,
  LucideChessKnight: ChessKnight,
  LucideChessPawn: ChessPawn,
  LucideChessQueen: ChessQueen,
  LucideChessRook: ChessRook,
  LucideChevronDown: ChevronDown,
  LucideChevronDownCircle: CircleChevronDown,
  LucideChevronDownSquare: SquareChevronDown,
  LucideChevronFirst: ChevronFirst,
  LucideChevronLast: ChevronLast,
  LucideChevronLeft: ChevronLeft,
  LucideChevronLeftCircle: CircleChevronLeft,
  LucideChevronLeftSquare: SquareChevronLeft,
  LucideChevronRight: ChevronRight,
  LucideChevronRightCircle: CircleChevronRight,
  LucideChevronRightSquare: SquareChevronRight,
  LucideChevronUp: ChevronUp,
  LucideChevronUpCircle: CircleChevronUp,
  LucideChevronUpSquare: SquareChevronUp,
  LucideChevronsDown: ChevronsDown,
  LucideChevronsDownUp: ChevronsDownUp,
  LucideChevronsLeft: ChevronsLeft,
  LucideChevronsLeftRight: ChevronsLeftRight,
  LucideChevronsLeftRightEllipsis: ChevronsLeftRightEllipsis,
  LucideChevronsRight: ChevronsRight,
  LucideChevronsRightLeft: ChevronsRightLeft,
  LucideChevronsUp: ChevronsUp,
  LucideChevronsUpDown: ChevronsUpDown,
  LucideChurch: Church,
  LucideCigarette: Cigarette,
  LucideCigaretteOff: CigaretteOff,
  LucideCircle: Circle,
  LucideCircleAlert: CircleAlert,
  LucideCircleArrowDown: CircleArrowDown,
  LucideCircleArrowLeft: CircleArrowLeft,
  LucideCircleArrowOutDownLeft: CircleArrowOutDownLeft,
  LucideCircleArrowOutDownRight: CircleArrowOutDownRight,
  LucideCircleArrowOutUpLeft: CircleArrowOutUpLeft,
  LucideCircleArrowOutUpRight: CircleArrowOutUpRight,
  LucideCircleArrowRight: CircleArrowRight,
  LucideCircleArrowUp: CircleArrowUp,
  LucideCircleCheck: CircleCheck,
  LucideCircleCheckBig: CircleCheckBig,
  LucideCircleChevronDown: CircleChevronDown,
  LucideCircleChevronLeft: CircleChevronLeft,
  LucideCircleChevronRight: CircleChevronRight,
  LucideCircleChevronUp: CircleChevronUp,
  LucideCircleDashed: CircleDashed,
  LucideCircleDivide: CircleDivide,
  LucideCircleDollarSign: CircleDollarSign,
  LucideCircleDot: CircleDot,
  LucideCircleDotDashed: CircleDotDashed,
  LucideCircleEllipsis: CircleEllipsis,
  LucideCircleEqual: CircleEqual,
  LucideCircleFadingArrowUp: CircleFadingArrowUp,
  LucideCircleFadingPlus: CircleFadingPlus,
  LucideCircleGauge: CircleGauge,
  LucideCircleHelp: CircleQuestionMark,
  LucideCircleMinus: CircleMinus,
  LucideCircleOff: CircleOff,
  LucideCircleParking: CircleParking,
  LucideCircleParkingOff: CircleParkingOff,
  LucideCirclePause: CirclePause,
  LucideCirclePercent: CirclePercent,
  LucideCirclePile: CirclePile,
  LucideCirclePlay: CirclePlay,
  LucideCirclePlus: CirclePlus,
  LucideCirclePoundSterling: CirclePoundSterling,
  LucideCirclePower: CirclePower,
  LucideCircleQuestionMark: CircleQuestionMark,
  LucideCircleSlash: CircleSlash,
  LucideCircleSlash2: CircleSlash2,
  LucideCircleSlashed: CircleSlash2,
  LucideCircleSmall: CircleSmall,
  LucideCircleStar: CircleStar,
  LucideCircleStop: CircleStop,
  LucideCircleUser: CircleUser,
  LucideCircleUserRound: CircleUserRound,
  LucideCircleX: CircleX,
  LucideCircuitBoard: CircuitBoard,
  LucideCitrus: Citrus,
  LucideClapperboard: Clapperboard,
  LucideClipboard: Clipboard,
  LucideClipboardCheck: ClipboardCheck,
  LucideClipboardClock: ClipboardClock,
  LucideClipboardCopy: ClipboardCopy,
  LucideClipboardEdit: ClipboardPen,
  LucideClipboardList: ClipboardList,
  LucideClipboardMinus: ClipboardMinus,
  LucideClipboardPaste: ClipboardPaste,
  LucideClipboardPen: ClipboardPen,
  LucideClipboardPenLine: ClipboardPenLine,
  LucideClipboardPlus: ClipboardPlus,
  LucideClipboardSignature: ClipboardPenLine,
  LucideClipboardType: ClipboardType,
  LucideClipboardX: ClipboardX,
  LucideClock: Clock,
  LucideClock1: Clock1,
  LucideClock10: Clock10,
  LucideClock11: Clock11,
  LucideClock12: Clock12,
  LucideClock2: Clock2,
  LucideClock3: Clock3,
  LucideClock4: Clock4,
  LucideClock5: Clock5,
  LucideClock6: Clock6,
  LucideClock7: Clock7,
  LucideClock8: Clock8,
  LucideClock9: Clock9,
  LucideClockAlert: ClockAlert,
  LucideClockArrowDown: ClockArrowDown,
  LucideClockArrowLeft: ClockArrowLeft,
  LucideClockArrowRight: ClockArrowRight,
  LucideClockArrowUp: ClockArrowUp,
  LucideClockCheck: ClockCheck,
  LucideClockFading: ClockFading,
  LucideClockPlus: ClockPlus,
  LucideClosedCaption: ClosedCaption,
  LucideCloud: Cloud,
  LucideCloudAlert: CloudAlert,
  LucideCloudBackup: CloudBackup,
  LucideCloudCheck: CloudCheck,
  LucideCloudCog: CloudCog,
  LucideCloudDownload: CloudDownload,
  LucideCloudDrizzle: CloudDrizzle,
  LucideCloudFog: CloudFog,
  LucideCloudHail: CloudHail,
  LucideCloudLightning: CloudLightning,
  LucideCloudMoon: CloudMoon,
  LucideCloudMoonRain: CloudMoonRain,
  LucideCloudOff: CloudOff,
  LucideCloudRain: CloudRain,
  LucideCloudRainWind: CloudRainWind,
  LucideCloudSnow: CloudSnow,
  LucideCloudSun: CloudSun,
  LucideCloudSunRain: CloudSunRain,
  LucideCloudSync: CloudSync,
  LucideCloudUpload: CloudUpload,
  LucideCloudy: Cloudy,
  LucideClover: Clover,
  LucideClub: Club,
  LucideCode: Code,
  LucideCode2: CodeXml,
  LucideCodeSquare: SquareCode,
  LucideCodeXml: CodeXml,
  LucideCoffee: Coffee,
  LucideCog: Cog,
  LucideCoins: Coins,
  LucideColumns: Columns2,
  LucideColumns2: Columns2,
  LucideColumns3: Columns3,
  LucideColumns3Cog: Columns3Cog,
  LucideColumns4: Columns4,
  LucideColumnsSettings: Columns3Cog,
  LucideCombine: Combine,
  LucideCommand: Command,
  LucideCompass: Compass,
  LucideComponent: Component,
  LucideComputer: Computer,
  LucideConciergeBell: ConciergeBell,
  LucideCone: Cone,
  LucideConstruction: Construction,
  LucideContact: Contact,
  LucideContact2: ContactRound,
  LucideContactRound: ContactRound,
  LucideContainer: Container,
  LucideContrast: Contrast,
  LucideCookie: Cookie,
  LucideCookingPot: CookingPot,
  LucideCopy: Copy,
  LucideCopyCheck: CopyCheck,
  LucideCopyMinus: CopyMinus,
  LucideCopyPlus: CopyPlus,
  LucideCopySlash: CopySlash,
  LucideCopyX: CopyX,
  LucideCopyleft: Copyleft,
  LucideCopyright: Copyright,
  LucideCornerDownLeft: CornerDownLeft,
  LucideCornerDownRight: CornerDownRight,
  LucideCornerLeftDown: CornerLeftDown,
  LucideCornerLeftUp: CornerLeftUp,
  LucideCornerRightDown: CornerRightDown,
  LucideCornerRightUp: CornerRightUp,
  LucideCornerUpLeft: CornerUpLeft,
  LucideCornerUpRight: CornerUpRight,
  LucideCpu: Cpu,
  LucideCreativeCommons: CreativeCommons,
  LucideCreditCard: CreditCard,
  LucideCroissant: Croissant,
  LucideCrop: Crop,
  LucideCross: Cross,
  LucideCrosshair: Crosshair,
  LucideCrown: Crown,
  LucideCuboid: Cuboid,
  LucideCupSoda: CupSoda,
  LucideCurlyBraces: Braces,
  LucideCurrency: Currency,
  LucideCylinder: Cylinder,
  LucideDam: Dam,
  LucideDatabase: Database,
  LucideDatabaseBackup: DatabaseBackup,
  LucideDatabaseSearch: DatabaseSearch,
  LucideDatabaseZap: DatabaseZap,
  LucideDecimalsArrowLeft: DecimalsArrowLeft,
  LucideDecimalsArrowRight: DecimalsArrowRight,
  LucideDelete: Delete,
  LucideDessert: Dessert,
  LucideDiameter: Diameter,
  LucideDiamond: Diamond,
  LucideDiamondMinus: DiamondMinus,
  LucideDiamondPercent: DiamondPercent,
  LucideDiamondPlus: DiamondPlus,
  LucideDice1: Dice1,
  LucideDice2: Dice2,
  LucideDice3: Dice3,
  LucideDice4: Dice4,
  LucideDice5: Dice5,
  LucideDice6: Dice6,
  LucideDices: Dices,
  LucideDiff: Diff,
  LucideDisc: Disc,
  LucideDisc2: Disc2,
  LucideDisc3: Disc3,
  LucideDiscAlbum: DiscAlbum,
  LucideDivide: Divide,
  LucideDivideCircle: CircleDivide,
  LucideDivideSquare: SquareDivide,
  LucideDna: Dna,
  LucideDnaOff: DnaOff,
  LucideDock: Dock,
  LucideDog: Dog,
  LucideDollarSign: DollarSign,
  LucideDonut: Donut,
  LucideDoorClosed: DoorClosed,
  LucideDoorClosedLocked: DoorClosedLocked,
  LucideDoorOpen: DoorOpen,
  LucideDot: Dot,
  LucideDotSquare: SquareDot,
  LucideDownload: Download,
  LucideDownloadCloud: CloudDownload,
  LucideDraftingCompass: DraftingCompass,
  LucideDrama: Drama,
  LucideDrill: Drill,
  LucideDrone: Drone,
  LucideDroplet: Droplet,
  LucideDropletOff: DropletOff,
  LucideDroplets: Droplets,
  LucideDrum: Drum,
  LucideDrumstick: Drumstick,
  LucideDumbbell: Dumbbell,
  LucideEar: Ear,
  LucideEarOff: EarOff,
  LucideEarth: Earth,
  LucideEarthLock: EarthLock,
  LucideEclipse: Eclipse,
  LucideEdit: SquarePen,
  LucideEdit2: Pen,
  LucideEdit3: PenLine,
  LucideEgg: Egg,
  LucideEggFried: EggFried,
  LucideEggOff: EggOff,
  LucideEllipse: Ellipse,
  LucideEllipsis: Ellipsis,
  LucideEllipsisVertical: EllipsisVertical,
  LucideEqual: Equal,
  LucideEqualApproximately: EqualApproximately,
  LucideEqualNot: EqualNot,
  LucideEqualSquare: SquareEqual,
  LucideEraser: Eraser,
  LucideEthernetPort: EthernetPort,
  LucideEuro: Euro,
  LucideEvCharger: EvCharger,
  LucideExpand: Expand,
  LucideExternalLink: ExternalLink,
  LucideEye: Eye,
  LucideEyeClosed: EyeClosed,
  LucideEyeDashed: EyeDashed,
  LucideEyeOff: EyeOff,
  LucideFactory: Factory,
  LucideFan: Fan,
  LucideFastForward: FastForward,
  LucideFeather: Feather,
  LucideFence: Fence,
  LucideFerrisWheel: FerrisWheel,
  LucideFile: File,
  LucideFileArchive: FileArchive,
  LucideFileAudio: FileHeadphone,
  LucideFileAudio2: FileHeadphone,
  LucideFileAxis3D: FileAxis3d,
  LucideFileAxis3d: FileAxis3d,
  LucideFileBadge: FileBadge,
  LucideFileBadge2: FileBadge,
  LucideFileBarChart: FileChartColumnIncreasing,
  LucideFileBarChart2: FileChartColumn,
  LucideFileBox: FileBox,
  LucideFileBraces: FileBraces,
  LucideFileBracesCorner: FileBracesCorner,
  LucideFileChartColumn: FileChartColumn,
  LucideFileChartColumnIncreasing: FileChartColumnIncreasing,
  LucideFileChartLine: FileChartLine,
  LucideFileChartPie: FileChartPie,
  LucideFileCheck: FileCheck,
  LucideFileCheck2: FileCheckCorner,
  LucideFileCheckCorner: FileCheckCorner,
  LucideFileClock: FileClock,
  LucideFileCode: FileCode,
  LucideFileCode2: FileCodeCorner,
  LucideFileCodeCorner: FileCodeCorner,
  LucideFileCog: FileCog,
  LucideFileCog2: FileCog,
  LucideFileDiff: FileDiff,
  LucideFileDigit: FileDigit,
  LucideFileDown: FileDown,
  LucideFileEdit: FilePen,
  LucideFileExclamationPoint: FileExclamationPoint,
  LucideFileHeadphone: FileHeadphone,
  LucideFileHeart: FileHeart,
  LucideFileImage: FileImage,
  LucideFileInput: FileInput,
  LucideFileJson: FileBraces,
  LucideFileJson2: FileBracesCorner,
  LucideFileKey: FileKey,
  LucideFileKey2: FileKey,
  LucideFileLineChart: FileChartLine,
  LucideFileLock: FileLock,
  LucideFileLock2: FileLock,
  LucideFileMinus: FileMinus,
  LucideFileMinus2: FileMinusCorner,
  LucideFileMinusCorner: FileMinusCorner,
  LucideFileMusic: FileMusic,
  LucideFileOutput: FileOutput,
  LucideFilePen: FilePen,
  LucideFilePenLine: FilePenLine,
  LucideFilePieChart: FileChartPie,
  LucideFilePlay: FilePlay,
  LucideFilePlus: FilePlus,
  LucideFilePlus2: FilePlusCorner,
  LucideFilePlusCorner: FilePlusCorner,
  LucideFileQuestion: FileQuestionMark,
  LucideFileQuestionMark: FileQuestionMark,
  LucideFileScan: FileScan,
  LucideFileSearch: FileSearch,
  LucideFileSearch2: FileSearchCorner,
  LucideFileSearchCorner: FileSearchCorner,
  LucideFileSignal: FileSignal,
  LucideFileSignature: FilePenLine,
  LucideFileSliders: FileSliders,
  LucideFileSpreadsheet: FileSpreadsheet,
  LucideFileStack: FileStack,
  LucideFileSymlink: FileSymlink,
  LucideFileTerminal: FileTerminal,
  LucideFileText: FileText,
  LucideFileType: FileType,
  LucideFileType2: FileTypeCorner,
  LucideFileTypeCorner: FileTypeCorner,
  LucideFileUp: FileUp,
  LucideFileUser: FileUser,
  LucideFileVideo: FilePlay,
  LucideFileVideo2: FileVideoCamera,
  LucideFileVideoCamera: FileVideoCamera,
  LucideFileVolume: FileVolume,
  LucideFileVolume2: FileSignal,
  LucideFileWarning: FileExclamationPoint,
  LucideFileX: FileX,
  LucideFileX2: FileXCorner,
  LucideFileXCorner: FileXCorner,
  LucideFiles: Files,
  LucideFilm: Film,
  LucideFilter: Funnel,
  LucideFilterX: FunnelX,
  LucideFingerprint: FingerprintPattern,
  LucideFingerprintPattern: FingerprintPattern,
  LucideFireExtinguisher: FireExtinguisher,
  LucideFish: Fish,
  LucideFishOff: FishOff,
  LucideFishSymbol: FishSymbol,
  LucideFishingHook: FishingHook,
  LucideFishingRod: FishingRod,
  LucideFlag: Flag,
  LucideFlagOff: FlagOff,
  LucideFlagTriangleLeft: FlagTriangleLeft,
  LucideFlagTriangleRight: FlagTriangleRight,
  LucideFlame: Flame,
  LucideFlameKindling: FlameKindling,
  LucideFlashlight: Flashlight,
  LucideFlashlightOff: FlashlightOff,
  LucideFlaskConical: FlaskConical,
  LucideFlaskConicalOff: FlaskConicalOff,
  LucideFlaskRound: FlaskRound,
  LucideFlipHorizontal: SquareCenterlineDashedHorizontal,
  LucideFlipHorizontal2: FlipHorizontal2,
  LucideFlipVertical: SquareCenterlineDashedVertical,
  LucideFlipVertical2: FlipVertical2,
  LucideFlower: Flower,
  LucideFlower2: Flower2,
  LucideFocus: Focus,
  LucideFoldHorizontal: FoldHorizontal,
  LucideFoldVertical: FoldVertical,
  LucideFolder: Folder,
  LucideFolderArchive: FolderArchive,
  LucideFolderBookmark: FolderBookmark,
  LucideFolderCheck: FolderCheck,
  LucideFolderClock: FolderClock,
  LucideFolderClosed: FolderClosed,
  LucideFolderCode: FolderCode,
  LucideFolderCog: FolderCog,
  LucideFolderCog2: FolderCog,
  LucideFolderDot: FolderDot,
  LucideFolderDown: FolderDown,
  LucideFolderEdit: FolderPen,
  LucideFolderGit: FolderGit,
  LucideFolderGit2: FolderGit2,
  LucideFolderHeart: FolderHeart,
  LucideFolderInput: FolderInput,
  LucideFolderKanban: FolderKanban,
  LucideFolderKey: FolderKey,
  LucideFolderLock: FolderLock,
  LucideFolderMinus: FolderMinus,
  LucideFolderOpen: FolderOpen,
  LucideFolderOpenDot: FolderOpenDot,
  LucideFolderOutput: FolderOutput,
  LucideFolderPen: FolderPen,
  LucideFolderPlus: FolderPlus,
  LucideFolderRoot: FolderRoot,
  LucideFolderSearch: FolderSearch,
  LucideFolderSearch2: FolderSearch2,
  LucideFolderSymlink: FolderSymlink,
  LucideFolderSync: FolderSync,
  LucideFolderTree: FolderTree,
  LucideFolderUp: FolderUp,
  LucideFolderX: FolderX,
  LucideFolders: Folders,
  LucideFootprints: Footprints,
  LucideForkKnife: Utensils,
  LucideForkKnifeCrossed: UtensilsCrossed,
  LucideForklift: Forklift,
  LucideForm: Form,
  LucideFormInput: RectangleEllipsis,
  LucideForward: Forward,
  LucideFrame: Frame,
  LucideFrown: Frown,
  LucideFuel: Fuel,
  LucideFullscreen: Fullscreen,
  LucideFunctionSquare: SquareFunction,
  LucideFunnel: Funnel,
  LucideFunnelPlus: FunnelPlus,
  LucideFunnelX: FunnelX,
  LucideGalleryHorizontal: GalleryHorizontal,
  LucideGalleryHorizontalEnd: GalleryHorizontalEnd,
  LucideGalleryThumbnails: GalleryThumbnails,
  LucideGalleryVertical: GalleryVertical,
  LucideGalleryVerticalEnd: GalleryVerticalEnd,
  LucideGamepad: Gamepad,
  LucideGamepad2: Gamepad2,
  LucideGamepadDirectional: GamepadDirectional,
  LucideGanttChart: ChartNoAxesGantt,
  LucideGanttChartSquare: SquareChartGantt,
  LucideGauge: Gauge,
  LucideGaugeCircle: CircleGauge,
  LucideGavel: Gavel,
  LucideGem: Gem,
  LucideGeorgianLari: GeorgianLari,
  LucideGhost: Ghost,
  LucideGift: Gift,
  LucideGitBranch: GitBranch,
  LucideGitBranchMinus: GitBranchMinus,
  LucideGitBranchPlus: GitBranchPlus,
  LucideGitCommit: GitCommitHorizontal,
  LucideGitCommitHorizontal: GitCommitHorizontal,
  LucideGitCommitVertical: GitCommitVertical,
  LucideGitCompare: GitCompare,
  LucideGitCompareArrows: GitCompareArrows,
  LucideGitFork: GitFork,
  LucideGitGraph: GitGraph,
  LucideGitMerge: GitMerge,
  LucideGitMergeConflict: GitMergeConflict,
  LucideGitPullRequest: GitPullRequest,
  LucideGitPullRequestArrow: GitPullRequestArrow,
  LucideGitPullRequestClosed: GitPullRequestClosed,
  LucideGitPullRequestCreate: GitPullRequestCreate,
  LucideGitPullRequestCreateArrow: GitPullRequestCreateArrow,
  LucideGitPullRequestDraft: GitPullRequestDraft,
  LucideGlassWater: GlassWater,
  LucideGlasses: Glasses,
  LucideGlobe: Globe,
  LucideGlobe2: Earth,
  LucideGlobeCheck: GlobeCheck,
  LucideGlobeLock: GlobeLock,
  LucideGlobeOff: GlobeOff,
  LucideGlobeX: GlobeX,
  LucideGoal: Goal,
  LucideGpu: Gpu,
  LucideGrab: HandGrab,
  LucideGraduationCap: GraduationCap,
  LucideGrape: Grape,
  LucideGrid: Grid3x3,
  LucideGrid2X2: Grid2x2,
  LucideGrid2X2Check: Grid2x2Check,
  LucideGrid2X2Plus: Grid2x2Plus,
  LucideGrid2X2X: Grid2x2X,
  LucideGrid2x2: Grid2x2,
  LucideGrid2x2Check: Grid2x2Check,
  LucideGrid2x2Plus: Grid2x2Plus,
  LucideGrid2x2X: Grid2x2X,
  LucideGrid3X3: Grid3x3,
  LucideGrid3x2: Grid3x2,
  LucideGrid3x3: Grid3x3,
  LucideGrip: Grip,
  LucideGripHorizontal: GripHorizontal,
  LucideGripVertical: GripVertical,
  LucideGroup: Group,
  LucideGuitar: Guitar,
  LucideHam: Ham,
  LucideHamburger: Hamburger,
  LucideHammer: Hammer,
  LucideHand: Hand,
  LucideHandCoins: HandCoins,
  LucideHandFist: HandFist,
  LucideHandGrab: HandGrab,
  LucideHandHeart: HandHeart,
  LucideHandHelping: HandHelping,
  LucideHandMetal: HandMetal,
  LucideHandPlatter: HandPlatter,
  LucideHandbag: Handbag,
  LucideHandshake: Handshake,
  LucideHardDrive: HardDrive,
  LucideHardDriveDownload: HardDriveDownload,
  LucideHardDriveUpload: HardDriveUpload,
  LucideHardHat: HardHat,
  LucideHash: Hash,
  LucideHatGlasses: HatGlasses,
  LucideHaze: Haze,
  LucideHd: Hd,
  LucideHdmiPort: HdmiPort,
  LucideHeading: Heading,
  LucideHeading1: Heading1,
  LucideHeading2: Heading2,
  LucideHeading3: Heading3,
  LucideHeading4: Heading4,
  LucideHeading5: Heading5,
  LucideHeading6: Heading6,
  LucideHeadphoneOff: HeadphoneOff,
  LucideHeadphones: Headphones,
  LucideHeadset: Headset,
  LucideHeart: Heart,
  LucideHeartCrack: HeartCrack,
  LucideHeartHandshake: HeartHandshake,
  LucideHeartMinus: HeartMinus,
  LucideHeartOff: HeartOff,
  LucideHeartPlus: HeartPlus,
  LucideHeartPulse: HeartPulse,
  LucideHeartX: HeartX,
  LucideHeater: Heater,
  LucideHelicopter: Helicopter,
  LucideHelpCircle: CircleQuestionMark,
  LucideHelpingHand: HandHelping,
  LucideHexagon: Hexagon,
  LucideHighlighter: Highlighter,
  LucideHistory: History,
  LucideHome: House,
  LucideHop: Hop,
  LucideHopOff: HopOff,
  LucideHospital: Hospital,
  LucideHotel: Hotel,
  LucideHourglass: Hourglass,
  LucideHouse: House,
  LucideHouseHeart: HouseHeart,
  LucideHousePlug: HousePlug,
  LucideHousePlus: HousePlus,
  LucideHouseWifi: HouseWifi,
  LucideIceCream: IceCreamCone,
  LucideIceCream2: IceCreamBowl,
  LucideIceCreamBowl: IceCreamBowl,
  LucideIceCreamCone: IceCreamCone,
  LucideIdCard: IdCard,
  LucideIdCardLanyard: IdCardLanyard,
  LucideImage: Image,
  LucideImageDown: ImageDown,
  LucideImageMinus: ImageMinus,
  LucideImageOff: ImageOff,
  LucideImagePlay: ImagePlay,
  LucideImagePlus: ImagePlus,
  LucideImageUp: ImageUp,
  LucideImageUpscale: ImageUpscale,
  LucideImages: Images,
  LucideImport: Import,
  LucideInbox: Inbox,
  LucideIndent: ListIndentIncrease,
  LucideIndentDecrease: ListIndentDecrease,
  LucideIndentIncrease: ListIndentIncrease,
  LucideIndianRupee: IndianRupee,
  LucideInfinity: Infinity,
  LucideInfo: Info,
  LucideInspect: SquareMousePointer,
  LucideInspectionPanel: InspectionPanel,
  LucideItalic: Italic,
  LucideIterationCcw: IterationCcw,
  LucideIterationCw: IterationCw,
  LucideJapaneseYen: JapaneseYen,
  LucideJoystick: Joystick,
  LucideKanban: Kanban,
  LucideKanbanSquare: SquareKanban,
  LucideKanbanSquareDashed: SquareDashedKanban,
  LucideKayak: Kayak,
  LucideKey: Key,
  LucideKeyRound: KeyRound,
  LucideKeySquare: KeySquare,
  LucideKeyboard: Keyboard,
  LucideKeyboardMusic: KeyboardMusic,
  LucideKeyboardOff: KeyboardOff,
  LucideLamp: Lamp,
  LucideLampCeiling: LampCeiling,
  LucideLampDesk: LampDesk,
  LucideLampFloor: LampFloor,
  LucideLampWallDown: LampWallDown,
  LucideLampWallUp: LampWallUp,
  LucideLandPlot: LandPlot,
  LucideLandmark: Landmark,
  LucideLanguages: Languages,
  LucideLaptop: Laptop,
  LucideLaptop2: LaptopMinimal,
  LucideLaptopMinimal: LaptopMinimal,
  LucideLaptopMinimalCheck: LaptopMinimalCheck,
  LucideLasso: Lasso,
  LucideLassoSelect: LassoSelect,
  LucideLaugh: Laugh,
  LucideLayers: Layers,
  LucideLayers2: Layers2,
  LucideLayers3: Layers,
  LucideLayersMinus: LayersMinus,
  LucideLayersPlus: LayersPlus,
  LucideLayout: PanelsTopLeft,
  LucideLayoutDashboard: LayoutDashboard,
  LucideLayoutGrid: LayoutGrid,
  LucideLayoutList: LayoutList,
  LucideLayoutPanelLeft: LayoutPanelLeft,
  LucideLayoutPanelTop: LayoutPanelTop,
  LucideLayoutTemplate: LayoutTemplate,
  LucideLeaf: Leaf,
  LucideLeafyGreen: LeafyGreen,
  LucideLectern: Lectern,
  LucideLensConcave: LensConcave,
  LucideLensConvex: LensConvex,
  LucideLetterText: TextInitial,
  LucideLibrary: Library,
  LucideLibraryBig: LibraryBig,
  LucideLibrarySquare: SquareLibrary,
  LucideLifeBuoy: LifeBuoy,
  LucideLigature: Ligature,
  LucideLightbulb: Lightbulb,
  LucideLightbulbOff: LightbulbOff,
  LucideLineChart: ChartLine,
  LucideLineDotRightHorizontal: LineDotRightHorizontal,
  LucideLineSquiggle: LineSquiggle,
  LucideLineStyle: LineStyle,
  LucideLink: Link,
  LucideLink2: Link2,
  LucideLink2Off: Link2Off,
  LucideList: List,
  LucideListCheck: ListCheck,
  LucideListChecks: ListChecks,
  LucideListChevronsDownUp: ListChevronsDownUp,
  LucideListChevronsUpDown: ListChevronsUpDown,
  LucideListCollapse: ListCollapse,
  LucideListEnd: ListEnd,
  LucideListFilter: ListFilter,
  LucideListFilterPlus: ListFilterPlus,
  LucideListIndentDecrease: ListIndentDecrease,
  LucideListIndentIncrease: ListIndentIncrease,
  LucideListMinus: ListMinus,
  LucideListMusic: ListMusic,
  LucideListOrdered: ListOrdered,
  LucideListPlus: ListPlus,
  LucideListRestart: ListRestart,
  LucideListSortAscending: ListSortAscending,
  LucideListSortDescending: ListSortDescending,
  LucideListStart: ListStart,
  LucideListTodo: ListTodo,
  LucideListTree: ListTree,
  LucideListVideo: ListVideo,
  LucideListX: ListX,
  LucideLoader: Loader,
  LucideLoader2: LoaderCircle,
  LucideLoaderCircle: LoaderCircle,
  LucideLoaderPinwheel: LoaderPinwheel,
  LucideLocate: Locate,
  LucideLocateFixed: LocateFixed,
  LucideLocateOff: LocateOff,
  LucideLocationEdit: MapPinPen,
  LucideLock: Lock,
  LucideLockKeyhole: LockKeyhole,
  LucideLockKeyholeOpen: LockKeyholeOpen,
  LucideLockOpen: LockOpen,
  LucideLogIn: LogIn,
  LucideLogOut: LogOut,
  LucideLogs: Logs,
  LucideLollipop: Lollipop,
  LucideLuggage: Luggage,
  LucideMSquare: SquareM,
  LucideMagnet: Magnet,
  LucideMail: Mail,
  LucideMailCheck: MailCheck,
  LucideMailMinus: MailMinus,
  LucideMailOpen: MailOpen,
  LucideMailPlus: MailPlus,
  LucideMailQuestion: MailQuestionMark,
  LucideMailQuestionMark: MailQuestionMark,
  LucideMailSearch: MailSearch,
  LucideMailWarning: MailWarning,
  LucideMailX: MailX,
  LucideMailbox: Mailbox,
  LucideMails: Mails,
  LucideMap: Map,
  LucideMapMinus: MapMinus,
  LucideMapPin: MapPin,
  LucideMapPinCheck: MapPinCheck,
  LucideMapPinCheckInside: MapPinCheckInside,
  LucideMapPinHouse: MapPinHouse,
  LucideMapPinMinus: MapPinMinus,
  LucideMapPinMinusInside: MapPinMinusInside,
  LucideMapPinOff: MapPinOff,
  LucideMapPinPen: MapPinPen,
  LucideMapPinPlus: MapPinPlus,
  LucideMapPinPlusInside: MapPinPlusInside,
  LucideMapPinSearch: MapPinSearch,
  LucideMapPinX: MapPinX,
  LucideMapPinXInside: MapPinXInside,
  LucideMapPinned: MapPinned,
  LucideMapPlus: MapPlus,
  LucideMars: Mars,
  LucideMarsStroke: MarsStroke,
  LucideMartini: Martini,
  LucideMaximize: Maximize,
  LucideMaximize2: Maximize2,
  LucideMedal: Medal,
  LucideMegaphone: Megaphone,
  LucideMegaphoneOff: MegaphoneOff,
  LucideMeh: Meh,
  LucideMemoryStick: MemoryStick,
  LucideMenu: Menu,
  LucideMenuSquare: SquareMenu,
  LucideMerge: Merge,
  LucideMessageCircle: MessageCircle,
  LucideMessageCircleCheck: MessageCircleCheck,
  LucideMessageCircleCode: MessageCircleCode,
  LucideMessageCircleDashed: MessageCircleDashed,
  LucideMessageCircleHeart: MessageCircleHeart,
  LucideMessageCircleMore: MessageCircleMore,
  LucideMessageCircleOff: MessageCircleOff,
  LucideMessageCirclePlus: MessageCirclePlus,
  LucideMessageCircleQuestion: MessageCircleQuestionMark,
  LucideMessageCircleQuestionMark: MessageCircleQuestionMark,
  LucideMessageCircleReply: MessageCircleReply,
  LucideMessageCircleWarning: MessageCircleWarning,
  LucideMessageCircleX: MessageCircleX,
  LucideMessageSquare: MessageSquare,
  LucideMessageSquareCheck: MessageSquareCheck,
  LucideMessageSquareCode: MessageSquareCode,
  LucideMessageSquareDashed: MessageSquareDashed,
  LucideMessageSquareDiff: MessageSquareDiff,
  LucideMessageSquareDot: MessageSquareDot,
  LucideMessageSquareHeart: MessageSquareHeart,
  LucideMessageSquareLock: MessageSquareLock,
  LucideMessageSquareMore: MessageSquareMore,
  LucideMessageSquareOff: MessageSquareOff,
  LucideMessageSquarePlus: MessageSquarePlus,
  LucideMessageSquareQuote: MessageSquareQuote,
  LucideMessageSquareReply: MessageSquareReply,
  LucideMessageSquareShare: MessageSquareShare,
  LucideMessageSquareText: MessageSquareText,
  LucideMessageSquareWarning: MessageSquareWarning,
  LucideMessageSquareX: MessageSquareX,
  LucideMessagesSquare: MessagesSquare,
  LucideMetronome: Metronome,
  LucideMic: Mic,
  LucideMic2: MicVocal,
  LucideMicOff: MicOff,
  LucideMicVocal: MicVocal,
  LucideMicrochip: Microchip,
  LucideMicroscope: Microscope,
  LucideMicrowave: Microwave,
  LucideMilestone: Milestone,
  LucideMilk: Milk,
  LucideMilkOff: MilkOff,
  LucideMinimize: Minimize,
  LucideMinimize2: Minimize2,
  LucideMinus: Minus,
  LucideMinusCircle: CircleMinus,
  LucideMinusSquare: SquareMinus,
  LucideMirrorRectangular: MirrorRectangular,
  LucideMirrorRound: MirrorRound,
  LucideMonitor: Monitor,
  LucideMonitorCheck: MonitorCheck,
  LucideMonitorCloud: MonitorCloud,
  LucideMonitorCog: MonitorCog,
  LucideMonitorDot: MonitorDot,
  LucideMonitorDown: MonitorDown,
  LucideMonitorOff: MonitorOff,
  LucideMonitorPause: MonitorPause,
  LucideMonitorPlay: MonitorPlay,
  LucideMonitorSmartphone: MonitorSmartphone,
  LucideMonitorSpeaker: MonitorSpeaker,
  LucideMonitorStop: MonitorStop,
  LucideMonitorUp: MonitorUp,
  LucideMonitorX: MonitorX,
  LucideMoon: Moon,
  LucideMoonStar: MoonStar,
  LucideMoreHorizontal: Ellipsis,
  LucideMoreVertical: EllipsisVertical,
  LucideMotorbike: Motorbike,
  LucideMountain: Mountain,
  LucideMountainSnow: MountainSnow,
  LucideMouse: Mouse,
  LucideMouseLeft: MouseLeft,
  LucideMouseOff: MouseOff,
  LucideMousePointer: MousePointer,
  LucideMousePointer2: MousePointer2,
  LucideMousePointer2Off: MousePointer2Off,
  LucideMousePointerBan: MousePointerBan,
  LucideMousePointerClick: MousePointerClick,
  LucideMousePointerSquareDashed: SquareDashedMousePointer,
  LucideMouseRight: MouseRight,
  LucideMove: Move,
  LucideMove3D: Move3d,
  LucideMove3d: Move3d,
  LucideMoveDiagonal: MoveDiagonal,
  LucideMoveDiagonal2: MoveDiagonal2,
  LucideMoveDown: MoveDown,
  LucideMoveDownLeft: MoveDownLeft,
  LucideMoveDownRight: MoveDownRight,
  LucideMoveHorizontal: MoveHorizontal,
  LucideMoveLeft: MoveLeft,
  LucideMoveRight: MoveRight,
  LucideMoveUp: MoveUp,
  LucideMoveUpLeft: MoveUpLeft,
  LucideMoveUpRight: MoveUpRight,
  LucideMoveVertical: MoveVertical,
  LucideMusic: Music,
  LucideMusic2: Music2,
  LucideMusic3: Music3,
  LucideMusic4: Music4,
  LucideNavigation: Navigation,
  LucideNavigation2: Navigation2,
  LucideNavigation2Off: Navigation2Off,
  LucideNavigationOff: NavigationOff,
  LucideNetwork: Network,
  LucideNewspaper: Newspaper,
  LucideNfc: Nfc,
  LucideNonBinary: NonBinary,
  LucideNotebook: Notebook,
  LucideNotebookPen: NotebookPen,
  LucideNotebookTabs: NotebookTabs,
  LucideNotebookText: NotebookText,
  LucideNotepadText: NotepadText,
  LucideNotepadTextDashed: NotepadTextDashed,
  LucideNut: Nut,
  LucideNutOff: NutOff,
  LucideOctagon: Octagon,
  LucideOctagonAlert: OctagonAlert,
  LucideOctagonMinus: OctagonMinus,
  LucideOctagonPause: OctagonPause,
  LucideOctagonX: OctagonX,
  LucideOmega: Omega,
  LucideOption: Option,
  LucideOrbit: Orbit,
  LucideOrigami: Origami,
  LucideOutdent: ListIndentDecrease,
  LucidePackage: Package,
  LucidePackage2: Package2,
  LucidePackageCheck: PackageCheck,
  LucidePackageMinus: PackageMinus,
  LucidePackageOpen: PackageOpen,
  LucidePackagePlus: PackagePlus,
  LucidePackageSearch: PackageSearch,
  LucidePackageX: PackageX,
  LucidePaintBucket: PaintBucket,
  LucidePaintRoller: PaintRoller,
  LucidePaintbrush: Paintbrush,
  LucidePaintbrush2: PaintbrushVertical,
  LucidePaintbrushVertical: PaintbrushVertical,
  LucidePalette: Palette,
  LucidePalmtree: TreePalm,
  LucidePanda: Panda,
  LucidePanelBottom: PanelBottom,
  LucidePanelBottomClose: PanelBottomClose,
  LucidePanelBottomDashed: PanelBottomDashed,
  LucidePanelBottomInactive: PanelBottomDashed,
  LucidePanelBottomOpen: PanelBottomOpen,
  LucidePanelLeft: PanelLeft,
  LucidePanelLeftClose: PanelLeftClose,
  LucidePanelLeftDashed: PanelLeftDashed,
  LucidePanelLeftInactive: PanelLeftDashed,
  LucidePanelLeftOpen: PanelLeftOpen,
  LucidePanelLeftRightDashed: PanelLeftRightDashed,
  LucidePanelRight: PanelRight,
  LucidePanelRightClose: PanelRightClose,
  LucidePanelRightDashed: PanelRightDashed,
  LucidePanelRightInactive: PanelRightDashed,
  LucidePanelRightOpen: PanelRightOpen,
  LucidePanelTop: PanelTop,
  LucidePanelTopBottomDashed: PanelTopBottomDashed,
  LucidePanelTopClose: PanelTopClose,
  LucidePanelTopDashed: PanelTopDashed,
  LucidePanelTopInactive: PanelTopDashed,
  LucidePanelTopOpen: PanelTopOpen,
  LucidePanelsLeftBottom: PanelsLeftBottom,
  LucidePanelsLeftRight: Columns3,
  LucidePanelsRightBottom: PanelsRightBottom,
  LucidePanelsTopBottom: Rows3,
  LucidePanelsTopLeft: PanelsTopLeft,
  LucidePaperclip: Paperclip,
  LucideParasol: Parasol,
  LucideParentheses: Parentheses,
  LucideParkingCircle: CircleParking,
  LucideParkingCircleOff: CircleParkingOff,
  LucideParkingMeter: ParkingMeter,
  LucideParkingSquare: SquareParking,
  LucideParkingSquareOff: SquareParkingOff,
  LucidePartyPopper: PartyPopper,
  LucidePause: Pause,
  LucidePauseCircle: CirclePause,
  LucidePauseOctagon: OctagonPause,
  LucidePawPrint: PawPrint,
  LucidePcCase: PcCase,
  LucidePen: Pen,
  LucidePenBox: SquarePen,
  LucidePenLine: PenLine,
  LucidePenOff: PenOff,
  LucidePenSquare: SquarePen,
  LucidePenTool: PenTool,
  LucidePencil: Pencil,
  LucidePencilLine: PencilLine,
  LucidePencilOff: PencilOff,
  LucidePencilRuler: PencilRuler,
  LucidePencilSparkles: PencilSparkles,
  LucidePentagon: Pentagon,
  LucidePercent: Percent,
  LucidePercentCircle: CirclePercent,
  LucidePercentDiamond: DiamondPercent,
  LucidePercentSquare: SquarePercent,
  LucidePersonStanding: PersonStanding,
  LucidePhilippinePeso: PhilippinePeso,
  LucidePhone: Phone,
  LucidePhoneCall: PhoneCall,
  LucidePhoneForwarded: PhoneForwarded,
  LucidePhoneIncoming: PhoneIncoming,
  LucidePhoneMissed: PhoneMissed,
  LucidePhoneOff: PhoneOff,
  LucidePhoneOutgoing: PhoneOutgoing,
  LucidePi: Pi,
  LucidePiSquare: SquarePi,
  LucidePiano: Piano,
  LucidePickaxe: Pickaxe,
  LucidePictureInPicture: PictureInPicture,
  LucidePictureInPicture2: PictureInPicture2,
  LucidePieChart: ChartPie,
  LucidePiggyBank: PiggyBank,
  LucidePilcrow: Pilcrow,
  LucidePilcrowLeft: PilcrowLeft,
  LucidePilcrowRight: PilcrowRight,
  LucidePilcrowSquare: SquarePilcrow,
  LucidePill: Pill,
  LucidePillBottle: PillBottle,
  LucidePin: Pin,
  LucidePinOff: PinOff,
  LucidePipette: Pipette,
  LucidePizza: Pizza,
  LucidePlane: Plane,
  LucidePlaneLanding: PlaneLanding,
  LucidePlaneTakeoff: PlaneTakeoff,
  LucidePlay: Play,
  LucidePlayCircle: CirclePlay,
  LucidePlayOff: PlayOff,
  LucidePlaySquare: SquarePlay,
  LucidePlug: Plug,
  LucidePlug2: Plug2,
  LucidePlugZap: PlugZap,
  LucidePlugZap2: PlugZap,
  LucidePlus: Plus,
  LucidePlusCircle: CirclePlus,
  LucidePlusSquare: SquarePlus,
  LucidePocketKnife: PocketKnife,
  LucidePodcast: Podcast,
  LucidePodium: Podium,
  LucidePointer: Pointer,
  LucidePointerOff: PointerOff,
  LucidePopcorn: Popcorn,
  LucidePopsicle: Popsicle,
  LucidePoundSterling: PoundSterling,
  LucidePower: Power,
  LucidePowerCircle: CirclePower,
  LucidePowerOff: PowerOff,
  LucidePowerSquare: SquarePower,
  LucidePresentation: Presentation,
  LucidePrinter: Printer,
  LucidePrinterCheck: PrinterCheck,
  LucidePrinterX: PrinterX,
  LucideProjector: Projector,
  LucideProportions: Proportions,
  LucidePuzzle: Puzzle,
  LucidePyramid: Pyramid,
  LucideQrCode: QrCode,
  LucideQuote: Quote,
  LucideRabbit: Rabbit,
  LucideRadar: Radar,
  LucideRadiation: Radiation,
  LucideRadical: Radical,
  LucideRadio: Radio,
  LucideRadioOff: RadioOff,
  LucideRadioReceiver: RadioReceiver,
  LucideRadioTower: RadioTower,
  LucideRadius: Radius,
  LucideRainbow: Rainbow,
  LucideRat: Rat,
  LucideRatio: Ratio,
  LucideReceipt: Receipt,
  LucideReceiptCent: ReceiptCent,
  LucideReceiptEuro: ReceiptEuro,
  LucideReceiptIndianRupee: ReceiptIndianRupee,
  LucideReceiptJapaneseYen: ReceiptJapaneseYen,
  LucideReceiptPoundSterling: ReceiptPoundSterling,
  LucideReceiptRussianRuble: ReceiptRussianRuble,
  LucideReceiptSwissFranc: ReceiptSwissFranc,
  LucideReceiptText: ReceiptText,
  LucideReceiptTurkishLira: ReceiptTurkishLira,
  LucideRectangleCircle: RectangleCircle,
  LucideRectangleEllipsis: RectangleEllipsis,
  LucideRectangleGoggles: RectangleGoggles,
  LucideRectangleHorizontal: RectangleHorizontal,
  LucideRectangleVertical: RectangleVertical,
  LucideRecycle: Recycle,
  LucideRedo: Redo,
  LucideRedo2: Redo2,
  LucideRedoDot: RedoDot,
  LucideRefreshCcw: RefreshCcw,
  LucideRefreshCcwDot: RefreshCcwDot,
  LucideRefreshCw: RefreshCw,
  LucideRefreshCwOff: RefreshCwOff,
  LucideRefrigerator: Refrigerator,
  LucideRegex: Regex,
  LucideRemoveFormatting: RemoveFormatting,
  LucideRepeat: Repeat,
  LucideRepeat1: Repeat1,
  LucideRepeat2: Repeat2,
  LucideRepeatOff: RepeatOff,
  LucideReplace: Replace,
  LucideReplaceAll: ReplaceAll,
  LucideReply: Reply,
  LucideReplyAll: ReplyAll,
  LucideRewind: Rewind,
  LucideRibbon: Ribbon,
  LucideRoad: Road,
  LucideRocket: Rocket,
  LucideRockingChair: RockingChair,
  LucideRollerCoaster: RollerCoaster,
  LucideRose: Rose,
  LucideRotate3D: Rotate3d,
  LucideRotate3d: Rotate3d,
  LucideRotateCcw: RotateCcw,
  LucideRotateCcwKey: RotateCcwKey,
  LucideRotateCcwSquare: RotateCcwSquare,
  LucideRotateCw: RotateCw,
  LucideRotateCwSquare: RotateCwSquare,
  LucideRoute: Route,
  LucideRouteOff: RouteOff,
  LucideRouter: Router,
  LucideRows: Rows2,
  LucideRows2: Rows2,
  LucideRows3: Rows3,
  LucideRows4: Rows4,
  LucideRss: Rss,
  LucideRuler: Ruler,
  LucideRulerDimensionLine: RulerDimensionLine,
  LucideRussianRuble: RussianRuble,
  LucideSailboat: Sailboat,
  LucideSalad: Salad,
  LucideSandwich: Sandwich,
  LucideSatellite: Satellite,
  LucideSatelliteDish: SatelliteDish,
  LucideSaudiRiyal: SaudiRiyal,
  LucideSave: Save,
  LucideSaveAll: SaveAll,
  LucideSaveCheck: SaveCheck,
  LucideSaveOff: SaveOff,
  LucideSavePen: SavePen,
  LucideSavePlus: SavePlus,
  LucideScale: Scale,
  LucideScale3D: Scale3d,
  LucideScale3d: Scale3d,
  LucideScaling: Scaling,
  LucideScan: Scan,
  LucideScanBarcode: ScanBarcode,
  LucideScanEye: ScanEye,
  LucideScanFace: ScanFace,
  LucideScanHeart: ScanHeart,
  LucideScanLine: ScanLine,
  LucideScanQrCode: ScanQrCode,
  LucideScanSearch: ScanSearch,
  LucideScanText: ScanText,
  LucideScatterChart: ChartScatter,
  LucideSchool: School,
  LucideSchool2: University,
  LucideScissors: Scissors,
  LucideScissorsLineDashed: ScissorsLineDashed,
  LucideScissorsSquare: SquareScissors,
  LucideScissorsSquareDashedBottom: SquareBottomDashedScissors,
  LucideScooter: Scooter,
  LucideScreenShare: ScreenShare,
  LucideScreenShareOff: ScreenShareOff,
  LucideScroll: Scroll,
  LucideScrollText: ScrollText,
  LucideSearch: Search,
  LucideSearchAlert: SearchAlert,
  LucideSearchCheck: SearchCheck,
  LucideSearchCode: SearchCode,
  LucideSearchSlash: SearchSlash,
  LucideSearchX: SearchX,
  LucideSection: Section,
  LucideSend: Send,
  LucideSendHorizonal: SendHorizontal,
  LucideSendHorizontal: SendHorizontal,
  LucideSendToBack: SendToBack,
  LucideSeparatorHorizontal: SeparatorHorizontal,
  LucideSeparatorVertical: SeparatorVertical,
  LucideServer: Server,
  LucideServerCog: ServerCog,
  LucideServerCrash: ServerCrash,
  LucideServerOff: ServerOff,
  LucideSettings: Settings,
  LucideSettings2: Settings2,
  LucideShapes: Shapes,
  LucideShare: Share,
  LucideShare2: Share2,
  LucideSheet: Sheet,
  LucideShell: Shell,
  LucideShelvingUnit: ShelvingUnit,
  LucideShield: Shield,
  LucideShieldAlert: ShieldAlert,
  LucideShieldBan: ShieldBan,
  LucideShieldCheck: ShieldCheck,
  LucideShieldClose: ShieldX,
  LucideShieldCog: ShieldCog,
  LucideShieldCogCorner: ShieldCogCorner,
  LucideShieldEllipsis: ShieldEllipsis,
  LucideShieldHalf: ShieldHalf,
  LucideShieldMinus: ShieldMinus,
  LucideShieldOff: ShieldOff,
  LucideShieldPlus: ShieldPlus,
  LucideShieldQuestion: ShieldQuestionMark,
  LucideShieldQuestionMark: ShieldQuestionMark,
  LucideShieldUser: ShieldUser,
  LucideShieldX: ShieldX,
  LucideShip: Ship,
  LucideShipWheel: ShipWheel,
  LucideShirt: Shirt,
  LucideShoppingBag: ShoppingBag,
  LucideShoppingBasket: ShoppingBasket,
  LucideShoppingCart: ShoppingCart,
  LucideShovel: Shovel,
  LucideShowerHead: ShowerHead,
  LucideShredder: Shredder,
  LucideShrimp: Shrimp,
  LucideShrink: Shrink,
  LucideShrub: Shrub,
  LucideShuffle: Shuffle,
  LucideSidebar: PanelLeft,
  LucideSidebarClose: PanelLeftClose,
  LucideSidebarOpen: PanelLeftOpen,
  LucideSigma: Sigma,
  LucideSigmaSquare: SquareSigma,
  LucideSignal: Signal,
  LucideSignalHigh: SignalHigh,
  LucideSignalLow: SignalLow,
  LucideSignalMedium: SignalMedium,
  LucideSignalZero: SignalZero,
  LucideSignature: Signature,
  LucideSignpost: Signpost,
  LucideSignpostBig: SignpostBig,
  LucideSiren: Siren,
  LucideSkipBack: SkipBack,
  LucideSkipForward: SkipForward,
  LucideSkull: Skull,
  LucideSlash: Slash,
  LucideSlashSquare: SquareSlash,
  LucideSlice: Slice,
  LucideSliders: SlidersVertical,
  LucideSlidersHorizontal: SlidersHorizontal,
  LucideSlidersVertical: SlidersVertical,
  LucideSmartphone: Smartphone,
  LucideSmartphoneCharging: SmartphoneCharging,
  LucideSmartphoneNfc: SmartphoneNfc,
  LucideSmile: Smile,
  LucideSmilePlus: SmilePlus,
  LucideSnail: Snail,
  LucideSnowflake: Snowflake,
  LucideSoapDispenserDroplet: SoapDispenserDroplet,
  LucideSofa: Sofa,
  LucideSolarPanel: SolarPanel,
  LucideSortAsc: ArrowUpNarrowWide,
  LucideSortDesc: ArrowDownWideNarrow,
  LucideSoup: Soup,
  LucideSpace: Space,
  LucideSpade: Spade,
  LucideSparkle: Sparkle,
  LucideSparkles: Sparkles,
  LucideSpeaker: Speaker,
  LucideSpeech: Speech,
  LucideSpellCheck: SpellCheck,
  LucideSpellCheck2: SpellCheck2,
  LucideSpline: Spline,
  LucideSplinePointer: SplinePointer,
  LucideSplit: Split,
  LucideSplitSquareHorizontal: SquareSplitHorizontal,
  LucideSplitSquareVertical: SquareSplitVertical,
  LucideSpool: Spool,
  LucideSportShoe: SportShoe,
  LucideSpotlight: Spotlight,
  LucideSprayCan: SprayCan,
  LucideSprout: Sprout,
  LucideSquare: Square,
  LucideSquareActivity: SquareActivity,
  LucideSquareArrowDown: SquareArrowDown,
  LucideSquareArrowDownLeft: SquareArrowDownLeft,
  LucideSquareArrowDownRight: SquareArrowDownRight,
  LucideSquareArrowLeft: SquareArrowLeft,
  LucideSquareArrowOutDownLeft: SquareArrowOutDownLeft,
  LucideSquareArrowOutDownRight: SquareArrowOutDownRight,
  LucideSquareArrowOutUpLeft: SquareArrowOutUpLeft,
  LucideSquareArrowOutUpRight: SquareArrowOutUpRight,
  LucideSquareArrowRight: SquareArrowRight,
  LucideSquareArrowRightEnter: SquareArrowRightEnter,
  LucideSquareArrowRightExit: SquareArrowRightExit,
  LucideSquareArrowUp: SquareArrowUp,
  LucideSquareArrowUpLeft: SquareArrowUpLeft,
  LucideSquareArrowUpRight: SquareArrowUpRight,
  LucideSquareAsterisk: SquareAsterisk,
  LucideSquareBottomDashedScissors: SquareBottomDashedScissors,
  LucideSquareCenterlineDashedHorizontal: SquareCenterlineDashedHorizontal,
  LucideSquareCenterlineDashedVertical: SquareCenterlineDashedVertical,
  LucideSquareChartGantt: SquareChartGantt,
  LucideSquareCheck: SquareCheck,
  LucideSquareCheckBig: SquareCheckBig,
  LucideSquareChevronDown: SquareChevronDown,
  LucideSquareChevronLeft: SquareChevronLeft,
  LucideSquareChevronRight: SquareChevronRight,
  LucideSquareChevronUp: SquareChevronUp,
  LucideSquareCode: SquareCode,
  LucideSquareDashed: SquareDashed,
  LucideSquareDashedBottom: SquareDashedBottom,
  LucideSquareDashedBottomCode: SquareDashedBottomCode,
  LucideSquareDashedKanban: SquareDashedKanban,
  LucideSquareDashedMousePointer: SquareDashedMousePointer,
  LucideSquareDashedText: SquareDashedText,
  LucideSquareDashedTopSolid: SquareDashedTopSolid,
  LucideSquareDivide: SquareDivide,
  LucideSquareDot: SquareDot,
  LucideSquareEqual: SquareEqual,
  LucideSquareFunction: SquareFunction,
  LucideSquareGanttChart: SquareChartGantt,
  LucideSquareKanban: SquareKanban,
  LucideSquareLibrary: SquareLibrary,
  LucideSquareM: SquareM,
  LucideSquareMenu: SquareMenu,
  LucideSquareMinus: SquareMinus,
  LucideSquareMousePointer: SquareMousePointer,
  LucideSquareParking: SquareParking,
  LucideSquareParkingOff: SquareParkingOff,
  LucideSquarePause: SquarePause,
  LucideSquarePen: SquarePen,
  LucideSquarePercent: SquarePercent,
  LucideSquarePi: SquarePi,
  LucideSquarePilcrow: SquarePilcrow,
  LucideSquarePlay: SquarePlay,
  LucideSquarePlus: SquarePlus,
  LucideSquarePower: SquarePower,
  LucideSquareRadical: SquareRadical,
  LucideSquareRoundCorner: SquareRoundCorner,
  LucideSquareScissors: SquareScissors,
  LucideSquareSigma: SquareSigma,
  LucideSquareSlash: SquareSlash,
  LucideSquareSplitHorizontal: SquareSplitHorizontal,
  LucideSquareSplitVertical: SquareSplitVertical,
  LucideSquareSquare: SquareSquare,
  LucideSquareStack: SquareStack,
  LucideSquareStar: SquareStar,
  LucideSquareStop: SquareStop,
  LucideSquareTerminal: SquareTerminal,
  LucideSquareUser: SquareUser,
  LucideSquareUserRound: SquareUserRound,
  LucideSquareX: SquareX,
  LucideSquaresExclude: SquaresExclude,
  LucideSquaresIntersect: SquaresIntersect,
  LucideSquaresSubtract: SquaresSubtract,
  LucideSquaresUnite: SquaresUnite,
  LucideSquircle: Squircle,
  LucideSquircleDashed: SquircleDashed,
  LucideSquirrel: Squirrel,
  LucideStamp: Stamp,
  LucideStar: Star,
  LucideStarCheck: StarCheck,
  LucideStarHalf: StarHalf,
  LucideStarMinus: StarMinus,
  LucideStarOff: StarOff,
  LucideStarPlus: StarPlus,
  LucideStarX: StarX,
  LucideStars: Sparkles,
  LucideStepBack: StepBack,
  LucideStepForward: StepForward,
  LucideStethoscope: Stethoscope,
  LucideSticker: Sticker,
  LucideStickyNote: StickyNote,
  LucideStickyNoteCheck: StickyNoteCheck,
  LucideStickyNoteMinus: StickyNoteMinus,
  LucideStickyNoteOff: StickyNoteOff,
  LucideStickyNotePlus: StickyNotePlus,
  LucideStickyNoteX: StickyNoteX,
  LucideStickyNotes: StickyNotes,
  LucideStone: Stone,
  LucideStopCircle: CircleStop,
  LucideStore: Store,
  LucideStretchHorizontal: StretchHorizontal,
  LucideStretchVertical: StretchVertical,
  LucideStrikethrough: Strikethrough,
  LucideSubscript: Subscript,
  LucideSubtitles: Captions,
  LucideSummary: Summary,
  LucideSun: Sun,
  LucideSunDim: SunDim,
  LucideSunMedium: SunMedium,
  LucideSunMoon: SunMoon,
  LucideSunSnow: SunSnow,
  LucideSunrise: Sunrise,
  LucideSunset: Sunset,
  LucideSuperscript: Superscript,
  LucideSwatchBook: SwatchBook,
  LucideSwissFranc: SwissFranc,
  LucideSwitchCamera: SwitchCamera,
  LucideSword: Sword,
  LucideSwords: Swords,
  LucideSyringe: Syringe,
  LucideTable: Table,
  LucideTable2: Table2,
  LucideTableCellsMerge: TableCellsMerge,
  LucideTableCellsSplit: TableCellsSplit,
  LucideTableColumnsSplit: TableColumnsSplit,
  LucideTableConfig: Columns3Cog,
  LucideTableOfContents: TableOfContents,
  LucideTableProperties: TableProperties,
  LucideTableRowsSplit: TableRowsSplit,
  LucideTablet: Tablet,
  LucideTabletSmartphone: TabletSmartphone,
  LucideTablets: Tablets,
  LucideTag: Tag,
  LucideTagPlus: TagPlus,
  LucideTagX: TagX,
  LucideTags: Tags,
  LucideTally1: Tally1,
  LucideTally2: Tally2,
  LucideTally3: Tally3,
  LucideTally4: Tally4,
  LucideTally5: Tally5,
  LucideTangent: Tangent,
  LucideTarget: Target,
  LucideTelescope: Telescope,
  LucideTent: Tent,
  LucideTentTree: TentTree,
  LucideTerminal: Terminal,
  LucideTerminalSquare: SquareTerminal,
  LucideTestTube: TestTube,
  LucideTestTube2: TestTubeDiagonal,
  LucideTestTubeDiagonal: TestTubeDiagonal,
  LucideTestTubes: TestTubes,
  LucideText: TextAlignStart,
  LucideTextAlignCenter: TextAlignCenter,
  LucideTextAlignEnd: TextAlignEnd,
  LucideTextAlignJustify: TextAlignJustify,
  LucideTextAlignStart: TextAlignStart,
  LucideTextCursor: TextCursor,
  LucideTextCursorInput: TextCursorInput,
  LucideTextInitial: TextInitial,
  LucideTextQuote: TextQuote,
  LucideTextSearch: TextSearch,
  LucideTextSelect: SquareDashedText,
  LucideTextSelection: SquareDashedText,
  LucideTextWrap: TextWrap,
  LucideTheater: Theater,
  LucideThermometer: Thermometer,
  LucideThermometerSnowflake: ThermometerSnowflake,
  LucideThermometerSun: ThermometerSun,
  LucideThumbsDown: ThumbsDown,
  LucideThumbsUp: ThumbsUp,
  LucideTicket: Ticket,
  LucideTicketCheck: TicketCheck,
  LucideTicketMinus: TicketMinus,
  LucideTicketPercent: TicketPercent,
  LucideTicketPlus: TicketPlus,
  LucideTicketSlash: TicketSlash,
  LucideTicketX: TicketX,
  LucideTickets: Tickets,
  LucideTicketsPlane: TicketsPlane,
  LucideTimeline: Timeline,
  LucideTimer: Timer,
  LucideTimerOff: TimerOff,
  LucideTimerReset: TimerReset,
  LucideToggleLeft: ToggleLeft,
  LucideToggleRight: ToggleRight,
  LucideToilet: Toilet,
  LucideToolCase: ToolCase,
  LucideToolbox: Toolbox,
  LucideTornado: Tornado,
  LucideTorus: Torus,
  LucideTouchpad: Touchpad,
  LucideTouchpadOff: TouchpadOff,
  LucideTowelRack: TowelRack,
  LucideTowerControl: TowerControl,
  LucideToyBrick: ToyBrick,
  LucideTractor: Tractor,
  LucideTrafficCone: TrafficCone,
  LucideTrain: TramFront,
  LucideTrainFront: TrainFront,
  LucideTrainFrontTunnel: TrainFrontTunnel,
  LucideTrainTrack: TrainTrack,
  LucideTramFront: TramFront,
  LucideTransgender: Transgender,
  LucideTrash: Trash,
  LucideTrash2: Trash2,
  LucideTreeDeciduous: TreeDeciduous,
  LucideTreePalm: TreePalm,
  LucideTreePine: TreePine,
  LucideTrees: Trees,
  LucideTrendingDown: TrendingDown,
  LucideTrendingUp: TrendingUp,
  LucideTrendingUpDown: TrendingUpDown,
  LucideTriangle: Triangle,
  LucideTriangleAlert: TriangleAlert,
  LucideTriangleDashed: TriangleDashed,
  LucideTriangleRight: TriangleRight,
  LucideTrophy: Trophy,
  LucideTruck: Truck,
  LucideTruckElectric: TruckElectric,
  LucideTurkishLira: TurkishLira,
  LucideTurntable: Turntable,
  LucideTurtle: Turtle,
  LucideTv: Tv,
  LucideTv2: TvMinimal,
  LucideTvMinimal: TvMinimal,
  LucideTvMinimalPlay: TvMinimalPlay,
  LucideType: Type,
  LucideTypeOutline: TypeOutline,
  LucideUmbrella: Umbrella,
  LucideUmbrellaOff: UmbrellaOff,
  LucideUnderline: Underline,
  LucideUndo: Undo,
  LucideUndo2: Undo2,
  LucideUndoDot: UndoDot,
  LucideUnfoldHorizontal: UnfoldHorizontal,
  LucideUnfoldVertical: UnfoldVertical,
  LucideUngroup: Ungroup,
  LucideUniversity: University,
  LucideUnlink: Unlink,
  LucideUnlink2: Unlink2,
  LucideUnlock: LockOpen,
  LucideUnlockKeyhole: LockKeyholeOpen,
  LucideUnplug: Unplug,
  LucideUpload: Upload,
  LucideUploadCloud: CloudUpload,
  LucideUsb: Usb,
  LucideUser: User,
  LucideUser2: UserRound,
  LucideUserCheck: UserCheck,
  LucideUserCheck2: UserRoundCheck,
  LucideUserCircle: CircleUser,
  LucideUserCircle2: CircleUserRound,
  LucideUserCog: UserCog,
  LucideUserCog2: UserRoundCog,
  LucideUserKey: UserKey,
  LucideUserLock: UserLock,
  LucideUserMinus: UserMinus,
  LucideUserMinus2: UserRoundMinus,
  LucideUserPen: UserPen,
  LucideUserPlus: UserPlus,
  LucideUserPlus2: UserRoundPlus,
  LucideUserRound: UserRound,
  LucideUserRoundArrowLeft: UserRoundArrowLeft,
  LucideUserRoundCheck: UserRoundCheck,
  LucideUserRoundCog: UserRoundCog,
  LucideUserRoundKey: UserRoundKey,
  LucideUserRoundMinus: UserRoundMinus,
  LucideUserRoundPen: UserRoundPen,
  LucideUserRoundPlus: UserRoundPlus,
  LucideUserRoundSearch: UserRoundSearch,
  LucideUserRoundX: UserRoundX,
  LucideUserSearch: UserSearch,
  LucideUserSquare: SquareUser,
  LucideUserSquare2: SquareUserRound,
  LucideUserStar: UserStar,
  LucideUserX: UserX,
  LucideUserX2: UserRoundX,
  LucideUsers: Users,
  LucideUsers2: UsersRound,
  LucideUsersRound: UsersRound,
  LucideUtensils: Utensils,
  LucideUtensilsCrossed: UtensilsCrossed,
  LucideUtilityPole: UtilityPole,
  LucideVan: Van,
  LucideVariable: Variable,
  LucideVault: Vault,
  LucideVectorSquare: VectorSquare,
  LucideVegan: Vegan,
  LucideVenetianMask: VenetianMask,
  LucideVenus: Venus,
  LucideVenusAndMars: VenusAndMars,
  LucideVerified: BadgeCheck,
  LucideVibrate: Vibrate,
  LucideVibrateOff: VibrateOff,
  LucideVideo: Video,
  LucideVideoOff: VideoOff,
  LucideVideotape: Videotape,
  LucideView: View,
  LucideVoicemail: Voicemail,
  LucideVolleyball: Volleyball,
  LucideVolume: Volume,
  LucideVolume1: Volume1,
  LucideVolume2: Volume2,
  LucideVolumeOff: VolumeOff,
  LucideVolumeX: VolumeX,
  LucideVote: Vote,
  LucideWallet: Wallet,
  LucideWallet2: WalletMinimal,
  LucideWalletCards: WalletCards,
  LucideWalletMinimal: WalletMinimal,
  LucideWallpaper: Wallpaper,
  LucideWand: Wand,
  LucideWand2: WandSparkles,
  LucideWandSparkles: WandSparkles,
  LucideWarehouse: Warehouse,
  LucideWashingMachine: WashingMachine,
  LucideWatch: Watch,
  LucideWaves: WavesHorizontal,
  LucideWavesArrowDown: WavesArrowDown,
  LucideWavesArrowUp: WavesArrowUp,
  LucideWavesHorizontal: WavesHorizontal,
  LucideWavesLadder: WavesLadder,
  LucideWavesVertical: WavesVertical,
  LucideWaypoints: Waypoints,
  LucideWebcam: Webcam,
  LucideWebcamOff: WebcamOff,
  LucideWebhook: Webhook,
  LucideWebhookOff: WebhookOff,
  LucideWeight: Weight,
  LucideWeightTilde: WeightTilde,
  LucideWheat: Wheat,
  LucideWheatOff: WheatOff,
  LucideWholeWord: WholeWord,
  LucideWifi: Wifi,
  LucideWifiCog: WifiCog,
  LucideWifiHigh: WifiHigh,
  LucideWifiLow: WifiLow,
  LucideWifiOff: WifiOff,
  LucideWifiPen: WifiPen,
  LucideWifiSync: WifiSync,
  LucideWifiZero: WifiZero,
  LucideWind: Wind,
  LucideWindArrowDown: WindArrowDown,
  LucideWine: Wine,
  LucideWineOff: WineOff,
  LucideWorkflow: Workflow,
  LucideWorm: Worm,
  LucideWrapText: TextWrap,
  LucideWrench: Wrench,
  LucideWrenchOff: WrenchOff,
  LucideX: X,
  LucideXCircle: CircleX,
  LucideXLineTop: XLineTop,
  LucideXOctagon: OctagonX,
  LucideXSquare: SquareX,
  LucideZap: Zap,
  LucideZapOff: ZapOff,
  LucideZodiacAquarius: ZodiacAquarius,
  LucideZodiacAries: ZodiacAries,
  LucideZodiacCancer: ZodiacCancer,
  LucideZodiacCapricorn: ZodiacCapricorn,
  LucideZodiacGemini: ZodiacGemini,
  LucideZodiacLeo: ZodiacLeo,
  LucideZodiacLibra: ZodiacLibra,
  LucideZodiacOphiuchus: ZodiacOphiuchus,
  LucideZodiacPisces: ZodiacPisces,
  LucideZodiacSagittarius: ZodiacSagittarius,
  LucideZodiacScorpio: ZodiacScorpio,
  LucideZodiacTaurus: ZodiacTaurus,
  LucideZodiacVirgo: ZodiacVirgo,
  LucideZoomIn: ZoomIn,
  LucideZoomOut: ZoomOut,
  Luggage,
  LuggageIcon: Luggage,
  MSquare: SquareM,
  MSquareIcon: SquareM,
  Magnet,
  MagnetIcon: Magnet,
  Mail,
  MailCheck,
  MailCheckIcon: MailCheck,
  MailIcon: Mail,
  MailMinus,
  MailMinusIcon: MailMinus,
  MailOpen,
  MailOpenIcon: MailOpen,
  MailPlus,
  MailPlusIcon: MailPlus,
  MailQuestion: MailQuestionMark,
  MailQuestionIcon: MailQuestionMark,
  MailQuestionMark,
  MailQuestionMarkIcon: MailQuestionMark,
  MailSearch,
  MailSearchIcon: MailSearch,
  MailWarning,
  MailWarningIcon: MailWarning,
  MailX,
  MailXIcon: MailX,
  Mailbox,
  MailboxIcon: Mailbox,
  Mails,
  MailsIcon: Mails,
  Map,
  MapIcon: Map,
  MapMinus,
  MapMinusIcon: MapMinus,
  MapPin,
  MapPinCheck,
  MapPinCheckIcon: MapPinCheck,
  MapPinCheckInside,
  MapPinCheckInsideIcon: MapPinCheckInside,
  MapPinHouse,
  MapPinHouseIcon: MapPinHouse,
  MapPinIcon: MapPin,
  MapPinMinus,
  MapPinMinusIcon: MapPinMinus,
  MapPinMinusInside,
  MapPinMinusInsideIcon: MapPinMinusInside,
  MapPinOff,
  MapPinOffIcon: MapPinOff,
  MapPinPen,
  MapPinPenIcon: MapPinPen,
  MapPinPlus,
  MapPinPlusIcon: MapPinPlus,
  MapPinPlusInside,
  MapPinPlusInsideIcon: MapPinPlusInside,
  MapPinSearch,
  MapPinSearchIcon: MapPinSearch,
  MapPinX,
  MapPinXIcon: MapPinX,
  MapPinXInside,
  MapPinXInsideIcon: MapPinXInside,
  MapPinned,
  MapPinnedIcon: MapPinned,
  MapPlus,
  MapPlusIcon: MapPlus,
  Mars,
  MarsIcon: Mars,
  MarsStroke,
  MarsStrokeIcon: MarsStroke,
  Martini,
  MartiniIcon: Martini,
  Maximize,
  Maximize2,
  Maximize2Icon: Maximize2,
  MaximizeIcon: Maximize,
  Medal,
  MedalIcon: Medal,
  Megaphone,
  MegaphoneIcon: Megaphone,
  MegaphoneOff,
  MegaphoneOffIcon: MegaphoneOff,
  Meh,
  MehIcon: Meh,
  MemoryStick,
  MemoryStickIcon: MemoryStick,
  Menu,
  MenuIcon: Menu,
  MenuSquare: SquareMenu,
  MenuSquareIcon: SquareMenu,
  Merge,
  MergeIcon: Merge,
  MessageCircle,
  MessageCircleCheck,
  MessageCircleCheckIcon: MessageCircleCheck,
  MessageCircleCode,
  MessageCircleCodeIcon: MessageCircleCode,
  MessageCircleDashed,
  MessageCircleDashedIcon: MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleHeartIcon: MessageCircleHeart,
  MessageCircleIcon: MessageCircle,
  MessageCircleMore,
  MessageCircleMoreIcon: MessageCircleMore,
  MessageCircleOff,
  MessageCircleOffIcon: MessageCircleOff,
  MessageCirclePlus,
  MessageCirclePlusIcon: MessageCirclePlus,
  MessageCircleQuestion: MessageCircleQuestionMark,
  MessageCircleQuestionIcon: MessageCircleQuestionMark,
  MessageCircleQuestionMark,
  MessageCircleQuestionMarkIcon: MessageCircleQuestionMark,
  MessageCircleReply,
  MessageCircleReplyIcon: MessageCircleReply,
  MessageCircleWarning,
  MessageCircleWarningIcon: MessageCircleWarning,
  MessageCircleX,
  MessageCircleXIcon: MessageCircleX,
  MessageSquare,
  MessageSquareCheck,
  MessageSquareCheckIcon: MessageSquareCheck,
  MessageSquareCode,
  MessageSquareCodeIcon: MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDashedIcon: MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDiffIcon: MessageSquareDiff,
  MessageSquareDot,
  MessageSquareDotIcon: MessageSquareDot,
  MessageSquareHeart,
  MessageSquareHeartIcon: MessageSquareHeart,
  MessageSquareIcon: MessageSquare,
  MessageSquareLock,
  MessageSquareLockIcon: MessageSquareLock,
  MessageSquareMore,
  MessageSquareMoreIcon: MessageSquareMore,
  MessageSquareOff,
  MessageSquareOffIcon: MessageSquareOff,
  MessageSquarePlus,
  MessageSquarePlusIcon: MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareQuoteIcon: MessageSquareQuote,
  MessageSquareReply,
  MessageSquareReplyIcon: MessageSquareReply,
  MessageSquareShare,
  MessageSquareShareIcon: MessageSquareShare,
  MessageSquareText,
  MessageSquareTextIcon: MessageSquareText,
  MessageSquareWarning,
  MessageSquareWarningIcon: MessageSquareWarning,
  MessageSquareX,
  MessageSquareXIcon: MessageSquareX,
  MessagesSquare,
  MessagesSquareIcon: MessagesSquare,
  Metronome,
  MetronomeIcon: Metronome,
  Mic,
  Mic2: MicVocal,
  Mic2Icon: MicVocal,
  MicIcon: Mic,
  MicOff,
  MicOffIcon: MicOff,
  MicVocal,
  MicVocalIcon: MicVocal,
  Microchip,
  MicrochipIcon: Microchip,
  Microscope,
  MicroscopeIcon: Microscope,
  Microwave,
  MicrowaveIcon: Microwave,
  Milestone,
  MilestoneIcon: Milestone,
  Milk,
  MilkIcon: Milk,
  MilkOff,
  MilkOffIcon: MilkOff,
  Minimize,
  Minimize2,
  Minimize2Icon: Minimize2,
  MinimizeIcon: Minimize,
  Minus,
  MinusCircle: CircleMinus,
  MinusCircleIcon: CircleMinus,
  MinusIcon: Minus,
  MinusSquare: SquareMinus,
  MinusSquareIcon: SquareMinus,
  MirrorRectangular,
  MirrorRectangularIcon: MirrorRectangular,
  MirrorRound,
  MirrorRoundIcon: MirrorRound,
  Monitor,
  MonitorCheck,
  MonitorCheckIcon: MonitorCheck,
  MonitorCloud,
  MonitorCloudIcon: MonitorCloud,
  MonitorCog,
  MonitorCogIcon: MonitorCog,
  MonitorDot,
  MonitorDotIcon: MonitorDot,
  MonitorDown,
  MonitorDownIcon: MonitorDown,
  MonitorIcon: Monitor,
  MonitorOff,
  MonitorOffIcon: MonitorOff,
  MonitorPause,
  MonitorPauseIcon: MonitorPause,
  MonitorPlay,
  MonitorPlayIcon: MonitorPlay,
  MonitorSmartphone,
  MonitorSmartphoneIcon: MonitorSmartphone,
  MonitorSpeaker,
  MonitorSpeakerIcon: MonitorSpeaker,
  MonitorStop,
  MonitorStopIcon: MonitorStop,
  MonitorUp,
  MonitorUpIcon: MonitorUp,
  MonitorX,
  MonitorXIcon: MonitorX,
  Moon,
  MoonIcon: Moon,
  MoonStar,
  MoonStarIcon: MoonStar,
  MoreHorizontal: Ellipsis,
  MoreHorizontalIcon: Ellipsis,
  MoreVertical: EllipsisVertical,
  MoreVerticalIcon: EllipsisVertical,
  Motorbike,
  MotorbikeIcon: Motorbike,
  Mountain,
  MountainIcon: Mountain,
  MountainSnow,
  MountainSnowIcon: MountainSnow,
  Mouse,
  MouseIcon: Mouse,
  MouseLeft,
  MouseLeftIcon: MouseLeft,
  MouseOff,
  MouseOffIcon: MouseOff,
  MousePointer,
  MousePointer2,
  MousePointer2Icon: MousePointer2,
  MousePointer2Off,
  MousePointer2OffIcon: MousePointer2Off,
  MousePointerBan,
  MousePointerBanIcon: MousePointerBan,
  MousePointerClick,
  MousePointerClickIcon: MousePointerClick,
  MousePointerIcon: MousePointer,
  MousePointerSquareDashed: SquareDashedMousePointer,
  MousePointerSquareDashedIcon: SquareDashedMousePointer,
  MouseRight,
  MouseRightIcon: MouseRight,
  Move,
  Move3D: Move3d,
  Move3DIcon: Move3d,
  Move3d,
  Move3dIcon: Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDiagonal2Icon: MoveDiagonal2,
  MoveDiagonalIcon: MoveDiagonal,
  MoveDown,
  MoveDownIcon: MoveDown,
  MoveDownLeft,
  MoveDownLeftIcon: MoveDownLeft,
  MoveDownRight,
  MoveDownRightIcon: MoveDownRight,
  MoveHorizontal,
  MoveHorizontalIcon: MoveHorizontal,
  MoveIcon: Move,
  MoveLeft,
  MoveLeftIcon: MoveLeft,
  MoveRight,
  MoveRightIcon: MoveRight,
  MoveUp,
  MoveUpIcon: MoveUp,
  MoveUpLeft,
  MoveUpLeftIcon: MoveUpLeft,
  MoveUpRight,
  MoveUpRightIcon: MoveUpRight,
  MoveVertical,
  MoveVerticalIcon: MoveVertical,
  Music,
  Music2,
  Music2Icon: Music2,
  Music3,
  Music3Icon: Music3,
  Music4,
  Music4Icon: Music4,
  MusicIcon: Music,
  Navigation,
  Navigation2,
  Navigation2Icon: Navigation2,
  Navigation2Off,
  Navigation2OffIcon: Navigation2Off,
  NavigationIcon: Navigation,
  NavigationOff,
  NavigationOffIcon: NavigationOff,
  Network,
  NetworkIcon: Network,
  Newspaper,
  NewspaperIcon: Newspaper,
  Nfc,
  NfcIcon: Nfc,
  NonBinary,
  NonBinaryIcon: NonBinary,
  Notebook,
  NotebookIcon: Notebook,
  NotebookPen,
  NotebookPenIcon: NotebookPen,
  NotebookTabs,
  NotebookTabsIcon: NotebookTabs,
  NotebookText,
  NotebookTextIcon: NotebookText,
  NotepadText,
  NotepadTextDashed,
  NotepadTextDashedIcon: NotepadTextDashed,
  NotepadTextIcon: NotepadText,
  Nut,
  NutIcon: Nut,
  NutOff,
  NutOffIcon: NutOff,
  Octagon,
  OctagonAlert,
  OctagonAlertIcon: OctagonAlert,
  OctagonIcon: Octagon,
  OctagonMinus,
  OctagonMinusIcon: OctagonMinus,
  OctagonPause,
  OctagonPauseIcon: OctagonPause,
  OctagonX,
  OctagonXIcon: OctagonX,
  Omega,
  OmegaIcon: Omega,
  Option,
  OptionIcon: Option,
  Orbit,
  OrbitIcon: Orbit,
  Origami,
  OrigamiIcon: Origami,
  Outdent: ListIndentDecrease,
  OutdentIcon: ListIndentDecrease,
  Package,
  Package2,
  Package2Icon: Package2,
  PackageCheck,
  PackageCheckIcon: PackageCheck,
  PackageIcon: Package,
  PackageMinus,
  PackageMinusIcon: PackageMinus,
  PackageOpen,
  PackageOpenIcon: PackageOpen,
  PackagePlus,
  PackagePlusIcon: PackagePlus,
  PackageSearch,
  PackageSearchIcon: PackageSearch,
  PackageX,
  PackageXIcon: PackageX,
  PaintBucket,
  PaintBucketIcon: PaintBucket,
  PaintRoller,
  PaintRollerIcon: PaintRoller,
  Paintbrush,
  Paintbrush2: PaintbrushVertical,
  Paintbrush2Icon: PaintbrushVertical,
  PaintbrushIcon: Paintbrush,
  PaintbrushVertical,
  PaintbrushVerticalIcon: PaintbrushVertical,
  Palette,
  PaletteIcon: Palette,
  Palmtree: TreePalm,
  PalmtreeIcon: TreePalm,
  Panda,
  PandaIcon: Panda,
  PanelBottom,
  PanelBottomClose,
  PanelBottomCloseIcon: PanelBottomClose,
  PanelBottomDashed,
  PanelBottomDashedIcon: PanelBottomDashed,
  PanelBottomIcon: PanelBottom,
  PanelBottomInactive: PanelBottomDashed,
  PanelBottomInactiveIcon: PanelBottomDashed,
  PanelBottomOpen,
  PanelBottomOpenIcon: PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftCloseIcon: PanelLeftClose,
  PanelLeftDashed,
  PanelLeftDashedIcon: PanelLeftDashed,
  PanelLeftIcon: PanelLeft,
  PanelLeftInactive: PanelLeftDashed,
  PanelLeftInactiveIcon: PanelLeftDashed,
  PanelLeftOpen,
  PanelLeftOpenIcon: PanelLeftOpen,
  PanelLeftRightDashed,
  PanelLeftRightDashedIcon: PanelLeftRightDashed,
  PanelRight,
  PanelRightClose,
  PanelRightCloseIcon: PanelRightClose,
  PanelRightDashed,
  PanelRightDashedIcon: PanelRightDashed,
  PanelRightIcon: PanelRight,
  PanelRightInactive: PanelRightDashed,
  PanelRightInactiveIcon: PanelRightDashed,
  PanelRightOpen,
  PanelRightOpenIcon: PanelRightOpen,
  PanelTop,
  PanelTopBottomDashed,
  PanelTopBottomDashedIcon: PanelTopBottomDashed,
  PanelTopClose,
  PanelTopCloseIcon: PanelTopClose,
  PanelTopDashed,
  PanelTopDashedIcon: PanelTopDashed,
  PanelTopIcon: PanelTop,
  PanelTopInactive: PanelTopDashed,
  PanelTopInactiveIcon: PanelTopDashed,
  PanelTopOpen,
  PanelTopOpenIcon: PanelTopOpen,
  PanelsLeftBottom,
  PanelsLeftBottomIcon: PanelsLeftBottom,
  PanelsLeftRight: Columns3,
  PanelsLeftRightIcon: Columns3,
  PanelsRightBottom,
  PanelsRightBottomIcon: PanelsRightBottom,
  PanelsTopBottom: Rows3,
  PanelsTopBottomIcon: Rows3,
  PanelsTopLeft,
  PanelsTopLeftIcon: PanelsTopLeft,
  Paperclip,
  PaperclipIcon: Paperclip,
  Parasol,
  ParasolIcon: Parasol,
  Parentheses,
  ParenthesesIcon: Parentheses,
  ParkingCircle: CircleParking,
  ParkingCircleIcon: CircleParking,
  ParkingCircleOff: CircleParkingOff,
  ParkingCircleOffIcon: CircleParkingOff,
  ParkingMeter,
  ParkingMeterIcon: ParkingMeter,
  ParkingSquare: SquareParking,
  ParkingSquareIcon: SquareParking,
  ParkingSquareOff: SquareParkingOff,
  ParkingSquareOffIcon: SquareParkingOff,
  PartyPopper,
  PartyPopperIcon: PartyPopper,
  Pause,
  PauseCircle: CirclePause,
  PauseCircleIcon: CirclePause,
  PauseIcon: Pause,
  PauseOctagon: OctagonPause,
  PauseOctagonIcon: OctagonPause,
  PawPrint,
  PawPrintIcon: PawPrint,
  PcCase,
  PcCaseIcon: PcCase,
  Pen,
  PenBox: SquarePen,
  PenBoxIcon: SquarePen,
  PenIcon: Pen,
  PenLine,
  PenLineIcon: PenLine,
  PenOff,
  PenOffIcon: PenOff,
  PenSquare: SquarePen,
  PenSquareIcon: SquarePen,
  PenTool,
  PenToolIcon: PenTool,
  Pencil,
  PencilIcon: Pencil,
  PencilLine,
  PencilLineIcon: PencilLine,
  PencilOff,
  PencilOffIcon: PencilOff,
  PencilRuler,
  PencilRulerIcon: PencilRuler,
  PencilSparkles,
  PencilSparklesIcon: PencilSparkles,
  Pentagon,
  PentagonIcon: Pentagon,
  Percent,
  PercentCircle: CirclePercent,
  PercentCircleIcon: CirclePercent,
  PercentDiamond: DiamondPercent,
  PercentDiamondIcon: DiamondPercent,
  PercentIcon: Percent,
  PercentSquare: SquarePercent,
  PercentSquareIcon: SquarePercent,
  PersonStanding,
  PersonStandingIcon: PersonStanding,
  PhilippinePeso,
  PhilippinePesoIcon: PhilippinePeso,
  Phone,
  PhoneCall,
  PhoneCallIcon: PhoneCall,
  PhoneForwarded,
  PhoneForwardedIcon: PhoneForwarded,
  PhoneIcon: Phone,
  PhoneIncoming,
  PhoneIncomingIcon: PhoneIncoming,
  PhoneMissed,
  PhoneMissedIcon: PhoneMissed,
  PhoneOff,
  PhoneOffIcon: PhoneOff,
  PhoneOutgoing,
  PhoneOutgoingIcon: PhoneOutgoing,
  Pi,
  PiIcon: Pi,
  PiSquare: SquarePi,
  PiSquareIcon: SquarePi,
  Piano,
  PianoIcon: Piano,
  Pickaxe,
  PickaxeIcon: Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PictureInPicture2Icon: PictureInPicture2,
  PictureInPictureIcon: PictureInPicture,
  PieChart: ChartPie,
  PieChartIcon: ChartPie,
  PiggyBank,
  PiggyBankIcon: PiggyBank,
  Pilcrow,
  PilcrowIcon: Pilcrow,
  PilcrowLeft,
  PilcrowLeftIcon: PilcrowLeft,
  PilcrowRight,
  PilcrowRightIcon: PilcrowRight,
  PilcrowSquare: SquarePilcrow,
  PilcrowSquareIcon: SquarePilcrow,
  Pill,
  PillBottle,
  PillBottleIcon: PillBottle,
  PillIcon: Pill,
  Pin,
  PinIcon: Pin,
  PinOff,
  PinOffIcon: PinOff,
  Pipette,
  PipetteIcon: Pipette,
  Pizza,
  PizzaIcon: Pizza,
  Plane,
  PlaneIcon: Plane,
  PlaneLanding,
  PlaneLandingIcon: PlaneLanding,
  PlaneTakeoff,
  PlaneTakeoffIcon: PlaneTakeoff,
  Play,
  PlayCircle: CirclePlay,
  PlayCircleIcon: CirclePlay,
  PlayIcon: Play,
  PlayOff,
  PlayOffIcon: PlayOff,
  PlaySquare: SquarePlay,
  PlaySquareIcon: SquarePlay,
  Plug,
  Plug2,
  Plug2Icon: Plug2,
  PlugIcon: Plug,
  PlugZap,
  PlugZap2: PlugZap,
  PlugZap2Icon: PlugZap,
  PlugZapIcon: PlugZap,
  Plus,
  PlusCircle: CirclePlus,
  PlusCircleIcon: CirclePlus,
  PlusIcon: Plus,
  PlusSquare: SquarePlus,
  PlusSquareIcon: SquarePlus,
  PocketKnife,
  PocketKnifeIcon: PocketKnife,
  Podcast,
  PodcastIcon: Podcast,
  Podium,
  PodiumIcon: Podium,
  Pointer,
  PointerIcon: Pointer,
  PointerOff,
  PointerOffIcon: PointerOff,
  Popcorn,
  PopcornIcon: Popcorn,
  Popsicle,
  PopsicleIcon: Popsicle,
  PoundSterling,
  PoundSterlingIcon: PoundSterling,
  Power,
  PowerCircle: CirclePower,
  PowerCircleIcon: CirclePower,
  PowerIcon: Power,
  PowerOff,
  PowerOffIcon: PowerOff,
  PowerSquare: SquarePower,
  PowerSquareIcon: SquarePower,
  Presentation,
  PresentationIcon: Presentation,
  Printer,
  PrinterCheck,
  PrinterCheckIcon: PrinterCheck,
  PrinterIcon: Printer,
  PrinterX,
  PrinterXIcon: PrinterX,
  Projector,
  ProjectorIcon: Projector,
  Proportions,
  ProportionsIcon: Proportions,
  Puzzle,
  PuzzleIcon: Puzzle,
  Pyramid,
  PyramidIcon: Pyramid,
  QrCode,
  QrCodeIcon: QrCode,
  Quote,
  QuoteIcon: Quote,
  Rabbit,
  RabbitIcon: Rabbit,
  Radar,
  RadarIcon: Radar,
  Radiation,
  RadiationIcon: Radiation,
  Radical,
  RadicalIcon: Radical,
  Radio,
  RadioIcon: Radio,
  RadioOff,
  RadioOffIcon: RadioOff,
  RadioReceiver,
  RadioReceiverIcon: RadioReceiver,
  RadioTower,
  RadioTowerIcon: RadioTower,
  Radius,
  RadiusIcon: Radius,
  Rainbow,
  RainbowIcon: Rainbow,
  Rat,
  RatIcon: Rat,
  Ratio,
  RatioIcon: Ratio,
  Receipt,
  ReceiptCent,
  ReceiptCentIcon: ReceiptCent,
  ReceiptEuro,
  ReceiptEuroIcon: ReceiptEuro,
  ReceiptIcon: Receipt,
  ReceiptIndianRupee,
  ReceiptIndianRupeeIcon: ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptJapaneseYenIcon: ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptPoundSterlingIcon: ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptRussianRubleIcon: ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptSwissFrancIcon: ReceiptSwissFranc,
  ReceiptText,
  ReceiptTextIcon: ReceiptText,
  ReceiptTurkishLira,
  ReceiptTurkishLiraIcon: ReceiptTurkishLira,
  RectangleCircle,
  RectangleCircleIcon: RectangleCircle,
  RectangleEllipsis,
  RectangleEllipsisIcon: RectangleEllipsis,
  RectangleGoggles,
  RectangleGogglesIcon: RectangleGoggles,
  RectangleHorizontal,
  RectangleHorizontalIcon: RectangleHorizontal,
  RectangleVertical,
  RectangleVerticalIcon: RectangleVertical,
  Recycle,
  RecycleIcon: Recycle,
  Redo,
  Redo2,
  Redo2Icon: Redo2,
  RedoDot,
  RedoDotIcon: RedoDot,
  RedoIcon: Redo,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCcwDotIcon: RefreshCcwDot,
  RefreshCcwIcon: RefreshCcw,
  RefreshCw,
  RefreshCwIcon: RefreshCw,
  RefreshCwOff,
  RefreshCwOffIcon: RefreshCwOff,
  Refrigerator,
  RefrigeratorIcon: Refrigerator,
  Regex,
  RegexIcon: Regex,
  RemoveFormatting,
  RemoveFormattingIcon: RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat1Icon: Repeat1,
  Repeat2,
  Repeat2Icon: Repeat2,
  RepeatIcon: Repeat,
  RepeatOff,
  RepeatOffIcon: RepeatOff,
  Replace,
  ReplaceAll,
  ReplaceAllIcon: ReplaceAll,
  ReplaceIcon: Replace,
  Reply,
  ReplyAll,
  ReplyAllIcon: ReplyAll,
  ReplyIcon: Reply,
  Rewind,
  RewindIcon: Rewind,
  Ribbon,
  RibbonIcon: Ribbon,
  Road,
  RoadIcon: Road,
  Rocket,
  RocketIcon: Rocket,
  RockingChair,
  RockingChairIcon: RockingChair,
  RollerCoaster,
  RollerCoasterIcon: RollerCoaster,
  Rose,
  RoseIcon: Rose,
  Rotate3D: Rotate3d,
  Rotate3DIcon: Rotate3d,
  Rotate3d,
  Rotate3dIcon: Rotate3d,
  RotateCcw,
  RotateCcwIcon: RotateCcw,
  RotateCcwKey,
  RotateCcwKeyIcon: RotateCcwKey,
  RotateCcwSquare,
  RotateCcwSquareIcon: RotateCcwSquare,
  RotateCw,
  RotateCwIcon: RotateCw,
  RotateCwSquare,
  RotateCwSquareIcon: RotateCwSquare,
  Route,
  RouteIcon: Route,
  RouteOff,
  RouteOffIcon: RouteOff,
  Router,
  RouterIcon: Router,
  Rows: Rows2,
  Rows2,
  Rows2Icon: Rows2,
  Rows3,
  Rows3Icon: Rows3,
  Rows4,
  Rows4Icon: Rows4,
  RowsIcon: Rows2,
  Rss,
  RssIcon: Rss,
  Ruler,
  RulerDimensionLine,
  RulerDimensionLineIcon: RulerDimensionLine,
  RulerIcon: Ruler,
  RussianRuble,
  RussianRubleIcon: RussianRuble,
  Sailboat,
  SailboatIcon: Sailboat,
  Salad,
  SaladIcon: Salad,
  Sandwich,
  SandwichIcon: Sandwich,
  Satellite,
  SatelliteDish,
  SatelliteDishIcon: SatelliteDish,
  SatelliteIcon: Satellite,
  SaudiRiyal,
  SaudiRiyalIcon: SaudiRiyal,
  Save,
  SaveAll,
  SaveAllIcon: SaveAll,
  SaveCheck,
  SaveCheckIcon: SaveCheck,
  SaveIcon: Save,
  SaveOff,
  SaveOffIcon: SaveOff,
  SavePen,
  SavePenIcon: SavePen,
  SavePlus,
  SavePlusIcon: SavePlus,
  Scale,
  Scale3D: Scale3d,
  Scale3DIcon: Scale3d,
  Scale3d,
  Scale3dIcon: Scale3d,
  ScaleIcon: Scale,
  Scaling,
  ScalingIcon: Scaling,
  Scan,
  ScanBarcode,
  ScanBarcodeIcon: ScanBarcode,
  ScanEye,
  ScanEyeIcon: ScanEye,
  ScanFace,
  ScanFaceIcon: ScanFace,
  ScanHeart,
  ScanHeartIcon: ScanHeart,
  ScanIcon: Scan,
  ScanLine,
  ScanLineIcon: ScanLine,
  ScanQrCode,
  ScanQrCodeIcon: ScanQrCode,
  ScanSearch,
  ScanSearchIcon: ScanSearch,
  ScanText,
  ScanTextIcon: ScanText,
  ScatterChart: ChartScatter,
  ScatterChartIcon: ChartScatter,
  School,
  School2: University,
  School2Icon: University,
  SchoolIcon: School,
  Scissors,
  ScissorsIcon: Scissors,
  ScissorsLineDashed,
  ScissorsLineDashedIcon: ScissorsLineDashed,
  ScissorsSquare: SquareScissors,
  ScissorsSquareDashedBottom: SquareBottomDashedScissors,
  ScissorsSquareDashedBottomIcon: SquareBottomDashedScissors,
  ScissorsSquareIcon: SquareScissors,
  Scooter,
  ScooterIcon: Scooter,
  ScreenShare,
  ScreenShareIcon: ScreenShare,
  ScreenShareOff,
  ScreenShareOffIcon: ScreenShareOff,
  Scroll,
  ScrollIcon: Scroll,
  ScrollText,
  ScrollTextIcon: ScrollText,
  Search,
  SearchAlert,
  SearchAlertIcon: SearchAlert,
  SearchCheck,
  SearchCheckIcon: SearchCheck,
  SearchCode,
  SearchCodeIcon: SearchCode,
  SearchIcon: Search,
  SearchSlash,
  SearchSlashIcon: SearchSlash,
  SearchX,
  SearchXIcon: SearchX,
  Section,
  SectionIcon: Section,
  Send,
  SendHorizonal: SendHorizontal,
  SendHorizonalIcon: SendHorizontal,
  SendHorizontal,
  SendHorizontalIcon: SendHorizontal,
  SendIcon: Send,
  SendToBack,
  SendToBackIcon: SendToBack,
  SeparatorHorizontal,
  SeparatorHorizontalIcon: SeparatorHorizontal,
  SeparatorVertical,
  SeparatorVerticalIcon: SeparatorVertical,
  Server,
  ServerCog,
  ServerCogIcon: ServerCog,
  ServerCrash,
  ServerCrashIcon: ServerCrash,
  ServerIcon: Server,
  ServerOff,
  ServerOffIcon: ServerOff,
  Settings,
  Settings2,
  Settings2Icon: Settings2,
  SettingsIcon: Settings,
  Shapes,
  ShapesIcon: Shapes,
  Share,
  Share2,
  Share2Icon: Share2,
  ShareIcon: Share,
  Sheet,
  SheetIcon: Sheet,
  Shell,
  ShellIcon: Shell,
  ShelvingUnit,
  ShelvingUnitIcon: ShelvingUnit,
  Shield,
  ShieldAlert,
  ShieldAlertIcon: ShieldAlert,
  ShieldBan,
  ShieldBanIcon: ShieldBan,
  ShieldCheck,
  ShieldCheckIcon: ShieldCheck,
  ShieldClose: ShieldX,
  ShieldCloseIcon: ShieldX,
  ShieldCog,
  ShieldCogCorner,
  ShieldCogCornerIcon: ShieldCogCorner,
  ShieldCogIcon: ShieldCog,
  ShieldEllipsis,
  ShieldEllipsisIcon: ShieldEllipsis,
  ShieldHalf,
  ShieldHalfIcon: ShieldHalf,
  ShieldIcon: Shield,
  ShieldMinus,
  ShieldMinusIcon: ShieldMinus,
  ShieldOff,
  ShieldOffIcon: ShieldOff,
  ShieldPlus,
  ShieldPlusIcon: ShieldPlus,
  ShieldQuestion: ShieldQuestionMark,
  ShieldQuestionIcon: ShieldQuestionMark,
  ShieldQuestionMark,
  ShieldQuestionMarkIcon: ShieldQuestionMark,
  ShieldUser,
  ShieldUserIcon: ShieldUser,
  ShieldX,
  ShieldXIcon: ShieldX,
  Ship,
  ShipIcon: Ship,
  ShipWheel,
  ShipWheelIcon: ShipWheel,
  Shirt,
  ShirtIcon: Shirt,
  ShoppingBag,
  ShoppingBagIcon: ShoppingBag,
  ShoppingBasket,
  ShoppingBasketIcon: ShoppingBasket,
  ShoppingCart,
  ShoppingCartIcon: ShoppingCart,
  Shovel,
  ShovelIcon: Shovel,
  ShowerHead,
  ShowerHeadIcon: ShowerHead,
  Shredder,
  ShredderIcon: Shredder,
  Shrimp,
  ShrimpIcon: Shrimp,
  Shrink,
  ShrinkIcon: Shrink,
  Shrub,
  ShrubIcon: Shrub,
  Shuffle,
  ShuffleIcon: Shuffle,
  Sidebar: PanelLeft,
  SidebarClose: PanelLeftClose,
  SidebarCloseIcon: PanelLeftClose,
  SidebarIcon: PanelLeft,
  SidebarOpen: PanelLeftOpen,
  SidebarOpenIcon: PanelLeftOpen,
  Sigma,
  SigmaIcon: Sigma,
  SigmaSquare: SquareSigma,
  SigmaSquareIcon: SquareSigma,
  Signal,
  SignalHigh,
  SignalHighIcon: SignalHigh,
  SignalIcon: Signal,
  SignalLow,
  SignalLowIcon: SignalLow,
  SignalMedium,
  SignalMediumIcon: SignalMedium,
  SignalZero,
  SignalZeroIcon: SignalZero,
  Signature,
  SignatureIcon: Signature,
  Signpost,
  SignpostBig,
  SignpostBigIcon: SignpostBig,
  SignpostIcon: Signpost,
  Siren,
  SirenIcon: Siren,
  SkipBack,
  SkipBackIcon: SkipBack,
  SkipForward,
  SkipForwardIcon: SkipForward,
  Skull,
  SkullIcon: Skull,
  Slash,
  SlashIcon: Slash,
  SlashSquare: SquareSlash,
  SlashSquareIcon: SquareSlash,
  Slice,
  SliceIcon: Slice,
  Sliders: SlidersVertical,
  SlidersHorizontal,
  SlidersHorizontalIcon: SlidersHorizontal,
  SlidersIcon: SlidersVertical,
  SlidersVertical,
  SlidersVerticalIcon: SlidersVertical,
  Smartphone,
  SmartphoneCharging,
  SmartphoneChargingIcon: SmartphoneCharging,
  SmartphoneIcon: Smartphone,
  SmartphoneNfc,
  SmartphoneNfcIcon: SmartphoneNfc,
  Smile,
  SmileIcon: Smile,
  SmilePlus,
  SmilePlusIcon: SmilePlus,
  Snail,
  SnailIcon: Snail,
  Snowflake,
  SnowflakeIcon: Snowflake,
  SoapDispenserDroplet,
  SoapDispenserDropletIcon: SoapDispenserDroplet,
  Sofa,
  SofaIcon: Sofa,
  SolarPanel,
  SolarPanelIcon: SolarPanel,
  SortAsc: ArrowUpNarrowWide,
  SortAscIcon: ArrowUpNarrowWide,
  SortDesc: ArrowDownWideNarrow,
  SortDescIcon: ArrowDownWideNarrow,
  Soup,
  SoupIcon: Soup,
  Space,
  SpaceIcon: Space,
  Spade,
  SpadeIcon: Spade,
  Sparkle,
  SparkleIcon: Sparkle,
  Sparkles,
  SparklesIcon: Sparkles,
  Speaker,
  SpeakerIcon: Speaker,
  Speech,
  SpeechIcon: Speech,
  SpellCheck,
  SpellCheck2,
  SpellCheck2Icon: SpellCheck2,
  SpellCheckIcon: SpellCheck,
  Spline,
  SplineIcon: Spline,
  SplinePointer,
  SplinePointerIcon: SplinePointer,
  Split,
  SplitIcon: Split,
  SplitSquareHorizontal: SquareSplitHorizontal,
  SplitSquareHorizontalIcon: SquareSplitHorizontal,
  SplitSquareVertical: SquareSplitVertical,
  SplitSquareVerticalIcon: SquareSplitVertical,
  Spool,
  SpoolIcon: Spool,
  SportShoe,
  SportShoeIcon: SportShoe,
  Spotlight,
  SpotlightIcon: Spotlight,
  SprayCan,
  SprayCanIcon: SprayCan,
  Sprout,
  SproutIcon: Sprout,
  Square,
  SquareActivity,
  SquareActivityIcon: SquareActivity,
  SquareArrowDown,
  SquareArrowDownIcon: SquareArrowDown,
  SquareArrowDownLeft,
  SquareArrowDownLeftIcon: SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareArrowDownRightIcon: SquareArrowDownRight,
  SquareArrowLeft,
  SquareArrowLeftIcon: SquareArrowLeft,
  SquareArrowOutDownLeft,
  SquareArrowOutDownLeftIcon: SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutDownRightIcon: SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpLeftIcon: SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowOutUpRightIcon: SquareArrowOutUpRight,
  SquareArrowRight,
  SquareArrowRightEnter,
  SquareArrowRightEnterIcon: SquareArrowRightEnter,
  SquareArrowRightExit,
  SquareArrowRightExitIcon: SquareArrowRightExit,
  SquareArrowRightIcon: SquareArrowRight,
  SquareArrowUp,
  SquareArrowUpIcon: SquareArrowUp,
  SquareArrowUpLeft,
  SquareArrowUpLeftIcon: SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareArrowUpRightIcon: SquareArrowUpRight,
  SquareAsterisk,
  SquareAsteriskIcon: SquareAsterisk,
  SquareBottomDashedScissors,
  SquareBottomDashedScissorsIcon: SquareBottomDashedScissors,
  SquareCenterlineDashedHorizontal,
  SquareCenterlineDashedHorizontalIcon: SquareCenterlineDashedHorizontal,
  SquareCenterlineDashedVertical,
  SquareCenterlineDashedVerticalIcon: SquareCenterlineDashedVertical,
  SquareChartGantt,
  SquareChartGanttIcon: SquareChartGantt,
  SquareCheck,
  SquareCheckBig,
  SquareCheckBigIcon: SquareCheckBig,
  SquareCheckIcon: SquareCheck,
  SquareChevronDown,
  SquareChevronDownIcon: SquareChevronDown,
  SquareChevronLeft,
  SquareChevronLeftIcon: SquareChevronLeft,
  SquareChevronRight,
  SquareChevronRightIcon: SquareChevronRight,
  SquareChevronUp,
  SquareChevronUpIcon: SquareChevronUp,
  SquareCode,
  SquareCodeIcon: SquareCode,
  SquareDashed,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedBottomCodeIcon: SquareDashedBottomCode,
  SquareDashedBottomIcon: SquareDashedBottom,
  SquareDashedIcon: SquareDashed,
  SquareDashedKanban,
  SquareDashedKanbanIcon: SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDashedMousePointerIcon: SquareDashedMousePointer,
  SquareDashedText,
  SquareDashedTextIcon: SquareDashedText,
  SquareDashedTopSolid,
  SquareDashedTopSolidIcon: SquareDashedTopSolid,
  SquareDivide,
  SquareDivideIcon: SquareDivide,
  SquareDot,
  SquareDotIcon: SquareDot,
  SquareEqual,
  SquareEqualIcon: SquareEqual,
  SquareFunction,
  SquareFunctionIcon: SquareFunction,
  SquareGanttChart: SquareChartGantt,
  SquareGanttChartIcon: SquareChartGantt,
  SquareIcon: Square,
  SquareKanban,
  SquareKanbanIcon: SquareKanban,
  SquareLibrary,
  SquareLibraryIcon: SquareLibrary,
  SquareM,
  SquareMIcon: SquareM,
  SquareMenu,
  SquareMenuIcon: SquareMenu,
  SquareMinus,
  SquareMinusIcon: SquareMinus,
  SquareMousePointer,
  SquareMousePointerIcon: SquareMousePointer,
  SquareParking,
  SquareParkingIcon: SquareParking,
  SquareParkingOff,
  SquareParkingOffIcon: SquareParkingOff,
  SquarePause,
  SquarePauseIcon: SquarePause,
  SquarePen,
  SquarePenIcon: SquarePen,
  SquarePercent,
  SquarePercentIcon: SquarePercent,
  SquarePi,
  SquarePiIcon: SquarePi,
  SquarePilcrow,
  SquarePilcrowIcon: SquarePilcrow,
  SquarePlay,
  SquarePlayIcon: SquarePlay,
  SquarePlus,
  SquarePlusIcon: SquarePlus,
  SquarePower,
  SquarePowerIcon: SquarePower,
  SquareRadical,
  SquareRadicalIcon: SquareRadical,
  SquareRoundCorner,
  SquareRoundCornerIcon: SquareRoundCorner,
  SquareScissors,
  SquareScissorsIcon: SquareScissors,
  SquareSigma,
  SquareSigmaIcon: SquareSigma,
  SquareSlash,
  SquareSlashIcon: SquareSlash,
  SquareSplitHorizontal,
  SquareSplitHorizontalIcon: SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSplitVerticalIcon: SquareSplitVertical,
  SquareSquare,
  SquareSquareIcon: SquareSquare,
  SquareStack,
  SquareStackIcon: SquareStack,
  SquareStar,
  SquareStarIcon: SquareStar,
  SquareStop,
  SquareStopIcon: SquareStop,
  SquareTerminal,
  SquareTerminalIcon: SquareTerminal,
  SquareUser,
  SquareUserIcon: SquareUser,
  SquareUserRound,
  SquareUserRoundIcon: SquareUserRound,
  SquareX,
  SquareXIcon: SquareX,
  SquaresExclude,
  SquaresExcludeIcon: SquaresExclude,
  SquaresIntersect,
  SquaresIntersectIcon: SquaresIntersect,
  SquaresSubtract,
  SquaresSubtractIcon: SquaresSubtract,
  SquaresUnite,
  SquaresUniteIcon: SquaresUnite,
  Squircle,
  SquircleDashed,
  SquircleDashedIcon: SquircleDashed,
  SquircleIcon: Squircle,
  Squirrel,
  SquirrelIcon: Squirrel,
  Stamp,
  StampIcon: Stamp,
  Star,
  StarCheck,
  StarCheckIcon: StarCheck,
  StarHalf,
  StarHalfIcon: StarHalf,
  StarIcon: Star,
  StarMinus,
  StarMinusIcon: StarMinus,
  StarOff,
  StarOffIcon: StarOff,
  StarPlus,
  StarPlusIcon: StarPlus,
  StarX,
  StarXIcon: StarX,
  Stars: Sparkles,
  StarsIcon: Sparkles,
  StepBack,
  StepBackIcon: StepBack,
  StepForward,
  StepForwardIcon: StepForward,
  Stethoscope,
  StethoscopeIcon: Stethoscope,
  Sticker,
  StickerIcon: Sticker,
  StickyNote,
  StickyNoteCheck,
  StickyNoteCheckIcon: StickyNoteCheck,
  StickyNoteIcon: StickyNote,
  StickyNoteMinus,
  StickyNoteMinusIcon: StickyNoteMinus,
  StickyNoteOff,
  StickyNoteOffIcon: StickyNoteOff,
  StickyNotePlus,
  StickyNotePlusIcon: StickyNotePlus,
  StickyNoteX,
  StickyNoteXIcon: StickyNoteX,
  StickyNotes,
  StickyNotesIcon: StickyNotes,
  Stone,
  StoneIcon: Stone,
  StopCircle: CircleStop,
  StopCircleIcon: CircleStop,
  Store,
  StoreIcon: Store,
  StretchHorizontal,
  StretchHorizontalIcon: StretchHorizontal,
  StretchVertical,
  StretchVerticalIcon: StretchVertical,
  Strikethrough,
  StrikethroughIcon: Strikethrough,
  Subscript,
  SubscriptIcon: Subscript,
  Subtitles: Captions,
  SubtitlesIcon: Captions,
  Summary,
  SummaryIcon: Summary,
  Sun,
  SunDim,
  SunDimIcon: SunDim,
  SunIcon: Sun,
  SunMedium,
  SunMediumIcon: SunMedium,
  SunMoon,
  SunMoonIcon: SunMoon,
  SunSnow,
  SunSnowIcon: SunSnow,
  Sunrise,
  SunriseIcon: Sunrise,
  Sunset,
  SunsetIcon: Sunset,
  Superscript,
  SuperscriptIcon: Superscript,
  SwatchBook,
  SwatchBookIcon: SwatchBook,
  SwissFranc,
  SwissFrancIcon: SwissFranc,
  SwitchCamera,
  SwitchCameraIcon: SwitchCamera,
  Sword,
  SwordIcon: Sword,
  Swords,
  SwordsIcon: Swords,
  Syringe,
  SyringeIcon: Syringe,
  Table,
  Table2,
  Table2Icon: Table2,
  TableCellsMerge,
  TableCellsMergeIcon: TableCellsMerge,
  TableCellsSplit,
  TableCellsSplitIcon: TableCellsSplit,
  TableColumnsSplit,
  TableColumnsSplitIcon: TableColumnsSplit,
  TableConfig: Columns3Cog,
  TableConfigIcon: Columns3Cog,
  TableIcon: Table,
  TableOfContents,
  TableOfContentsIcon: TableOfContents,
  TableProperties,
  TablePropertiesIcon: TableProperties,
  TableRowsSplit,
  TableRowsSplitIcon: TableRowsSplit,
  Tablet,
  TabletIcon: Tablet,
  TabletSmartphone,
  TabletSmartphoneIcon: TabletSmartphone,
  Tablets,
  TabletsIcon: Tablets,
  Tag,
  TagIcon: Tag,
  TagPlus,
  TagPlusIcon: TagPlus,
  TagX,
  TagXIcon: TagX,
  Tags,
  TagsIcon: Tags,
  Tally1,
  Tally1Icon: Tally1,
  Tally2,
  Tally2Icon: Tally2,
  Tally3,
  Tally3Icon: Tally3,
  Tally4,
  Tally4Icon: Tally4,
  Tally5,
  Tally5Icon: Tally5,
  Tangent,
  TangentIcon: Tangent,
  Target,
  TargetIcon: Target,
  Telescope,
  TelescopeIcon: Telescope,
  Tent,
  TentIcon: Tent,
  TentTree,
  TentTreeIcon: TentTree,
  Terminal,
  TerminalIcon: Terminal,
  TerminalSquare: SquareTerminal,
  TerminalSquareIcon: SquareTerminal,
  TestTube,
  TestTube2: TestTubeDiagonal,
  TestTube2Icon: TestTubeDiagonal,
  TestTubeDiagonal,
  TestTubeDiagonalIcon: TestTubeDiagonal,
  TestTubeIcon: TestTube,
  TestTubes,
  TestTubesIcon: TestTubes,
  Text: TextAlignStart,
  TextAlignCenter,
  TextAlignCenterIcon: TextAlignCenter,
  TextAlignEnd,
  TextAlignEndIcon: TextAlignEnd,
  TextAlignJustify,
  TextAlignJustifyIcon: TextAlignJustify,
  TextAlignStart,
  TextAlignStartIcon: TextAlignStart,
  TextCursor,
  TextCursorIcon: TextCursor,
  TextCursorInput,
  TextCursorInputIcon: TextCursorInput,
  TextIcon: TextAlignStart,
  TextInitial,
  TextInitialIcon: TextInitial,
  TextQuote,
  TextQuoteIcon: TextQuote,
  TextSearch,
  TextSearchIcon: TextSearch,
  TextSelect: SquareDashedText,
  TextSelectIcon: SquareDashedText,
  TextSelection: SquareDashedText,
  TextSelectionIcon: SquareDashedText,
  TextWrap,
  TextWrapIcon: TextWrap,
  Theater,
  TheaterIcon: Theater,
  Thermometer,
  ThermometerIcon: Thermometer,
  ThermometerSnowflake,
  ThermometerSnowflakeIcon: ThermometerSnowflake,
  ThermometerSun,
  ThermometerSunIcon: ThermometerSun,
  ThumbsDown,
  ThumbsDownIcon: ThumbsDown,
  ThumbsUp,
  ThumbsUpIcon: ThumbsUp,
  Ticket,
  TicketCheck,
  TicketCheckIcon: TicketCheck,
  TicketIcon: Ticket,
  TicketMinus,
  TicketMinusIcon: TicketMinus,
  TicketPercent,
  TicketPercentIcon: TicketPercent,
  TicketPlus,
  TicketPlusIcon: TicketPlus,
  TicketSlash,
  TicketSlashIcon: TicketSlash,
  TicketX,
  TicketXIcon: TicketX,
  Tickets,
  TicketsIcon: Tickets,
  TicketsPlane,
  TicketsPlaneIcon: TicketsPlane,
  Timeline,
  TimelineIcon: Timeline,
  Timer,
  TimerIcon: Timer,
  TimerOff,
  TimerOffIcon: TimerOff,
  TimerReset,
  TimerResetIcon: TimerReset,
  ToggleLeft,
  ToggleLeftIcon: ToggleLeft,
  ToggleRight,
  ToggleRightIcon: ToggleRight,
  Toilet,
  ToiletIcon: Toilet,
  ToolCase,
  ToolCaseIcon: ToolCase,
  Toolbox,
  ToolboxIcon: Toolbox,
  Tornado,
  TornadoIcon: Tornado,
  Torus,
  TorusIcon: Torus,
  Touchpad,
  TouchpadIcon: Touchpad,
  TouchpadOff,
  TouchpadOffIcon: TouchpadOff,
  TowelRack,
  TowelRackIcon: TowelRack,
  TowerControl,
  TowerControlIcon: TowerControl,
  ToyBrick,
  ToyBrickIcon: ToyBrick,
  Tractor,
  TractorIcon: Tractor,
  TrafficCone,
  TrafficConeIcon: TrafficCone,
  Train: TramFront,
  TrainFront,
  TrainFrontIcon: TrainFront,
  TrainFrontTunnel,
  TrainFrontTunnelIcon: TrainFrontTunnel,
  TrainIcon: TramFront,
  TrainTrack,
  TrainTrackIcon: TrainTrack,
  TramFront,
  TramFrontIcon: TramFront,
  Transgender,
  TransgenderIcon: Transgender,
  Trash,
  Trash2,
  Trash2Icon: Trash2,
  TrashIcon: Trash,
  TreeDeciduous,
  TreeDeciduousIcon: TreeDeciduous,
  TreePalm,
  TreePalmIcon: TreePalm,
  TreePine,
  TreePineIcon: TreePine,
  Trees,
  TreesIcon: Trees,
  TrendingDown,
  TrendingDownIcon: TrendingDown,
  TrendingUp,
  TrendingUpDown,
  TrendingUpDownIcon: TrendingUpDown,
  TrendingUpIcon: TrendingUp,
  Triangle,
  TriangleAlert,
  TriangleAlertIcon: TriangleAlert,
  TriangleDashed,
  TriangleDashedIcon: TriangleDashed,
  TriangleIcon: Triangle,
  TriangleRight,
  TriangleRightIcon: TriangleRight,
  Trophy,
  TrophyIcon: Trophy,
  Truck,
  TruckElectric,
  TruckElectricIcon: TruckElectric,
  TruckIcon: Truck,
  TurkishLira,
  TurkishLiraIcon: TurkishLira,
  Turntable,
  TurntableIcon: Turntable,
  Turtle,
  TurtleIcon: Turtle,
  Tv,
  Tv2: TvMinimal,
  Tv2Icon: TvMinimal,
  TvIcon: Tv,
  TvMinimal,
  TvMinimalIcon: TvMinimal,
  TvMinimalPlay,
  TvMinimalPlayIcon: TvMinimalPlay,
  Type,
  TypeIcon: Type,
  TypeOutline,
  TypeOutlineIcon: TypeOutline,
  Umbrella,
  UmbrellaIcon: Umbrella,
  UmbrellaOff,
  UmbrellaOffIcon: UmbrellaOff,
  Underline,
  UnderlineIcon: Underline,
  Undo,
  Undo2,
  Undo2Icon: Undo2,
  UndoDot,
  UndoDotIcon: UndoDot,
  UndoIcon: Undo,
  UnfoldHorizontal,
  UnfoldHorizontalIcon: UnfoldHorizontal,
  UnfoldVertical,
  UnfoldVerticalIcon: UnfoldVertical,
  Ungroup,
  UngroupIcon: Ungroup,
  University,
  UniversityIcon: University,
  Unlink,
  Unlink2,
  Unlink2Icon: Unlink2,
  UnlinkIcon: Unlink,
  Unlock: LockOpen,
  UnlockIcon: LockOpen,
  UnlockKeyhole: LockKeyholeOpen,
  UnlockKeyholeIcon: LockKeyholeOpen,
  Unplug,
  UnplugIcon: Unplug,
  Upload,
  UploadCloud: CloudUpload,
  UploadCloudIcon: CloudUpload,
  UploadIcon: Upload,
  Usb,
  UsbIcon: Usb,
  User,
  User2: UserRound,
  User2Icon: UserRound,
  UserCheck,
  UserCheck2: UserRoundCheck,
  UserCheck2Icon: UserRoundCheck,
  UserCheckIcon: UserCheck,
  UserCircle: CircleUser,
  UserCircle2: CircleUserRound,
  UserCircle2Icon: CircleUserRound,
  UserCircleIcon: CircleUser,
  UserCog,
  UserCog2: UserRoundCog,
  UserCog2Icon: UserRoundCog,
  UserCogIcon: UserCog,
  UserIcon: User,
  UserKey,
  UserKeyIcon: UserKey,
  UserLock,
  UserLockIcon: UserLock,
  UserMinus,
  UserMinus2: UserRoundMinus,
  UserMinus2Icon: UserRoundMinus,
  UserMinusIcon: UserMinus,
  UserPen,
  UserPenIcon: UserPen,
  UserPlus,
  UserPlus2: UserRoundPlus,
  UserPlus2Icon: UserRoundPlus,
  UserPlusIcon: UserPlus,
  UserRound,
  UserRoundArrowLeft,
  UserRoundArrowLeftIcon: UserRoundArrowLeft,
  UserRoundCheck,
  UserRoundCheckIcon: UserRoundCheck,
  UserRoundCog,
  UserRoundCogIcon: UserRoundCog,
  UserRoundIcon: UserRound,
  UserRoundKey,
  UserRoundKeyIcon: UserRoundKey,
  UserRoundMinus,
  UserRoundMinusIcon: UserRoundMinus,
  UserRoundPen,
  UserRoundPenIcon: UserRoundPen,
  UserRoundPlus,
  UserRoundPlusIcon: UserRoundPlus,
  UserRoundSearch,
  UserRoundSearchIcon: UserRoundSearch,
  UserRoundX,
  UserRoundXIcon: UserRoundX,
  UserSearch,
  UserSearchIcon: UserSearch,
  UserSquare: SquareUser,
  UserSquare2: SquareUserRound,
  UserSquare2Icon: SquareUserRound,
  UserSquareIcon: SquareUser,
  UserStar,
  UserStarIcon: UserStar,
  UserX,
  UserX2: UserRoundX,
  UserX2Icon: UserRoundX,
  UserXIcon: UserX,
  Users,
  Users2: UsersRound,
  Users2Icon: UsersRound,
  UsersIcon: Users,
  UsersRound,
  UsersRoundIcon: UsersRound,
  Utensils,
  UtensilsCrossed,
  UtensilsCrossedIcon: UtensilsCrossed,
  UtensilsIcon: Utensils,
  UtilityPole,
  UtilityPoleIcon: UtilityPole,
  Van,
  VanIcon: Van,
  Variable,
  VariableIcon: Variable,
  Vault,
  VaultIcon: Vault,
  VectorSquare,
  VectorSquareIcon: VectorSquare,
  Vegan,
  VeganIcon: Vegan,
  VenetianMask,
  VenetianMaskIcon: VenetianMask,
  Venus,
  VenusAndMars,
  VenusAndMarsIcon: VenusAndMars,
  VenusIcon: Venus,
  Verified: BadgeCheck,
  VerifiedIcon: BadgeCheck,
  Vibrate,
  VibrateIcon: Vibrate,
  VibrateOff,
  VibrateOffIcon: VibrateOff,
  Video,
  VideoIcon: Video,
  VideoOff,
  VideoOffIcon: VideoOff,
  Videotape,
  VideotapeIcon: Videotape,
  View,
  ViewIcon: View,
  Voicemail,
  VoicemailIcon: Voicemail,
  Volleyball,
  VolleyballIcon: Volleyball,
  Volume,
  Volume1,
  Volume1Icon: Volume1,
  Volume2,
  Volume2Icon: Volume2,
  VolumeIcon: Volume,
  VolumeOff,
  VolumeOffIcon: VolumeOff,
  VolumeX,
  VolumeXIcon: VolumeX,
  Vote,
  VoteIcon: Vote,
  Wallet,
  Wallet2: WalletMinimal,
  Wallet2Icon: WalletMinimal,
  WalletCards,
  WalletCardsIcon: WalletCards,
  WalletIcon: Wallet,
  WalletMinimal,
  WalletMinimalIcon: WalletMinimal,
  Wallpaper,
  WallpaperIcon: Wallpaper,
  Wand,
  Wand2: WandSparkles,
  Wand2Icon: WandSparkles,
  WandIcon: Wand,
  WandSparkles,
  WandSparklesIcon: WandSparkles,
  Warehouse,
  WarehouseIcon: Warehouse,
  WashingMachine,
  WashingMachineIcon: WashingMachine,
  Watch,
  WatchIcon: Watch,
  Waves: WavesHorizontal,
  WavesArrowDown,
  WavesArrowDownIcon: WavesArrowDown,
  WavesArrowUp,
  WavesArrowUpIcon: WavesArrowUp,
  WavesHorizontal,
  WavesHorizontalIcon: WavesHorizontal,
  WavesIcon: WavesHorizontal,
  WavesLadder,
  WavesLadderIcon: WavesLadder,
  WavesVertical,
  WavesVerticalIcon: WavesVertical,
  Waypoints,
  WaypointsIcon: Waypoints,
  Webcam,
  WebcamIcon: Webcam,
  WebcamOff,
  WebcamOffIcon: WebcamOff,
  Webhook,
  WebhookIcon: Webhook,
  WebhookOff,
  WebhookOffIcon: WebhookOff,
  Weight,
  WeightIcon: Weight,
  WeightTilde,
  WeightTildeIcon: WeightTilde,
  Wheat,
  WheatIcon: Wheat,
  WheatOff,
  WheatOffIcon: WheatOff,
  WholeWord,
  WholeWordIcon: WholeWord,
  Wifi,
  WifiCog,
  WifiCogIcon: WifiCog,
  WifiHigh,
  WifiHighIcon: WifiHigh,
  WifiIcon: Wifi,
  WifiLow,
  WifiLowIcon: WifiLow,
  WifiOff,
  WifiOffIcon: WifiOff,
  WifiPen,
  WifiPenIcon: WifiPen,
  WifiSync,
  WifiSyncIcon: WifiSync,
  WifiZero,
  WifiZeroIcon: WifiZero,
  Wind,
  WindArrowDown,
  WindArrowDownIcon: WindArrowDown,
  WindIcon: Wind,
  Wine,
  WineIcon: Wine,
  WineOff,
  WineOffIcon: WineOff,
  Workflow,
  WorkflowIcon: Workflow,
  Worm,
  WormIcon: Worm,
  WrapText: TextWrap,
  WrapTextIcon: TextWrap,
  Wrench,
  WrenchIcon: Wrench,
  WrenchOff,
  WrenchOffIcon: WrenchOff,
  X,
  XCircle: CircleX,
  XCircleIcon: CircleX,
  XIcon: X,
  XLineTop,
  XLineTopIcon: XLineTop,
  XOctagon: OctagonX,
  XOctagonIcon: OctagonX,
  XSquare: SquareX,
  XSquareIcon: SquareX,
  Zap,
  ZapIcon: Zap,
  ZapOff,
  ZapOffIcon: ZapOff,
  ZodiacAquarius,
  ZodiacAquariusIcon: ZodiacAquarius,
  ZodiacAries,
  ZodiacAriesIcon: ZodiacAries,
  ZodiacCancer,
  ZodiacCancerIcon: ZodiacCancer,
  ZodiacCapricorn,
  ZodiacCapricornIcon: ZodiacCapricorn,
  ZodiacGemini,
  ZodiacGeminiIcon: ZodiacGemini,
  ZodiacLeo,
  ZodiacLeoIcon: ZodiacLeo,
  ZodiacLibra,
  ZodiacLibraIcon: ZodiacLibra,
  ZodiacOphiuchus,
  ZodiacOphiuchusIcon: ZodiacOphiuchus,
  ZodiacPisces,
  ZodiacPiscesIcon: ZodiacPisces,
  ZodiacSagittarius,
  ZodiacSagittariusIcon: ZodiacSagittarius,
  ZodiacScorpio,
  ZodiacScorpioIcon: ZodiacScorpio,
  ZodiacTaurus,
  ZodiacTaurusIcon: ZodiacTaurus,
  ZodiacVirgo,
  ZodiacVirgoIcon: ZodiacVirgo,
  ZoomIn,
  ZoomInIcon: ZoomIn,
  ZoomOut,
  ZoomOutIcon: ZoomOut,
  createLucideIcon,
  defaultAttributes,
  icons: index
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, ...rest } = Astro2.props;
  const IconComponent = Lucide[name];
  return renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { ...rest })}`;
}, "/Users/tatsuya/study/ciccc/project_05_final-project-full-stack-real-time-app-underdogs/frontend/src/components/common/Icon.astro", void 0);

export { $$Icon as $, LoaderCircle as L };
