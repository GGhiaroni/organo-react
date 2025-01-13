import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown-menu">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        value={props.valor}
      >
        <option value="">Selecione uma opção</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
