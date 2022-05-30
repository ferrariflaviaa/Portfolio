
import CardExperiencias from '../CardExperiencias/index.js';
import { ContainerExperiencias, TExperiencias } from './styled.js';

export default function Experiencias(){

    return(
        <ContainerExperiencias>
            <TExperiencias>Experiencias</TExperiencias>
            <CardExperiencias empresa={"Rebues"} cargo={"Analista de integração de sistemas junior "} descricaoE={"Desenvolvimento SQL Server, Alterações e correções nas consultas de banco de dados, \n Suporte no Sistema Totvs."} />
            <CardExperiencias empresa={"Sicoob Credisudeste"} cargo={"Auxiliar administrativa de processos"} descricaoE={"Desenvolvimento de processo para o sistema de BPM (Gerenciamento de processos de negócio) em Javascript Análise e mapeamento de processos feitos em diagramas de BPM."} />

        </ContainerExperiencias>
    )
}