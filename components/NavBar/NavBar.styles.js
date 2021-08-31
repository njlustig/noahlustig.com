import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
    width: 100%;
    height: 60px;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.black};
`;

export const ContentContainer = styled.div`
    width: 1000px;
    height: 60px;
    margin: 0 auto;
    padding: 0;
    background-color: ${colors.black};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleBox = styled.div`
    height: 60px;
    margin: 0;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TitleText = styled.p`
    color: ${ props => props.color ? colors[props.color] : colors.white };
    margin: 20px auto;
    padding: 0;
    font-size: 30px;
    font-weight: 300;
`;

export const ButtonsBox = styled.div`
    height: 60px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Button = styled.a`
    display: inline;
    height: 60px;
    margin: 0;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    color: ${ props => props.color ? colors[props.color] : colors.white };
    margin: 5px auto;
    padding: 0;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
`;