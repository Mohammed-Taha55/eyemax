import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="mt-24 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold tracking-wide uppercase">
            Eyemax Optical Store
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Premium eyewear and professional eye care you can trust.
            Designed for comfort, clarity, and everyday confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>
              <Link href="#brands" className="hover:text-black transition">
                Brands
              </Link>
            </li>
            <li>
              <Link href="#frames" className="hover:text-black transition">
                Frames
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-black transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="hover:text-black transition">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
            Contact
          </h4>

          <ul className="mt-4 space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-900" />
              <span>+91-8660428450</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-900" />
              <span>
                Opp Yashfeen Hospital Beside Axis Bank ATM<br />
                Cowl Bazar Ballari-583101
              </span>
            </li>
          </ul>
        </div>

        {/* Timings */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
            Store Timings
          </h4>

          <div className="mt-4 flex items-start gap-3 text-gray-600">
            <Clock className="h-5 w-5 text-gray-900" />
            <span>
              Mon – Sat: 10:00 AM – 9:00 PM<br />
              Sunday: Closed
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Eyemax. All rights reserved.</span>
          <span>Designed & Developed with care</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
