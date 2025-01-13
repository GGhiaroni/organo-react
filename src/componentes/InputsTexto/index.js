import "./InputsTexto.css";

const InputsTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default InputsTexto;
