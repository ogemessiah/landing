export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111]">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">

          <nav className="flex items-center justify-between rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-md shadow-sm px-4 sm:px-6 py-3">

            <a
              href="/"
              className="flex items-center gap-3"
            >

              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="TunnelMouth"
                  width="40"
                  height="40"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="font-black text-lg sm:text-xl tracking-[-0.03em]">
                TunnelMouth
              </span>

            </a>


            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">

              <a
                href="#features"
                className="hover:text-[#40203f] transition"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="hover:text-[#40203f] transition"
              >
                How it works
              </a>

              <a
                href="#app"
                className="hover:text-[#40203f] transition"
              >
                The app
              </a>

              <a
                href="#couriers"
                className="hover:text-[#40203f] transition"
              >
                For couriers
              </a>

            </div>


            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-xl bg-[#04B559] text-white px-4 sm:px-5 py-3 text-sm font-bold hover:-translate-y-0.5 transition"
            >
              Get the app
            </a>

          </nav>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf8fb] pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28">

        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

        <div className="absolute top-[55%] -left-48 w-[400px] h-[400px] rounded-full bg-green-100/30 blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">


            {/* HERO COPY */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-gray-600 shadow-sm">

                <span className="w-2.5 h-2.5 rounded-full bg-[#04B559]" />

                Smarter deliveries. Better prices.

              </div>


              <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] font-black tracking-[-0.055em]">

                Send anything.

                <br />

                <span className="text-[#40203f]">
                  Anywhere.
                </span>

                <br />

                <span className="text-[#04B559]">
                  Simply.
                </span>

              </h1>


              <p className="mt-7 text-lg md:text-xl text-gray-600 leading-8 max-w-xl">

                Compare trusted couriers, see delivery prices before
                you choose, pay securely and track your package from
                pickup to destination.

              </p>


              <div
                id="download"
                className="flex items-center gap-3 sm:gap-4 flex-wrap mt-8"
              >

                <a
                  href="https://play.google.com/store/apps/details?id=com.tunnelmouth.customer"
                  aria-label="Download TunnelMouth on Google Play"
                >

                  <img
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width="189"
                    height="56"
                    className="h-12 sm:h-14 w-auto"
                  />

                </a>


                <a
                  href="#"
                  aria-label="Download TunnelMouth on the App Store"
                >

                  <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width="189"
                    height="56"
                    className="h-12 sm:h-14 w-auto"
                  />

                </a>

              </div>


              <p className="text-sm text-gray-400 mt-5">
                Available for customers on mobile.
              </p>

            </div>


            {/* =================================================
                HERO PHONE
                ================================================= */}

            <div className="relative min-h-[470px] sm:min-h-[540px] flex items-center justify-center lg:justify-end">


              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#40203f]/10 blur-3xl pointer-events-none" />


              {/* BACK PHONE */}

              <div
                className="
                  absolute
                  w-[155px]
                  sm:w-[190px]
                  md:w-[220px]
                  left-[3%]
                  sm:left-[7%]
                  top-[19%]
                  rotate-[-9deg]
                  rounded-[32px]
                  overflow-hidden
                  border-[6px]
                  border-black
                  shadow-xl
                  opacity-70
                "
              >

                <img
                  src="/images/signin-phone.png"
                  alt="TunnelMouth sign in"
                  width="440"
                  height="880"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />

              </div>


              {/* MAIN PHONE */}

              <div
                className="
                  relative
                  z-10
                  w-[185px]
                  sm:w-[220px]
                  md:w-[270px]
                  rounded-[38px]
                  overflow-hidden
                  border-[7px]
                  border-black
                  shadow-[0_25px_60px_rgba(0,0,0,0.22)]
                  rotate-[2deg]
                "
              >

                <img
                  src="/images/home-phone.png"
                  alt="TunnelMouth app"
                  width="540"
                  height="1080"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto"
                />

              </div>


              {/* PRICE CARD */}

              <div className="absolute z-20 bottom-[7%] right-0 sm:right-[2%] bg-white rounded-2xl border border-gray-100 shadow-xl px-4 sm:px-5 py-3 sm:py-4">

                <p className="text-[11px] sm:text-xs text-gray-400">
                  Delivery from
                </p>

                <p className="text-lg sm:text-xl font-black mt-0.5">
                  ₦1,500
                </p>

                <div className="flex items-center gap-1.5 mt-1">

                  <span className="w-2 h-2 rounded-full bg-[#04B559]" />

                  <span className="text-[11px] sm:text-xs text-gray-500">
                    Available courier
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

        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-8">

            <div className="text-center">

              <p className="text-xl sm:text-2xl font-black">
                Verified
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Courier partners
              </p>

            </div>


            <div className="text-center">

              <p className="text-xl sm:text-2xl font-black">
                Secure
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Online payments
              </p>

            </div>


            <div className="text-center">

              <p className="text-xl sm:text-2xl font-black">
                Real-time
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Delivery updates
              </p>

            </div>


            <div className="text-center">

              <p className="text-xl sm:text-2xl font-black">
                Transparent
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
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
        className="px-5 sm:px-6 py-24 md:py-32 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-end">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#40203f]">
                Why TunnelMouth
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.045em] mt-4 leading-tight">
                Delivery without the guesswork.
              </h2>

            </div>


            <p className="text-lg text-gray-500 leading-8 max-w-xl">
              One simple experience for finding couriers, comparing
              prices, paying securely and keeping track of your
              delivery.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-5 mt-14">


            {/* FEATURE 1 */}

            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8 bg-white">

              <div className="w-14 h-14 rounded-2xl bg-[#f4eaf4] flex items-center justify-center">

                <svg
                  width="25"
                  height="25"
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
                Courier partners are reviewed and verified before
                joining the TunnelMouth marketplace.
              </p>

            </div>


            {/* FEATURE 2 */}

            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8 bg-white">

              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">

                <svg
                  width="25"
                  height="25"
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
                See available courier pricing before you choose and
                select the delivery option that suits you.
              </p>

            </div>


            {/* FEATURE 3 */}

            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8 bg-white">

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">

                <svg
                  width="25"
                  height="25"
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
                Track your delivery
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Follow your package through delivery updates from
                pickup to destination.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUILT FOR NIGERIA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf8fb] px-5 sm:px-6 py-24 md:py-32">

        <div className="absolute -right-40 top-20 w-[380px] h-[380px] rounded-full bg-purple-200/25 blur-3xl pointer-events-none" />

        <div className="absolute -left-40 bottom-0 w-[350px] h-[350px] rounded-full bg-green-100/25 blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">


            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#40203f]">
                Built for Nigeria
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.045em] mt-4 leading-[1.02]">
                Local deliveries,
                <br />
                made simpler.
              </h2>

              <p className="text-lg text-gray-600 leading-8 mt-6 max-w-xl">
                Connect with courier partners, compare delivery
                prices and keep track of your package through one
                straightforward experience.
              </p>


              <div className="grid grid-cols-2 gap-4 mt-9 max-w-lg">

                <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">

                  <p className="text-2xl font-black text-[#40203f]">
                    Lagos
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Launch market
                  </p>

                </div>


                <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">

                  <p className="text-2xl font-black text-[#04B559]">
                    ₦
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Nigerian pricing
                  </p>

                </div>

              </div>

            </div>


            <div className="relative">

              <div className="rounded-[32px] bg-[#40203f] p-7 sm:p-9 text-white shadow-[0_25px_60px_rgba(64,32,63,0.16)]">

                <div className="flex items-center justify-between gap-5">

                  <div>

                    <p className="text-sm text-purple-200">
                      Your delivery
                    </p>

                    <p className="text-xl sm:text-2xl font-black mt-1">
                      Pickup → Destination
                    </p>

                  </div>

                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">

                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12h18" />
                      <path d="m14 6 6 6-6 6" />
                    </svg>

                  </div>

                </div>


                <div className="mt-9 space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">

                      <span className="w-2.5 h-2.5 rounded-full bg-[#04B559]" />

                    </div>

                    <div>

                      <p className="text-sm text-purple-200">
                        Pickup
                      </p>

                      <p className="font-semibold">
                        Choose your pickup location
                      </p>

                    </div>

                  </div>


                  <div className="ml-5 h-7 border-l border-dashed border-white/20" />


                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">

                      <span className="w-2.5 h-2.5 rounded-full bg-white" />

                    </div>

                    <div>

                      <p className="text-sm text-purple-200">
                        Destination
                      </p>

                      <p className="font-semibold">
                        Enter where it needs to go
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="bg-white px-5 sm:px-6 py-24 md:py-32"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#40203f]">
              Simple by design
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] mt-4">
              Three steps. One simple delivery.
            </h2>

            <p className="text-gray-500 text-lg leading-8 mt-5">
              Create your delivery, compare available couriers and
              follow your package through to destination.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16">


            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8">

              <div className="flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-[#40203f] text-white flex items-center justify-center text-lg font-black">
                  01
                </div>

                <span className="text-xs font-bold tracking-widest text-gray-300">
                  START
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-8">
                Create a delivery
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Enter your pickup location, destination and package
                details in seconds.
              </p>

            </div>


            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8">

              <div className="flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-[#40203f] text-white flex items-center justify-center text-lg font-black">
                  02
                </div>

                <span className="text-xs font-bold tracking-widest text-gray-300">
                  CHOOSE
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-8">
                Compare couriers
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Compare available courier prices and choose the
                delivery option that works for you.
              </p>

            </div>


            <div className="rounded-[28px] border border-gray-200 p-7 sm:p-8">

              <div className="flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-[#04B559] text-white flex items-center justify-center text-lg font-black">
                  03
                </div>

                <span className="text-xs font-bold tracking-widest text-gray-300">
                  TRACK
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-8">
                Follow your package
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Keep up with delivery updates from pickup until your
                package reaches its destination.
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
        className="relative overflow-hidden bg-[#111] text-white px-5 sm:px-6 py-24 md:py-32"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#40203f] via-[#171017] to-black" />

        <div className="relative max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">


            <div>

              <p className="text-sm uppercase tracking-[0.18em] font-bold text-purple-200">
                The TunnelMouth app
              </p>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] mt-5 leading-[0.98]">
                Your delivery,
                <br />
                in your hand.
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-7 max-w-xl">
                Create deliveries, compare courier prices, make secure
                payments and keep track of your orders from one simple
                mobile experience.
              </p>


              <div className="flex flex-wrap gap-3 sm:gap-4 mt-9">

                <a href="https://play.google.com/store/apps/details?id=com.tunnelmouth.customer">

                  <img
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width="189"
                    height="56"
                    loading="lazy"
                    decoding="async"
                    className="h-12 sm:h-14 w-auto"
                  />

                </a>


                <a href="#">

                  <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width="189"
                    height="56"
                    loading="lazy"
                    decoding="async"
                    className="h-12 sm:h-14 w-auto"
                  />

                </a>

              </div>

            </div>


            {/* PHONES */}

            <div className="relative min-h-[520px] sm:min-h-[600px]">


              {/* PHONE 1 */}

              <div
                className="
                  absolute
                  w-[155px]
                  sm:w-[190px]
                  md:w-[220px]
                  left-[2%]
                  md:left-[7%]
                  top-20
                  rotate-[-8deg]
                  rounded-[32px]
                  overflow-hidden
                  border-[6px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/payment-phone.png"
                  alt="TunnelMouth payment"
                  width="440"
                  height="880"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />

              </div>


              {/* PHONE 2 */}

              <div
                className="
                  absolute
                  z-10
                  w-[180px]
                  sm:w-[215px]
                  md:w-[255px]
                  right-[2%]
                  md:right-[7%]
                  top-0
                  rotate-[6deg]
                  rounded-[36px]
                  overflow-hidden
                  border-[6px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/home-phone.png"
                  alt="TunnelMouth home"
                  width="540"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />

              </div>


              {/* PHONE 3 */}

              <div
                className="
                  absolute
                  z-20
                  w-[155px]
                  sm:w-[190px]
                  md:w-[220px]
                  left-[21%]
                  md:left-[27%]
                  bottom-0
                  rotate-[2deg]
                  rounded-[32px]
                  overflow-hidden
                  border-[6px]
                  border-black
                  shadow-2xl
                "
              >

                <img
                  src="/images/paystack-phone.png"
                  alt="TunnelMouth secure payment"
                  width="440"
                  height="880"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COURIER CTA
      ===================================================== */}

      <section
        id="couriers"
        className="px-5 sm:px-6 py-24 md:py-32 bg-white"
      >

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-[#40203f] px-7 sm:px-10 md:px-16 py-14 md:py-20 text-white shadow-[0_25px_60px_rgba(64,32,63,0.16)]">

            <div className="absolute -right-28 -top-28 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="absolute -left-28 -bottom-36 w-80 h-80 rounded-full bg-[#04B559]/10 blur-3xl pointer-events-none" />


            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">

              <div>

                <p className="text-sm uppercase tracking-[0.18em] font-bold text-purple-200">
                  For courier companies
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] mt-4 max-w-3xl leading-tight">
                  Put your delivery business in front of more customers.
                </h2>

                <p className="text-purple-100 text-lg leading-8 mt-6 max-w-2xl">
                  Join the TunnelMouth marketplace and connect your
                  courier business with customers looking for delivery
                  services.
                </p>

              </div>


              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdD2SWL4eRoJumvzrF6atvjSdJmCjDlqiSxFbAUDb4VdHx_dw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap bg-white text-[#40203f] px-7 py-4 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition"
              >
                Become a Courier

                <span className="ml-3 text-xl">
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

      <section className="relative overflow-hidden px-5 sm:px-6 py-24 md:py-32 bg-[#faf8fb] text-center">

        <div className="relative max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-[0.18em] font-bold text-[#40203f]">
            Ready when you are
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] mt-4 leading-[0.98]">
            Your next delivery
            <br />
            starts here.
          </h2>

          <p className="text-lg text-gray-500 leading-8 mt-6 max-w-xl mx-auto">
            Download TunnelMouth and make sending packages simpler.
          </p>


          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mt-9">

            <a href="https://play.google.com/store/apps/details?id=com.tunnelmouth.customer">

              <img
                src="/images/google-play-badge.svg"
                alt="Get it on Google Play"
                width="189"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 w-auto"
              />

            </a>


            <a href="#">

              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                width="189"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 w-auto"
              />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#0d0d0d] text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-20">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">


            {/* BRAND */}

            <div>

              <a
                href="/"
                className="flex items-center gap-3"
              >

                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="TunnelMouth"
                    width="40"
                    height="40"
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="font-black text-xl">
                  TunnelMouth
                </span>

              </a>


              <p className="text-gray-500 leading-7 mt-5 max-w-xs">
                A simpler way to compare couriers, arrange deliveries
                and keep track of your packages.
              </p>

            </div>


            {/* COMPANY */}

            <div>

              <h3 className="font-bold text-base mb-5">
                Company
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li>

                  <a
                    href="#couriers"
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

              <h3 className="font-bold text-base mb-5">
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

              <h3 className="font-bold text-base mb-5">
                Contact
              </h3>

              <a
                href="mailto:support@tunnelmouth.com"
                className="text-gray-500 hover:text-white transition"
              >
                support@tunnelmouth.com
              </a>


              <div className="flex flex-wrap gap-x-5 gap-y-3 mt-6">

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


          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">

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