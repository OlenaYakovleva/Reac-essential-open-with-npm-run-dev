import reactImg from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crutial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React Concepts you will need for every app</p>
    </header>
  );
}
