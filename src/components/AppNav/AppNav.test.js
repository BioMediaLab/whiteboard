
/* global render */
import React from 'react'
import AppNav from './AppNav';
import { getByText, fireEvent, cleanup } from '@testing-library/react';


describe("AppNav", () => {
    afterEach(cleanup);

    test('Check if all labels are displayed', () => {
        const container = render(<AppNav />)
        getByText(container, 'Home');
        getByText(container, 'Courses');
        getByText(container, 'Question Banks');
        getByText(container, 'Media');
        getByText(container, 'Messages');
    })

    test('Home Page hyperlink and its href', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Home');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/home');
    })

    test('Navigation Page hyperlink and its href', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Courses');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/courses');
    })

    test('QUestion Bank Page hyperlink and its href', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Question Banks');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/question-banks');
    })

    test('Media Page hyperlink and its href', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Media');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/media');
    })

    test('Messages Page hyperlink and its href', () => {
        const container = render(<AppNav />)
        const elem = getByText(container, 'Messages');
        expect(elem).toBeInstanceOf(HTMLSpanElement);
        expect(elem.parentElement).toBeInstanceOf(HTMLAnchorElement);
        expect(elem.parentElement).toHaveAttribute('href', '/messages');
    })
    
});