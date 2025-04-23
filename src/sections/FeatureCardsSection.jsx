import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { abilities } from "../constants";
import { fadeIn } from "../utils/motion";
const AbilitiesCard = ({ index, imgPath, title, desc }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      // tiltMaxAngleX={45}
      // tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      speed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="card-border rounded-xl p-8 flex flex-col gap-4 min-h-[300px] bg-tertiary"
      >
        <div className="size-14 flex items-center justify-center rounded-full bg-white/10">
          <img src={imgPath} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
        <p className="text-white-50 text-lg">{desc}</p>
      </motion.div>
    </Tilt>
  );
};
const FeatureCardsSection = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols gap-8">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <AbilitiesCard
            key={title}
            index={index}
            imgPath={imgPath}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardsSection;
