// @flow
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, KeyboardTimePicker} from "@material-ui/pickers";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

type Props = {
    open: boolean,
    // carsSelects: Array<string>,
    // cars: Array<Object>,
    onClose: any
}

export default function DialogMachineBuildAdd(props: Props) {
    const [machine, setMachine] = React.useState('');
    const [buildDate, setBuildDate] = React.useState(new Date());
    const [timeStart, setTimeStart] = React.useState(new Date());
    const [timeEnd, setTimeEnd] = React.useState(new Date());
    const [comment, setComment] = React.useState('');

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

    const handlePay = () => {
        console.log('DialogMachineBuildAdd handlePay');
        props.onClose()
    };

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
                            id="machine-name"
                            label="Оборудование"
                            type="text"
                            value={machine}
                            fullWidth
                            onChange={(event) => {
                                setMachine(event.target.value)
                            }}
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
                <Button onClick={handlePay} color="primary">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}