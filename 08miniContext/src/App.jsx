
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Mere Bache Mene Tumse kaha tha, Yudha bhumi yudha ho usse pehale Manobhumi me khela jata hai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
