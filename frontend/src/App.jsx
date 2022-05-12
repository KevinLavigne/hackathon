import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import NavBar from "../src/pages/NavBar";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Error404 from "./pages/error404";
import PageProfil from "./pages/PageProfil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageProfil" element={<PageProfil />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
