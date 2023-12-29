import "@styles/general/Events.css";
import Swiper from "swiper";
import "@styles/swipers/events-swiper.css";
import { Navigation } from "swiper/modules";

import axios from "axios";
import { useEffect, useState } from "react";

import { ArrowRight } from "@images/ArrowRight.jsx";
import { ArrowLeft } from "@images/ArrowLeft.jsx";
import Point from "@images/point.svg";

function Events() {
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/test");
      setResponse(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const eventSwiper = new Swiper(".swiper", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      eventSwiper.destroy();
    };
  }, []);

  return (
    <section className="events">
      <div className="swiper">
        <div className="arrows">
          <ArrowLeft />
          <ArrowRight />
        </div>
        <div className="swiper-wrapper events__list">
          <div className="swiper-slide event">
            <img className="event__image" src={Point} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text"></p>
              </div>
              <h2 className="text__main"></h2>
              <p className="text__description"></p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide event">
            <img className="event__image" src={Point} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text"></p>
              </div>
              <h2 className="text__main"></h2>
              <p className="text__description"></p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide event">
            <img className="event__image" src={Point} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text"></p>
              </div>
              <h2 className="text__main"></h2>
              <p className="text__description"></p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide event">
            <img className="event__image" src={Point} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text"></p>
              </div>
              <h2 className="text__main"></h2>
              <p className="text__description"></p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide event">
            <img className="event__image" src={Point} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text"></p>
              </div>
              <h2 className="text__main"></h2>
              <p className="text__description"></p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
                  <p className="button__text">MORE ABOUT EVENT</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {response.map((event) => (
          <div className="swiper-slide event" key={event.id}>
            <img className="event__image" src={event.imagePath} alt="" />

            <div className="event__text">
              <div className="event__location">
                <img className="location__point" src={Point} alt="" />
                <p className="location__text">{event.locationText}</p>
              </div>
              <h2 className="text__main">{event.title}</h2>
              <p className="text__description">{event.description}</p>
              <div className="event__button">
                <a className="button__item" href="http://localhost/#/page">
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
