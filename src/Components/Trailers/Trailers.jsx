// SCSS
import "./Trailers.scss";

// img
import JasonBourne from "../../img/JasonBourne.png";

export default function Trailers() {
  return (
    <>
      <div className="parent2">
        <div className="column2">
          <p className="column-title">TRAILERS</p>
        </div>
        <div className="filmInfo">
          <div className="filmDescription">
            <div className="up">
              <img src={JasonBourne} alt="img" />
              <div className="info">
                <p className="title">Jason Bourne</p>
                <div className="year" id="info-title">
                  <p className="info-p">year</p>
                  <span>2016</span>
                </div>
                <div className="country" id="info-title">
                  <p className="info-p">country</p>
                  <span>USA</span>
                </div>
                <div className="director" id="info-title">
                  <p className="info-p">director</p>
                  <span>Paul Greengrass</span>
                </div>
                <div className="genres" id="info-title">
                  <p className="info-p">genres</p>
                  <span>action | thriller</span>
                </div>
                <div className="budget" id="info-title">
                  <p className="info-p">budget</p>
                  <span>$120 000 000</span>
                </div>
                <div className="duration" id="info-title">
                  <p className="info-p">duration</p>
                  <span>123min</span>
                </div>
              </div>
            </div>
            <div className="down">
              <p className="downText">
                You might remember the Dell computer commercials in which a
                youth reports this exciting news to his friends that they are
                about to get their new computer by telling them.
              </p>
            </div>
          </div>
          <div className="filmTrailer"></div>
        </div>
      </div>
    </>
  );
}
