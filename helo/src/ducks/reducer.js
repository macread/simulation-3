const initialState = {
    id: 0,
    username: 'Schblotnik',
    profilePic: 'https://robohash.org/schnlotnick?set=set3'
}

const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        case UPDATE_DISPLAY_NAME: 
            const { id, username, password } = action.payload
            return Object.assign({}, state, { id: id, userame: username, password: password })

        default:
        return state;
    }

}

export function updateDisplayName(id, username, password){
    return {
        type: UPDATE_DISPLAY_NAME,
        payload: {id: id, username: username, password: password}
    }
}