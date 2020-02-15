import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, date, comment, service, state) {
    return {id, name, date, comment, service, state};
}

const rows = [
    createData(0, 'FrigecoCu', '02 Фев, 2020', 'несколько абзацев', 'ОПЭиИТ','Открыто'),
    createData(1, 'FrigecoAl', '01 Фев, 2020', 'более менее ', 'РМЦ','В работе'),
    createData(2, 'Matraff', '30 Янв, 2020', 'осмысленного текста', 'Технологи','В работе'),
    createData(3, 'FrigecoSLP120#1', '25 Янв, 2020', 'позволяет сделать', 'Энергоцех','Завершено'),
    createData(4, 'FrigecoSLP120#2', '16 Янв, 2020', 'колорит советских времен', 'Технологи','Завершено'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Plans() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Планирование</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Оборудование</TableCell>
                        <TableCell>Дата</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Служба</TableCell>
                        <TableCell align="right">Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.comment}</TableCell>
                            <TableCell>{row.service}</TableCell>
                            <TableCell align="right">{row.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Посмотреть все
                </Link>
            </div>
        </React.Fragment>
    );
}
