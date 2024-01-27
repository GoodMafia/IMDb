import "./RecentlyViewed.scss";

import Godzilla from "../../img/Godzilla.png";
import JaredJeto from "../../img/JaredJeto.png";
import American from "../../img/American.png";
import Keanu from "../../img/Keanu.png";
import MarkHarmon from "../../img/MarkHarmon.png";
import Cynthia from "../../img/Cynthia.png";
import Austin from "../../img/Austin.png";
import DareDevil from "../../img/DareDevil.png";
import JessicaJones from "../../img/JessicaJones.png";
import HouseOfCards from "../../img/HouseOfCards.png";
import BlackMirror from "../../img/BlackMirror.png";
import Sense8 from "../../img/Sense8.png";
import Man from "../../img/Man.png";
import Woman from "../../img/Woman.png";
import GumpHappens from "../../img/GumpHappens.png";

export default function RecentlyViewed() {
  return (
    <div className="border">
      <div className="recentlyViewed container">
        <p className="title-news">Recently Viewed</p>
        <div className="manyImages">
          <img className="exactSize" src={DareDevil} alt="" />
          <img className="exactSize" src={BlackMirror} alt="" />
          <img className="exactSize" src={JessicaJones} alt="" />
          <img className="exactSize" src={HouseOfCards} alt="" />
          <img className="exactSize" src={Sense8} alt="" />
          <img className="exactSize" src={Austin} alt="" />
          <img className="exactSize" src={Woman} alt="" />
          <img className="exactSize" src={GumpHappens} alt="" />
          <img className="exactSize" src={JaredJeto} alt="" />
          <img className="exactSize" src={American} alt="" />
          <img className="exactSize" src={Keanu} alt="" />
          <img className="exactSize" src={MarkHarmon} alt="" />
          <img className="exactSize" src={Godzilla} alt="" />
          <img className="exactSize" src={Man} alt="" />
          <img className="exactSize" src={Cynthia} alt="" />
        </div>
      </div>
    </div>
  );
}
