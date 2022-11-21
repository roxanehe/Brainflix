import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Upload from "./components/Upload/Upload.jsx";
import SingleVideo from "./pages/SingleVideo.jsx";
import UploadSuccess from "./components/UploadSuccess/UploadSuccess.jsx";

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
