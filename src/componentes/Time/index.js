import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({
  time,
  colaboradores,
  aoDeletar,
  alterarCorDoTime,
  aoFavoritar,
}) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: hexToRgba(time.cor, 0.6),
        "--cor": time.cor,
      }}
    >
      <input
        onChange={(e) => alterarCorDoTime(e.target.value, time.id)}
        type="color"
        className="input-color"
        value={time.cor}
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => (
          <Colaborador
            corDeFundoDoCard={time.cor}
            key={indice}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            id={colaborador.id}
            aoDeletar={aoDeletar}
            favorito={colaborador.favorito}
            aoFavoritar={aoFavoritar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
