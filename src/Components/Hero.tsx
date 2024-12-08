import { ArrowDownFromLine, Hand, Loader } from "lucide-react";
import profilePicture from "../assets/pro-2.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [title, setTitle] = useState("Full Stack Developer");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const titles = ["Full Stack Developer", "MERN Developer", "Backend Developer", "Frontend Developer"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle(titles[index]);
      index = (index + 1) % titles.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="px-4 py-7 lg:py-16 mx-4 sm:mx-11 lg:mx-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center lg:order-2">
          <img src={profilePicture}
            alt="Gowthama Viknesh K"
            width={400}
            height={400}
            className="border-4 border-stone-900 rounded-full object-cover aspect-square" />

        </div>

        <div className="text-center lg:text-left lg:order-1">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-xl text-slate-200">
            <span>Hello I'm!</span>
            <Hand className="animate-wave" />
          </div>

          <h2 className="text-[1.7rem] md:text-2xl lg:text-5xl font-bold -tracking-normal mb-4 lg:text-red-400">
            Gowthama Viknesh K
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mb-6 text-sm lg:text-2xl">
            <div className="flex items-center justify-center sm:justify-start">
              <Loader className="animate-spin text-white rotate-360 text-sm mr-2" />
              <span className="text-xl bg-gradient-to-r text-white bg-clip-text text-transparent tracking-tight shadow-sm">
                {title}
              </span>
            </div>
          </div>

          <p className="leading-relaxed tracking-wider mb-7 max-w-prose text-sm sm:text-base lg:text-sm text-center lg:text-left sm:leading-snug lg:leading-loose sm:tracking-normal lg:tracking-wider">
            Passionate developer creating innovative web solutions with expertise in full-stack technologies.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex text-[14px] items-center justify-center gap-2 w-full lg:w-auto bg-stone-800 text-white rounded-full px-5 py-3 hover:bg-stone-700 transition-colors group"
            >
              Download Resume
              <ArrowDownFromLine className="group-hover:animate-bounce hidden sm:block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;;