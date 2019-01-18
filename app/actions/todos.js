export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';

let tempId = 5;

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: tempId++,
        title
    };
}