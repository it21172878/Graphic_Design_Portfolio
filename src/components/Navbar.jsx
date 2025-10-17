import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
