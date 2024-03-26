import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigace from "./Navigace";
import Pocitadlo from './Pocitadlo';
import Home from './Home';
import NoPage from './NoPage';
import Eshop from './eshop/Eshop';
import OblibenaBarva from './oblibena_barva/OblibenaBarva';

export default function App() {
  return (
    <HashRouter basename='/'>
      
      <Navigace/>

      <Routes>
          <Route index element={<Home />} />
          <Route path="/pocitadlo" element={<Pocitadlo />} />
          <Route path="/eshop" element={<Eshop />} />
          <Route path="/oblibena-barva" element={<OblibenaBarva />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
   
    </HashRouter>
  );
}
