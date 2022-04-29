import './App.css';
import perfil from './img/perfil.jpeg';

function App() {
  return (
    <div className="Container">
      <header className="header">
        <div className="img">
          <img src={perfil} alt="foto de perfil"/>
        </div>
        <div className="title">
          <h1>Flávia Ferrari</h1>
        </div>
        <div className="description">
          <p>Olá, meu nome é Flávia Ferrari, tenho 20 anos de idade e sou programadora iniciante, mas já tenho alguns pequenos projetos no github.<br/><br/>
          </p>
          <p className="pBlack">Atualmente pretendo me especializar na área de cibersegurança e banco de dados, tenho bom domínio em SQL Server. Meus certificados e minhas certificações aqui.</p>
        </div>
        
      </header>
    </div>
  );
}

export default App;
