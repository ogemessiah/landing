export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">
          TunnelMouth
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          We connect you with trusted couriers instantly.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Download App
          </button>
        </div>
      </section>

      

      {/* VALUE PROPOSITION */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">
          Why TunnelMouth?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Affordable Pricing
            </h3>

            <p className="mt-4 text-gray-600">
              Compare delivery drivers and choose the best option.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-4 text-gray-600">
              Real-time driver availability for quick dispatch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              Trusted Drivers
            </h3>

            <p className="mt-4 text-gray-600">
              Verified delivery partners for safer transactions.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-gray-600">
          support@tunnelmouth.com
        </p>
      </section>

    </main>
  );
}