import { useState } from "react";

import WatchList from "../../img/WatchList.svg";
import Info from "../../img/Info.svg";
import Ticket from "../../img/Ticket.svg";

export default function Card({ img }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
        <img className="preview-img" src={img} alt="img" />
        <div className="positionClass">
          <div className={isHover === true ? "whole-block" : "whole-block none"}>
            <div className="wrapper">
              <img className="small-svg" src={Info} alt="img" />
              <p>Information</p>
            </div>
            <div className="wrapper">
              <img className="small-svg" src={Ticket} alt="img" />
              <p>Buy Ticket</p>
            </div>
            <div className="wrapper">
              <img className="small-svg" src={WatchList} alt="img" />
              <p>Add to watch list</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
