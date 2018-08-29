import React from "react";
import Main from './Main';
import { shallow } from 'enzyme';

const cickFn = jest.fn();

describe('Main Compnent', () => {
    it('button click should add new todo item in the list', () => {
        const component = shallow(<Main onClick={cickFn}/>);

        component
            .find('button.Button')
            .simulate('click');
        expect(cickFn).toHaveBeenCalled();
    });
});