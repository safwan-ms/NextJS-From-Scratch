import { db } from "@/utils/db";
import * as actions from "@/actions/index";
import SaveButton from "@/components/SaveButton";

const Home = async () => {
  const data = await db.todo.findMany({
    select: {
      input: true,
      id: true,
    },
  });
  console.log("------------------------------", data);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 ">
        <form action={actions.createTodo} className="flex flex-col gap-4">
          <input
            type="text"
            name="input"
            placeholder="Add a new Todo..."
            className="px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {data.map((todo) => (
            <form
              key={todo.id}
              action={actions.editTodo}
              className="flex items-center justify-between space-x-4"
            >
              <input type="hidden" name="inputId" defaultValue={todo.id} />
              <input
                type="text"
                name="input"
                defaultValue={todo.input}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />

              <div className="flex space-x-2">
                <SaveButton />
                <button
                  className="bg-red-500 cursor-pointer text-white py-1.5 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  formAction={actions.deleteTodo}
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
