const initialState = {
    transactions: {
        destinationAddresses: {
            addressLocations:{}
        }
    },
    trackNumber: ""
};

function LandingPageReducer(state = initialState, action) {
    const {type, transactions, trackNumber} = action;
    console.log("STATE BEFORE", state.addUser);
    switch (type) {
        case 'TRACK_SUCCESS':
            return {...state, transactions};
        case 'HANDLE_TRACK_NUMBER':
            return {...state, trackNumber};
        default:
            return state;
    }
}

export default LandingPageReducer;
