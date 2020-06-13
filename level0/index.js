import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { level1 } from 'level1';

export function level0() {
    console.log(`level0`);
    level1();
    ReactDOM.render(<PrimaryButton>I am a button.</PrimaryButton>, document.getElementById('root0'));
}
