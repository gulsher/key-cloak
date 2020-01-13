import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Manager from "./Manager";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: ""
    };
    console.log(props.keycloak);
    if (props.keycloak.realmAccess) {
      console.log(props.keycloak.realmAccess.roles[0]);
    }
    this.props.keycloak.loadUserInfo().then(userInfo => {
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
        info: props.keycloak
      });
    });
  }

  authPermission() { 
    let array = this.props.keycloak.realmAccess.roles;
    for(var i=1; i<= array.length; i++){
      if(array[i] == "manager"){
        return <Manager />
      }
      else{
        return  <p className="bg-success text-center">this is a user access</p>
      }
    }
}

  render() {
    return (
      <div className="UserInfo">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>ID: {this.state.id}</p>
        {this.authPermission()}
        {/* {((this.props.keycloak.realmAccess.roles[0]) == "manager")? <Manager />: <p className="bg-info">this is a user access</p>} */}
      </div>
    );
  }
}
export default UserInfo;
