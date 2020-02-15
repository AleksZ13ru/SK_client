import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';


import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        borderRadius: '50%',
        flexGrow: 0,
        flexShrink: 0
    },
    sm: {
        height: theme.spacing(1),
        width: theme.spacing(1)
    },
    md: {
        height: theme.spacing(2),
        width: theme.spacing(2)
    },
    lg: {
        height: theme.spacing(3),
        width: theme.spacing(3)
    },
    neutral: {
        backgroundColor: theme.palette.neutral
    },
    primary: {
        backgroundColor: theme.palette.primary.main
    },
    info: {
        backgroundColor: theme.palette.info.main
    },
    warning: {
        backgroundColor: theme.palette.warning.main
    },
    danger: {
        backgroundColor: theme.palette.error.main
    },
    success: {
        backgroundColor: theme.palette.success.main
    }
}));

const StatusIcon = props => {
    const {className, size, color, ...rest} = props;

    const classes = useStyles();

    return (
        <span
            {...rest}
            className={clsx(
                {
                    [classes.root]: true,
                    [classes[size]]: size,
                    [classes[color]]: color
                },
                className
            )}
        />
    );
};

StatusIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'neutral',
        'primary',
        'info',
        'success',
        'warning',
        'danger'
    ]),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

StatusIcon.defaultProps = {
    size: 'md',
    color: 'default'
};

export default StatusIcon;
