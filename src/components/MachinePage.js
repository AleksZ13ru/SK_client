import React, {Fragment} from "react";
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
    ValueAxis,
    LineSeries,
    BarSeries,
    Title,
    Tooltip, PieSeries, Legend
} from "@devexpress/dx-react-chart-material-ui";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {EventTracker} from "@devexpress/dx-react-chart";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

const MACHINES_QUERY = loader('./Machine/MACHINES_QUERY.graphql');

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
    const TitleText = props => <Title.Text {...props} style={titleStyle}/>;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary

                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box display="flex" justifyContent="flex-start" style={{width: '100%'}}>
                        <Typography className={classes.heading}>Frigeco CU</Typography>
                        <Typography className={classes.secondaryHeading}>Машина волочения</Typography>
                    </Box>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            {/*</Paper>*/}
                        </Grid>
                    </Grid>

                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    aria-label="Expand"
                    id="panel2a-header"
                >


                    {/*<Typography className={classes.heading}>General settings</Typography>*/}
                    {/*<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>*/}
                    {/*<div style={{width: '100%'}}>*/}
                        <Box display="flex" justifyContent="flex-start" style={{width: '100%'}}>
                            <Typography className={classes.heading}>Ремонты оборудования</Typography>
                            <Typography className={classes.secondaryHeading}>3 за сутки</Typography>
                        </Box>
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
                    {/*</div>*/}
                    {/*<Button*/}
                    {/*    color="primary"*/}
                    {/*    size="small"*/}
                    {/*    variant="outlined"*/}
                    {/*    aria-label="Acknowledge"*/}
                    {/*    onClick={event => event.stopPropagation()}*/}
                    {/*    onFocus={event => event.stopPropagation()}*/}
                    {/*>Добавить</Button>*/}

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Таблица ремонтов
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Простои: 12 часов</Typography>
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
        </div>
    );
}