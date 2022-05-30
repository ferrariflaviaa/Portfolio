
import { ContainerProjeto, TProjeto } from './styled.js';
import Card from './../Card/index';

export default function Projetos() {

    return (
        <ContainerProjeto>
            <TProjeto>Projetos</TProjeto>
            <Card titulo="Blog Codar" link="https://github.com/ferrariflaviaa/Blog-Codar"
                descricao="link do projeto" />
            <Card titulo="WhyZap" link="https://github.com/ferrariflaviaa/WhyZap"
                descricao="link do projeto" />
            <Card titulo="Projeto Pokdex" link="https://github.com/ferrariflaviaa/Projeto-Pokdex-"
                descricao="link do projeto" />
            <Card titulo="desenho" link="https://www.linkedin.com/in/dev-flavia-ferrari/" descricao="link do projeto" />

        </ContainerProjeto>
    )
}