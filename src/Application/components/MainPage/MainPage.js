import React  from "react";
import './MainPage.css';
import User from './User/index';
import Button from '../Shared/Button/Button';

 const MainPage = (props) => {
        return (
            <div className="main">
                <User/>
                <Button onClick={props.setName} className="Button">Change user</Button>
            </div>
        );
}
export default MainPage;
 