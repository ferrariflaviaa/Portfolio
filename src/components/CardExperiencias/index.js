import { ContainerCardExperiencias, TD, TC, TE } from './styled.js';


export default function CardExperiencias({empresa, cargo, descricaoE}) {
    
    return(
        <ContainerCardExperiencias>
            <TE>{empresa}</TE>
            <TC>{cargo}</TC>
            <TD>{descricaoE}</TD>
        </ContainerCardExperiencias>
    )
}