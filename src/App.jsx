import './App.css'
import {Routes , Route} from "react-router-dom"
import MainPage from './components/MainPage/MainPage'

function App() {
  

  return (
    <div className="container my-3">
      <h1 className="text-center">Breaking Bad Wiki</h1>
      <hr />
      
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </div>
  )
}

export default App
