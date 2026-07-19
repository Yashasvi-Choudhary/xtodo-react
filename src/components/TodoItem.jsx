function TodoItem({ todo, onToggle }) {
  function handleCheckboxChange() {
    onToggle(todo.id);
  }
  return (
    <div className="flex items-center space-x-4 mt-4  w-full max-w-md">
      <input
        checked={todo.completed}
        onChange={handleCheckboxChange}
        type="checkbox"
        className="form-checkbox h-5 w-5 accent-yellow-400 bg-white focus:ring-yellow-400"
      />
      <span
        className={
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }
      >
        {todo.title}
      </span>
    </div>
  );
}
export default TodoItem;
