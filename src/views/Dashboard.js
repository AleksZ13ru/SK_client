import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import {Link as RouterLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {mainListItems, secondaryListItems} from './listItems';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';
import Title from "../components/Title";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Machines from "../components/Machine/Machines";
import ViewPage from "./ViewPage";
import MachinesPage from "./MachinesPage";
import Button from "@material-ui/core/Button";
import SignInPage from "./SignInPage";
import { AUTH_TOKEN } from '../constants'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Сарансккабель
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 260,
    },
}));

// function createDataPlan(name, length0, date_start, time, date_end, status) {
//     return {name, length0, date_start, time, date_end, status};
// }

// const rows_plan = [
//     createDataPlan('АВБШв 3х120 мс(N,PE)-1', '300', '30 янв. 2020', '30 мин', '30 янв. 2020', 'в работе'),
//     createDataPlan('АВВГ 4х120-1', '120', '28 янв. 2020', '9 мин', '28 янв 2020', 'завершено'),
//     createDataPlan('ВВГ 4х120-1', '420', '28 янв. 2020', '17 мин', '28 янв 2020', 'завершено'),
// ];

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const authToken = localStorage.getItem(AUTH_TOKEN);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Сарансккабель
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                        href='/sign-in'
                    >
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>{mainListItems}</List>
                <Divider/>
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        {/*<Route exact path="/analytics" component={Dashboard_analytics}/>*/}
                        {/*<Route exact path="/plan" component={Dashboard_plan}/>*/}
                        {/*<Route exact path="/fix" component={Dashboard_fix}/>*/}
                        <Route exact path="/sign-in" component={SignInPage}/>
                        <Route exact path="/machines" component={MachinesPage}/>
                        <Route exact path="/" component={ViewPage}/>
                    </Switch>
                    {/*<Grid container spacing={3}>*/}
                    {/* Machine */}
                    {/*<Grid item xs={12} md={8} lg={9}>*/}
                    {/*    <Paper className={fixedHeightPaper}>*/}
                    {/*        <Machine/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/*/!* Recent Deposits *!/*/}
                    {/*<Grid item xs={12} md={4} lg={3}>*/}
                    {/*    <Paper className={fixedHeightPaper}>*/}
                    {/*        <Deposits/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/*/!* Machine *!/*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>*/}
                    {/*        <Chart/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/* Recent Orders */}
                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>*/}
                    {/*        <Orders/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>*/}
                    {/*        <Orders/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}
                    {/*     <Grid item xs={12}>*/}
                    {/*        <Paper className={classes.paper} elevation={3}>*/}
                    {/*            <Title>Планирование</Title>*/}
                    {/*            <TableContainer>*/}
                    {/*                <Table size="small" aria-label="simple table">*/}
                    {/*                    <TableHead>*/}
                    {/*                        <TableRow>*/}
                    {/*                            <TableCell align="center">Наименование</TableCell>*/}
                    {/*                            <TableCell align="right">Длина</TableCell>*/}
                    {/*                            <TableCell align="right">Дата запуска</TableCell>*/}
                    {/*                            <TableCell align="right">Время выполнения</TableCell>*/}
                    {/*                            <TableCell align="right">Дата выпуска</TableCell>*/}
                    {/*                            <TableCell align="right">Статус</TableCell>*/}
                    {/*                        </TableRow>*/}
                    {/*                    </TableHead>*/}
                    {/*                    <TableBody>*/}
                    {/*                        {rows_plan.map(rows_plan => (*/}
                    {/*                            <TableRow key={rows_plan.name}>*/}
                    {/*                                <TableCell component="th" scope="row">*/}
                    {/*                                    {rows_plan.name}*/}
                    {/*                                </TableCell>*/}
                    {/*                                <TableCell align="right">{rows_plan.length0}</TableCell>*/}
                    {/*                                <TableCell align="right">{rows_plan.date_start}</TableCell>*/}
                    {/*                                <TableCell align="right">{rows_plan.time}</TableCell>*/}
                    {/*                                <TableCell align="right">{rows_plan.date_end}</TableCell>*/}
                    {/*                                <TableCell align="right">{rows_plan.status}</TableCell>*/}

                    {/*                            </TableRow>*/}
                    {/*                        ))}*/}
                    {/*                    </TableBody>*/}
                    {/*                </Table>*/}
                    {/*            </TableContainer>*/}
                    {/*        </Paper>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}
