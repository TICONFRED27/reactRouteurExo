import {} from 'react'
import './App.css'
import{createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>accueil</div>
  }
])

function App() {
  return (
    
      <div className='container my-4'>
        Bonjour tout le monde
      </div>
      
    
  )
}

export default App
