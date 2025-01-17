import hexToRgba from "hex-to-rgba";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  imagem,
  cargo,
  corDeFundoDoCard,
  aoDeletar,
  favorito,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
    console.log(favorito);
  }

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
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart size={25} onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
