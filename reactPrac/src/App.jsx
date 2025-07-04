// import { useState } from 'react'
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
import { PaginationDataDisplay } from './Pagination/PaginationDataDisplay'
import { LazyComponentLoader } from './Lazyloading/LazyComponentLoader'
import { InfiniteScroll } from './InfiniteScroll/InfiniteScroll'
import { SearchComponent } from './SearchWithDebounce/SeacrchComponent'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { StarReview } from './StarReviewComponent/starReviewComponent'
import { ToDoPane } from './DragAndDrop/toDoPane'
function App() {
  // const [count, setCount] = useState(0)
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
{/* <AuthProvider>
<Router>
<NavBar/>
<MainRouter/>
</Router>
</AuthProvider> */}
{/* 
<PaginationDataDisplay/> */}
{/* <LazyComponentLoader/> */}
{/* <InfiniteScroll/> */}
{/* <SearchComponent/> */}
{/* <ProgressBar/> */}
{/* <StarReview/> */}
<ToDoPane/>
    </>
  )
}

export default App
