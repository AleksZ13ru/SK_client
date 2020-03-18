import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import MachineAll from "../components/Machine/MachineAll";
import Fix from "../components/Fix/Fix";
import Plan from "../components/Plan/Plan";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 270,
    }
}));

export default function MachinesPage() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <MachineAll/>
                </Grid>
                {/*<Grid item xs={12} md={4} lg={3}>*/}
                {/*    <Paper className={fixedHeightPaper}>*/}
                {/*        /!*<Fix/>*!/*/}
                {/*        /!*<Deposits/>*!/*/}
                {/*    </Paper>*/}
                {/*</Grid>  */}
            </Grid>
        </React.Fragment>)
}
