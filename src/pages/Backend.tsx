import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import file from "../assets/Filesystem.png";
import post from "../assets/Post.png";

const backendProjects = [
  {
    title: "File System - NodeJs",
    img: `${file}`,
    description:
      "A built-in module in Node.js that enables developers to interact with the file system, performing operations like reading, writing, updating, and deleting files in server-side JavaScript applications.",
    codeLink: "https://github.com/GowthamaViknesh/Node/tree/main",
    externalLink: null,
  },
  {
    title: "Assign Mentor",
    img: "https://www.cgsinc.com/sites/default/files/images/workplace-mentor-illustration.jpg",
    description:
      "An application to manage and assign mentors to students, facilitating efficient mentorship allocation using CRUD operations.",
    codeLink: "https://github.com/GowthamaViknesh/assign-mentor",
    externalLink:
      "https://documenter.getpostman.com/view/28641216/2s9XxsVGWg",
  },
  {
    title: "MongoDB",
    img: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg",
    description:
      "Designing databases and performing MongoDB queries to manage documents, retrieve specific records, and maintain database integrity.",
    codeLink: "https://github.com/GowthamaViknesh/DatabaseCreation-MDB",
    externalLink: null,
  },
  {
    title: "MySQL",
    img: `${post}`,
    description:
      "Executing MySQL queries to create, retrieve, update, and delete data in tables while designing structured database schemas.",
    codeLink:
      "https://github.com/GowthamaViknesh/MySQL-Task/tree/main/MySql",
    externalLink: null,
  },
];

const Backend = () => {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendProjects.map((project, index) => (
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
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 flex items-center gap-2 hover:text-green-300"
                    >
                      <FaExternalLinkAlt /> External
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
