import React, { Component } from 'react';

class ProfileContainer extends Component {

    createOrder = () => {

    }

    render() {

        return (
            <div className="profile">
                <h2>Welcome back, {this.props.user.username}!</h2>
                <h5>Past Orders:</h5>
            </div>
        );
    }

}

export default ProfileContainer;