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
    </div>
  );
}

export default App;
