import styled from 'styled-components';
import { global } from '../../routes/globalStyle';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${global.colors.background};
`;

export const Logo = styled.img `
    margin: 50px;
`;
/*-----------------------------------------------------*/

export const LoginDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 40vh;

    background: ${global.colors.background};
`;

export const Titles = styled.h4 `
    padding: 0 70vw 0 0;
    margin: 10px 0 0 0;
`;

export const Senha = styled.a `
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 14px;
    color: #000;
    padding: 1vh 15vw 0 0;
`;

export const Botao = styled.button `
    font-size: 20px;
    color: white;
    background: #000;
    width: 82.93vw;
    height: 6.15vh;
    border-radius: 5px;
    margin: 5vh 0 0 0;
    
`;
/*----------------------------------------------------------*/
export const Alternativa = styled.h4 `
    color: #000;
`;

export const IconsDiv = styled.div `
    display: flex;
    justify-content: center;
`;

export const IconLink = styled.a `
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${global.colors.cinzaClaro};
    border-radius: 5px;
    border: 1px solid #000;

    width: 40vw;
    height: 6.15vh;
    margin: 5px;
`;
export const ProfileIcons = styled.img `

`;
/*----------------------------------------------------*/

export const RegistroDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 5px;
    color: #000;
`;

export const RegistroText = styled.h4 `

`;

export const RegistroLink = styled.a `
    color: #000;
    font-size: 20px;
    margin: 10px;
`;