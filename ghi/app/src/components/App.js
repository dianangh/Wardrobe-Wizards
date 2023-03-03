import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesForm from './Shoes/ShoesForm';
import ShoeList from './Shoes/ShoesList';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<MainPage />} />

        <Route path="shoes">
          <Route index element={<ShoeList />} />
          <Route path="new" element={<ShoesForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
