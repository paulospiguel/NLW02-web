import React, { useState, FormEvent } from "react";
import api from "../../services/api";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem, { ItemInterface } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();
    const response = await api.get(`/classes`, {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="Container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeacher}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Ciências", label: "Ciências" },
              { value: "Fízica", label: "Fízica" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Inglês", label: "Inglês" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Button type="submit">Buscar</Button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ItemInterface) => (
          <TeacherItem item={teacher} key={teacher.id} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
