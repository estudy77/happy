function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
export default Card;
