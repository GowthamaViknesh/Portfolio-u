import { useState } from "react";
import Frontend from "../pages/Frontend";
import Backend from "../pages/Backend";
import Mern from "../pages/Mern";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const Projects = () => {
  const [selectedComponent, setSelectedComponent] = useState("Mern");

  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center py-10">
          {/* Title Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <button
              className={`px-6 py-2 rounded-full transition ${selectedComponent === "FrontEnd"
                ? "bg-red-600 text-white"
                : "bg-gray-500 text-white hover:bg-red-600"
                }`}
              onClick={() => setSelectedComponent("FrontEnd")}
            >
              Frontend Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full transition ${selectedComponent === "BackEnd"
                ? "bg-red-600 text-white"
                : "bg-gray-500 text-white hover:bg-red-600"
                }`}
              onClick={() => setSelectedComponent("BackEnd")}
            >
              Backend Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full transition ${selectedComponent === "Mern"
                ? "bg-red-600 text-white"
                : "bg-gray-500 text-white hover:bg-red-600"
                }`}
              onClick={() => setSelectedComponent("Mern")}
            >
              MERN Projects
            </button>
          </div>

          {/* Render Selected Component */}
          <div className="mt-10 w-full">
            {selectedComponent === "FrontEnd" && <Frontend />}
            {selectedComponent === "BackEnd" && <Backend />}
            {selectedComponent === "Mern" && <Mern />}
          </div>
        </div>


      </motion.div>
    </>

  );
};

export default Projects;
