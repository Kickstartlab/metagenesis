import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';
import Destination from './components/Destination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
