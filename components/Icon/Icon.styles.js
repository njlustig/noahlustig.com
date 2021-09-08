import styled from 'styled-components';
import colors from '../../styles/colors';

export const IconGroupContainer = styled.div`
    width: 220px;
    height: 230px;
    margin: 10px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;



export const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    margin: 5px auto;
`;

export const IconText = styled.p`
    color: ${colors.black};
    font-size: 15px;
    text-align: center;
    margin: 0;
`;