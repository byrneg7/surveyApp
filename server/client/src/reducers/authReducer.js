import { FETCH_USER } from '../actions/types';

export default function(state = {} , action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false ;    //either an object or empty string -- will return true if one of the possibilities is true (non empty string user model)
        default: 
            return state;
    }
}

