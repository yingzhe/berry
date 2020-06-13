import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
//import { level2 } from 'level2';

export function level1() {
    console.log(`level1`);
    ReactDOM.render(<PrimaryButton>Level1 button.</PrimaryButton>, document.getElementById('root1'));
    //level2();
}
