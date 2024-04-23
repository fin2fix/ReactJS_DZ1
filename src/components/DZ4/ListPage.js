import { NavLink } from "react-router-dom";

export default function ListPage({ pages }) {
  return (
    <>
      <h1 style={{
              textAlign: "left",
              margin: 50,
            }}>Главная страница</h1>
      <ul>
        {pages.map((page, i) => (
          <NavLink
            key={i}
            style={{
              textAlign: "left",
              fontSize: "24px",
              listStyleType: "none",
            }}
            to={`/detail/${i + 1}`}
          >
            <li>{page.name}</li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}
