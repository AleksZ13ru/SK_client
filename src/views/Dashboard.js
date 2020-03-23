import React, {Component} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {mainListItems, secondaryListItems} from './listItems';
import {withRouter} from 'react-router'
import {withStyles} from "@material-ui/core/styles";
import {Switch, Route} from 'react-router-dom';
import ViewPage from "./ViewPage";
import MachinesPage from "./MachinesPage";
import SignInPage from "./SignInPage";
import {AUTH_TOKEN} from '../constants';
import {Query} from 'react-apollo';
import {loader} from 'graphql.macro';
import MachinePage from "../components/MachinePage";


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

const useStyles = theme => ({
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
    menuRight: {
        margin: 'auto',
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
});


const ME_QUERY = loader('./ME_QUERY.graphql');

class Dashboard extends Component {
    state = {
        open: false,
    }

    render() {
        const {classes} = this.props;
        // const [open, setOpen] = React.useState(false);
        const {open} = this.state;
        const handleDrawerOpen = () => {
            this.setState({open:true})
        };
        const handleDrawerClose = () => {
            this.setState({open:false})
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

                        {authToken ? (
                            <Box display="flex" className={classes.menuRight}>
                                <Query query={ME_QUERY}>
                                    {({loading, error, data}) => {
                                        if (loading) return <div>Loading</div>;
                                        if (error) return <div>Error</div>;
                                        const username = data.me.username;

                                        return (
                                            <Typography component="h1" variant="h6" color="inherit" noWrap
                                                        className={classes.title}>
                                                {username}
                                            </Typography>
                                        )
                                    }}

                                </Query>

                                <IconButton
                                    primary="Оборудование"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={() => {
                                        localStorage.removeItem(AUTH_TOKEN);
                                        this.props.history.push(`/`)
                                    }}
                                >

                                    <ExitToAppIcon/>
                                </IconButton>
                            </Box>


                        ) : (
                            <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                                href='/sign-in'
                            >
                                <AccountCircle/>
                            </IconButton>

                        )}
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
                            <Route path="/machine/:id"
                                   render={(props)=><MachinePage {...props}/>}>
                                {/*<PageCar/>*/}
                            </Route>
                            <Route exact path="/sign-in" component={SignInPage}/>
                            <Route exact path="/machines" component={MachinesPage}/>
                            <Route exact path="/" component={ViewPage}/>
                        </Switch>
                        <Box pt={4}>
                            <Copyright/>
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

// function Dashboard() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };
//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
//     const authToken = localStorage.getItem(AUTH_TOKEN);
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline/>
//             <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
//                 <Toolbar className={classes.toolbar}>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
//                     >
//                         <MenuIcon/>
//                     </IconButton>
//                     <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//                         Сарансккабель
//                     </Typography>
//
//                     {/*<IconButton color="inherit">*/}
//                     {/*    <Badge badgeContent={4} color="secondary">*/}
//                     {/*        <NotificationsIcon/>*/}
//                     {/*    </Badge>*/}
//                     {/*</IconButton>*/}
//                     {authToken ? (
//                         // <div
//                         //     className="ml1 pointer black"
//                         //     onClick={() => {
//                         //         localStorage.removeItem(AUTH_TOKEN);
//                         //         this.props.history.push(`/`)
//                         //     }}
//                         // >
//                         //     logout
//                         // </div>
//                         <Box display="flex" className={classes.menuRight}>
//                             <Query query={ME_QUERY}>
//                                 {({loading, error, data}) => {
//                                     if (loading) return <div>Loading</div>
//                                     if (error) return <div>Error</div>
//                                     const username = data.me.username;
//
//                                     return (
//                                         <Typography component="h1" variant="h6" color="inherit" noWrap
//                                                     className={classes.title}>
//                                             {username}
//                                         </Typography>
//                                     )
//                                 }}
//
//                             </Query>
//
//                             <IconButton
//                                 primary="Оборудование"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"
//                                 onClick={() => {
//                                     localStorage.removeItem(AUTH_TOKEN);
//                                     this.props.history.push(`/`)
//                                 }}
//                             >
//
//                                 <ExitToAppIcon/>
//                             </IconButton>
//                         </Box>
//
//
//                     ) : (
//                         <IconButton
//                             aria-label="show more"
//                             aria-haspopup="true"
//                             color="inherit"
//                             href='/sign-in'
//                         >
//                             <AccountCircle/>
//                         </IconButton>
//
//                     )}
//                     {/*<IconButton*/}
//                     {/*    aria-label="show more"*/}
//                     {/*    aria-haspopup="true"*/}
//                     {/*    color="inherit"*/}
//                     {/*    href='/sign-in'*/}
//                     {/*>*/}
//                     {/*    <AccountCircle/>*/}
//                     {/*</IconButton>*/}
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 classes={{
//                     paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbarIcon}>
//                     <IconButton onClick={handleDrawerClose}>
//                         <ChevronLeftIcon/>
//                     </IconButton>
//                 </div>
//                 <Divider/>
//                 <List>{mainListItems}</List>
//                 <Divider/>
//                 <List>{secondaryListItems}</List>
//             </Drawer>
//             <main className={classes.content}>
//                 <div className={classes.appBarSpacer}/>
//                 <Container maxWidth="lg" className={classes.container}>
//                     <Switch>
//                         {/*<Route exact path="/analytics" component={Dashboard_analytics}/>*/}
//                         {/*<Route exact path="/plan" component={Dashboard_plan}/>*/}
//                         {/*<Route exact path="/fix" component={Dashboard_fix}/>*/}
//                         <Route exact path="/sign-in" component={SignInPage}/>
//                         <Route exact path="/machines" component={MachinesPage}/>
//                         <Route exact path="/" component={ViewPage}/>
//                     </Switch>
//                     <Box pt={4}>
//                         <Copyright/>
//                     </Box>
//                 </Container>
//             </main>
//         </div>
//     );
// }

export default withStyles(useStyles)(withRouter(Dashboard));