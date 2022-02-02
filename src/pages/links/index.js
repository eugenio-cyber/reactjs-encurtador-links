import { FiArrowLeft, FiLink } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./links.css";

export default function Links() {
  return (
    <div id="container-links">
      <div className="header-links">
        <Link to="/">
          <FiArrowLeft size={40} color="#eeeeee" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="item-links">
        <button className="link">
          <FiLink size={18} color="#d0d0d0" />
          https://sujeitoprogramador.com/aula-2/#
        </button>
        <button className="link-delete">
          <BiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="item-links">
        <button className="link">
          <FiLink size={18} color="#d0d0d0" />
          https://sujeitoprogramador.com/aula-2/#
        </button>
        <button className="link-delete">
          <BiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}
