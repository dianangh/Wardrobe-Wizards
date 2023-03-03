import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import HatList from './hats/HatList';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          < Route path="hats">
            <Route index element={<HatList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
