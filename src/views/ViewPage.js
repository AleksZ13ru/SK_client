import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Machines from "../components/Machine/Machines";
import Fix from "../components/Fix/Fix";
import Plan from "../components/Plan/Plan";
import MachineAll from "../components/Machine/MachineAll";
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import StatusIcon from "../components/StatusIcon";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import MachinesCard from "../components/MachinesCard";
import {DatePicker} from "@material-ui/pickers";
import DialogMachineBuildAdd from "../components/DialogMachineBuildAdd";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    dialogColumn: {
        marginTop: theme.spacing(8),
        // padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    fixedHeight: {
        // height: 500,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function DialogAddFix(props) {
    const classes = useStyles();
    const [machine, setMachine] = React.useState('');
    const [service, setService] = React.useState('');

    const handleChangeMachine = event => {
        setMachine(event.target.value);
    };
    const handleChangeService = event => {
        setService(event.target.value);
    };
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <Grid className={classes.dialogColumn} container direction="column" justify="center" spacing={2}>
                    <Grid item fullWidth>
                        <TextField id="outlined-basic" label="Оборудование" variant="outlined"/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Служба" variant="outlined"/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Описание" variant="outlined" multiline rows="5"/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default function ViewPage() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [openDialogMachineBuildAdd, setOpenDialogMachineBuildAdd] = React.useState(false);
    const [date, changeDate] = React.useState(new Date());
    const handleClickAddFix = () => {
        setOpenDialogMachineBuildAdd(true);
    };

    const handleCloseAddFix = () => {
        setOpenDialogMachineBuildAdd(false);
    };
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card className={fixedHeightPaper}>
                        <CardHeader
                            title="Оборудование"
                            subheader={date.toLocaleDateString()}
                        />
                        <Divider/>
                        <CardContent>
                            {/*old <Machines/>*/}
                            <MachinesCard last={3}/>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <Button
                                color="primary"
                                size="small"
                                variant="text"
                                href='/machines'
                            >Посмотреть все<ArrowRightIcon/>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Recent Deposits */}
                {/*<Grid item xs={12} md={4} lg={3}>*/}
                {/*    <Card className={fixedHeightPaper}>*/}
                {/*        <DatePicker*/}
                {/*            autoOk*/}
                {/*            // orientation="landscape"*/}
                {/*            variant="static"*/}
                {/*            openTo="date"*/}
                {/*            value={date}*/}
                {/*            onChange={changeDate}*/}
                {/*        />*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
                {/* Machine */}
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            action={
                                <Button
                                    color="primary"
                                    size="small"
                                    variant="outlined"
                                    onClick={handleClickAddFix}
                                >
                                    Добавить
                                </Button>
                            }
                            title="Ремонты оборудования"
                        />
                        <Divider/>
                        <CardContent>
                            <Fix/>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <Button
                                color="primary"
                                size="small"
                                variant="text"
                                href='/machines'
                            >Посмотреть все<ArrowRightIcon/>
                            </Button>
                        </CardActions>
                    </Card>
                    {/*<DialogAddFix open={open} handleClose={handleCloseAddFix}/>*/}
                </Grid>
                <Grid item xs={12}>
                    <Plan/>
                </Grid>
            </Grid>
            <DialogMachineBuildAdd open={openDialogMachineBuildAdd}
                                   onClose={() => {
                                       setOpenDialogMachineBuildAdd(false);
                                   }}/>
        </React.Fragment>)
}
