type Props = {
  handleComputedItemsLeft: () => number;
  handleCleanTodo: () => void;
};

const TodoComputed = ({ handleComputedItemsLeft, handleCleanTodo }: Props) => {
  return (
    <>
      <section className="flex justify-between rounded-b-md bg-white p-4 text-gray-400 dark:bg-gray-800 transition-all duration-1000">
        <span>{ handleComputedItemsLeft() } items left</span>
        <button onClick={ handleCleanTodo }>Clear Completed</button>
      </section>
    </>
  );
};

export default TodoComputed;
