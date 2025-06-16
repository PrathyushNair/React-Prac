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
<UserDisplay/>
    </>
  )
}

export default App
