import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './counter'
import { Form } from './form'
import { TodoApp } from './Reducer/todos'
import { Navbar } from './ContextApi/components/Navbar'
import { ProtectedContent } from './ContextApi/components/ProtectedContent'
import { UserDisplay } from './ContextApiWithReducer/component/UserDisplayComponent'
import { ReduxCounter } from './CounterUsingReduxToolkit/Counter'
import { ReduxPosts } from './AsynchronousReduxExample/PostsComponent'
import { MainRouter } from './Router/MainRouter'
import { NavBar } from './Router/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './Router/AuthContext/authContext'
function App() {
  const [count, setCount] = useState(0)
  console.log("App component rendered")
  return (
    <>
      {/* <Counter></Counter> */}
      {/* <Form/> */}


      {/* <TodoApp/> */} 


{/* <Navbar/>
<ProtectedContent/> */}
{/* <UserDisplay/> */}
{/* <ReduxCounter/> */}

{/* <ReduxPosts/> */}

{/* example of react router */}
<AuthProvider>
<Router>
<NavBar/>
<MainRouter/>
</Router>
</AuthProvider>


    </>
  )
}

export default App
