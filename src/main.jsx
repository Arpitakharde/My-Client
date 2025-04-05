
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css'
import Home from "./views/Home.jsx";
import Add from './views/Add.jsx';
import Edit from './views/Edit.jsx';

createRoot(document.getElementById('root')).render(
  <div className='bg-slate-50 m-0 p-0 min-h-screen fixed w-full'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Add' element={<Add/>}/>
            <Route path='/Edit/:userId' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
  </div>
);
