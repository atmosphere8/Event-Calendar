import Header from "@components/general/Header.jsx";
import Maintext from "@components/pages/Main/Main-text.jsx";
import Events from "@components/general/Events.jsx";
import Videos from "@components/pages/Main/Videos.jsx";
import Line from "@components/general/Line.jsx";
import Propose from "@components/pages/Main/Propose.jsx";
import Info from "@components/pages/Main/Info.jsx";
import Subscribe from "@components/pages/Main/Subscribe.jsx";
import Footer from "@components/general/Footer.jsx";

function Main() {
  return (
    <>
      <Header />

      <Maintext />

      <Events />

      <Videos />

      <Line />

      <Propose />

      <Info />

      <Subscribe />

      <Footer />
    </>
  );
}

export default Main;
