import React  from "react";
import './MainPage.css';
import User from './User/index';

 const MainPage = (props) => {
        return (
            <div className="Main">
                <h1>Main</h1>
                <button
                    className="Button"
                    onClick={props.setName}
                >
                    Change the Username
                </button>
                <User/>
            </div>
        );
}
export default MainPage;
 