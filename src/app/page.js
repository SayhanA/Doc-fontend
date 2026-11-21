export default function Home() {
  return (
    <main className="min-h-screen bg-bg p-6 md:p-12">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <header>
          <p className="text-sm font-medium text-primary">
            DOCTOR TRACKER
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Design System Preview
          </h1>

          <p className="mt-2 text-text-secondary">
            Our UI foundation for managing doctors and patients.
          </p>
        </header>

        {/* Buttons */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">
            Buttons
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover">
              Primary Button
            </button>

            <button className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition hover:bg-bg">
              Secondary Button
            </button>

            <button className="rounded-lg bg-danger px-5 py-2.5 text-sm font-medium text-white">
              Delete
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Total Doctors
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              24
            </h3>

            <p className="mt-2 text-sm text-success">
              Active records
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Total Patients
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              156
            </h3>

            <p className="mt-2 text-sm text-primary">
              Patient records
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Appointments
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              12
            </h3>

            <p className="mt-2 text-sm text-warning">
              Today
            </p>
          </div>
        </section>

        {/* Input */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">
            Input Field
          </h2>

          <div className="mt-4 max-w-md">
            <label
              htmlFor="doctor-name"
              className="mb-2 block text-sm font-medium"
            >
              Doctor Name
            </label>

            <input
              id="doctor-name"
              type="text"
              placeholder="Enter doctor name"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </section>

        {/* Colors */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">
            Color Palette
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg bg-primary p-4 text-white">
              Primary
            </div>

            <div className="rounded-lg bg-primary-soft p-4 text-primary">
              Soft
            </div>

            <div className="rounded-lg bg-success p-4 text-white">
              Success
            </div>

            <div className="rounded-lg bg-danger p-4 text-white">
              Danger
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}