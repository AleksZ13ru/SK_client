// @flow
import React, {useEffect} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, KeyboardTimePicker} from "@material-ui/pickers";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {loader} from "graphql.macro";
import {Query} from "react-apollo";

const MACHINES_QUERY = loader('./Machine/MACHINES_QUERY_DIALOG_ADD.graphql');

type Props = {
    open: boolean,
    id?: number,
    title?: string,
    // carsSelects: Array<string>,
    // cars: Array<Object>,
    onClose: any
};

const initMachines = [
    {node: {name: '', id: null}}
];

export default function DialogMachineBuildAdd(props: Props) {

    const [id, setId] = React.useState(props.id);
    const [machine, setMachine] = React.useState(props.title);
    const [machineDisable, setMachineDisable] = React.useState(props.title);
    const [locale, setLocale] = React.useState();
    const [area, setArea] = React.useState();
    const [buildDate, setBuildDate] = React.useState(new Date());
    const [timeStart, setTimeStart] = React.useState(new Date());
    const [timeEnd, setTimeEnd] = React.useState(new Date());
    const [comment, setComment] = React.useState('');

    const [machines, setMachines] = React.useState([
        {node: {name: props.title, id: props.id}}
    ]);
    const handleDateChange = date => {
        setBuildDate(date);
    };

    const handleTimeStartChange = date => {
        setTimeStart(date)
    };

    const handleTimeEndChange = date => {
        setTimeEnd(date)
    }

    const handleClose = () => {
        props.onClose();
    };

    const handleAdd = () => {

        // console.log(machines);
        props.onClose()
    };


    // useEffect(()=>{
    //     if (props.title  === undefined){
    //         console.log('props.title === null')
    //     }
    //
    // });

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Добавить сведения о проведенном ремонте</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={4} container justify="space-around">
                        <KeyboardDatePicker
                            autoOk
                            fullWidth
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            // margin="normal"
                            id="build-date"
                            label="Дата ремонта"
                            // aria-owns="ru"
                            value={buildDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} container justify="space-around">
                        <KeyboardTimePicker
                            autoOk
                            minutesStep={5}
                            fullWidth
                            disableToolbar
                            ampm={false}
                            variant="inline"
                            label="Время начала"
                            value={timeStart}
                            onChange={handleTimeStartChange}
                        />
                    </Grid>
                    <Grid item xs={4} container justify="space-around">
                        <KeyboardTimePicker
                            autoOk
                            minutesStep={5}
                            fullWidth
                            disableToolbar
                            ampm={false}
                            variant="inline"
                            label="Время окончания"
                            value={timeEnd}
                            onChange={handleTimeEndChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            shrink
                            variant="outlined"
                            id="machine-name"
                            label="Оборудование"
                            type="text"
                            value={machine}
                            disabled={machineDisable}
                            fullWidth
                            onChange={(event) => {
                                setMachine(event.target.value)
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Query query={MACHINES_QUERY} variables={{"last": props.last}}>
                            {({loading, error, data}) => {
                                if (loading) return <div>Fetching</div>;
                                if (error) return <div>Error</div>;
                                const edges = data.machines.edges;
                                return (
                                    <div>
                                        {setMachines(edges)}
                                    </div>
                                )
                            }}
                        </Query>
                        <Autocomplete
                            id="combo-box-demo"
                            defaultValue={machines[0]}
                            options={machines}
                            getOptionLabel={option => option.node.name}
                            renderInput={params => <TextField {...params} label="Оборудование" variant="outlined"
                                                              value={machine}/>}
                            onChange={(event, value) => {
                                console.log(value);
                                if (value != undefined) {
                                    setId(value.node.id);
                                    setMachine(value.node.name)
                                } else {
                                    setId(null);
                                    setMachine(null)
                                }

                            }}
                            // onClose={event => {
                            //     console.log(event.target.value)
                            // }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="car-comment"
                            label="Описание ремонта"
                            type="text"
                            value={comment}
                            multiline
                            rows="5"
                            rowsMax="10"
                            fullWidth
                            onChange={(event) => {
                                setComment(event.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Отмена
                </Button>
                <Button onClick={handleAdd} color="primary">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}