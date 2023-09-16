import About from "components/about/about";
import Conditions from "components/conditions/conditions";
import Header from "components/header/header";
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
    </div>
  );
}

export default App;
