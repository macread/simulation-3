const initialState = {
    id: 0,
    username: 'Schblotnik',
    profilePic: 'https://robohash.org/schnlotnick?set=set3'
}

const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        case UPDATE_DISPLAY_NAME: 
            const { id, username, profilePic } = action.payload
            return Object.assign({}, state, { id: id, username: username, profilePic: profilePic })

        default:
        return state;
    }

}

export function updateDisplayName(id, username, profilePic){
    return {
        type: UPDATE_DISPLAY_NAME,
        payload: {id: id, username: username, profilePic: profilePic}
    }
}