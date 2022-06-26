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
        <Route path="/react-breaking-bad" element={<MainPage/>} />c
        <Route path="/react-breaking-bad/error" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
