import "@styles/General/Header.css";
import Arrow from "@images/Arrow.svg";

function Header() {
  return (
    <header className="nav-header">
      <nav className="menu">
        <a className="menu__link" href="http://localhost/#/page">
          Logo
        </a>
        <a className="menu__link" href="">
          Events
        </a>
        <a className="menu__link" href="">
          Propose Event
        </a>
      </nav>

      <nav className="filter">
        <button className="filter__button" href="">
          New York
          <img className="filter__arrow" src={Arrow} alt="" />
        </button>
        <button className="filter__button" href="">
          24.06.2023
          <img className="filter__arrow" src={Arrow} alt="" />
        </button>
        <button className="filter__button" href="">
          Rock Concert
          <img className="filter__arrow  " src={Arrow} alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
