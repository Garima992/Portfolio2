import * as React from 'react';
import Table from '../Pages/table';
import {cleanup, render, screen} from '@testing-Library/react';

afterEach(cleanup);

it('shouldloadand display the table', async()=>{
    const renderedSnapshot = render(<Table />)
    expect(renderedSnapshot.asFragment(<Table/>)).toMatchSnapshot();
});