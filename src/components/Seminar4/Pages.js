import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const lst = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Desktop" },
  { id: 3, title: "Mobile" },
];

const ListPage = () => {
  return (
    <div>
      <h1>Some list</h1>
      <ul>
        {lst.map((item) => (
          <li>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DetailPage = () => {
  const { id } = useParams();
  const item = lst.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h4>Details {id}</h4>
      <p>ID: {item.id}</p>
      <p>TITLE: {item.title}</p>
    </div>
  );
};

// Вот этот кусок должен быть в файле App.js
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;