import React from 'react';
import { 
    Container,
    ContentContainer,
    TitleBox,
    TitleText,
    ButtonsBox,
    Button,
    ButtonText
} from './NavBar.styles';
export const NavBar = () => {

    return (
        <Container>
            <ContentContainer>
                <TitleBox><TitleText>Noah Lustig</TitleText></TitleBox>
                <ButtonsBox>
                    <Button href="#about">
                        <ButtonText>About</ButtonText>
                    </Button>
                    <Button href="#skills">
                        <ButtonText>Skills</ButtonText>
                    </Button>
                    <Button href="#projects">
                        <ButtonText>Projects</ButtonText>
                    </Button>
                    <Button>
                        <ButtonText>Contact</ButtonText>
                    </Button>
                </ButtonsBox>
            </ContentContainer>
        </Container>
    );
};

export default NavBar;