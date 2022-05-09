import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidbar from "./components/Sidbar/Sidbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Sidbar />
    </div>
  );
}

export default App;
