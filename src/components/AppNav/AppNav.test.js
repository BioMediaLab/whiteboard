
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

    test('AppNav get navigation labels', () => {
        const container = render(<AppNav />)
        getByText(container, 'Home');
        getByText(container, 'Courses');
        getByText(container, 'Question Banks');
        getByText(container, 'Media');
        getByText(container, 'Messages');
    })


    test('Home Navigation', () => {
        const container = render(<AppNav />)
        fireEvent.click(getByText(container, 'Home'))
        const elem = getByText(container, 'Home');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/home');
    })

    test('Courses Navigation', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Courses');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/courses');
    })

    test('Question Bank Navigation', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Question Banks');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/question-banks');
    })

    test('Media Navigation', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Media');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/media');
    })

    test('Messages Navigation', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Messages');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/messages');
    })
    
});