import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Facotry function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props -Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);

});

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({success: false});
  const congratsComp = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComp.text()).toBe('');
});

test('renders non-empty congrats message when "success" prop is true', () => {
  const wrapper = setup({secess: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text()).not.toBe('');
});