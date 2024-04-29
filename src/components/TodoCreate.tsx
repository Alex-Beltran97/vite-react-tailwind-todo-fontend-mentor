import { useState } from 'react';

type Props = {
  handleCreateTodo: (title: string) => void;
};

const TodoCreate = ({ handleCreateTodo }: Props) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (!title.trim()) return setTitle("");
    handleCreateTodo(title);
    setTitle("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-2 dark:bg-gray-800 transition-all duration-1000"
      >
        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
        <input
          className="dark:bg-gray-800 container text-gray-400 outline-none transition-all duration-1000"
          type="text"
          placeholder="Create a new todo..."
          name="todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoCreate;
