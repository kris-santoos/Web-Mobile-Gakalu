import styled from 'styled-components';
import { global } from '../../routes/globalStyle';

export const InputArea = styled.input `
    display: flex;
    width: 82.93vw;
    height: 6.15vh;
    margin: 0 0 0 10px;

    background: ${global.colors.cinzaClaro};
    color: #000;
    
    font-size: 16px;
    font-weight: 400;

    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
`;
