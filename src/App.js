import Context from "./Components/Context"
import Student from "./Components/Student"
import Favouritestudent from "./Components/Favouritestudent"
import { BrowserRouter, Routes,Route } from 'react-router-dom'



const App = () =>{

  return(
    <>
      <Context>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Student ></Student>}></Route>
              <Route path='/favoritestudent' element={<Favouritestudent ></Favouritestudent>}></Route>
            </Routes>
          </BrowserRouter>
      </Context>
      
    </>
  )
}

export default App
