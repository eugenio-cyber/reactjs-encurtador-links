import { FiX, FiClipboard } from "react-icons/fi";
import "./modal.css";

export default function Modal({ close }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={close}>
          <FiX color="#212121" size={20} />
        </button>
      </div>

      <span>https://sujeitoprogramador.com/aula-3/</span>

      <button className="modal-btn">
        https://sujeitoprogramador.com/aula-3/
        <FiClipboard color="#eeeeee" size={14} />
      </button>
    </div>
  );
}
