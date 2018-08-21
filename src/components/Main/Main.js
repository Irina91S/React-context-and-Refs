import React  from "react";
import './Main.css';

 const Main = (props) => {
        return (
            <div className="Main">
                <h1>Main</h1>
                <button
                    className="Button"
                    onClick={props.setName}
                >
                    Change the Username
                </button>
            </div>
        );
}
export default Main;
 