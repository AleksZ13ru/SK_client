import React, {Fragment} from 'react';
// import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Card} from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import StatusIcon from "../StatusIcon/StatusIcon";

import {Query} from 'react-apollo'
import {loader} from 'graphql.macro';
// import Link from "@material-ui/core/Link";

const MACHINES_QUERY = loader('./MACHINES_QUERY.graphql');

const statusColors = {
    green: 'success',
    blue: 'info',
    red: 'danger'
};

// Generate Order Data
// function createData(id, name, speed, kmv, status_color) {
//     return {id, name, speed, kmv, status_color};
// }

// const rows = [
//     createData(0, 'FrigecoCu', '132 м/мин', '0.76', 'blue'),
//     createData(1, 'FrigecoAl', '65 м/мин', '0.9', 'red'),
//     createData(2, 'Matraff', '86 м/мин', '0.4', 'green'),
//     createData(3, 'FrigecoSLP120#1', '0 м/мин', '0.1'),
//     createData(4, 'FrigecoSLP120#2', '32 м/мин', '0.3'),
// ];

// function preventDefault(event) {
//     event.preventDefault();
// }

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(4),
    },
}));

export default function MachineAll() {
    const classes = useStyles();
    const cellClicked = (rowNumber, columnId) => {
        console.log('cell clicked!');
        alert('cell clicked!')
    };
    const handleClick = (id, column) => {
        return (event) => {
            console.log(`You clicked on row with id ${id}, in column ${column}.`);
        }
    }
    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    {/*<TableCell><WarningIcon fontSize="small" color="error"/></TableCell>*/}
                    <TableCell></TableCell>
                    <TableCell>Оборудование</TableCell>
                    <TableCell>Скорость, м/мин</TableCell>
                    <TableCell>КМВ, %</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <Query query={MACHINES_QUERY}>
                    {({loading, error, data}) => {
                        if (loading) return <div>Fetching</div>;
                        if (error) return <div>Error</div>;
                        const values = data.values.edges;

                        return (
                            <Fragment>
                                {values.map((value, index) => (
                                    <TableRow
                                        key={value.node.machine.id}
                                        onClick={handleClick(value.node.machine.id, "calories")}
                                    >
                                        <TableCell>
                                            <div className={classes.statusContainer}>
                                                <StatusIcon
                                                    className={classes.status}
                                                    color={statusColors[value.node.status]}
                                                    size="sm"
                                                />
                                                {/*{value.node.status}*/}
                                            </div>
                                        </TableCell>
                                        <TableCell
                                        >
                                            {/*<Link href="#">*/}
                                            {value.node.machine.name}
                                            {/*</Link>*/}
                                        </TableCell>
                                        <TableCell>{value.node.speed}</TableCell>
                                        <TableCell>{value.node.kmv}</TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>

                        )
                    }}

                </Query>
            </TableBody>
        </Table>


    );
}
