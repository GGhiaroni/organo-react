import hexToRgba from "hex-to-rgba";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  imagem,
  cargo,
  corDeFundoDoCard,
  aoDeletar,
}) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
        style={{ cursor: "pointer" }}
      />
      <div
        className="cabecalho"
        style={{ backgroundColor: hexToRgba(corDeFundoDoCard) }}
      >
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
