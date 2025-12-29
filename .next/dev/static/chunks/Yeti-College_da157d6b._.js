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
  "[project]/Yeti-College/public/data/coursedata.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["coursesDB", () => coursesDB]);
    const coursesDB = {
      mba: {
        title: "Master in Business Administration",
        code: "MBA",
        category: "Postgraduate",
        duration: "2 Years",
        semesters: 4,
        credits: 60,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
        description:
          "A professional master's degree designed to develop leadership, analytical, and strategic skills required in modern business organizations.",
        stats: {
          placementRate: "95%",
          startingSalary: "NPR 70k+",
          partners: "Corporate & Banking Sector",
        },
        overview: [
          "Focuses on managerial leadership and strategic decision-making.",
          "Includes case studies, field research, and live corporate projects.",
          "Develops strong communication and managerial competency.",
        ],
        highlights: [
          "Industry Mentorship",
          "Research-based Learning",
          "Corporate Case Study Approach",
          "7 Specialized Career Tracks",
        ],
        curriculum: [
          {
            year: "Year 01",
            focus: "Management Fundamentals",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "BUS501 Introduction to Modern Management",
                  "MGT523 Organizational Human Resource Management",
                  "FIB523 Financial Management Accounting in the Digital Era",
                  "BUS525 Organizational Transformation for Management",
                  "MKT526 Digital Marketing Management",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "ECN522 Economic & Data Analysis for Decision Making",
                  "IMG528 Operation Management & Supply Chain",
                  "Elective Module/Subject-1 (From Core Elective Group)",
                  "Elective Module/Subject-2 (From Core Elective Group)",
                  "Elective Module/Subject-3 (From Core Elective Group)",
                ],
                // Note: Groups are defined here for display
                electiveLabel: "Core Elective Clusters (Select 1 Track)",
                electiveGroups: [
                  {
                    title: "1. Modern Organization Management",
                    subjects: [
                      "Industrial and Organizational Psychology in Digital Age",
                      "Creativity and Business Innovation Management",
                      "Human Resource Management in Digital Era",
                      "Change Crisis Management in Perspective",
                      "Ethics for Management, Good Governance Social Responsibility",
                      "Strategic in Modern Organization Management",
                      "Seminar in Modern Organization Management Problem Issues",
                      "Enterprise Risk Management and Internal Control",
                    ],
                  },
                  {
                    title: "2. Digital Business Management",
                    subjects: [
                      "Business in Digital Platform",
                      "Digital Infrastructure",
                      "E-Commerce",
                      "Metaverse System and Business",
                      "Digital Asset",
                      "Data Storage and Analytics",
                      "Personal Data Protection Act and Cyber Security",
                      "Social Gaming Platform",
                    ],
                  },
                  {
                    title: "3. Digital Marketing",
                    subjects: [
                      "Digital Social Media Marketing",
                      "New Product and Service Innovation Management",
                      "Digital Marketing channels of Distributions Supply Chain",
                      "Digital Marketing Communication",
                      "The Digital Customer Journey",
                      "Big Data for Marketing Analysis",
                      "Strategic Management for Marketers in Digital Era",
                      "Seminar on Business Management Issues for Marketers in Digital Era",
                    ],
                  },
                  {
                    title: "4. Accounting Management",
                    subjects: [
                      "Accounting Theory and Financial Reporting Standards",
                      "Financial Reporting Analysis and Valuation",
                      "Accounting System Analysis and Design",
                      "Taxation Policy and Planning",
                      "Strategic Management for Investors",
                      "Seminar in Business Management Issues for Investors",
                      "Strategic Cost Management",
                      "Accounting Information System Management",
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Specialization & Strategy",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "BUS521 Business Research Methods",
                  "Elective Module/Subject-4 (From Core Elective Group)",
                  "Elective Module/Subject-5 (From Core Elective Group)",
                  "Elective Module/Subject-6 (From Core Elective Group)",
                  "Elective Module/Subject-7 (From Core Elective Group)",
                ],
                electiveLabel:
                  "Continued Specialization Tracks (Remaining Groups)",
                // Splitting groups between Sem 2 and 3 for UI balance,
                // or you can repeat all groups. Here showing the remaining ones.
                electiveGroups: [
                  {
                    title: "5. Information Technology Management",
                    subjects: [
                      "Information Systems Analysis & Design",
                      "IT Entrepreneurship and Innovation",
                      "Digital Inclusion for Business Development",
                      "Information Security and Cyber Laws in Business",
                      "Software Design and Development",
                      "Artificial Intelligence for Business Management",
                      "Business Intelligence & Data Mining",
                      "Seminar on Problems and Issues Related to IT Management",
                    ],
                  },
                  {
                    title: "6. Fashion Design Management",
                    subjects: [
                      "Fashion Buying and Merchandise Management",
                      "Brand and Communication in Fashion",
                      "Fashion Design Technology",
                      "Design Thinking and Innovation",
                      "New Product Development",
                      "Fashion Brand Management",
                      "Children's Fashion Theory",
                      "Contemporary Consumers in Fashion Design Management",
                    ],
                  },
                  {
                    title: "7. Graphic Design Management",
                    subjects: [
                      "Package and Publication Design",
                      "Programming for Designers",
                      "Design Technology",
                      "Design Thinking and Innovation",
                      "Design Management",
                      "Design Studio",
                      "Typography and Interaction Design",
                      "Contemporary Consumers in Graphic Design Management",
                    ],
                  },
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "Elective Module/Subject-8 (Seminar on Elective Group)",
                  "SIR698 Special Project/Internship Report",
                  "BUS699 Master's Thesis",
                ],
              },
            ],
          },
        ],
        careers: [
          "Business Manager",
          "Project Leader",
          "Operations Lead",
          "Business Analyst",
        ],
      },
      bhm: {
        title: "Bachelor in Hotel Management",
        code: "BHM",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 120,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop",
        description:
          "Designed for students aiming for a career in the hotel, hospitality, and service industry with a strong focus on operational excellence and service leadership.",
        stats: {
          placementRate: "90%",
          startingSalary: "NPR 30k+",
          partners: "International Hotel Groups",
        },
        overview: [
          "Builds a strong foundation in hospitality and culinary operations.",
          "Students learn real–world management through internships and practical labs.",
          "Focus on customer service, hotel systems, and global operations.",
        ],
        highlights: [
          "Fully Equipped Training Kitchens",
          "Restaurant & Bar Operations Training",
          "International Internship Opportunities",
          "Personality Development & Language Training",
        ],
        curriculum: [
          {
            year: "Year 01",
            focus: "Hospitality Foundations",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "General Psychology",
                  "Future Skills",
                  "Intermediate English",
                  "Intro to IT and Applications",
                  "Tools For the Digital Age",
                  "Food & Beverage Service & Operations",
                  "Kitchen Operations (Basic)",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "Advanced English",
                  "Principle of Marketing",
                  "Introduction to Economics",
                  "Personality & Identity Development",
                  "Bar and Beverage Operations",
                  "Kitchen Operations (Intermediate)",
                  "Front Office Management",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Advanced Operations",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "English Presentation Skills",
                  "Consumer Behavior",
                  "Introduction to Statistics",
                  "Principles of Management",
                  "Hotel Business Operations",
                  "Coffee Shop & Bakery Operations",
                  "Kitchen Operations (Advanced)",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "Organizational Behavior",
                  "Accounting & Financial Mgmt",
                  "F&B Cost Control",
                  "Tourism and Hospitality Industry",
                  "MICE Management for Hotel",
                  "Housekeeping Operations",
                  "Banquet and Catering Management",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Management & Strategy",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "Intro to Human Resource Mgmt",
                  "Service Psychology",
                  "Digital Marketing for Hospitality",
                  "Florist & Room Operations",
                  "The Basic of Baked Pastry",
                  "Tourist Behavior & Cross-cultural Comm",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "Independent Learning",
                  "Research Methods for Hospitality",
                  "Special Project on Hospitality",
                  "Festivals & Special Event Mgmt",
                  "Hotel Planning and Development",
                  "Art of Engraving on Veg/Fruit",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Industrial Exposure",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "Seminar on Hotel and MICE",
                  "Hotel & MICE Pre-Cooperative Edu",
                ],
              },
              {
                semester: "Semester VIII",
                subjects: ["Undergraduate Project - Internship"],
              },
            ],
          },
        ],
        careers: [
          "Hotel Manager",
          "Food & Beverage Manager",
          "Guest Relations Officer",
          "Hospitality Consultant",
        ],
      },
      babm: {
        title: "Bachelor in Airlines Business Management",
        code: "BABM",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 120,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1470&auto=format&fit=crop",
        description:
          "A unique degree preparing students for careers in global airline business, airport management, and aviation service leadership.",
        stats: {
          placementRate: "93%",
          startingSalary: "NPR 40k+",
          partners: "Airlines & Ground Handling Companies",
        },
        overview: [
          "Focus on aviation business, customer service, cabin operations, and airline strategy.",
          "Offers real-world learning through airport visits, simulations, and internships.",
          "Blends business skills with airline–specific domain knowledge.",
        ],
        highlights: [
          "Aviation Business Labs",
          "Airline Management Courses",
          "Cabin Crew Soft Skills Training",
          "Airport Operations Field Visit",
        ],
        curriculum: [
          {
            year: "Year 01",
            focus: "Aviation Basics",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "General Psychology",
                  "Future Skills",
                  "Intermediate English",
                  "Intro to IT & Applications",
                  "Tools For the Digital Age",
                  "Knowledge of Aviation Industry",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "Advanced English",
                  "Introduction to Economics",
                  "Principle of Marketing",
                  "Personality & Identity Development",
                  "Aviation Industry and Environment",
                  "Aviation Terminology I",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Airport Services",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "English Reading & Writing Skills",
                  "Introduction to Statistics",
                  "Consumer Behavior",
                  "Principles of Management",
                  "Aviation Terminology II",
                  "Airport Services",
                  "Passenger Ground Service",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "Organizational Behavior",
                  "Accounting & Financial Mgmt",
                  "Aviation Terminology III",
                  "Low-Cost Airline Management",
                  "Airline Ramp Service",
                  "Risk Management of Aviation",
                  "Air Cargo Transport",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Airline Management",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "Intro to Human Resource Mgmt",
                  "Aviation Laws",
                  "Crew Resource Management",
                  "Nutrition and Airline Catering",
                  "Reservation and Ticketing",
                  "Fare and Tickets",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "Independent Learning",
                  "Research Methods for Hospitality",
                  "Special Project in Aviation",
                  "Career Preparation for Aviation",
                  "In-flight Service",
                  "Aviation Safety and Security",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Professional Practice",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "Seminar on Airlines & Aviation",
                  "International Pre-Cooperative Edu",
                ],
              },
              {
                semester: "Semester VIII",
                subjects: ["Undergraduate Project - Internship"],
              },
            ],
          },
        ],
        careers: [
          "Airline Service Agent",
          "Cabin Crew",
          "Airport Operations Officer",
          "Aviation Business Manager",
        ],
      },
      bamm: {
        title: "Bachelor in MICE (Event) Management",
        code: "BAMM",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 120,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop",
        description:
          "A specialized program focused on the Meetings, Incentives, Conferences, and Exhibitions industry with real–world event management exposure.",
        stats: {
          placementRate: "88%",
          startingSalary: "NPR 30k+",
          partners: "Event Companies & Tourism Boards",
        },
        overview: [
          "Equips students with planning, execution, and logistics skills.",
          "Includes internships with event organizers and tourism organizations.",
          "Opportunity to participate in real–life conference and trade fair projects.",
        ],
        highlights: [
          "Industry-led Training",
          "Live Event Participation",
          "Digital Event Management Tools",
          "Client Presentation Practice",
        ],
        curriculum: [
          {
            year: "Year 01",
            focus: "Event Fundamentals",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "General Psychology",
                  "Future Skills",
                  "Intermediate English",
                  "Intro to IT and Applications",
                  "Tools For the Digital Age",
                  "Introduction to Event Management",
                  "Venue & Facility Management",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "Advanced English",
                  "Principle of Marketing",
                  "Introduction to Economics",
                  "Personality & Identity Development",
                  "Customer Relationship Management",
                  "Planning & Financial Mgmt for MICE",
                  "Event Leadership & Communication",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Planning & Operations",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "English Presentation Skills",
                  "Consumer Behavior",
                  "Introduction to Statistics",
                  "Principles of Management",
                  "Conference and MICE Planning",
                  "Sustainability & Risk Mgmt",
                  "New Business Development",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "Organizational Behavior",
                  "Accounting & Financial Mgmt",
                  "MICE Management for Hotel",
                  "Sustainable Events Management",
                  "Foundation of Hospitality Mgmt",
                  "Food and Beverage Management",
                  "Advanced Meeting Planning",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Global Event Strategy",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "Intro to Human Resource Mgmt",
                  "Service Psychology",
                  "Digital Marketing for Events",
                  "Event Laws and Licenses",
                  "Managing International Events",
                  "Event Sponsorship & Fundraising",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "Independent Learning",
                  "Research Methods for Event Ind",
                  "Special Project on Event Industry",
                  "Festivals & Special Event Mgmt",
                  "Business Ethics & CSR",
                  "Cross Cultural Management",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Internship & Thesis",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "Seminar on MICE (Event) Industry",
                  "MICE Pre-Cooperative Education",
                ],
              },
              {
                semester: "Semester VIII",
                subjects: ["Undergraduate Project - Internship"],
              },
            ],
          },
        ],
        careers: [
          "Event Coordinator",
          "Conference Planner",
          "Corporate Event Manager",
          "Exhibition Organizer",
        ],
      },
      bttm: {
        title: "Bachelor in Tourism & MICE Management",
        code: "BTTM",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 124,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1335&auto=format&fit=crop",
        description:
          "A comprehensive degree designed to produce future leaders in the global hospitality and tourism industry, combining practical exposure with classroom studies.",
        stats: {
          placementRate: "94%",
          startingSalary: "NPR 35k+",
          partners: "50+ Hotels",
        },
        overview: [
          "Provides a deep understanding of hospitality, tourism, and event sectors.",
          "Includes field trips, industrial internships, and project work.",
          "Covers airline operations, ticketing, tourism marketing, and MICE management.",
        ],
        highlights: [
          "International Internship Options",
          "IATA Certification Support",
          "Tourism & Event Tech Focus",
          "Chinese & French Language Training",
        ],
        curriculum: [
          {
            year: "Year 01",
            focus: "Tourism Foundations",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "General Psychology",
                  "Future Skills",
                  "Intermediate English",
                  "Intro to IT and Applications",
                  "Tools For the Digital Age",
                  "Tour Operators & Travel Agents Mgmt",
                  "Nepalese Heritage for Tourism",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "Advanced English",
                  "Principle of Marketing",
                  "Introduction to Economics",
                  "Personality & Identity Development",
                  "Bar and Beverage Operations",
                  "Kitchen Operations (Intermediate)",
                  "Front Office Management",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Operational Excellence",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "English Presentation Skills",
                  "Consumer Behavior",
                  "Introduction to Statistics",
                  "Principles of Management",
                  "Hotel Business Operations",
                  "Coffee Shop & Bakery Operations",
                  "Kitchen Operations (Advanced)",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "Organizational Behavior",
                  "Accounting & Financial Mgmt",
                  "Food and Beverage Cost Control",
                  "Tourism and Hospitality Industry",
                  "MICE Management for Hotel",
                  "Housekeeping Operations",
                  "Banquet and Catering Management",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Strategic Tourism",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "Intro to Human Resource Mgmt",
                  "Service Psychology",
                  "Digital Marketing for Hospitality",
                  "Florist & Room Operations",
                  "The Basic of Baked Pastry",
                  "Tourist Behavior & Cross-cultural Comm",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "Independent Learning",
                  "Research Methods for Hospitality",
                  "Special Project on Hospitality",
                  "Festivals & Special Event Mgmt",
                  "Hotel Planning and Development",
                  "Art of Engraving on Veg/Fruit",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Industrial Placement",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "Seminar on Hotel and MICE",
                  "Hotel & MICE Pre-Cooperative Edu",
                ],
              },
              {
                semester: "Semester VIII",
                subjects: ["Undergraduate Project - Internship"],
              },
            ],
          },
        ],
        careers: [
          "Tour Manager",
          "Airline Operations",
          "Travel Consultant",
          "Tourism Officer",
        ],
      },
      // ... (Other courses like MBA, BHM etc remain unchanged) ...
      bca: {
        title: "Bachelor of Computer Application",
        code: "BCA",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 130,
        intake: "March / July",
        image:
          "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop",
        description:
          "A professional IT program preparing students for careers in software development, networking, automation, and modern digital technologies.",
        stats: {
          placementRate: "96%",
          startingSalary: "NPR 45k+",
          partners: "IT Companies & Dev Agencies",
        },
        overview: [
          "Focus on programming, system design, data management, and application development.",
          "Includes hands-on projects, lab sessions, and industry-level software development training.",
          "Students gain practical experience through internships and project delivery.",
        ],
        highlights: [
          "Coding–focused Degree",
          "Project Development Every Semester",
          "Strong Networking & Security Foundations",
          "Internship Guarantee",
        ],
        // Curriculum updated to match the image provided
        curriculum: [
          {
            year: "Year 01",
            focus: "Computing Fundamentals",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "BCA101 Computer Fundamentals & Applications",
                  "BCA102 Programming in C",
                  "BCA103 Digital Logic",
                  "BCA104 Mathematics I",
                  "BCA104 Professional Communication & Ethics",
                  "BCA106 Hardware Workshop",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "BCA151 Descrete Structures",
                  "BCA152 Microprocessor & Computer Architecture",
                  "BCA153 OOP in Java",
                  "BCA154 Mathematics II",
                  "BCA155 UX/UI Design",
                  "BCA156 Principles of Management",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Software Core",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "BCA201 Data Structures and Algorithms",
                  "BCA202 Database Management System",
                  "BCA203 Web Technology I",
                  "BCA204 System Analysis and Design",
                  "BCA205 Probability and Statistics",
                  "BCA206 Applied Economics",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "BCA251 Operating System",
                  "BCA252 Software Engineering",
                  "BCA253 Numerical Methods",
                  "BCA254 Python Programming",
                  "BCA255 Web Technology II",
                  "BCA256 Project I",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Advanced Technologies",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "BCA301 Computer Network",
                  "BCA302 Artificial Intelligence",
                  "BCA303 Advanced Java Programming",
                  "BCA304 MIS and e-Business",
                  "BCA305 Society and Technology",
                  "BCA306 Project II",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "BCA351 Computer Graphics & Animation",
                  "BCA352 Mobile Programming",
                  "BCA353 Cryptography and Network Security",
                  "BCA354 Technical Writing",
                  "BCA355 Distributed Systems",
                  "BCA356 Project III",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Specialization & Research",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "BCA401 Cyber Security & Ethical Hacking",
                  "BCA402 Software Project Management",
                  "BCA403 Financial Accounting",
                  "BCA404 Project IV",
                  "BCA405 Elective I",
                  "BCA406 Elective II",
                ],
                // Added Specific Elective List for Sem VII
                electiveLabel: "Choose 2 Electives (Sem VII)",
                electives: [
                  "BCA404-I Machine Learning",
                  "BCA404-II E-Commerce",
                  "BCA404-III Database Administration",
                  "BCA404-IV Linex",
                  "BCA405-I Dotnet Technology",
                  "BCA405-II Business Intelligence",
                  "BCA405-III Software Testing & Quality Assurance",
                  "BCA405-IV Data Visualization",
                ],
              },
              {
                semester: "Semester VIII",
                subjects: [
                  "BCA451 Cloud Computing",
                  "BCA452 Internship",
                  "BCA453 Elective III",
                  "BCA454 Elective IV",
                ],
                // Added Specific Elective List for Sem VIII
                electiveLabel: "Choose 2 Electives (Sem VIII)",
                electives: [
                  "BCA453-I Network Administration",
                  "BCA453-II E-Governance",
                  "BCA453-III Database Programming",
                  "BCA453-IV Geographical Information System",
                  "BCA454-I Digital Marketing & SEO",
                  "BCA454-II Image Processing",
                  "BCA454-III Internet of Things",
                  "BCA454-IV Data Mining & Data Warehouse",
                ],
              },
            ],
          },
        ],
        careers: [
          "Software Developer",
          "Database Administrator",
          "Network Engineer",
          "Systems Analyst",
        ],
      },
      bscictc: {
        title:
          "Bachelor of Science (Information & Communication Technology-Cybersecurity)",
        code: "B.Sc ICTC",
        category: "Undergraduate",
        duration: "4 Years",
        semesters: 8,
        credits: 135,
        intake: "March / July / November",
        image:
          "https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fChJbmZvcm1hdGlvbiUyMCUyNiUyMENvbW11bmljYXRpb24lMjBUZWNobm9sb2d5LUN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
        description:
          "The emphasis of this degree is on the limitless analysis and design of IT systems. Deep knowledge with professionals, advanced courses in Data Security, PDPA, Network Systems, and Cloud Architecture. Teaching system analysis and computer network management, as well as the IT Professional Standards Certificate (ITPE) supports the digital future world by supporting technologies like Blockchain and Digital Twin.",
        stats: {
          placementRate: "96%",
          startingSalary: "NPR 45k+",
          partners: "IT Companies & Dev Agencies",
        },
        overview: [
          "Focus on programming, system design, data management, and application development.",
          "Includes hands-on projects, lab sessions, and industry-level software development training.",
          "Students gain practical experience through internships and project delivery.",
          "To develop skills in ethical hacking and penetration testing",
          "To develop a solid foundation in computer science",
        ],
        highlights: [
          "Coding–focused Degree",
          "Project Development Every Semester",
          "Strong Networking & Security Foundations",
          "Internship Guarantee",
          "skills in ethical hacking and penetration testing",
        ],
        // Curriculum updated to match the image provided
        curriculum: [
          {
            year: "Year 01",
            focus: "Computing Fundamentals",
            semesters: [
              {
                semester: "Semester I",
                subjects: [
                  "GEC122 Intermediate English",
                  "HUM132 Fuure Skill",
                  "GEC112 General Psychology",
                  "BUS101 Introductory Business for Digital Generation",
                  "ICT100 Fundamental of Information Technology",
                  "MAT119 Mathematics for Information Technology",
                  "CSC101 Fundamentals of Programming & Laboratory",
                ],
              },
              {
                semester: "Semester II",
                subjects: [
                  "HUM131 Design Thinking for Creative Work",
                  "GEC223 Advance English",
                  "BCS114 Using Technology in Digital Society",
                  "GEC101 Tools for the Digital Age",
                  "MAT231 Descrete Mathematics",
                  "CSC151 C Programming",
                  "CSC155 Microprocessor & Computer Architecture",
                ],
              },
            ],
          },
          {
            year: "Year 02",
            focus: "Software Core",
            semesters: [
              {
                semester: "Semester III",
                subjects: [
                  "ENG209 English Presentation Skills for Careers",
                  "GSC156 Fundamentals of Multimedia",
                  "BSC119 Social Media for Modern Communication",
                  "CSC115 Data Structures Laboratory and Algorithms",
                  "CSC403 Web System and Technology",
                  "CSC303 Database System and Laboratory",
                  "CSC467 Computer Network Technology and Cloud Computing",
                ],
              },
              {
                semester: "Semester IV",
                subjects: [
                  "SOC136 Digital Literacy",
                  "CSC364 Software Engineering",
                  "CSC251 Operating System",
                  "CSC121 Object Oriented Programming",
                  "CSC207 Numerical Methods",
                  "CSC316 Cryptography",
                  "CSC209 Computer Graphics",
                ],
              },
            ],
          },
          {
            year: "Year 03",
            focus: "Advanced Technologies",
            semesters: [
              {
                semester: "Semester V",
                subjects: [
                  "CSC112 Cyber Law and Ethics in Information Technology",
                  "Specialization Area-1",
                  "Specialization Area-2",
                  "Specialization Area-3",
                  "Specialization Area-4",
                  "Specialization Area-5",
                  "Specialization Area-6",
                ],
              },
              {
                semester: "Semester VI",
                subjects: [
                  "Specialization Area-7",
                  "Specialization Area-8",
                  "Specialization Area-9",
                  "Specialization Area-10",
                  "Specialization Area-11",
                  "Specialization Area-12",
                ],
              },
            ],
          },
          {
            year: "Year 04",
            focus: "Specialization & Research",
            semesters: [
              {
                semester: "Semester VII",
                subjects: [
                  "Specialization Area-13",
                  "CSC415 Research Methods for Engineering",
                  "SDM434 Project Work on Specialization Area",
                  "SDM299 Bachelor Thesis on Specialization Area",
                  "GAD499 Cooperative Education/Internship",
                ],
              },
            ],
          },
          {
            year: "Specialization Areas",
            focus: "Specialization & Research",
            semesters: [
              {
                semester: "Cyber Security Group (Compulsory)",
                subjects: [
                  "CSC447 Commercial Operating System for Administration",
                  "CSC448 Commercial Operating System for Network Administration",
                  "CSC449 Commercial Operating System for Secutiry Administration",
                  "CSC460 Information Technology System Analysis and Design",
                  "ICT465 Information Security Management",
                  "CT468 Cyber Crime",
                  "ICT469 Hacking and Penetrate Security Testing",
                  "ICT476 Special Topics in Cyber Security",
                ],
              },
              {
                semester: "Cyber Security Group (Elective)",
                subjects: [
                  "ICT480 Network Programming",
                  "CSC411 Network System Management",
                  "CSC412 Computer Networkinig Security",
                  "CSC413 Professional Development",
                  "CSC414 Advanced Network Security",
                  "CSC416 Desing and Implementation (Cyber Security)",
                  "CSC417 Project Testing and Implementatin (Cyber Security)",
                  "CSC418 Network Operating System",
                ],
              },
              {
                semester: "Artificial Intelligence (AI) Group (Compulsory)",
                subjects: [
                  "CSD211 Introduction to Interaction Desing",
                  "CSC434 Human Interaction Design",
                  "CSD234 AI and Intelligent Agent",
                  "ICT300 Human-Computer Interaction",
                  "ICT312 System Integratin and Architecture",
                  "AIT312 AI Applications",
                  "AIT313 Data Warehousing and Mining",
                  "AIT416 Introduction to AI",
                ],
              },
              {
                semester: "Artificial Intelligence (AI) Group (Elective)",
                subjects: [
                  "AIT418 Introduction to Machine Learning",
                  "AIT419 Soft Computing",
                  "AIT421 Algorithms in AI",
                  "AIT422 Machine Learning Techniques",
                  "AIT423 Ethics and Social Implications of AI",
                  "AIT425 Digital Image Processing",
                  "AIT426 Internet of Things and Robotics",
                  "AIT427 Data Science with R Programming for AI",
                ],
              },
              {
                semester:
                  "Computer Science & S/W Innovation Group (Compulsory)",
                subjects: [
                  "CSD211 Introduction to Interaction Design",
                  "CSD221 Software Development-1",
                  "CSD223 Software Development-2",
                  "CSD252 Introduction to Computer System",
                  "CSD333 Web Design and Database",
                  "CSD334 Programming Language",
                  "CSD338 Web Programming",
                  "CSD461 Hardware-Software Interface",
                ],
              },
              {
                semester: "Computer Science & S/W Innovation Group (Elective)",
                subjects: [
                  "CSD233 Software Desing",
                  "CSD234 AI and Intelligent Agent",
                  "CSD236 Operative System and Concurrency",
                  "CSD413 Professional Development",
                  "CSD415 Research Methods for Engineering",
                  "CSD416 Desing & Implementation",
                ],
              },
              {
                semester: "Mobile Application Development Group (Compulsory)",
                subjects: [
                  "CSC237 Mobile Application Development-1",
                  "CSC238 Mobile Application Development-2",
                  "CSC242 Web Service",
                  "CSC245 Mobile Programming-1",
                  "CSC246 Mobile Programming-2",
                  "CSC234 Human Intraction Desing for Mobile Device",
                  "CSC235 Frameworks for Mobile Application Development",
                  "CSC236 Special Topics Mobile Application Development",
                ],
              },
              {
                semester: "Mobile Application Development Group (Electives)",
                subjects: [
                  "IGD236 Computer Games Programming",
                  "CSD234 AI & Intelligent Agent",
                  "CSD235 Software Engineering",
                  "CSC413 Professional Development",
                  "CSC416 Design & Implementation",
                  "CSC414 Advanced Network Security",
                ],
              },
              {
                semester: "Multimedia Technology Group (Compulsory)",
                subjects: [
                  "MMT221 Technical Desing & Art Drawing",
                  "MMT222 Digital Media Development",
                  "MMT321 2D Computer Animation Laboratory",
                  "MMT322 Video and Audio Production",
                  "MMT351 3D Modelling",
                  "MMT352 3D Animation",
                  "MMT371 Instructional Multimedia",
                  "MMT373 Digital Publisher Development",
                ],
              },
              {
                semester: "Multimedia Technology Group (Elective)",
                subjects: [
                  "MMT442 Game Multimedia Development",
                  "MMT480 Special Topics for Multimedia Technology-1",
                  "MMT481 Special Topics for Multimedia Technology-2",
                  "CSD234 AI & Intelligent Agent",
                  "CSD413 Professional Developement",
                  "CSD416 Desing and Implementation",
                ],
              },
              {
                semester:
                  "Imformation Communicatin Technology Group (Compulsory)",
                subjects: [
                  "ICT446 Introduction to Commercial Operating System",
                  "BCS478 Information Technology Entrepreneurship",
                  "ICT300 Human-Computer Interaction",
                  "ICT306 Information Management & Security",
                  "ICT312 System Integration & Architecture",
                  "ICT313 Integrative Programming and Technology",
                  "ICT401 System Administration and Maintenance",
                  "ICT311 Computer and Communication System",
                ],
              },
              {
                semester:
                  "Imformation Communicatin Technology Group (Elective)",
                subjects: [
                  "ICT323 Data Communication and Network",
                  "BCS474 Network Design, Implementation, and Case Study",
                  "ICT493 Technology Innovation",
                  "ICT495 Special Topics in Information Technology-1",
                  "ICT495 Special Topics in Information Technology-2",
                ],
              },
            ],
          },
        ],
        // Curriculum updated to match the image provided
        careers: [
          "Ethical Hacker",
          "Penetration Tester",
          "Software Developer",
          "Database Administrator",
          "Network Engineer",
          "Systems Analyst",
        ],
      },
    };
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
  "[project]/Yeti-College/components/hero.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Hero]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/styled-jsx/style.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/react-countup/build/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/navigation.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
      );
    // IMPORTANT: Ensure this path is correct
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$public$2f$data$2f$coursedata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/public/data/coursedata.ts [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature(),
      _s1 = __turbopack_context__.k.signature(),
      _s2 = __turbopack_context__.k.signature(),
      _s3 = __turbopack_context__.k.signature(),
      _s4 = __turbopack_context__.k.signature();
    ("use client");
    // --- Data Transformation for Courses ---
    const ALL_COURSES = Object.entries(
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$public$2f$data$2f$coursedata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "coursesDB"
      ]
    ).map(
      (_c = ([key, course]) => ({
        slug: key,
        ...course,
      }))
    );
    _c1 = ALL_COURSES;
    // --- Icons ---
    const Icons = {
      Search: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-5 h-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 38,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 32,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      X: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 53,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 47,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Clock: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 68,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 62,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Grip: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-1 text-white/20",
            fill: "currentColor",
            viewBox: "0 0 24 4",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "rect",
              {
                width: "24",
                height: "4",
                rx: "2",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 82,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 77,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      ArrowRight: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5l7 7-7 7",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 92,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 86,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
    };
    // --- Helper: Highlight Matched Text ---
    const HighlightedText = ({ text, highlight }) => {
      if (!highlight.trim())
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "span",
          {
            children: text,
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/hero.tsx",
            lineNumber: 110,
            columnNumber: 33,
          },
          ("TURBOPACK compile-time value", void 0)
        );
      const parts = text.split(new RegExp(`(${highlight})`, "gi"));
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "span",
        {
          children: parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase()
              ? /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "span",
                  {
                    className:
                      "text-blue-400 font-bold underline decoration-blue-400/30 underline-offset-2",
                    children: part,
                  },
                  i,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 116,
                    columnNumber: 11,
                  },
                  ("TURBOPACK compile-time value", void 0)
                )
              : /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "span",
                  {
                    children: part,
                  },
                  i,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 123,
                    columnNumber: 11,
                  },
                  ("TURBOPACK compile-time value", void 0)
                )
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 113,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _c2 = HighlightedText;
    // --- Component: Enhanced Search Bar ---
    const SearchBar = () => {
      _s();
      const [query, setQuery] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      const [isFocused, setIsFocused] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [results, setResults] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])([]);
      const [selectedIndex, setSelectedIndex] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(-1);
      const inputRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      // Filter logic
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "SearchBar.useEffect": () => {
            if (!query.trim()) {
              setResults([]);
              setSelectedIndex(-1);
              return;
            }
            const filtered = ALL_COURSES.filter(
              {
                "SearchBar.useEffect.filtered": (c) =>
                  c.title.toLowerCase().includes(query.toLowerCase()) ||
                  c.code.toLowerCase().includes(query.toLowerCase()),
              }["SearchBar.useEffect.filtered"]
            ).slice(0, 5);
            setResults(filtered);
            setSelectedIndex(-1);
          },
        }["SearchBar.useEffect"],
        [query]
      );
      // Keyboard Navigation
      const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleSelect(results[selectedIndex].slug);
          } else if (query) {
            console.log("Full search for:", query);
            router.push(`/programs?search=${encodeURIComponent(query)}`);
            setIsFocused(false);
          }
        } else if (e.key === "Escape") {
          inputRef.current?.blur();
          setIsFocused(false);
        }
      };
      const handleSelect = (slug) => {
        setQuery("");
        setIsFocused(false);
        router.push(`/programs/${slug}`);
      };
      const clearSearch = () => {
        setQuery("");
        inputRef.current?.focus();
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "relative z-50 w-full max-w-lg mx-auto md:mx-0",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: `relative flex items-center bg-white/5 backdrop-blur-xl border transition-all duration-300 rounded-2xl ${
                  isFocused
                    ? "border-blue-500/50 bg-zinc-900/90 shadow-2xl ring-4 ring-blue-500/10"
                    : "border-white/10 shadow-lg hover:border-white/20"
                }`,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: `pl-4 transition-colors ${
                        isFocused ? "text-blue-400" : "text-slate-400"
                      }`,
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        Icons.Search,
                        {},
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/hero.tsx",
                          lineNumber: 204,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0)
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/hero.tsx",
                      lineNumber: 199,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "input",
                    {
                      ref: inputRef,
                      type: "text",
                      value: query,
                      onChange: (e) => setQuery(e.target.value),
                      onFocus: () => setIsFocused(true),
                      onBlur: () => setTimeout(() => setIsFocused(false), 200),
                      onKeyDown: handleKeyDown,
                      placeholder: "Search for programs, codes...",
                      className:
                        "flex-1 bg-transparent text-white placeholder-slate-500 text-base px-4 py-4 outline-none w-full",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/hero.tsx",
                      lineNumber: 206,
                      columnNumber: 9,
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
                        query &&
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "motion"
                          ].button,
                          {
                            initial: {
                              opacity: 0,
                              scale: 0.8,
                            },
                            animate: {
                              opacity: 1,
                              scale: 1,
                            },
                            exit: {
                              opacity: 0,
                              scale: 0.8,
                            },
                            onClick: clearSearch,
                            className:
                              "p-2 mr-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              Icons.X,
                              {},
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 226,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0)
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/Yeti-College/components/hero.tsx",
                            lineNumber: 219,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0)
                        ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/hero.tsx",
                      lineNumber: 217,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 192,
                columnNumber: 7,
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
                  isFocused &&
                  query.trim().length > 0 &&
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
                        y: 8,
                        scale: 0.98,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                      exit: {
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      },
                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                      className:
                        "absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-top",
                      children:
                        results.length > 0
                          ? /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "ul",
                              {
                                className: "py-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider flex justify-between",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            children: "Suggested Programs",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0)
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className: "hidden sm:block",
                                            children: "Selection",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0)
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 244,
                                      columnNumber: 17,
                                    },
                                    ("TURBOPACK compile-time value", void 0)
                                  ),
                                  results.map((course, index) =>
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
                                            href: `/programs/${course.slug}`,
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                onClick: () =>
                                                  handleSelect(course.slug),
                                                className: `relative cursor-pointer px-4 py-3 flex items-center gap-4 transition-colors ${
                                                  index === selectedIndex
                                                    ? "bg-blue-500/20"
                                                    : "hover:bg-white/5"
                                                }`,
                                                children: [
                                                  index === selectedIndex &&
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
                                                          "absolute left-0 top-0 bottom-0 w-1 bg-blue-500",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/hero.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 27,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0)
                                                    ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "div",
                                                    {
                                                      className:
                                                        "w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0 border border-white/10",
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "img",
                                                          {
                                                            src: course.image,
                                                            alt: course.code,
                                                            className:
                                                              "w-full h-full object-cover opacity-80",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/hero.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 27,
                                                          },
                                                          ("TURBOPACK compile-time value",
                                                          void 0)
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/hero.tsx",
                                                      lineNumber: 265,
                                                      columnNumber: 25,
                                                    },
                                                    ("TURBOPACK compile-time value",
                                                    void 0)
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex-1 min-w-0",
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "h4",
                                                          {
                                                            className: `text-sm font-semibold truncate ${
                                                              index ===
                                                              selectedIndex
                                                                ? "text-blue-200"
                                                                : "text-white"
                                                            }`,
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                HighlightedText,
                                                                {
                                                                  text: course.title,
                                                                  highlight:
                                                                    query,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/hero.tsx",
                                                                  lineNumber: 280,
                                                                  columnNumber: 29,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0)
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/hero.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 27,
                                                          },
                                                          ("TURBOPACK compile-time value",
                                                          void 0)
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center gap-2 mt-0.5",
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-xs text-slate-400",
                                                                  children:
                                                                    course.category,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/hero.tsx",
                                                                  lineNumber: 286,
                                                                  columnNumber: 29,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0)
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "w-1 h-1 rounded-full bg-slate-600",
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/hero.tsx",
                                                                  lineNumber: 289,
                                                                  columnNumber: 29,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0)
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-xs font-mono text-slate-500 uppercase",
                                                                  children:
                                                                    course.code,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/Yeti-College/components/hero.tsx",
                                                                  lineNumber: 290,
                                                                  columnNumber: 29,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0)
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          true,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/hero.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 27,
                                                          },
                                                          ("TURBOPACK compile-time value",
                                                          void 0)
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/hero.tsx",
                                                      lineNumber: 272,
                                                      columnNumber: 25,
                                                    },
                                                    ("TURBOPACK compile-time value",
                                                    void 0)
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "div",
                                                    {
                                                      className: `text-slate-500 transition-transform duration-300 ${
                                                        index === selectedIndex
                                                          ? "translate-x-0 opacity-100 text-blue-400"
                                                          : "-translate-x-2 opacity-0"
                                                      }`,
                                                      children:
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          Icons.ArrowRight,
                                                          {},
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/components/hero.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 27,
                                                          },
                                                          ("TURBOPACK compile-time value",
                                                          void 0)
                                                        ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/hero.tsx",
                                                      lineNumber: 295,
                                                      columnNumber: 25,
                                                    },
                                                    ("TURBOPACK compile-time value",
                                                    void 0)
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/hero.tsx",
                                                lineNumber: 251,
                                                columnNumber: 23,
                                              },
                                              ("TURBOPACK compile-time value",
                                              void 0)
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 250,
                                            columnNumber: 21,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0)
                                        ),
                                      },
                                      course.slug,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/hero.tsx",
                                        lineNumber: 249,
                                        columnNumber: 19,
                                      },
                                      ("TURBOPACK compile-time value", void 0)
                                    )
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 243,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0)
                            )
                          : /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "p-8 text-center",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        Icons.Search,
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 312,
                                          columnNumber: 19,
                                        },
                                        ("TURBOPACK compile-time value", void 0)
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 311,
                                      columnNumber: 17,
                                    },
                                    ("TURBOPACK compile-time value", void 0)
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className: "text-slate-300 font-medium",
                                      children: "No programs found",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 314,
                                      columnNumber: 17,
                                    },
                                    ("TURBOPACK compile-time value", void 0)
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 310,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0)
                            ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/hero.tsx",
                      lineNumber: 235,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 233,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 190,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _s(SearchBar, "QMNtgp2D1OaHGEkMY4rTlqD7zzI=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
      ];
    });
    _c3 = SearchBar;
    // --- Static Data for Carousel/Stats ---
    const SEAT_DATA = [
      {
        course: "MBA",
        seats: 4,
        total: 60,
      },
      {
        course: "BABM",
        seats: 12,
        total: 120,
      },
      {
        course: "BCA",
        seats: 8,
        total: 40,
      },
      {
        course: "BTTM",
        seats: 3,
        total: 30,
      },
      {
        course: "BHM",
        seats: 15,
        total: 100,
      },
      {
        course: "BAMM",
        seats: 2,
        total: 25,
      },
    ];
    const SLIDES = [
      {
        video: "/videos/slide1.mp4",
        poster:
          "https://images.pexels.com/photos/6187887/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        video: "/videos/slide2.mov",
        poster:
          "https://images.pexels.com/photos/34642433/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        video: "https://www.pexels.com/download/video/3366872/",
        poster:
          "https://images.pexels.com/photos/3366872/pexels-photo-3738601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ];
    // --- Sub-Component: Video Slide ---
    const VideoSlide = ({ video, poster }) => {
      _s1();
      const [isVideoLoaded, setIsVideoLoaded] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "relative flex-[0_0_100%] h-full",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "img",
              {
                src: poster,
                alt: "Background Preview",
                className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  isVideoLoaded ? "opacity-0" : "opacity-100"
                }`,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 358,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "video",
              {
                className:
                  "absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2",
                src: video,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                onLoadedData: () => setIsVideoLoaded(true),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 365,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute inset-0 bg-black/20",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 374,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 357,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _s1(VideoSlide, "tqAcf+W3cNNRb4dIMML3IRE1VPk=");
    _c4 = VideoSlide;
    // --- Component: Video Carousel ---
    const VideoCarousel = () => {
      _s2();
      const [emblaRef, emblaApi] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(
        {
          loop: true,
          duration: 60,
        },
        [
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ])({
            delay: 8000,
            stopOnInteraction: false,
          }),
        ]
      );
      const [selectedIndex, setSelectedIndex] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const scrollTo = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])(
        {
          "VideoCarousel.useCallback[scrollTo]": (index) =>
            emblaApi && emblaApi.scrollTo(index),
        }["VideoCarousel.useCallback[scrollTo]"],
        [emblaApi]
      );
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "VideoCarousel.useEffect": () => {
            if (!emblaApi) return;
            const onSelect = {
              "VideoCarousel.useEffect.onSelect": () =>
                setSelectedIndex(emblaApi.selectedScrollSnap()),
            }["VideoCarousel.useEffect.onSelect"];
            emblaApi.on("select", onSelect);
            return {
              "VideoCarousel.useEffect": () => {
                emblaApi.off("select", onSelect);
              },
            }["VideoCarousel.useEffect"];
          },
        }["VideoCarousel.useEffect"],
        [emblaApi]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "absolute inset-0 overflow-hidden -z-10 bg-zinc-900",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "h-full",
                ref: emblaRef,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex h-full",
                    children: SLIDES.map((slide, index) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        VideoSlide,
                        {
                          video: slide.video,
                          poster: slide.poster,
                        },
                        index,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/hero.tsx",
                          lineNumber: 405,
                          columnNumber: 13,
                        },
                        ("TURBOPACK compile-time value", void 0)
                      )
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 403,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 402,
                columnNumber: 7,
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
                  "absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 sm:via-black/60 pointer-events-none",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 409,
                columnNumber: 7,
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
                  "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden pointer-events-none",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 410,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute bottom-8 right-8 flex gap-3 z-20",
                children: SLIDES.map((_, index) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      onClick: () => scrollTo(index),
                      className: `h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                        index === selectedIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`,
                    },
                    index,
                    false,
                    {
                      fileName: "[project]/Yeti-College/components/hero.tsx",
                      lineNumber: 413,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 411,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 401,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _s2(VideoCarousel, "CfeqfNXbYjt82aCeMYs0UVG9Xvg=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
      ];
    });
    _c5 = VideoCarousel;
    // --- Component: Event Card (FIXED) ---
    const EventCard = ({ constraintsRef }) => {
      _s3();
      const [events, setEvents] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])([]);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "EventCard.useEffect": () => {
            let mounted = true;
            // Dynamically import the events file
            __turbopack_context__
              .A(
                "[project]/Yeti-College/public/data/events.ts [app-client] (ecmascript, async loader)"
              )
              .then(
                {
                  "EventCard.useEffect": (mod) => {
                    // Access the named export 'events' which is an array
                    const rawEvents = mod.events || [];
                    // Map the array to our state structure
                    const list = rawEvents.map(
                      {
                        "EventCard.useEffect.list": (e) => ({
                          id: e.id,
                          title: e.title,
                          date: e.date,
                          time: e.time,
                          location: e.location,
                        }),
                      }["EventCard.useEffect.list"]
                    );
                    if (!mounted) return;
                    // Sort by date
                    list.sort(
                      {
                        "EventCard.useEffect": (a, b) => {
                          const da = a.date
                            ? new Date(a.date).getTime()
                            : Infinity;
                          const db = b.date
                            ? new Date(b.date).getTime()
                            : Infinity;
                          return da - db;
                        },
                      }["EventCard.useEffect"]
                    );
                    setEvents(list);
                  },
                }["EventCard.useEffect"]
              )
              .catch(
                {
                  "EventCard.useEffect": (err) => {
                    console.error("Failed to load events:", err);
                    if (!mounted) return;
                    setEvents([]);
                  },
                }["EventCard.useEffect"]
              );
            return {
              "EventCard.useEffect": () => {
                mounted = false;
              },
            }["EventCard.useEffect"];
          },
        }["EventCard.useEffect"],
        []
      );
      const next = events.length > 0 ? events[0] : null;
      const formatMonthDay = (iso) => {
        if (!iso)
          return {
            mon: "TBD",
            day: "--",
          };
        const d = new Date(iso);
        return {
          mon: d.toLocaleString(undefined, {
            month: "short",
          }),
          day: d.getDate().toString(),
        };
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "motion"
        ].div,
        {
          drag: true,
          dragConstraints: constraintsRef,
          dragMomentum: false,
          whileHover: {
            scale: 1.01,
          },
          whileDrag: {
            scale: 1.05,
            cursor: "grabbing",
            zIndex: 50,
          },
          className:
            "pointer-events-auto cursor-grab w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "w-full bg-black/20 h-4 flex items-center justify-center",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  Icons.Grip,
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 503,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 502,
                columnNumber: 7,
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
                  "h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 505,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "p-5 bg-black/40",
                children: next
                  ? /*#__PURE__*/ (0,
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
                            "div",
                            {
                              className:
                                "flex justify-between items-start mb-4",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "flex flex-col",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className:
                                            "text-xs font-bold text-blue-300 uppercase tracking-wider mb-1",
                                          children: "Upcoming Event",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 511,
                                          columnNumber: 17,
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
                                            "text-xl font-bold text-white line-clamp-2",
                                          children: next.title,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 514,
                                          columnNumber: 17,
                                        },
                                        ("TURBOPACK compile-time value", void 0)
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/hero.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15,
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
                                      "bg-white/10 rounded-lg p-2 text-center min-w-[60px]",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className:
                                            "block text-xs uppercase text-slate-400 font-bold",
                                          children: formatMonthDay(next.date)
                                            .mon,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 519,
                                          columnNumber: 17,
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
                                            "block text-xl font-bold text-white",
                                          children: formatMonthDay(next.date)
                                            .day,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 522,
                                          columnNumber: 17,
                                        },
                                        ("TURBOPACK compile-time value", void 0)
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/hero.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15,
                                  },
                                  ("TURBOPACK compile-time value", void 0)
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Yeti-College/components/hero.tsx",
                              lineNumber: 509,
                              columnNumber: 13,
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
                                "flex items-center gap-2 text-slate-300 text-sm mb-4",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  Icons.Clock,
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/hero.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15,
                                  },
                                  ("TURBOPACK compile-time value", void 0)
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    children: [
                                      next.time ?? "Time TBA",
                                      " • ",
                                      next.location ?? "Location TBA",
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/hero.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15,
                                  },
                                  ("TURBOPACK compile-time value", void 0)
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Yeti-College/components/hero.tsx",
                              lineNumber: 528,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0)
                          ),
                        ],
                      },
                      void 0,
                      true
                    )
                  : /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "text-center py-8",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-slate-400 mb-2",
                              children: "No upcoming events",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/hero.tsx",
                              lineNumber: 548,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0)
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-sm text-slate-500",
                              children: "Check back later",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/hero.tsx",
                              lineNumber: 549,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0)
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/Yeti-College/components/hero.tsx",
                        lineNumber: 547,
                        columnNumber: 11,
                      },
                      ("TURBOPACK compile-time value", void 0)
                    ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 506,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 494,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _s3(EventCard, "j18ueuia/psAZ/XawE3UyqzOWsE=");
    _c6 = EventCard;
    function Hero() {
      _s4();
      const constraintsRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          ref: constraintsRef,
          className:
            "jsx-f13408a3e64696cc" +
            " " +
            "relative z-0 min-h-screen flex items-center overflow-hidden font-sans text-white",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              VideoCarousel,
              {},
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 566,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                id: "f13408a3e64696cc",
                children:
                  "@keyframes vertical-scroll{0%{transform:translateY(0)}to{transform:translateY(-50%)}}.animate-vertical-scroll.jsx-f13408a3e64696cc{animation:15s linear infinite vertical-scroll}.animate-vertical-scroll.jsx-f13408a3e64696cc:hover{animation-play-state:paused}",
              },
              void 0,
              false,
              void 0,
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "jsx-f13408a3e64696cc" +
                  " " +
                  "relative max-w-7xl mx-auto px-6 py-24 w-full z-10 pointer-events-none",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "jsx-f13408a3e64696cc" +
                      " " +
                      "grid md:grid-cols-2 gap-16 items-center",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "jsx-f13408a3e64696cc" +
                            " " +
                            "pointer-events-auto space-y-10 text-center md:text-left animate-in fade-in duration-1000 slide-in-from-left-5",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "jsx-f13408a3e64696cc" + " " + "space-y-6",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-sm",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "relative flex h-2 w-2",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/hero.tsx",
                                                  lineNumber: 592,
                                                  columnNumber: 19,
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
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "relative inline-flex rounded-full h-2 w-2 bg-blue-500",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/hero.tsx",
                                                  lineNumber: 593,
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
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17,
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
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "text-xs font-bold text-blue-300 uppercase tracking-wider",
                                            children: "Admissions Open 2025",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 595,
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
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 590,
                                      columnNumber: 15,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300",
                                            children: "First",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        " ",
                                        "BABM",
                                        " ",
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300",
                                            children: "college in Nepal.",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 604,
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
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 599,
                                      columnNumber: 15,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "text-lg md:text-xl text-slate-300 leading-relaxed tracking-wider max-w-xl mx-auto md:mx-0 text-balance font-medium",
                                      children:
                                        "Empowering Future, Unleashing Innovation......",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 608,
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
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 589,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              SearchBar,
                              {},
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 614,
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
                                  "jsx-f13408a3e64696cc" +
                                  " " +
                                  "flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "button",
                                    {
                                      onClick: () => {
                                        const el =
                                          document.getElementById("programs");
                                        if (el) {
                                          el.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                          });
                                        } else {
                                          window.location.href =
                                            "/programs/bca";
                                        }
                                      },
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "px-8 cursor-pointer py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-900/20",
                                      children: "Explore Programs",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 617,
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
                                      href: "/tour",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "button",
                                        {
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "px-8 py-4 cursor-pointer bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all",
                                          children: "Virtual Tour",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 631,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 630,
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
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 616,
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
                                  "jsx-f13408a3e64696cc" +
                                  " " +
                                  "pt-10 border-t border-white/10 flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 7,
                                      suffix: "+",
                                      label: "Faculties",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 638,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-px h-12 bg-white/10 hidden sm:block",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 639,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 2,
                                      suffix: "000+",
                                      label: "Students",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 640,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-px h-12 bg-white/10 hidden sm:block",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 641,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 50,
                                      suffix: "+",
                                      label: "Collaborators",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 642,
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
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 637,
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
                            "[project]/Yeti-College/components/hero.tsx",
                          lineNumber: 588,
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
                            "jsx-f13408a3e64696cc" +
                            " " +
                            "hidden md:flex h-full flex-col justify-center items-end gap-8 pointer-events-none",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              EventCard,
                              {
                                constraintsRef: constraintsRef,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 649,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "motion"
                              ].div,
                              {
                                drag: true,
                                dragConstraints: constraintsRef,
                                dragMomentum: false,
                                whileHover: {
                                  scale: 1.01,
                                },
                                whileDrag: {
                                  scale: 1.05,
                                  cursor: "grabbing",
                                  zIndex: 50,
                                },
                                className:
                                  "pointer-events-auto cursor-grab w-72 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-full bg-white/5 h-4 flex items-center justify-center border-b border-white/5",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        Icons.Grip,
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 661,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 660,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                className:
                                                  "jsx-f13408a3e64696cc" +
                                                  " " +
                                                  "relative flex h-2 w-2",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      className:
                                                        "jsx-f13408a3e64696cc" +
                                                        " " +
                                                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/hero.tsx",
                                                      lineNumber: 666,
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
                                                        "jsx-f13408a3e64696cc" +
                                                        " " +
                                                        "relative inline-flex rounded-full h-2 w-2 bg-red-500",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/hero.tsx",
                                                      lineNumber: 667,
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
                                                  "[project]/Yeti-College/components/hero.tsx",
                                                lineNumber: 665,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                            "Live Seat Status",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/hero.tsx",
                                          lineNumber: 664,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 663,
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
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "relative h-48 overflow-hidden group",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 673,
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
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 674,
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
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "animate-vertical-scroll group-hover:pause-animation",
                                            children: [
                                              ...SEAT_DATA,
                                              ...SEAT_DATA,
                                            ].map((item, i) =>
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "px-5 py-3 border-b border-white/5 flex justify-between items-center",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "flex flex-col",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "text-sm font-medium text-white truncate w-36",
                                                              children:
                                                                item.course,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/hero.tsx",
                                                              lineNumber: 682,
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
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "w-full bg-white/10 h-1 rounded-full mt-1.5",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      width: `${
                                                                        (1 -
                                                                          item.seats /
                                                                            item.total) *
                                                                        100
                                                                      }%`,
                                                                    },
                                                                    className:
                                                                      "jsx-f13408a3e64696cc" +
                                                                      " " +
                                                                      `h-full rounded-full ${
                                                                        item.seats <
                                                                        5
                                                                          ? "bg-red-500"
                                                                          : "bg-emerald-500"
                                                                      }`,
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/hero.tsx",
                                                                    lineNumber: 686,
                                                                    columnNumber: 27,
                                                                  },
                                                                  this
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/hero.tsx",
                                                              lineNumber: 685,
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
                                                          "[project]/Yeti-College/components/hero.tsx",
                                                        lineNumber: 681,
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
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "text-right",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                `text-sm font-bold ${
                                                                  item.seats < 5
                                                                    ? "text-red-400"
                                                                    : "text-emerald-400"
                                                                }`,
                                                              children:
                                                                item.seats,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/hero.tsx",
                                                              lineNumber: 697,
                                                              columnNumber: 25,
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
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "block text-[10px] text-slate-500 uppercase",
                                                              children: "left",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/hero.tsx",
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
                                                          "[project]/Yeti-College/components/hero.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                i,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/hero.tsx",
                                                  lineNumber: 677,
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
                                              "[project]/Yeti-College/components/hero.tsx",
                                            lineNumber: 675,
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
                                        "[project]/Yeti-College/components/hero.tsx",
                                      lineNumber: 672,
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
                                  "[project]/Yeti-College/components/hero.tsx",
                                lineNumber: 652,
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
                            "[project]/Yeti-College/components/hero.tsx",
                          lineNumber: 647,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 586,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 585,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 562,
          columnNumber: 5,
        },
        this
      );
    }
    _s4(Hero, "dp9ugpCgIXMYVTTfU/JKhJ1j3jo=");
    _c7 = Hero;
    const StatItem = ({ end, suffix, label }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "flex flex-col items-start",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "text-4xl font-bold text-white tracking-tighter",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {
                    end: end,
                    duration: 2.5,
                    suffix: suffix,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/hero.tsx",
                    lineNumber: 731,
                    columnNumber: 7,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 730,
                columnNumber: 5,
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
                  "text-xs text-slate-400 font-bold uppercase tracking-widest mt-1",
                children: label,
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/hero.tsx",
                lineNumber: 733,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/hero.tsx",
          lineNumber: 729,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    _c8 = StatItem;
    var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
    __turbopack_context__.k.register(
      _c,
      "ALL_COURSES$Object.entries(coursesDB).map"
    );
    __turbopack_context__.k.register(_c1, "ALL_COURSES");
    __turbopack_context__.k.register(_c2, "HighlightedText");
    __turbopack_context__.k.register(_c3, "SearchBar");
    __turbopack_context__.k.register(_c4, "VideoSlide");
    __turbopack_context__.k.register(_c5, "VideoCarousel");
    __turbopack_context__.k.register(_c6, "EventCard");
    __turbopack_context__.k.register(_c7, "Hero");
    __turbopack_context__.k.register(_c8, "StatItem");
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
  "[project]/Yeti-College/components/ui/carousel.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Carousel",
      () => Carousel,
      "CarouselContent",
      () => CarouselContent,
      "CarouselItem",
      () => CarouselItem,
      "CarouselNext",
      () => CarouselNext,
      "CarouselPrevious",
      () => CarouselPrevious,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/button.tsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature(),
      _s1 = __turbopack_context__.k.signature(),
      _s2 = __turbopack_context__.k.signature(),
      _s3 = __turbopack_context__.k.signature(),
      _s4 = __turbopack_context__.k.signature(),
      _s5 = __turbopack_context__.k.signature();
    ("use client");
    const CarouselContext =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "createContext"
      ](null);
    function useCarousel() {
      _s();
      const context =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useContext"
        ](CarouselContext);
      if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
      }
      return context;
    }
    _s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
    function Carousel({
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    }) {
      _s1();
      const [carouselRef, api] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(
        {
          ...opts,
          axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins
      );
      const [canScrollPrev, setCanScrollPrev] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](false);
      const [canScrollNext, setCanScrollNext] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](false);
      const onSelect =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "Carousel.useCallback[onSelect]": (api) => {
              if (!api) return;
              setCanScrollPrev(api.canScrollPrev());
              setCanScrollNext(api.canScrollNext());
            },
          }["Carousel.useCallback[onSelect]"],
          []
        );
      const scrollPrev =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "Carousel.useCallback[scrollPrev]": () => {
              api?.scrollPrev();
            },
          }["Carousel.useCallback[scrollPrev]"],
          [api]
        );
      const scrollNext =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "Carousel.useCallback[scrollNext]": () => {
              api?.scrollNext();
            },
          }["Carousel.useCallback[scrollNext]"],
          [api]
        );
      const handleKeyDown =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          {
            "Carousel.useCallback[handleKeyDown]": (event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
              }
            },
          }["Carousel.useCallback[handleKeyDown]"],
          [scrollPrev, scrollNext]
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "Carousel.useEffect": () => {
            if (!api || !setApi) return;
            setApi(api);
          },
        }["Carousel.useEffect"],
        [api, setApi]
      );
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "Carousel.useEffect": () => {
            if (!api) return;
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return {
              "Carousel.useEffect": () => {
                api?.off("select", onSelect);
              },
            }["Carousel.useEffect"];
          },
        }["Carousel.useEffect"],
        [api, onSelect]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        CarouselContext.Provider,
        {
          value: {
            carouselRef,
            api: api,
            opts,
            orientation:
              orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
          },
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              onKeyDownCapture: handleKeyDown,
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])("relative", className),
              role: "region",
              "aria-roledescription": "carousel",
              "data-slot": "carousel",
              ...props,
              children: children,
            },
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
              lineNumber: 121,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
          lineNumber: 108,
          columnNumber: 5,
        },
        this
      );
    }
    _s1(Carousel, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
      ];
    });
    _c = Carousel;
    function CarouselContent({ className, ...props }) {
      _s2();
      const { carouselRef, orientation } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          ref: carouselRef,
          className: "overflow-hidden",
          "data-slot": "carousel-content",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex",
                orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
              lineNumber: 144,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
          lineNumber: 139,
          columnNumber: 5,
        },
        this
      );
    }
    _s2(CarouselContent, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function () {
      return [useCarousel];
    });
    _c1 = CarouselContent;
    function CarouselItem({ className, ...props }) {
      _s3();
      const { orientation } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          role: "group",
          "aria-roledescription": "slide",
          "data-slot": "carousel-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "min-w-0 shrink-0 grow-0 basis-full",
            orientation === "horizontal" ? "pl-4" : "pt-4",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
          lineNumber: 160,
          columnNumber: 5,
        },
        this
      );
    }
    _s3(CarouselItem, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function () {
      return [useCarousel];
    });
    _c2 = CarouselItem;
    function CarouselPrevious({
      className,
      variant = "outline",
      size = "icon",
      ...props
    }) {
      _s4();
      const { orientation, scrollPrev, canScrollPrev } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Button"
        ],
        {
          "data-slot": "carousel-previous",
          variant: variant,
          size: size,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute size-8 rounded-full",
            orientation === "horizontal"
              ? "top-1/2 -left-12 -translate-y-1/2"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            className
          ),
          disabled: !canScrollPrev,
          onClick: scrollPrev,
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__[
                "ArrowLeft"
              ],
              {},
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
                lineNumber: 198,
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
                className: "sr-only",
                children: "Previous slide",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
                lineNumber: 199,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
          lineNumber: 183,
          columnNumber: 5,
        },
        this
      );
    }
    _s4(CarouselPrevious, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function () {
      return [useCarousel];
    });
    _c3 = CarouselPrevious;
    function CarouselNext({
      className,
      variant = "outline",
      size = "icon",
      ...props
    }) {
      _s5();
      const { orientation, scrollNext, canScrollNext } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Button"
        ],
        {
          "data-slot": "carousel-next",
          variant: variant,
          size: size,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute size-8 rounded-full",
            orientation === "horizontal"
              ? "top-1/2 -right-12 -translate-y-1/2"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            className
          ),
          disabled: !canScrollNext,
          onClick: scrollNext,
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                "ArrowRight"
              ],
              {},
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
                lineNumber: 228,
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
                className: "sr-only",
                children: "Next slide",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
                lineNumber: 229,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/ui/carousel.tsx",
          lineNumber: 213,
          columnNumber: 5,
        },
        this
      );
    }
    _s5(CarouselNext, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function () {
      return [useCarousel];
    });
    _c4 = CarouselNext;
    var _c, _c1, _c2, _c3, _c4;
    __turbopack_context__.k.register(_c, "Carousel");
    __turbopack_context__.k.register(_c1, "CarouselContent");
    __turbopack_context__.k.register(_c2, "CarouselItem");
    __turbopack_context__.k.register(_c3, "CarouselPrevious");
    __turbopack_context__.k.register(_c4, "CarouselNext");
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
  "[project]/Yeti-College/components/programs.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Programs]);
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
    // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/carousel.tsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const programs = [
      {
        id: 1,
        title: "BABM",
        fullTitle: "Business Administration",
        category: "Undergraduate",
        duration: "4 Years",
        credits: "120 Credits",
        description:
          "Master the fundamentals of business operations, leadership, and strategic management in a global context.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        href: "/programs/business",
      },
      {
        id: 2,
        title: "BHM",
        fullTitle: "Hotel Management",
        category: "Hospitality",
        duration: "4 Years",
        credits: "126 Credits",
        description:
          "Learn world-class hospitality standards, culinary arts, and hotel operations with hands-on training.",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        href: "/programs/hospitality",
      },
      {
        id: 3,
        title: "MBA",
        fullTitle: "Master of Business",
        category: "Post-Graduate",
        duration: "2 Years",
        credits: "60 Credits",
        description:
          "Accelerate your career with advanced leadership skills, financial acumen, and networking opportunities.",
        image:
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
        href: "/programs/mba",
      },
      {
        id: 4,
        title: "BCA",
        fullTitle: "Computer Applications",
        category: "Technology",
        duration: "4 Years",
        credits: "130 Credits",
        description:
          "Dive into software development, cloud computing, and AI with a curriculum built for the tech industry.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        href: "/programs/technology",
      },
      {
        id: 5,
        title: "BMM",
        fullTitle: "Mass Media",
        category: "Media Studies",
        duration: "4 Years",
        credits: "120 Credits",
        description:
          "Explore journalism, advertising, and digital media production in our state-of-the-art studios.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        href: "/programs/media",
      },
      {
        id: 6,
        title: "BTTM",
        fullTitle: "Travel & Tourism",
        category: "Tourism",
        duration: "4 Years",
        credits: "124 Credits",
        description:
          "Prepare for a dynamic career in global tourism, sustainable travel, and destination management.",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        href: "/programs/tourism",
      },
    ];
    function Programs() {
      _s();
      const [api, setApi] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ]();
      const [current, setCurrent] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      const [count, setCount] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      const plugin =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRef"
        ](
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ])({
            delay: 5000,
            stopOnInteraction: true,
          })
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "Programs.useEffect": () => {
            if (!api) return;
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap() + 1);
            api.on(
              "select",
              {
                "Programs.useEffect": () => {
                  setCurrent(api.selectedScrollSnap() + 1);
                },
              }["Programs.useEffect"]
            );
          },
        }["Programs.useEffect"],
        [api]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-24 bg-[#FAFAFA] w-full",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "container mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6",
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
                                  "text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-4",
                                children: "Our Academic Programs",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/programs.tsx",
                                lineNumber: 128,
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
                                className: "text-lg text-slate-600 max-w-xl ",
                                children:
                                  "Comprehensive curriculums designed to build your future.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/programs.tsx",
                                lineNumber: 131,
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
                            "[project]/Yeti-College/components/programs.tsx",
                          lineNumber: 127,
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
                          className: "hidden md:flex gap-2",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                onClick: () => api?.scrollPrev(),
                                className:
                                  "w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__[
                                    "ChevronLeft"
                                  ],
                                  {
                                    className: "w-5 h-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/programs.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/programs.tsx",
                                lineNumber: 138,
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
                                onClick: () => api?.scrollNext(),
                                className:
                                  "w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                                    "ChevronRight"
                                  ],
                                  {
                                    className: "w-5 h-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/programs.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/programs.tsx",
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
                            "[project]/Yeti-College/components/programs.tsx",
                          lineNumber: 137,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/programs.tsx",
                    lineNumber: 126,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Carousel"
                  ],
                  {
                    setApi: setApi,
                    // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
                    plugins: [plugin.current],
                    opts: {
                      align: "start",
                      loop: true,
                    },
                    className: "w-full",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "CarouselContent"
                      ],
                      {
                        className: "-ml-5 pb-6",
                        children: programs.map((program) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "CarouselItem"
                            ],
                            {
                              className: "pl-5 md:basis-1/2 lg:basis-1/3",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: program.href,
                                  className:
                                    "group flex flex-col h-full bg-white rounded-[1rem] border border-slate-200 overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "relative h-56 w-full overflow-hidden bg-slate-100 shrink-0",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "img",
                                            {
                                              src: program.image,
                                              alt: program.title,
                                              className:
                                                "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/programs.tsx",
                                              lineNumber: 173,
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
                                                "absolute top-4 left-4",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "px-3 py-1 rounded-2xl bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-sm border border-white/50",
                                                  children: program.category,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/programs.tsx",
                                                  lineNumber: 179,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/programs.tsx",
                                              lineNumber: 178,
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
                                          "[project]/Yeti-College/components/programs.tsx",
                                        lineNumber: 172,
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
                                        className: "flex flex-col flex-1 p-6",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex justify-between items-start gap-4 mb-3",
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
                                                        "h3",
                                                        {
                                                          className:
                                                            "text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors",
                                                          children:
                                                            program.title,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 190,
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
                                                            "text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1",
                                                          children:
                                                            program.fullTitle,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 193,
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
                                                      "[project]/Yeti-College/components/programs.tsx",
                                                    lineNumber: 189,
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
                                                      "w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0",
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__[
                                                        "ArrowUpRight"
                                                      ],
                                                      {
                                                        className: "w-4 h-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/programs.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/programs.tsx",
                                                    lineNumber: 197,
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
                                                "[project]/Yeti-College/components/programs.tsx",
                                              lineNumber: 188,
                                              columnNumber: 21,
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
                                                "text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3",
                                              children: program.description,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/programs.tsx",
                                              lineNumber: 203,
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
                                                "mt-auto pt-5 border-t border-slate-100 grid grid-cols-2 gap-4",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "p-1.5 rounded-md bg-blue-50 text-blue-600",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__[
                                                                "Clock"
                                                              ],
                                                              {
                                                                className:
                                                                  "w-4 h-4",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 210,
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
                                                            "flex flex-col",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[10px] font-bold text-slate-400 uppercase",
                                                                children:
                                                                  "Duration",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 27,
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
                                                                  "text-sm font-semibold text-slate-700",
                                                                children:
                                                                  program.duration,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 213,
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
                                                      "[project]/Yeti-College/components/programs.tsx",
                                                    lineNumber: 209,
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
                                                      "flex items-center gap-2.5 border-l border-slate-100 pl-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "p-1.5 rounded-md bg-purple-50 text-purple-600",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__[
                                                                "BookOpen"
                                                              ],
                                                              {
                                                                className:
                                                                  "w-4 h-4",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 224,
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
                                                            "flex flex-col",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[10px] font-bold text-slate-400 uppercase",
                                                                children:
                                                                  "Credits",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 27,
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
                                                                  "text-sm font-semibold text-slate-700",
                                                                children:
                                                                  program.credits,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/components/programs.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/programs.tsx",
                                                          lineNumber: 227,
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
                                                      "[project]/Yeti-College/components/programs.tsx",
                                                    lineNumber: 223,
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
                                                "[project]/Yeti-College/components/programs.tsx",
                                              lineNumber: 208,
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
                                          "[project]/Yeti-College/components/programs.tsx",
                                        lineNumber: 186,
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
                                    "[project]/Yeti-College/components/programs.tsx",
                                  lineNumber: 167,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            program.id,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/programs.tsx",
                              lineNumber: 163,
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
                          "[project]/Yeti-College/components/programs.tsx",
                        lineNumber: 161,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/programs.tsx",
                    lineNumber: 153,
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
                    className: "mt-8 flex justify-center md:hidden",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "flex gap-2",
                        children: Array.from({
                          length: count,
                        }).map((_, index) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: `h-1.5 rounded-full transition-all duration-300 ${
                                current === index + 1
                                  ? "w-6 bg-blue-600"
                                  : "w-1.5 bg-slate-300"
                              }`,
                            },
                            index,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/programs.tsx",
                              lineNumber: 248,
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
                          "[project]/Yeti-College/components/programs.tsx",
                        lineNumber: 246,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/programs.tsx",
                    lineNumber: 245,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/programs.tsx",
              lineNumber: 124,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/programs.tsx",
          lineNumber: 123,
          columnNumber: 5,
        },
        this
      );
    }
    _s(Programs, "cONqxtKArqJiY7JRwabb43bZCGI=");
    _c = Programs;
    var _c;
    __turbopack_context__.k.register(_c, "Programs");
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
  "[project]/Yeti-College/components/features.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Features]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    // --- Icons (Inline SVGs for professional look) ---
    const Icons = {
      Faculty: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l9-5-9-5-9 5 9 5z",
                },
                void 0,
                false,
                {
                  fileName: "[project]/Yeti-College/components/features.tsx",
                  lineNumber: 16,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                },
                void 0,
                false,
                {
                  fileName: "[project]/Yeti-College/components/features.tsx",
                  lineNumber: 21,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
                },
                void 0,
                false,
                {
                  fileName: "[project]/Yeti-College/components/features.tsx",
                  lineNumber: 26,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/Yeti-College/components/features.tsx",
            lineNumber: 9,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Facility: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 41,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/features.tsx",
            lineNumber: 34,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Global: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 56,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/features.tsx",
            lineNumber: 49,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Career: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 71,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/features.tsx",
            lineNumber: 64,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Check: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 3,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5 13l4 4L19 7",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 86,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/components/features.tsx",
            lineNumber: 79,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
    };
    function Features() {
      _s();
      const features = [
        {
          title: "World-Class Faculty",
          description:
            "Learn from renowned experts and industry leaders committed to your success.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Faculty,
            {},
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/features.tsx",
              lineNumber: 97,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-blue-50 text-blue-600",
        },
        {
          title: "State-of-the-Art Facilities",
          description:
            "Access cutting-edge laboratories, libraries, and research centers.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Facility,
            {},
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/features.tsx",
              lineNumber: 104,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-indigo-50 text-indigo-600",
        },
        {
          title: "Global Community",
          description:
            "Study alongside talented students from over 100 countries.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Global,
            {},
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/features.tsx",
              lineNumber: 110,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-violet-50 text-violet-600",
        },
        {
          title: "Career Support",
          description:
            "Get guidance from our career services team and industry connections.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Career,
            {},
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/features.tsx",
              lineNumber: 117,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-emerald-50 text-emerald-600",
        },
      ];
      const containerRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const isInView = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useInView"
      ])(containerRef, {
        once: true,
        margin: "-100px",
      });
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-32 px-6 bg-slate-50 relative overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Yeti-College/components/features.tsx",
                      lineNumber: 129,
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
                        "absolute top-1/2 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Yeti-College/components/features.tsx",
                      lineNumber: 130,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 128,
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
                ref: containerRef,
                className: "max-w-7xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid lg:grid-cols-2 gap-16 xl:gap-24 items-center",
                    children: [
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
                            y: 20,
                          },
                          animate: isInView
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {},
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
                                  "inline-block px-3 py-1 mb-6 rounded-full bg-white border border-slate-200 shadow-sm",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className:
                                      "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                    children: "Why Choose Us",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/components/features.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 141,
                                columnNumber: 13,
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
                                  "text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9]",
                                children: [
                                  "Academic Excellence Redefined ",
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
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 148,
                                      columnNumber: 45,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 147,
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
                                  "text-lg text-slate-600 max-w-xl mt-4",
                                children:
                                  "We provide an environment that fosters innovation, critical thinking, and global perspectives.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 152,
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
                                className: "grid gap-6",
                                children: features.map((feature, idx) =>
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
                                        x: -20,
                                      },
                                      animate: isInView
                                        ? {
                                            opacity: 1,
                                            x: 0,
                                          }
                                        : {},
                                      transition: {
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                      },
                                      whileHover: {
                                        scale: 1.02,
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                      className:
                                        "group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-default",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: `p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`,
                                            children: feature.icon,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/features.tsx",
                                            lineNumber: 170,
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
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "h3",
                                                {
                                                  className:
                                                    "text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors",
                                                  children: feature.title,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/features.tsx",
                                                  lineNumber: 176,
                                                  columnNumber: 21,
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
                                                    "text-slate-500 text-sm leading-relaxed",
                                                  children: feature.description,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/features.tsx",
                                                  lineNumber: 179,
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
                                              "[project]/Yeti-College/components/features.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    idx,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 159,
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
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 157,
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
                            "[project]/Yeti-College/components/features.tsx",
                          lineNumber: 136,
                          columnNumber: 11,
                        },
                        this
                      ),
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
                            scale: 0.95,
                          },
                          animate: isInView
                            ? {
                                opacity: 1,
                                scale: 1,
                              }
                            : {},
                          transition: {
                            duration: 0.8,
                          },
                          className:
                            "relative h-[600px] w-full hidden lg:block",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "absolute inset-0 bg-slate-200 rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "img",
                                    {
                                      src: "/tour/main-block.jpeg",
                                      alt: "University Campus",
                                      className:
                                        "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 198,
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
                                        "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 204,
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
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 196,
                                columnNumber: 13,
                              },
                              this
                            ),
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
                                animate: isInView
                                  ? {
                                      y: 0,
                                      opacity: 1,
                                    }
                                  : {},
                                transition: {
                                  delay: 0.6,
                                },
                                className:
                                  "absolute -right-8 top-12 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[200px] border border-slate-100",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "p-1.5 bg-green-100 rounded-full text-green-600",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              Icons.Check,
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/features.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/features.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17,
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
                                              "text-xs font-bold text-slate-500 uppercase",
                                            children: "Verified",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Yeti-College/components/features.tsx",
                                            lineNumber: 218,
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
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 214,
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
                                        "text-3xl font-bold text-slate-900 mb-1",
                                      children: "98%",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 222,
                                      columnNumber: 15,
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
                                        "text-xs text-slate-500 font-medium",
                                      children:
                                        "Student satisfaction rate based on 2025 survey.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/features.tsx",
                                      lineNumber: 223,
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
                                  "[project]/Yeti-College/components/features.tsx",
                                lineNumber: 208,
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
                            "[project]/Yeti-College/components/features.tsx",
                          lineNumber: 189,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/features.tsx",
                    lineNumber: 134,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/features.tsx",
                lineNumber: 133,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Yeti-College/components/features.tsx",
          lineNumber: 126,
          columnNumber: 5,
        },
        this
      );
    }
    _s(Features, "hvnFWowFZr91hrGSGv4CrGY9JhA=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useInView"
        ],
      ];
    });
    _c = Features;
    var _c;
    __turbopack_context__.k.register(_c, "Features");
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
  "[project]/Yeti-College/components/ui/card.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Card",
      () => Card,
      "CardAction",
      () => CardAction,
      "CardContent",
      () => CardContent,
      "CardDescription",
      () => CardDescription,
      "CardFooter",
      () => CardFooter,
      "CardHeader",
      () => CardHeader,
      "CardTitle",
      () => CardTitle,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    function Card({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 7,
          columnNumber: 5,
        },
        this
      );
    }
    _c = Card;
    function CardHeader({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-header",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 20,
          columnNumber: 5,
        },
        this
      );
    }
    _c1 = CardHeader;
    function CardTitle({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-title",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("leading-none font-semibold", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 33,
          columnNumber: 5,
        },
        this
      );
    }
    _c2 = CardTitle;
    function CardDescription({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-description",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("text-muted-foreground text-sm", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 43,
          columnNumber: 5,
        },
        this
      );
    }
    _c3 = CardDescription;
    function CardAction({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-action",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 53,
          columnNumber: 5,
        },
        this
      );
    }
    _c4 = CardAction;
    function CardContent({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-content",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("px-6", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 66,
          columnNumber: 5,
        },
        this
      );
    }
    _c5 = CardContent;
    function CardFooter({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          "data-slot": "card-footer",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("flex items-center px-6 [.border-t]:pt-6", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/card.tsx",
          lineNumber: 76,
          columnNumber: 5,
        },
        this
      );
    }
    _c6 = CardFooter;
    var _c, _c1, _c2, _c3, _c4, _c5, _c6;
    __turbopack_context__.k.register(_c, "Card");
    __turbopack_context__.k.register(_c1, "CardHeader");
    __turbopack_context__.k.register(_c2, "CardTitle");
    __turbopack_context__.k.register(_c3, "CardDescription");
    __turbopack_context__.k.register(_c4, "CardAction");
    __turbopack_context__.k.register(_c5, "CardContent");
    __turbopack_context__.k.register(_c6, "CardFooter");
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
  "[project]/Yeti-College/components/testimonials.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Testimonials]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/card.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/carousel.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const testimonials = [
      {
        name: "Dhiraj Shah",
        role: "Batch of 2020",
        image: "/dhiraj.jpg",
        text: "Words convey our feelings and a THANK YOU conveys our gratitude and appreciation. So, I must thank YETI Int'l College (Former ICHM Lalitpur College) for striding the dream in all of us and supporting a lot in fulfilling it. YETI International College supports developing a strong feeling of self-confidence among the students to win in this competitive world.",
      },
      {
        name: "Rupesh Kushwaha",
        role: "Batch of 2021",
        image: "/rupesh.jpg",
        text: "Yeti international college is the best college in kathmandu .This College has good infrastructure and monument and vast college environment and equipment are good in condition and libraries are plenty of books and sports centers with all sports equipment and classrooms with good classrooms and infrastructure.",
      },
      {
        name: "Sumit Pokhrel",
        role: "Batch of 2025",
        image: "/sumit.jpeg",
        text: "Yeti International College has completely changed the way I look at education. The teachers are supportive, the classrooms are modern, and the learning environment truly motivates us to grow. I’ve gained confidence, skills, and a clear direction for my future.",
      },
      {
        name: "Chandan Kushwaha",
        role: "Batch of 2020",
        image: "/chandan.jpg",
        text: "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
      },
      {
        name: "Apsara Kathayat",
        role: "Batch of 2021",
        image: "/apsara.png",
        text: "The college provides hands-on learning experiences that really prepare us for real-world careers. From workshops to guest lectures, everything is practical. I feel ready for internships and job opportunities because of the exposure I’ve received here.",
      },
      {
        name: "Aditi",
        role: "ABM Student",
        image: "a",
        text: "The faculty at Yeti International College genuinely cares about students’ success. They guide us academically and personally, helping us overcome challenges and stay focused. Their mentorship has made a huge impact on my academic journey.",
      },
      {
        name: "Manoj Khatri",
        role: "Batch of 2020",
        image: "/manoj.png",
        text: "Being a student at Yeti International College means being part of an active, friendly, and opportunity-filled community. There are events, clubs, and activities that help us grow our skills beyond the classroom. It’s been an amazing overall experience.",
      },
    ];
    function Testimonials() {
      _s();
      const [api, setApi] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ]();
      const [current, setCurrent] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      const [count, setCount] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      // Autoplay plugin
      const plugin =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRef"
        ](
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ])({
            delay: 5000,
            stopOnInteraction: true,
          })
        );
      // Update state for the dots
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](
        {
          "Testimonials.useEffect": () => {
            if (!api) return;
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap() + 1);
            api.on(
              "select",
              {
                "Testimonials.useEffect": () => {
                  setCurrent(api.selectedScrollSnap() + 1);
                },
              }["Testimonials.useEffect"]
            );
          },
        }["Testimonials.useEffect"],
        [api]
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-24 bg-slate-50",
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
                    className: "text-center mb-16",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h2",
                        {
                          className:
                            "text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-4",
                          children: "Student Success Stories",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/testimonials.tsx",
                          lineNumber: 87,
                          columnNumber: 11,
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
                            "text-lg text-slate-600 max-w-xl mt-4  mx-auto",
                          children:
                            "Hear from our graduates about their journey.",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/testimonials.tsx",
                          lineNumber: 90,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Yeti-College/components/testimonials.tsx",
                    lineNumber: 86,
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
                    className: "relative",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "Carousel"
                        ],
                        {
                          setApi: setApi,
                          // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
                          plugins: [plugin.current],
                          className: "w-full",
                          opts: {
                            align: "start",
                            loop: true,
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "CarouselContent"
                              ],
                              {
                                className: "-ml-4 pb-4",
                                children: testimonials.map((testimonial, idx) =>
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "CarouselItem"
                                    ],
                                    {
                                      className:
                                        "pl-4 md:basis-1/2 lg:basis-1/3",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "h-full pt-2 pb-2 px-1",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "Card"
                                            ],
                                            {
                                              className:
                                                "h-full border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "CardContent"
                                                ],
                                                {
                                                  className:
                                                    "flex flex-col p-8 h-full",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className: "flex-grow",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-slate-700 text-lg leading-relaxed italic font-medium",
                                                              children: [
                                                                '"',
                                                                testimonial.text,
                                                                '"',
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/testimonials.tsx",
                                                              lineNumber: 119,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/testimonials.tsx",
                                                        lineNumber: 118,
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
                                                          "w-full h-px bg-slate-100 my-6",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/testimonials.tsx",
                                                        lineNumber: 125,
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
                                                          "flex items-center gap-4",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "img",
                                                            {
                                                              src: testimonial.image,
                                                              alt: testimonial.name,
                                                              className:
                                                                "w-14 h-14 rounded-full object-cover border border-slate-100",
                                                              onError: (e) => {
                                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=e2e8f0&color=475569`;
                                                              },
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Yeti-College/components/testimonials.tsx",
                                                              lineNumber: 129,
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
                                                                  "h4",
                                                                  {
                                                                    className:
                                                                      "font-bold text-slate-900 text-base",
                                                                    children:
                                                                      testimonial.name,
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/testimonials.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 29,
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
                                                                      "text-slate-500 text-sm",
                                                                    children:
                                                                      testimonial.role,
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Yeti-College/components/testimonials.tsx",
                                                                    lineNumber: 141,
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
                                                                "[project]/Yeti-College/components/testimonials.tsx",
                                                              lineNumber: 137,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/components/testimonials.tsx",
                                                        lineNumber: 128,
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
                                                    "[project]/Yeti-College/components/testimonials.tsx",
                                                  lineNumber: 116,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/testimonials.tsx",
                                              lineNumber: 115,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/testimonials.tsx",
                                          lineNumber: 113,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    idx,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/testimonials.tsx",
                                      lineNumber: 109,
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
                                  "[project]/Yeti-College/components/testimonials.tsx",
                                lineNumber: 107,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "CarouselPrevious"
                              ],
                              {
                                className:
                                  "hidden lg:flex -left-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/testimonials.tsx",
                                lineNumber: 154,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "CarouselNext"
                              ],
                              {
                                className:
                                  "hidden lg:flex -right-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/testimonials.tsx",
                                lineNumber: 155,
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
                            "[project]/Yeti-College/components/testimonials.tsx",
                          lineNumber: 96,
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
                          className: "flex justify-center gap-2 mt-8",
                          children: Array.from({
                            length: count,
                          }).map((_, index) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                onClick: () => api?.scrollTo(index),
                                className: `transition-all duration-300 rounded-full ${
                                  current === index + 1
                                    ? "w-8 h-2.5 bg-slate-800"
                                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                                }`,
                                "aria-label": `Go to slide ${index + 1}`,
                              },
                              index,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/testimonials.tsx",
                                lineNumber: 161,
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
                            "[project]/Yeti-College/components/testimonials.tsx",
                          lineNumber: 159,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Yeti-College/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/testimonials.tsx",
              lineNumber: 85,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/testimonials.tsx",
          lineNumber: 84,
          columnNumber: 5,
        },
        this
      );
    }
    _s(Testimonials, "cONqxtKArqJiY7JRwabb43bZCGI=");
    _c = Testimonials;
    var _c;
    __turbopack_context__.k.register(_c, "Testimonials");
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
  "[project]/Yeti-College/public/data/events.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    // --- Types ---
    __turbopack_context__.s(["events", () => events]);
    const events = [
      {
        id: 1,
        title: "BCA Semester kick-off",
        date: "2025-12-08",
        category: "Admissions",
        description:
          "2025 batch of students begin their journey at Yeti International College with an orientation program and campus tour.",
        location: "Main Quad",
        time: "07:00 AM",
        accent: "bg-[#FF4F00]",
        textAccent: "text-[#FF4F00]",
      },
      {
        id: 2,
        title: "Orientation day for New Students",
        date: "2025-12-16",
        category: "Academic",
        description:
          "A gathering of minds exploring the future of sustainable architecture. Keynote speakers from Zurich and Tokyo.",
        location: "Auditorium A",
        time: "01:00 PM",
        accent: "bg-[#0057FF]",
        textAccent: "text-[#0057FF]",
      },
    ];
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
  "[project]/Yeti-College/components/events.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => EventsSnippet]);
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/card.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$public$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/public/data/events.ts [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    function EventsSnippet() {
      _s();
      const [selectedEvent, setSelectedEvent] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      // Lock body scroll when modal is open
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "EventsSnippet.useEffect": () => {
            if (selectedEvent) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "unset";
            }
            return {
              "EventsSnippet.useEffect": () => {
                document.body.style.overflow = "unset";
              },
            }["EventsSnippet.useEffect"];
          },
        }["EventsSnippet.useEffect"],
        [selectedEvent]
      );
      const getDateParts = (dateString) => {
        const date = new Date(dateString);
        const d = new Date(
          date.valueOf() + date.getTimezoneOffset() * 60 * 1000
        );
        return {
          day: d.getDate(),
          month: d
            .toLocaleString("default", {
              month: "short",
            })
            .toUpperCase(),
          weekday: d.toLocaleString("default", {
            weekday: "long",
          }),
        };
      };
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
              "section",
              {
                className:
                  "py-12 md:py-24 px-4 md:px-8 bg-[#F2F2F2] font-sans text-zinc-900 relative",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "max-w-[1400px] mx-auto",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "space-y-4",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "h5",
                                    {
                                      className:
                                        "text-xs font-bold uppercase tracking-widest text-zinc-400",
                                      children: "Agenda",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 41,
                                      columnNumber: 15,
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
                                        "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-zinc-900",
                                      children: [
                                        "Upcoming",
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
                                              "[project]/Yeti-College/components/events.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        "Events",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 45,
                                      columnNumber: 15,
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
                                        "text-base md:text-lg text-zinc-500 max-w-md font-medium leading-relaxed",
                                      children:
                                        "Connect, learn, and grow. Join our vibrant community at these upcoming gatherings.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 50,
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
                                  "[project]/Yeti-College/components/events.tsx",
                                lineNumber: 40,
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
                                href: "/events",
                                className:
                                  "hidden md:inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all bg-white border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 group",
                                children: [
                                  "View Full Calendar",
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__[
                                      "ArrowUpRight"
                                    ],
                                    {
                                      className:
                                        "w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 61,
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
                                  "[project]/Yeti-College/components/events.tsx",
                                lineNumber: 56,
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
                            "[project]/Yeti-College/components/events.tsx",
                          lineNumber: 39,
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
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children:
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$public$2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "events"
                            ].map((event, idx) => {
                              const { day, month, weekday } = getDateParts(
                                event.date
                              );
                              return /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "Card"
                                ],
                                {
                                  onClick: () => setSelectedEvent(event),
                                  className:
                                    "group flex flex-col h-full border-0 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-pointer",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "p-6 md:p-8 pb-0 flex justify-between items-start",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className: "flex flex-col",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1",
                                                    children: month,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 23,
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
                                                      "text-5xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-none",
                                                    children: day,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 23,
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
                                                      "text-sm font-medium text-zinc-500 mt-1",
                                                    children: weekday,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 86,
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
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 79,
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
                                              className: `w-3 h-3 rounded-full ${event.accent}`,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 91,
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
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "CardContent"
                                      ],
                                      {
                                        className: "p-6 md:p-8 flex-grow",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className: "mb-4",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "span",
                                                  {
                                                    className:
                                                      "inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3",
                                                    children: event.category,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 23,
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
                                                      "text-xl md:text-2xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors",
                                                    children: event.title,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 99,
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
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 95,
                                              columnNumber: 21,
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
                                                "text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6",
                                              children: event.description,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 104,
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
                                              className: "flex flex-wrap gap-3",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__[
                                                          "CalendarDays"
                                                        ],
                                                        {
                                                          className:
                                                            "w-3.5 h-3.5",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/events.tsx",
                                                          lineNumber: 111,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      event.time,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 110,
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
                                                      "flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__[
                                                          "MapPin"
                                                        ],
                                                        {
                                                          className:
                                                            "w-3.5 h-3.5",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/components/events.tsx",
                                                          lineNumber: 115,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      event.location,
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 114,
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
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 109,
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
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "CardFooter"
                                      ],
                                      {
                                        className: "p-6 md:p-8 pt-0 mt-auto",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "w-full pt-6 border-t border-zinc-100 flex items-center justify-between",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "text-sm font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors",
                                                  children: "Details",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/events.tsx",
                                                  lineNumber: 123,
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
                                                    "w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__[
                                                      "ArrowUpRight"
                                                    ],
                                                    {
                                                      className: "w-5 h-5",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Yeti-College/components/events.tsx",
                                                      lineNumber: 127,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/events.tsx",
                                                  lineNumber: 126,
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
                                              "[project]/Yeti-College/components/events.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 121,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                idx,
                                true,
                                {
                                  fileName:
                                    "[project]/Yeti-College/components/events.tsx",
                                  lineNumber: 72,
                                  columnNumber: 17,
                                },
                                this
                              );
                            }),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/events.tsx",
                          lineNumber: 67,
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
                          className: "mt-12 text-center md:hidden",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              href: "/events",
                              className:
                                "inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold transition-colors bg-white border border-zinc-200 rounded-full hover:bg-zinc-50",
                              children: "View Full Calendar",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/components/events.tsx",
                              lineNumber: 138,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/events.tsx",
                          lineNumber: 137,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/events.tsx",
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/components/events.tsx",
                lineNumber: 36,
                columnNumber: 7,
              },
              this
            ),
            selectedEvent &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-300",
                  onClick: () => setSelectedEvent(null),
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "bg-white w-full md:max-w-2xl h-[85vh] md:h-auto md:max-h-[90vh] overflow-y-auto rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl relative animate-in slide-in-from-bottom-12 duration-300 scrollbar-hide",
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "h-24 md:h-32 w-full bg-zinc-100 relative overflow-hidden",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: `absolute top-0 right-0 p-10 opacity-10 transform translate-x-10 -translate-y-10`,
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: `w-64 h-64 rounded-full ${
                                        selectedEvent.accent || "bg-blue-500"
                                      }`,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 168,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/Yeti-College/components/events.tsx",
                                  lineNumber: 165,
                                  columnNumber: 15,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: () => setSelectedEvent(null),
                                  className:
                                    "absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-100 transition-colors z-10",
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                      "X"
                                    ],
                                    {
                                      className:
                                        "w-4 h-4 md:w-5 md:h-5 text-zinc-900",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/events.tsx",
                                      lineNumber: 177,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/Yeti-College/components/events.tsx",
                                  lineNumber: 173,
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
                              "[project]/Yeti-College/components/events.tsx",
                            lineNumber: 164,
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
                              "px-6 md:px-8 pb-8 md:pb-12 -mt-12 relative",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "inline-flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] border border-zinc-100 mb-6",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className:
                                          "text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest",
                                        children: getDateParts(
                                          selectedEvent.date
                                        ).month,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17,
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
                                          "text-3xl md:text-4xl font-bold text-zinc-900 tracking-tighter",
                                        children: getDateParts(
                                          selectedEvent.date
                                        ).day,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 187,
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
                                    "[project]/Yeti-College/components/events.tsx",
                                  lineNumber: 183,
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
                                  className: "space-y-6",
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
                                                "inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3",
                                              children: selectedEvent.category,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 194,
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
                                                "text-2xl md:text-4xl font-bold text-zinc-900 leading-tight",
                                              children: selectedEvent.title,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 197,
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
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 193,
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
                                          "flex flex-wrap gap-3 md:gap-4",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__[
                                                    "CalendarDays"
                                                  ],
                                                  {
                                                    className:
                                                      "w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                selectedEvent.date,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 203,
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
                                              className:
                                                "flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__[
                                                    "Clock"
                                                  ],
                                                  {
                                                    className:
                                                      "w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                selectedEvent.time,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 207,
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
                                              className:
                                                "flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 bg-zinc-50 px-3 py-2 md:px-4 rounded-xl border border-zinc-100",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__[
                                                    "MapPin"
                                                  ],
                                                  {
                                                    className:
                                                      "w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/components/events.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                selectedEvent.location,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 211,
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
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 202,
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
                                          "h-px w-full bg-zinc-100 my-6",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 217,
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
                                        className: "space-y-4",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "text-lg font-bold text-zinc-900",
                                              children: "About this event",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 220,
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
                                                "text-zinc-500 leading-relaxed text-base md:text-lg",
                                              children:
                                                selectedEvent.description,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 223,
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
                                                "text-zinc-500 leading-relaxed text-base",
                                              children:
                                                "Join us for an immersive experience designed to bring together professionals from across the industry. This event will feature keynote speakers, networking sessions, and workshops.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/components/events.tsx",
                                              lineNumber: 226,
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
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 219,
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
                                          "pt-8 flex flex-col sm:flex-row gap-4",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "button",
                                          {
                                            className:
                                              "flex-1 bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2",
                                            children: [
                                              "No registration required",
                                              " ",
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__[
                                                  "ArrowUpRight"
                                                ],
                                                {
                                                  className: "w-4 h-4",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/components/events.tsx",
                                                  lineNumber: 238,
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
                                              "[project]/Yeti-College/components/events.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/components/events.tsx",
                                        lineNumber: 235,
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
                                    "[project]/Yeti-College/components/events.tsx",
                                  lineNumber: 192,
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
                              "[project]/Yeti-College/components/events.tsx",
                            lineNumber: 181,
                            columnNumber: 13,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/Yeti-College/components/events.tsx",
                      lineNumber: 159,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/Yeti-College/components/events.tsx",
                  lineNumber: 150,
                  columnNumber: 9,
                },
                this
              ),
          ],
        },
        void 0,
        true
      );
    }
    _s(EventsSnippet, "gbiW9pOg20AAp0MqXNg8uqQCRYA=");
    _c = EventsSnippet;
    var _c;
    __turbopack_context__.k.register(_c, "EventsSnippet");
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
  "[project]/Yeti-College/components/ui/accordion.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Accordion",
      () => Accordion,
      "AccordionContent",
      () => AccordionContent,
      "AccordionItem",
      () => AccordionItem,
      "AccordionTrigger",
      () => AccordionTrigger,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    ("use client");
    function Accordion({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Root"
        ],
        {
          "data-slot": "accordion",
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
          lineNumber: 12,
          columnNumber: 10,
        },
        this
      );
    }
    _c = Accordion;
    function AccordionItem({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Item"
        ],
        {
          "data-slot": "accordion-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])("border-b last:border-b-0", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
          lineNumber: 20,
          columnNumber: 5,
        },
        this
      );
    }
    _c1 = AccordionItem;
    function AccordionTrigger({ className, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Header"
        ],
        {
          className: "flex",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Trigger"
            ],
            {
              "data-slot": "accordion-trigger",
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                className
              ),
              ...props,
              children: [
                children,
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__[
                    "ChevronDownIcon"
                  ],
                  {
                    className:
                      "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Yeti-College/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
              lineNumber: 35,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
          lineNumber: 34,
          columnNumber: 5,
        },
        this
      );
    }
    _c2 = AccordionTrigger;
    function AccordionContent({ className, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Content"
        ],
        {
          "data-slot": "accordion-content",
          className:
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
          ...props,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "cn"
              ])("pt-0 pb-4", className),
              children: children,
            },
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
              lineNumber: 61,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/accordion.tsx",
          lineNumber: 56,
          columnNumber: 5,
        },
        this
      );
    }
    _c3 = AccordionContent;
    var _c, _c1, _c2, _c3;
    __turbopack_context__.k.register(_c, "Accordion");
    __turbopack_context__.k.register(_c1, "AccordionItem");
    __turbopack_context__.k.register(_c2, "AccordionTrigger");
    __turbopack_context__.k.register(_c3, "AccordionContent");
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
  "[project]/Yeti-College/components/ui/label.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Label", () => Label]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/lib/utils.ts [app-client] (ecmascript)"
      );
    ("use client");
    function Label({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "Root"
        ],
        {
          "data-slot": "label",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/ui/label.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        this
      );
    }
    _c = Label;
    var _c;
    __turbopack_context__.k.register(_c, "Label");
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
  "[project]/Yeti-College/app/notices/page.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "MediaThumbnail",
      () => MediaThumbnail,
      "default",
      () => NoticesClient,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/components/ui/card.tsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>"
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
    const MediaThumbnail = ({ type, url, className = "" }) => {
      if (type === "image" && url) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: `relative overflow-hidden bg-zinc-100 ${className}`,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "img",
              {
                src: url,
                alt: "Notice preview",
                className:
                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/notices/page.tsx",
                lineNumber: 43,
                columnNumber: 9,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/app/notices/page.tsx",
            lineNumber: 42,
            columnNumber: 7,
          },
          ("TURBOPACK compile-time value", void 0)
        );
      }
      if (type === "pdf") {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: `relative overflow-hidden bg-zinc-100 flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "w-3/5 h-4/5 bg-white shadow-sm border border-zinc-200 rounded-md p-2 flex flex-col gap-1.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "w-full h-1.5 bg-zinc-100 rounded-full",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/notices/page.tsx",
                      lineNumber: 58,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "w-2/3 h-1.5 bg-zinc-100 rounded-full",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/notices/page.tsx",
                      lineNumber: 59,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "w-full h-1.5 bg-zinc-100 rounded-full mt-2",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/notices/page.tsx",
                      lineNumber: 60,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "w-full h-1.5 bg-zinc-100 rounded-full",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/notices/page.tsx",
                      lineNumber: 61,
                      columnNumber: 11,
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
                        "mt-auto self-end text-[8px] font-bold text-red-500 border border-red-100 bg-red-50 px-1 rounded",
                      children: "PDF",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/Yeti-College/app/notices/page.tsx",
                      lineNumber: 62,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/Yeti-College/app/notices/page.tsx",
                lineNumber: 57,
                columnNumber: 9,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Yeti-College/app/notices/page.tsx",
            lineNumber: 54,
            columnNumber: 7,
          },
          ("TURBOPACK compile-time value", void 0)
        );
      }
      // Fallback
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: `relative overflow-hidden bg-zinc-50 flex items-center justify-center ${className}`,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className:
                "w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-300",
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
                  "FileText"
                ],
                {
                  className: "w-5 h-5",
                },
                void 0,
                false,
                {
                  fileName: "[project]/Yeti-College/app/notices/page.tsx",
                  lineNumber: 76,
                  columnNumber: 9,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            },
            void 0,
            false,
            {
              fileName: "[project]/Yeti-College/app/notices/page.tsx",
              lineNumber: 75,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0)
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/app/notices/page.tsx",
          lineNumber: 72,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    _c = MediaThumbnail;
    function NoticesClient({ initialNotices }) {
      _s();
      const [selectedNotice, setSelectedNotice] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const [filterCategory, setFilterCategory] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("All");
      const [searchQuery, setSearchQuery] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "NoticesClient.useEffect": () => {
            if (selectedNotice) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "unset";
            }
          },
        }["NoticesClient.useEffect"],
        [selectedNotice]
      );
      // Filtering Logic using useMemo for performance
      const filteredNotices = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(
        {
          "NoticesClient.useMemo[filteredNotices]": () => {
            return initialNotices.filter(
              {
                "NoticesClient.useMemo[filteredNotices]": (n) => {
                  const matchesCategory =
                    filterCategory === "All" || n.category === filterCategory;
                  const matchesSearch =
                    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    n.description
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                },
              }["NoticesClient.useMemo[filteredNotices]"]
            );
          },
        }["NoticesClient.useMemo[filteredNotices]"],
        [initialNotices, filterCategory, searchQuery]
      );
      const categories = [
        "All",
        "Administrative",
        "Academic",
        "Exam",
        "Holiday",
      ];
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
                fileName: "[project]/Yeti-College/app/notices/page.tsx",
                lineNumber: 119,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "section",
              {
                className:
                  "min-h-screen bg-[#F2F2F2] text-zinc-900 py-6 md:py-12 px-4 md:px-8 font-sans",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "max-w-[1400px] mx-auto",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "lg:col-span-4 space-y-6",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "lg:sticky lg:top-8 space-y-6",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-200 shadow-sm",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h1",
                                            {
                                              className:
                                                "text-4xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-4",
                                              children: [
                                                "Official",
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
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 130,
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
                                                    className: "text-zinc-400",
                                                    children: "Notices.",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 131,
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
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 128,
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
                                                "text-sm md:text-base text-zinc-600 font-medium",
                                              children:
                                                "Stay updated with the latest announcements.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 133,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 127,
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
                                        className: "relative group",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                                                  "Search"
                                                ],
                                                {
                                                  className:
                                                    "h-5 w-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/notices/page.tsx",
                                                  lineNumber: 141,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 140,
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
                                              placeholder:
                                                "Search by title or description...",
                                              value: searchQuery,
                                              onChange: (e) =>
                                                setSearchQuery(e.target.value),
                                              className:
                                                "w-full pl-11 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent shadow-sm transition-all",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 143,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 139,
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
                                          "block lg:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide",
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "flex gap-2",
                                            children: categories.map((cat) =>
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    setFilterCategory(cat),
                                                  className: `whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-bold transition-all border ${
                                                    filterCategory === cat
                                                      ? "bg-zinc-900 text-white border-zinc-900"
                                                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300"
                                                  }`,
                                                  children: cat,
                                                },
                                                cat,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Yeti-College/app/notices/page.tsx",
                                                  lineNumber: 156,
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
                                              "[project]/Yeti-College/app/notices/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 153,
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
                                          "hidden lg:block bg-zinc-900 text-white p-6 rounded-[2rem] shadow-xl",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex items-center gap-2 mb-6 text-zinc-400",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__[
                                                    "Filter"
                                                  ],
                                                  {
                                                    className: "w-5 h-5",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 174,
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
                                                      "font-bold uppercase tracking-widest text-xs",
                                                    children:
                                                      "Filter by Category",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 175,
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
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 173,
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
                                              className: "space-y-2",
                                              children: categories.map((cat) =>
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      setFilterCategory(cat),
                                                    className: `w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex justify-between items-center ${
                                                      filterCategory === cat
                                                        ? "bg-white text-zinc-900 font-bold shadow-md scale-105"
                                                        : "hover:bg-zinc-800 text-zinc-300"
                                                    }`,
                                                    children: [
                                                      cat,
                                                      filterCategory === cat &&
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-2 h-2 rounded-full bg-blue-600",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Yeti-College/app/notices/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                    ],
                                                  },
                                                  cat,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 181,
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
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 179,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 172,
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
                                    "[project]/Yeti-College/app/notices/page.tsx",
                                  lineNumber: 125,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/app/notices/page.tsx",
                              lineNumber: 124,
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
                              className: "lg:col-span-8 flex flex-col gap-4",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-end mb-2 px-1",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "h2",
                                        {
                                          className:
                                            "text-xl md:text-2xl font-bold tracking-tight",
                                          children: "Recent Updates",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 204,
                                          columnNumber: 17,
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
                                            "text-xs md:text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200",
                                          children: [
                                            filteredNotices.length,
                                            " Notices",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 207,
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
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                filteredNotices.length === 0
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "flex flex-col items-center justify-center py-20 text-zinc-400",
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
                                                "w-12 h-12 mb-4 opacity-20",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 215,
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
                                                "text-lg font-semibold",
                                              children: "No notices found",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 216,
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
                                              children:
                                                "Try adjusting your search or filter.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 217,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "button",
                                            {
                                              onClick: () => {
                                                setSearchQuery("");
                                                setFilterCategory("All");
                                              },
                                              className:
                                                "mt-4 text-blue-600 font-bold hover:underline text-sm",
                                              children: "Clear all filters",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 220,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17,
                                      },
                                      this
                                    )
                                  : filteredNotices.map((notice) =>
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "Card"
                                        ],
                                        {
                                          onClick: () =>
                                            setSelectedNotice(notice),
                                          className:
                                            "group relative border-0 bg-white rounded-[1.5rem] md:rounded-[2rem] p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-visible",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex flex-row items-stretch gap-3 md:gap-6 p-2",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "hidden sm:flex flex-col items-center justify-center bg-zinc-50 rounded-[1.2rem] p-2 w-20 shrink-0 text-center border border-zinc-100",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[10px] font-bold uppercase tracking-widest text-zinc-400",
                                                          children: new Date(
                                                            notice.date
                                                          ).toLocaleString(
                                                            "default",
                                                            {
                                                              month: "short",
                                                            }
                                                          ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/notices/page.tsx",
                                                          lineNumber: 240,
                                                          columnNumber: 25,
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
                                                            "text-2xl font-bold text-zinc-900 leading-none my-1",
                                                          children: new Date(
                                                            notice.date
                                                          ).getDate(),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/notices/page.tsx",
                                                          lineNumber: 245,
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
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  MediaThumbnail,
                                                  {
                                                    type: notice.mediaType,
                                                    url: notice.mediaUrl,
                                                    className:
                                                      "w-24 h-24 sm:w-32 sm:h-auto rounded-2xl border border-zinc-100 shrink-0",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 251,
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
                                                      "flex-1 py-1 min-w-0 flex flex-col justify-center",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center gap-2 mb-2",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className: `w-2 h-2 rounded-full ${notice.accent}`,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/notices/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 27,
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
                                                                  "text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-500",
                                                                children:
                                                                  notice.category,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/notices/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 27,
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
                                                                  "sm:hidden text-[10px] text-zinc-400 font-bold ml-auto flex items-center gap-1",
                                                                children: [
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__[
                                                                      "Calendar"
                                                                    ],
                                                                    {
                                                                      className:
                                                                        "w-3 h-3",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/Yeti-College/app/notices/page.tsx",
                                                                      lineNumber: 268,
                                                                      columnNumber: 29,
                                                                    },
                                                                    this
                                                                  ),
                                                                  notice.date,
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  "[project]/Yeti-College/app/notices/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/notices/page.tsx",
                                                          lineNumber: 259,
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
                                                            "text-base sm:text-xl font-bold text-zinc-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors mb-1",
                                                          children:
                                                            notice.title,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/notices/page.tsx",
                                                          lineNumber: 273,
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
                                                            "text-zinc-500 text-xs sm:text-sm line-clamp-2 pr-2",
                                                          children:
                                                            notice.description,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Yeti-College/app/notices/page.tsx",
                                                          lineNumber: 277,
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
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 258,
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
                                                      "hidden md:flex items-center justify-center self-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 shrink-0 mr-2",
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__[
                                                        "ExternalLink"
                                                      ],
                                                      {
                                                        className: "w-4 h-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Yeti-College/app/notices/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Yeti-College/app/notices/page.tsx",
                                                    lineNumber: 283,
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
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 237,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        notice.id,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 232,
                                          columnNumber: 19,
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
                                "[project]/Yeti-College/app/notices/page.tsx",
                              lineNumber: 202,
                              columnNumber: 13,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/Yeti-College/app/notices/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/app/notices/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/Yeti-College/app/notices/page.tsx",
                lineNumber: 120,
                columnNumber: 7,
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
                fileName: "[project]/Yeti-College/app/notices/page.tsx",
                lineNumber: 294,
                columnNumber: 7,
              },
              this
            ),
            selectedNotice &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300",
                        onClick: () => setSelectedNotice(null),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/Yeti-College/app/notices/page.tsx",
                        lineNumber: 300,
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
                          " relative w-full md:max-w-5xl bg-white shadow-2xl overflow-hidden   /* Mobile Styles (Bottom Sheet) */ h-[90vh] rounded-t-[2rem]  animate-in slide-in-from-bottom-12 duration-300  /* Desktop Styles (Center Modal) */ md:h-[85vh] md:rounded-[2.5rem]  md:animate-in md:zoom-in-95   flex flex-col md:flex-row ",
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "button",
                            {
                              onClick: () => setSelectedNotice(null),
                              className:
                                "md:hidden absolute top-4 right-4 z-50 p-2 bg-zinc-900 text-white rounded-full shadow-lg",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                  "X"
                                ],
                                {
                                  className: "w-5 h-5",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/Yeti-College/app/notices/page.tsx",
                                  lineNumber: 327,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Yeti-College/app/notices/page.tsx",
                              lineNumber: 323,
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
                                "order-2 md:order-1 flex-1 md:w-1/3 bg-zinc-50 p-6 md:p-10 border-r border-zinc-100 flex flex-col overflow-y-auto",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-2 mb-4 pt-4 md:pt-0",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className: `px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white ${selectedNotice.accent}`,
                                          children: selectedNotice.category,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 333,
                                          columnNumber: 17,
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
                                            "text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest",
                                          children: selectedNotice.date,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 338,
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
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15,
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
                                      "text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4 md:mb-6 text-zinc-900",
                                    children: selectedNotice.title,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15,
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
                                      "text-sm md:text-base text-zinc-600 leading-relaxed mb-8",
                                    children: selectedNotice.description,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 347,
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
                                    className: "mt-auto space-y-3 pb-8 md:pb-0",
                                    children:
                                      selectedNotice.mediaUrl &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: selectedNotice.mediaUrl,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:opacity-90 transition-transform hover:scale-[1.02]",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__[
                                                "Download"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/app/notices/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            " Download Attachment",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/app/notices/page.tsx",
                                          lineNumber: 353,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 351,
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
                                "[project]/Yeti-College/app/notices/page.tsx",
                              lineNumber: 331,
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
                                "order-1 md:order-2 h-136 md:h-auto md:flex-[1.5] bg-zinc-900 relative flex items-center justify-center p-0 md:p-4 overflow-hidden shrink-0",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "button",
                                  {
                                    onClick: () => setSelectedNotice(null),
                                    className:
                                      "absolute top-6 right-6 z-30 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors hidden md:block",
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                        "X"
                                      ],
                                      {
                                        className: "w-6 h-6",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Yeti-College/app/notices/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                selectedNotice.mediaType === "image" &&
                                selectedNotice.mediaUrl
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "img",
                                      {
                                        src: selectedNotice.mediaUrl,
                                        alt: "Full View",
                                        className:
                                          "w-full h-full object-cover md:object-contain md:rounded-lg",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 17,
                                      },
                                      this
                                    )
                                  : selectedNotice.mediaType === "pdf" &&
                                    selectedNotice.mediaUrl // PDF Viewer
                                  ? /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "w-full h-full relative group",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "iframe",
                                            {
                                              src: `${selectedNotice.mediaUrl}#toolbar=0&view=FitH`,
                                              className:
                                                "w-full h-full bg-white md:rounded-xl",
                                              title: "PDF Viewer",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 387,
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
                                              className:
                                                "md:hidden absolute inset-0 bg-transparent pointer-events-none",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 392,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 17,
                                      },
                                      this
                                    )
                                  : /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "text-zinc-500 flex flex-col items-center text-center",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
                                              "FileText"
                                            ],
                                            {
                                              className:
                                                "w-16 h-16 opacity-20 mb-4",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 396,
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
                                              className: "opacity-50 text-sm",
                                              children: "No Preview Available",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Yeti-College/app/notices/page.tsx",
                                              lineNumber: 397,
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
                                          "[project]/Yeti-College/app/notices/page.tsx",
                                        lineNumber: 395,
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
                                "[project]/Yeti-College/app/notices/page.tsx",
                              lineNumber: 366,
                              columnNumber: 13,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/Yeti-College/app/notices/page.tsx",
                        lineNumber: 306,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/Yeti-College/app/notices/page.tsx",
                  lineNumber: 298,
                  columnNumber: 9,
                },
                this
              ),
          ],
        },
        void 0,
        true
      );
    }
    _s(NoticesClient, "HpkfTSsNJXBd7xGAtzaeinuDxAM=");
    _c1 = NoticesClient;
    var _c, _c1;
    __turbopack_context__.k.register(_c, "MediaThumbnail");
    __turbopack_context__.k.register(_c1, "NoticesClient");
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
  "[project]/Yeti-College/components/notices.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => NoticeSnippet]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$app$2f$notices$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Yeti-College/app/notices/page.tsx [app-client] (ecmascript)"
      );
    ("use client");
    function NoticeSnippet() {
      // Grab top 3 notices
      const latestNotices =
        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$app$2f$notices$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "noticesData"
        ].slice(0, 3);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "w-full py-16 px-4 bg-white",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "max-w-[1400px] mx-auto",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",
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
                                  "text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-2",
                                children: [
                                  "Notice",
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "span",
                                    {
                                      className: "text-zinc-400",
                                      children: "Board.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Yeti-College/components/notices.tsx",
                                      lineNumber: 18,
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
                                  "[project]/Yeti-College/components/notices.tsx",
                                lineNumber: 17,
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
                                className: "text-zinc-500 font-medium text-lg",
                                children:
                                  "Latest circulars and updates from the administration.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/notices.tsx",
                                lineNumber: 20,
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
                            "[project]/Yeti-College/components/notices.tsx",
                          lineNumber: 16,
                          columnNumber: 11,
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
                          href: "/notices",
                          className:
                            "hidden md:flex group items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all",
                          children: [
                            "View Archive",
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                                "ArrowRight"
                              ],
                              {
                                className:
                                  "w-4 h-4 transition-transform group-hover:translate-x-1",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Yeti-College/components/notices.tsx",
                                lineNumber: 29,
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
                            "[project]/Yeti-College/components/notices.tsx",
                          lineNumber: 24,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/Yeti-College/components/notices.tsx",
                    lineNumber: 15,
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
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: latestNotices.map((notice) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          href: "/notices",
                          className: "block h-full",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "group h-full bg-zinc-50 rounded-[2.5rem] p-3 border border-zinc-100 hover:border-zinc-300 hover:shadow-2xl transition-all duration-500 flex flex-col",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "h-48 w-full rounded-[2rem] overflow-hidden mb-4 relative",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$app$2f$notices$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "MediaThumbnail"
                                        ],
                                        {
                                          type: notice.mediaType,
                                          url: notice.mediaUrl,
                                          className: "w-full h-full bg-white",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 40,
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
                                          className:
                                            "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className: `w-2 h-2 rounded-full ${notice.accent}`,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 47,
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
                                                  "text-[10px] font-bold uppercase tracking-widest text-zinc-800",
                                                children: notice.category,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 48,
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
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 46,
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
                                      "[project]/Yeti-College/components/notices.tsx",
                                    lineNumber: 39,
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
                                    className: "px-3 pb-4 flex-1 flex flex-col",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className:
                                            "flex items-center gap-2 text-zinc-400 mb-3",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__[
                                                "Calendar"
                                              ],
                                              {
                                                className: "w-4 h-4",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 57,
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
                                                  "text-xs font-bold uppercase tracking-wider",
                                                children: notice.date,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 58,
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
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 56,
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
                                            "text-2xl font-bold text-zinc-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",
                                          children: notice.title,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 63,
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
                                            "text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6",
                                          children: notice.description,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 67,
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
                                          className:
                                            "mt-auto flex items-center justify-between pt-4 border-t border-zinc-200/60",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                className:
                                                  "text-xs font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors",
                                                children: "Read details",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 73,
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
                                                  "w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300",
                                                children: /*#__PURE__*/ (0,
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
                                                      "[project]/Yeti-College/components/notices.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Yeti-College/components/notices.tsx",
                                                lineNumber: 76,
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
                                            "[project]/Yeti-College/components/notices.tsx",
                                          lineNumber: 72,
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
                                      "[project]/Yeti-College/components/notices.tsx",
                                    lineNumber: 55,
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
                                "[project]/Yeti-College/components/notices.tsx",
                              lineNumber: 37,
                              columnNumber: 15,
                            },
                            this
                          ),
                        },
                        notice.id,
                        false,
                        {
                          fileName:
                            "[project]/Yeti-College/components/notices.tsx",
                          lineNumber: 36,
                          columnNumber: 13,
                        },
                        this
                      )
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/notices.tsx",
                    lineNumber: 34,
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
                    className: "mt-8 md:hidden",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$Yeti$2d$College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "default"
                      ],
                      {
                        href: "/notices",
                        className:
                          "w-full flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 text-sm font-bold text-white",
                        children: [
                          "View Archive",
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
                                "[project]/Yeti-College/components/notices.tsx",
                              lineNumber: 93,
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
                          "[project]/Yeti-College/components/notices.tsx",
                        lineNumber: 88,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/Yeti-College/components/notices.tsx",
                    lineNumber: 87,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/Yeti-College/components/notices.tsx",
              lineNumber: 13,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Yeti-College/components/notices.tsx",
          lineNumber: 12,
          columnNumber: 5,
        },
        this
      );
    }
    _c = NoticeSnippet;
    var _c;
    __turbopack_context__.k.register(_c, "NoticeSnippet");
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

//# sourceMappingURL=Yeti-College_da157d6b._.js.map
