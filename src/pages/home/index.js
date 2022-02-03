import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import "./home.css";

export default function Home() {
  const [link, setLink] = useState();
  const [modal, setModal] = useState(false);

  const showLink = () => {
    setModal(true);
  };

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
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
        <button onClick={showLink}>Gerar link</button>
      </div>

      <Menu />

      {modal && (
        <Modal
          close={() => {
            setModal(false);
          }}
        />
      )}
    </div>
  );
}
