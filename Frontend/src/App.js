
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Single } from "./Pages/Single";
import NewHome from "./Components/NewHome";
import Footer from "./Components/Footer";
import Cards from "./Components/Card";
import Reserve from "./Components/Reserve";
import NoDataFound from "./Components/NoDataFound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel/:id" element={<Single />}></Route>
          <Route path="/navbar" element={<NewHome />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/wishlist" element={<Cards />}></Route>
          <Route path="/book/:id/:total/:days/:price" element={<Reserve />}></Route>
          <Route path="*" element={<NoDataFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
