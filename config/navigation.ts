export type NavCategory = {
  label: string;
  href: string;
  icon?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavCategory[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Learn",
    href: "/learn",
    children: [
      { label: "Aqeedah", href: "/learn/aqeedah", icon: "العَقِيدَة" },
      { label: "Fiqh", href: "/learn/fiqh", icon: "الفِقْه" },
      { label: "Akhlaq", href: "/learn/akhlaq", icon: "الأَخْلَاق" },
      { label: "Arabic", href: "/learn/arabic", icon: "العَرَبِيَّة" },
      { label: "Qur'an", href: "/learn/quran", icon: "القُرْآن" },
      { label: "Hadith", href: "/learn/hadith", icon: "الحَدِيث" },
      { label: "Stories", href: "/learn/stories", icon: "القَصَص" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Books", href: "/resources/books", icon: "books" },
      { label: "Lectures", href: "/resources/lectures", icon: "lectures" },
      { label: "Tutorials", href: "/resources/tutorials", icon: "tutorials" },
    ],
  },
  {
    label: "Blogs",
    href: "/blogs",
    children: [
      { label: "Daily Reminders", href: "/blogs/daily-reminders", icon: "reminders" },
      { label: "Benefits", href: "/blogs/benefits", icon: "benefits" },
      { label: "Articles", href: "/blogs/articles", icon: "articles" },
    ],
  },
  { label: "About", href: "/about" },
];
