import React, {Fragment} from "react";
import MachineItem from "./MachineItem";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import {loader} from "graphql.macro";
import {Query} from "react-apollo";

const MACHINES_QUERY = loader('./Machine/MACHINES_QUERY.graphql');

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MachinesCard() {
    const classes = useStyles();
    return (
        <List component="nav" aria-label="main mailbox folders">
            {/*<Divider/>*/}
            <Query query={MACHINES_QUERY}>
                {({loading, error, data}) => {
                    if (loading) return <div>Fetching</div>;
                    if (error) return <div>Error</div>;
                    const edges = data.values.edges;
                    return (
                        <Fragment>
                            {/*<Divider/>*/}
                            {edges.map((edge, idx) => {
                                    return (
                                        <Fragment key={idx}>
                                            <MachineItem
                                                id={edge.node.machine.id}
                                                title={edge.node.machine.name}
                                                speed={edge.node.speed}
                                                kmv={edge.node.kmv}/>
                                            {/*<Divider/>*/}
                                        </Fragment>
                                    )
                                }
                            )}
                        </Fragment>
                    )
                }}
            </Query>
        </List>

    )
}