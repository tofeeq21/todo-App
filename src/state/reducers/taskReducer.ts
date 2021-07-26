import { actionType } from "../action-types";
import { Action } from "../../interfaces";
import { TaskType } from "../../interfaces";

interface InitialStateType {
    tasks:TaskType[]
    taskOnEdit: TaskType;
}
const initialState:InitialStateType = {
    tasks: [],
    taskOnEdit : {id:"", text:"", date:new Date()}
}

const taskReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionType.ADD: {
      state.tasks.push(action.payload);
      return {...state};
    }

    case actionType.DELETE: {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      return {...state}
    }

    case actionType.UPDATE: {
        const tk = state.tasks.find(task => task.id === state.taskOnEdit.id)
        if(tk){
          tk.text = state.taskOnEdit.text;
          tk.date = state.taskOnEdit.date;
        }
      return {...state}
    }
    case actionType.EDIT:{
        state =  {...state, taskOnEdit :{
          id : action.payload.id,
          text : action.payload.text,
          date : action.payload.date
        }};
        return {...state}
    }

    default:
      return state;
  }
};

export default taskReducer;
