import { Trash } from "phosphor-react";
import styles from "./ListItem.module.css";

interface Task {
  content: string;
  isCompleted: boolean;
  onRemoveTask: (content: string) => void;
  onCompleteTask: (content: string) => void;
}

export const ListItem = ({ content, onRemoveTask, onCompleteTask, isCompleted }: Task) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <label className={styles.icon}>
          <input type="checkbox" onChange={() => onCompleteTask(content)} />
        </label>
      </div>

      <div className={isCompleted ? styles.textStriped : styles.text}>
        <p>{content}</p>
      </div>
      <div className={styles.removeIcon}>
        <button onClick={() => onRemoveTask(content)}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  )
}