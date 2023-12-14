import "./assets/styles/App.css";
import Arrow from "./assets/images/arrow.svg";
import Vector from "./assets/images/vector.svg";
import Point from "./assets/images/point.svg";
import summerfest from "./assets/images/summerfest.png";
import jazz from "./assets/images/jazz.png";
import street from "./assets/images/street.png";

function App() {
  return (
    <>
      <body>
        <header className="header">
          <nav className="nav">
            <div className="nav__left">
              <a className="nav__link" href="">
                Logo
              </a>
              <a className="nav__link" href="">
                Events
              </a>
              <a className="nav__link" href="">
                Propose Event
              </a>
            </div>

            <div className="nav__right">
              <a className="nav__link" href="">
                New York
                <img className="nav__vector" src={Arrow} alt="" />
              </a>
              <a className="nav__link" href="">
                24.06.2023
                <img className="nav__vector" src={Arrow} alt="" />
              </a>
              <a className="nav__link" href="">
                Rock Concert
                <img className="nav__vector" src={Arrow} alt="" />
              </a>
            </div>
          </nav>
        </header>

        <section className="main-text">
          <h1 className="text__item">
            Now is the time to Pick a cool event and let&apos;s go party!
          </h1>
        </section>

        <section className="events">
          <div className="events__header">
            <h2 className="events__text">Top 5 Events</h2>
            <div className="header__vector">
              <img className="vector__left" src={Vector} alt="" />
              <img className="vector__right" src={Vector} alt="" />
            </div>
          </div>

          <div className="events__container">
            <div className="about__event">
              <img className="event__image" src={summerfest} alt="" />

              <div className="event__header">
                <img className="header__point" src={Point} alt="" />
                <p className="header__text">SUBSTANCE SKATEPARK BROOKLYN</p>
              </div>

              <div className="event__text">
                <h2 className="text__main">
                  NPCC SUMMER FEST 2022: SUPER TIGHT
                </h2>
                <p className="text__description">
                  Lörem ipsum tiselogi kälig mår. Mono konat och antekadören
                  desm. Prena nås. Ovuning ren tetralig mivis tidat samt resk.
                  Dekare teledåde inteр antekadör!
                </p>
                <div className="event__button">
                  <a className="button__item" href="">
                    <p className="button__text">More about event</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="about__event">
              <img className="event__image" src={jazz} alt="" />

              <div className="event__header">
                <img className="header__point" src={Point} alt="" />
                <p className="header__text">
                  MUSIC HALL OF WILLIAMSBURG | BROOKLYN
                </p>
              </div>

              <div className="event__text">
                <h2 className="text__main">JAZZ IS DEAD WITH EBO TAYLOR</h2>
                <p className="text__description">
                  Lörem ipsum tiselogi kälig mår. Mono konat och antekadören
                  desm. Prena nås. Ovuning ren tetralig mivis tidat samt resk.
                  Dekare teledåde inteр antekadör!
                </p>
                <div className="event__button">
                  <a className="button__item" href="">
                    <p className="button__text">More about event</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="about__event">
              <img className="event__image" src={street} alt="" />

              <div className="event__header">
                <img className="header__point" src={Point} alt="" />
                <p className="header__text">SUBSTANCE SKATEPARK BROOKLYN</p>
              </div>

              <div className="event__text">
                <h2 className="text__main">JAZZ IS DEAD WITH EBO TAYLOR</h2>
                <p className="text__description">
                  Lörem ipsum tiselogi kälig mår. Mono konat och antekadören
                  desm. Prena nås. Ovuning ren tetralig mivis tidat samt resk.
                  Dekare teledåde inteр antekadör!
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

        <footer className="footer"></footer>
      </body>
    </>
  );
}

export default App;
