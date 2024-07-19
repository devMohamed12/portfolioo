import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="my-10">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,  }}
        className="text-3xl font-bold "
      >
        Iam mohamed samy{" "}
        <span className="capitalize text-teal-600 font-extrabold">
          front end developer
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9,  }}
        className="text-base text-gray-700 my-3.5 lg:my-6  w-[90%]"
      >
        Hi there! I'm a passionate developer with a knack for creating elegant
        solutions in the least amount of time. As a lifelong learner, I'm always
        looking for new challenges and opportunities to grow. My journey started
        with a curiosity for how things work, which eventually blossomed into a
        career in software development.
        <span className="block mt-5">Let's build something amazing together!</span>
      </motion.p>
    </div>
  );
};

export default AboutMe;
