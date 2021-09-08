import React from 'react';
import Button from '@material-ui/core/Button';
import { TitleText, BodyText, CardContainer, HeaderContainer, ContentContainer, ActionsContainer} from './Card.styles';
import { StylesProvider } from '@material-ui/core/styles';

const Card = ({ title, description }) => {

  return (
    <StylesProvider injectFirst>
      <CardContainer raised>
        <HeaderContainer disableTypography={true} title={<TitleText>{title}</TitleText>}/>
        <ContentContainer>
          <BodyText>{description}</BodyText>
        </ContentContainer>
        <ActionsContainer>
          <Button variant="contained">View Code</Button>
        </ActionsContainer>
      </CardContainer>
    </StylesProvider>
  );
};

export default Card;