import "./style.css";
const CharCard = ({ char: { name, image, species, status } }) => {
  return (
    <>
      {status === "Alive" ? (
        <div className="card">
          <label>{species}</label>
          <label>{name}</label>
          <img src={image} alt={name} />
        </div>
      ) : (
        <div className="cardTwo">
          <label>{species}</label>
          <label>{name}</label>
          <img src={image} alt={name} />
        </div>
      )}
    </>
  );
};

export default CharCard;
