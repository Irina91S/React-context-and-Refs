import React from 'react';
import User from './User';
import { UserContext } from '../../../../contexts/UserContext';

export default props => (
    <UserContext.Consumer>
        {({name, age}) => (
            <User 
                {...props}
                name={name}
                age={age}
            />
        )}
    </UserContext.Consumer>
);