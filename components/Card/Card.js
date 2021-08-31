import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TitleText, BodyText, CardContainer, HeaderContainer, ContentContainer, ActionsContainer} from './Card.styles';
import { StylesProvider } from '@material-ui/core/styles';

export default function SimpleCard() {

  return (
    <StylesProvider injectFirst>
      <CardContainer raised>
        <HeaderContainer disableTypography={true} title={<TitleText>Project Title</TitleText>}/>
        <ContentContainer>
          <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BodyText>
        </ContentContainer>
        <ActionsContainer>
          <Button variant="contained">View Code</Button>
        </ActionsContainer>
      </CardContainer>
    </StylesProvider>
  );
}