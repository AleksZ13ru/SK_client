import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import {Link as RouterLink} from 'react-router-dom';

function ListItemLink(props) {
    const {icon, primary, to} = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
                // See https://github.com/ReactTraining/react-router/issues/6056
                <RouterLink to={to} {...itemProps} innerRef={ref}/>
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    );
}

export const mainListItems = (
    <div>
        <List>
            <ListItemLink to="/machines" primary="Оборудование" icon={<DashboardIcon/>}/>
            <ListItemLink to="/fix" primary="Простои" icon={<PeopleIcon/>}/>
            <ListItemLink to="/analytics" primary="Аналитика" icon={<BarChartIcon/>}/>
            <ListItemLink to="/plan" primary="Планирование" icon={<LayersIcon/>}/>
        </List>
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <DashboardIcon/>*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Оборудование"/>*/}
        {/*</ListItem>*/}
        {/*/!*<ListItem button>*!/*/}
        {/*/!*  <ListItemIcon>*!/*/}
        {/*/!*    <ShoppingCartIcon />*!/*/}
        {/*/!*  </ListItemIcon>*!/*/}
        {/*/!*  <ListItemText primary="Orders" />*!/*/}
        {/*/!*</ListItem>*!/*/}
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <PeopleIcon/>*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Заявки на ремонт"/>*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <BarChartIcon/>*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Аналитика"/>*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <LayersIcon/>*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Планирование"/>*/}
        {/*</ListItem>*/}
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Отчеты</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Отчеты"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Отчеты"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Отчеты"/>
        </ListItem>
    </div>
);
