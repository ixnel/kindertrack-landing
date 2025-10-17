export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium font-dmsans text-gray-700 inline-block">
            Contact
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Get in Touch */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold font-dmsans text-blue-900 mb-6">
              Get in Touch
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="bi bi-envelope-fill text-xl text-blue-700"></i>
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900 font-dmsans">Email</p>
                <p className="text-gray-600 font-dmsans">contact@kindertrack.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="bi bi-telephone-fill text-xl text-blue-700"></i>
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900 font-dmsans">Phone</p>
                <p className="text-gray-600 font-dmsans">+63 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="bi bi-geo-alt-fill text-xl text-blue-700"></i>
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900 font-dmsans">Location</p>
                <p className="text-gray-600 font-dmsans">Zamboanga, Philippines</p>
              </div>
            </div>
          </div>

          {/* Right Side – Message Form (No Card Style) */}
          <form className="space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-gray-300 py-3 px-5 text-gray-700 font-dmsans focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-full border border-gray-300 py-3 px-5 text-gray-700 font-dmsans focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>

            {/* Message Box */}
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-3xl border border-gray-300 py-4 px-5 text-gray-700 font-dmsans resize-none focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            ></textarea>

            {/* Send Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-white hover:text-blue-900 border-2 border-blue-900 text-white font-dmsans font-medium px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
