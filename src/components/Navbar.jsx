import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/DilankaLogo.webp";

const Navbar = () => {
  return (
    // <nav className=" flex items-center justify-between py-4">
    <nav className="flex items-center justify-between py-3 px-2 sm:px-4 md:px-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        </a>
      </div>
      <div className="flex flex-shrink-0 items-center justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl">
        {/* LinkedIn - Luxury Dark Theme */}
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 overflow-hidden rounded-full bg-gradient-to-br from-stone-900 via-zinc-900 to-black border border-stone-700/50 backdrop-blur-sm transition-all duration-500 hover:border-stone-500/80 hover:shadow-2xl hover:shadow-stone-500/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent"></span>
          <FaLinkedin className="relative z-10 text-stone-300 transition-all duration-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent skew-x-12"></span>
        </a>

        {/* Facebook - Luxury Dark Theme */}
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="group relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 overflow-hidden rounded-full bg-gradient-to-br from-stone-900 via-zinc-900 to-black border border-stone-700/50 backdrop-blur-sm transition-all duration-500 hover:border-stone-500/80 hover:shadow-2xl hover:shadow-stone-500/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent"></span>
          <FaFacebook className="relative z-10 text-stone-300 transition-all duration-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent skew-x-12"></span>
        </a>

        {/* Instagram - Luxury Dark Theme */}
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 overflow-hidden rounded-full bg-gradient-to-br from-stone-900 via-zinc-900 to-black border border-stone-700/50 backdrop-blur-sm transition-all duration-500 hover:border-stone-500/80 hover:shadow-2xl hover:shadow-stone-500/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent"></span>
          <FaInstagram className="relative z-10 text-stone-300 transition-all duration-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent skew-x-12"></span>
        </a>

        {/* Github - Luxury Dark Theme */}
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="group relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 overflow-hidden rounded-full bg-gradient-to-br from-stone-900 via-zinc-900 to-black border border-stone-700/50 backdrop-blur-sm transition-all duration-500 hover:border-stone-500/80 hover:shadow-2xl hover:shadow-stone-500/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent"></span>
          <FaGithub className="relative z-10 text-stone-300 transition-all duration-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent skew-x-12"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
