export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function addTodo(title) {
    return {
        type: ADD_TODO,
        title
    };
}

export function editTodo(id, title) {
    return {
        type: EDIT_TODO,
        id,
        title
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}