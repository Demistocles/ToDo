import { useState } from 'react';

import Todo from './components/todo';
import TodoForm from './components/TodoForm';
import Search from './components/search';

import './App.css';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');

  const AddTodo = (text, category) => {
    const newtodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newtodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
    todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo-list">
      {todos
      .filter((todo) =>
        filter === 'all'
        ? true
        : filter === 'completed'
        ? todo.isCompleted
        : !todo.isCompleted
      )
      .filter((todo) => 
        todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())        
        )
      .sort((a, b) => 
        sort === 'asc'
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
      )
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
    <TodoForm AddTodo={AddTodo}/>
  </div>
}

export default App;
