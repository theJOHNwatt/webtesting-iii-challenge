// Test away!

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Display from './Display';

test('Gate is locked', () => {
    const setLockedMock = jest.fn();
    const setClosedMock = jest.fn();
    const { getByText } = render(<Display locked={setLockedMock} closed={setClosedMock}/>)
    const lockedGate = getByText(/locked/i);
    const closedGate = getByText(/closed/i);
})



