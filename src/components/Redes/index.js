import { ContaineRedes, ImgM, Sociais, TRedes } from "./styled";
import instagram from './../../img/instagram.png';
import linkedin from './../../img/linkedin.png';
import github from './../../img/github.png';
import email from './../../img/o-email.png';



export default function Redes() {

  return (
    <ContaineRedes>
      <TRedes>Redes Sociais</TRedes>
      <ImgM>
        <a href="https://www.linkedin.com/in/dev-flavia-ferrari/" target="_blank">
          <Sociais src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/ferrariflaviaa" target="_blank">
          <Sociais src={github} alt="github" />
        </a>
        <a href="https://www.instagram.com/ferrari_flaviaa/" target="_blank">
          <Sociais src={instagram} alt="Instagram" />
        </a>
        <a href="" target="_blank">
          <Sociais src={email} alt="email" />

        </a>
      </ImgM>
    </ContaineRedes>
  )

}
