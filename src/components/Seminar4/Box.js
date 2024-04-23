export default function Box({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 200,
        height: 100,
        margin: 5,
      }}
    >
      {children}
    </div>
  );
}
