import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import App from './App'
import About from './components/About'
import Home from './components/Home'

import './index.css'
import Header from './components/Header'
import AboutTeam from './components/AboutTeam'
import AboutCompany from './components/AboutCompany'
import Cart from './components/Cart'
import Proudct from './components/Product'
import Error from './components/Error'

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
  <>
    <BrowserRouter>
      <Header />
      <div className='w-[500px] m-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Outlet />}>
            <Route index element={<About />} />
            <Route path='team' element={<AboutTeam />} />
            <Route path='company' element={<AboutCompany />} />
          </Route>
          <Route path='/cart' element={<App />} />
          <Route path='/proudct/:productId/:country?' element={<Proudct />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </div >
    </BrowserRouter>
  </>
)
