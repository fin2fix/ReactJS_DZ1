import { useParams, NavLink } from "react-router-dom";

export default function PageDetails({ pages }) {
  const params = useParams();
  return (
    <>
      {pages
        .filter((_, i) => i === +params.pageId - 1)
        .map((page, i) => (
          <div key={i}>
            <h1>{page.text}</h1>
            <NavLink
              style={{ textAlign: "center", fontSize: "24px", listStyleType: "none" }}
              to={"/"}
            >
              <li>Back</li>
            </NavLink>
          </div>
        ))}
    </>
  );
}
