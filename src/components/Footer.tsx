import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative w-full py-16 lg:py-20 overflow-hidden bg-[hsl(175,40%,8%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175,60%,15%,0.3),transparent_70%)]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <h3 className="text-2xl font-normal italic text-white mb-3">
              TrackPro
            </h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Your ultimate companion for tracking, protecting, and optimizing
              every ride.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-[hsl(175,80%,60%)]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright separator */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} TrackPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
