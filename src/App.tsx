import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Item[]>([]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    }
    else {
      alert("Please enter a todo item.");
    }

    setNewTodo("");
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', width: '100vw',marginTop:10 }}>
        <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{textAlign:'center'}}>Todo List</h1>
          <ol>
            {todos.map((todo) => (
              <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none", color:todo.completed?'green':'black',fontWeight:'700',fontSize: 20, fontFamily: 'sans-serif' }}>
                {todo.text} {todo.completed ? "(completed)" : ""}
              </li>
            ))}
          </ol>
          <input
            type="text"
            placeholder="Add a new new item"
            value={newTodo}
            style={{ height: '4vh', borderRadius: 10, marginRight: 10 }}
            onChange={handleNewTodoChange}
          />
          <button onClick={handleNewTodo} >Add Item</button>
        </div>
      </div>
    </>
  );
};

export default App;