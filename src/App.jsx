import './App.css'
import {Routes , Route} from "react-router-dom"
import MainPage from './components/MainPage/MainPage'
import Error from "./components/Error";
function App() {
  

  return (
    <div className="container my-3">
      <h1 className="text-center">Breaking Bad Wiki</h1>
      <hr />
      
      <Routes>
        <Route path="/1" element={<MainPage/>} />
        <Route path="/error1" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
