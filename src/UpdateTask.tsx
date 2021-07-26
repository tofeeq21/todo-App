import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../src/state/';
import Button from './Button'
import { TaskType } from './interfaces';

type UpdateProps = {
    closePopUp : (setPopUp: boolean) => void;
    currentTask :TaskType ;
}


const UpdateTask = ({currentTask,closePopUp} : UpdateProps) => {

    const [doneUpdating,setDoneUpdating] = useState(false);

    const [updatedTask, setUpdatedTask] = useState(currentTask)
   
    const dispatch = useDispatch();
    const {taskOnEdit, updateTask} = bindActionCreators(actionCreators,dispatch);

    const updating = () => {
       taskOnEdit(updatedTask)
       updateTask()
      setDoneUpdating(true)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdatedTask({...updatedTask, [e.currentTarget.name]: e.currentTarget.value})
      setDoneUpdating(false);
    }
    
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2>Update your task: </h2>
          <form className="form-add">
            <div className="form-control">
              <label>Task:</label>
              <input
                type="text"
                name="text"
                value={updatedTask.text}
                onChange={changeHandler}
              />
            </div>
            <div className="form-control">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={updatedTask.date.toString()}
                onChange={changeHandler}
              />
            </div>
          </form>
          <div className="btns">
            <Button color={'#53B8BB'} onClick={updating} text="Update" />
            <Button
              color={"#F98404"}
              onClick={() => closePopUp(false)}
              text="Close"
            />
          </div>
          {doneUpdating ? (
            <p className="updating">Your task has been updated successfully</p>
          ) : null}
        </div>
      </div>
    );
}

export default UpdateTask
