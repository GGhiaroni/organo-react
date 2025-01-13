import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const adicionarNovoColaborador = (colaborador) => {
    setColaboradores((arrayAntigoDeColaboradores) => [
      ...arrayAntigoDeColaboradores,
      colaborador,
    ]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColaborador={adicionarNovoColaborador} />
    </div>
  );
}

export default App;
