import { Todo } from '../types';
import IconCheck from './icons/IconCheck';
import IconCross from './icons/IconCross';

type Props = {
  todo: Todo;
  handleRemoveTodo: (id: number) => void;
  handleUpdateTodo: (id: number) => void;
};

const TodoItem = ({ todo, handleRemoveTodo, handleUpdateTodo }: Props) => {
  const { id, title, completed }: Todo = todo;

  return (
    <>
      <article>
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed
              ? 'grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
              : 'inline-block'
          }`}
          onClick={ () => handleUpdateTodo(id) }
        >
          {completed && <IconCheck />}
        </button>
        <p className={`grow text-gray-600 dark:text-gray-400 transition-all duration-1000 ${completed && 'line-through'}`}>
          {title}
        </p>
        <button className="flex-none" onClick={ ()=> handleRemoveTodo(id) }>
          <IconCross />
        </button>
      </article>
    </>
  );
};

export default TodoItem;
