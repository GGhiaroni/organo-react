import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img
          src="https://www.usmagazine.com/wp-content/uploads/2018/03/g-eazy-zoom.jpg?crop=0px%2C0px%2C2000px%2C1130px&resize=1200%2C675&quality=55&strip=all"
          alt="foto de perfil do colaborador"
        />
      </div>
      <div className="rodape">
        <h4>G-Eazy</h4>
        <h5>Rapper Gay</h5>
      </div>
    </div>
  );
};

export default Colaborador;
