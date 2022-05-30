import { Container, Header, Img, Perfil, Title, Description, PBlack} from './styled.js';
import perfil from './../img/perfil.jpeg';
import Experiencias from './../components/Experiencias/index';
import Projetos from './../components/Projetos/index';
import Redes from './../components/Redes/index.js';
import Certificados from '../components/Certificados/index.js';

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
      {/* <Certificados curso={"Cybersecurity Essentials - "} instituicao={"Cisco Networking Academy - "} data={"Outubro/2021"}/> */}
      <Redes />
    </Container>

  )

}