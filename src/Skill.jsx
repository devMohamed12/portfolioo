const Skill = ({ skill: { image, name } }) => {
  return (
    <div className="text-center py-3 rounded-xl min-w-28">
      <img src={image} alt={name} className="max-w-full" />
      <h3 className="text-[#3ec1b9] uppercase font-bold  mt-5  ">{name}</h3>
    </div>
  );
};

export default Skill;
