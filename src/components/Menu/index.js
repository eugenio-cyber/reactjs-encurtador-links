import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <a href="https://sujeitoprogramador.com/aula-2/#" className="social">
        <BsYoutube color="#eeeeee" size={28} />
      </a>
      <a href="https://sujeitoprogramador.com/aula-2/#" className="social">
        <BsInstagram color="#eeeeee" size={20} />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
