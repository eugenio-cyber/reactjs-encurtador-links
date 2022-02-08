// bibliotecas
import { FiX, FiClipboard } from "react-icons/fi";

// estilos
import "./modal.css";

export default function Modal({ close, content }) {
  async function copy() {
    await navigator.clipboard.writeText(content.link);
    alert("Link copiado");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={close}>
          <FiX color="#212121" size={20} />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-btn" onClick={copy}>
        {content.link}
        <FiClipboard color="#eeeeee" size={14} />
      </button>
    </div>
  );
}
