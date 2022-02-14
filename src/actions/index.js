import * as type from './../constants/ActionType'


export const actAddToCart = (product,quantity) => {
    return {
        type : type.ADD_TO_CART,
        product,
        quantity
    }
}


export const actRemoveCartItem = (product) => {
    return {
        type : type.REMOVE_CART_ITEM,
        product,
    }
}

export const actUpAnDownQuantity = (product,quantity,upDown) => {
    return {
        type : type.UP_AND_DOW_QUANTITY,
        product,
        quantity,
        upDown
    }
}


export const actFetchProducts = (products) => {
    return {
        type : type.FETCH_PRODUCTS,
        products,
    }
}

export const actChangeMessage = (message) => {
    return {
        type : type.CHANGE_MESSAGE,
        message,
    }
}