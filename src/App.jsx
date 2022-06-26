import './App.css'
import {Routes , Route} from "react-router-dom"
import MainPage from './components/MainPage/MainPage'
import Error from "./components/error";
function App() {
  

  return (
    <div className="container my-3">
      <h1 className="text-center">Breaking Bad Wiki</h1>
      <hr />
      
      <Routes>
        <Route path="/react-breaking-bad" element={<MainPage/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
