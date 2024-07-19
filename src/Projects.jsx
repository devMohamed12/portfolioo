// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import {Project } from "./export"
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// // import "./styles.css";

// const Projects = ({ data }) => {
//   return (
//     <>
//       <Swiper
//         className="mySwiper     w-full h-full"
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         navigation
//       >
//         {data.map((project, idx) => (
//           <SwiperSlide className="w-full h-full min-h-28">
//             <Project project={project} key={idx} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Project } from "./export";

const Projects = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
  
    >
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        loop={true}
        
      >
        {data.map((project, idx) => (
          <SwiperSlide key={idx} className=" min-h-28">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Project project={project} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
