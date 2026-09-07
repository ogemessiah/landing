export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111]">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

     


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf8fb] pt-40 pb-24 md:pt-48 md:pb-32">

        {/* BACKGROUND GLOW */}

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />

        <div className="absolute top-80 -left-40 w-[400px] h-[400px] bg-green-100/40 rounded-full blur-3xl" />


        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">


            {/* LEFT */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-600 mb-7">

                <span className="w-2 h-2 rounded-full bg-[#04B559]" />

                Smarter deliveries. Better prices.

              </div>


              <h1 className="text-5xl md:text-6xl lg:text-[76px] leading-[0.98] font-black tracking-[-0.045em]">

                Send anything.
                <br />

                <span className="text-[#40203f]">
                  Anywhere.
                </span>

                <br />

                Simply.

              </h1>


              <p className="mt-7 text-lg md:text-xl text-gray-600 leading-8 max-w-xl">

                Compare trusted couriers, find the best delivery price,
                pay securely and track your package from pickup to
                destination.

              </p>


              {/* DOWNLOAD BUTTONS */}

              <div
                id="download"
                className="flex items-center gap-4 flex-wrap mt-9"
              >

                {/* GOOGLE PLAY */}

                <a href="#">

                  <img
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    className="h-14 w-auto hover:scale-105 transition"
                  />

                </a>


                {/* APP STORE */}

                <a href="#">

                  <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-14 w-auto hover:scale-105 transition"
                  />

                </a>

              </div>


              <p className="text-sm text-gray-400 mt-5">
                Available for customers on mobile.
              </p>

            </div>


            {/* RIGHT — PHONE SHOWCASE */}

            <div className="relative flex justify-center lg:justify-end">

              {/* BACK PHONE */}

              <div
                className="
                  absolute
                  w-[190px]
                  md:w-[230px]
                  rotate-[-10deg]
                  translate-x-[-80px]
                  translate-y-[35px]
                  opacity-60
                  rounded-[38px]
                  overflow-hidden
                  border-[7px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/signin-phone.png"
                  alt="TunnelMouth sign in"
                  className="w-full h-auto"
                />

              </div>


              {/* MAIN PHONE */}

              <div
                className="
                  relative
                  z-10
                  w-[230px]
                  md:w-[280px]
                  rounded-[42px]
                  overflow-hidden
                  border-[8px]
                  border-black
                  shadow-[0_40px_100px_rgba(0,0,0,0.28)]
                  rotate-[3deg]
                "
              >

                <img
                  src="/images/home-phone.png"
                  alt="TunnelMouth home screen"
                  className="w-full h-auto"
                />

              </div>


              {/* FLOATING PRICE CARD */}

              <div
                className="
                  absolute
                  z-20
                  bottom-8
                  right-0
                  md:right-[-25px]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border
                  border-gray-100
                  px-5
                  py-4
                  hidden sm:block
                "
              >

                <p className="text-xs text-gray-400 font-medium">
                  Delivery from
                </p>

                <p className="text-xl font-black mt-1">
                  ₦1,500
                </p>

                <div className="flex items-center gap-1 mt-1">

                  <span className="w-2 h-2 rounded-full bg-[#04B559]" />

                  <span className="text-xs text-gray-500">
                    Verified courier
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="border-y border-gray-100 bg-white">

        <div className="max-w-6xl mx-auto px-6 py-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <p className="font-black text-lg">
                Verified
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Courier partners
              </p>
            </div>


            <div>
              <p className="font-black text-lg">
                Secure
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Online payments
              </p>
            </div>


            <div>
              <p className="font-black text-lg">
                Real-time
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Delivery tracking
              </p>
            </div>


            <div>
              <p className="font-black text-lg">
                Transparent
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Courier pricing
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section
        id="features"
        className="px-6 py-28 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#40203f]">
              Why TunnelMouth
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
              Everything you need for a better delivery.
            </h2>

            <p className="text-lg text-gray-500 mt-5 leading-8">
              One simple platform for finding couriers, comparing
              prices, paying securely and keeping an eye on your
              delivery.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16">


            {/* FEATURE 1 */}

            <div className="group rounded-3xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-[#f4eaf4] flex items-center justify-center">

                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#40203f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 17h11V5H3v12Z" />
                  <path d="M14 9h4l3 3v5h-7V9Z" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="18" cy="17" r="2" />
                </svg>

              </div>


              <h3 className="text-2xl font-bold mt-7">
                Trusted couriers
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Delivery partners are reviewed and verified before
                joining the TunnelMouth marketplace.
              </p>

            </div>


            {/* FEATURE 2 */}

            <div className="group rounded-3xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">

                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#04B559"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H7" />
                </svg>

              </div>


              <h3 className="text-2xl font-bold mt-7">
                Compare prices
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                See courier pricing before you choose. Pick the
                delivery option that works best for you.
              </p>

            </div>


            {/* FEATURE 3 */}

            <div className="group rounded-3xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>

              </div>


              <h3 className="text-2xl font-bold mt-7">
                Live tracking
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Follow your package as it moves from pickup to
                destination with real-time delivery updates.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="bg-[#faf8fb] px-6 py-28"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#40203f]">
              Simple by design
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              From pickup to destination.
            </h2>

            <p className="text-gray-500 text-lg mt-5">
              Sending a package shouldn't require a complicated process.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-12 mt-20">


            {/* STEP 1 */}

            <div className="relative text-center">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#40203f] text-white flex items-center justify-center text-xl font-black shadow-lg">
                01
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Create a delivery
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Enter your pickup location, destination and package
                details in seconds.
              </p>

            </div>


            {/* STEP 2 */}

            <div className="relative text-center">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#40203f] text-white flex items-center justify-center text-xl font-black shadow-lg">
                02
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Compare couriers
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Compare available courier prices and choose the option
                that suits your delivery.
              </p>

            </div>


            {/* STEP 3 */}

            <div className="relative text-center">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#40203f] text-white flex items-center justify-center text-xl font-black shadow-lg">
                03
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Track your package
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Follow your delivery in real time until it reaches
                its destination.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APP SHOWCASE
      ===================================================== */}

      <section
        id="app"
        className="relative overflow-hidden bg-[#111] text-white px-6 py-28"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#40203f] via-[#171017] to-black opacity-90" />

        <div className="relative max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">


            {/* LEFT */}

            <div>

              <p className="text-sm uppercase tracking-[0.18em] font-bold text-purple-200">
                The TunnelMouth app
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-5 leading-tight">
                Your delivery,
                <br />
                in your hand.
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-xl">
                Create deliveries, compare courier prices, make secure
                payments and keep track of every order from one simple
                app.
              </p>


              <div className="flex flex-wrap gap-4 mt-9">

                <a href="#">

                  <img
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    className="h-14"
                  />

                </a>

                <a href="#">

                  <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-14"
                  />

                </a>

              </div>

            </div>


            {/* RIGHT PHONES */}

            <div className="relative flex justify-center min-h-[600px]">


              {/* PHONE 1 */}

              <div
                className="
                  absolute
                  w-[185px]
                  md:w-[220px]
                  left-[5%]
                  top-16
                  rotate-[-9deg]
                  rounded-[36px]
                  overflow-hidden
                  border-[7px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/payment-phone.png"
                  alt="TunnelMouth payment"
                  className="w-full"
                />

              </div>


              {/* PHONE 2 */}

              <div
                className="
                  absolute
                  z-10
                  w-[215px]
                  md:w-[255px]
                  right-[5%]
                  top-0
                  rotate-[7deg]
                  rounded-[40px]
                  overflow-hidden
                  border-[7px]
                  border-black
                  shadow-[0_35px_80px_rgba(0,0,0,0.6)]
                "
              >

                <img
                  src="/images/home-phone.png"
                  alt="TunnelMouth home"
                  className="w-full"
                />

              </div>


              {/* PHONE 3 */}

              <div
                className="
                  absolute
                  z-20
                  w-[185px]
                  md:w-[220px]
                  left-[25%]
                  bottom-0
                  rotate-[2deg]
                  rounded-[36px]
                  overflow-hidden
                  border-[7px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/paystack-phone.png"
                  alt="TunnelMouth secure payment"
                  className="w-full"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COURIER CTA
      ===================================================== */}

      <section className="px-6 py-28 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-[#40203f] px-8 md:px-16 py-16 text-white">

            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">

              <p className="text-sm uppercase tracking-[0.18em] font-bold text-purple-200">
                For courier companies
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-4 max-w-2xl">
                Grow your delivery business with TunnelMouth.
              </h2>

              <p className="text-purple-100 text-lg leading-8 mt-5 max-w-2xl">
                Join the TunnelMouth marketplace and connect your
                courier business with customers looking for reliable
                delivery services.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdD2SWL4eRoJumvzrF6atvjSdJmCjDlqiSxFbAUDb4VdHx_dw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  mt-8
                  bg-white
                  text-[#40203f]
                  px-7
                  py-4
                  rounded-2xl
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                Become a Courier
                <span className="ml-3">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 py-24 bg-[#faf8fb] text-center">

        <div className="max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-[0.18em] font-bold text-[#40203f]">
            Ready when you are
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
            Your next delivery starts here.
          </h2>

          <p className="text-lg text-gray-500 mt-5">
            Download TunnelMouth and make sending packages simpler.
          </p>


          <div className="flex justify-center gap-4 flex-wrap mt-9">

            <a href="#">

              <img
                src="/images/google-play-badge.svg"
                alt="Get it on Google Play"
                className="h-14"
              />

            </a>

            <a href="#">

              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-14"
              />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#111] text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-4 gap-12">


            {/* BRAND */}

            <div className="md:col-span-1">

              <div className="flex items-center gap-2">

                <div className="w-10 h-10 rounded-xl bg-[#40203f] flex items-center justify-center">

                  <span className="font-black text-lg">
                    T
                  </span>

                </div>

                <span className="font-black text-xl">
                  TunnelMouth
                </span>

              </div>

              <p className="text-gray-500 leading-7 mt-5">
                A smarter way to send packages, compare couriers
                and track deliveries.
              </p>

            </div>


            {/* COMPANY */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Company
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdD2SWL4eRoJumvzrF6atvjSdJmCjDlqiSxFbAUDb4VdHx_dw/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Become a Courier
                  </a>

                </li>

                <li>

                  <a
                    href="/careers"
                    className="hover:text-white transition"
                  >
                    Careers
                  </a>

                </li>

              </ul>

            </div>


            {/* LEGAL */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Legal
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li>

                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition"
                  >
                    Privacy Policy
                  </a>

                </li>

                <li>

                  <a
                    href="/terms"
                    className="hover:text-white transition"
                  >
                    Terms & Conditions
                  </a>

                </li>

              </ul>

            </div>


            {/* CONTACT */}

            <div>

              <h3 className="font-bold text-lg mb-5">
                Contact
              </h3>

              <a
                href="mailto:support@tunnelmouth.com"
                className="text-gray-500 hover:text-white transition"
              >
                support@tunnelmouth.com
              </a>


              <div className="flex gap-5 mt-6">

                <a
                  href="https://facebook.com/TunnelMouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition"
                >
                  Facebook
                </a>

                <a
                  href="https://instagram.com/gettunnelmouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition"
                >
                  Instagram
                </a>

              </div>

            </div>

          </div>


          {/* COPYRIGHT */}

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">

            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} TunnelMouth Technologies Limited
            </p>

            <p className="text-gray-600 text-sm">
              Built for simpler deliveries.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}