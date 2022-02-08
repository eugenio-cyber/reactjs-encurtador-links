// bibliotecas
import { FiX } from "react-icons/fi";

// estilos
import "./repeat_link.css";

export default function RepeatLink({ close, text }) {
  return (
    <div className="modal-countainer">
      <div className="modal">
        <div className="modal-repeat-header">
          <button onClick={close}>
            <FiX color="#13393a" size={24} />
          </button>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
