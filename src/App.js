import { useState } from "react";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [timesCadastrados, setTimesCadastrados] = useState([
    {
      nome: "Programação",
      cor: "#57c278",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Back-End",
      cor: "#A6D157",
    },
    {
      nome: "FullStack",
      cor: "#E06B69",
    },
    {
      nome: "Data Science",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "DevOps",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[0].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[0].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[0].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[0].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[1].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[1].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[1].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[1].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[2].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[2].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[2].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[2].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[3].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[3].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[3].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[3].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[4].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[4].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[4].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[4].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: timesCadastrados[5].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: timesCadastrados[5].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: timesCadastrados[5].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: timesCadastrados[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const adicionarNovoColaborador = (colaborador) => {
    setColaboradores((arrayAntigoDeColaboradores) => [
      ...arrayAntigoDeColaboradores,
      colaborador,
    ]);
  };

  function deletarColaborador() {
    console.log("deletando colaborador");
  }

  function alterarCorDoTime(cor, nome) {
    setTimesCadastrados(
      timesCadastrados.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={timesCadastrados.map((time) => time.nome)}
        aoCadastrarColaborador={adicionarNovoColaborador}
      />
      <section className="times">
        <h2>Minha Organização</h2>
        {timesCadastrados.map((time) => (
          <Time
            key={time.nome}
            nome={time.nome}
            cor={time.cor}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            alterarCorDoTime={alterarCorDoTime}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
