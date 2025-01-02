

import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div className='max-w-[1600px] mx-auto flex '>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
