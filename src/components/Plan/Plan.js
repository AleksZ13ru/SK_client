import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Grid from "@material-ui/core/Grid";
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import LinearProgress from "@material-ui/core/LinearProgress";
import StatusBullet from "../StatusBullet";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
// import LinearProgress from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// Generate Order Data
function createDataPlan(name, length0, date_start, time, date_end, progress, status, status_color) {
    return {name, length0, date_start, time, date_end, progress, status, status_color};
}

const statusColors = {
    green: 'success',
    blue: 'info',
    red: 'danger'
};

const rows = [
    createDataPlan('АВБШв 3х120 мс(N,PE)-1', '300', '30 янв. 2020', '30 мин', '30 янв. 2020', 74, 'в работе', 'blue'),
    createDataPlan('АВВГ 4х120-1', '120', '28 янв. 2020', '9 мин', '28 янв 2020', 14, 'просрочен', 'red'),
    createDataPlan('ВВГ 4х120-1', '420', '28 янв. 2020', '17 мин', '28 янв 2020', 100, 'завершен', 'green'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    status: {
        marginRight: theme.spacing(1)
    },
    title: {
        color: 'primary',
        component: 'h2',
        variant: 'h6'
    },

}));

export default function Plan() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                action={
                    <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                    >
                        Новый заказ
                    </Button>
                }
                title="Планирование"
                // subheader="September 14, 2016"
            />
            <Divider/>
            <CardContent>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Наименование</TableCell>
                            <TableCell align="left">Длина</TableCell>
                            {/*<TableCell align="right">Дата запуска</TableCell>*/}
                            <TableCell align="center">Прогресс</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="right">Дата выпуска</TableCell>
                            <TableCell align="left">Статус</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.length0}</TableCell>
                                {/*<TableCell align="right">{row.date_start}</TableCell>*/}
                                <TableCell align="center">
                                    <LinearProgress
                                        className={classes.progress}
                                        value={row.progress}
                                        variant="determinate"
                                    />
                                </TableCell>
                                <TableCell align="center"><Typography
                                    variant="button">{row.progress} %</Typography></TableCell>
                                <TableCell align="right">{row.date_end}</TableCell>
                                <TableCell align="left">
                                    <div className={classes.statusContainer}>
                                        <StatusBullet
                                            className={classes.status}
                                            color={statusColors[row.status_color]}
                                            size="sm"
                                        />
                                        {row.status}
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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
    );
};

