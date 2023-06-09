const style = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const Loader = () => {
  return (
    <div style={style}>
      <img
        id="current-pokemon-loading"
        src="../pokeball-icon.png"
        className="loading-ball"
      />
    </div>
  );
};

export default Loader;
