import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import Singlevideo from "./pages/Singlevideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Singlevideo />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos/:id" element={<Singlevideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
