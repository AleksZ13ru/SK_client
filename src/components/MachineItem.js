import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DialogMachineBuildAdd from "./DialogMachineBuildAdd";
import {string} from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    li3: {
        width: 3 / 12
    },
    li4: {
        width: 4 / 12
    },
    li5: {
        width: 5 / 12
    }
}));

type Props = {
    id:number,
    title:string,
    category:string,
    speed:number,
    kmv:number
}

export default function MachineItem(props:Props) {
    const classes = useStyles();
    const [openDialogBuildAdd, setOpenDialogBuildAdd ] = React.useState(false);

    const handleDialogClose = () => {
        setOpenDialogBuildAdd(false);
    };

    return (
        <div>
            <ListItem
                button
                component={Link} to={`/machine/${props.id}`}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText
                    className={classes.li5}
                    primary={props.title}
                    secondary={props.category}
                />
                <ListItemText
                    className={classes.li4}
                    primary={0}
                    secondary={`м/мин`}/>
                <ListItemText
                    className={classes.li4}
                    primary={props.kmv}
                    secondary={`кмв`}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments"
                                onClick={() => {
                                    setOpenDialogBuildAdd(true)
                                }}>
                        <BuildIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="comments"
                                style={{marginLeft: '10px'}}
                                onClick={() => {
                                    console.log('click')
                                }}>
                        <AssignmentIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <DialogMachineBuildAdd open={openDialogBuildAdd} id={props.id} title={props.title} onClose={handleDialogClose}/>
        </div>
    );
}