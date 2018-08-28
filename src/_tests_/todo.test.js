import React from "react";
import Todo from '../components/Todo/Todo';
import renderer from 'react-test-renderer';

test('it should render correctly the Todo componet', () => {
    const component  = renderer.create(
        <Todo/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})



// it('renders correctly', () => {
//     const tree = renderer
//         .create(<Todo/>)
//         expect(tree).toMatchSnapshot();
// })