import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core/styles";
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import {makeStyles} from '@material-ui/core/styles';
// import {loader} from "graphql.macro";


import {AUTH_TOKEN} from '../constants'


const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

// const LOGIN_MUTATION = loader('./LOGIN_MUTATION.graphql')
const LOGIN_MUTATION = gql`
    mutation tokenAuth($name: String!, $password: String!) {
        tokenAuth(username: $name, password: $password) {
            token
        }
    }
`;

class SignInPage extends React.Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    };

    render() {
        const {classes} = this.props;
        const {login, password, name} = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Войти
                    </Typography>
                    {/*<form className={classes.form} noValidate>*/}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Имя пользователя"
                        name="name"
                        value={name}
                        onChange={e => this.setState({name: e.target.value})}
                        // autoComplete="email"
                        // autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Password"
                        label="Пароль"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => this.setState({password: e.target.value})}
                        // autoComplete="current-password"
                    />
                    <Mutation
                        mutation={LOGIN_MUTATION}
                        errorPolicy="none"
                        variables={{name, password}}
                        onCompleted={data => this._confirm(data)}
                    >
                        {(mutation, {loading, error}) => (
                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={mutation}
                                >
                                    Войти
                                </Button>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>

                        )}
                    </Mutation>

                    {/*</form>*/}
                </div>
            </Container>
        )
    }

    _confirm = async data => {
        const {token} = data.tokenAuth;
        console.log('token')
        this._saveUserData(token);
        this.props.history.push(`/`);
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default withStyles(useStyles)(SignInPage);