import { FaCode, FaGlobe } from "react-icons/fa";
import Gold from "../assets/Gold.png";
import Chat from "../assets/chat.png";
import ECom from "../assets/E-come.png";
import blogs from "../assets/blogs.png";

const mernProjects = [
  {
    title: "Gold Rate Calculator",
    img: Gold,
    description:
      "A MERN project combining real-time gold price data with user authentication and CRUD operations. Users can register, log in, and manage gold-related data seamlessly.",
    frontendLink: "https://github.com/GowthamaViknesh/Gold-Rate-Calculator-ForntEnd",
    backendLink: "https://github.com/GowthamaViknesh/Gold-Rate-Calculator-Backend",
    liveLink: "https://6505b09225bea31c9a9fd43a--silver-haupia-df4d2b.netlify.app/",
  },
  {
    title: "Chat Application",
    img: Chat,
    description:
      "A MERN-based real-time chat application with user authentication, instant messaging, and group chat features, providing a private and authenticated environment.",
    frontendLink: "https://github.com/GowthamaViknesh/Chat-FrontEnd",
    backendLink: "https://github.com/GowthamaViknesh/ChatApp-Backend",
    liveLink: "https://6533faf69c63b31013358f04--harmonious-kringle-de835c.netlify.app/",
  },
  {
    title: "E-Commerce",
    img: ECom,
    description:
      "An e-commerce platform integrating a user-friendly interface, robust backend, and secure payment gateways to offer an interactive shopping experience.",
    frontendLink: "https://github.com/GowthamaViknesh/E-Commerce/tree/main/frontend",
    backendLink: "https://github.com/GowthamaViknesh/E-Commerce/tree/main/backend",
    liveLink: "https://e-commerce-65t4.onrender.com/",
  },
  {
    title: "Blog Application",
    img: blogs,
    description:
      "A blogging platform built with the MERN stack, featuring Redux for state management, Material-UI components, authentication, and blog creation features.",
    frontendLink: "https://github.com/GowthamaViknesh/BlogApp-FrontEnd",
    backendLink: "https://github.com/GowthamaViknesh/BlogApp-BackEnd",
    liveLink: "https://6553bea955ce5113fdb3c8b0--eloquent-faloodeh-967857.netlify.app/",
  },
];

const Mern = () => {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mernProjects.map((project, index) => (
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
                <div className="flex justify-between flex-wrap gap-4">
                  <a
                    href={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex items-center gap-2 hover:text-blue-300"
                  >
                    <FaCode /> FrontEnd
                  </a>
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 flex items-center gap-2 hover:text-green-300"
                  >
                    <FaCode /> BackEnd
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 flex items-center gap-2 hover:text-yellow-300"
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
  );
};

export default Mern;
