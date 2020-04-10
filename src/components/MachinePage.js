import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {loader} from "graphql.macro";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Chart,
    ArgumentAxis,
    BarSeries,
    Title,
    Tooltip, PieSeries, Legend
} from "@devexpress/dx-react-chart-material-ui";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {EventTracker} from "@devexpress/dx-react-chart";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Query} from "react-apollo";

const MACHINE_QUERY = loader('./Machine/MACHINE_QUERY.graphql');

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading0: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    chart: {
        height: '100px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        margin: theme.spacing(1),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
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

const titleStyle = {
    // margin: 'auto',
    fontSize: 14,
};

export default function MachinesPage(props) {
    const classes = useStyles();
    const chartDataKMV = [
        {year: '1950', population: 2.525},
        {year: '1960', population: 3.018},
        {year: '1970', population: 3.682},
        {year: '1980', population: 4.440},
        {year: '1990', population: 5.310},
        {year: '2000', population: 6.127},
        {year: '2010', population: 6.930},
    ];

    const chartData = [
        {service: 'ОПЭиИТ', area: 12},
        {service: 'РМЦ', area: 7},
        {service: 'Технологи', area: 7},
        {service: 'Энергоцех', area: 7},

    ];
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const TitleText = props => <Title.Text {...props} style={titleStyle}/>;
    return (
        <Query query={MACHINE_QUERY} variables={{"id": props.match.params.id}}>
            {({loading, error, data}) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Не удалось получить ответ от сервера</div>;
                const machine = data.machine;
                console.log(machine);
                return (
                    <div className={classes.root}>
                        <ExpansionPanel defaultExpanded>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                aria-label="Expand"
                                id="panel2a-header"
                            >
                                <Grid container spacing={2} direction="row" alignItems="baseline">
                                    <Grid item xs={4}>
                                        <Typography className={classes.heading}>{machine.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={classes.secondaryHeading}>{machine.category}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    // subheader={
                                    //     <ListSubheader component="div" id="nested-list-subheader">
                                    //         Nested List Items
                                    //     </ListSubheader>
                                    // }
                                    className={classes.root}
                                >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon/>
                                        </ListItemIcon>
                                        <ListItemText className={classes.li3} primary={machine.location}
                                                      secondary="Цех"/>
                                        <ListItemText className={classes.li3} primary={machine.area}
                                                      secondary="Участок"/>
                                        <ListItemText className={classes.li3} primary={"".padEnd(5,'-')}
                                                      secondary="Оператор/Первый номер"/>
                                    </ListItem>
                                    {/*<ListItem button>*/}
                                    {/*    <ListItemIcon>*/}
                                    {/*        <DraftsIcon />*/}
                                    {/*    </ListItemIcon>*/}
                                    {/*    <ListItemText primary="Drafts" />*/}
                                    {/*</ListItem>*/}
                                    <ListItem button onClick={handleClick}>
                                        <ListItemIcon>
                                            <InboxIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Оборудование"/>
                                        {open ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItem>

                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List className={classes.root} dense>
                                            <ListItem button>
                                                <ListItemIcon><SendIcon/></ListItemIcon>
                                                <ListItemText className={classes.li3} primary="Zumbach"
                                                              secondary="Измеритель диаметра"/>
                                                <ListItemText className={classes.li3} primary="4587-3345-6758"
                                                              secondary="Серийный номер"/>
                                                <ListItemText className={classes.li3} primary="№ 12456676"
                                                              secondary="Поверка до 30.12.2021"/>
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon><SendIcon/></ListItemIcon>
                                                <ListItemText className={classes.li3} primary="Zumbach"
                                                              secondary="Измеритель диаметра"/>
                                                <ListItemText className={classes.li3} primary="4587-3345-6758"
                                                              secondary="Серийный номер"/>
                                                <ListItemText className={classes.li3} primary="№ 12456676"
                                                              secondary="Поверка до 30.12.2021"/>
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon><SendIcon/></ListItemIcon>
                                                <ListItemText className={classes.li3} primary="Zumbach SparkTester"
                                                              secondary="ЗАСИ"/>
                                                <ListItemText className={classes.li3} primary="4587-3345-6758"
                                                              secondary="Серийный номер"/>
                                                <ListItemText className={classes.li3} primary="№ 12156676"
                                                              secondary="Аттестация до 30.12.2021"/>
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon><SendIcon/></ListItemIcon>
                                                <ListItemText className={classes.li3} primary="Widendach CS407"
                                                              secondary="Маркир"/>
                                                <ListItemText className={classes.li3} primary="4587-3345-6758"
                                                              secondary="Серийный номер"/>
                                                <ListItemText className={classes.li3} primary="Белый" secondary="Цвет"/>
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </List>


                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                aria-label="Expand"
                                id="panel2a-header"
                            >
                                <Grid container spacing={2} direction="row" alignItems="baseline">
                                    <Grid item xs={4}>
                                        <Typography className={classes.heading}>Ремонты оборудования</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={classes.secondaryHeading}>3 за сутки</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <Button
                                                color="primary"
                                                size="small"
                                                variant="outlined"
                                                aria-label="Acknowledge"
                                                onClick={event => event.stopPropagation()}
                                                onFocus={event => event.stopPropagation()}
                                            >Добавить</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Таблица ремонтов
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Grid container spacing={2} direction="row" alignItems="baseline">
                                    <Grid item xs={4}>
                                        <Typography className={classes.heading}>Простои оборудования</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={classes.secondaryHeading}>12 часов за неделю</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <Button
                                                color="primary"
                                                size="small"
                                                variant="outlined"
                                                aria-label="Acknowledge"
                                                onClick={event => event.stopPropagation()}
                                                onFocus={event => event.stopPropagation()}
                                            >Добавить</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Список простоев
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                            >
                                <Typography className={classes.heading}>Планирование производства</Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary

                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Grid container spacing={2} direction="row" alignItems="baseline">
                                    <Grid item xs={4}>
                                        <Typography className={classes.heading}>Frigeco CU</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={classes.secondaryHeading}>Машина волочения</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        {/*<Paper className={classes.paper}>xs=12</Paper>*/}
                                    </Grid>
                                </Grid>
                                {/*<Box display="flex" justifyContent="flex-start" style={{width: '100%'}}>*/}
                                {/*    <Typography className={classes.heading}>Frigeco CU</Typography>*/}
                                {/*    <Typography className={classes.secondaryHeading}>Машина волочения</Typography>*/}
                                {/*</Box>*/}
                                {/*<Box style={{width:'2/12'}}>*/}

                                {/*</Box>*/}
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Paper variant="outlined">
                                            <Chart height={250} data={chartDataKMV}>
                                                <ArgumentAxis/>
                                                {/*<ValueAxis />*/}

                                                <BarSeries
                                                    valueField="population"
                                                    argumentField="year"
                                                />
                                                <Title
                                                    text="Коэффицент машинного времени"
                                                    textComponent={TitleText}
                                                />
                                                <EventTracker/>
                                                <Tooltip/>
                                            </Chart>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper variant="outlined">
                                            <Chart height={250} data={chartData}>
                                                <PieSeries
                                                    valueField="area"
                                                    argumentField="service"
                                                />
                                                <Title
                                                    text="Распределение простоев"
                                                    textComponent={TitleText}
                                                />
                                                <Legend/>
                                                <EventTracker/>
                                                <Tooltip/>
                                            </Chart>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/*<Paper variant="outlined">*/}
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                        {/*</Paper>*/}
                                    </Grid>
                                </Grid>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                )
            }}
        </Query>
    );


}
