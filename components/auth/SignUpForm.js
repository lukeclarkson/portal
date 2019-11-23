import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {
    withStyles, 
    Divider,
    Paper,
    Typography,
    Grid,
    Button
} from '@material-ui/core';

// Import custom components
import renderText from '../common/form/renderText';
import renderRadioGroup from '../common/form/renderRadioGroup';
import renderRadioGroupRole from '../common/form/renderRadioGroupRole';
import renderDate from '../common/form/renderDate';

const styles = {
    root: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '15%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    card: {
        padding: 20,
        overflow: 'auto'
    },
    cardHeader: {
        textAlign: 'center'
    },
    btnDiv: {
        textAlign: 'center'
    },
    btn: {
        marginTop: 21,
    }
};

const SignUpForm = props => {

    const {match, handleSubmit, onSubmit, classes} = props;
    const { id } = match.params;

    return (
        <div>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Paper style={{ padding: 16 }}>
                    <Typography variant="h4">{id ? 'Edit Staff' : 'Add Staff'}</Typography>
                    <Typography variant="h5">Personal Information</Typography>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="first_name"
                                component={renderText}
                                label="First Name"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="middle_name"
                                component={renderText}
                                label="Middle Name"
                               
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="last_name"
                                component={renderText}
                                label="Last Name"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="email"
                                component={renderText}
                                label="Email"
                            />
                        </Grid>
                        {!id && (
                            <Grid item sm={12} md={6} lg={4}>
                                <Field
                                    type="password"
                                    name="password"
                                    component={renderText}
                                    label="Password"

                                />
                            </Grid>
                        )}
                        
                        <Grid item sm={12} md={6} lg={4}>
                            Active
                            <Field
                                type="radio"
                                name="status"
                                component={renderRadioGroup}
                                label="Active"
                                v1="Yes"
                                v2="No"
                            />
                        </Grid>
                        <br/>
                        <Grid item sm={12} md={12} lg={6}>
                            <Field
                                type="text"
                                name="present_address"
                                component={renderText}
                                label="Present Address"
                            />
                        </Grid>
                        <Grid item sm={12} md={12} lg={6}>
                            <Field
                                type="text"
                                name="provisional_address"
                                component={renderText}
                                label="Provisional Address"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="birth_date"
                                component={renderDate}
                                label="Birth Date"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            Gender
                            <Field
                                type="radio"
                                name="gender"
                                component={renderRadioGroup}
                                label="Gender"
                                v1="Male"
                                v2="Female"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="telephone"
                                component={renderText}
                                label="Telephone"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="mobile"
                                component={renderText}
                                label="Mobile"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="personal_email"
                                component={renderText}
                                label="Personal Email"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="passport"
                                component={renderText}
                                label="Passport"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="civil_status"
                                component={renderText}
                                label="Civil Status"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="sss"
                                component={renderText}
                                label="SSS"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="philhealth"
                                component={renderText}
                                label="Philhealth"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="tin"
                                component={renderText}
                                label="TIN"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="pagibig"
                                component={renderText}
                                label="Pagibig"

                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="kids"
                                component={renderText}
                                label="Kids"

                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item sm={12} md={6} lg={4}>
                            <Button className={classes.btn} type="submit" variant="contained" color="primary">{id ? 'Update Account' : 'Create New Account'}</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    )
};

const validateSignUp = values => {
    const errors = {};

    const requiredFields = [
        'first_name',
        'last_name',
        'email',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)';
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Invalid email address.)';
    }
    return errors
};

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'SignUpForm', // a unique identifier for this form
    validate: validateSignUp // ←Callback function for client-side validation
})(withStyles(styles)(SignUpForm))