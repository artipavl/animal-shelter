import About from "components/about/about";
import Header from "components/header/header";
import Hero from "components/hero/hero";

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
    </div>
  );
}

export default App;
