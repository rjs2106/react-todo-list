import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

import styles from "./Form.module.css";

interface FormProps {
  onCreateTask: (task: string) => void
}

export const Form = ({ onCreateTask }: FormProps) => {

  const [task, setTask] = useState('');

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    onCreateTask(task);
    setTask('');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateTask}>
        <input 
          type="text"
          value={task}
          onChange={ event => setTask(event.target.value) }
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button type="submit" disabled={!task.trim()}>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </div>
  )
}