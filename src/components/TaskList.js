import Task from "./Task"
import { v4 as uuid } from "uuid"

function TaskList({tasks, clicked, setTasks}) {

  const taskList = tasks.filter(task => !clicked||clicked==="All"?true:task.category === clicked).map(task => <Task text={task.text} category={task.category} key={uuid()} setTasks={setTasks} tasks={tasks}/>)

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
