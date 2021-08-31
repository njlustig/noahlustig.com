import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './Avatar.styles';
const MyAvatar = ({ src, ...rest }) => {
    const classes = useStyles();
    return (
        <Avatar src={src} className={classes.main} {...rest} />
    );
};

export default MyAvatar;