import { combineReducers } from 'redux';
import img from './card_reduser';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const inSt = [1, 2, 3];

function exRed(state = inSt, action) {
    if(action.type === 'example') {
        return [
            ...state,
            action.next
        ]
    }
    return state;
}

const rootReducer = combineReducers({
    exRed,
    img,
    authentication,
    registration,
    users,
    alert 
});

export default rootReducer;