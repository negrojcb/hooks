import Loading from "./Loading";

const Character = ({ character, loading, error, name, img }) => {
  return (
    <>
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      {character && (
        <div>
          <h2>{name}</h2>
          <img src={img} alt={name} />
        </div>
      )}
    </>
  );
};

export default Character;
