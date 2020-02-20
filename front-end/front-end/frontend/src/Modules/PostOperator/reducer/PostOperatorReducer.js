const initialState = {
    listTransaction: [],
    locations: [],
    users: [],
    findUserByName: [],
    loading: true,

    addTransaction: {
        originName: "",
        destinationName: "",
        email: "",
        operator: {
            id: ""
        },
        packages: {
            itemName: "",
            weight: "",
        },
        originAddress: {
            descriptions: "",
            addressLocations: {
                id: ""
            }
        },
        destinationAddresses: {
            descriptions: "",
            addressLocations: {
                id: ""
            }
        }
    }
};


function PostOperatorReducer(state = initialState, action) {
    console.log("reducer", action);
    console.log("SAVE", state.addTransaction);

    const {
        type,
        listTransaction,
        locations,
        addTransaction,
        users,
        findUserByName
    } = action;


    switch (type) {
        case 'LIST_TRANSACTION':
            return {...state, loading: true, listTransaction};

        case 'SAVE_TRANSACTION':
            return {...state, addTransaction};

        case 'LIST_LOCATION':
            return      {...state, loading: true, locations};

        case 'LIST_USER':
            return {...state, users};

        case 'FIND_USER_BY_NAME':
            return {...state, findUserByName};

        default:
            return state;
    }
}

export default PostOperatorReducer;
