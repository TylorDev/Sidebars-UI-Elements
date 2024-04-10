/* eslint-disable react/prop-types */
import Desplegable from "../Desplegable/Desplegable";
import "./Sidebar.scss";
import { FaShieldHalved } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="map">
        <FaMapMarkerAlt />
      </div>
      <ul className="list">
        <li className="list-item">
          <Buttom name="Dashboard"></Buttom>
        </li>
        <li className="list-item">
          <Buttom number={5} color={"#3442c3"} name={"Products"}></Buttom>
        </li>
        <li className="list-item">
          <Desplegable name="Statistics">
            <Buttom name="Transactions"></Buttom>
            <Buttom name="History"></Buttom>
          </Desplegable>
        </li>
        <div className="section">PROFILE</div>
        <li className="list-item">
          <Buttom name="Security panel"></Buttom>
        </li>
        <li className="list-item">
          <Buttom name="Billing"></Buttom>
        </li>
        <div className="section">SUPPORT</div>
        <li className="list-item">
          <Buttom name="Help Center"> </Buttom>
        </li>
        <li className="list-item">
          <Buttom name="Feedback"></Buttom>
        </li>
        <li className="list-item">
          <Desplegable name="Settings">
            <Buttom name="Change password"></Buttom>
            <Buttom name="Edit profile" number={2}></Buttom>
          </Desplegable>
        </li>
      </ul>

      <div className="current-plan">
        <div className="main-icon">
          <FaUserCircle></FaUserCircle>
        </div>
        <div className="plan">
          <p>CURRENT PLAN</p>
          <p>
            Premiun <span>12.99</span> <span>USD</span>
          </p>
          <p>12 february 2024</p>
          <Buttom name=" Update Plan"></Buttom>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
function Buttom({ number = null, color = null, name = "default" }) {
  return (
    <div className="btn-cont">
      <button className="btn">
        <p>
          {" "}
          <FaShieldHalved /> {name}
        </p>
        {number && (
          <span className="number" style={{ backgroundColor: color }}>
            {number}{" "}
          </span>
        )}
      </button>
    </div>
  );
}
