import React, { useContext } from "react";
import "./Head.css";
import ScrollContext from "./ScrollContext";

const img = "/img/logo.png";

function Header() {
  const itemRef = useContext(ScrollContext);
  const handleClick = (item) => {
    const ref = itemRef.current[item];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="place_name">
        <p>Гандональдз</p>
        <img src={img} />
      </div>
      <div className="header">
        <div className="bar">
          <ul className="list">
            <li onClick={() => handleClick("item_1")}>Бургеры</li>
            <li onClick={() => handleClick("item_2")}>Роллы</li>
            <li onClick={() => handleClick("item_3")}>Стартеры</li>
            <li onClick={() => handleClick("item_4")}>Напитки</li>
            <li onClick={() => handleClick("item_5")}>Десерты</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
