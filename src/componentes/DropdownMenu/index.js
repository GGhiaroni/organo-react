import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown-menu">
      <label>{props.label}</label>
      <select required={props.obrigatorio}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
