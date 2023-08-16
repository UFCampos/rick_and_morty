const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case "FILTER":
            const allCharactersCopyFilter = [...state.allCharacters.filter(char => char.gender === action.payload)]

            console.log(initialState);
        return {
                ...state,
                myFavorites: allCharactersCopyFilter
            }
        case "ORDER":
            const allCharactersCopy = [...state.allCharacters]
            allCharactersCopy.sort((a, b) => a.id - b.id)
            console.log(initialState);

            if(action.payload === "D"){
                allCharactersCopy.reverse()
            }
            return {
                ...state,
                myFavorites: allCharactersCopy
            }
        default:
            return state

    }
    
}

export default reducer