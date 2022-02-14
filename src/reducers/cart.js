
import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var intCount = 0;
            for (var i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    state[i].quantity += 1
                    intCount = 1;
                }
            }
            if (intCount === 0) {
                state.push({
                    product: action.product,
                    quantity: action.quantity,
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            console.log(action.product.name);
            return [...state]
        case types.REMOVE_CART_ITEM:
            for (var n = 0; n < state.length; n++) {
                if (state[n].product.id === action.product.id) {
                    state.splice(state[n].product, 1);
                }
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.UP_AND_DOW_QUANTITY:
            for (var c = 0; c < state.length; c++) {
                if (state[c].product.id === action.product.id) {
                    if (action.upDown === 'up'){
                        state[c].quantity += 1
                    }
                    if (state[c].quantity > 1){
                        if (action.upDown === 'down'){
                            state[c].quantity -= 1
                        }
                    }
                }
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}
export default cart