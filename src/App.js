import About from "components/about/about";
import Conditions from "components/conditions/conditions";
import Contacts from "components/contacts/contacts";
import Header from "components/header/header";
import Help from "components/help/help";
import Hero from "components/hero/hero";
import Location from "components/location/location";

const style = {
  display: "flex",
  flexDirection: 'column',

}

function App() {
  return (
    <div style={style}>
    <Header />
    <Hero />
    <About />
    <Conditions />
    <Location />
    <Contacts />
    <Help />
    </div>
  );
}

export default App;
