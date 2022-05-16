import PropTypes from "prop-types";
const Produs = (props) => {
  return (
    <div className="produs-style">
      <div>Denumire: {props.denumire}</div>
      <div>Pret: {props.pret}</div>
      <div style={{ color: props.culoare }}>Categorie: {props.categorie}</div>
    </div>
  );
};
Produs.propTypes = {
  categorie: PropTypes.string,
  denumire: PropTypes.string,
  pret: PropTypes.string,
};
Produs.defaultProps = {
  denumire: "Denumire inexistenta",
  pret: "Pret inexistent",
  categorie: "Categorie inexistenta",
  culoare: "",
};
export default Produs;
