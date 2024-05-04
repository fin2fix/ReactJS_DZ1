import "./App.css";
import ProductList from "./components/DZ6/Profile/ProductList";
import { store } from "./components/DZ6/Store/store";
import { Provider } from "react-redux";
import React from "react";
//import { useState } from "react";
//import TodoList from "./components/Seminar6/Profile/TodoList";
//import Counter from "./components/Seminar5/Counter";
//import Counter from "./components/DZ5/Counter";
//import Loading from "./components/Seminar5/Loading";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import NotFound from "./components/DZ4/NotFound";
//import ListPage from "./components/DZ4/ListPage";
//import PageDetails from "./components/DZ4/PageDetails";
//import TemperatureConverter from "./components/DZ3/TemperatureConverter";
//import TodoList from "./components/DZ3/TodoList";
//import CounterSem3 from "./components/Seminar3/CounterSem3";
//import CommentsList from "./components/DZ2/CommentsList";
//import GreetingsSem3 from "./components/Seminar3/GreetingsSem3";
//import InputText from "./components/Seminar3/InputText";
//import MessagesList from "./components/Seminar3/MessagesList";
//import ThemeSwitcher from "./components/Seminar3/ThemeSwitcher";
//import CurrentTime from "./components/Seminar1/CurrentTime";
//import "./components/Seminar1/CurrentTime.css";
//import EvenCard from "./components/Seminar1/EvenCard";
//import Greetings from "./components/Seminar1/Greetings";
//import Message from "./components/DZ1/Message";
//import Counter from "./components/Seminar2/counter";
//import TextInput from "./components/Seminar2/TextInput";
//import TaskInput from "./components/Seminar2/TaskInput";
//import TimerScreen from "./components/Seminar2/TimerScreen";
//import Box from "./components/Seminar4/Box";

// usf - useState
// ffc - function component

//import { useContext, createContext, useState } from "react";
//import ContentSite from "./components/DZ5/ContentSite";
//import Header from "./components/Seminar5/Header";
//import Profile from "./components/Seminar5/Profile";
//import Footer from "./components/Seminar5/Footer";
//export const UserContext = createContext("Guest");
//export const ThemeContext = createContext("light");

{
  /* Семинар 5-2 */
}
// const withLoadingIndicator = (Component, isLoading) => {
//   return (props) => {
//     const newProps = {...props, isLoading};
//     return <Component {... newProps}/>
//   };
// };

function App() {
  {
    /* Семинар 5-1 */
  }
  // const [theme, setTheme] = useState("light");
  // const [UserName, setUserName] = useState("Guest");

  // function changeUserName(e) {
  //   let newUserName = e.target.closest("div").querySelector("input").value;
  //   setUserName(newUserName);
  //   newUserName = "";
  // }

  // function toggleTheme() {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // }

  {
    /* Семинар 5-2 */
  }
  // const [isLoading, setisLoading] = useState(true);
  // const NewLoading = withLoadingIndicator(Loading, isLoading);

  // setTimeout(()=>{
  //   setisLoading((prev)=> !prev);
  // }, 3000);

  // const userName = useContext(UserContext);
  // const [theme, setTheme] = useState("light");

  // function toggleTheme() {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // }

  // const [pages, setPages] = useState([
  //   { name: "Articles", text: "Статьи о нашей компании" },
  //   { name: "Catalog", text: "Каталог товаров" },
  //   { name: "About", text: "Информация о нас" },
  //   { name: "Contacts", text: "Наши контакты" },
  // ]);

  // const router = createBrowserRouter([
  //   { path: "/", element: <ListPage pages={pages} /> },
  //   { path: "/detail/:pageId", element: <PageDetails pages={pages} /> },
  //   { path: "*", element: <NotFound/> },
  // ]);

  return (
    <div className="App">
      <Provider store={store}>
        <ProductList />
      </Provider>

      {/* <TodoList/> */}
      {/* <Counter/> */}
      {/* Семинар 5-2 */}
      {/* <NewLoading/> */}

      {/* <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={userName}>
          <Header />
          <Profile />
          <Footer />
          <div>
            <button onClick={toggleTheme}>Change theme</button>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider> */}

      {/* 
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={userName}>
          <ContentSite />
              <div>
            <button onClick={toggleTheme}>Change theme</button>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider> */}

      {/*
      
       <header className="App-header">
        <div>
          <Message text="Заканчивай с уроками - пойдем гулять с ребенком" />
        </div>
        <h4>Новый текст</h4>
        <p>Какой-то абзац</p>
        <Greetings />
        <CurrentTime />
        <div>
          <EvenCard
            title="Scorpions"
            date="13.04.2024 в 19.00"
            location="Москва, Лужники"
            flag="true"
          />

          <EvenCard
            title="Парк Горького"
            date="14.04.2024 в 20.00"
            location="Москва, Кремль"
          />
        </div>
      </header> 
      
      <Counter />
      <TextInput />
      <TaskInput/>
      <TimerScreen/> 
      <CommentsList/>
      <GreetingsSem3 userName="Ivan" />
      <GreetingsSem3 userName="Petr" />
      <CounterSem3 />
      <MessagesList />
      <ThemeSwitcher />
      <InputText />
      <TemperatureConverter/>
      <TodoList/>


      <Box>
        <p> First item</p>
      </Box>
      <Box>
        <p> Second item</p>
      </Box>
      <Box>
        <p> Third item</p>
      </Box> 


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter> 


      <RouterProvider router={router} />
    </div>*/}
    </div>
  );
}
export default App;
