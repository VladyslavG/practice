import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Switch } from '../../../switch/Switch';

export default createBoard({
    name: 'New Board',
    Board: () => <Switch label={'test'} />
});
