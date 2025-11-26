import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DomeGallery from "./components/DomeGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domegallery" element={
          <div style={{ width: '100vw', height: '100vh' }}>
<DomeGallery />
          </div>
          } />
      </Routes>
    </Router>
  );
}

export default App;









//<div style={{ width: '100vw', height: '100vh' }}>