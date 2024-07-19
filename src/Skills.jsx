import { motion } from "framer-motion";
import { Skill } from "./export";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="lg:w-3/4 w-[90%] my-8"
    >
      <p
        className="my-5"
      >
        Always love to learn new skills. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni error corporis iste aliquid. Dolor explicabo ab
        dolorem perspiciatis animi provident dicta. Aliquam ratione consequuntur
        explicabo deserunt nisi quaerat corporis voluptatibus.
      </p>

      
      <div className="flex  gap-12 w-full overflow-x-scroll">
        {data.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 1 }} // Staggered delay
            className=""
          >
            <Skill skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
