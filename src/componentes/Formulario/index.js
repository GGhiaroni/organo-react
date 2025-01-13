import { useState } from "react";
import Button from "../Button";
import DropdownMenu from "../DropdownMenu";
import InputsTexto from "../InputTexto";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Back-end",
    "Fullstack",
    "Data Science",
    "Mobile",
    "UX e Design",
    "DevOps",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(nome, cargo, imagem, time);
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputsTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <InputsTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <InputsTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <DropdownMenu
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Formulario;
