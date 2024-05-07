
import { Route, Routes } from 'react-router-dom'
import './App.css'

//componentsler
import SiteNavBar from './Components/SiteNavBar'



//sayfalarım

import TodosFood from './Pages/TodosFood'
import NotFoundPage from './Pages/NotFoundPage'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'







function App() {
  

  return (
    <>


{/*NAVBAR*/}
<SiteNavBar></SiteNavBar>




    {/*ROUTE Chain*/}
    <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/todo' element={<TodosFood></TodosFood>}></Route>
    <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
    <Route path='giris-yap' element={<Login></Login>}></Route>





    </Routes>






    </>
  )
}

export default App
