import { ContainerCertificados, ContaCertificados, TCu, TCertif} from './styled.js';
// import CiberEdu from './../img/CiberEdu.jpg';


export default function Certificados({ curso, instituicao, data }) {

    return (
        <ContainerCertificados>
            <TCertif>Certicados</TCertif>
            <ContaCertificados>
                <TCu>{curso}</TCu>
                <TCu>{instituicao}</TCu>
                <TCu>{data}</TCu>
            </ContaCertificados> 
        </ContainerCertificados>
    )
}