"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/config/navigation";

const LANGS = [
  { key: "en", short: "EN",  full: "English"  },
  { key: "si", short: "සිං", full: "සිංහල"   },
  { key: "ta", short: "தமி", full: "தமிழ்"    },
] as const;
type LangKey = (typeof LANGS)[number]["key"];

const isArabic = (str: string) => /[\u0600-\u06FF]/.test(str);

function NavIcon({ iconKey }: { iconKey: string }) {
  switch (iconKey) {
    case "books":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case "lectures":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      );
    case "tutorials":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
        </svg>
      );
    case "reminders":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      );
    case "benefits":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    case "articles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [activeDesktopGroup, setActiveDesktopGroup] = useState<string | null>(
    null,
  );
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [lang, setLang] = useState<LangKey>("en");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleExpand = (label: string) => {
    setExpandedItem((current) => (current === label ? null : label));
  };

  const handleDesktopEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setActiveDesktopGroup(label);
  };

  const handleDesktopLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDesktopGroup(null);
    }, 120);
  };

  const activeDesktopItem = navItems.find(
    (item) => item.label === activeDesktopGroup && item.children?.length,
  );

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur"
      onMouseLeave={handleDesktopLeave}
    >
      {/* ── Single navigation bar: logo left · links right ── */}
      <div className="border-b border-slate-200">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-primary)] text-sm font-bold text-white shadow">
              C
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-slate-900">CYMM</p>
              <p className="text-[10px] text-slate-500">Ceylon Youth Muslim Majlis.</p>
            </div>
          </Link>

          {/* Desktop nav links + Donate */}
          <div className="hidden items-center gap-1 md:flex">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const isPanelOpen = activeDesktopGroup === item.label;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => handleDesktopEnter(item.label)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isActive || isPanelOpen
                        ? "bg-[var(--brand-primary)] text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                    {item.children ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-3.5 w-3.5 transition-transform ${
                          isPanelOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            {/* Language dropdown */}
            <div ref={langRef} className="relative ml-2">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {LANGS.find((l) => l.key === lang)?.short}
                <svg viewBox="0 0 20 20" fill="currentColor" className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}>
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
              {langOpen ? (
                <div className="absolute right-0 top-full mt-1.5 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl" style={{ zIndex: 200 }}>
                  {LANGS.map((l) => (
                    <button
                      key={l.key}
                      type="button"
                      onClick={() => { setLang(l.key); setLangOpen(false); }}
                      className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition hover:bg-slate-50 ${
                        lang === l.key ? "font-semibold text-[var(--brand-primary)]" : "text-slate-700"
                      }`}
                    >
                      <span className="w-8 font-medium">{l.short}</span>
                      <span className="text-slate-500">{l.full}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <Link
              href="/donate"
              className="ml-2 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Donate
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              Donate
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop hover subpanel (absolute overlay) ── */}
      {activeDesktopItem ? (
        <>
          {/* Translucent backdrop — covers page content below navbar */}
          <div
            className="fixed left-0 right-0 hidden md:block"
            style={{ top: "64px", bottom: 0, backgroundColor: "rgba(15,23,42,0.25)", zIndex: 45 }}
            onClick={() => setActiveDesktopGroup(null)}
          />
          {/* Panel */}
          <div
            className="absolute left-0 right-0 top-full hidden border-b border-slate-200 bg-white shadow-xl md:block"
            style={{ zIndex: 51 }}
            onMouseEnter={() => handleDesktopEnter(activeDesktopItem.label)}
          >
          <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
                {activeDesktopItem.label}
              </p>
              <Link
                href={activeDesktopItem.href}
                onClick={() => setActiveDesktopGroup(null)}
                className="text-xs font-semibold text-slate-400 hover:text-[var(--brand-primary)]"
              >
                Browse all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {activeDesktopItem.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setActiveDesktopGroup(null)}
                  className="group flex flex-col items-center gap-2 text-center transition"
                >
                  <span
                    className="grid h-16 w-16 place-items-center rounded-2xl bg-slate-100 text-slate-700 shadow-sm transition group-hover:scale-105 group-hover:bg-slate-200"
                  >
                    {child.icon && isArabic(child.icon) ? (
                      <span
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "'Noto Naskh Arabic', 'Scheherazade New', 'Arabic Typesetting', serif" }}
                      >
                        {child.icon}
                      </span>
                    ) : child.icon ? (
                      <NavIcon iconKey={child.icon} />
                    ) : null}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 transition group-hover:text-slate-800">
                    {child.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          </div>
        </>
      ) : null}

      {/* ── Mobile menu ── */}
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {/* Language switcher */}
          <div className="mb-3 flex items-center gap-1.5 rounded-xl border border-slate-200 p-1">
            {LANGS.map((l) => (
              <button
                key={l.key}
                type="button"
                onClick={() => setLang(l.key)}
                className={`flex-1 rounded-lg py-1.5 text-sm font-medium transition ${
                  lang === l.key
                    ? "bg-[var(--brand-primary)] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);

              return (
                <li key={item.label} className="rounded-lg border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-3 py-2 text-sm font-medium text-slate-800"
                      onClick={() => {
                        if (!hasChildren) {
                          setMobileOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>

                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.label)}
                        className="px-3 py-2 text-slate-400"
                        aria-expanded={expandedItem === item.label}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`h-4 w-4 transition-transform ${
                            expandedItem === item.label ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && expandedItem === item.label ? (
                    <div className="space-y-1 border-t border-slate-100 px-3 py-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span
                            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-700 shadow-sm"
                          >
                            {child.icon && isArabic(child.icon) ? (
                              <span
                                className="text-base leading-none"
                                style={{ fontFamily: "'Noto Naskh Arabic', 'Arabic Typesetting', serif" }}
                              >
                                {child.icon}
                              </span>
                            ) : child.icon ? (
                              <NavIcon iconKey={child.icon} />
                            ) : null}
                          </span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
