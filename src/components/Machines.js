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
function createData(id, name, speed, kmv) {
    return {id, name, speed, kmv};
}

const rows = [
    createData(0, 'FrigecoCu', '132 м/мин', '0.76'),
    createData(1, 'FrigecoAl', '65 м/мин', '0.9'),
    createData(2, 'Matraff', '86 м/мин', '0.4' ),
    // createData(3, 'FrigecoSLP120#1', '0 м/мин', '0.1'),
    // createData(4, 'FrigecoSLP120#2', '32 м/мин', '0.3'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(4),
    },
}));

export default function Machine() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Оборудование</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Оборудование</TableCell>
                        <TableCell>Скорость</TableCell>
                        <TableCell>КМВ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.speed}</TableCell>
                            <TableCell>{row.kmv}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="/machine" >
                    Посмотреть все
                </Link>
            </div>
        </React.Fragment>
    );
}
