import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import Button from "../Button";

export interface ItemInterface {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  item: ItemInterface;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ item }) => {
  const { avatar, bio, cost, name, subject, whatsapp } = item;

  function handleWhatsapp(value: string) {
    window.location.href = `https://wa.me/${value}>`;
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Avatar do usuário" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>

        <Button type="button" onClick={() => handleWhatsapp(whatsapp)}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </Button>
      </footer>
    </article>
  );
};

export default TeacherItem;
