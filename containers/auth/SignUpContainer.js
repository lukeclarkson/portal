import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {USERS} from '../../constants/entity'
import * as crudAction from '../../actions/crudAction'

// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';
import {httpBase} from '../../utils/httpBaseUtil';

class SignUpContainer extends Component {

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
            httpBase().get('users/'+id)
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

        this.props.actions.submitForm(USERS, formProps);
    }

    /**
     * Submit Update form.
     *
     * @param {object} formProps
     */
    updateItem(formProps) {
      
        this.props.actions.updateItem(USERS, formProps, formProps.id);
    }

    render() {
        if (this.state.isFetching){
            return(<p> Loading...</p>)
          }
       
        if(this.state.id){
            return (
                <SignUpForm
                    initialValues={this.state.userData}
                    onSubmit={this.updateItem}
                    match={this.props.match}
                />
            );
        }else{
            return (
                <SignUpForm
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

export default connect(null, mapDispatchToProps)(SignUpContainer)