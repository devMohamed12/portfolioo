import { useEffect, useState } from "react";

import "./style.css";

const Circlee = ({ sectionIndex }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rotationAngle = isLargeScreen
    ? sectionIndex * 90
    : (sectionIndex + 1) * 90;

  const childCircle =
    "flex text-center items-center justify-center bg-[#ebeced] w-1/5 h-1/5 rounded-full absolute  ";

  return (
    <>
      <div
        class=" transition duration-1000 circle mx-auto bg-[#187892]  rounded-full relative max-lg:-bottom-[25%] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] "
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        <div class={`${childCircle} top-[37%] left-[10%] max-lg:-rotate-90`}>
          <p>
            about
            <br />
            me
          </p>
        </div>

        <div class={`${childCircle}  top-[7%] left-[40%] lg:rotate-90`}>
          <p>
            contact <br /> me
          </p>
        </div>
        <div
          class={`${childCircle} top-[37%] left-[72%]  max-lg:rotate-90  lg:rotate-180 `}
        >
          <p>project</p>
        </div>
        <div
          class={`${childCircle} top-[70%] left-[40%]  max-lg:rotate-180 lg:rotate-90`}
        >
          <p>skills </p>
        </div>
      </div>
      {/* <div>{I}</div>
      <div>{sectionIndex}</div> */}
    </>
  );
};

export default Circlee;

// const Products = ({ I , idx }) => {

//     return (
//         <div>

//         {
//             products.map((product, idxx) => (
//                 <Product product={ product} I={I} idx={idx}/>

//             )
//         )
//     }
//     </div>
//     )
// }

// const Product = ({product ,  I , idx }) => {
//      console.log(I, "I");
//     console.log(idx, "Idx");

//     const product = products[0].title;

//     // console.log(data);
//     return (
//         <div className="text-2xl text-teal-600 font-extrabold"> test {I}

//             <br />
//             idx {idx}

//             <br />
//             <h2 className="text-2xl text-teal-600 font-extrabold">
//                 {product.title}
//             </h2>
//         </div>
//     )
// }
