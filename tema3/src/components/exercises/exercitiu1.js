import Produs from "../Produs";
const Exercitiu1 = () => {
  return (
    <div className="exercises">
      Exercitiu1
      <div className="produs">
        <Produs
          denumire="Ciocolata"
          pret="10lei"
          categorie="Dulciuri"
          culoare="RED"
        />
        <Produs
          denumire="Paine"
          pret="3lei"
          categorie="Produse de panificatie"
          culoare="PURPLE"
        />
        <Produs denumire="Lapte" pret="5lei" categorie="Lactate" />
      </div>
    </div>
  );
};

export default Exercitiu1;
