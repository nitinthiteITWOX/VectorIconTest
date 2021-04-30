import React from 'react';
import { App } from './App';
import { create } from 'react-test-renderer';

describe("<App /> snapshot verification", () => {

    /**
     * Method called to verify snapshot for mentioned component
     */
     test(`should work succesfully`, async () => {
        const tree = create(<App />).toJSON();
        await expect(tree).toMatchSnapshot();
});
});