import { RiMedal2Line } from "react-icons/ri";
import rightimage from "../assets/pro-2.jpg";
import avatar1 from "../assets/Avatarw.avif";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiRoundStar } from "react-icons/gi";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const Aboutme = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-[86px]">
          <div className="flex items-center justify-center mb-10 md:mb-20">
            <span className="text-2xl md:text-3xl font-bold text-slate-200">About Me</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side: Image */}
            <div className="flex justify-center items-center">
              <img
                src={avatar1}
                alt="Gowthama Viknesh K"
                className="w-full max-w-[300px] md:max-w-[360px] h-[400px] md:h-[530px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>

            {/* Right side: Content */}
            <div className="space-y-6 px-4 sm:px-0">
              {/* Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center">
                <div className="bg-slate-800 p-4 w-full sm:w-[180px] h-[120px] rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
                  <RiMedal2Line className="text-2xl md:text-3xl text-white mb-2" />
                  <h5 className="text-sm md:text-base font-semibold text-white mb-1">Experience</h5>
                  <p className="text-slate-400 text-xs">1 year of working</p>
                </div>
                <div className="bg-slate-800 p-4 w-full sm:w-[180px] h-[120px] rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
                  <AiOutlineFundProjectionScreen className="text-2xl md:text-3xl text-white mb-2" />
                  <h5 className="text-sm md:text-base font-semibold text-white mb-1">Projects</h5>
                  <p className="text-slate-400 text-xs">Completed 5+ projects</p>
                </div>
                <div className="bg-slate-800 p-4 w-full sm:w-[180px] h-[120px] rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
                  <GiRoundStar className="text-2xl md:text-3xl text-white mb-2" />
                  <h5 className="text-sm md:text-base font-semibold text-white mb-1">Certificate</h5>
                  <p className="text-slate-400 text-xs">Guvi-IIT Madras</p>
                </div>
              </div>

              {/* Description Section */}
              <div className="text-slate-300 space-y-4">
                <p className="text-sm md:text-base">
                  I'm a passionate developer with expertise in full-stack technologies,
                  dedicated to creating innovative and efficient web solutions.
                </p>
              </div>

              {/* About Me Section */}
              <div className="text-slate-300">
                <p className="text-sm md:text-base">
                  As a dedicated web developer with 1 year of professional experience in full-stack development,
                  I specialize in crafting visually appealing, user-friendly, and efficient web applications.
                  Having successfully completed the Full Stack Developer course at GUVI IIT MADRAS,
                  I have applied my skills in real-world projects, honing my expertise in the MERN stack and
                  continuously growing as a developer. My passion for creating innovative web solutions and
                  my commitment to staying updated with the latest technologies drive me to deliver impactful results.
                  I look forward to contributing to the ever-evolving world of web development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div >
    </>
  );
};

export default Aboutme;
