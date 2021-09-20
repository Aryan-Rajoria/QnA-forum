export const initialState = {
    user: "Login"
};

// Selector

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "login":
            return ({
                user: action.item
            });
        default:
            return state;
    }
};

export default reducer;