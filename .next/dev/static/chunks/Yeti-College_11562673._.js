(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["cn", () => cn]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)"
      );
    function cn(...inputs) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "twMerge"
      ])(
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "clsx"
        ])(inputs)
      );
    }
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/Yeti-College/components/ui/button.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Button",
      () => Button,
      "buttonVariants",
      () => buttonVariants,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    const buttonVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    );
    function Button({ className, variant, size, asChild = false, ...props }) {
      const Comp = asChild
        ? __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "Slot"
          ]
        : "button";
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        Comp,
        {
          "data-slot": "button",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            buttonVariants({
              variant,
              size,
              className,
            })
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/button.tsx",
          lineNumber: 52,
          columnNumber: 5,
        },
        this
      );
    }
    _c = Button;
    var _c;
    __turbopack_context__.k.register(_c, "Button");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/Yeti-College/components/header.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Header]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/image.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/button.tsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    // --- DOMAIN UTILITY (Simulated/Placeholder) ---
    // IMPORTANT: In a real application, you'd get the domain from window.location.hostname
    // or a server-side context. For this code example, we will hardcode it for demonstration.
    const getCurrentDomain = () => {
      // Replace this with your actual logic to get the domain
      // Example for testing the filter:
      // return "kennt.edu.np"; // Will hide BCA
      // return "yeti.edu.np"; // Will show BCA
      // Using a safe placeholder that will require you to set the real domain logic:
      if (("TURBOPACK compile-time truthy", 1)) {
        return window.location.hostname;
      }
      //TURBOPACK unreachable
    };
    // --- DATA ---
    const aboutLinks = [
      {
        href: "/about",
        label: "About Us",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__[
          "History"
        ],
        desc: "Our history & legacy",
      },
      {
        href: "/about/message/ceo",
        label: "Message From CEO",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
        desc: "Leadership insights",
      },
      {
        href: "/about/message/director",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
        label: "Message From Director",
        desc: "Strategic vision",
      },
      {
        href: "/about/message/principal",
        label: "Message From Principal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
        desc: "Academic focus",
      },
      {
        href: "/about/message/hod",
        label: "Message From HOD",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
        desc: "Admission focus",
      },
      {
        href: "/about/mission-vision",
        label: "Mission & Vision",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__[
          "Trophy"
        ],
        desc: "Our core values",
      },
      {
        href: "/about/facilities",
        label: "Facilities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__[
          "Building2"
        ],
        desc: "Campus infrastructure",
      },
      {
        href: "/about/team",
        label: "Our Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__[
          "Users"
        ],
        desc: "Faculty & staff",
      },
      {
        href: "/about/affiliation",
        label: "Affiliation",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__[
          "Users"
        ],
        desc: "Affiliated Universities",
      },
    ];
    const programLinks = [
      {
        href: "/programs/mba",
        label: "Master in Business Administration",
        code: "MBA",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__[
          "Briefcase"
        ],
      },
      {
        href: "/programs/bhm",
        label: "Bachelor in Hotel Management",
        code: "BHM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__[
          "Hotel"
        ],
      },
      {
        href: "/programs/babm",
        label: "Bachelor in Airlines Business Management",
        code: "BABM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
          "Globe"
        ],
      },
      {
        href: "/programs/bamm",
        label: "Bachelor in MICE (Event) Management",
        code: "Bamm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
          "Globe"
        ],
      },
      {
        href: "/programs/bttm",
        label: "Bachelor in Tourism & MICE Management",
        code: "BTTM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__[
          "Briefcase"
        ],
      },
      {
        href: "/programs/bca",
        label: "Bachelor of Computer Application",
        code: "BCA",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__[
          "Cpu"
        ],
      },
      // {
      //   href: "/programs/bsccsi",
      //   label: "B.Sc Computer Science and Software Development Innovation",
      //   code: "B.Sc CSI",
      //   icon: ComputerIcon,
      // },
      {
        href: "/programs/bscictc",
        label: "B.Sc Information and Communication Technology-Cybersecurity",
        code: "BCA",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__[
          "Cpu"
        ],
      },
    ];
    const standardLinks = [
      {
        label: "Notices",
        href: "/notices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
          "FileText"
        ],
      },
      {
        label: "Events",
        href: "/events",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__[
          "CalendarDays"
        ],
      },
      {
        label: "blog",
        href: "/blog",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
          "Globe"
        ],
      },
      {
        label: "Gallery",
        href: "/gallery",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__[
          "Image"
        ],
      },
      {
        label: "Contact",
        href: "/contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
      },
    ];
    // --- SUB-COMPONENTS ---
    const NavItem = ({ label, active, onMouseEnter }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          onMouseEnter: onMouseEnter,
          className:
            "relative h-full flex items-center cursor-pointer px-4 group",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "cn"
                ])(
                  "text-sm font-semibold uppercase tracking-wide transition-colors duration-200 flex items-center gap-1",
                  active
                    ? "text-zinc-900"
                    : "text-zinc-500 group-hover:text-zinc-900"
                ),
                children: [
                  label,
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                      "ChevronDown"
                    ],
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "w-4 h-4 transition-transform duration-300",
                        active ? "rotate-180" : "rotate-0"
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 185,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 178,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute bottom-0 left-0 w-full h-6 translate-y-full bg-transparent",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 192,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/header.tsx",
          lineNumber: 174,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    _c = NavItem;
    const AboutListItem = ({ item }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
        {
          href: item.href,
          className:
            "group flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-all duration-300 border border-transparent hover:border-zinc-100",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  item.icon,
                  {
                    className: "w-5 h-5",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/header.tsx",
                    lineNumber: 202,
                    columnNumber: 7,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 201,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "h4",
                    {
                      className:
                        "text-sm font-bold text-zinc-900 group-hover:text-black",
                      children: item.label,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 205,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className:
                        "text-xs text-zinc-400 font-medium group-hover:text-zinc-500",
                      children: item.desc,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 208,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 204,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                "ChevronRight"
              ],
              {
                className:
                  "w-4 h-4 ml-auto text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 212,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/header.tsx",
          lineNumber: 197,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    _c1 = AboutListItem;
    const ProgramCard = ({ item }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
        {
          href: item.href,
          className:
            "group relative overflow-hidden bg-zinc-50 rounded-2xl p-4 border border-zinc-100 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 flex flex-col h-full",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex justify-between items-start mb-3",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "w-10 h-10 rounded-full bg-white flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform duration-300",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        item.icon,
                        {
                          className: "w-4 h-4 text-zinc-700",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 223,
                          columnNumber: 9,
                        },
                        ("TURBOPACK compile-time value", void 0)
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 222,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-zinc-900 transition-colors",
                      children: item.code,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 225,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 221,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h3",
              {
                className:
                  "text-sm font-bold text-zinc-900 leading-tight mb-2 mt-auto",
                children: item.label,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 229,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-900 transition-colors mt-1",
                children: [
                  "View ",
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                      "ArrowRight"
                    ],
                    {
                      className: "w-3 h-3",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 233,
                      columnNumber: 12,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 232,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/header.tsx",
          lineNumber: 217,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    _c2 = ProgramCard;
    // Helper component for Mobile Dropdowns
    const MobileMenuSection = ({ title, children, isOpen, onToggle }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "border-b border-zinc-100 last:border-0",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                onClick: onToggle,
                className:
                  "w-full flex items-center justify-between py-4 text-left font-bold text-zinc-900",
                children: [
                  title,
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                      "ChevronDown"
                    ],
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "cn"
                      ])(
                        "w-5 h-5 text-zinc-400 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 256,
                      columnNumber: 7,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 251,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "AnimatePresence"
              ],
              {
                children:
                  isOpen &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "motion"
                    ].div,
                    {
                      initial: {
                        height: 0,
                        opacity: 0,
                      },
                      animate: {
                        height: "auto",
                        opacity: 1,
                      },
                      exit: {
                        height: 0,
                        opacity: 0,
                      },
                      className: "overflow-hidden",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "pb-4 pt-2 text-zinc-600",
                          children: children,
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 271,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0)
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/header.tsx",
                      lineNumber: 265,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/header.tsx",
                lineNumber: 263,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/header.tsx",
          lineNumber: 250,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    _c3 = MobileMenuSection;
    function Header() {
      _s();
      const [activeMenu, setActiveMenu] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [mobileExpand, setMobileExpand] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      // SEARCH STATES
      const [programSearchQuery, setProgramSearchQuery] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      const [mobileSearchQuery, setMobileSearchQuery] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      const handleMouseLeave = () => setActiveMenu(null);
      const toggleMobileSection = (section) => {
        setMobileExpand(mobileExpand === section ? null : section);
      };
      // --- BCA FILTERING LOGIC ---
      const currentDomain = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "Header.useMemo[currentDomain]": () => getCurrentDomain(),
        }["Header.useMemo[currentDomain]"],
        []
      );
      const isBCAForbidden = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "Header.useMemo[isBCAForbidden]": () => {
            // Check if the domain is exactly 'kennt.edu.np' or 'www.kennt.edu.np'
            return (
              currentDomain === "http://localhost:3000/" ||
              currentDomain === "www.kennt.edu.np"
            );
          },
        }["Header.useMemo[isBCAForbidden]"],
        [currentDomain]
      );
      // 1. Filter the base program links array
      const availableProgramLinks = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "Header.useMemo[availableProgramLinks]": () => {
            return programLinks.filter(
              {
                "Header.useMemo[availableProgramLinks]": (link) => {
                  // Exclude BCA if the domain restriction applies
                  if (isBCAForbidden && link.code === "BCA") {
                    return false;
                  }
                  return true;
                },
              }["Header.useMemo[availableProgramLinks]"]
            );
          },
        }["Header.useMemo[availableProgramLinks]"],
        [isBCAForbidden]
      );
      // 2. Filter Programs for Desktop Menu (uses the filtered list)
      const filteredPrograms = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "Header.useMemo[filteredPrograms]": () => {
            if (!programSearchQuery) return availableProgramLinks;
            const lowerQ = programSearchQuery.toLowerCase();
            return availableProgramLinks.filter(
              {
                "Header.useMemo[filteredPrograms]": (p) =>
                  p.label.toLowerCase().includes(lowerQ) ||
                  p.code.toLowerCase().includes(lowerQ),
              }["Header.useMemo[filteredPrograms]"]
            );
          },
        }["Header.useMemo[filteredPrograms]"],
        [programSearchQuery, availableProgramLinks]
      );
      // 3. Filter Everything for Mobile Menu (uses the filtered list)
      const filteredMobileItems = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "Header.useMemo[filteredMobileItems]": () => {
            if (!mobileSearchQuery) return [];
            const lowerQ = mobileSearchQuery.toLowerCase();
            const programs = availableProgramLinks.filter(
              {
                "Header.useMemo[filteredMobileItems].programs": (p) =>
                  p.label.toLowerCase().includes(lowerQ),
              }["Header.useMemo[filteredMobileItems].programs"]
            );
            const about = aboutLinks.filter(
              {
                "Header.useMemo[filteredMobileItems].about": (a) =>
                  a.label.toLowerCase().includes(lowerQ),
              }["Header.useMemo[filteredMobileItems].about"]
            );
            const standard = standardLinks.filter(
              {
                "Header.useMemo[filteredMobileItems].standard": (s) =>
                  s.label.toLowerCase().includes(lowerQ),
              }["Header.useMemo[filteredMobileItems].standard"]
            );
            return [
              ...programs.map(
                {
                  "Header.useMemo[filteredMobileItems]": (i) => ({
                    ...i,
                    type: "Program",
                    href: i.href,
                    icon: i.icon,
                  }),
                }["Header.useMemo[filteredMobileItems]"]
              ),
              ...about.map(
                {
                  "Header.useMemo[filteredMobileItems]": (i) => ({
                    ...i,
                    type: "About",
                    href: i.href,
                    icon: i.icon,
                  }),
                }["Header.useMemo[filteredMobileItems]"]
              ),
              ...standard.map(
                {
                  "Header.useMemo[filteredMobileItems]": (i) => ({
                    ...i,
                    type: "Page",
                    href: i.href,
                    icon: i.icon,
                  }),
                }["Header.useMemo[filteredMobileItems]"]
              ),
            ];
          },
        }["Header.useMemo[filteredMobileItems]"],
        [mobileSearchQuery, availableProgramLinks]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Fragment"
        ],
        {
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "header",
            {
              className:
                "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100",
              onMouseLeave: handleMouseLeave,
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          href: "/",
                          className: "flex items-center gap-2 z-50",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/logo.png",
                              alt: "Yeti International College logo",
                              width: 140,
                              height: 40,
                              className: "object-contain",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/header.tsx",
                              lineNumber: 375,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 374,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "nav",
                        {
                          className: "hidden lg:flex h-full items-center gap-1",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              NavItem,
                              {
                                label: "Programs",
                                active: activeMenu === "programs",
                                onMouseEnter: () => setActiveMenu("programs"),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/header.tsx",
                                lineNumber: 386,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              NavItem,
                              {
                                label: "About",
                                active: activeMenu === "about",
                                onMouseEnter: () => setActiveMenu("about"),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/header.tsx",
                                lineNumber: 391,
                                columnNumber: 13,
                              },
                              this
                            ),
                            standardLinks.map((link) =>
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: link.href,
                                  className:
                                    "px-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors",
                                  children: link.label,
                                },
                                link.label,
                                false,
                                {
                                  fileName:
                                    "[project]/Yeti-College/components/header.tsx",
                                  lineNumber: 397,
                                  columnNumber: 15,
                                },
                                this
                              )
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 385,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex items-center gap-4",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "hidden xl:flex items-center gap-3 mr-2 group",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "h-8 w-px bg-zinc-200",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/header.tsx",
                                      lineNumber: 420,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "default"
                                    ],
                                    {
                                      href: "https://www.kennt.edu.np/",
                                      className:
                                        "relative w-32 h-32  group-hover:opacity-100 transition-all duration-300",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          src: "/kennt-logo.png",
                                          alt: "Affiliate University",
                                          fill: true,
                                          className: "object-contain",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/header.tsx",
                                          lineNumber: 427,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/header.tsx",
                                      lineNumber: 423,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/header.tsx",
                                lineNumber: 410,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: "/apply",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Button"
                                  ],
                                  {
                                    className:
                                      "hidden sm:flex rounded-full px-6 font-bold cursor-pointer tracking-wide bg-zinc-900 text-white hover:bg-zinc-800",
                                    children: "Apply Now",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/header.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/header.tsx",
                                lineNumber: 437,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                className: "lg:hidden p-2 text-zinc-900",
                                onClick: () =>
                                  setIsMobileMenuOpen(!isMobileMenuOpen),
                                children: isMobileMenuOpen
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                        "X"
                                      ],
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/header.tsx",
                                        lineNumber: 448,
                                        columnNumber: 35,
                                      },
                                      this
                                    )
                                  : /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__[
                                        "Menu"
                                      ],
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/header.tsx",
                                        lineNumber: 448,
                                        columnNumber: 43,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/header.tsx",
                                lineNumber: 444,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 408,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/header.tsx",
                    lineNumber: 372,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "AnimatePresence"
                  ],
                  {
                    children:
                      isMobileMenuOpen &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "motion"
                        ].div,
                        {
                          initial: {
                            opacity: 0,
                            height: 0,
                          },
                          animate: {
                            opacity: 1,
                            height: "calc(100vh - 80px)",
                          },
                          exit: {
                            opacity: 0,
                            height: 0,
                          },
                          transition: {
                            duration: 0.3,
                          },
                          className:
                            "lg:hidden absolute top-20 left-0 w-full bg-white z-40 border-t border-zinc-100 overflow-y-auto",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "p-6 flex flex-col min-h-full",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "relative mb-6",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                                          "Search"
                                        ],
                                        {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/header.tsx",
                                          lineNumber: 466,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "input",
                                        {
                                          type: "text",
                                          value: mobileSearchQuery,
                                          onChange: (e) =>
                                            setMobileSearchQuery(
                                              e.target.value
                                            ),
                                          placeholder:
                                            "Search programs, pages...",
                                          className:
                                            "w-full bg-zinc-50 border border-zinc-200 rounded-full pl-9 pr-10 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/header.tsx",
                                          lineNumber: 467,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      mobileSearchQuery &&
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "button",
                                          {
                                            onClick: () =>
                                              setMobileSearchQuery(""),
                                            className:
                                              "absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                                "X"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/header.tsx",
                                                lineNumber: 479,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/header.tsx",
                                            lineNumber: 475,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/header.tsx",
                                    lineNumber: 465,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                mobileSearchQuery
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "flex flex-col gap-2",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h3",
                                            {
                                              className:
                                                "text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2",
                                              children: [
                                                "Search Results (",
                                                filteredMobileItems.length,
                                                ")",
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/header.tsx",
                                              lineNumber: 487,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          filteredMobileItems.length > 0
                                            ? filteredMobileItems.map(
                                                (item, idx) =>
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "default"
                                                    ],
                                                    {
                                                      href: item.href,
                                                      onClick: () =>
                                                        setIsMobileMenuOpen(
                                                          false
                                                        ),
                                                      className:
                                                        "flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 border border-zinc-100/50",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500",
                                                            children: item.icon
                                                              ? /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  item.icon,
                                                                  {
                                                                    className:
                                                                      "w-4 h-4",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/header.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                )
                                                              : /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                                                                    "ArrowRight"
                                                                  ],
                                                                  {
                                                                    className:
                                                                      "w-4 h-4",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/header.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/header.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "text-sm font-bold text-zinc-900",
                                                                  children:
                                                                    item.label,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/header.tsx",
                                                                  lineNumber: 506,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "text-[10px] uppercase font-bold text-zinc-400",
                                                                  children:
                                                                    item.type,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/header.tsx",
                                                                  lineNumber: 509,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/header.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    idx,
                                                    true,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/header.tsx",
                                                      lineNumber: 492,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  )
                                              )
                                            : /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "text-center py-8 text-zinc-400 text-sm",
                                                  children: [
                                                    'No matches found for "',
                                                    mobileSearchQuery,
                                                    '"',
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 516,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/header.tsx",
                                        lineNumber: 486,
                                        columnNumber: 19,
                                      },
                                      this
                                    )
                                  : /* DEFAULT MENU VIEW */ /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "Fragment"
                                      ],
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            MobileMenuSection,
                                            {
                                              title: "Programs",
                                              isOpen:
                                                mobileExpand === "programs",
                                              onToggle: () =>
                                                toggleMobileSection("programs"),
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "grid grid-cols-1 gap-2",
                                                  children:
                                                    availableProgramLinks.map(
                                                      (link) =>
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "default"
                                                          ],
                                                          {
                                                            href: link.href,
                                                            onClick: () =>
                                                              setIsMobileMenuOpen(
                                                                false
                                                              ),
                                                            className:
                                                              "flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 text-sm font-medium text-zinc-600",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      link.icon,
                                                                      {
                                                                        className:
                                                                          "w-4 h-4 text-zinc-500",
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/Yeti-College/components/header.tsx",
                                                                        lineNumber: 539,
                                                                        columnNumber: 31,
                                                                      },
                                                                      this
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/header.tsx",
                                                                  lineNumber: 538,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              link.label,
                                                            ],
                                                          },
                                                          link.label,
                                                          true,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/header.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        )
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 529,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/header.tsx",
                                              lineNumber: 524,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            MobileMenuSection,
                                            {
                                              title: "About Us",
                                              isOpen: mobileExpand === "about",
                                              onToggle: () =>
                                                toggleMobileSection("about"),
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "grid grid-cols-1 gap-2",
                                                  children: aboutLinks.map(
                                                    (link) =>
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "default"
                                                        ],
                                                        {
                                                          href: link.href,
                                                          onClick: () =>
                                                            setIsMobileMenuOpen(
                                                              false
                                                            ),
                                                          className:
                                                            "flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 text-sm font-medium text-zinc-600",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "div",
                                                              {
                                                                className:
                                                                  "w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center",
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    link.icon,
                                                                    {
                                                                      className:
                                                                        "w-4 h-4 text-zinc-500",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/Yeti-College/components/header.tsx",
                                                                      lineNumber: 561,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/header.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 29,
                                                              },
                                                              this
                                                            ),
                                                            link.label,
                                                          ],
                                                        },
                                                        link.label,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/header.tsx",
                                                          lineNumber: 554,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      )
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 552,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/header.tsx",
                                              lineNumber: 547,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex flex-col gap-1 py-2",
                                              children: standardLinks.map(
                                                (item) =>
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "default"
                                                    ],
                                                    {
                                                      href: item.href,
                                                      onClick: () =>
                                                        setIsMobileMenuOpen(
                                                          false
                                                        ),
                                                      className:
                                                        "py-3 border-b border-zinc-100 text-sm font-bold uppercase tracking-wide text-zinc-500 hover:text-zinc-900",
                                                      children: item.label,
                                                    },
                                                    item.label,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/header.tsx",
                                                      lineNumber: 571,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  )
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/header.tsx",
                                              lineNumber: 569,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className: "mt-8 space-y-6",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "default"
                                                  ],
                                                  {
                                                    href: "/apply",
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "Button"
                                                      ],
                                                      {
                                                        className:
                                                          "w-full rounded-full py-6 font-bold tracking-wide bg-zinc-900 text-white hover:bg-zinc-800",
                                                        children: "Apply Now",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/header.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center justify-center gap-4 pt-4 border-t border-zinc-100 opacity-60",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[10px] font-bold uppercase tracking-widest text-zinc-400",
                                                          children:
                                                            "Affiliated With",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/header.tsx",
                                                          lineNumber: 592,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "relative w-24 h-24",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "default"
                                                              ],
                                                              {
                                                                src: "/kennt-logo.png",
                                                                alt: "Affiliate",
                                                                fill: true,
                                                                className:
                                                                  "object-contain",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/header.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/header.tsx",
                                                          lineNumber: 596,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/header.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/header.tsx",
                                              lineNumber: 583,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true
                                    ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Yeti-College/components/header.tsx",
                              lineNumber: 463,
                              columnNumber: 15,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 456,
                          columnNumber: 13,
                        },
                        this
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/header.tsx",
                    lineNumber: 454,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "AnimatePresence"
                  ],
                  {
                    children:
                      activeMenu &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "motion"
                        ].div,
                        {
                          initial: {
                            opacity: 0,
                            y: -10,
                          },
                          animate: {
                            opacity: 1,
                            y: 0,
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                          },
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                          className:
                            "absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl shadow-zinc-900/5 overflow-hidden hidden lg:block",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "max-w-[1600px] mx-auto px-6 py-12",
                              children: [
                                activeMenu === "about" &&
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "grid grid-cols-12 gap-12",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "col-span-4 bg-zinc-50 rounded-3xl p-8 flex flex-col justify-between border border-zinc-100",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "px-3 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 inline-block",
                                                        children: "Est. 2002",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "h3",
                                                      {
                                                        className:
                                                          "text-3xl font-bold text-zinc-900 mb-4 leading-none",
                                                        children: [
                                                          "Educating the",
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "br",
                                                            {},
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/header.tsx",
                                                              lineNumber: 634,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                          "Leaders of Tomorrow.",
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-zinc-500 text-sm leading-relaxed",
                                                        children:
                                                          "Yeti International College is a premier institution dedicated to academic excellence.",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 628,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "default"
                                                ],
                                                {
                                                  href: "/about",
                                                  className:
                                                    "flex items-center gap-2 text-sm font-bold text-zinc-900 hover:gap-3 transition-all",
                                                  children: [
                                                    "Read Our Story ",
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                                                        "ArrowRight"
                                                      ],
                                                      {
                                                        className: "w-4 h-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 40,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 642,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/header.tsx",
                                            lineNumber: 627,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "col-span-8",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "h4",
                                                {
                                                  className:
                                                    "text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-100 pb-2",
                                                  children: "Explore About",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 650,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "grid grid-cols-2 gap-x-4 gap-y-2",
                                                  children: aboutLinks.map(
                                                    (link) =>
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        AboutListItem,
                                                        {
                                                          item: link,
                                                        },
                                                        link.label,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/header.tsx",
                                                          lineNumber: 655,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      )
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 653,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/header.tsx",
                                            lineNumber: 649,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/header.tsx",
                                      lineNumber: 626,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                activeMenu === "programs" &&
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "grid grid-cols-12 gap-8 h-full",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "col-span-3 flex flex-col",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className: "mb-6",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "h3",
                                                      {
                                                        className:
                                                          "text-2xl font-bold text-zinc-900 mb-2",
                                                        children: "Programs",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-zinc-500 text-xs mb-4 leading-relaxed",
                                                        children:
                                                          "Explore our accredited programs.",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className: "relative",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                                                              "Search"
                                                            ],
                                                            {
                                                              className:
                                                                "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/header.tsx",
                                                              lineNumber: 674,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value:
                                                                programSearchQuery,
                                                              onChange: (e) =>
                                                                setProgramSearchQuery(
                                                                  e.target.value
                                                                ),
                                                              placeholder:
                                                                "Find a program...",
                                                              className:
                                                                "w-full bg-zinc-50 border border-zinc-200 rounded-full pl-9 pr-10 py-2 text-sm focus:outline-none focus:border-zinc-400 transition-colors",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/header.tsx",
                                                              lineNumber: 675,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                          programSearchQuery &&
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "button",
                                                              {
                                                                onClick: () =>
                                                                  setProgramSearchQuery(
                                                                    ""
                                                                  ),
                                                                className:
                                                                  "absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900",
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                                                      "X"
                                                                    ],
                                                                    {
                                                                      className:
                                                                        "w-3 h-3",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/Yeti-College/components/header.tsx",
                                                                      lineNumber: 689,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/header.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 29,
                                                              },
                                                              this
                                                            ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 666,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "mt-auto p-5 bg-zinc-900 rounded-2xl text-white relative overflow-hidden",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "absolute -right-4 -top-4 w-24 h-24 bg-zinc-800/50 rounded-full blur-xl",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__[
                                                        "GraduationCap"
                                                      ],
                                                      {
                                                        className:
                                                          "w-6 h-6 mb-3 text-zinc-400 relative z-10",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "text-xl font-bold mb-1 relative z-10",
                                                        children: "Fall 2025",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-xs text-zinc-400 mb-3 relative z-10",
                                                        children:
                                                          "Applications open.",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "default"
                                                      ],
                                                      {
                                                        href: "/apply",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "Button"
                                                            ],
                                                            {
                                                              size: "sm",
                                                              variant:
                                                                "secondary",
                                                              className:
                                                                "w-full font-bold text-[10px] uppercase tracking-wider cursor-pointer relative z-10",
                                                              children:
                                                                "Apply Now",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/header.tsx",
                                                              lineNumber: 705,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/header.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/header.tsx",
                                                  lineNumber: 695,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/header.tsx",
                                            lineNumber: 665,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "col-span-9",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className:
                                                  "max-h-[60vh] overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent",
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "grid grid-cols-2 lg:grid-cols-4 gap-3",
                                                    children:
                                                      filteredPrograms.length >
                                                      0
                                                        ? filteredPrograms.map(
                                                            (link) =>
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                ProgramCard,
                                                                {
                                                                  item: link,
                                                                },
                                                                link.label,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/header.tsx",
                                                                  lineNumber: 722,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              )
                                                          )
                                                        : /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "div",
                                                            {
                                                              className:
                                                                "col-span-4 py-12 text-center",
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-3",
                                                                    children:
                                                                      /*#__PURE__*/ (0,
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                        "jsxDEV"
                                                                      ])(
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                                                                          "Search"
                                                                        ],
                                                                        {
                                                                          className:
                                                                            "w-5 h-5 text-zinc-300",
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            "[project]/Yeti-College/components/header.tsx",
                                                                          lineNumber: 727,
                                                                          columnNumber: 33,
                                                                        },
                                                                        this
                                                                      ),
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/header.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                                /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-zinc-400 font-medium",
                                                                    children: [
                                                                      'No programs found for "',
                                                                      programSearchQuery,
                                                                      '"',
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/header.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/header.tsx",
                                                              lineNumber: 725,
                                                              columnNumber: 29,
                                                            },
                                                            this
                                                          ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/header.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/header.tsx",
                                                lineNumber: 717,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/header.tsx",
                                            lineNumber: 716,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/header.tsx",
                                      lineNumber: 664,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Yeti-College/components/header.tsx",
                              lineNumber: 623,
                              columnNumber: 15,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 616,
                          columnNumber: 13,
                        },
                        this
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/header.tsx",
                    lineNumber: 614,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "AnimatePresence"
                  ],
                  {
                    children:
                      activeMenu &&
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "motion"
                        ].div,
                        {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                          },
                          exit: {
                            opacity: 0,
                          },
                          transition: {
                            duration: 0.3,
                          },
                          className:
                            "fixed inset-0 bg-zinc-900/20 backdrop-blur-[2px] z-40 pointer-events-none top-[80px] hidden lg:block",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/header.tsx",
                          lineNumber: 747,
                          columnNumber: 13,
                        },
                        this
                      ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/header.tsx",
                    lineNumber: 745,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/header.tsx",
              lineNumber: 368,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false
      );
    }
    _s(Header, "RG83bp2Tir0OjgIWXWwXcJPqF3s=");
    _c4 = Header;
    var _c, _c1, _c2, _c3, _c4;
    __turbopack_context__.k.register(_c, "NavItem");
    __turbopack_context__.k.register(_c1, "AboutListItem");
    __turbopack_context__.k.register(_c2, "ProgramCard");
    __turbopack_context__.k.register(_c3, "MobileMenuSection");
    __turbopack_context__.k.register(_c4, "Header");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/Yeti-College/components/footer.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Footer]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
      );
    function Footer() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "footer",
        {
          className:
            "bg-black text-zinc-400 pt-20 pb-10 border-t border-zinc-800",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "max-w-7xl mx-auto px-6",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 border-b border-zinc-800 pb-20",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h2",
                              {
                                className:
                                  "text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9] mb-6",
                                children: [
                                  "Yeti International",
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "br",
                                    {},
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 22,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  "College.",
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 20,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className:
                                  "text-lg text-zinc-500 max-w-md leading-relaxed",
                                children:
                                  "Empowering minds and building leaders through world-class education and research.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 25,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 19,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "flex flex-col justify-end items-start lg:items-end",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              href: "/admissions",
                              className:
                                "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 ring-offset-black",
                              children: [
                                "Apply for Admission",
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className:
                                      "ml-2 transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Yeti-College/components/footer.tsx",
                              lineNumber: 33,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 31,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/footer.tsx",
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "lg:col-span-4 space-y-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  "text-xs font-bold tracking-widest uppercase text-zinc-600",
                                children: "/ Contact",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 49,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "space-y-6",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-start gap-4 group",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "FaMapMarkerAlt"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-white font-medium",
                                                  children: "Kathmandu Campus",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 58,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-sm mt-1 leading-relaxed",
                                                  children: [
                                                    "Buddhanagar, New   Baneshwor",
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "br",
                                                      {},
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/footer.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                    "Kathmandu-10, Nepal",
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 59,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 53,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-start gap-4 group",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "FaPhoneAlt"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-white font-medium",
                                                  children: "Inquiries",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 72,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className: "text-sm mt-1",
                                                  children: "01-4792063",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 73,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className: "text-sm",
                                                  children: "9803323042",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 74,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 67,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-start gap-4 group",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "mt-1 p-2 rounded-full bg-zinc-900 text-white group-hover:bg-zinc-800 transition-colors",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "FaEnvelope"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/footer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-white font-medium",
                                                  children: "Email",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 83,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-sm mt-1 hover:text-white transition-colors cursor-pointer",
                                                  children:
                                                    "info@yeticollege.edu.np",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/footer.tsx",
                                                  lineNumber: 84,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 78,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 52,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 48,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "lg:col-span-3 lg:col-start-6 space-y-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  "text-xs font-bold tracking-widest uppercase text-zinc-600",
                                children: "/ Academics",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 94,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "ul",
                              {
                                className: "space-y-4",
                                children: [
                                  "Programs",
                                  "Apply",
                                  "Contact",
                                  "About",
                                ].map((item) =>
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "li",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          href: `/${item
                                            .toLowerCase()
                                            .replace(" ", "-")}`,
                                          className:
                                            "text-zinc-400 hover:text-white text-base transition-colors flex items-center gap-2 group",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                className:
                                                  "w-1 h-1 bg-transparent group-hover:bg-white rounded-full transition-colors",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/footer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            item,
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/footer.tsx",
                                          lineNumber: 100,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    item,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 99,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 97,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 93,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "lg:col-span-3 space-y-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  "text-xs font-bold tracking-widest uppercase text-zinc-600",
                                children: "/ Campus Life",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 114,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "ul",
                              {
                                className: "space-y-4",
                                children: [
                                  "Events",
                                  "Gallery",
                                  "Notices",
                                  "blog",
                                ].map((item) =>
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "li",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          href: `/${item
                                            .toLowerCase()
                                            .replace(" ", "-")}`,
                                          className:
                                            "text-zinc-400 hover:text-white text-base transition-colors flex items-center gap-2 group",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                className:
                                                  "w-1 h-1 bg-transparent group-hover:bg-white rounded-full transition-colors",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/footer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            item,
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/footer.tsx",
                                          lineNumber: 120,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    item,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/footer.tsx",
                                      lineNumber: 119,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 117,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 113,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "border-t border-zinc-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-600",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                children: "© 2025 Yeti International College.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 136,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "hidden md:block w-1 h-1 bg-zinc-800 rounded-full",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 137,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: "/about/team/dev",
                                className: "hover:text-zinc-400",
                                children: "Devlopers",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 144,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 135,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex gap-3",
                          children: [
                            {
                              icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "FaFacebookF"
                              ],
                              label: "Facebook",
                              href: "https://www.facebook.com/@YETICollege",
                            },
                            {
                              icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "FaYoutube"
                              ],
                              label: "YouTube",
                              href: "https://www.youtube.com/@YETIInternationalCollege",
                            },
                            {
                              icon: __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "FaInstagram"
                              ],
                              label: "Instagram",
                              href: "https://www.instagram.com/yetiintlcollege/",
                            },
                          ].map((social, idx) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: social.href,
                                "aria-label": social.label,
                                className:
                                  "w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  social.icon,
                                  {
                                    className: "w-4 h-4",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/footer.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              idx,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/footer.tsx",
                                lineNumber: 168,
                                columnNumber: 15,
                              },
                              this
                            )
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/footer.tsx",
                          lineNumber: 150,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/footer.tsx",
                    lineNumber: 134,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/footer.tsx",
              lineNumber: 16,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/footer.tsx",
          lineNumber: 15,
          columnNumber: 5,
        },
        this
      );
    }
    _c = Footer;
    var _c;
    __turbopack_context__.k.register(_c, "Footer");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/Yeti-College/app/tour/page.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => VirtualTourPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/image.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3d$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/move-3d.js [app-client] (ecmascript) <export default as Move3d>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/button.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/header.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/footer.tsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    // --- MOCK DATA FOR TOUR ---
    const tourSpots = [
      {
        id: "main-block",
        title: "Academic Block A",
        category: "Campus Core",
        image: "/tour/main-block.jpeg",
        description:
          "The heart of our campus featuring modern lecture halls and administrative offices. Designed with sustainable architecture.",
        stats: {
          capacity: "2000+",
          area: "45,000 sq ft",
          type: "Academic",
        },
        features: ["Smart Classrooms", "Admin Offices", "Student Lounge"],
      },
      // {
      //   id: "library",
      //   title: "Central Library",
      //   category: "Learning Resource",
      //   image:
      //     "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
      //   description:
      //     "A state-of-the-art digital and physical repository of knowledge, featuring quiet study zones and collaborative pods.",
      //   stats: { capacity: "500+", area: "12,000 sq ft", type: "Resource" },
      //   features: ["24/7 Access", "Digital Archives", "Discussion Rooms"],
      // },
      {
        id: "lab-complex",
        title: "Innovation Labs",
        category: "Research",
        image: "/tour/lab.jpeg",
        description:
          "Where theory meets practice. Equipped with the latest hardware, robotics kits, and AI workstations.",
        stats: {
          capacity: "150+",
          area: "8,000 sq ft",
          type: "Practical",
        },
        features: ["Mac Lab", "Robotics Area", "Physics Lab"],
      },
      {
        id: "auditorium",
        title: "Grand Auditorium",
        category: "Events",
        image: "/tour/auditorium.jpeg",
        description:
          "Hosting seminars, cultural events, and convocation ceremonies. Features top-tier acoustics and lighting.",
        stats: {
          capacity: "800",
          area: "15,000 sq ft",
          type: "Events",
        },
        features: ["Dolby Sound", "Green Rooms", "VIP Lounge"],
      },
      {
        id: "Classroom",
        title: "Classrooms & Halls",
        category: "academics",
        image: "./tour/classroom.jpeg",
        description:
          "A vibrant space for students to attend lectures, participate in discussions, and engage in academic activities.",
        stats: {
          capacity: "300",
          area: "6,000 sq ft",
          type: "Academic",
        },
        features: ["Projectors", "Whiteboards", "Comfortable Seating"],
      },
    ];
    function VirtualTourPage() {
      _s();
      const [activeSpotIndex, setActiveSpotIndex] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const activeSpot = tourSpots[activeSpotIndex];
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Fragment"
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {},
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 87,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "main",
              {
                className:
                  "min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "header",
                    {
                      className: "pt-5 pb-10 px-6 max-w-[1600px] mx-auto",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "lg:col-span-8",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "motion"
                                  ].div,
                                  {
                                    initial: {
                                      opacity: 0,
                                      y: 20,
                                    },
                                    animate: {
                                      opacity: 1,
                                      y: 0,
                                    },
                                    transition: {
                                      duration: 0.6,
                                    },
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className:
                                            "flex items-center gap-3 mb-6",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "span",
                                            {
                                              className:
                                                "px-3 py-1 rounded-full border border-accent/30 text-primary  bg-accent/70 text-xs font-bold uppercase tracking-wider flex items-center gap-2",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3d$3e$__[
                                                    "Move3d"
                                                  ],
                                                  {
                                                    className: "w-3 h-3",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/tour/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                " Interactive Campus",
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/tour/page.tsx",
                                              lineNumber: 99,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 98,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "h1",
                                        {
                                          className:
                                            "text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-0 leading-[0.9]",
                                          children: "Virtual Tour",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 103,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/tour/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "lg:col-span-4 lg:pb-2",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-xl leading-relaxed font-medium text-muted-foreground text-balance",
                                    children:
                                      "Explore our world-class facilities from the comfort of your home. Experience the environment where future leaders are made.",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/tour/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/Yeti-College/app/tour/page.tsx",
                          lineNumber: 91,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 90,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "max-w-[1600px] mx-auto px-6 pb-32",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "lg:col-span-8 flex flex-col gap-8",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden relative shadow-sm border border-border group bg-card",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "AnimatePresence"
                                          ],
                                          {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "motion"
                                              ].div,
                                              {
                                                initial: {
                                                  opacity: 0,
                                                  scale: 1.05,
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  scale: 1,
                                                },
                                                exit: {
                                                  opacity: 0,
                                                },
                                                transition: {
                                                  duration: 0.7,
                                                },
                                                className:
                                                  "relative w-full h-full",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "default"
                                                    ],
                                                    {
                                                      src: activeSpot.image,
                                                      alt: activeSpot.title,
                                                      fill: true,
                                                      className: "object-cover",
                                                      priority: true,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/app/tour/page.tsx",
                                                      lineNumber: 134,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "div",
                                                    {
                                                      className:
                                                        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/app/tour/page.tsx",
                                                      lineNumber: 141,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "div",
                                                    {
                                                      className:
                                                        "absolute bottom-0 left-0 right-0 p-8 md:p-12",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "motion"
                                                          ].div,
                                                          {
                                                            initial: {
                                                              y: 20,
                                                              opacity: 0,
                                                            },
                                                            animate: {
                                                              y: 0,
                                                              opacity: 1,
                                                            },
                                                            transition: {
                                                              delay: 0.3,
                                                            },
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-3 mb-3",
                                                                  children:
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-xs font-bold text-accent uppercase tracking-widest bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border",
                                                                        children:
                                                                          activeSpot.category,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/Yeti-College/app/tour/page.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 27,
                                                                      },
                                                                      this
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                                  lineNumber: 150,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "h2",
                                                                {
                                                                  className:
                                                                    "text-3xl md:text-5xl font-bold text-white mb-2",
                                                                  children:
                                                                    activeSpot.title,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                                  lineNumber: 155,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/app/tour/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23,
                                                          },
                                                          this
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/app/tour/page.tsx",
                                                      lineNumber: 144,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              activeSpot.id,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "absolute top-6 right-6 flex gap-3",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Button"
                                                ],
                                                {
                                                  size: "icon",
                                                  variant: "secondary",
                                                  className:
                                                    "rounded-full h-12 w-12 bg-background/20 backdrop-blur-md hover:bg-background/40 border border-white/10 text-white",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__[
                                                      "Maximize2"
                                                    ],
                                                    {
                                                      className: "w-5 h-5",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/app/tour/page.tsx",
                                                      lineNumber: 170,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 165,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Button"
                                                ],
                                                {
                                                  size: "icon",
                                                  variant: "secondary",
                                                  className:
                                                    "rounded-full h-12 w-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3d$3e$__[
                                                      "Move3d"
                                                    ],
                                                    {
                                                      className: "w-5 h-5",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/app/tour/page.tsx",
                                                      lineNumber: 177,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 172,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 124,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "grid grid-cols-3 gap-px bg-border border border-border rounded-[2rem] overflow-hidden",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          TourStatBox,
                                          {
                                            label: "Capacity",
                                            value: activeSpot.stats.capacity,
                                            icon: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__[
                                                "Users"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 25,
                                              },
                                              void 0
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          TourStatBox,
                                          {
                                            label: "Area Size",
                                            value: activeSpot.stats.area,
                                            icon: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__[
                                                "Maximize2"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 25,
                                              },
                                              void 0
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          TourStatBox,
                                          {
                                            label: "Facility Type",
                                            value: activeSpot.stats.type,
                                            icon: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__[
                                                "Info"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 25,
                                              },
                                              void 0
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 183,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "section",
                                    {
                                      className: "mt-4",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          SectionLabel,
                                          {
                                            number: "01",
                                            title: "About this Space",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "grid md:grid-cols-2 gap-12",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-lg leading-relaxed text-muted-foreground",
                                                  children:
                                                    activeSpot.description,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 205,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className: "space-y-4",
                                                  children:
                                                    activeSpot.features.map(
                                                      (feature, i) =>
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center justify-between p-4 rounded-xl bg-card border border-border",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-medium text-foreground",
                                                                  children:
                                                                    feature,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                                  lineNumber: 214,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "w-2 h-2 rounded-full bg-accent",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                                  lineNumber: 217,
                                                                  columnNumber: 25,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          i,
                                                          true,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/app/tour/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 23,
                                                          },
                                                          this
                                                        )
                                                    ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 208,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 202,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "lg:col-span-4 flex flex-col gap-8 h-full",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "bg-card rounded-[2.5rem] p-2 border border-border flex flex-col h-full min-h-[600px]",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "p-6 pb-2",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                                  children: "Map Navigation",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 230,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "h3",
                                                {
                                                  className:
                                                    "text-2xl font-bold mt-2 mb-6",
                                                  children: "Destinations",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 233,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "flex-1 overflow-y-auto space-y-2 px-2 pb-2 scrollbar-hide",
                                            children: tourSpots.map(
                                              (spot, index) =>
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      setActiveSpotIndex(index),
                                                    className: (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "cn"
                                                    ])(
                                                      "w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border text-left group relative overflow-hidden",
                                                      activeSpotIndex === index
                                                        ? "bg-background border-accent/50 shadow-sm"
                                                        : "bg-transparent border-transparent hover:bg-muted hover:border-border"
                                                    ),
                                                    children: [
                                                      activeSpotIndex ===
                                                        index &&
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "motion"
                                                          ].div,
                                                          {
                                                            layoutId:
                                                              "active-indicator",
                                                            className:
                                                              "absolute left-0 top-0 bottom-0 w-1.5 bg-accent",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/app/tour/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 25,
                                                          },
                                                          this
                                                        ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "w-16 h-12 rounded-lg overflow-hidden relative shrink-0 bg-muted",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "default"
                                                              ],
                                                              {
                                                                src: spot.image,
                                                                alt: spot.title,
                                                                fill: true,
                                                                className:
                                                                  "object-cover grayscale group-hover:grayscale-0 transition-all",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 25,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/tour/page.tsx",
                                                          lineNumber: 256,
                                                          columnNumber: 23,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className: "flex-1",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "div",
                                                              {
                                                                className:
                                                                  "text-xs font-bold text-muted-foreground uppercase mb-1",
                                                                children:
                                                                  spot.category,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 25,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "div",
                                                              {
                                                                className: (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "cn"
                                                                ])(
                                                                  "font-bold text-lg leading-none group-hover:text-primary transition-colors",
                                                                  activeSpotIndex ===
                                                                    index
                                                                    ? "text-foreground"
                                                                    : "text-foreground/80"
                                                                ),
                                                                children:
                                                                  spot.title,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/tour/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 25,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/tour/page.tsx",
                                                          lineNumber: 264,
                                                          columnNumber: 23,
                                                        },
                                                        this
                                                      ),
                                                      activeSpotIndex ===
                                                        index &&
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                                                                  "ChevronRight"
                                                                ],
                                                                {
                                                                  className:
                                                                    "w-4 h-4 text-accent",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                                  lineNumber: 281,
                                                                  columnNumber: 27,
                                                                },
                                                                this
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/app/tour/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 25,
                                                          },
                                                          this
                                                        ),
                                                    ],
                                                  },
                                                  spot.id,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/tour/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                )
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 228,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "p-8 h-64 rounded-[2rem]  bg-primary text-primary-foreground relative overflow-hidden group cursor-pointer",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "relative z-10 ",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "flex items-center gap-3 mb-4 text-primary-foreground/80",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__[
                                                        "MapPin"
                                                      ],
                                                      {
                                                        className: "w-5 h-5",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/app/tour/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm font-bold uppercase tracking-wider",
                                                        children:
                                                          "Visit in Person",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/app/tour/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 295,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "h3",
                                                {
                                                  className:
                                                    "text-3xl font-bold mb-6 leading-tight",
                                                  children:
                                                    "Want to see the real thing?",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 301,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Button"
                                                ],
                                                {
                                                  variant: "secondary",
                                                  className:
                                                    "w-full h-14  rounded-xl text-base font-bold shadow-lg",
                                                  children:
                                                    "Schedule Campus Visit",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/tour/page.tsx",
                                                  lineNumber: 304,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/app/tour/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 290,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/Yeti-College/app/tour/page.tsx",
                          lineNumber: 120,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 119,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      className: "bg-card border-y border-border py-32",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "max-w-[1600px] mx-auto px-6",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              SectionLabel,
                              {
                                number: "02",
                                title: "Campus Amenities",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 319,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "grid grid-cols-2 md:grid-cols-4 gap-8",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__[
                                          "Wifi"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 322,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "Gigabit Wi-Fi",
                                      desc: "Campus-wide coverage",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 321,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__[
                                          "Coffee"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 327,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "3 Cafeterias",
                                      desc: "Multi-cuisine options",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 326,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__[
                                          "Library"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 332,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "Digital Library",
                                      desc: "RFID enabled systems",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 331,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__[
                                          "Monitor"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 337,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "24/7 Labs",
                                      desc: "Access to workstations",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 336,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__[
                                          "Sun"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 342,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "Green Spaces",
                                      desc: "Eco-friendly campus",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 341,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move3d$3e$__[
                                          "Move3d"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 347,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "VR Studio",
                                      desc: "Immersive learning",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 346,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__[
                                          "Users"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 352,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "Clubs",
                                      desc: "50+ Student clubs",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 351,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    AmenityItem,
                                    {
                                      icon: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__[
                                          "Phone"
                                        ],
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/tour/page.tsx",
                                          lineNumber: 357,
                                          columnNumber: 23,
                                        },
                                        void 0
                                      ),
                                      title: "Help Desk",
                                      desc: "24/7 Student Support",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/app/tour/page.tsx",
                                      lineNumber: 356,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/app/tour/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/Yeti-College/app/tour/page.tsx",
                          lineNumber: 318,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 317,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 365,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 88,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true
      );
    }
    _s(VirtualTourPage, "Q2R02YJLvWHcvKf+6vdNObtID2Q=");
    _c = VirtualTourPage;
    // --- SUB COMPONENTS ---
    function SectionLabel({ number, title }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className:
            "flex items-baseline gap-4 mb-12 border-b border-border pb-6",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "text-sm font-mono font-bold text-muted-foreground",
                children: number,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 376,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h2",
              {
                className:
                  "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
                children: title,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 379,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/app/tour/page.tsx",
          lineNumber: 375,
          columnNumber: 5,
        },
        this
      );
    }
    _c1 = SectionLabel;
    function TourStatBox({ label, value, icon }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className:
            "bg-background p-6 md:p-8 flex flex-col justify-between h-32 md:h-40 hover:bg-muted/30 transition-colors group",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "flex justify-between items-start",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors",
                      children: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 398,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      className:
                        "text-muted-foreground/50 group-hover:text-accent transition-colors",
                      children: icon,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 401,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 397,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className:
                  "text-xl md:text-2xl font-bold text-foreground tracking-tight",
                children: value,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 405,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/app/tour/page.tsx",
          lineNumber: 396,
          columnNumber: 5,
        },
        this
      );
    }
    _c2 = TourStatBox;
    function AmenityItem({ icon, title, desc }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "flex flex-col gap-4 group cursor-default",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-sm",
                children: icon,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 423,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "h4",
                    {
                      className: "text-lg font-bold text-foreground mb-1",
                      children: title,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 427,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className: "text-sm text-muted-foreground",
                      children: desc,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/tour/page.tsx",
                      lineNumber: 428,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/app/tour/page.tsx",
                lineNumber: 426,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/app/tour/page.tsx",
          lineNumber: 422,
          columnNumber: 5,
        },
        this
      );
    }
    _c3 = AmenityItem;
    var _c, _c1, _c2, _c3;
    __turbopack_context__.k.register(_c, "VirtualTourPage");
    __turbopack_context__.k.register(_c1, "SectionLabel");
    __turbopack_context__.k.register(_c2, "TourStatBox");
    __turbopack_context__.k.register(_c3, "AmenityItem");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
]);

//# sourceMappingURL=Yeti-College_11562673._.js.map
