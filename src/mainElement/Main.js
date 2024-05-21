import React, { useState, useContext, useEffect } from "react";
import Card from "../Mock/Mock";
import Image from "./img";
import "./Main.css";
import Modal from "../Modal/Modal";
import ScrollContext from "./ScrollContext";
import ScrollBlock from "./ScrollBLock";

function Main() {
  const itemRef = useContext(ScrollContext);
  const [active, setActive] = useState(false);
  const [selectItem, setSelectItem] = useState(<div></div>);
  const content = (
    <>
      <Image className="img" src={selectItem.img} alt={selectItem.name} />
      <h3 className="item_name">{selectItem.name}</h3>
      <p className="item_desc">{selectItem.desc}</p>
      <p className="item_price">{selectItem.price} р.</p>
    </>
  );

  useEffect(() => {
    if (active) {
      document.body.classList.add("modal_open");
    } else {
      document.body.classList.remove("modal_open");
    }
  }, [active]);

  function getItem(item) {
    setActive(true);
    setSelectItem(item);
  }
  return (
    <div className="main">
      <div className="menu">
        {Card.map((elem, index) => (
          <div
            id={`item_${index + 1}`}
            ref={(e) => (itemRef.current[`item_${index + 1}`] = e)}
            className="menu_wrapper"
          >
            {Object.keys(elem[0]).map((category) => (
              <>
                <div className="category">
                  <h2>{category}</h2>
                </div>
                <div className="items">
                  {Object.values(elem[0][category]).map((item) => (
                    <ScrollBlock className="animate">
                      <div
                        className="item_wrapper"
                        onClick={() => getItem(item)}
                      >
                        <img className="img" src={item.img} alt={item.name} />
                        <h3 className="item_name">{item.name}</h3>
                        <p className="item_desc">{item.desc}</p>
                        <p className="item_price">{item.price} р.</p>
                      </div>
                    </ScrollBlock>
                  ))}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      {selectItem && (
        <Modal
          active={active}
          setActive={setActive}
          activeModal="item_modal active"
          setActiveModal="item_modal"
          contentActiveModal="item_modal_content active"
          setContentActiveModal="item_modal_content"
          content={content}
        ></Modal>
      )}
    </div>
  );
}

export default Main;
