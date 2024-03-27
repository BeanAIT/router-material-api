import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigace from "./Navigace";
import Pocitadlo from './Pocitadlo';
import Home from './Home';
import NoPage from './NoPage';
import Eshop from './eshop/Eshop';
import OblibenaBarva from './oblibena_barva/OblibenaBarva';
import { useState } from 'react';
import Vtip from './vtip/Vtip';
import VyberVtip from './vtip/VyberVtip';

export default function App() {

  const [vtip, vyberVtip] = useState('')
  const [barva, nastavBarvu] = useState('');

  return (
    <HashRouter basename='/'>
      
      <Vtip vyberVtip={vyberVtip} vtip={vtip} barva={barva}/>
      <Navigace barva={barva}/>

      <Routes>
          <Route index element={<Home />} />
          <Route path="/pocitadlo" element={<Pocitadlo />} />
          <Route path="/eshop" element={<Eshop />} />
          <Route path="/oblibena-barva" element={<OblibenaBarva barva={barva} nastavBarvu={nastavBarvu}/>} />
          <Route path="/vyber-vtip" element={<VyberVtip vyberVtip={vyberVtip}/>} />
          <Route path="*" element={<NoPage />} />
      </Routes>
   
    </HashRouter>
  );
}
