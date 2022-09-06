import { Routes, Route, Navigate } from "react-router-dom"

import { Menu } from './components/Menu'


import { HomePage } from './pages/Home'
import { CatalogPage } from './pages/Catalog'
import { BurgerPage} from './pages/Burger'
import {BussnessMenu} from './pages/BussnessMenu'



import './App.scss'

const App = () => (
  <div className="App">
    
    <Menu />
    <Routes>
      <Route path="menu">
        <Route path=":category" element={<CatalogPage />} />
        <Route index element={<Navigate to="/" />} />
      </Route>

      <Route path="burgers">
        <Route path=":id" element={<BurgerPage />} />
        <Route index element={<Navigate to="/" />} />
      
      </Route>
      <Route index element={<HomePage />} />


      <Route path="business-menu">
        <Route path=": business-menu" element={<BussnessMenu />} />
        <Route index element={<Navigate to=": /" />} />
     
      </Route>

    </Routes>

 
 
      

  </div>
)

export default App