import InputField from "../../components/InputField";
import { Titles, HomeDiv, LoginDiv, Logo, Senha, Botao, Alternativa, ProfileIcons, IconsDiv, IconLink, RegistroDiv, RegistroText, RegistroLink } from "./style";

import logo from "../../assets/Home/img-gakalu.png";
import profileIcons from "../../assets/Home/Google.png";
import profileicons from "../../assets/Home/Facebook.png";

export default function Home() { /*1.*/
    return (
        <HomeDiv>
            <Logo src={logo}/>

            <LoginDiv>
                <Titles>E-mail</Titles>
                <InputField/>
                <Titles>Senha</Titles>   
                <InputField/>      
                <Senha href="#">Esqueci minha senha</Senha>
                <Botao>Entrar</Botao>
            </LoginDiv>
            <Alternativa>Ou entre com</Alternativa>
            
            <IconsDiv>
                <IconLink href="#">
                    <ProfileIcons src={profileIcons}/>
                </IconLink>
                <IconLink href="#">
                    <ProfileIcons src={profileicons}/>
                </IconLink>
            </IconsDiv>

            <RegistroDiv>
                <RegistroText>Não é registrado?</RegistroText>
                <RegistroLink href="#">Crie uma conta.</RegistroLink>
            </RegistroDiv>

        </HomeDiv>
    );
}