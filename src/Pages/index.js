import { Container, Header, Img, Perfil, Title, Description, PBlack} from './styled.js';
import perfil from './../img/perfil.jpeg';
import Experiencias from './../components/Experiencias/index';
import Projetos from './../components/Projetos/index';
import Redes from './../components/Redes/index.js';

export default function Home() {

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
      <Experiencias/>
      <Projetos/>
      {/* <Projeto>
        <TProjeto>Projetos</TProjeto>
        <Card titulo="Blog Codar" link="https://github.com/ferrariflaviaa/Blog-Codar"
          descricao="link do projeto" />
        <Card titulo="WhyZap" link="https://github.com/ferrariflaviaa/WhyZap"
          descricao="link do projeto" />
        <Card titulo="Projeto Pokdex" link="https://github.com/ferrariflaviaa/Projeto-Pokdex-"
          descricao="link do projeto" />
        <Card titulo="desenho" link="https://www.linkedin.com/in/dev-flavia-ferrari/"
          descricao="link do projeto" />

      </Projeto> */}
      {/* <Redes /> */}
    </Container>

  )

}