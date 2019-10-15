// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';


test('Gate opened or closed button', () => {
    const setToggleclosed = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={setToggleclosed} closed={false}/>
    );
    const closedGate = getByText(/close gate/i);
    fireEvent.click(closedGate);
    expect(setToggleclosed).toHaveBeenCalled();
    
})