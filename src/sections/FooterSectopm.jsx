import { PhoneCallIcon } from "lucide-react";
import { socialImgs } from "../constants";

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-white py-6 mt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Terms & Conditions */}
        <div className="text-center md:text-left">
          <p className="text-sm hover:underline cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.urlLing}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <img
                src={socialImg.imgPath}
                alt="social icon"
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Right: Copyright + Phone */}
        <div className=" flex flex-col md:flex-row items-center justify-center gap-2 text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold">Challelign T.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <PhoneCallIcon size={18} className="text-yellow-400" />
            <span className="tracking-wide">0918 27 03 70</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection;
