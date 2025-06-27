import { Dispatch } from 'redux';

export const fetchUsers = () => async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    try {
        const response = await fetch('https://api.example.com/users'); // Replace with your API URL
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: errorMessage });
    }
};