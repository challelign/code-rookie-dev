import { socialImgs } from "../constants";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.urlLing}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
              {/* <img src={socialImg.imgPath} alt="social icon" /> */}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Challelign T. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
