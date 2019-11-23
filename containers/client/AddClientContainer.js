import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store, {history} from '../../store/configureStore';

import {CLIENTS} from '../../constants/entity'
import * as crudAction from '../../actions/crudAction'

// Import custom components
import AddClientForm from '../../components/client/AddClientForm.js';
import {httpBase} from '../../utils/httpBaseUtil';

class AddClientContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.updateItem = this.updateItem.bind(this);

        this.state = {
            isFetching: true,
            userData: [],
            id: null
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params

        if(id){
            httpBase().get('clients/'+id)
                .then((response) => {
                    this.setState({ userData: response.data.data, isFetching: false, id: id })
                })
                .catch((error) => {
                    console.log('Error: ',error);
                });
        }else{
            this.setState({isFetching: false })
        }
    }


    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {

        this.props.actions.submitForm(CLIENTS, formProps);
    }

    /**
     * Submit Update form.
     *
     * @param {object} formProps
     */
    updateItem(formProps) {
      
        this.props.actions.updateItem(CLIENTS, formProps, formProps.id);
    }


    // handleDateChange = date => {
    //     setSelectedDate(date);
    // };
    
    render() {

            // The first commit of Material-UI
        // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

        if (this.state.isFetching){
            return(<p> Loading...</p>)
          }
       
        if(this.state.id){
            return (
                <AddClientForm
                    initialValues={this.state.userData}
                    onSubmit={this.updateItem}
                    match={this.props.match}
                />
            );
        }else{
            return (
                <AddClientForm
                    onSubmit={this.submitForm}
                    match={this.props.match}
                />
            );
        }
    }

}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(AddClientContainer)