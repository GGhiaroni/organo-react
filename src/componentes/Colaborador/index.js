import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corDeFundoDoCard, aoDeletar }) => {
  return (
    <div className="colaborador">
      <div className="deletar" onClick={aoDeletar}>
        deletar
      </div>
      <div className="cabecalho" style={{ backgroundColor: corDeFundoDoCard }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
