import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage';
import Details from './pages/details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
