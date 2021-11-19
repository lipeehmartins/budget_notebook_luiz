import initialState from '../store/initialState';
import * as Actions from './actions';

export const TransactionsReducer = (state = initialState.transactions, action) => {
    switch (action.type) {
        case Actions.FETCH_TRANSACTIONS:
            return {
                ...state,
                ...action.payload.transactions,
            }
        case Actions.ADD_TRANSACTION:
            return {
                ...state,
                errors: {
                    name: null,
                    amount: null,
                }
            }
        case Actions.UPDATE_TRANSACTION:
            return {
                ...state,
                errors: {
                    name: null,
                    amount: null,
                }
            }
        case Actions.DELETE_TRANSACTION:
            return {
                ...state,
                errors: {
                    name: null,
                    amount: null,
                }
            }
        case Actions.ERRORS_TRANSACTION:
            return {
                ...state,
                errors: action.payload.errors.response.data,
            }
        case Actions.FETCH_REPORT_TRANSACTIONS:
            return {
                ...state,
                reports: action.payload.reports
            }
        default:
            return state;
    }
}
