import "./styles.css";

const products = [
  { title: "Cabbage", id: 1, fruta: false },
  { title: "Garlic", id: 2, fruta: false },
  { title: "Apple", id: 3, fruta: true }
];

const listaProdutos = products.map((produto) => (
  <li
    key={produto.id}
    style={{
      color: produto.fruta ? "magenta" : "darkgreen"
    }}
  >
    {produto.title}
  </li>
));

export default function Listas() {
  return (
    <>
      <ul>{listaProdutos}</ul>
    </>
  );
}
