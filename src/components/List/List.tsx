import { Clipboard } from "../../Icons/Clipboard";
import { ListItem } from "../ListItem/ListItem";
import styles from "./List.module.css";

interface Task {
  content: string
  isCompleted: boolean;
}

interface ListHeaderProps {
  createdTasks: number,
  completedTasks: number,
}

interface ListProps {
  createdTasks: number,
  completedTasks: number,
  tasks: Task[],
  onRemoveTask: (content: string) => void;
  onCompleteTask: (content: string) => void;
}

const ListHeader = ({createdTasks, completedTasks}: ListHeaderProps) => {
  return (
    <div className={styles.header}>
      <p className={styles.created}>
        Tarefas criadas
        <span>{createdTasks}</span>
      </p>
      <p className={styles.completed}>
        Concluídas
        <span>{completedTasks}</span>
      </p>
    </div>
  )
}

const ListEmpty = () => {
  return (
    <div className={styles.empty}>
      <Clipboard />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

export const List = ({ createdTasks, completedTasks, tasks, onRemoveTask, onCompleteTask }: ListProps) => {
  return (
    <>
      <div className={styles.container}>
        <ListHeader
          createdTasks={createdTasks}
          completedTasks={completedTasks}
        />

        <hr className={styles.divider} />

        { 
          tasks.length === 0 && 
          <ListEmpty /> 
        }

        { 
          tasks.length > 0 && tasks.map((task: Task) => {
            return (
              <ListItem 
                key={task.content}
                content={task.content}
                isCompleted={task.isCompleted}
                onRemoveTask={onRemoveTask}
                onCompleteTask={onCompleteTask}
              />
            )
          })
        }      
      </div>
    </>
  )
}