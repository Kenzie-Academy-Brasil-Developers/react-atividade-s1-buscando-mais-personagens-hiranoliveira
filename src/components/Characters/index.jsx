import CharCard from "../CharCards";

const Characters = ({ characters }) => {
  return (
    <div className="div1">
      {characters.map((char) => (
        <CharCard key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Characters;
