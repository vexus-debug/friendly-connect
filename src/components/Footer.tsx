import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">B</span>
              </div>
              <span className="font-heading text-lg font-bold">Beulah Health Group</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Taking Responsibility for Social Transformation. A faith-based NGO improving lives in rural African communities since 2016.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-secondary transition-colors">Programs</Link></li>
              <li><Link to="/get-involved" className="hover:text-secondary transition-colors">Get Involved</Link></li>
              <li><Link to="/donate" className="hover:text-secondary transition-colors">Donate</Link></li>
              <li><Link to="/news" className="hover:text-secondary transition-colors">News & Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
              <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
              <li><Link to="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                350A, 444 Crescent, Citec Villas, Gwarinpa, Abuja, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                +234 703 805 7507
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                beulahworld.initiative@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Beulah Health Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/beulahworld.initiative" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary text-xs transition-colors">
              Instagram
            </a>
            <a href="https://facebook.com/BeulahWorldInitiative" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary text-xs transition-colors">
              Facebook
            </a>
            <a href="https://tiktok.com/@beulahworld.initiative" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-secondary text-xs transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
