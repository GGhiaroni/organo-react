import "./Input.css";

const Input = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterar,
  obrigatorio,
}) => {
  const aoDigitar = (e) => {
    aoAlterar(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
