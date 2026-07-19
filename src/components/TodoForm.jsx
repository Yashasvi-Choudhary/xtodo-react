import { useState } from "react";

function TodoForm({ onAddTodo, onCloseForm }) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleSave() {
    if (title.trim() === "") {
      return;
    }

    onAddTodo(title);
    setTitle("");
    onCloseForm();
  }

  function handleCancel() {
    setTitle("");
    onCloseForm();
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow ">
      <h1 className="text-xl font-bold mb-4">Create a Todo</h1>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        placeholder="Enter a new todo..."
        className=" border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <div className="flex  space-x-2 mt-4 gap-4">
        <button
          onClick={handleSave}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400  font-bold py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default TodoForm;
