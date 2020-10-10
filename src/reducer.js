export const initialState ={
    basket: [],
};

const reducer = (state, action) => {
    // console.log(action)
    switch(action.type){
        case 'Add_to_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};


export default reducer;
// reducer playes very important part in pushing the data into the data layer