import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
    <div className="error-container">
      <img src="/notfound.png" alt="Imagem de página não encontrada" />
      <h2>Página não encontrada!</h2>
      <Link to="/">Voltar para página pricipal</Link>
    </div>
  );
}
