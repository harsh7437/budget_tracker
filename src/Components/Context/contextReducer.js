// Reducer ==> a function that takes in the old state, and an action ==> a new state...
const contextReducer = (state, action) => {
    let transactions; //we need to reassign the variables
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            // filtering out which is not equal to payload and returning the remaining

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            // ... spread operator(add element to begining of object)

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        default:
            return state;
    }
}

export default contextReducer;