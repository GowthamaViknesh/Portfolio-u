import { FaCode, FaGithub, FaGlobe } from "react-icons/fa";
import Ecom from "../assets/E-come.png";
import Manage from "../assets/Mange.png";
import ToDo from "../assets/todo.jpg";
import Calc from "../assets/calc.png";
import survey from "../assets/survey.png";
import Blog from "../assets/Blog.png";
import { motion } from "framer-motion";
import fadeIn from "../variants";

const projects = [
  {
    title: "E-Commerce",
    img: Ecom,
    description:
      "E-Commerce project using Context API and 'Add to Cart' feature is a frontend application that allows users to browse and purchase products.",
    codeLink: "https://github.com/GowthamaViknesh/Context-API",
    liveLink: "https://master--luminous-dasik-9de5ca.netlify.app/",
  },
  {
    title: "Books Management System",
    img: Manage,
    description:
      "A Books Management System with form validation and CRUD functionalities is a frontend project that facilitates the efficient management of books.",
    codeLink: "https://github.com/GowthamaViknesh/FormValidation",
    liveLink: "https://regal-pasca-388503.netlify.app/",
  },
  {
    title: "ToDo-App",
    img: ToDo,
    description:
      "A ToDo-App is a simple yet essential application for task management. It enables users to create, organize, and manage their to-do lists.",
    codeLink: "https://github.com/GowthamaViknesh/TodoAPP-React",
    liveLink: "https://cosmic-fairy-759b41.netlify.app/",
  },
  {
    title: "Calculator",
    img: Calc,
    description:
      "A Calculator frontend project built with HTML5, CSS3, and JavaScript. It provides basic arithmetic operations within a web browser.",
    codeLink:
      "https://github.com/GowthamaViknesh/Calculator-App-JS-HTML-CSS",
    liveLink:
      "https://gowthamaviknesh.github.io/Calculator-App-JS-HTML-CSS/",
  },
  {
    title: "Survey Form",
    img: survey,
    description:
      "A Survey Form frontend project with HTML5, CSS3, and JavaScript featuring both data collection and CRUD (Create, Read, Update, Delete) functions.",
    codeLink: "https://github.com/GowthamaViknesh/Survey_Form-DOM",
    liveLink: "https://gowthamaviknesh.github.io/Survey_Form-DOM/",
  },
  {
    title: "Blog Site",
    img: Blog,
    description:
      "A Blog Website project for creating and navigating through blog content. It offers seamless page routing and easy navigation for blogs and articles.",
    codeLink: "https://github.com/GowthamaViknesh/Router-Dom/tree/main",
    liveLink: "https://radiant-axolotl-2296dd.netlify.app/",
  },
];

const Frontend = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="text-white py-12">
          <div className="container mx-auto px-4">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center gap-2 hover:text-blue-300"
                      >
                        <FaCode /> Code
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-500 flex items-center gap-2 hover:text-blue-300"
                      >
                        <FaGithub /> Github
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 flex items-center gap-2 hover:text-green-300"
                      >
                        <FaGlobe /> Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </>

  );
};

export default Frontend;
