import Link from "next/link";

type DraftPageProps = {
  title: string;
  description: string;
  bullets?: string[];
};

export default function DraftPage({
  title,
  description,
  bullets = [],
}: DraftPageProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-teal-50 p-7 shadow-sm sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          Draft Page
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">{description}</p>

        {bullets.length ? (
          <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {bullets.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back Home
          </Link>
          <Link
            href="/learn"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Explore Learn
          </Link>
        </div>
      </section>
    </div>
  );
}
