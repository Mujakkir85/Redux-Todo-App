import {ADDED, TOGGLED, DELETED, COLORSELECTED, ALLCOMPLETED, CLEARCOMPLETED} from "./actionType"

export const added = (todoText) =>{
    return{
        type: ADDED,
        payload: todoText

    }
}

export const toggled = (todoId) =>{
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export const colorselected = (todoId, color) => {
    return{
        type: COLORSELECTED,
        payload: {
            todoId: todoId,
            color: color,

            //todoId,
            //color
        }
    }
}
 
export const deleted = (todoId) =>{
    return{
        type: DELETED,
        playload: todoId
    }
}

export const allcompleted = () =>{
    return{
        type: ALLCOMPLETED
    }
}

export const clearcompleted = () =>{
    return{
        type: CLEARCOMPLETED
    }
}