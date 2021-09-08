import React from 'react';
import {
    IconGroupContainer,
    IconText,
    IconContainer
} from './Icon.styles';

const Icon = ({ src, text }) => {
    return (
        <IconGroupContainer>
              <IconContainer><img src={src} width={150} height={150}/></IconContainer>
              <IconText>{text}</IconText>
        </IconGroupContainer>
    );
};

export default Icon;