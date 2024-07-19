import Marquee from "react-fast-marquee";

const TitleMarquee = ({ data, dir }) => {
  const repeatedText = Array(20).fill(data).join(" ");
  return (
    <div className="min-h-28 overflow-hidden">
      <Marquee
        className="mx-5"
        direction={dir}
        speed={150}
        gradient={true}
        gradientColor={[255, 0, 0]}
        gradientWidth={200}
      >
        <p className="strokeText font-sans tracking-wider">{repeatedText}</p>
      </Marquee>
    </div>
  );
};

export default TitleMarquee;