export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Biography</h2>
        <p className="mt-3 text-zinc-600">
          Write a short professional biography here — your background, how
          you got into software engineering, and what drives you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className="mt-3 text-zinc-600">
          What you aim to achieve through your work.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Vision</h2>
        <p className="mt-3 text-zinc-600">
          Where you see yourself and your impact in the long term.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">My Journey</h2>
        <p className="mt-3 text-zinc-600">
          A brief narrative of your career path so far.
        </p>
      </section>
    </div>
  );
}