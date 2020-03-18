import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Dashboard from "./views/Dashboard";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
// import Machines from "./components/Machine/Machines";
// import Machine from "./components/Machine/Dashboard_machine";
// import Dashboard_fix from "./components/Dashboard_fix";
// import Dashboard_plan from "./components/Dashboard_plan";
// import Dashboard_analytics from "./components/Dashboard_analytics";

function App() {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <Router>
                <div className="App">
                    <Dashboard/>
                    {/*<Switch>*/}
                    {/*    <Route exact path="/analytics" component={Dashboard_analytics}/>*/}
                    {/*    <Route exact path="/plan" component={Dashboard_plan}/>*/}
                    {/*    <Route exact path="/fix" component={Dashboard_fix}/>*/}
                    {/*    <Route exact path="/machines" component={Dashboard_machine}/>*/}
                    {/*    <Route exact path="/" component={Dashboard}/>*/}
                    {/*</Switch>*/}
                </div>
            </Router>
        </MuiPickersUtilsProvider>
    );
}

export default App;
