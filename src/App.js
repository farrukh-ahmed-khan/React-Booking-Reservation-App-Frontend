import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />

        </Routes>

    </BrowserRouter>
  );
}

export default App;
