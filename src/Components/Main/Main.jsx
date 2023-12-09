// UseState
import { useState } from "react";

// SCSS
import "./Main.scss";

// Images
import AssasinsCreed from "../../img/assasins-creed.png";
import FantasticBeasts from "../../img/Fantastic.png";
import DrStrange from "../../img/Strange.png";
import WonderWoman from "../../img/WW.png";
import WatchList from "../../img/eye-svg.png";
import Info from "../../img/info-svg.png";
import Ticket from "../../img/ticket-svg.png";
import Shape from "../../img/Shape.svg"
import Flash from "../../img/flash.jpg"


export default function Main() {

  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  return (
    <main>
      {/* <div className="container1"> */}

      <div className="parent1">
        <div className="column">
          <p className="playing">Now Playing</p>
        </div>
        <div className="films">
          <div onMouseEnter={() => setFlag(!flag)} >
            <img className="preview-img" src={AssasinsCreed} alt="img" />
          </div>
          <div onMouseEnter={() => setFlag1(!flag1)} >
            <img className="preview-img" src={FantasticBeasts} alt="img" />
          </div>
          <div onMouseEnter={() => setFlag2(!flag2)} >
            <img className="preview-img" src={DrStrange} alt="img" />
          </div>
          <div onMouseEnter={() => setFlag3(!flag3)} >
            <img className="preview-img" src={Flash} alt="img" />
          </div>
          <div onMouseEnter={() => setFlag4(!flag4)} >
            <img className="preview-img" src={WonderWoman} alt="img" />
          </div>
        </div>
      </div>
      
      {flag &&  (
      <div className="whole-block" onMouseLeave={() => setFlag(!flag)}>
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
      </div>)}
      {flag1 && (<div className="whole-block2" onMouseLeave={() => setFlag1(!flag1)}>
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
      </div>)}
      {flag2 && (<div className="whole-block3" onMouseLeave={() => setFlag2(!flag2)}>
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
      </div>)}
      {flag3 && (<div className="whole-block4" onMouseLeave={() => setFlag3(!flag3)}>
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
      </div>)}
      {flag4 && (<div className="whole-block5" onMouseLeave={() => setFlag4(!flag4)}>
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
      </div>)}

      <button className="next"><img src={Shape} alt="img" /></button>
      {/* </div> */}
    </main>
  );
}
