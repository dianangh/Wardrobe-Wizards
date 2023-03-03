import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import HatList from './hats/HatList';
import HatForm from './hats/HatForm';
import Nav from './Nav';
import ShoesForm from './Shoes/ShoesForm';
import ShoeList from './Shoes/ShoesList';


function App() {

  return (
    <BrowserRouter>
     <div className="container">
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          < Route path="hats">
            <Route index element={<HatList />} />
            <Route path="new" element={<HatForm />}/>
          </Route>
          <Route path="shoes">
            <Route index element={<ShoeList />} />
            <Route path="new" element={<ShoesForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
