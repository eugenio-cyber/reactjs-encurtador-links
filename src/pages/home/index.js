import React, { useState } from "react";
import { FiLink } from "react-icons/fi";

import Api from "../../services/api";
import { putLink } from "../../services/storage";

import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import Logo from "../../assets/img/logo.png";
import ModalRepeat from "./RepeatLink";
import "./home.css";

export default function Home() {
  const [link, setLink] = useState("");
  const [textModal, setTextModal] = useState("");
  const [modalLink, setModalLink] = useState(false);
  const [modalRepeat, setModalRepeat] = useState(false);
  const [data, setData] = useState();

  async function showLink() {
    try {
      const responsive = await Api.post("/shorten", {
        long_url: link,
      });

      setData(responsive.data);
      setModalLink(true);
      putLink("encurtaLink", responsive.data);
      setLink("");
    } catch {
      setModalRepeat(true);
      setTextModal("O link digitado não é compatível");
      setLink("");
    }
  }

  return (
    <div id="container-home">
      <div className="logo">
        <img src={Logo} alt="Logo do encurtador de links" />
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

      {modalLink && (
        <Modal
          close={() => {
            setModalLink(false);
          }}
          content={data}
        />
      )}

      {modalRepeat && (
        <ModalRepeat
          close={() => {
            setModalRepeat(false);
          }}
          text={textModal}
        />
      )}
    </div>
  );
}
