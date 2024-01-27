import "./ThreeBlocks.scss";

import { useState } from "react";

import Godzilla from "../../img/Godzilla.png";
import JaredJeto from "../../img/JaredJeto.png";
import American from "../../img/American.png";
import Keanu from "../../img/Keanu.png";
import Salma from "../../img/Salma.png";
import MarkHarmon from "../../img/MarkHarmon.png";
import Cynthia from "../../img/Cynthia.png";
import Austin from "../../img/Austin.png";
import DareDevil from "../../img/DareDevil.png";
import JessicaJones from "../../img/JessicaJones.png";
import HouseOfCards from "../../img/HouseOfCards.png";
import BlackMirror from "../../img/BlackMirror.png";
import Sense8 from "../../img/Sense8.png";
import StrangerThings from "../../img/StrangerThings.png";
import SuicideSquad from "../../img/SuicideSquad.png";
import StarTrekBeyond from "../../img/StarTrekBeyond.png";

export default function ThreeBlocks() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="border">
      <div className="container componentClass">
        <div className="wrapperComponent">
          <div className="lastNews">
            <div className="head">
              <p className="title-news">Last News</p>
              <div>
                <div
                  id="right"
                  href="#"
                  className={toggleState === 1 ? "headLink active" : "headLink"}
                  onClick={() => toggleTab(1)}
                >
                  Top
                </div>
                <div
                  id="right"
                  href="#"
                  className={toggleState === 2 ? "headLink active" : "headLink"}
                  onClick={() => toggleTab(2)}
                >
                  Movies
                </div>
                <div
                  id="right"
                  href="#"
                  className={toggleState === 3 ? "headLink active" : "headLink"}
                  onClick={() => toggleTab(3)}
                >
                  TV
                </div>
                <div
                  href="#"
                  className={toggleState === 4 ? "headLink active" : "headLink"}
                  onClick={() => toggleTab(4)}
                >
                  Celebs
                </div>
              </div>
            </div>
          </div>
          <div className="tabs">
            <div className={toggleState === 1 ? "tab tab-active" : "tab"}>
              <div className="News">
                <img src={JaredJeto} alt="" />
                <div>
                  <p className="newsTitle">
                    Jared Leto Joins Blade Runner Sequel
                  </p>
                  <p className="newsInfo">
                    Jared Leto has joined the upcoming “Blade Runner” sequel,
                    TheWrap has learned.
                  </p>
                </div>
              </div>

              <div className="News">
                <img src={Godzilla} alt="" />
                <div>
                  <p className="newsTitle">
                    Toho to Produce First Godzilla Animation Movie
                  </p>
                  <p className="newsInfo">
                    Tokyo – Japans movie giant, Toho has announced the
                    production of a feature-length Godzilla animation.
                  </p>
                </div>
              </div>
              <div className="News">
                <img src={American} alt="" />
                <div>
                  <p className="newsTitle">
                    Watch Mysterious New American Horror Story Trailer
                  </p>
                  <p className="newsInfo">
                    Leave it to Ryan Murphy and his team from FX terrifying
                    American Horror Story to keep fans.
                  </p>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "tab tab-active" : "tab"}>
              <div className="News">
                <img src={JaredJeto} alt="" />
                <div>
                  <p className="newsTitle">
                    Jared Leto Joins Blade Runner Sequel
                  </p>
                  <p className="newsInfo">
                    Jared Leto has joined the upcoming “Blade Runner” sequel,
                    TheWrap has learned.
                  </p>
                </div>
              </div>

              <div className="News">
                <img src={Godzilla} alt="" />
                <div>
                  <p className="newsTitle">
                    Toho to Produce First Godzilla Animation Movie
                  </p>
                  <p className="newsInfo">
                    Tokyo – Japans movie giant, Toho has announced the
                    production of a feature-length Godzilla animation.
                  </p>
                </div>
              </div>
              <div className="News">
                <img src={American} alt="" />
                <div>
                  <p className="newsTitle">
                    Watch Mysterious New American Horror Story Trailer
                  </p>
                  <p className="newsInfo">
                    Leave it to Ryan Murphy and his team from FX terrifying
                    American Horror Story to keep fans.
                  </p>
                </div>
              </div>
            </div>
            <div className={toggleState === 3 ? "tab tab-active" : "tab"}>
              <div className="News">
                <img src={JaredJeto} alt="" />
                <div>
                  <p className="newsTitle">
                    Jared Leto Joins Blade Runner Sequel
                  </p>
                  <p className="newsInfo">
                    Jared Leto has joined the upcoming “Blade Runner” sequel,
                    TheWrap has learned.
                  </p>
                </div>
              </div>

              <div className="News">
                <img src={Godzilla} alt="" />
                <div>
                  <p className="newsTitle">
                    Toho to Produce First Godzilla Animation Movie
                  </p>
                  <p className="newsInfo">
                    Tokyo – Japans movie giant, Toho has announced the
                    production of a feature-length Godzilla animation.
                  </p>
                </div>
              </div>
              <div className="News">
                <img src={American} alt="" />
                <div>
                  <p className="newsTitle">
                    Watch Mysterious New American Horror Story Trailer
                  </p>
                  <p className="newsInfo">
                    Leave it to Ryan Murphy and his team from FX terrifying
                    American Horror Story to keep fans.
                  </p>
                </div>
              </div>
            </div>
            <div className={toggleState === 4 ? "tab tab-active" : "tab"}>
              <div className="News">
                <img src={JaredJeto} alt="" />
                <div>
                  <p className="newsTitle">
                    Jared Leto Joins Blade Runner Sequel
                  </p>
                  <p className="newsInfo">
                    Jared Leto has joined the upcoming “Blade Runner” sequel,
                    TheWrap has learned.
                  </p>
                </div>
              </div>

              <div className="News">
                <img src={Godzilla} alt="" />
                <div>
                  <p className="newsTitle">
                    Toho to Produce First Godzilla Animation Movie
                  </p>
                  <p className="newsInfo">
                    Tokyo – Japans movie giant, Toho has announced the
                    production of a feature-length Godzilla animation.
                  </p>
                </div>
              </div>
              <div className="News">
                <img src={American} alt="" />
                <div>
                  <p className="newsTitle">
                    Watch Mysterious New American Horror Story Trailer
                  </p>
                  <p className="newsInfo">
                    Leave it to Ryan Murphy and his team from FX terrifying
                    American Horror Story to keep fans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bornToday">
          <div className="upperBlock">
            <p className="title-news">Born Today</p>
            <div className="limitWidth">
              <div>
                <img src={Keanu} alt="" />
                <p className="label">Keanu Reeves</p>
              </div>
              <div>
                <img src={Salma} alt="" />
                <p className="label">Salma Hayek</p>
              </div>
              <div>
                <img src={MarkHarmon} alt="" />
                <p className="label">Mark Harmon</p>
              </div>
              <div>
                <img src={Cynthia} alt="" />
                <p className="label">Cynthia Watros</p>
              </div>
              <div>
                <img src={Austin} alt="" />
                <p className="label">Austin Abrams</p>
              </div>
            </div>
          </div>
          <div className="downBlock">
            <p className="title-news">See On Netflix</p>
            <div className="limitWidth">
              <div>
                <img src={DareDevil} alt="" />
                <p className="label">Daredevil</p>
              </div>
              <div>
                <img src={BlackMirror} alt="" />
                <p className="label">Black Mirror</p>
              </div>
              <div>
                <img src={JessicaJones} alt="" />
                <p className="label">Jessica Jones</p>
              </div>
              <div>
                <img src={HouseOfCards} alt="" />
                <p className="label">House Of Cards</p>
              </div>
              <div>
                <img src={Sense8} alt="" />
                <p className="label">Sense 8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wallspapers">
          <p className="title-news">Today's wallpapers</p>
          <div className="wrapperBlock">
            <div className="wallpaper">
              <img src={StrangerThings} alt="" />
            </div>
            <div className="wallpaper" id="additionalPadding">
              <img src={SuicideSquad} alt="" />
            </div>
            <div className="wallpaper" id="additionalPadding">
              <img src={StarTrekBeyond} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
