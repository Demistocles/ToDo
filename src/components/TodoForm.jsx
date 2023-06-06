import { useState } from 'react';

const TodoForm = ({ AddTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    AddTodo(value, category);
    setCategory('');
    setValue('');
  } 

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handlesubmit}>
        <input
        value={value}
          type='text'
          placeholder='Digite o título'
          onChange={e => setValue(e.target.value)}  
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>Digite a Categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Estudos'>Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm;
