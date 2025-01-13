import InputsTexto from "../InputTexto";
import "./Formulario.css";

const Formulario = () => {
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
      </form>
    </section>
  );
};

export default Formulario;
