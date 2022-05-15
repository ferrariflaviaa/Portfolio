import {Container, Header,Img, Perfil, Title, Description, PBlack, Redes, ImgM, Socias } from'./styled.js';
import './index.css';
import perfil from './img/perfil.jpeg';
import instagram from './img/instagram.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';
import email from './img/o-email.png';


function App() {
  return (
    <Container>
      <Header>
        <Img>
          <Perfil src={perfil} alt="foto de perfil" />
        </Img>
        <Title>
          <h1>Flávia Ferrari</h1>
        </Title>
        <Description>
          <div className="border">
            <p>Olá, meu nome é Flávia Ferrari, tenho 20 anos de idade e sou programadora   iniciante, mas já tenho alguns pequenos projetos no github.<br /><br />
            </p>
          </div>
          <div className="borderPBlack">
            <PBlack>Atualmente pretendo me especializar na área de cibersegurança e banco de dados, tenho bom domínio em SQL Server. Meus certificados e minhas certificações aqui.</PBlack>
          </div>
        </Description>
      </Header>
      <Redes>
        <h2>Redes Sociais</h2>
        <ImgM>
          <Socias src={linkedin} alt="linkedin" />
          <Socias src={github} alt="github" />
          <Socias src={instagram} alt="Instagram" />
          <Socias src={email} alt="email" />
        </ImgM>
        {/* <div className="imgM"> */}
        {/* </div> */}
        {/* <div className="imgM">
          <img src={email} alt="email" />
        </div> */}
      </Redes>
    </Container>
  );
}

export default App;
