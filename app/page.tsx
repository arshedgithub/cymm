import Link from "next/link";

const dailyContent = [
  {
    title: "Daily Verse",
    text: "Indeed, in the remembrance of Allah do hearts find rest. (13:28)",
  },
  {
    title: "Daily Hadith",
    text: "The best among you are those who learn the Qur&apos;an and teach it.",
  },
  {
    title: "Daily Reminder",
    text: "Small, consistent deeds are beloved to Allah.",
  },
];

const quickActions = [
  { title: "Read Qur&apos;an", href: "/learn/quran" },
  { title: "Browse Hadith", href: "/learn/hadith" },
  { title: "Start Learning", href: "/learn" },
];

const featuredLearning = ["Aqeedah", "Fiqh", "Akhlaq"];
const tutorials = ["Salah", "Wudu", "Ghusl"];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-teal-100 p-6 text-slate-900 shadow-lg sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              Muslim Youth Community · Sri Lanka
            </p>

            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Empowering Muslim Youth in Sri Lanka
            </h1>
            <p className="mt-2 text-lg font-medium text-slate-700 sm:text-xl">
              Building a Strong Islamic Community
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Vision
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To create an informed, connected, and spiritually enriched Muslim youth community in Sri Lanka through authentic Islamic education and cultural understanding.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Our Mission
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Providing accessible Islamic resources in Sinhala, supporting new reverts, and fostering a welcoming environment for spiritual growth and community engagement.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
              >
                Begin Learning
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-slate-400 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                About Us
              </Link>

              <div className="ml-auto flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">Follow us</span>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="grid h-8 w-8 place-items-center rounded-full bg-slate-800 text-white transition hover:bg-slate-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="grid h-8 w-8 place-items-center rounded-full bg-slate-800 text-white transition hover:bg-slate-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="grid h-8 w-8 place-items-center rounded-full bg-slate-800 text-white transition hover:bg-slate-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-300 bg-white/70 p-4 shadow-sm">
            <div className="flex h-full min-h-[260px] items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100/70 text-center">
              <div>
                <p className="text-sm font-semibold text-slate-500">Hero Image Placeholder</p>
                <p className="mt-1 text-xs text-slate-400">Replace with community photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-1">
          <h2 className="text-base font-semibold text-slate-900">Prayer Times</h2>
          <p className="mt-1 text-sm text-slate-500">Colombo, Sri Lanka</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex justify-between"><span>Fajr</span><span>04:52</span></li>
            <li className="flex justify-between"><span>Dhuhr</span><span>12:08</span></li>
            <li className="flex justify-between"><span>Asr</span><span>15:32</span></li>
            <li className="flex justify-between"><span>Maghrib</span><span>18:21</span></li>
            <li className="flex justify-between"><span>Isha</span><span>19:35</span></li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-900">Daily Content</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {dailyContent.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-slate-900">Quick Actions</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              {action.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Featured Learning</h2>
          <div className="mt-4 space-y-2">
            {featuredLearning.map((topic) => (
              <Link
                key={topic}
                href={`/learn/${topic.toLowerCase()}`}
                className="block rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                {topic}
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Tutorials</h2>
          <div className="mt-4 space-y-2">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial}
                href={`/resources/tutorials/${tutorial.toLowerCase()}`}
                className="block rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 transition hover:bg-amber-100"
              >
                {tutorial}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-900">Latest Articles / Blog</h2>
          <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-100 p-4">
            <h3 className="font-medium text-slate-900">Understanding Sincerity in Worship</h3>
            <p className="mt-2 text-sm text-slate-600">A short reflection on intention and consistency.</p>
          </article>
          <article className="rounded-xl border border-slate-100 p-4">
            <h3 className="font-medium text-slate-900">How to Build a Daily Qur&apos;an Habit</h3>
            <p className="mt-2 text-sm text-slate-600">Practical steps to stay connected every day.</p>
          </article>
          <article className="rounded-xl border border-slate-100 p-4">
            <h3 className="font-medium text-slate-900">A Beginner&apos;s Path Through Fiqh</h3>
            <p className="mt-2 text-sm text-slate-600">A simple route to start learning with structure.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
