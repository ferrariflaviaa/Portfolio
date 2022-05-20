import { ContainerP, Titulo, Link, } from './styled'

export default function Card({ titulo, link, descricao }) {

    return (
        <ContainerP>
            <Titulo>{titulo}</Titulo>
            <Link href={link} target="_blank">{descricao}</Link>
        </ContainerP>



    )
}