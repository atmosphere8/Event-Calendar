import "./assets/styles/App.css";
import Arrow from "./assets/images/Arrow.svg";

function App() {
  return (
    <>
      <body className="page">
        <header className="header page__header">
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
                <img className="nav__vector" src={Arrow} alt="ArrowVector" />
              </a>
              <a className="nav__link" href="">
                24.06.2023
                <img className="nav__vector" src={Arrow} alt="ArrowVector" />
              </a>
              <a className="nav__link" href="">
                Rock Concert
                <img className="nav__vector" src={Arrow} alt="ArrowVector" />
              </a>
            </div>
          </nav>
        </header>

        <footer className="footer page__footer"></footer>
      </body>
    </>
  );
}

export default App;
