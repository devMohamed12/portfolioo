import { motion } from "framer-motion";

const Project = ({ project }) => {
  const {
    category,
    demoLink,
    description,
    githubLink,
    image,
    title,
    usedSkills,
  } = project;

  return (
    <div
      
      className="py-12 px-12"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.0, ease: "easeInOut" }}
          className="text-2xl font-bold mb-4 uppercase rounded-xl"
        >
          {title}
        </motion.h2>
        <div>
          {usedSkills.map(({ name, backgroundColor }) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.0, ease: "easeInOut" }}
              style={{ backgroundColor }}
              className="inline-block mr-4 py-2 px-3 rounded-full text-base text-base-100"
            >
              {name}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          className="my-5"
        >
          {description}
        </motion.p>

        <div className="space-x-4 mb-5">
          <motion.a
            href={githubLink}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </motion.a>
          <motion.a
            href={demoLink}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Demo
          </motion.a>
        </div>
      </div>

      <motion.img
        src={image}
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ delay: 0.9, duration: 1.0, ease: "easeInOut" }}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Project;
