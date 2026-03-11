const quickLinks = ["Services", "Portfolio", "About Us", "Contact Us"];

const socialIcons = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path fill="#16a34a" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#16a34a" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-500 text-white px-6 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-extrabold text-3xl text-black">WEB LOGO</span>
          </div>
          <p className="text-sm text-black/80 leading-relaxed max-w-xs">
            Some footer text about the Agency. Just a little description to
            help people understand you better
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg text-black mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-black/80 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-bold text-lg text-black mb-6">Address</h4>
          <p className="text-sm text-black/80 leading-relaxed">
            Design Agency Head Office,<br />
            Airport Road<br />
            United Arab Emirate
          </p>
        </div>
      </div>

      <div className=" border-green-400 pt-6">
        <p className="text-sm text-black/70">Copyright Design Agency 2022</p>
      </div>
    </footer>
  );
}