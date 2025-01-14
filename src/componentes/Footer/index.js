import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div-logos-redes">
        <a href="https://www.linkedin.com/in/gabrielghiaroni/?originalSubdomain=br">
          <img src="imagens/fb.png" alt="ícone logo facebook" />
        </a>
        <a href="https://www.linkedin.com/in/gabrielghiaroni/?originalSubdomain=br">
          <img src="imagens/tw.png" alt="ícone logo twitter"></img>
        </a>
        <a href="https://www.linkedin.com/in/gabrielghiaroni/?originalSubdomain=br">
          <img src="imagens/ig.png" alt="ícone logo instagram"></img>
        </a>
      </div>
      <div className="footer-div-logo-organo">
        <a href="https://www.linkedin.com/in/gabrielghiaroni/?originalSubdomain=br">
          <img src="/imagens/logo.png" alt="ícone logo organo" />
        </a>
      </div>
      <p>Desenvolvido por Gabriel Ghiaroni.</p>
    </footer>
  );
};

export default Footer;
