import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import MachinesCard from "../components/MachinesCard";
import {Card} from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//     paper: {
//         padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column',
//     },
//     fixedHeight: {
//         height: 270,
//     }
// }));

export default function MachinesPage() {

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card>
                        <CardHeader
                            title="Оборудование"
                            // subheader="September 14, 2016"
                        />
                        <Divider/>
                        <CardContent>
                            {/*old <Machines/>*/}
                            <MachinesCard last={99}/>
                        </CardContent>
                        {/*<Divider/>*/}
                        {/*<CardActions>*/}
                            {/*<Button*/}
                            {/*    color="primary"*/}
                            {/*    size="small"*/}
                            {/*    variant="text"*/}
                            {/*    href='/machines'*/}
                            {/*>Посмотреть все<ArrowRightIcon/>*/}
                            {/*</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
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
