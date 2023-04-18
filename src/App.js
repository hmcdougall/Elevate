import './App.css';
import Camps from './Pages/Camps';
import Home from './Pages/Home';
import July2022Article from './Pages/July2022Article';
import Mission from './Pages/Mission';
import Team from './Pages/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="team" element={<Team />} />
            <Route path="mission" element={<Mission />} />
            <Route path="camps" element={<Camps />} />
            <Route path="articles/july2022camp" element={<July2022Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;