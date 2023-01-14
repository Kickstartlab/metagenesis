import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
