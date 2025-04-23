const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        console.log("i am click");
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.screenY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      {/* <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow-down" />
        </div>
      </div> */}

      <div className="cta-button group relative flex items-center justify-between w-full h-full px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
        <span className="text-white font-semibold text-base sm:text-lg tracking-wide">
          {text}
        </span>
        <div className="ml-3">
          <img
            src="/images/arrow-down.svg"
            alt="arrow-down"
            // className="bounceArrow w-4 h-4 transition-transform group-hover:translate-y-1"
            className="w-4 h-4 animate-bounce"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
