

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from './Components/Index';
import NorW from './Components/NorW';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Index/>}/>
          <Route path='/:input' element={<NorW/>}/>
          <Route path='/:input/:textColor/:bgColor' element={<NorW/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
