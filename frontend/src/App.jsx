import "./assets/styles/App.css";

import Header from "@components/Header.jsx";
import Maintext from "@components/Main-text.jsx";
import Events from "@components/Events.jsx";
import Videos from "@components/Videos.jsx";
import Line from "@components/Line.jsx";
import Propose from "@components/Propose.jsx";
import About from "@components/About.jsx";
import Subscribe from "@components/Subscribe.jsx";
import Footer from "@components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <Maintext />

      <Events />

      <Videos />

      <Line />

      <Propose />

      <About />

      <Subscribe />

      <Footer />
    </>
  );
}

export default App;
