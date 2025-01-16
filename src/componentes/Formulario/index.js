import { useState } from "react";
import Button from "../Button";
import DropdownMenu from "../DropdownMenu";
import Input from "../Input";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    props.aoCadastrarColaborador({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={enviarFormulario}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Input
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <DropdownMenu
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
      <form
        className="formulario"
        onSubmit={(e) => {
          e.preventDefault();
          props.cadastrarTime(nomeTime, corTime);
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
        />
        <Input
          obrigatorio={true}
          type="color"
          label="Cor"
          placeholder="Cor do time"
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Formulario;
