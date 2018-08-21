import React from 'react';
import Main from './Main';
import { UserContext }from '../../contexts/UserContext';

export default props => (
    <UserContext.Consumer>
        { ({setName}) => (
            <Main 
                {...props}
                setName={setName}
            />
        ) }
    </UserContext.Consumer>
);