import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { userActions } from '../../.././actions/user.actions';
import '../../.././styles/LoginPage.scss'

class HomePage extends Component {
    
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return () => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <React.Fragment>
                <h1 className="bg-dark text-white text-center">Hi {user.firstName}!</h1>
                <p className="text-center bg-light">You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul className="list-group list-group-flush">
                        {users.items.map((user, index) =>
                            <li key={user.id} className="list-group-item">
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <NavLink to="/login" className="btn btn-outline-success my-button my-5 ml-3">Logout</NavLink>
                </p>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };