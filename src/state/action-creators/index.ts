import { Dispatch } from 'redux'
import { Action } from '../../interfaces'
import { actionType } from '../action-types'
import { TaskType } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid';

export const addTask = (task :TaskType) =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: actionType.ADD, 
            payload: {id : uuidv4() , text: task.text, date: task.date}
        })
    }
}

export const deleteTask = (task :TaskType) =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
          type: actionType.DELETE,
          payload: { id: task.id },
        });
    }
}

export const updateTask = () =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: actionType.UPDATE,
        })
    }
}

export const taskOnEdit = (task :TaskType) =>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: actionType.EDIT,
            payload: {id: task.id, text: task.text, date:task.date}
        })
    }
}

