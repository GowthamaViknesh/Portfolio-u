import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

const Experience = () => {
  return (
    <>
      {/* Title Section */}
      <div className="flex justify-center mb-3 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-14">Experience</h1>
      </div>

      {/* Cards Container */}
      <div className="py-4 px-4 sm:px-40 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
        {/* Card 1 */}
        <div className="card w-full sm:w-80 h-96 mb-6 sm:mb-0 flex justify-center">
          <div className="card__content relative w-[300px] h-full transform transition-transform duration-1000">
            {/* Front Side */}
            <div className="card__front absolute inset-0 p-6 sm:p-10 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={logo1} className="w-28 sm:w-28 h-28 mb-4 sm:mb-7" />
              <h5 className="mb-2 sm:mb-3 text-xl sm:text-xl tracking-wide font-medium text-gray-900 dark:text-white text-center">
                Backend Developer
              </h5>

              <span className="text-base sm:text-sm mb-2 sm:mb-3 tracking-wide text-gray-800 dark:text-gray-100 text-center">
                Datalligence Ai
              </span>
              <span className="text-xs font-semibold tracking-wider">Jan 2024 - Jan 2025</span>
            </div>

            {/* Back Side */}
            <div className="card__back absolute inset-0 p-6 sm:p-6 bg-transparent border border-gray-200 rounded-lg shadow flex flex-col items-start justify-start text-white font-semibold">
              <h5 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold self-center">Responsibilities</h5>
              <ul className="text-xs list-disc px-[-1] space-y-2 leading-1">
                <li>Maintained and optimized a microservices architecture, refactoring the codebase for improved performance and scalability.</li>
                <li>Developed and integrated APIs for assessment modules, capability matrix, and external platform integrations like Jira.</li>
                <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) to mitigate security risks.</li>
                <li>Utilized AWS SES for reliable email communication and optimized PostgreSQL database schemas with efficient SQL queries to boost application performance.</li>
                <li>Wrote clean, maintainable code in TypeScript, upgraded Node.js, and managed npm packages for optimal compatibility and performance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full sm:w-80 h-96 mb-6 sm:mb-0 flex justify-center">
          <div className="card__content relative w-[300px] h-full transform transition-transform duration-1000">
            {/* Front Side */}
            <div className="card__front absolute inset-0 p-6 sm:p-10 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={logo2} className="w-28 sm:w-28 h-28 mb-4 sm:mb-7" />
              <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl tracking-wide font-medium text-gray-900 dark:text-white text-center">
                Front End Developer
              </h5>

              <span className="text-base sm:text-sm mb-2 sm:mb-3 tracking-wide text-gray-800 dark:text-gray-100 text-center">
                Hashh Automations
              </span>
              <span className="text-xs font-semibold tracking-wider">Nov 2023 - Jan 2024</span>
            </div>

            {/* Back Side */}
            <div className="card__back absolute inset-0 p-4 sm:p-6 bg-transparent border border-gray-200 rounded-lg shadow flex flex-col items-start justify-start text-white font-semibold">
              <h5 className="mb-6 sm:mb-3 text-base sm:text-lg font-bold self-center">Responsibilities</h5>
              <ul className="text-xs list-disc px-2 space-y-8 leading-2">
                <li>Learned and implemented Ant Design (ANTD) components to
                  create responsive and user - friendly interfaces. Gained experience in basic Figma and UI/UX design enhancements. </li>
                <li>Designed and developed pages for an automation web application.
                  ensuring seamless functionality.</li>
                <li>Collaborated with the team to refine application workflows and improve user experience.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full sm:w-80 h-96 mb-6 sm:mb-0 flex justify-center">
          <div className="card__content relative w-[300px] h-full transform transition-transform duration-1000">
            {/* Front Side */}
            <div className="card__front absolute inset-0 p-6 sm:p-10 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={logo3} className="w-28 sm:w-28 h-28 mb-4 sm:mb-7" />
              <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl tracking-wide font-medium text-gray-900 dark:text-white text-center">
                Process Executive
              </h5>

              <span className="text-base sm:text-sm mb-2 sm:mb-3 tracking-wide text-gray-800 dark:text-gray-100 text-center">
                Cognizant
              </span>
              <span className="text-xs font-bold tracking-wider">Jan 2024 - Jan 2025</span>
            </div>

            {/* Back Side */}
            <div className="card__back absolute inset-0 p-4 sm:p-6 bg-transparent border border-gray-200 rounded-lg shadow flex flex-col items-start justify-start text-white font-semibold">
              <h5 className="mb-6 sm:mb-3 text-base sm:text-lg font-bold self-center">Responsibilities</h5>
              <ul className="list-disc px-2 space-y-6 sm:space-y-4 leading-6 sm:leading-8 text-xs sm:text-sm">
                <li>
                  Achieved a significant reduction in error rates through the implementation of quality control measures and continuous training programs.
                </li>
                <li>
                  Collaborated with the team to refine clients' workflows and improve client experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Experience;
