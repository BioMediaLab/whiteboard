/* global render */
import React from 'react'
import AppNav from './AppNav';
import { getByText, fireEvent, cleanup } from '@testing-library/react';


describe("Unit test for AppNav", () => {
    afterEach(cleanup);
    test('AppNav trial', () => {
        const container = render(<AppNav />)
        expect(container.firstChild).toMatchSnapshot();
    })

    test('AppNav get link text', () => {
        const container = render(<AppNav />)
        fireEvent.click(getByText(container, 'Home'))
    })


    // test('AppNav get link icons', () => {
    //     const container = render(<AppNav />)
    //     expect(container.firstChild).toMatchSnapshot();
    // })

    // test('AppNav link click', () => {
    //     const container = render(<AppNav />)
    //     expect(container.firstChild).toMatchSnapshot();
    // })

});