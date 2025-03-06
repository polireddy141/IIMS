import React from 'react'
import Poli from './Components/Poli'
import Adi from './Components/Adi'
import Ray from './Components/Ray'


import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/poli' element = {<Poli/>} />
        <Route path='/adi' element = {<Adi/>} />
        <Route path='/ray' element = {<Ray/>} />
        
        

      </Routes>
    
    </div>
  )
}

export default App



