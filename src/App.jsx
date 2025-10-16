import Game from "./components/Game";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Game />
        <Footer />
      </div>
    </>
  );
}

export default App;
