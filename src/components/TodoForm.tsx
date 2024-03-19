import { useState } from "react";
import TodoItem from "./TodoItem";
import Todo from "../interfaces/Todo";

function TodoForm() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    return;
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    return;
  };
  return (
    <div className="todoForm">
      <h1>What's up?</h1>
      <div className="todoList">
        <input type="text" placeholder="What to do today?" maxLength={25} />
        <button
          onClick={() => {
            const input = document.querySelector("input")!.value;
            if (input === "") {
              return;
            }
            addTodo({
              id: Math.random(),
              text: input,
              completed: false,
            });
            document.querySelector("input")!.value = "";
          }}
          className="submitbtn"
          type="submit"
        >
          Add
        </button>
      </div>
      <div className="todoItems">
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            toggleComplete={() =>
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, completed: !t.completed };
                  }
                  return t;
                })
              )
            }
            toggleDelete={() => {
              deleteTodo(todo.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default TodoForm;
