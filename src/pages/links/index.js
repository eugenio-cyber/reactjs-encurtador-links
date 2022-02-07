// bibliotecas
import { FiArrowLeft, FiLink } from "react-icons/fi";
import { useState, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

// servicos
import { getLinks, deleteLinks } from "../../services/storage";

// componentes e estilo
import Modal from "../../components/Modal";
import "./links.css";

export default function Links() {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLink() {
      const result = await getLinks("encurtaLink");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setLinks(result);
    }

    getLink();
  }, []);

  function clickLink(link) {
    setData(link);
    setModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLinks(links, id);

    if (result.length === 0) {
      setEmptyList(true);
    }

    setLinks(result);
  }

  return (
    <div id="container-links">
      <div className="header-links">
        <Link to="/">
          <FiArrowLeft size={40} color="#eeeeee" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && (
        <div className="empty-list">
          <h2> A lista está vazia... </h2>
        </div>
      )}

      {links.map((link) => (
        <div key={link.id} className="item-links">
          <button
            className="link"
            onClick={() => {
              clickLink(link);
            }}
          >
            <FiLink size={18} color="#d0d0d0" />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <BiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      <div id="modal">
        {modal && (
          <Modal
            close={() => {
              setModal(false);
            }}
            content={data}
          />
        )}
      </div>
    </div>
  );
}
