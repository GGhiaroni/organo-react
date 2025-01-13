import { useState } from "react";
import Button from "../Button";
import DropdownMenu from "../DropdownMenu";
import InputsTexto from "../InputTexto";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

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
          itens={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Formulario;
