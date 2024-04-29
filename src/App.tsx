import { useEffect, useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import { Todo } from './types';
import { Filter } from './utils/enums';

const initialStateTodos: Todo[] = [
  {
    id: 1,
    title: 'Complete online JavaScript course in BluuWeb',
    completed: true,
  },
  { id: 2, title: 'Go to the gym', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 4, title: 'Pick up groceries', completed: true },
  { id: 5, title: 'Complete todo app front end mentor', completed: false },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialStateTodos);
  const [todosFiltered, setTodosFiltered] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const handleCreateTodo = (title: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id: number): void => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const handleCleanCompleted = (): void => {
    setTodos([...todos.filter((todo: Todo) => todo.completed === false)]);
  };

  const handleUpdateTodo = (id: number): void => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleComputedItemsLeft = (): number =>
    todos.filter((todo: Todo) => !todo.completed).length;

  const handleChangeFilter = (filter: Filter): void => setFilter(filter);

  const handleFilter = (filterVal: Filter) => {
    if (filterVal === Filter.Active)
      return setTodosFiltered([
        ...todos.filter((todo: Todo) => todo.completed === false),
      ]);
    if (filterVal === Filter.Completed)
      return setTodosFiltered([
        ...todos.filter((todo: Todo) => todo.completed === true),
      ]);
    setTodosFiltered([]);
  };

  useEffect(() => {
    handleFilter(filter);
  }, [todos, filter]);

  return (
    <>
      <div className=" min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat text-xs font-semibold dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] transition-all duration-1000">
        <Header />

        <main className="container mx-auto mt-8 px-4 ">
          <TodoCreate handleCreateTodo={handleCreateTodo} />
          <TodoList
            todos={
              filter === Filter.Active || filter === Filter.Completed
                ? todosFiltered
                : todos
            }
            handleRemoveTodo={handleRemoveTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
          <TodoComputed
            handleComputedItemsLeft={handleComputedItemsLeft}
            handleCleanTodo={handleCleanCompleted}
          />
          <TodoFilter filter={filter} handleChangeFilter={handleChangeFilter} />
        </main>

        <footer className="mt-8 pb-8 text-center text-gray-600 dark:text-gray-400 transition-all duration-1000">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;
