export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#40203f] to-black text-white px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          TunnelMouth
        </h1>

        <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">

          {/* Google Play */}
          <a href="#">
            <img
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
              className="h-14 w-auto"
            />
          </a>

          {/* Apple App Store */}
          <a href="#">
            <img
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-15 w-auto"
            />
          </a>

        </div>

        

      </section>
      

      {/* FEATURES */}

      <section className="px-6 py-24 bg-gray-50">

        <h2 className="text-4xl font-bold text-center">
          Why choose TunnelMouth?
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          We make sending packages simple, affordable and reliable.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
              🚚
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Trusted Couriers
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Every delivery partner is verified before joining
              TunnelMouth so your packages stay safe.
            </p>

          </div>

          {/* Card */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
              💰
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Best Prices
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Compare prices from multiple couriers and choose
              the one that fits your budget.
            </p>

          </div>

          {/* Card */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              📍
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Live Tracking
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Track every delivery from pickup to destination
              in real time.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="px-6 py-24 bg-white">

        <h2 className="text-4xl font-bold text-center">
          How TunnelMouth Works
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Sending a package has never been easier
        </p>


        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Step 1 */}

          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-[#40203f] text-white flex items-center justify-center text-3xl font-bold">
              1
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Create a Delivery
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Enter your pickup location, destination and package details in seconds.
            </p>

          </div>

          {/* Step 2 */}

          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-[#40203f] text-white flex items-center justify-center text-3xl font-bold">
              2
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Compare Couriers
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              View available couriers, compare prices, ratings and delivery options before choosing.
            </p>

          </div>

          {/* Step 3 */}

          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-[#40203f] text-white flex items-center justify-center text-3xl font-bold">
              3
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Track Your Delivery
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Follow your package in real time until it reaches its destination safely.
            </p>

          </div>

        </div>

      </section>


      {/* APP SHOWCASE */}

      <section className="bg-gradient-to-br from-[#40203f] to-black text-white px-6 py-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          

          {/* Right */}

          <div className="grid grid-cols-2 gap-6 justify-items-center">

            <div className="w-[180px] md:w-[210px] rounded-[35px] overflow-hidden border-[7px] border-black shadow-2xl hover:-translate-y-3 transition duration-500">
              <img
                src="/images/signin-phone.png"
                className="w-full h-auto object-contain"
                alt="Sign in"
              />
            </div>


            <div className="w-[180px] md:w-[210px] rounded-[35px] overflow-hidden border-[7px] border-black shadow-2xl hover:-translate-y-3 transition duration-500">
              <img
                src="/images/home-phone.png"
                className="w-full h-auto object-contain"
                alt="Home"
              />
            </div>


            <div className="w-[180px] md:w-[210px] rounded-[35px] overflow-hidden border-[7px] border-black shadow-2xl hover:-translate-y-3 transition duration-500">
              <img
                src="/images/payment-phone.png"
                className="w-full h-auto object-contain"
                alt="Payment"
              />
            </div>

            <div className="w-[180px] md:w-[210px] rounded-[35px] overflow-hidden border-[7px] border-black shadow-2xl hover:-translate-y-3 transition duration-500">
              <img
                src="/images/paystack-phone.png"
                className="w-full h-auto object-contain"
                alt="Paystack"
              />
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#111111] text-white">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-4 gap-12">

            {/* Company */}

            

            {/* Company Links */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Company
              </h3>

              <ul className="space-y-3 text-gray-400">


                <li>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdD2SWL4eRoJumvzrF6atvjSdJmCjDlqiSxFbAUDb4VdHx_dw/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
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

            {/* Legal */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Legal
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <a href="/privacy-policy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="/terms" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Contact
              </h3>

              <a
                href="mailto:support@tunnelmouth.com"
                className="text-gray-400 hover:text-white transition"
              >
                support@tunnelmouth.com
              </a>

              

            </div>

          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-500">
              © {new Date().getFullYear()} TunnelMouth Technologies Limited
            </p>

            <div className="flex gap-6 mt-5 md:mt-0">

              <a 
                href="https://facebook.com/TunnelMouth" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Facebook
              </a>

              <a 
                href="https://instagram.com/gettunnelmouth"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}