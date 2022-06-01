
import { ContainerProjeto, TProjeto } from './styled.js';
import Card from './../Card/index';

export default function Projetos() {

    return (
        <ContainerProjeto>
            <TProjeto>Projetos</TProjeto>
            <Card titulo="Blog Codar" link="https://github.com/ferrariflaviaa/Blog-Codar"
                descricao="Link do projeto" />
            <Card titulo="WhyZap" link="https://github.com/ferrariflaviaa/WhyZap"
                descricao="Link do projeto" />
            <Card titulo="Projeto Pokedex" link="https://github.com/ferrariflaviaa/Projeto-Pokdex-"
                descricao="Link do projeto" />
            <Card titulo="Jogo de Xadrez" link="https://github.com/ferrariflaviaa/chess_system_java" descricao="Link do projeto" />

        </ContainerProjeto>
    )
}