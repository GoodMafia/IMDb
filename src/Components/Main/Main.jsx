// SCSS
import "./Main.scss";

// Images
import AssasinsCreed from "../../img/assasins-creed.png";
import FantasticBeasts from "../../img/Fantastic.png";
import DrStrange from "../../img/Strange.png";
import WonderWoman from "../../img/WW.png";
import WatchList from "../../img/WatchList.svg";
import Info from "../../img/Info.svg";
import Ticket from "../../img/Ticket.svg";
import Shape from "../../img/Shape.svg";
import Flash from "../../img/flash.jpg";

// Components
import Card from "../Card/Card"

export default function Main() {

  const arrPosters = [AssasinsCreed, FantasticBeasts, DrStrange, WonderWoman, Flash]

  return (
    <main>


      <div className="parent1">
        <div className="column">
          <p className="playing">Now Playing</p>
        </div>
      {arrPosters.map((item, index) => {
        return (<Card img = {item} key={index} />)
      })}
        {/* <div>
          <img className="preview-img" src={AssasinsCreed} alt="img" />
        </div>
        <div>
          <img className="preview-img" src={FantasticBeasts} alt="img" />
        </div>
        <div>
          <img className="preview-img" src={DrStrange} alt="img" />
        </div>
        <div>
          <img className="preview-img" src={Flash} alt="img" />
        </div>
        <div>
          <img className="preview-img" src={WonderWoman} alt="img" />
        </div> */}
      </div>

      <div className="parent1 positionClass">
        <div className="column none">
          <p className="playing">Now Playing</p>
        </div>
        <div className="whole-block">
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
        <div className="whole-block2">
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
        <div className="whole-block3">
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
        <div className="whole-block4">
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
        <div className="whole-block5">
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

      <button className="next">
        <img src={Shape} alt="img" />
      </button>
   
    </main>
  );
}
