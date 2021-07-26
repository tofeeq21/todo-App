import React from 'react'
import { actionCreators, State } from '../src/state/';
import { useDispatch ,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useState } from 'react';
import UpdateTask from './UpdateTask';
import Button from './Button'
import { TaskType } from './interfaces';

const Task = () => {

  const [showPopUp,setShowPopUp] = useState(false)
  const tasks = useSelector((state:State) => state.tasks);

  const dispatch = useDispatch();
  const {taskOnEdit,deleteTask} = bindActionCreators(actionCreators,dispatch);

  const Updating = (task: TaskType) => {
    taskOnEdit(task)
    setShowPopUp(!showPopUp)
  }

    return (
      <div>
        <h3>My Tasks:</h3>
        <div className="tasks">
          {tasks.tasks.map((task) => {
            return (
              <div className="task" key={task.id}>
                <div className='task-view'>
                  <h3>{task.text} </h3>
                  <h3>{task.date} </h3>
                </div>
                <div className="updating-btns">
                  <Button
                    color={"#F98404"}
                    onClick={() => deleteTask(task)}
                    text="Remove"
                  />
              
                  <Button
                    color={"#53B8BB"}
                    onClick={() => Updating(task)}
                    text="Update"
                  />
                </div>
              </div>
            );
          })}
          {showPopUp ? (
            <UpdateTask
              currentTask={tasks.taskOnEdit}
              closePopUp={setShowPopUp}
            />
          ) : null}
        </div>
      </div>
    );
}

export default Task
