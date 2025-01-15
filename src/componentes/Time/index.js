import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: hexToRgba(props.cor, 0.6),
        "--cor": props.cor,
      }}
    >
      <input
        onChange={(e) => props.alterarCorDoTime(e.target.value, props.nome)}
        type="color"
        className="input-color"
        value={props.cor}
      />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, indice) => (
          <Colaborador
            corDeFundoDoCard={props.cor}
            key={indice}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={props.aoDeletar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
