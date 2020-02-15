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
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {mainListItems, secondaryListItems} from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Machine from "./Machine";
import Title from "./Title";
import {Bar, BarChart, ResponsiveContainer} from "recharts";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
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
    pos: {
        marginBottom: 12,
    },

}));

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

function createData(name, categories, time, date) {
    return {name, categories, time, date};
}

const rows = [
    createData('Ремонт двигателя', 'Энергоцех', '30 мин', '30 янв. 2020'),
    createData('Замена термопары', 'ОПЭиИТ', '9 мин', '28 янв 2020'),
    createData('Чистка экструдера', 'Технологи', '16 мин', '25 янв 2020'),
];

function createDataPlan(name, length0, date_start, time, date_end, status) {
    return {name, length0, date_start, time, date_end, status};
}

const rows_plan = [
    createDataPlan('АВБШв 3х120 мс(N,PE)-1', '300', '30 янв. 2020', '30 мин', '30 янв. 2020', 'в работе'),
    createDataPlan('АВВГ 4х120-1', '120', '28 янв. 2020', '9 мин', '28 янв 2020', 'завершено'),
    createDataPlan('ВВГ 4х120-1', '420', '28 янв. 2020', '17 мин', '28 янв 2020', 'завершено'),
];

export default function Dashboard_machine() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                        Frigeco CU
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
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
                    <Grid container spacing={3}>
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
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={3}>
                                <Title>Frigeco CU </Title>
                                <Typography className={classes.pos} color="textSecondary">
                                    Машина волочения
                                </Typography>
                                {/*<Typography variant="subtitle1" component="h6">*/}
                                {/*    Средняя скорость 30 м/мин.*/}
                                {/*</Typography>*/}
                                {/*<Typography variant="subtitle1" component="h6">*/}
                                {/*    Коэффицент машинного времени 0.67*/}
                                {/*</Typography>*/}
                                <ResponsiveContainer width="100%" height={80}>
                                    <BarChart width={1} height={1} margin={
                                        {
                                            top: 16,
                                            right: 16,
                                            bottom: 16,
                                            left: 16,
                                        }
                                    } data={data}>
                                        <Bar dataKey="uv" fill="#8884d8"/>
                                    </BarChart>
                                </ResponsiveContainer>
                                {/*<Machine/>*/}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={3}>


                                <Title>Простои и ремонты</Title>
                                <TableContainer>
                                    <Table size="small" aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Причина</TableCell>
                                                <TableCell align="right">Служба</TableCell>
                                                <TableCell align="right">Время</TableCell>
                                                <TableCell align="right">Дата</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map(row => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.categories}</TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>
                                                    <TableCell align="right">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={3}>
                                <Title>Планирование</Title>
                                <TableContainer>
                                    <Table size="small" aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Наименование</TableCell>
                                                <TableCell align="right">Длина</TableCell>
                                                <TableCell align="right">Дата запуска</TableCell>
                                                <TableCell align="right">Время выполнения</TableCell>
                                                <TableCell align="right">Дата выпуска</TableCell>
                                                <TableCell align="right">Статус</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows_plan.map(rows_plan => (
                                                <TableRow key={rows_plan.name}>
                                                    <TableCell component="th" scope="row">
                                                        {rows_plan.name}
                                                    </TableCell>
                                                    <TableCell align="right">{rows_plan.length0}</TableCell>
                                                    <TableCell align="right">{rows_plan.date_start}</TableCell>
                                                    <TableCell align="right">{rows_plan.time}</TableCell>
                                                    <TableCell align="right">{rows_plan.date_end}</TableCell>
                                                    <TableCell align="right">{rows_plan.status}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}
