import { FaHatWizard } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';

const Education = () => {
  return (
    <div className="py-20 px-4 sm:px-6">
      {/* Title Section */}
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Education</h1>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative flex justify-center items-center">
        {/* Left Content */}
        <div className="absolute left-[10%] xl:left-[20%] top-24 flex flex-col items-end space-y-4">
          <div>
            <FaHatWizard className='text-2xl mb-1' />
            <h3 className="text-xl mb-2 font-semibold">Bachelor's Degree</h3>
            <p className="text-base mb-2">Bsc - Computer Technology</p>
            <p className="mb-2 text-gray-400">2017 - 2020</p>
            <p className="mb-2">Nallamuthu Gounder Mahalingam College <br /> Coimbatore, Pollachi</p>
            <p>CGPA : 6.2%</p>
          </div>
        </div>

        <div className="absolute left-[10%] xl:left-[20%] top-[480px] flex flex-col items-end space-y-4">
          <div>
            <IoSchoolSharp className='text-2xl mb-1' />
            <h3 className="text-xl mb-2 font-semibold">Secondary School</h3>
            <p className="text-base mb-2">Bsc - Computer Technology</p>
            <p className="mb-2 text-gray-400">2017 - 2020</p>
            <p className="mb-2">T.R.H.S School Coimbatore, Pollachi</p>
            <p>CGPA : 6.2%</p>
          </div>
        </div>

        {/* Centered Vertical Line */}
        <div className="h-screen border-l-2 border-gray-500 ml-[50%]"></div>

        {/* Right Content */}
        <div className="absolute right-[10%] xl:right-[20%] top-[280px] flex flex-col items-end space-y-4">
          <div>
            <IoSchoolSharp className='text-2xl mb-1' />
            <h3 className="text-xl mb-2 font-semibold">High Secondary School</h3>
            <p className="text-base mb-2">Computer Science</p>
            <p className="mb-2 text-gray-400">2016 - 2017</p>
            <p className="mb-2">T.R.H.S School Coimbatore, Pollachi</p>
            <p>CGPA : 6.2%</p>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Card-based) */}
      <div className="md:hidden space-y-6 ">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
          <FaHatWizard className='text-2xl mb-1' />
          <h3 className="text-xl mb-2 font-semibold">Bachelor's Degree</h3>
          <p className="text-base mb-2">Bsc - Computer Technology</p>
          <p className="mb-2 text-gray-100">2017 - 2020</p>
          <p className="mb-2">Nallamuthu Gounder Mahalingam College, Coimbatore, Pollachi</p>
          <p>CGPA : 6.2%</p>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
          <IoSchoolSharp className='text-2xl mb-1' />
          <h3 className="text-xl mb-2 font-semibold">Secondary School</h3>
          <p className="text-base mb-2">Bsc - Computer Technology</p>
          <p className="mb-2 text-gray-100">2017 - 2020</p>
          <p className="mb-2">T.R.H.S School Coimbatore, Pollachi</p>
          <p>CGPA : 6.2%</p>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
          <IoSchoolSharp className='text-2xl mb-1' />
          <h3 className="text-xl mb-2 font-semibold">High Secondary School</h3>
          <p className="text-base mb-2">Computer Science</p>
          <p className="mb-2 text-gray-100">2016 - 2017</p>
          <p className="mb-2">T.R.H.S School Coimbatore, Pollachi</p>
          <p>CGPA : 6.2%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;