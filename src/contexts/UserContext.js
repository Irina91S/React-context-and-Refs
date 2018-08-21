import React, { Component } from 'react';

export const UserContext  = React.createContext();

export class UserProvider extends Component {
    state = {
        name: "Irina",
        age: 27
    }

    setName = () => {
        this.setState({
            name: "Eureka"
        })
    }

     render(){
         return (
            <UserContext.Provider value={{
                ...this.state,
                setName: this.setName
            }}>
                {this.props.children} 
            </UserContext.Provider>
        );
     }
 }