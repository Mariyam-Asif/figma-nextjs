export default function Home() {
  return (
    <div className="bg-[#252B42] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center mb-[13px] mx-[59px] justify-between">
        <div className="flex items-center mb-[16px] mt-[17px]">
          <div className="text-white font-bold text-2xl pr-[35px] py-[13px] ml-[136px]">
            BrandName
          </div>
          <div className="flex space-x-5 text-sm ml-[41px]">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Product
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>
        </div>

        {/* Login and Join Button */}
        <div className="flex items-center ml-[351px] mr-[143px]">
          <a
            href="#"
            className="text-white text-sm font-bold mr-[45px] hover:text-gray-200"
          >
            Login
          </a>
          <button className="bg-[#23A6F0] text-white text-sm font-bold py-[15px] px-[25px] rounded-l-[5px] hover:bg-[#2facf4] whitespace-nowrap">
            JOIN US
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full flex justify-center">
        <div className="w-full mx-[197px]">
          <div className="my-20">
            <h5 className="font-bold text-[#23A6F0] text-center mx-[311px] my-10">
              Welcome
            </h5>
            <h1 className="text-white text-[58px] font-bold text-center mx-[78.5px] my-10">
              Selling on the
              <br />
              internet like a pro
            </h1>
            <h4 className="text-white text-xl text-center mx-[81.5px] my-10">
              We know how large objects will act, but things on a<br />
              small scale just do not act that way.
            </h4>
            <div className="flex justify-center space-x-4 my-10 mx-[167px]">
              <button className="bg-[#23A6F0] text-white text-[14px] font-bold py-[15px] px-[40px] rounded-[5px] hover:bg-[#52ade2]">
                Get Quote Now
              </button>
              <button className="text-[#23A6F0] text-[14px] border-[1px] border-[#23A6F0] font-bold py-[15px] px-[40px] rounded-[5px] hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex justify-center gap-[30px] my-20">
            {/* First Card */}
            <div className="bg-white py-[35px] px-[40px] w-[328px] shadow-md">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] mb-5"></div>
              <h3 className="font-bold text-base mb-5 text-[#252B42]">
                training Courses
              </h3>
              <div className="h-[2px] bg-[#E74040] w-[50px] mb-5"></div>
              <p className="text-sm font-[400] text-[#737373]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            {/* Second Card */}
            <div className="bg-white py-[35px] px-[40px] w-[328px] shadow-md">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] mb-5"></div>
              <h3 className="font-bold text-base mb-5 text-[#252B42]">
                2,769 online courses
              </h3>
              <div className="h-[2px] bg-[#E74040] w-[50px] mb-5"></div>
              <p className="text-sm font-[400]  text-[#737373] ">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            {/* Third Card */}
            <div className="bg-[#23A6F0] py-[35px] px-[40px] w-[328px] shadow-md">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-white mb-5"></div>
              <h3 className="text-white text-base mb-[20px] font-bold">
                training Courses
              </h3>
              <div className="h-[2px] w-[50px] bg-white mb-5"></div>
              <p className="text-sm font-[400]  text-white">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
