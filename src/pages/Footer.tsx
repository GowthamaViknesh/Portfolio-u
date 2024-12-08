import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaLeaf, FaMobileAlt, FaPaperPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const Footer = () => {
  const handleEmailClick = (event: { preventDefault: () => void; }) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      event.preventDefault();
      window.location.href =
        "googlegmail:///co?to=gowthampostbox18@gmail.com&subject=subject%20text";
    }
  };

  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <footer className="py-5 text-white">
          <h4 className="text-center text-xl border-b border-gray-600 pb-3 mb-5">
            Contact Me
          </h4>
          <ul className="flex flex-col space-x-12 md:flex-row justify-center items-center gap-4">
            <li>
              <a
                href="mailto:gowthampostbox18@gmail.com?subject=subject%20text"
                className="flex items-center gap-2 text-white-400 hover:text-blue-300 transition"
                onClick={handleEmailClick}
              >
                <SiGmail className="text-xl text-red-500" />
                gowthampostbox18@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gowtham1820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white-500 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-xl text-blue-500" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GowthamaViknesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-gray-200 transition"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-300 hover:text-gray-200 transition"
              >
                <FaMobileAlt className="text-xl" />
                8825646069
              </a>
            </li>
          </ul>
          <p className="text-center mt-6 flex justify-center items-center gap-3">
            <FaLeaf className="text-green-500 text-2xl" />
            <FaReact className="text-cyan-300 text-2xl" />
            <FaNodeJs className="text-green-400 text-2xl" />
            <FaPaperPlane className="text-blue-400 text-2xl" />
          </p>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
