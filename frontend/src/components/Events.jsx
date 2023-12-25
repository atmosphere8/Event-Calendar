import "@styles/Events.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Vector from "@images/vector.svg";
import Point from "@images/point.svg";

function Events() {
  const [response, setResponse] = useState([]);
  const fetchData = async () => {
    await axios.get("http://localhost:3000/test").then((response) => {
      setResponse(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {response.map((event) => (
          <div className="event" key={event.id}>
            <img className="event__image" src={event.imagePath} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text">{event.locationText}</p>
              </div>
              <h2 className="text__main">{event.title}</h2>
              <p className="text__description">{event.description}</p>
              <div className="event__button">
                <a className="button__item" href="">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>
        ))}
        {response.map((event) => (
          <div className="event" key={event.id}>
            <img className="event__image" src={event.imagePath} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text">{event.locationText}</p>
              </div>
              <h2 className="text__main">{event.title}</h2>
              <p className="text__description">{event.description}</p>
              <div className="event__button">
                <a className="button__item" href="">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>
        ))}
        {response.map((event) => (
          <div className="event" key={event.id}>
            <img className="event__image" src={event.imagePath} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text">{event.locationText}</p>
              </div>
              <h2 className="text__main">{event.title}</h2>
              <p className="text__description">{event.description}</p>
              <div className="event__button">
                <a className="button__item" href="">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
