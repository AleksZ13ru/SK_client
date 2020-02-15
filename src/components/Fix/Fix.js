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
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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


export default function Fix() {
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
                        Добавить
                    </Button>
                }
                title="Ремонты оборудования"
                // subheader="Января 30, 2020"
            />
            <Divider/>
            <CardContent>
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
            </CardContent>
            <Divider/>
            <CardActions>
                <Button
                    color="primary"
                    size="small"
                    variant="text"
                    href='#'
                >Посмотреть все<ArrowRightIcon/>
                </Button>
            </CardActions>
        </Card>
        // <React.Fragment>
        //     <Title>Простои оборудования</Title>
        //             <Table size="small">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>Оборудование</TableCell>
        //                         <TableCell>Время</TableCell>
        //                         <TableCell>Служба</TableCell>
        //
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {rows.map(row => (
        //                         <TableRow key={row.id}>
        //                             <TableCell>{row.name}</TableCell>
        //                             <TableCell>{row.time}</TableCell>
        //                             <TableCell>{row.service}</TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //     <div className={classes.seeMore}>
        //         <Link color="primary" href="#" onClick={preventDefault}>
        //             Посмотреть все
        //         </Link>
        //     </div>
        // </React.Fragment>
    );
}
