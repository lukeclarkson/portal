import React, {Fragment} from 'react';

// Import routing components
import {Route, Switch} from 'react-router-dom';

// Import custom components
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import Staff from '../containers/staff/StaffContainer';

import Client from '../containers/client/ClientContainer';
import AddClient from '../containers/client/AddClientContainer.js';

import Authentication from './Authentication';

const Router = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={LoginForm}/>

            <MainLayout>
                <Switch>
                    <Authentication path="/dashboard" component={Dashboard}/>
                    
                    <Authentication path="/staff/list" component={Staff}/>
                    <Authentication path="/signup" component={SignUpForm}/>
                    <Authentication path="/staff/edit/:id" component={SignUpForm}/>
                
                    <Authentication path="/Clients/list" component={Client}/>
                    <Authentication path="/Clients/Add" component={AddClient}/>
                    <Authentication path="/Clients/Edit/:id" component={AddClient}/>
                
                </Switch>
            </MainLayout>

            <Route component={NotFound}/>
        </Switch>
    </Fragment>
);

export default Router;
