// import { useState } from 'react'
import "./App.css";
import { Counter } from "./counter";
import { Form } from "./form";
import { TodoApp } from "./Reducer/todos";
import { Navbar } from "./ContextApi/components/Navbar";
import { ProtectedContent } from "./ContextApi/components/ProtectedContent";
import { UserDisplay } from "./ContextApiWithReducer/component/UserDisplayComponent";
import { ReduxCounter } from "./CounterUsingReduxToolkit/Counter";
import { ReduxPosts } from "./AsynchronousReduxExample/PostsComponent";
import { MainRouter } from "./Router/MainRouter";
import { NavBar } from "./Router/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Router/AuthContext/authContext";
import { PaginationDataDisplay } from "./Pagination/PaginationDataDisplay";
import { LazyComponentLoader } from "./Lazyloading/LazyComponentLoader";
import { InfiniteScroll } from "./InfiniteScroll/InfiniteScroll";
import { SearchComponent } from "./SearchWithDebounce/SeacrchComponent";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import { StarReview } from "./StarReviewComponent/starReviewComponent";
import { OtpMainComponent } from "./OtpComponent/otpMainComponent";
import { Accordian } from "./Accordian/Accordian";
import { MainSlider } from "./ImageCarousel/ImageCarousel";
function App() {
  // const [count, setCount] = useState(0)
  console.log("App component rendered");
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
      {/* <PluralsightNavbar/> */}
      {/* <OtpMainComponent/> */}
      {/* <Accordian>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Accordian> */}

      <MainSlider/>
    </>
  );
}

export default App;
