import "@styles/pages/AboutEvent/Event.css";

import Jazz from "@images/jazz.png";
import Instagram from "@images/instagram.svg";
import Facebook from "@images/facebook.svg";
import Twitter from "@images/twitter.svg";
import Email from "@images/mail.svg";

function Event() {
  return (
    <>
      <section className="about-event">
        <div className="about-event__image">
          <img className="image__item" src={Jazz} alt="" />
        </div>
        <p className="about-event__text">JAZZ IS DEAD WITH EBO TAYLOR</p>
        <div className="info__name">
          <div className="title__left">
            <p className="title__item">Date and time</p>
            <p className="title__item">Location</p>
          </div>
          <div className="title__right">
            <p className="title__item">Organizator</p>
            <p className="title__item">Share Event</p>
          </div>
        </div>
        <hr className="about-event__hr" />
        <div className="info__description">
          <div className="description__left">
            <p className="description__item-date">
              THURSDAY, AUGUST 04 7PM - 11PM
            </p>
            <p className="description__item-location">
              MUSIC HALL OF WILLIAMSBURG 66 NORTH 6TH STREET BROOKLYN, NY 11211
            </p>
          </div>
          <div className="description__right">
            <p className="description__item-organizator">Nortel group</p>
            <div className="description__right-images">
              <div className="image__background">
                <a href="">
                  <img className="image__item" src={Instagram} alt="" />
                </a>
              </div>
              <div className="image__background">
                <a href="">
                  <img className="image__item" src={Facebook} alt="" />{" "}
                </a>
              </div>
              <div className="image__background">
                <a href="">
                  <img className="image__item" src={Twitter} alt="" />{" "}
                </a>
              </div>

              <div className="image__background">
                <a href="">
                  <img className="image__item" src={Email} alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="submit__button">
          <p className="button__text">Tickets</p>
        </button>
      </section>
      <h1></h1>
    </>
  );
}

export default Event;
