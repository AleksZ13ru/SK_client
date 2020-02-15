import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "../Title";
import {Card} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import StatusBullet from "../StatusBullet";
import StatusIcon from "../StatusIcon/StatusIcon";
// import Title from './Title';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import CancelIcon from '@material-ui/icons/Cancel';


const statusColors = {
    green: 'success',
    blue: 'info',
    red: 'danger'
};

// Generate Order Data
function createData(id, name, speed, kmv, status_color) {
    return {id, name, speed, kmv, status_color};
}

const rows = [
    createData(0, 'FrigecoCu', '132 м/мин', '0.76', 'blue'),
    createData(1, 'FrigecoAl', '65 м/мин', '0.9', 'red'),
    createData(2, 'Matraff', '86 м/мин', '0.4', 'green'),
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

export default function Machines() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                // action={
                //     <Button
                //         color="primary"
                //         size="small"
                //         variant="outlined"
                //     >
                //         Новый заказ
                //     </Button>
                // }
                title="Оборудование"
                // subheader="September 14, 2016"
            />
            <Divider/>
            <CardContent>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {/*<TableCell><WarningIcon fontSize="small" color="error"/></TableCell>*/}
                            <TableCell></TableCell>
                            <TableCell>Оборудование</TableCell>
                            <TableCell>Скорость</TableCell>
                            <TableCell>КМВ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <div className={classes.statusContainer}>
                                        <StatusIcon
                                            className={classes.status}
                                            color={statusColors[row.status_color]}
                                            size="sm"
                                        />
                                        {row.status}
                                    </div>
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.speed}</TableCell>
                                <TableCell>{row.kmv}</TableCell>
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
}
