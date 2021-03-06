import styled from 'styled-components';
import colors from './colors';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${colors.white};
`;
export const Section = styled.div`
    width: 100%; 
    min-height: calc( 100vh - 60px );
    margin: 0;
    padding: 0;
    position: relative;
    top: 60px;
    background-color: ${props => props.color ? colors[props.color] : colors.white};
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 1000px;
    margin: 0;
    padding: 0;
    min-height: calc( 100vh - 60px );
    background-color: ${props => props.color ? colors[props.color] : colors.white};
    display: flex;
    flex-direction: ${props => props.col ? "column" : "row"};
    justify-content: ${props => props.even ? "space-evenly" : props.center ? "center" : "space-between"};
`;




export const ImageContainer = styled.div`
    min-height: calc( 100vh - 60px );
    height: calc( 100vh - 60px );
    display: flex; 
    flex-direction: column;
    justify-content: center;
`;

export const ContactContainer = styled.div`
    min-width: 200px;    
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
`;

export const ContactIcon = styled.img`
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
    margin: 5px;
    padding: 0;
    cursor: pointer;
`;

export const CaptionText = styled.p`
    color: ${props => props.color ? colors[props.color] : colors.grey };
    margin: 0 auto;
    font-size: 18px;
    padding: 0;
    font-weight: ${props => props.bold ? 400 : 300};
`;

export const TextContainer = styled.div`
    min-width: 60%;
    width: 60%;
    min-height: calc( 100vh - 60px );
    height: calc( 100vh - 60px );
    display: flex; 
    flex-direction: column;
    justify-content: center;
    
`;

export const TitleText = styled.p`
    color: ${props => props.color ? colors[props.color] : colors.black };
    font-weight: 700;
    font-size: 40px;
    margin: 30px ${props => props.center ? "auto" : 0};
    padding: 0;
`;

export const BodyText = styled.p`
    color: ${props => props.color ? colors[props.color] : colors.black };
    font-weight: 400;
    font-size: 20px;
    margin: 5px auto;
    padding: 0;
`;


export const IconBox = styled.div`
    min-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${colors.white};
    flex-wrap: wrap;
`;

export const ProjectsContainer = styled.div`
    min-width: 100%;
    width: 100%;
    min-height: 250px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const ColsContainer = styled.div`
    min-width: 1000px;
    width: 1000px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Column = styled.div`
    min-width: 400px;
    width: 400px;
    min-height: 400px;
    height: 400px;
    margin: 50px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ColumnHeaderText = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin: 0;
    text-align: center;
    color: ${colors.black}
`;

export const GradIcon = styled.li`
    list-style-image: url(/grad.png);
`;