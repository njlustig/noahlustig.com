import styled from 'styled-components';
import colors from '../../styles/colors';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardHeader, CardMedia } from '@material-ui/core';


export const CardContainer = styled(Card)`
  width: 350px;
  height: 200px;
  margin: 20px 10px;
  padding: 0;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
`;

export const HeaderContainer = styled(CardHeader)`
  display: flex;
  margin: 10px 0;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled(CardContent)`
  width: 100%;
  max-height: 180px;
  margin: 5px;
  padding: 5px;
  overflow-y: scroll;
`;

export const ActionsContainer = styled(CardActions)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TitleText = styled.p`
    font-size: 25px;
    font-weight: 700px;
    margin: 0;
    text-align: center;
    color: ${colors.black}
`;

export const BodyText = styled.p`
    font-size: 12px;
    font-weight: 300px;
    margin: 0;
    color: ${colors.black};
    text-align: center;
`;

