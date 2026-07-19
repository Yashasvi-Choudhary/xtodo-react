import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  function handleToggle(id) {
    const updateTodos = todos.map(function (todo) {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updateTodos);
  }

  const pendingTodos = todos.filter(function (todo) {
    return todo.completed === false;
  });

  const completedTodos = todos.filter(function (todo) {
    return todo.completed === true;
  });

  function handleOpenForm() {
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
  }
  function handleRefresh() {
    setTodos([]);
  }

  return (
    <div className=" min-h-screen  px-16 py-10">
      <Header onRefresh={handleRefresh} />
      <div className="flex flex-col items-start justify-center m-20">
        <div className="space-y-6  ">
          <TodoList
            title="Things to do"
            todos={pendingTodos}
            onToggle={handleToggle}
          />
          {showForm ? (
            <TodoForm onAddTodo={handleAddTodo} onCloseForm={handleCloseForm} />
          ) : (
            <button
              onClick={handleOpenForm}
              className="px-4 py-2 text-white font-bold bg-yellow-500 rounded-full hover:bg-yellow-600"
            >
              + Add a Todo
            </button>
          )}
        </div>
        <div>
          <TodoList
            title="Things done"
            todos={completedTodos}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
