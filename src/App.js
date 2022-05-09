import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidbar from "./components/Sidbar/Sidbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Sidbar />
      <Profile />
      <Routes>
        <Route path="/photo" element={<Main />} />
        <Route path="/photo" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
