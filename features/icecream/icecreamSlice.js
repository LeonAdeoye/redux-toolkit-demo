const {cakeActions} = require("../cake/cakeSlice");
const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState =
{
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) =>
        {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }
    },
    // Add an extra reducer to the slice to handle the cake ordered action
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--;
        });
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
