import React, {Component} from 'react';

// Import custom components
import Client from '../../components/client/Client';

class ClientContainer extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Client/>
        )
    }

}

export default ClientContainer;