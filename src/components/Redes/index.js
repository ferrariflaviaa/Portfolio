import { ContaineRedes, ImgM, Sociais, TRedes } from "./styled";
import instagram from './../../img/instagram.png';
import linkedin from './../../img/linkedin.png';
import github from './../../img/github.png';
import email from './../../img/o-email.png';



export default function Redes(){

    return(
        <ContaineRedes>
        <TRedes>Redes Sociais</TRedes>
        <ImgM>
          <Sociais src={linkedin} alt="linkedin" />
          <Sociais src={github} alt="github" />
          <Sociais src={instagram} alt="Instagram" />
          <Sociais src={email} alt="email" />
        </ImgM>
      </ContaineRedes>
    )

}
