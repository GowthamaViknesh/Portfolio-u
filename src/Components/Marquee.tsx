import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const Marquee = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="mt-36 mb-20 text-center">
          <h1 className="text-3xl font-bold text-white">Technologies</h1>
        </div>
        <div className="my-10 text-white flex justify-center items-center max-sm:animate-scroll">
          <div className="flex MyGradient space-x-6 sm:space-x-6 lg:space-x-20">
            {/* HTML5 */}
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-orange-500 text-4xl" />
              <p className="text-sm mt-2">HTML5</p>
            </div>

            {/* CSS3 */}
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-blue-500 text-4xl" />
              <p className="text-sm mt-2">CSS3</p>
            </div>

            {/* React */}
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500 text-4xl" />
              <p className="text-sm mt-2">React</p>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500 text-4xl" />
              <p className="text-sm mt-2">Node.js</p>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-400 text-4xl" />
              <p className="text-sm mt-2">JavaScript</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <SiTypescript className="text-blue-400 text-4xl" />
              <p className="text-sm mt-2">TypeScript</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-blue-400 text-4xl" />
              <p className="text-sm mt-2">Tailwind</p>
            </div>

            {/* MongoDB */}
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-400 text-4xl" />
              <p className="text-sm mt-2">MongoDB</p>
            </div>

            {/* PostgreSQL */}
            <div className="flex flex-col items-center">
              <BiLogoPostgresql className="text-blue-400 text-4xl" />
              <p className="text-sm mt-2">PostgreSQL</p>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-red-500 text-4xl" />
              <p className="text-sm mt-2">Git</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Marquee;
