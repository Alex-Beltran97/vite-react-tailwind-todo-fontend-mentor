import { Filter } from "../utils/enums";

type Props = {
  filter: Filter;
  handleChangeFilter: (filter: Filter) => void;
};

const TodoFilter = ({ handleChangeFilter, filter }: Props) => {
  
  const handleClassState = (filterVal: Filter): string => filter === filterVal ? `text-blue-600` : "hover:text-blue-600";

  return (
    <>
      <section className="container mx-auto mt-8 flex justify-center gap-4 rounded bg-white p-4 dark:bg-gray-800 dark:text-gray-400 transition-all duration-1000">
        <button 
          className={handleClassState(Filter.All)}
          onClick={() => handleChangeFilter(Filter.All)}
        >All</button>
        <button
          className={handleClassState(Filter.Active)}
          onClick={() => handleChangeFilter(Filter.Active)}
        >Active</button>
        <button 
          className={handleClassState(Filter.Completed)}
          onClick={() => handleChangeFilter(Filter.Completed)}
        >Completed</button>
      </section>
    </>
  );
};

export default TodoFilter;
