import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
// import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/about' element={<About></About>}></Route> */}


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
