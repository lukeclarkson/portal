import axios from 'axios';

import {loginSuccess, loginFailure, logoutSuccess} from '../actions/authAction';
import history from '../utils/history';
import {API_URL} from '../config/config';
import {setLocalStorage, clearLocalStorage} from '../utils/storageUtil';

export const login = ({email, password}) => {

    return dispatch => {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {
            console.log(response.data);

            dispatch(loginSuccess(response.data.token));

            setLocalStorage('token', response.data.token);
            setLocalStorage('email', response.data.email);
            setLocalStorage('first_name', response.data.first_name);

            history.push('/dashboard');
        })
            .catch((error) => {
                dispatch(loginFailure(error.response.data));
            });
    };
};

export const logout = () => {
    return dispatch => {

        clearLocalStorage('token');
        clearLocalStorage('email');
        clearLocalStorage('first_name');

        dispatch(logoutSuccess());

        history.push('/');

        return false;
    };
};