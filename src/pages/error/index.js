import { Link } from "react-router-dom";
import "./error.css";

import notFound from "../../assets/img/not-found.png";

export default function Error() {
  return (
    <div className="error-container">
      <img src={notFound} alt="Imagem de página não encontrada" />
      <h2>Página não encontrada!</h2>
      <Link to="/">Voltar para página principal</Link>
    </div>
  );
}
