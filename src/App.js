import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import SingleVideo from "./pages/SingleVideo";
import UploadSuccess from "./components/UploadSuccess/UploadSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SingleVideo />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos/:id" element={<SingleVideo />} />
          <Route path="/uploadSuccess" element={<UploadSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
