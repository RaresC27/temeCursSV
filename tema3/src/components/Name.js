import PropTypes from "prop-types";
import { useState } from "react";
const Name = (props) => {
  const [style, setStyle] = useState("withoutColor");

  const changeStyle = () => {
    if (style === "withoutColor") setStyle("color");
    else {
      setStyle("withoutColor");
    }
  };

  return (
    <div>
      <div
        className={style}
        style={{ cursor: "pointer" }}
        onClick={changeStyle}
      >
        {props.username}
      </div>
    </div>
  );
};

Name.propTypes = {
  nume: PropTypes.string,
  culoare: PropTypes.string,
};
Name.defaultProps = {
  nume: "Nume inexistent",
  culoare: "",
};

export default Name;
