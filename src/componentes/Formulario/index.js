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

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputsTexto label="Nome" placeholder="Digite o seu nome" />
        <InputsTexto label="Cargo" placeholder="Digite o seu cargo" />
        <InputsTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropdownMenu label="Time" itens={times} />
      </form>
    </section>
  );
};

export default Formulario;
