import Link from "next/link";

const quickLinks = [
  { label: "Learn", href: "/learn" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">CYMM</h3>
          <p className="mt-2 text-sm text-slate-400">
            Building a calm, structured path to learning Aqeedah, Fiqh, Akhlaq,
            and more.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Daily Reminder
          </h4>
          <p className="mt-3 text-sm text-slate-400">
            &quot;And whoever relies upon Allah, then He is sufficient for him.&quot;
          </p>
          <p className="mt-1 text-xs text-slate-500">Surah At-Talaq 65:3</p>
        </div>
      </div>
    </footer>
  );
}
