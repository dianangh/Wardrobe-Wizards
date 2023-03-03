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
      <Nav />
<<<<<<< HEAD
      <Routes>
        <Route path="" element={<MainPage />} />

        <Route path="shoes">
          <Route index element={<ShoeList />} />
          <Route path="new" element={<ShoesForm />} />
        </Route>
      </Routes>
=======
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          < Route path="hats">
            <Route index element={<HatList />} />
            <Route path="new" element={<HatForm />}/>
          </Route>
        </Routes>
      </div>
>>>>>>> da5b6a17a4b35371808419af315984f70408df0e
    </BrowserRouter>
  );
}

export default App;
