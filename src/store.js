import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    campuses: [],
    students: []
};

//action types
const SET_STUDENTS = 'SET_STUDENTS';
const SET_CAMPUSES = 'SET_CAMPUSES';

//action creators
export const setStudents = (students) => ({
    type: SET_STUDENTS,
    students
})
export const setCampuses = (campuses) => ({
    type: SET_CAMPUSES,
    campuses
})

// THUNKS
export const getStudents = () => {
    return (async dispatch => {
        const Response = await axios.get('/api/students');
        const students = Response.data;
        const action = setStudents(students)
        dispatch(action)
    })
}
export const getCampuses = () => {
    return (async dispatch => {
        const Response = await axios.get('/api/campuses');
        const campuses = Response.data;
        const action = setCampuses(campuses)
        dispatch(action)
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAMPUSES: return { ...state, campuses: action.campuses }
        case SET_STUDENTS: return { ...state, students: action.students }
        default: return state
    }
}

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
    )
);

