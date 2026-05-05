export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-teal-50 p-7 shadow-sm sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          About Us
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Ceylon Youth Muslim Majlis
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          We are building a welcoming space for Muslim youth in Sri Lanka to
          learn authentic Islam, grow spiritually, and stay connected with the
          community through practical education and mentorship.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-teal-700">
              About Us
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our focus is to provide reliable Islamic learning in a modern and
              accessible way while nurturing character, consistency, and unity.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-teal-700">
              Contact Us
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Email: contact@cymm.lk</li>
              <li>Phone: +94 77 000 0000</li>
              <li>Address: Colombo, Sri Lanka</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
