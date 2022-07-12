import { useState } from "react";
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { List } from "./components/List/List"

interface Task {
  content: string;
  isCompleted: boolean;
}

export const App = () => {
  const [createdTasks, setCreatedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (content: string) => {
    setTasks([...tasks, { content, isCompleted: false }]);
    setCreatedTasks(createdTasks => createdTasks + 1);
  }
  
  const handleRemoveTask = (content: string) => {
    const updatedTasks = tasks.filter(task => task.content !== content);
    setTasks(updatedTasks);
    setCreatedTasks(createdTasks => createdTasks - 1);
  }

  const handleCompleteTask = (content: string) => {
    const updatedTasks = tasks.map(task => {
      return task.content === content ? { ...task, isCompleted: !task.isCompleted } : task;
    });

    const updatedCompletedTasks = updatedTasks.filter(task => task.isCompleted);

    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks.length)
  }

  return (
    <>
      <Header />
      <Form onCreateTask={handleCreateTask} />
      <List
        createdTasks={createdTasks}
        completedTasks={completedTasks}
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onCompleteTask={handleCompleteTask}
      />
    </>
  )
}
