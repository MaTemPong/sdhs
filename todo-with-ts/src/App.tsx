import {ChangeEvent, useState} from 'react';
import Input from './components/input';
import TodoList from './components/TodoList';
import type { Todo } from './types/todo';

import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoName, setTodoName] = useState<Todo['name']>("");
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);

  const handleTodoName = ({target: {value}}: ChangeEvent<HTMLInputElement>)=>{
    setTodoName(value);
    console.log(todoName);
  }

  const handelSearchValue = ({target: {value}}: ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(value);
    console.log(searchValue);
  }

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos(prevState => {
      const filterTodos = [...prevState].filter(todo => todo.id !== id);
      return filterTodos;
    })
  }

  const addTodo = () => {
    setTodos(prevState => [...prevState, {id: uuidv4(), name: todoName}]);
    setTodoName("");
  }

  return (
    <div className="App">
      <Input value={todoName} onChange={handleTodoName}/>
      <button onClick={addTodo}>Todo 추가</button>
      <Input onChange={handelSearchValue}/>
      <TodoList 
        todos={todos} 
        searchValue={searchValue} 
        deleteTodo={handleDeleteTodo}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </div>
  );
}

export default App;
