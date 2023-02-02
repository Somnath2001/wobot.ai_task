import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Background from "./components/background/background";
import Signin from "./components/signin/signin";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="parent">
      <Header />
      <Background />
      <Signin />
      <Footer />
    </div>
  );
}

export default App;
