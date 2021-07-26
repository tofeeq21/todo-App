import React from 'react'
// get the actionCreators by useing useDispatch hook
import { useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../src/state/';
import { useState } from 'react'

const AddTask = () => {

    const [task,setTask] = useState({id: "",text: "",date: new Date()});

    const dispatch = useDispatch();
  
    const {addTask} = bindActionCreators(actionCreators,dispatch);
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!task.text ){
        alert("please add a task");
        return;
      }
      
      if(task.date < new Date()){
        alert("please add a date");
        return
      }
        addTask(task);
        setTask({id: "",text: "", date: new Date()});
    }
  
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTask({...task, [e.currentTarget.name]: e.currentTarget.value})
    }

    return (
      <form className="add-Form" onSubmit={onSubmit}>
        <div className="addTask">
          <input className="btn-add" type="submit" value="+" />
          <div className="inputs">
            <div className="form-control">
              <label>Task:</label>
              <input
                type="text"
                name="text"
                value={task.text}
                onChange={changeHandler}
                placeholder="Add Task"
              />
            </div>
            <div className="form-control">
              <label>Date & Time:</label>
              <input
                type="date"
                name="date"
                value={task.date.toString()}
                onChange={changeHandler}
                placeholder="Add Date & Time"
              />
            </div>
          </div>
        </div>
      </form>
    );
}

export default AddTask
