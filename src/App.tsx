import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div
        className={`
          min-h-screen
          bg-gray-300
          bg-[url(./assets/images/bg-mobile-light.jpg)]
          bg-contain
          bg-no-repeat
        `}
      >
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1
              className={`
                text-2xl
                font-semibold
                uppercase
                tracking-[.51em]
                text-white
              `}
            >
              Todo
            </h1>
            <MoonIcon className="fill-red-700" />
          </div>
          <form
            className={`
              mt-8
              flex
              items-center
              gap-4
              overflow-hidden
              rounded-md
              bg-white
              px-4
              py-2
              `}
          >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
              className="container text-gray-400 outline-none"
              type="text"
              placeholder="Create a new todo..."
            />
          </form>
        </header>
        <main className="container mx-auto mt-8 px-4 ">
          <div className="rounded-md bg-white [&>article]:p-4 [&>article]:flex [&>article]:gap-4 [&>article]:border-b [&>article]:items-center">
            <article>
              <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
              <p className="text-gray-600 grow">
                Complete online JavaScript course in BluuWeb
              </p>
              <CrossIcon />
            </article>
            <article>
              <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
              <p>Complete online JavaScript course in BluuWeb</p>
              <CrossIcon />
            </article>
            <article>
              <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
              <p>Complete online JavaScript course in BluuWeb</p>
              <CrossIcon />
            </article>
            <section className="p-4 text-gray-400 flex justify-between">
              <span>5 items left</span>
              <button>Clear Completed</button>
            </section>
          </div>

          <section className="container mx-auto p-4 bg-white mt-8 rounded flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </section>

          <p className="text-center mt-8 pb-8">Drag and drop to reorder list</p>
        </main>
      </div>
    </>
  );
};

export default App;
