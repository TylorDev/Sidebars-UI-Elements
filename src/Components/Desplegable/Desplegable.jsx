import { useState } from "react";
import "./Desplegable.scss"; // Asegúrate de tener tu archivo de estilos SCSS
import { FaShieldHalved } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Desplegable = ({ children, name = "default" }) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };

  return (
    <div className="desplegable ">
      <div className="btn-desplegable" onClick={toggleContenido}>
        <div>
          <FaShieldHalved></FaShieldHalved> {name}
        </div>

        {mostrarContenido ? (
          <IoIosArrowUp className="Arrow"></IoIosArrowUp>
        ) : (
          <IoIosArrowDown className="Arrow"></IoIosArrowDown>
        )}
      </div>
      <div className={`${mostrarContenido ? "contenido" : "oculto"}`}>
        {mostrarContenido && children}
      </div>
    </div>
  );
};

export default Desplegable;
