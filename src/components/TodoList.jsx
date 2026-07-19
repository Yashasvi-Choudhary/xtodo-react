import TodoItem from "./TodoItem";

function TodoList({ title, todos, onToggle }) {
  return (
    <div className="my-6">
      <h2 className="text-3xl text-gray-700 font-bold">{title}</h2>
      {todos.length > 0 ? (
        todos.map(function (todo) {
          return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
        })
      ) : (
        <p className="text-gray-400 text-lg pt-6"> No Todos here!</p>
      )}
    </div>
  );
}
export default TodoList;
