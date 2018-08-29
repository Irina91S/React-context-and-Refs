import React from 'react'
import renderer from 'react-test-renderer';
import User from './User';

test('User component should render without errors', () => {
    const component  = renderer.create(
        <User/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})