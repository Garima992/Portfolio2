import * as React from 'react';
import "@testing-library/jest-dom";
import {cleanup, render, fireEvent} from "@testing-library/react";
import TestElements from '../Pages/TestComponent';

afterEach(cleanup);

// Checking if text exists
it("should equal to 0", ()=>{
    const renderElement=render(<TestElements/>);
    expect(renderElement.getByTestId("counter")).toHaveTextContent(0);
});

// Checking if button is disabled

it("check if button is disabled", ()=>{
    const renderElement=render(<TestElements/>);
    expect(renderElement.getByTestId("button-down")).toBeDisabled();
})

// Fire event in test

it("checking working of button", ()=>{
    const renderElement=render(<counter/>);
    fireEvent.click(renderElement.getByTestId("button-up"));
    expect(renderElement.getByTestId("counter-text")).toHaveTextContent(1);
})