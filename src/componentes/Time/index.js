import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: props.corSecundaria,
        "--cor-primaria": props.corPrimaria,
      }}
    >
      <input
        onChange={(e) => props.alterarCorDoTime(e.target.value, props.nome)}
        type="color"
        className="input-color"
        value={props.corSecundaria}
      />
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, indice) => (
          <Colaborador
            corDeFundoDoCard={props.corPrimaria}
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
