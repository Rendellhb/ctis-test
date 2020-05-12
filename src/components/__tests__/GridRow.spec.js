/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import GridRow from "../GridRow";

it('renders correctly', () => {
    const tree = renderer.create(<GridRow />).toJSON();
    expect(tree).toMatchSnapshot();
})