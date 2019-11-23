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
    // static contextTypes = {
    //     redux: React.PropTypes.object
    //   }
    
    state = {
        id: 0,
        first: 'initial value',
        last: '',
        email: '',
        phone: '',
        location: '',
        hobby: ''
      }

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.state = {
            isFetching: true,
            userData: []
        };
    }

    componentDidMount(){
        // new Promise((resolve, reject) => {
                                
            // httpBase().get('clients/'+2)
            //     .then((response) => {
            //         this.setState({ userData: response.data.data, isFetching: false })
            //         store.dispatch(response.data.data,'ENTITY_FETCH');
            //         console.log('single user:',this.state.userData);
            //     })
            //     .catch((error) => {
            //         console.log('Error: ',error);
            //     });

            // });
        // this.setState({ first: 'azim' })
        // store.dispatch(userData);
        // console.log(store.getState());
        // const userData = crudAction.fetchById('clients',2);
        // console.log(userData);
        this.props.fetchById(2).then((response) => {
                   console.log('response: ',response) ;
                })
                .catch((error) => {
                    console.log('Error: ',error);
                });

            
        this.setState({isFetching: false })
        // console.log('props after fetching :',this.props);
    }

    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {

        this.props.actions.submitForm(CLIENTS, formProps);
    }

    
    render() {
        
        if (this.state.isFetching){
            return(<p> Loading...</p>)
          }
        return (
            <AddClientForm
                onSubmit={this.submitForm}
                userData = {this.state.userData}
            />
        );
    }

}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
    fetchById: clientID => dispatch(crudAction.fetchById('clients',clientID))
});

export default connect(null, mapDispatchToProps)(AddClientContainer)