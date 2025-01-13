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

  const enviarFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputsTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <InputsTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <InputsTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropdownMenu obrigatorio={true} label="Time" itens={times} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Formulario;
