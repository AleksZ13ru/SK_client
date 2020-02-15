import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Grid from "@material-ui/core/Grid";
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

// Generate Order Data
function createData(id, name, time, service) {
    return {id, name, time, service};
}

const rows = [
    createData(0, 'FrigecoCu', '1ч 30 мин', 'ОПЭиИТ'),
    createData(1, 'FrigecoAl', '45 мин', 'РМЦ'),
    createData(2, 'Matraff', '5ч 20мин', 'Технологи'),

];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const data01 = [
    {
        "name": "ОПЭиИТ",
        "value": 400
    },
    {
        "name": "РМЦ",
        "value": 300
    },
    {
        "name": "Энерг.",
        "value": 300
    },
    {
        "name": "Технол.",
        "value": 200
    },

];


export default function Fixes() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Простои оборудования</Title>
            <Grid container spacing={1}>
                <Grid container item xs={12} md={8} lg={9} spacing={3}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Оборудование</TableCell>
                                <TableCell>Время</TableCell>
                                <TableCell>Служба</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{row.service}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
                <Grid container item xs={12} md={4} lg={3} spacing={3}>
                    <ResponsiveContainer>
                        <PieChart
                            margin={{
                                top: 16,
                                right: 16,
                                bottom: 16,
                                left: 16,
                            }}>
                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="80%"
                                 fill="#8884d8" label/>
                            {/*<Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60}*/}
                            {/*     outerRadius={80} fill="#82ca9d" label/>*/}
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                </Grid>

            </Grid>


            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Посмотреть все
                </Link>
            </div>
        </React.Fragment>
    );
}
