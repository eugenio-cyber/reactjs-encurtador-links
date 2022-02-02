import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import "./home.css";

export default function Home() {
  return (
    <div id="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Logo do encurtador de links" />
        <h1>Meu Link</h1>
        <h4>Para encurtar seu link cole abaixo 👇</h4>
      </div>

      <div className="input-area">
        <div>
          <FiLink size={24} color="#eeeeee" />
          <input placeholder="Cole seu link aqui..." />
        </div>
        <button>Gerar link</button>
      </div>

      <Menu />
    </div>
  );
}
