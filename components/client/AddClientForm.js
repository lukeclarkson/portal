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

const AddClientForm = props => {
    const {match, handleSubmit, onSubmit, classes, userData} = props;
    const { id } = match.params;

    return (
        <div>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Paper style={{ padding: 16 }}>
                    <Typography variant="h4">{id ? 'Edit Client' : 'Add Client'}</Typography>
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
                            <Field
                                type="text"
                                name="telephone"
                                component={renderText}
                                label="Phone Number"
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
                        <br />
                        <Grid item sm={12} md={12} lg={6}>
                            <Field
                                type="text"
                                name="present_address"
                                component={renderText}
                                label="Present Address"
                            />
                        </Grid>
                        <Grid item sm={12} md={12} lg={6}>
                            Role
                            <Field
                                type="radio"
                                name="role"
                                component={renderRadioGroupRole}
                                label="Role"
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Typography variant="h5">Company Details</Typography>
                    <br />
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item sm={12} md={6} lg={4}>
                            Active
                            <Field
                                type="radio"
                                name="status"
                                component={renderRadioGroup}
                                label="Active"
                                v1="Yes"
                                v2="No"
                                data={1}
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="seperation_date"
                                component={renderDate}
                                label="Seperation Date"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="company_name"
                                component={renderText}
                                label="Company Name"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="industry"
                                component={renderText}
                                label="Industry"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="website"
                                component={renderText}
                                label="Website"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="business_email"
                                component={renderText}
                                label="Business Email Address"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="fax"
                                component={renderText}
                                label="Fax"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="company_logo"
                                component={renderText}
                                label="Company Logo"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="start_date"
                                component={renderDate}
                                label="Start date with Delonix"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="bb_member"
                                component={renderText}
                                label="BB Member"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <Field
                                type="text"
                                name="referred_by"
                                component={renderText}
                                label="Referred By"
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            Site
                            <Field
                                type="radio"
                                name="site"
                                component={renderRadioGroup}
                                label="Site"
                                v1="Cebu"
                                v2="Duma"
                                data={1}
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
        'password',
        'company_name'
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

AddClientForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'AddClientForm', // a unique identifier for this form
    validate: validateSignUp // ←Callback function for client-side validation
    // initialValues: {
    //     first_name: props.userData
    // }
})(withStyles(styles)(AddClientForm))