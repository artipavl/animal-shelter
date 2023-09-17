import About from "components/about/about";
import Backgraund from "components/backgraund/backgraund";
import Conditions from "components/conditions/conditions";
import Contacts from "components/contacts/contacts";
import Footer from "components/footer/footer";
import Friend from "components/friend/friend";
import Header from "components/header/header";
import Help from "components/help/help";
import Hero from "components/hero/hero";
import Location from "components/location/location";

const style = {
  display: "flex",
  flexDirection: 'column',
  minHeight: "100vh",
}

function App() {
  return (
    <div style={style}>
    <Header />
    <Hero />
    <About />
    <Friend />
    <Conditions />
    <Location />
    <Contacts />
    <Help />
    <Footer />
    <Backgraund />
    </div>
  );
}

export default App;
