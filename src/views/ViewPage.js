import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Machines from "../components/Machine/Machines";
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

export default function ViewPage() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Machines/>
                    {/*<Paper className={fixedHeightPaper}>*/}
                    {/*    <Machine/>*/}
                    {/*</Paper>*/}
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        {/*<Fix/>*/}
                        {/*<Deposits/>*/}
                    </Paper>
                </Grid>
                {/* Machine */}
                <Grid item xs={12}>
                    <Fix/>
                    {/*<Paper className={fixedHeightPaper}>*/}
                    {/*    <Fix/>*/}
                    {/*</Paper>*/}
                </Grid>
                <Grid item xs={12}>
                    <Plan/>
                    {/*<Paper className={fixedHeightPaper}>*/}
                    {/*    <Plan/>*/}
                    {/*</Paper>*/}
                </Grid>
            </Grid>
        </React.Fragment>)
}
