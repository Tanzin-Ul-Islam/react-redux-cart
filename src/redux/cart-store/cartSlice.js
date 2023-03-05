import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartList: (localStorage.getItem('cartList') && localStorage.getItem('cartList') != 'null') ? JSON.parse(localStorage.getItem('cartList')) : [],
    cartCounter: cartCounterValue(),
}

function cartCounterValue() {
    let counter = 0;
    if (localStorage.getItem('cartList') && localStorage.getItem('cartList') != 'null') {
        let cartValue = JSON.parse(localStorage.getItem('cartList'));
        for (let i = 0; i < cartValue.length; i++) {
            counter = counter + cartValue[i].quantity;
        }
        return counter;
    } else {
        return 0;
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let { data, quantity } = action.payload;
            let duplicate = false;
            state.cartList.forEach((el, index) => {
                if (el.data.id == data.id) {
                    state.cartList[index].quantity = state.cartList[index].quantity + quantity;
                    state.cartCounter = state.cartCounter + quantity;
                    duplicate = true;
                }
            });
            if (duplicate == true) {
                console.log('duplicate ok');
                localStorage.setItem('cartList', JSON.stringify(state.cartList));
            } else {
                console.log('new ok');
                state.cartList.push({ data: data, quantity: quantity });
                state.cartCounter = state.cartCounter + quantity;
                localStorage.setItem('cartList', JSON.stringify(state.cartList));
            }

        },

        increaseCount: (state, action) => {
            let index = action.payload;
            state.cartList[index].quantity = state.cartList[index].quantity + 1;
            state.cartCounter = state.cartCounter + 1;
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        },

        decreaseCount: (state, action) => {
            let index = action.payload;
            if (state.cartList[index].quantity > 1) {
                state.cartList[index].quantity = state.cartList[index].quantity - 1;
                state.cartCounter = state.cartCounter - 1;
                localStorage.setItem('cartList', JSON.stringify(state.cartList));
            }
        },

        removeFromCart: (state, action) => {
            let index = action.payload;
            let item = state.cartList[index]
            state.cartCounter = state.cartCounter - item.quantity;
            state.cartList.splice(action.payload, 1);
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, increaseCount, decreaseCount, removeFromCart } = cartSlice.actions

export default cartSlice.reducer