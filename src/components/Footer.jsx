import logo from "../assets/kindertrack_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="KinderTrack Logo" className="h-6 w-auto drop-shadow-md" />
            </div>
            <p className="text-sm text-gray-300 font-dmsans leading-relaxed">
              Empowering early childhood education through technology and transparent communication between teachers and parents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white font-dmsans mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Programs", "Features", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-dmsans"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white font-dmsans mb-5">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: "facebook", label: "Facebook" },
                { icon: "twitter", label: "Twitter" },
                { icon: "instagram", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 text-white transition-all duration-300 shadow-sm"
                >
                  <i className={`bi bi-${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-gray-400 font-dmsans">
            &copy; {currentYear} <span className="text-white font-medium">KinderTrack</span>. All rights reserved <br className="block md:hidden" />
            <span className="text-gray-400"> │A Software Engineering Project by Team Xynel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
