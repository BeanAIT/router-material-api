import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigace from "./Navigace";
import Pocitadlo from './Pocitadlo';
import Home from './Home';
import NoPage from './NoPage';
import Eshop from './eshop/Eshop';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigace />}>
          <Route index element={<Home />} />
          <Route path="pocitadlo" element={<Pocitadlo />} />
          <Route path="eshop" element={<Eshop />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
