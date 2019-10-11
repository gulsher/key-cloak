import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Logout extends Component {

    logout() {
        this.props.history.push('/');
        this.props.keycloak.logout();
    }

    render() {
        return (
            <button className="btn btn-primary  mt-4" onClick={ () => this.logout() }>
                Logout
            </button>
        );
    }
}
export default withRouter(Logout);