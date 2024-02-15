import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        id: 1,
        name: 'Carrot',
        description: 'Fresh salad from local farmers',
        canExpire: 'true',
        expiryDate: '2024-02-28',
        category: 'Vegetables',
        price: 1.99,
        isOnSpecial: 'false',
    },
    {
        id: 2,
        name: 'Chicken Breast',
        description: 'Lean white meat',
        canExpire: 'true',
        expiryDate: '2024-02-20',
        category: 'Meat',
        price: 5.99,
        isOnSpecial: 'true',
    },
    {
        id: 3,
        name: 'Coffee Table',
        description: 'Wooden table for living room',
        canExpire: 'false',
        expiryDate: null,
        category: 'Furniture',
        price: 99.99,
        isOnSpecial: 'true',
    },
]

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        editProduct: (state, action) => {
           const {id,name,description,canExpire,expiryDate,category,price,isOnSpecial} = action.payload;
           const pid = state.find(product => product.id == id);
           if(pid) {
               pid.name = name;
               pid.description = description;
               pid.canExpire = canExpire;
               pid.expiryDate = expiryDate;
               pid.category = category;
               pid.price = price;
               pid.isOnSpecial = isOnSpecial
           }
        },
        deleteProduct: (state, action) => {
            const {id} = action.payload;
            const pid = state.find(product => product.id == id);
            if(pid) {
                return state.filter(e => e.id !== id)
            }
        },
    },
});


export const { addProduct, editProduct, deleteProduct } = ProductSlice.actions;

export const selectAllProducts = (state) => state.products;

export default ProductSlice.reducer
