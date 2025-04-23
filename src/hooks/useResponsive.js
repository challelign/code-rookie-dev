// hooks/useResponsive.js
import { useEffect, useState } from "react";

const useResponsive = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        console.log("device < 500", device);
        setDevice("mobile");
      } else if (width <= 1024) {
        console.log("device < 1024", device);

        setDevice("tablet");
      } else {
        console.log("device desktop", device);

        setDevice("desktop");
      }
    };

    updateDevice(); // Initial check
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, [device]);

  return device;
};

export default useResponsive;
