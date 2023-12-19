import "@styles/Events.css";

import Vector from "@images/vector.svg";
import Point from "@images/point.svg";
import summerfest from "@images/summerfest.png";
import jazz from "@images/jazz.png";
import street from "@images/street.png";

function Events() {
  return (
    <section className="events">
      <div className="events__header">
        <h2 className="header__text">Top 5 Events</h2>
        <div className="header__arrow">
          <img className="header__arrow-left" src={Vector} alt="" />
          <img className="header__arrow-right" src={Vector} alt="" />
        </div>
      </div>

      <div className="events__list">
        <div className="event">
          <img className="event__image" src={summerfest} alt="" />

          <div className="event__text">
            <div className="event__location">
              <img className="location__point" src={Point} alt="" />
              <p className="location__text">SUBSTANCE SKATEPARK BROOKLYN</p>
            </div>
            <h2 className="text__main">NPCC SUMMER FEST 2022: SUPER TIGHT</h2>
            <p className="text__description">
              Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm.
              Prena nås. Ovuning ren tetralig mivis tidat samt resk. Dekare
              teledåde inteр antekadör!
            </p>
            <div className="event__button">
              <a className="button__item" href="">
                <p className="button__text">More about event</p>
              </a>
            </div>
          </div>
        </div>
        <div className="event">
          <img className="event__image" src={jazz} alt="" />

          <div className="event__text">
            <div className="event__location">
              <img className="location__point" src={Point} alt="" />
              <p className="location__text">
                MUSIC HALL OF WILLIAMSBURG | BROOKLYN
              </p>
            </div>
            <h2 className="text__main">JAZZ IS DEAD WITH EBO TAYLOR</h2>
            <p className="text__description">
              Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm.
              Prena nås. Ovuning ren tetralig mivis tidat samt resk. Dekare
              teledåde inteр antekadör!
            </p>
            <div className="event__button">
              <a className="button__item" href="">
                <p className="button__text">More about event</p>
              </a>
            </div>
          </div>
        </div>
        <div className="event">
          <img className="event__image" src={street} alt="" />

          <div className="event__text">
            <div className="event__location">
              <img className="location__point" src={Point} alt="" />
              <p className="location__text">SUBSTANCE SKATEPARK BROOKLYN</p>
            </div>
            <h2 className="text__main">JAZZ IS DEAD WITH EBO TAYLOR</h2>
            <p className="text__description">
              Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm.
              Prena nås. Ovuning ren tetralig mivis tidat samt resk. Dekare
              teledåde inteр antekadör!
            </p>
            <div className="event__button">
              <a className="button__item" href="">
                <p className="button__text">More about event</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
