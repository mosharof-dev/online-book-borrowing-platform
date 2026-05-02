import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'All Books', path: '/books' },
  { name: 'Top Rated', path: '#featured' }, 
  { name: 'New Arrivals', path: '/books' },
  { name: 'My Profile', path: 'profile' } 
];


const Footer = () => {
  return (
    <footer className="bg-[#0F172A] relative overflow-hidden pt-16">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[#FB8C00]/20 blur-[120px] rounded-full pointer-events-none"></div>
      
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group ">
              <div className="bg-[#FB8C00]/10 p-1.5 md:p-2 rounded-xl border border-[#FB8C00]/20 group-hover:bg-[#FB8C00]/20 transition-colors inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#FB8C00" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white inline-block align-middle ml-2">
                Book<span className="text-[#FB8C00]">Borrowing</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Your digital gateway to thousands of books. Explore timeless classics to modern bestsellers, borrow digitally, and read anywhere, anytime.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FB8C00] hover:text-white hover:border-[#FB8C00] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaFacebook size={16} /> 
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FB8C00] hover:text-white hover:border-[#FB8C00] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                 <FaTwitter size={16} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FB8C00] hover:text-white hover:border-[#FB8C00] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                 <FaInstagram size={16} />
              </Link>
              <Link href="https://www.linkedin.com/in/mosharof-hosen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FB8C00] hover:text-white hover:border-[#FB8C00] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                 <FaLinkedin size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-full h-px bg-[#FB8C00] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="text-slate-400 hover:text-[#FB8C00] hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB8C00]/50"></span>
                    {item.name}
                  </Link>

                </li>
              ))}
            </ul>
          </div>

          {/* Support / Help */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-full h-px bg-[#FB8C00] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['FAQ', 'Borrowing Policy', 'Terms of Service', 'Privacy Policy'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-slate-400 hover:text-[#FB8C00] hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB8C00]/50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-full h-px bg-[#FB8C00] rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#FB8C00] group-hover:bg-[#FB8C00] group-hover:text-white transition-colors">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Our Location</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#FB8C00] group-hover:bg-[#FB8C00] group-hover:text-white transition-colors">
                  <FaPhoneAlt size={14} />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Call Us</p>
                  <p>+880 1799400971</p>
                </div>
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors group">
                <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[#FB8C00] group-hover:bg-[#FB8C00] group-hover:text-white transition-colors">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <p>mosharof.dev@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white">BookBorrowing</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by <Link href="https://www.linkedin.com/in/mosharof-hosen/" target="_blank" className="text-white hover:text-[#FB8C00] transition-colors font-semibold">Mosharof</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;