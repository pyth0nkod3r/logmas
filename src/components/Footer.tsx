import { Shield, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">LOGMAS</span>
                <p className="text-xs opacity-80">Ogun State Government</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering local government services through digital innovation for the people of Ogun State, Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Company Demand Notice</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Shop Levy</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Certificates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Citizen Portal</Link></li>
              <li><Link to="/admin" className="hover:opacity-100 transition-opacity">Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /> Abeokuta, Ogun State, Nigeria</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /> +234 800 000 0000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 flex-shrink-0" /> info@logmas.ogunstate.gov.ng</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">© 2026 LOGMAS – Ogun State Local Government Management System</p>
          <div className="flex gap-6 text-sm opacity-70">
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
