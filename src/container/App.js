import React, { Component } from "react";
import './App.css';
import  User  from '../components/User/index';
import  Main  from '../components/Main/index';
import Todo from '../components/Todo/Todo';

class App extends Component {
    render() {
        return (
            <div className="Container">
                <div className="Pages">
                    <Main />
                    <User />
                </div>
                <div>
                    <Todo/>
                </div>
            </div>
        );
    }
}

export default App;