import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, name, time, service) {
    return {id, name, time, service};
}

const rows = [
    createData(0, 'FrigecoCu', '1ч 30 мин', 'ОПЭиИТ'),
    createData(1, 'FrigecoAl', '45 мин', 'РМЦ'),
    createData(2, 'Matraff', '5ч 20мин', 'Технологи'),

];

// function preventDefault(event) {
//     event.preventDefault();
// }

// const useStyles = makeStyles(theme => ({
//     seeMore: {
//         marginTop: theme.spacing(3),
//     },
// }));

// const data01 = [
//     {
//         "name": "ОПЭиИТ",
//         "value": 400
//     },
//     {
//         "name": "РМЦ",
//         "value": 300
//     },
//     {
//         "name": "Энерг.",
//         "value": 300
//     },
//     {
//         "name": "Технол.",
//         "value": 200
//     },
//
// ];


export default function Fix() {
    // const classes = useStyles();
    return (
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

    );
}
