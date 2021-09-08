import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './Avatar.styles';
const MyAvatar = ({ src, ...rest }) => {
    const classes = useStyles();
    return (
        <Avatar height="300" width="300" src={src} className={classes.main} {...rest} />
    );
};

export default MyAvatar;