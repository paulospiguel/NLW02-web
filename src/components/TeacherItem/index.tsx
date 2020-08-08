import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import Button from "../Button";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleWhatsapp(whatsappNumber: string) {
    api.post("connections", {
      user_id: teacher.id,
    });
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Avatar do usuário" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <Button type="button" onClick={() => handleWhatsapp(teacher.whatsapp)}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </Button>
      </footer>
    </article>
  );
};

export default TeacherItem;
