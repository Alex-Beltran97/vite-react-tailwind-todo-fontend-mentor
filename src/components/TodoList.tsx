import TodoItem from './TodoItem';
import { Todo } from '../types';
type Props = {
  todos: Todo[];
  handleRemoveTodo: (id: number) => void;
  handleUpdateTodo: (id: number) => void;
};

const TodoList = ({ todos, handleRemoveTodo, handleUpdateTodo }: Props) => {
  return (
    <>
      <div className="mt-8 rounded-t-md bg-white [&>article]:flex [&>article]:items-center [&>article]:gap-4 [&>article]:border-b [&>article]:p-4 dark:bg-gray-800 transition-all duration-1000">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} handleRemoveTodo={ handleRemoveTodo } handleUpdateTodo={handleUpdateTodo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
