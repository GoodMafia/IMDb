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
import Card from "../Card/Card";

export default function Main() {
  const arrPosters = [
    AssasinsCreed,
    FantasticBeasts,
    DrStrange,
    WonderWoman,
    Flash,
  ];

  return (
    <main>
      <div className="parent1">
        <div className="column">
          <p className="playing">Now Playing</p>
        </div>

        {arrPosters.map((item, index) => {
          return <Card img={item} key={index} />;
        })}
        
      </div>


    </main>
  );
}
