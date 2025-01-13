import Banner from "./componentes/Banner";
import InputsTexto from "./componentes/InputsTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <InputsTexto label="Nome" placeholder="Digite o seu nome" />
      <InputsTexto label="Cargo" placeholder="Digite o seu cargo" />
      <InputsTexto label="Imagem" placeholder="Informe o endereço da imagem" />
    </div>
  );
}

export default App;
